'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Blog01() {
  return (
    <motion.section
      className="max-w-4xl mx-auto p-6 bg-gray-50 text-gray-800 rounded-b-xl shadow-md space-y-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 className="text-3xl font-bold text-indigo-600" whileHover={{ scale: 1.02 }}>
        🔧 What is Git and GitHub?
      </motion.h1>

      <p className="text-base leading-relaxed">
        If you're a developer or just stepping into coding, you've probably heard of <strong>Git</strong> and{' '}
        <strong>GitHub</strong>. These tools are like superpowers for programmers when it comes to managing code and
        working in teams.
      </p>

      {/* Git Section */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-700">👨‍💻 What is Git?</h2>
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
        <h2 className="text-2xl font-semibold text-gray-700">🌐 What is GitHub?</h2>
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
        <h2 className="text-2xl font-semibold text-gray-700">🚀 Why is it useful for developers?</h2>
        <ul className="list-disc list-inside space-y-2 mt-2 text-gray-800">
          <li>
            🔄 <strong>Version control</strong>: Go back to working code when things break.
          </li>
          <li>
            👯‍♂️ <strong>Collaboration</strong>: Work with other developers on the same project — from anywhere!
          </li>
          <li>
            🧪 <strong>Experiment safely</strong>: Use branches to test ideas without affecting main code.
          </li>
          <li>
            📜 <strong>History tracking</strong>: Know who made what change and when.
          </li>
          <li>
            🌍 <strong>Open-source sharing</strong>: Contribute to global software projects.
          </li>
        </ul>
      </div>

      {/* Final Thoughts */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700">🧠 Final Thoughts</h2>
        <p>
          Git and GitHub are essential tools for any modern developer. They make coding more organized, more
          collaborative, and — honestly — more fun. If you're not using them yet, start today. It's a game-changer!
        </p>
      </div>

      <p className="italic text-sm text-right text-gray-500">Written by Sharwan Jung Kunwar 🚀</p>
    </motion.section>
  );
}
