import React from 'react';
import Image from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#458588]'>Skills</p>
        <h2 className='py-4'>What I can do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src = '/assets/skills/html.png' width='64' height={64} alt='/' />
                        {/* <Image src = 'https://cdn-icons-png.flaticon.com/512/732/732212.png' width='64' height={64} alt='/' /> */}
                        {/* <Image src = '/../pages/html.png' width='64' height={64} alt='/' /> */}
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>HTML</h3>
                    </div>

                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src = '/../public/assets/skills/CSS.png' width='64' height='64' alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>CSS</h3>
                    </div>

                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src = '/../public/assets/skills/javascript.png' width='64' height='64' alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>JavaScript</h3>
                    </div>

                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src = '/../public/assets/skills/react.png' width='64' height='64' alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>React</h3>
                    </div>

                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src = '/../public/assets/skills/nextjs.png' width='64' height='64' alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Next Js</h3>
                    </div>

                </div>
            </div>
            {/* <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src = '/../public/assets/skills/python.png' width={64} height={64} alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Python</h3>
                    </div>

                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src = '/../public/assets/skills/flask.png' width={64} height={64} alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Flask</h3>
                    </div>

                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src = '/../public/assets/skills/django.png' width={64} height={64} alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Django</h3>
                    </div>

                </div>
            </div> */}
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src = '/../public/assets/skills/java.png' width='64' height='64' alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Java</h3>
                    </div>

                </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image src = '/../public/assets/skills/github1.png' width='64' height='64' alt='/' />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Github</h3>
                    </div>

                </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Skills