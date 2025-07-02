'use client'

import { Container } from "./components/Container";
import Projects from "./components/Projects";
import { useState } from "react";
import {motion} from 'motion/react';


export default function Home() {
  const [more, setMore] = useState(false);

  return (
    <div id="about" className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:p-10 md:pt-0">
      <div className="md:h-[50px] h-[25px]"></div>
        <motion.section
        initial={{opacity:0,y:15,filter:'blur(7px)'}}
        whileInView={{opacity:1,y:0,filter:'none'}}
        viewport={{once:true}}
        transition={{duration:0.3,delay:0.2}}
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100">Sharwan Jung Kunwar</h1>
          <p className="text-neutral-400 dark:text-neutral-100 pt-3 mb-4 md:text-sm text-sm max-w-2xl">A software developer who writes code like a chef cooks gourmet meals: with precision, creativity, and a few spices of sarcasm.</p>
        </motion.section>

        <section className=" w-full flex justify-start items-center flex-wrap gap-5">
            <motion.button 
              initial={{opacity:0,y:15,filter:'blur(5px)'}}
              whileInView={{opacity:1,y:0,filter:'none'}}
              viewport={{once:true}}
              transition={{duration:0.3}}
            onClick={()=>setMore(!more)} className=" dark:mastWhiteShadow border border-black/30 rounded px-10 py-1 text-[13px] mastShadow hover:bg-blue-300  hover:border-white/30 dark:text-gray-50 dark:border-white/30 dark:hover:text-black">More</motion.button>

            <a 
            target="_blank"
            href="https://github.com/SharwanKunwar/Dev"
            >
              <motion.button 
              initial={{opacity:0,y:15,filter:'blur(5px)'}}
              whileInView={{opacity:1,y:0,filter:'none'}}
              viewport={{once:true}}
              transition={{duration:0.3}}
            className=" dark:mastWhiteShadow border border-black/30 px-2 py-1  text-[13px] hover:bg-blue-300  rounded mastShadow hover:border-white/30 dark:text-gray-50 dark:border-white/30 dark:hover:text-black">🌟 Give Star</motion.button>
            </a>

            <a 
            target="_blank"
            href="https://github.com/SharwanKunwar"
            >
            <motion.button 
              id="projects"
              initial={{opacity:0,y:15,filter:'blur(5px)'}}
              whileInView={{opacity:1,y:0,filter:'none'}}
              viewport={{once:true}}
              transition={{duration:0.3}}
            className=" dark:mastWhiteShadow border border-black/30 px-2 py-1  text-[13px] hover:bg-blue-300 rounded mastShadow hover:border-white/30 dark:text-gray-50 dark:border-white/30 dark:hover:text-black"> 🐱 Follow Me</motion.button>
            </a>
        </section>
        
        {more &&(
          <motion.section
          initial={{opacity:0,y:15,filter:'blur(5px)'}}
          whileInView={{opacity:1,y:0,filter:'none'}}
          viewport={{once:true}}
          transition={{duration:0.3}}
          className="mt-3"
          >
          <p className="text-neutral-400 dark:text-neutral-100 pt-3 md:text-sm text-sm max-w-2xl">I specialize in building scalable, efficient systems and crafting digital experiences that don’t just work  they wow. I’m currently building my own path (yes, solo dev life ✌️), working on projects that combine logic, aesthetics, and a whole lot of coffee.</p>
          <p className="text-neutral-400 dark:text-neutral-100 pt-3 md:text-sm text-sm max-w-2xl">I speak fluent Java, C, JavaScript, and sarcasm, and I have a not-so-secret obsession with optimizing everything — from backend performance to how my terminal looks.</p>
          <p id="projects" className="text-neutral-400 dark:text-neutral-100 pt-3 md:text-sm text-sm max-w-2xl">Whether it's building a full-stack app, architecting clean APIs, or animating a “404 page not found” to dance — I’m here for it.</p>
        </motion.section>
        
        )}
        

        <Projects/>
      </Container>
    </div>
  );
}
