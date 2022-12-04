import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { AiOutlineMail} from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
// import {BsFillPersonLinesFill} from 'react-icons/bs';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi';
import { useState } from 'react';
import Success from './Success';

const Contact = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => { 
        e.preventDefault()

        console.log('Sending')
        let data = {
            name,
            phoneNumber,
            email,
            subject,
            message
        }

        fetch('/api/Contacting', {
            method: 'POST',
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((/*res**/) => {
            console.log('Response received')
            if (res.status === '250') {
                console.log('Response succeeded!')
                setSubmitted(true)
                setName('')
                setPhoneNumber('')
                setEmail('')
                setSubject('')
                setBody('')
            }
        })
    }
    useEffect(()=>{
        //
        if(submitted == true){
            return <Success />;
        }
    }, [submitted]);


  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[458588]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className='rounded-xl hover:scale-105 ease-in duration-300' src='/assets/contact.jpg' width={720} height={720} alt='/' />
                        </div>
                        <div>
                            <h2 className='py-2'>Renda Nyamande</h2>
                            <p>Graduate Java Developer</p>
                            <p className='py-4'>I'm available for freelance or full-time positions. Contact me and let's talk</p>
                        </div>

                    <div>
                        <br /><p className='uppercase text-center' >Connect With Me</p>
                        {/* Use this div for 4 links */}
                        {/* <div className='flex items-center justify-between py-4'> */}
                        <div className='flex items-center justify-center py-4'>
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
                                <FaLinkedinIn/>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub/>
                            </div> */}
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

                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-4'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>
                                        Name
                                    </label>
                                    <input name='name' onChange={(e)=>{setName(e.target.value)}} className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>
                                        Phone Number
                                    </label>
                                    <input name='phoneNumber' onChange={(e)=>{setPhoneNumber(e.target.value)}} className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>
                                    Email
                                </label>
                                <input name='email' onChange={(e)=>{setEmail(e.target.value)}} className='border-2 rounded-lg p-3 flex border-gray-300' type='email' />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>
                                    Subject
                                </label>
                                <input name='subject' onChange={(e)=>{setSubject(e.target.value)}} className='border-2 rounded-lg p-3 flex border-gray-300' type='text' />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>
                                    Message
                                </label>
                                <textarea name='message' onChange={(e)=>{setMessage(e.target.value)}} className='border-2 rounded-lg p-3 border-gray-300' rows='10'>
                                </textarea>
                            </div>
                            <button onClick={(e)=>{handleSubmit(e)}} className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <Link className='flex justify-center py-12' href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            {/* <div> */}
                                <HiOutlineChevronDoubleUp className='text-[#458588]' size={30}/>
                            </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact