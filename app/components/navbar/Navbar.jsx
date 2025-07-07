'use client';

import React, { useRef, useState,useEffect } from 'react';
import Image from 'next/image';
import { Container } from '../Container';
import Link from 'next/link';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { Menu, X } from 'lucide-react';
import SocialMsgBox from '../SocialMsgBox';





export default function Navbar() {

  const [hovered, setHovered] = useState(null);
  const [hoverRect, setHoverRect] = useState({ width: 0, left: 0 });
  const navRefs = useRef([]);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20);
  });

  const navItems = [
    { title: 'About', url: '/', hash: '/', type: 'anchor' },
    { title: 'Projects', url: '/', hash: '#projects', type: 'anchor' },
    { title: 'Contact', url: '/contact', type: 'route' },
    { title: 'Community', url: '/community', type: 'route' },
    { title: 'Blog', url: '/blog', type: 'route' },
  ];

  const handleMouseEnter = (index) => {
    const rect = navRefs.current[index].getBoundingClientRect();
    setHoverRect({ width: rect.width, left: navRefs.current[index].offsetLeft });
    setHovered(index);
  };


    // i'm here logic "when clicked msg through mail"
  const [openMsgBox, setOpenMsgBox] = useState(false);

  // Scroll to top on mount
// useEffect(() => {
//   if (open) {
//     window.scrollBy({ top: 50, behavior: 'smooth' }); // scroll down 50px smoothly
//   }else{
//     window.scrollBy({ top: -window.scrollY, behavior: 'smooth' }); 
//   }
// }, [open, setOpen]);

  




  return (
    <Container className="flex justify-center">
      <motion.nav
        animate={{
          boxShadow: scrolled
            ? '0px 2px 3px -1px rgba(0, 0, 0, 0.1), 0px 1px 0px 0px rgba(25, 28, 33, 0.02), 0px 0px 0px 1px rgba(25, 28, 33, 0.08)'
            : 'none',
          width: scrolled ? '50%' : '100%',
          y: scrolled ? 10 : 0,
        }}
        transition={{ duration: 0.3, ease: 'linear' }}
        className="fixed md:inset-x-0 top-0 z-50 md:max-w-5xl md:mx-auto flex items-center rounded-full justify-between px-3 py-2 border border-black/1 bg-white/30 backdrop-blur-2xl dark:bg-neutral-800/30 "
      >
        <motion.a 
        initial={{rotate:0}}
        whileInView={{rotate:3600}}
        href="/">
          <Image
            className="h-12 w-12 rounded-full bg-blue-200 p-1 object-cover mastShadow"
            src="/computer.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </motion.a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {open ? (
            <X onClick={() => setOpen(false)} className="w-9 h-9 cursor-pointer mr-2" />
          ) : (
            <Menu onClick={() => setOpen(true)} className="w-9 h-9 cursor-pointer mr-2" />
          )}
        </div>

        {/* Desktop Nav */}
        <div className="relative md:flex space-x-6 hidden" onMouseLeave={() => setHovered(null)}>
          {hovered !== null && (
            <motion.div
              layout
              className="absolute top-0 h-full bg-neutral-200 dark:bg-neutral-800 rounded-md z-0 "
              initial={false}
              animate={{
                width: hoverRect.width,
                left: hoverRect.left,
              }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}

          {navItems.map((item, index) => {
            const commonProps = {
              ref: (el) => (navRefs.current[index] = el),
              onMouseEnter: () => handleMouseEnter(index),
              className: 'relative px-3 py-2 text-sm font-medium text-black dark:text-white z-10 ',
            };

            return item.type === 'route' ? (
              <Link key={index} href={item.url} {...commonProps}>
                {item.title}
              </Link>
            ) : (
              <Link key={index} href={`${item.url}${item.hash}`} scroll={true} {...commonProps}>
                {item.title}
              </Link>
            );
          })}
        </div>
        
      </motion.nav>

      {/* Mobile Fullscreen Nav */}
      {open && (
        <div className="fixed z-49 w-screen h-screen bg-white/30 backdrop-blur-2xl left-0 top-0 flex justify-center items-center dark:bg-neutral-800/30  ">
          <motion.div
            className="bg-gray-50/30 w-[90%] h-[70%] flex flex-col gap-5 justify-start items-end rounded-2xl backdrop-blur-2xl shadow-xl relative"
            style={{
              backgroundImage: 'linear-gradient(225deg, #2CD8D5 0%, #C5C1FF 46%, #FFBAC3 80%)',
              backgroundPosition: 'right',
            }}
          >

            <motion.div 
            initial={{y:-20,opacity:0,filter:'blur(5px)'}}
            whileInView={{y:0,opacity:1, filter:'blur(0px)'}}
            className="w-full h-full overflow-y-auto px-10 py-10 flex flex-col gap-6 items-end backdrop-blur-[0px] rounded-2xl">
              {navItems.map((item, index) => {
                const commonProps = {
                  onClick: () => setOpen(false),
                  className: 'font-semibold text-black rounded mastShadow w-full text-end p-2 pr-5 backdrop-blur-2xl bg-gray-50/30',
                };

                return item.type === 'route' ? (
                  <Link key={index} href={item.url} {...commonProps}>
                    {item.title}
                  </Link>
                ) : (
                  <Link key={index} href={`${item.url}${item.hash}`} scroll={true} {...commonProps}>
                    {item.title}
                  </Link>
                );
              })}

              
            </motion.div>
              <div className=" flex justify-center items-center rounded w-full mb-5 ">
                <button
                  onClick={()=>setOpenMsgBox(!openMsgBox)}
                  className="  text-white hover:bg-indigo-500 transition hover:rounded-full flex justify-center items-center rounded text-[13px] w-[90%] py-2 underline ">
                    You can send private messages to me
                </button>
              </div>

              {openMsgBox &&(
                <>
                <div className='z-50 top-0 absolute bg-white w-full h-full rounded-2xl'>
                  <div className='border-b w-full h-[15%] flex justify-evenly gap-30 items-center rounded-t-2xl'>
                    <h1 className='text-2xl'>Message Box</h1>
                    <X size={30} onClick={() => setOpenMsgBox(false)} className="cursor-pointer" />
                  </div>
                  <SocialMsgBox/>
                </div>
                </>
              )}

          </motion.div>
        </div>
      )}
    </Container>
  );
}
