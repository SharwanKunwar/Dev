'use client'

import React, { useState } from 'react';
import { Container } from '../components/Container';
import SocialMsgBox from '../components/SocialMsgBox';
import { FaFacebook,FaLinkedin,FaGithub } from 'react-icons/fa';

function Page() {
    const [more, setMore] = useState(false);
    
  return (
    <Container>
      <div className="min-h-screen flex justify-start items-start pt-5 md:pl-5 relative">
        <div className="bg-white rounded-2xl md:w-[55%]  md:h-[720px]  mastShadow p-8 text-start space-y-4 overflow-y-auto hidden md:flex flex-col">
  <h1 className="text-3xl font-bold text-gray-800">Hey there 👋</h1>
  <h2 className="text-xl font-medium text-gray-600">
    Welcome to my digital cave of creativity and caffeine-fueled code.
  </h2>
  <p className="text-gray-500">
    I'm Sharwan Jung Kunwar — a full-stack developer who believes clean code and clean UIs both
    deserve equal respect (and dark mode). I build web and mobile apps that not only *work*, but
    also *make sense* — because users deserve more than just "Hello World".
  </p>
    <button onClick={()=>setMore(!more)} className='border'>View More</button>
    {more && (
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



        
        <h1 className='md:hidden  pt-15 pl-5 text-2xl font-semibold'>Leave a message for me</h1>
        <div className=" absolute mt-4 w-[400px] h-[600px] max-w-md bg-white rounded-xl shadow-md md:bottom-10 top-30 md:right-4 md:left-150  left-1.5   z-10">
          <SocialMsgBox />
          <div className='absolute bottom-0 right-0 w-full h-[120px] flex justify-center items-center'>
            <div className='bg-white mastShadow w-[90%] h-[60%] rounded-md border border-white/30 flex justify-center items-center gap-10'>
                            <section className=" flex justify-center items-center">
                            <a
                              href="https://www.facebook.com/sravana.kumvara/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                              <FaFacebook className="text-nutural-400 w-6 h-6 hover:text-blue-200 transition-colors duration-200" />
                            </a>
                          </section>
                          <section className=" flex justify-start items-center ">
                            <a
                              href="https://www.linkedin.com/in/sharwan-kunwar-95a919317/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" >
                              <FaLinkedin className="text-nutural-400 w-6 h-6 hover:text-blue-200 transition-colors duration-200" />
                            </a>
                          </section>
                          <section className="flex justify-start items-center ">
                            <a
                              href="https://github.com/SharwanKunwar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                              <FaGithub className="text-nutural-400 w-6 h-6 hover:text-gray-300 transition-colors duration-200" />
                            </a>
                          </section>
            </div>
          </div>
        </div>
       <div className='hidden absolute top-5 left-5 md:left-150 rounded-lg md:right-5 md:w-[400px] h-[100px] md:flex justify-center items-center bg-white/30 text-2xl  mastShadow backdrop-blur-2xl'>Leave a Message for me.</div>
      </div>
    </Container>
  );
}

export default Page;
