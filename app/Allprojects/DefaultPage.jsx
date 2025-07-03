'use client';
import React, { useEffect } from 'react';
import LandingPages from './LandingPages';
import TailwindcssPage from './TailwindcssPage';
import MotionPage from './MotionPage';
import R3F3DPage from './R3F3DPage';
import DemoPage from './DemoPage';

function DefaultPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <div>
        {/* Landing page */}
        <p className='text-center text-2xl font-bold py-5 underline'>Landing page</p>
        <div className='border-b border-b-black/30'>
          <LandingPages />
        </div>

        {/* Tailwindcss page */}
        <p className='text-center text-2xl font-bold py-5 underline'>Tailwindcss page</p>
        <div className='border-b border-b-black/30'>
          <TailwindcssPage />
        </div>

        {/* Motion page */}
        <p className='text-center text-2xl font-bold py-5 underline'>Motion page</p>
        <div className='border-b border-b-black/30'>
          <MotionPage />
        </div>

        {/* 3D page */}
        <p className='text-center text-2xl font-bold py-5 underline'>3D page</p>
        <div className='border-b border-b-black/30'>
          <R3F3DPage />
        </div>

        {/* Demo page */}
        <p className='text-center text-2xl font-bold py-5 underline'>Demo page</p>
        <div className='border-b border-b-black/30'>
          <DemoPage />
        </div>
      </div>

      
    </>
  );
}

export default DefaultPage;
