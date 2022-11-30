import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import aboutImage from '/../public/assets/about.jpg';

export const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#458588]'>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600'>//My biggest red flag is my battle with workaholism :)</p>
                <p className='py-2 text-gray-600'>
                    I have spent all my life honing my problem solving skills.
                     From solving math problems all the way to being addicted to
                      chess I've learnt how to approach problems and tackle them.
                </p><br />
                <p className='py-2 text-gray-600'>
                    I like to describe myself as a problem solver who learnt to code.
                     Software development is just a weapon I use to solve problems worth solving.
                      It could have been anything... I just like writing code :)
                </p><br />
                <p className='py-2 text-gray-600 underline cursor-pointer'>
                Check out some of my latest projects
                </p>
            </div>
            <div className='w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src="/../public/assets/macbook.jpg" width={125} height={50} alt=''></img>
                {/* <img className='rounded-xl' src="" width={125} height={50} alt=''></img> */}
                {/* <Image className='rounded-xl' src={aboutImage} width={125} height={50} alt='/' /> */}
            </div>
        </div>
    </div>
  )
}

export default About;
