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
    <div id="home" className="min-h-screen flex items-start justify-start">
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
        
        <section className='my-10'>
            <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="0.05"></path>
          </svg>
          </section>
        {/* // blogs info */}
        <div className='  p-5'>
          
          <div className=' p-3 rounded-xl mastShadow flex flex-col'>
            <h1 className='text-3xl font-bold text-gray-900'>📝 Writen Blogs</h1>
            <p className='text-gray-500 mt-2 text-sm max-w-2xl'>
              Tech thoughts, deep dives, and the occasional rant — all from my curious, caffeine-fueled brain. Dive in and explore!
            </p>
          </div>

          {/* bloooooooo */}
          <div className=' mt-10 p-4 rounded-xl mastShadow'>
            <AnimatedTestimonialsDemo />
          </div>
        </div>

        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className="text-center my-10">
          <section id="about"  className=''>
            <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="0.05"></path>
          </svg>
          </section>
        </div>

        
        <br /><br />
        <div className="flex justify-center p-2 border-t border-b border-black/30 text-3xl">About</div>
        <br /><br /><br />
        
        

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

        <h1 className="mt-10 mb-3 text-2xl">Teck Stack and Tools</h1>
        <div className=" md:w-full mastShadow rounded-md">
          <SkillsCard/>
        </div>
        {/* //////////////////////////////////// resume part /////////////////////////////////// */}
        <div id="education"></div>
        <br/><br/><br/><br/>
        <div id="education" className="flex justify-center p-2 border-t border-b border-black/30 text-3xl">Resume</div>
        <p className="pt-4 md:block hidden text-center text-neutral-500">Explore my journey through development projects and academic growth. This section highlights my work experience and education timeline, showcasing skills in both frontend and backend technologies including Java, Spring Boot, Android, and web development.</p>
        <p className="pt-4 md:hidden block text-center text-neutral-500">My journey in dev and education, with skills in Java, Spring Boot, Android & web.</p>
        <br /><br /><br />
        <div className="flex flex-col gap-2">
          <motion.h2 
          initial={{y:10,opacity:0, filter:'blur(5px)'}}
          whileInView={{y:0, opacity:1, filter:'none'}}
          className="font-bold text-2xl">Work Experience</motion.h2>
          <motion.p
          initial={{y:20,opacity:0, filter:'blur(5px)'}}
          whileInView={{y:0, opacity:1, filter:'none'}}
          className="text-neutral-500"
          >Quick glance at my frontend and backend skills, real-world projects, and growth as a software developer.</motion.p>
        </div>
        
        {/* work01 */}
        <br /><br />
        <div className=" flex md:flex-row flex-col gap-5 justify-between md:ml-0 pl-10 pt-5 relative">

          <div className="absolute  w-5 left-0 top-0 rounded md:left-6/21 h-full flex justify-center items-center"> 
          <div className="bg-gray-400 h-full w-0.5 rounded-full">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(1px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            className="bg-indigo-500 rounded-full w-5 h-5 absolute top-5.5 left-0"></motion.div>
          </div>
          </div>

          <div className=" md:w-[50%]">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(3px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            >
              <h1 className="font-bold text-[18px]">Frontend Development</h1>
              <p className="text-indigo-500">July, 2025 - Current</p>
            </motion.div>
          </div>
          <motion.div
          initial={{y:100, opacity:0, filter:"blur(3px)"}}
          whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
          transition={{duration:0.3}}
          >
            <div>
              <h1 className="font-bold text-[18px]">JavaScript / Nextjs</h1>
              <p className="text-[14px] mt-2 w-[90%] text-neutral-500">I began my frontend journey with HTML, CSS and javaScript, building simple static pages. Later, i explored Nextjs, which transformed the way i build modern web interfaces.</p>
              <p className="text-black font-bold mt-3 text-[14px]">I've Worked on several Frontent projects where i focused on:</p>
              <ol className="list-disc ml-4 text-[13px] mt-2 text-neutral-500">
                <li>Built with Next.js for server-side rendering and routing</li>
                <li>Styled using Tailwind CSS for responsive design</li>
                <li>Added smooth animations with Framer Motion</li>
                <li>Used lucide-react and react-icons for consistent iconography</li>
                <li>Implemented scroll-based navigation with active link highlighting</li>
              </ol>

            </div>
          </motion.div>
        </div>

        {/* work02 */}
        <br /><br />
        <div className=" flex md:flex-row flex-col gap-5 justify-between md:ml-0 pl-10 pt-5 relative">

          <div className="absolute  w-5 left-0 top-0 md:left-6/21 h-full flex justify-center items-center"> 
          <div className="bg-gray-400 h-full w-0.5  rounded-full">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(1px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            className="bg-indigo-500 rounded-full w-5 h-5 absolute top-5.5 left-0"></motion.div>
          </div>
          </div>

          <div className=" md:w-[50%]">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(3px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            >
              <h1 className="font-bold text-[18px]">Exploring Programming</h1>
              <p className="text-indigo-500">Before 2025</p>
            </motion.div>
          </div>
          <motion.div
          initial={{y:100, opacity:0, filter:"blur(3px)"}}
          whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
          transition={{duration:0.3}}
          >
            <div className="md:pl-5">
              <h1 className="font-bold text-[18px]">C / Java and Other programming practices</h1>
              <p className="text-[14px] mt-2 w-[90%] text-neutral-500">I focused mainly on programming fundamentals using <strong>C</strong> and <strong>Java</strong>. I practiced problem-solving, logic building, and core concepts like <strong>DSA</strong>, with diving into frontend or backend frameworks.</p>
              <p className="text-black font-bold mt-3 text-[13px]">I've worked on several projects:</p>
              <ol className="list-disc ml-4 text-[14px] mt-2 text-neutral-500">
                <li>Library management system</li>
                <li>Encryption and Decryption</li>
                <li>Condition based Ai 'lucifer'</li>
                <li>Student management system</li>
                <li>Several Games</li>
                <li>Menu based systems</li>
                <li>Password generator</li>
                <li>Units convertors</li>
              </ol>

            </div>
          </motion.div>
        </div>

        {/* //education */}

        <br /><br /><br /><br /><br /><br />
        <div className="flex flex-col gap-2">
          <motion.h2 
          initial={{y:10,opacity:0, filter:'blur(5px)'}}
          whileInView={{y:0, opacity:1, filter:'none'}}
          className="font-bold text-2xl">Education</motion.h2>
          <motion.p
          initial={{y:20,opacity:0, filter:'blur(5px)'}}
          whileInView={{y:0, opacity:1, filter:'none'}}
          className="text-neutral-500"
          >
            An overview of my academic journey, highlighting my qualifications, coursework and skills gained to support my professional growth.</motion.p>
        </div>
        
        {/* edu01 */}
        <br /><br />
        <div className=" flex md:flex-row flex-col gap-5 justify-between md:ml-0 pl-10 pt-5 relative ">

          <div className="absolute  w-5 left-0 top-0 md:left-6/21 h-full flex justify-center items-center"> 
          <div className="bg-gray-400 h-full w-0.5  rounded-full">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(1px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            className="bg-indigo-500 rounded-full w-5 h-5 absolute top-5.5 left-0"></motion.div>
          </div>
          </div>

          <div className=" md:w-[40%]">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(3px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            >
              <h1 className="font-bold text-[18px]">DLMSS - KAILALI</h1>
              <p className="text-indigo-500">2076 - 2078</p>
            </motion.div>
          </div>
          <motion.div
          initial={{y:100, opacity:0, filter:"blur(3px)"}}
          whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
          transition={{duration:0.3}}
          className="w-full"
          >
            <div className=" w-full">
              <h1 className="font-bold text-[18px] ">High School Diploma, Passed +2</h1>
              <p className="pt-2 text-neutral-500 text-[14px]">Graduated with a strong academic record. Engaged in extracurricular activities and clubs.</p>
            </div>
          </motion.div>
        </div>

        {/* edu02 */}
        <br /><br />
        <div className=" flex md:flex-row flex-col gap-5 justify-between md:ml-0 pl-10 pt-5 relative ">

          <div className="absolute  w-5 left-0 top-0 md:left-6/21 h-full flex justify-center items-center"> 
          <div className="bg-gray-400 h-full w-0.5  rounded-full">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(1px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            className="bg-indigo-500 rounded-full w-5 h-5 absolute top-5.5 left-0"></motion.div>
          </div>
          </div>

          <div className=" md:w-[40%]">
            <motion.div
            initial={{y:100, opacity:0, filter:"blur(3px)"}}
            whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
            transition={{duration:0.3}}
            >
              <h1 className="font-bold text-[18px]">RR Campus [TU]</h1>
              <p className="text-indigo-500">2081 - 2084</p>
            </motion.div>
          </div>
          <motion.div
          initial={{y:100, opacity:0, filter:"blur(3px)"}}
          whileInView={{y:0, opacity:1, filter:"blur(0px)"}}
          transition={{duration:0.3}}
          className="w-full"
          >
            <div className=" w-full">
              <h1 className="font-bold text-[18px] ">Bachelor's Student BCA</h1>
              <p className="pt-2 text-neutral-500 text-[14px]">Currently pursuing a Bachelor's degree, i focus on academic growth and skill development through hands-on projects, coding club events, and tech meetups, while also dedicating time to online courses and personal projects.</p>
            </div>
          </motion.div>
        </div>

      </Container>

    

          
    </div>
  );
}
