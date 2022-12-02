import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectItem from './ProjectItem';
// import netflixClone from '/../public/assets/projects/netflixClone.png'
{/* <Image src = '/../public/assets/skills/html.png' width='64' height='64' alt='/' /> */}

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#458588]'>
                Projects
            </p>
            <h2 className='py-4'>What I've built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                {/* <ProjectItem title='Netflix Clone' backgroundImg='/../public/assets/projects/netflixClone.png' projectUrl='/' />
                <ProjectItem title='Netflix Clone' backgroundImg='/../public/assets/projects/netflixClone.png' projectUrl='/' />
                <ProjectItem title='Netflix Clone' backgroundImg='/../public/assets/projects/netflixClone.png' projectUrl='/' />
                <ProjectItem title='Netflix Clone' backgroundImg='/../public/assets/projects/netflixClone.png' projectUrl='/' /> */}
                {/* <ProjectItem title='Netflix Clone' backgroundImg='/../public/assets/projects/netflixClone.png' projectUrl='/netflixClone' />
                <ProjectItem title='Netflix Clone' backgroundImg='/../public/assets/projects/netflixClone.png' projectUrl='/netflixClone' />
                <ProjectItem title='Netflix Clone' backgroundImg='/../public/assets/projects/netflixClone.png' projectUrl='/netflixClone' /> */}
            </div>
        </div>
    </div>
  )
}

export default Projects