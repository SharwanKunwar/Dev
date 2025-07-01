'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { Container } from '../Container'
import Link from 'next/link'
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  
  const [hovered, setHovered] = useState(null)
  const [hoverRect, setHoverRect] = useState({ width: 0, left: 0 })
  const navRefs = useRef([]);
  const [scrolled, setscrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const {scrollY} = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) =>{
    if(latest > 20){
      setscrolled(true);
    }else{
      setscrolled(false);
    }
  })



  const navItems = [
    { title: 'About', url: '/' },
    { title: 'Projects', url: '/' },
    { title: 'Community', url: '/community' },
    { title: 'Contact', url: '/contact' },
    { title: 'Blog', url: '/blog' },
  ]

  const handleMouseEnter = (index) => {
    const rect = navRefs.current[index].getBoundingClientRect()
    setHoverRect({ width: rect.width, left: navRefs.current[index].offsetLeft })
    setHovered(index)
  }

  return (
    <Container className={'flex justify-center'}>
      <motion.nav 
      animate={{
        boxShadow: scrolled ? '0px 2px 3px -1px rgba(0, 0, 0, 0.1), 0px 1px 0px 0px rgba(25, 28, 33, 0.02), 0px 0px 0px 1px rgba(25, 28, 33, 0.08)' : 'none',
        width: scrolled ? '50%' : '100%',
        y: scrolled ? 10 : 0,
      }}
      transition={{duration:0.3,ease:"linear"}}

      className="fixed md:inset-x-0 top-0 z-50 md:max-w-5xl md:mx-auto flex items-center rounded-full justify-between px-3 py-2 border border-black/1 bg-white/30 backdrop-blur-2xl dark:bg-neutral-900">
        <Image
          className="h-12 w-12 rounded-full bg-blue-200 p-1 object-cover"
          src="/coder.png"
          alt="Logo"
          width={100}
          height={100}
        />

        <div className='md:hidden'>
          {open ? (
          <X onClick={() => setOpen(false)} className="w-9 h-9 cursor-pointer mr-2" />
          ) : (
          <Menu onClick={() => setOpen(true)} className="w-9 h-9 cursor-pointer mr-2" />
          )}
        </div>
        

        <div
          className="relative md:flex space-x-6 hidden"
          onMouseLeave={() => setHovered(null)}
        >
          {/* Smooth hover background */}
          {hovered !== null && (
            <motion.div
              layout
              className="absolute top-0 h-full bg-neutral-200 dark:bg-neutral-800 rounded-md z-0"
              initial={false}
              animate={{
                width: hoverRect.width,
                left: hoverRect.left,
              }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}

          {/* Navigation Items */}
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              ref={(el) => (navRefs.current[index] = el)}
              onMouseEnter={() => handleMouseEnter(index)}
              className="relative px-3 py-2 text-sm font-medium text-black dark:text-white z-10"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  )
}

export default Navbar
