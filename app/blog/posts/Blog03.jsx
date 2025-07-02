'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FotterTextBounce from './FotterTextBounce';

export default function BlogProgrammingHistory() {
  const [learnMore, setLearnMore] = useState(false);

  return (
    <motion.section
      className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-neutral-700 text-gray-800 rounded-b-xl shadow-md space-y-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 className="text-2xl font-bold text-indigo-600">
        Programming History: From Punch Cards to Pixels
      </motion.h1>

      <p className="text-base leading-relaxed dark:text-gray-50">
        Ever wondered how we went from banging on punch cards to writing slick JavaScript? Programming’s journey is like a classic underdog story—full of twists, turns, and a few “What was THAT?” moments.
      </p>

      <button
        onClick={() => setLearnMore(!learnMore)}
        className="mastShadow py-1 px-6 border border-black/30 hover:border-white/30 hover:bg-blue-300 hover:rounded mb-10 dark:border-white/30 dark:text-gray-50 hover:dark:text-black"
      >
        Dive Deeper
      </button>

      {learnMore && (
        <>
          {/* Early Days */}
          <div className="space-y-2 dark:text-gray-200">
            <h2 className="text-2xl font-semibold text-indigo-500">The Punch Card Era</h2>
            <p>
              Before we had laptops, programmers used punch cards—literal cards with holes—to tell computers what to do. It was like coding with an old-school mixtape: one mistake and the whole thing skipped a beat.
            </p>
          </div>

          {/* Ada Lovelace: The OG Coder */}
          <div className="space-y-2 dark:text-gray-200">
            <h2 className="text-2xl font-semibold text-indigo-500">Ada Lovelace: The First Programmer</h2>
            <p>
              In the 1840s, Ada wrote the first algorithm for a mechanical computer. She basically hacked the 19th century—way before “coding” was even a word.
            </p>
          </div>

          {/* Modern Languages Arrive */}
          <div className="space-y-2 dark:text-gray-200">
            <h2 className="text-2xl font-semibold text-indigo-500">Hello, Fortran and Friends</h2>
            <p>
              Fast forward to the mid-1900s: languages like Fortran and COBOL made coding easier (or at least less painful). Suddenly, computers went from “giant mysterious machines” to “tools that could help humans do math.”
            </p>
          </div>

          {/* Today’s Playground */}
          <div>
            <h2 className="text-2xl font-semibold text-indigo-500">Why We Love Coding Today</h2>
            <ul className="list-disc list-inside space-y-2 mt-2 text-gray-800 dark:text-gray-200">
              <li><strong>Creativity</strong>: Code lets you build worlds—sometimes even ones that don’t crash!</li>
              <li><strong>Community</strong>: Millions of coders worldwide nerding out and sharing cool stuff.</li>
              <li><strong>Power</strong>: From apps to AI, programming runs the modern world (and memes).</li>
            </ul>
          </div>

          {/* Final Thoughts */}
          <div>
            <h2 className="text-2xl font-semibold text-indigo-500 py-1">The TL;DR</h2>
            <p className="mb-15 dark:text-gray-200">
              Programming’s history is a wild ride—from punch cards to pixels. It’s messy, fascinating, and absolutely worth the dive. So grab your keyboard and join the fun—we’re all part of the story now!
            </p>
          </div>
        </>
      )}

      <FotterTextBounce
        author={'Sharwan Jung Kunwar'}
        tag01={'Programming'}
        tag02={'History'}
        tag03={'Coding'}
        tag04={'Tech'}
      />
    </motion.section>
  );
}
