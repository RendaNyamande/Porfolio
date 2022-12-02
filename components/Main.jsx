import React from 'react';
// import { AiOutlineMail} from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
// import {BsFillPersonLinesFill} from 'react-icons/bs';
// import {Element} from 'react-scroll';
// import Link from 'next/image';

const Main = () => {
  return (
    // <>
    // <Element>
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING!</p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I'm <span className='text-[#076678]'>Renda</span>
                </h1>
                <h1 className='py-2 text-gray-700'>
                A Graduate Java Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I'm a passionate, enthusiastic and hardworking problem solver who learnt how to write code years ago.
                    I'm looking to bring to the table creative insights and solutions for real-world problems.
                    I'm always ready to take on new challenges that may quench my thirst for knowledge and create more zeal for creative solutions.
                </p>
                {/* Use this other div for 4 links */}
                {/* <div className='flex items-center justify-between max-w-[330px] m-auto py-4'> */}
                <div className='flex items-center justify-center max-w-[330px] m-auto py-4'>
                    <a href='https://www.linkedin.com/in/renda-nyamande-983245199' target='_blank' rel='noreferrer'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn/>
                        </div>
                    </a>
                    <a href='https://github.com/RendaNyamande' target='_blank' rel='noreferrer'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub/>
                        </div>
                    </a>
                    {/* <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill/>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
    // </Element>
    // </>
  )
}

export default Main