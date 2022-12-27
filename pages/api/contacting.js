export default function(req, res) {
  require("dotenv").config();
  const PASSWORD = process.env.password;
  const MAILTRAPPASSWORD = process.env.mailtrappassword;
  const USERNUMBER = process.env.usernumber;
  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "rendanyamandeportfolio@gmail.com",
      pass: process.env.password,
    },
    secure: true,
  });
  ////////////////////////////////////////////////
  // const transport = nodemailer.createTransport({
  //   host: "smtp.mailtrap.io",
  //   port: 2525,
  //   auth: {
  //     user: USERNUMBER,
  //     pass: MAILTRAPPASSWORD,
  //   },
  //   secure: true,
  // });
  // const message = {
  //   from: "rendanyamandeportfolio@gmail.com",
  //   to: "rendanyamande44@gmail.com",
  //   subject: `Message From ${req.body.name}`,
  //   text: req.body.message + " | Sent from: " + req.body.email,
  //   html: `<div>${req.body.message}</div><p>Sent from:
  //   ${req.body.email}</p>`,
  //   // subject: "Hello!",
  //   // text: "This is a test of Mailtrap and Nodemailer. ",
  // };

  // transport.sendMail(message, (err, info) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(info);
  //   }
  // });
  // console.log(req.body);
  // res.send("success");

  /////////////////////////////////////////////
  const mailData = {
    from: "rendanyamandeportfolio@gmail.com",
    to: "rendanyamande44@gmail.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  console.log(req.body);
  res.send("success");
}
