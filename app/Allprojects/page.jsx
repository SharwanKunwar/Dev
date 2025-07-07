'use client';
import React, { useState } from 'react';
import { Container } from '../components/Container';

import DefaultPage from './DefaultPage';
import LandingPages from './LandingPages';
import TailwindcssPage from './TailwindcssPage';
import MotionPage from './MotionPage';
import R3F3DPage from './R3F3DPage';
import DemoPage from './DemoPage';
import LongProjects from './LongProjects';

function AllTypeProjects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const renderPage = () => {
    switch (selectedCategory) {
      case 'all':
        return <DefaultPage />;
      case 'longProjects':
        return <LongProjects />;
      case 'landing':
        return <LandingPages />;
      case 'tailwind':
        return <TailwindcssPage />;
      case 'motion':
        return <MotionPage />;
      case '3d':
        return <R3F3DPage />;
      case 'demo':
        return <DemoPage />;
      default:
        return <DefaultPage />;
    }
  };

  const buttonStyle = (type) =>
    `py-2 px-7 rounded text-white transition-all duration-300 ${
      selectedCategory === type ? 'bg-purple-600' : 'bg-purple-400'
    }`;

  return (
    <Container>
      <div className=" p-5 min-h-screen">
        <div
          className="sticky top-0 pl-2 z-40 bg-white/30 backdrop-blur-2xl w-full h-[160px] flex md:flex-wrap gap-4 overflow-x-scroll md:justify-center items-end py-4 rounded-b-md"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <button onClick={() => setSelectedCategory('all')} className={buttonStyle('all')}>
            All
          </button>
          <button onClick={() => setSelectedCategory('longProjects')} className={buttonStyle('longProjects')}>
            LongProject
          </button>
          <button onClick={() => setSelectedCategory('landing')} className={buttonStyle('landing')}>
            Landing
          </button>
          <button onClick={() => setSelectedCategory('tailwind')} className={buttonStyle('tailwind')}>
            Tailwindcss
          </button>
          <button onClick={() => setSelectedCategory('motion')} className={buttonStyle('motion')}>
            Motion
          </button>
          <button onClick={() => setSelectedCategory('3d')} className={buttonStyle('3d')}>
            3D
          </button>
          
        </div>

        {/* Render selected projects */}
        <div className=" w-full">
          {renderPage()}
        </div>

      </div>
    </Container>
  );
}

export default AllTypeProjects;
