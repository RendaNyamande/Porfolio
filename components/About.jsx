import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#458588]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            My biggest red flag is my battle with workaholism :)
          </p>
          <p className="py-2 text-gray-600">
            I have spent all my life honing my problem solving skills. From
            solving math problems all the way to being addicted to chess I've
            learnt how to approach problems and tackle them. I tend to enjoy
            creating in general, whether it's drawing, playing the piano or
            writing software, creativity is something I value as much as hard
            work.
          </p>
          <br />
          <p className="py-2 text-gray-600">
            I like to describe myself as a problem solver who learnt to code.
            Software development is just a weapon I use to solve problems worth
            solving. It could have been anything... I just like writing code :)
          </p>
          <br />
          <p className="py-2 text-gray-600">
            I want to work with a team that is building the best software
            solutions to solve problems worth solving. A company that keeps up
            with the best ways to build and strives for excellence. Sovtech
            seems like that place for me! The fact that this is the assignment
            we were given gets me excited to join the team. I had a lot of fun
            building this so know I'll be a good fit there :)
          </p>
          <br />
          <Link href="/#projects">
            <p className="text-center py-2 text-[#458588] underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/assets/macbook.jpg"
            width={400}
            height={400}
            max-width="100%"
            alt="A Macbook"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
