'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Blog02() {
  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 bg-gray-50 text-gray-800 rounded-xl shadow-md space-y-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 className="text-3xl font-bold text-blue-700 mb-4" whileHover={{ scale: 1.02 }}>
        🔐 How to Activate MS Office Easily using MAS
      </motion.h1>

      <div className="space-y-4">
        <p className="text-sm text-red-600 font-semibold">⚠️ Important:</p>
        <p>
          <strong>Make sure Windows or MS Office is already installed</strong> on your PC before trying to activate it.  
          If not, download and install them from the links below:
        </p>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <h3 className="font-semibold text-lg mb-2">📥 Download Links</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>
              🪟{' '}
              <Link href="https://www.microsoft.com/en-us/software-download/windows11" target="_blank" className="text-blue-600 underline">
                Download Windows (Official Microsoft)
              </Link>
            </li>
            <li>
              📦{' '}
              <Link
                href="https://answers.microsoft.com/en-us/msoffice/forum/all/office-2021-professional-plus-download-link/d1072227-6f49-43c8-bbb1-193912592d4a"
                target="_blank"
                className="text-blue-600 underline"
              >
                Download MS Office 2021 Professional Plus
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">🪟 Step-by-Step Activation Guide</h2>

        <div className="space-y-2">
          <h3 className="font-semibold text-lg">🔹 Step 1: Open PowerShell</h3>
          <ul className="list-disc list-inside ml-4">
            <li>Right-click on the <strong>Start</strong> button</li>
            <li>Select <strong>Windows PowerShell</strong> (⚠️ Not CMD)</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-lg">🔹 Step 2: Run the Activation Script</h3>
          <p>Paste the command below into PowerShell and press <strong>Enter</strong>:</p>
          <pre className="bg-gray-100 rounded-md p-4 text-sm overflow-x-auto">
            <code className="text-blue-700">irm https://get.activated.win | iex</code>
          </pre>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-lg">🔹 Step 3: Choose What to Activate</h3>
          <ul className="list-disc list-inside ml-4">
            <li>Press <strong>1</strong> → Activate <strong>Windows</strong> (Permanent – HWID method)</li>
            <li>Press <strong>2</strong> → Activate <strong>MS Office</strong> (Permanent - via Ohook)</li>
          </ul>
        </div>

        <div className="bg-green-50 border border-green-200 p-4 rounded-lg space-y-2">
          <h4 className="font-semibold text-green-700">💡 For Windows Activation</h4>
          <ul className="list-disc list-inside ml-4">
            <li>Press <code>1</code></li>
            <li>Activation will begin automatically</li>
            <li>Wait until it says <strong>"Activation successful ✅"</strong></li>
          </ul>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg space-y-2">
          <h4 className="font-semibold text-yellow-700">💡 For MS Office Activation</h4>
          <ul className="list-disc list-inside ml-4">
            <li>Press <code>2</code></li>
            <li>Choose <strong>Install Ohook</strong> when prompted</li>
            <li>Wait for the activation to complete</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">🔁 Step 4: Restart Your Computer</h3>
          <p>Once the activation is finished, <strong>restart your PC</strong> to apply changes.</p>
        </div>
      </section>

      <hr className="my-6 border-gray-300" />

      <div className="text-center text-xl text-green-600 font-semibold">
        🎉 Done! Your <span className="font-bold">Windows</span> or <span className="font-bold">Microsoft Office</span> is now successfully activated. Enjoy! 🙌
      </div>
    </motion.div>
  );
}
