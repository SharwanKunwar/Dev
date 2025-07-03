'use client'

import { Container } from "./components/Container";
import Projects from "./components/Projects";
import { useState } from "react";
import {motion} from 'motion/react';
import { Menu, X } from 'lucide-react';
import { FaFacebook,FaLinkedin,FaGithub } from 'react-icons/fa';
import SocialMsgBox from "./components/SocialMsgBox";






export default function Home() {
  const [more, setMore] = useState(false);

  const [openMsgBox, setOpenMsgBox] = useState(false);

    const handleClick = () => {
    const phoneNumber = "+9779763290022";
    const message = encodeURIComponent("Hey Sharwan! Just visited your site—super cool stuff 🚀🔥");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

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
        
      </Container>

      <div className="sticky top-50 flex justify-center items-center rounded">
          <motion.button
            initial={{ rotate: 60, opacity: 1 }}
            animate={{ rotate: [-10, 0, -20], opacity: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
              id="wave"
              onClick={() => setOpenMsgBox(!openMsgBox)}
              className="absolute -left-30 md:-left-60 top-150 md:top-115 text-black transition hover:rounded-full  flex justify-center items-center rounded text-6xl"
              >
              👋
          </motion.button>
          </div>

          {openMsgBox && (
            <div className=" mastgBackgroundColor fixed  w-screen h-screen top-0 left-0 z-50  flex justify-center items-center">
              <div className="relative bg-white/30 backdrop-blur-2xl w-[90%] md:w-[50%] h-[80%] rounded-2xl mastShadow flex flex-col">
                
                {/* Header with X */}
                <div className="border-b w-full h-[15%] flex justify-between items-center px-4 rounded-t-2xl">
                  <h1 className="text-2xl">Message Box</h1>
                  <X size={30} onClick={() => setOpenMsgBox(false)} className="cursor-pointer" />
                </div>

                {/* Message box content */}
                <div className="flex-1 overflow-y-auto">
                  <SocialMsgBox />
                </div>

              </div>
            </div>
          )}


          
    </div>
  );
}
