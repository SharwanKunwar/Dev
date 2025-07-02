'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

function Projects() {
  const [visibleOverlayIndex, setVisibleOverlayIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect mobile device based on screen width
    useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
    }, []);

  
  const toggleOverlay = (index) => {
    setVisibleOverlayIndex((prev) => (prev === index ? null : index));
  };

  const projects = [
    {
      title: 'Personal Portfolio',
      description:
        'A responsive and modern personal portfolio built with Next.js and Tailwind CSS, showcasing my projects, skills, and passion for full-stack development.',
      ImgUrl: '/Work/work001.png',
      projectLink: 'https://sharwan-jung-kunwar.vercel.app/',
      sourceLink: 'https://github.com/SharwanKunwar/Sharwan-Jung-Kunwar',
    },
    {
      title: 'My Portfolio 07',
      description: 'My Portfolio 07 is a personal portfolio website showcasing my skills, projects, and passion for development. Built with clean design and smooth navigation, it highlights my work, tech stack, and contact details—offering a quick look into who I am as a developer.',
      ImgUrl: '/Work/work01.png',
      projectLink: 'https://sharwankunwar.github.io/My-Portfolio-07/',
      sourceLink: 'https://github.com/SharwanKunwar/My-Portfolio-07',
    },
    {
      title: 'Programming Notes',
      description: 'Programming Notes is a clean and responsive web app designed to help developers organize and access essential programming concepts. Explore categorized notes, syntax, and examples—all in one place. Built with simplicity and accessibility in mind.',
      ImgUrl: '/Work/work02.png',
      projectLink: 'https://programming-notes-eight.vercel.app/',
      sourceLink: 'https://github.com/SharwanKunwar/Programming-Notes',
    },
    {
      title: 'BCA Aspirant Hub',
      description: 'BCA Aspirant Hub is an all-in-one platform designed for students preparing for the Bachelor of Computer Applications (BCA). It offers study materials, model questions, notes, and important updates to help aspirants stay informed, organized, and confident throughout their BCA journey.',
      ImgUrl: '/Work/work03.png',
      projectLink: 'https://bca-aspirant-hub.vercel.app/',
      sourceLink: 'https://github.com/SharwanKunwar/BCA-Aspirant-Hub-0.1',
    },
    {
      title: 'Home Page',
      description: "Material UI is a front-end framework based on Google’s Material Design. It offers pre-built components for building responsive, user-friendly interfaces. I'm truly grateful for this amazing tool—it’s made a big difference in my development journey! #MetrialUI",
      ImgUrl: '/Work/HomePage.png',
      projectLink: 'https://sharwankunwar.github.io/Web-UI/',
      sourceLink: 'https://github.com/SharwanKunwar/Web-UI',
    },
    {
      title: 'CasinoPlanet',
      description: 'CasinoPlanet is a fun and interactive web-based casino game project. It features classic casino-style gameplay with a simple UI, built using HTML, CSS, and JavaScript. Designed for entertainment and learning, it showcases front-end skills in a playful and engaging way.',
      ImgUrl: '/Work/work05.png',
      projectLink: 'https://sharwankunwar.github.io/Casino-online/',
      sourceLink: 'https://github.com/SharwanKunwar/Casino-online',
    },
    {
      title: 'Demo Digitalize Ideas',
      description: 'This is a description of project 6.',
      ImgUrl: '/Work/work06.png',
      projectLink: 'https://sharwan-jung-kunwar.vercel.app/',
      sourceLink: 'https://github.com/SharwanKunwar/Frontend-development/tree/main/FRONTEND-PRACTICE%20PAGES/web04',
    },
  ];

  return (
    <div className="py-10">
      <motion.p 
      initial={{y:15, opacity:0, filter:'blur(10px)'}}
      whileInView={{y:0, opacity:1, filter:'blur(0px)'}}
      transition={{duration:0.3,delay:0.1}}
      id='projects' className="text-neutral-600 max-w-5xl pt-4 text-lg ">
        I love building web apps and products that can impact millions of lives
      </motion.p>

      <div className="grid grid-cols-1 gap-10 py-7 md:grid-cols-2 ">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ y: 50, opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
            whileInView={{y: 0,opacity: 1,scale: 1,filter: 'blur(0px)'}}
            transition={{duration: 0.3,delay: index * 0.1,ease: 'easeInOut',}}
            className="bg-gray-50 rounded-sm p-2 group flex flex-col justify-center items-center relative overflow-hidden mastShadow"
          >
            {/* Overlay */}
            <motion.div
              onTap={isMobile ? () => toggleOverlay(index) : undefined}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{
                opacity: isMobile
                  ? visibleOverlayIndex === index
                    ? 1
                    : 0
                    : 0,
                filter: isMobile
                  ? visibleOverlayIndex === index
                    ? 'blur(0px)'
                    : 'blur(10px)'
                    : 'blur(10px)',
                scale: isMobile
                  ? visibleOverlayIndex === index
                    ? 1.01
                    : 1
                    : 1,
              }}
              whileHover={
                !isMobile
                  ? {
                      opacity: 1,
                      filter: 'blur(0px)',
                      scale: 1.01,
                      transition: { duration: 0.3 },
                    }
                  : {}
              }
              transition={{ duration: 0.3 }}
              className="absolute bg-gray-400/30 backdrop-blur-2xl w-full h-full flex p-6 z-30 flex-col gap-2 text-center justify-center rounded-md"
            >
              <h1 className="text-2xl font-bold text-white">{project.title}</h1>
              <p className="text-[13px] text-gray-50">{project.description}</p>
              <section className="mt-5 flex justify-center items-center gap-5">
                <a target="_blank" href={project.sourceLink}><button className="border border-white/30 w-[150px] h-[35px] rounded-sm text-sm text-gray-50 hover:bg-blue-400">Source Code</button></a>
                <a target="_blank" href={project.projectLink}><button className="border border-white/30 w-[150px] h-[35px] rounded-sm text-sm text-gray-50 hover:bg-blue-400">Live Preview</button></a>
              </section>
            </motion.div>

            {/* Image */}
            <Image
              src={project.ImgUrl}
              width={500}
              height={500}
              alt={project.title}
              className="object-cover rounded-sm group-hover:blur-[3px]"
            />

            {/* Title */}
            <h1 className=" left-0 top-54 text-[13px] font-bold text-neutral-400 mt-2 w-full">{project.title}</h1>
          </motion.div>
        ))}
      </div>

      <button className="mt-2 py-2 px-10 rounded-sm border border-black/30 hover:bg-blue-300 translate-1 hover:text-white hover:border-white/30 mastShadow">View More</button>
      
    </div>
  );
}

export default Projects;
