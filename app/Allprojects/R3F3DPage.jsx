'use client'
import React, { useState,useEffect } from 'react'
import {motion} from 'motion/react'
import Image from 'next/image';


function R3F3DPage() {

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

     // Scroll to top on mount
        useEffect(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, []);

    const projects = [
    {
      title: 'Heart 3D | R3F',
      description:'Explore an interactive 3D heart model built with React Three Fiber, Next.js, and Tailwind CSS. A creative demo showcasing WebGL, responsiveness, and modern UI in one project.',
      ImgUrl: '/Work/heart.png',
      projectLink: 'https://heart-3d-r3-f.vercel.app/',
      sourceLink: 'https://github.com/SharwanKunwar/heart-3d-R3F',
    },
    {
      title: '3D Scene | R3F',
      description:'Interactive 3D scene with GLB model, HDR lighting, smooth animations, and orbit controls, built using React Three Fiber, Next.js, and Tailwind CSS.',
      ImgUrl: '/Work/space.png',
      projectLink: 'https://3d-scene-mu.vercel.app/',
      sourceLink: 'https://github.com/SharwanKunwar/3D-Scene-R3F',
    },
    {
      title: '3D Book Slider | R3F | Three js | etc',
      description:'Interactive 3D book with page flipping, animated scrolling text, and realistic lighting, built using Next.js, React Three Fiber, and Tailwind CSS.',
      ImgUrl: '/Work/3dBook.png',
      projectLink: 'https://3-d-book-slider.vercel.app/',
      sourceLink: 'https://github.com/SharwanKunwar/3D-Book-Slider',
    },
    
  ];



  return (
    <div className="grid grid-cols-1 gap-10 py-7 md:grid-cols-2 ">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ y: 50, opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
            whileInView={{y: 0,opacity: 1,scale: 1,filter: 'blur(0px)'}}
            transition={{duration: 0.3,delay: index * 0.1,ease: 'easeInOut',}}
            className="bg-gray-50 dark:bg-neutral-600 rounded-sm p-2 group flex flex-col justify-center items-center relative overflow-hidden mastShadow dark:mastWhiteShadow "
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
              className="absolute bg-gray-400/30 backdrop-blur-2xl w-full h-full flex p-5 z-30 flex-col gap-2 text-center justify-center rounded-md"
            >
              <h1 className="text-2xl font-bold text-white">{project.title}</h1>
              <p className="text-[13px] text-gray-50">{project.description}</p>
              <section className="mt-4 flex justify-center items-center gap-5">
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
  )
}

export default R3F3DPage
