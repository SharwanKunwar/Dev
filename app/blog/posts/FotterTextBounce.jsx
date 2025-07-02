import React from 'react'
import { motion } from 'motion/react'

function FotterTextBounce({author,tag01,tag02,tag03,tag04}) {
  return (
    <>
      <section className=' w-full flex gap-2'>
        <div className=' w-[70%] md:flex hidden'>
            <p className=' text-neutral-400 text-[13px]'><span className='bg-gray-400 text-gray-50 px-4 py-1 mr-1 rounded mastShadow'># {tag01}</span> <span className='bg-gray-400 mr-1 text-gray-50 px-4 py-1 rounded mastShadow'># {tag02}</span> <span className='bg-gray-400 mr-1 text-gray-50 px-4 py-1 rounded mastShadow'># {tag03}</span> <span className='bg-gray-400 text-gray-50 px-4 py-1 rounded mastShadow'># {tag04}</span></p>
        </div>
        <div className=' md:w-[30%] w-full flex md:justify-center justify-end items-center '>
        <motion.p
        initial={{ x: -100, opacity: 0, filter: 'blur(5px)' }}
        whileInView={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 10,
          bounce: 0.4,
          duration: 0.3
        }}
        className="italic text-sm text-right text-gray-500"
      >
        Written by <span className='text-indigo-600'>{author}</span> ®
      </motion.p>
        </div>
      </section>
    </>
  )
}

export default FotterTextBounce
