'use client';
import React, { useEffect } from 'react';
import LandingPages from './LandingPages';
import TailwindcssPage from './TailwindcssPage';
import MotionPage from './MotionPage';
import R3F3DPage from './R3F3DPage';
import DemoPage from './DemoPage';
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
        <p className=' text-md border border-black/30 font-bold  text-indigo-500 py-2 text-center'>Long Projects</p>
        <div>
          <LongProjects />
        </div>

        {/* Landing page */}
        <p className=' text-md border border-black/30 font-bold  text-indigo-500 py-2 text-center'>Landing page</p>
        <div>
          <LandingPages />
        </div>

        {/* Tailwindcss page */}
        <p className='text-center border border-black/30 text-md text-indigo-500  font-bold py-2 '>Tailwindcss Projects</p>
        <div>
          <TailwindcssPage />
        </div>

        {/* Motion page */}
        <p className='text-center border border-black/30 text-md text-indigo-500  font-bold py-2 '>Motion Projects</p>
        <div>
          <MotionPage />
        </div>

        {/* 3D page */}
        <p className='text-center border border-black/30 text-md text-indigo-500  font-bold py-2 '>3D Projects</p>
        <div>
          <R3F3DPage />
        </div>

        
      </div>

      
    </>
  );
}

export default DefaultPage;
