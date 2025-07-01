'use client'

import React from 'react'
import Image from 'next/image'
import {motion} from 'motion/react'



function Projects() {
  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A responsive and modern personal portfolio built with Next.js and Tailwind CSS, showcasing my projects, skills, and passion for full-stack development.',
      ImgUrl: '/Work/work001.png',
      projectLink: 'not yet'
    },
    {
      title: 'Project 2',
      description: 'This is a description of project 1.',
      ImgUrl: '/Work/work01.png',
      projectLink: 'not yet'
    },
    {
      title: 'Project 3',
      description: 'This is a description of project 2.',
      ImgUrl: '/Work/work02.png',
      projectLink: 'not yet'
    },
    {
      title: 'Project 4',
      description: 'This is a description of project 3.',
      ImgUrl: '/Work/work03.png',
      projectLink: 'not yet'
    },
    {
      title: 'Project 5',
      description: 'This is a description of project 4.',
      ImgUrl: '/Work/work04.png',
      projectLink: 'not yet'
    },
    {
      title: 'Project 6',
      description: 'This is a description of project 5.',
      ImgUrl: '/Work/work05.png',
      projectLink: 'not yet'
    },
    {
      title: 'Project 7',
      description: 'This is a description of project 6.',
      ImgUrl: '/Work/work06.png',
      projectLink: 'not yet'
    },
  ]
  return (
    <div className='py-10'>
      <p className='text-neutral-400 max-w-lg pt-4 text-sm md:text-sm'>I love building web apps and products that can impact millionsof lives</p>
      <div className='grid grid-cols-1 gap-10 py-7 md:grid-cols-2'>
        {projects.map((project,index)=>(
          <motion.div 
          initial={{y:50,opacity:0,scale:0.98,filter:'blur(10px)'}}
          whileInView={{y:0,opacity:1,scale:1,filter:'blur(0px)'}}
          transition={{duration:0.3,delay:index * 0.1,ease:"easeInOut"}}
          key={project.title} className='bg-gray-50 rounded-sm p-2 group flex justify-center items-center'>

            <motion.div 
            initial={{opacity:0, filter:'blur(10px)'}}
            whileHover={{opacity:1,filter:'blur(0px)',scale:1.01}}
            whileTap={{opacity:1,filter:'blur(0px)'}}
            className='absolute bg-gray-400/30 backdrop-blur-2xl w-full h-full flex p-5 z-30 flex-col gap-2 text-center justify-center rounded-md'>
              <h1 className='text-2xl font-bold text-white'>{project.title}</h1>
              <p className='text-[13px] text-gray-50'>{project.description}</p>
              <section className='mt-5 flex justify-center items-center gap-5'>
                <button className='bg-blue-400 w-[150px] h-[35px] rounded-sm text-sm text-gray-50'>Source code</button>
              <button className='bg-blue-400 w-[150px] h-[35px] rounded-sm text-sm text-gray-50'>Live Preview</button>
              </section>

            </motion.div>
            <Image src={project.ImgUrl} width={500} height={500} alt={project.title}
            className='object-cover rounded-sm group-hover:blur-[3px]'/>
        <h1 className='absolute left-0 -bottom-6 text-[13px] font-bold text-neutral-400'>{project.title}</h1>
          </motion.div>
        ))}
      </div>
      <button className=' py-2 px-10 rounded-sm border border-black/30 hover:bg-blue-300 translate-1 hover:text-white hover:border-none'>View More</button>
    </div>
  )
}

export default Projects
