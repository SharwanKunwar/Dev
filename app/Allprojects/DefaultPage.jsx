'use client';
import React, { useEffect } from 'react';
import LandingPages from './LandingPages';
import TailwindcssPage from './TailwindcssPage';
import MotionPage from './MotionPage';
import R3F3DPage from './R3F3DPage';
import LongProjects from './LongProjects';

function DefaultPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <div>
        {/* Long Projects */}
        <div className=' flex flex-col justify-center items-center mt-10 mb-4'>
        <p className=' text-md  border-black/30 font-bold  text-indigo-500 py-2 text-center'>Long Projects</p>
        <section className='w-[200px]'>
            <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="1"></path>
          </svg>
          </section>
        </div>
        <div>
          <LongProjects />
        </div>

        {/* Landing page */}
        <div className=' flex flex-col justify-center items-center mt-10 mb-4'>
        <p className=' text-md  border-black/30 font-bold  text-indigo-500 py-2 text-center'>Landing page</p>
        <section className='w-[200px]'>
            <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="1"></path>
          </svg>
          </section>
        </div>
        <div>
          <LandingPages />
        </div>

        {/* Tailwindcss page */}
        <div className=' flex flex-col justify-center items-center mt-10 mb-4'>
        <p className='text-center  border-black/30 text-md text-indigo-500  font-bold py-2 '>Tailwindcss Projects</p>
        <section className='w-[200px]'>
            <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="1"></path>
          </svg>
          </section>
        </div>
        <div>
          <TailwindcssPage />
        </div>

        {/* Motion page */}
        <div className=' flex flex-col justify-center items-center mt-10 mb-4'>
        <p className='text-center  border-black/30 text-md text-indigo-500  font-bold py-2 '>Motion Projects</p>
        <section className='w-[200px]'>
            <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="1"></path>
          </svg>
          </section>
        </div>
        <div>
          <MotionPage />
        </div>

        {/* 3D page */}
        <div className=' flex flex-col justify-center items-center mt-10 mb-4'>
        <p className='text-center  border-black/30 text-md text-indigo-500  font-bold py-2 '>3D Projects</p>
        <section className='w-[200px]'>
            <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" strokeWidth="1"></path>
          </svg>
          </section>
        </div>
        <div>
          <R3F3DPage />
        </div>

        
      </div>

      
    </>
  );
}

export default DefaultPage;
