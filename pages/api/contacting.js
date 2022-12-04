
export default function (req, res) {
  require('dotenv').config()
  const PASSWORD = process.env.password
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    // service:"Gmail",
    auth: {
      user: 'rendanyamandeportfolio@gmail.com',
    //   pass: process.env.password,
      pass: process.env.password,
    },
    secure: true,
  });

   const mailData = {
    from: 'rendanyamandeportfolio@gmail.com',
    // to: 'rendanyamandeportfolio@gmail.com',
    to: 'rendanyamande44@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`
  }
    transporter.sendMail(mailData, function (err, info) {
    if(err)
        console.log(err);
    else
        console.log(info);
    })
    console.log(req.body)
    res.send('success')
}