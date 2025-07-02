'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FotterTextBounce from './FotterTextBounce';

export default function Blog01() {
  const [learnMore, setLearnMore] =useState(false);

  return (
    <motion.section
      className="max-w-4xl mx-auto p-6 bg-gray-50 text-gray-800 rounded-b-xl shadow-md space-y-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 className="text-2xl font-bold text-indigo-600" >
        What is Git and GitHub?
      </motion.h1>

      <p className="text-base leading-relaxed">
        If you're a developer or just stepping into coding, you've probably heard of <strong>Git</strong> and{' '}
        <strong>GitHub</strong>. These tools are like superpowers for programmers when it comes to managing code and
        working in teams.
      </p>

      <button onClick={()=>setLearnMore(!learnMore)} className='mastShadow py-1 px-6 border border-black/30 hover:border-white/30 hover:bg-blue-300 hover:rounded mb-10'>Learn More</button>
      {
        learnMore && (
          <>
           {/* Git Section */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-indigo-500">What is Git?</h2>
              <p>
                <strong>Git</strong> is a free and open-source <em>version control system</em>. It was created by{' '}
                <strong>Linus Torvalds</strong> in 2005 — the same person who made the Linux operating system.
              </p>
              <p>
                Git lets developers track changes in their code over time. You can go back to a previous version, see who
                changed what and when, and experiment safely with new features using branches.
              </p>
            </div>

            {/* GitHub Section */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-indigo-500">What is GitHub?</h2>
              <p>
                <strong>GitHub</strong> is a web-based platform that hosts Git repositories. It was founded in 2008 by{' '}
                <strong>Tom Preston-Werner, Chris Wanstrath, and PJ Hyett</strong>.
              </p>
              <p>
                GitHub adds collaboration, issue tracking, code reviews, and even project management tools — all in one place.
                Developers can share their code with others, work on open-source projects, or collaborate on teams more easily.
              </p>
            </div>

            {/* Why It's Useful */}
            <div>
              <h2 className="text-2xl font-semibold text-indigo-500">Why is it useful for developers?</h2>
              <ul className="list-disc list-inside space-y-2 mt-2 text-gray-800">
                <li>
                  <strong>Version control</strong>: <span className='text-neutral-500'>Go back to working code when things break.</span>
                </li>
                <li>
                  <strong>Collaboration</strong>: <span className='text-neutral-500'>Work with other developers on the same project — from anywhere!</span>
                </li>
                <li>
                  <strong>Experiment safely</strong>: <span className='text-neutral-500'> Use branches to test ideas without affecting main code.</span>
                </li>
                <li>
                  <strong>History tracking</strong>: <span className='text-neutral-500'> Know who made what change and when.</span>
                </li>
                <li>
                  <strong>Open-source sharing</strong>: <span className='text-neutral-500'> Contribute to global software projects.</span>
                </li>
              </ul>
            </div>

            {/* Final Thoughts */}
            <div>
              <h2 className="text-2xl font-semibold text-indigo-500 py-1">Final Thoughts</h2>
              <p className='mb-15'>
                Git and GitHub are essential tools for any modern developer. They make coding more organized, more
                collaborative, and — honestly — more fun. If you're not using them yet, start today. It's a game-changer!
              </p>
            </div>
      </>
      )}

     

      <FotterTextBounce author={'Sharwan jung kunwar'} tag01={'Git'} tag02={'Github'} tag03={'DeveloperTool'} tag04={'Programming'}/>
    </motion.section>
  );
}
