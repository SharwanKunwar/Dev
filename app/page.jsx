'use client'

import { Container } from "./components/Container";
import Projects from "./components/Projects";
import { useState } from "react";
import {motion} from 'motion/react';
import { FaFacebook,FaLinkedin,FaGithub } from 'react-icons/fa';
import  AnimatedTestimonialsDemo  from "./components/ui/AnimatedTestimonialsDemo";
import Image from "next/image";
import SkillsCard from "./components/SkillsCard";







export default function Home() {
  const [more, setMore] = useState(false);
  const [more02, setMore02] = useState(false);

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
            onClick={()=>setMore(!more)} className=" dark:mastWhiteShadow border border-black/30 rounded px-8 bg-blue-400 text-white py-1 text-[13px] mastShadow hover:bg-blue-300  hover:border-white/30 dark:text-gray-50 dark:border-white/30 dark:hover:text-black">More</motion.button>

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
          <p className="text-neutral-400 dark:text-neutral-100 pt-3 md:text-sm text-sm max-w-2xl">I speak fluent <strong>Java</strong>, <strong>C</strong>, <strong>JavaScript</strong>, and sarcasm, and I have a not-so-secret obsession with optimizing everything — from backend performance to how my terminal looks.</p>
          <p id="projects" className="text-neutral-400 dark:text-neutral-100 pt-3 md:text-sm text-sm max-w-2xl">Whether it's building a full-stack app, architecting clean APIs, or animating a <strong>“404 page not found”</strong> to dance — I’m here for it.</p>
          <section className="mt-10 w-full text-neutral-400 dark:text-neutral-100 md:text-sm text-sm max-w-2xl">
            <p>If Googling me is your thing—I'm flattered. You can find me across the web here:</p>
            <div className="grid md:grid-cols-10 grid-cols-7 gap-2 md:mt-3 mt-5">
              <section className=" flex justify-start items-center">
                <a
                  href="https://www.facebook.com/sravana.kumvara/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook className="text-blue-400 w-6 h-6 hover:text-blue-200 transition-colors duration-200" />
                </a>
              </section>
              <section className=" flex justify-start items-center ">
                <a
                  href="https://www.linkedin.com/in/sharwan-kunwar-95a919317/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" >
                  <FaLinkedin className="text-blue-400 w-6 h-6 hover:text-blue-200 transition-colors duration-200" />
                </a>
              </section>
              <section className="flex justify-start items-center ">
                <a
                  href="https://github.com/SharwanKunwar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub className="text-black w-6 h-6 hover:text-gray-300 transition-colors duration-200" />
                </a>
              </section>
            </div>
          </section>

        </motion.section>
        
        )}
        

        <Projects/>
        
        {/* // blogs info */}
        <div className=' my-20 p-5'>
          <div className=' p-6 rounded-xl mastShadow'>
            <h1 className='text-3xl font-bold text-gray-900'>📝 Recent Blogs</h1>
            <p className='text-gray-500 mt-2 text-sm max-w-2xl'>
              Here’s what I’ve been writing lately — deep dives, clever insights, tech rants, and occasional caffeine-fueled thoughts. Whether you're here to learn or just peek into my curious brain, you’re welcome!
            </p>
          </div>

          {/* bloooooooo */}
          <div className=' mt-10 p-4 rounded-xl mastShadow'>
            <AnimatedTestimonialsDemo />
          </div>
        </div>

        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="text-center py-10">About</div>
        <div className=" md:flex-row flex-wrap flex flex-col-reverse  rounded-md mastShadow py-5">
          <div className="md:w-6/12 w-full  flex  justify-center items-center">

          <div className="w-[400px]  p-5 mastShadow flex flex-col gap-3 mr-2 ml-2">
            <p className="text-gray-500 ">
                I'm Sharwan Jung Kunwar — a full-stack developer who believes clean code and clean UIs both
                deserve equal respect (and dark mode). I build web and mobile apps that not only *work*, but
                also *make sense* — because users deserve more than just "Hello World".
              </p>
                <button onClick={()=>setMore02(!more02)} className='border border-black/30 py-1 mt-5 mb-5 mastShadow'>View More</button>
                {more02 && (
                    <>
                    <p className="text-gray-500">
                        My toolkit? Java, Spring Boot, React, PostgreSQL, Tailwind — and a dash of late-night debugging
                        wizardry. I love solving real-world problems with tech, and occasionally, solving my own
                        existential crises with console logs.
                    </p>
                    <p className="text-gray-500">
                        When I'm not coding, I'm either strumming my guitar like it's my second keyboard, or learning
                        boxing — because nothing says "I can handle tough bugs" like dodging punches.
                    </p>
                    <p className="text-gray-500">
                        I'm not just here to build things; I'm here to build things that matter — with people who care
                        about quality, creativity, and pushing the limits (without breaking production... too often).
                    </p>
                    </>
                  )}
          </div>

          </div>
          
          <div className="md:w-6/12 w-full flex justify-center items-center p-5 rounded-2xl">

          <motion.div  
          initial={{opacity:0, filter:'blur(5px)'}}
          whileInView={{opacity:1, filter:'none'}}
          transition={{duration:0.3}}

          className="bg-yellow-400 w-[400px] h-[400px] flex flex-wrap relative rounded-2xl gap-5 justify-center items-center mastShadow border border-black/30">
            <div className=" w-[40%] h-[40%]  bg-orange-500 rounded-2xl"></div>
            <div className=" w-[40%] h-[40%]  bg-pink-500 rounded-2xl"></div>
            <div className=" w-[40%] h-[40%]  bg-purple-500 rounded-2xl"></div>
            <div className=" w-[40%] h-[40%]  bg-orange-500 rounded-2xl"></div>
            <div className="absolute w-full h-full rounded-2xl backdrop-blur-2xl bg-white/30 flex justify-center items-center">
             <motion.div
                animate={{
                  y: [0, -10, 0], // move up and down
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="flex justify-center items-center "
              >
                <Image
                  className="bg-white w-[80%] rounded-xl mastShadow border-white/30 border"
                  src="/sharwanjungkunwar0007.jpg"
                  width={200}
                  height={200}
                  alt="img"
                />
              </motion.div>
            </div>
          </motion.div>

          </div>

        </div>

        <h1 className="mt-10 mb-3 text-2xl">Teck Stack</h1>
        <div className=" md:w-full mastShadow rounded-md">
          <SkillsCard/>
        </div>


      </Container>

    

          
    </div>
  );
}
