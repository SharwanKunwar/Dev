'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function SkillsCard() {
  const skillData = [
    { name: 'C', level: 90 },
    { name: 'Java', level: 80 },
    { name: 'JavaScript', level: 60 },
    { name: 'Html/CSS', level: 90 },
    { name: 'React', level: 60 },
    { name: 'Next.js', level: 50 },
    { name: 'Node.js', level: 60 },
    { name: 'Tailwind CSS', level: 75 },
    { name: 'Motion', level: 60 },
    { name: 'React Three Fiber | 3D', level: 10},
    { name: 'Spring Boot', level: 0 },
    { name: 'PostgreSQL', level: 20 },

  ];

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 bg-gray-100 gap-5 py-6 px-4 rounded-lg'>
      {skillData.map((skill, index) => (
        <SkillProgress key={index} skill={skill} />
      ))}
    </div>
  );
}

function SkillProgress({ skill }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const step = skill.level / 40; // animation speed control
      const interval = setInterval(() => {
        start += step;
        if (start >= skill.level) {
          setValue(skill.level);
          clearInterval(interval);
        } else {
          setValue(Math.floor(start));
        }
      }, 20); // 20ms interval
    }
  }, [isInView, skill.level]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className='bg-white/30 backdrop-blur-2xl shadow-md w-full h-full p-4 rounded-md transition-transform hover:scale-[1.02] mastShadow'
    >
      <div className="flex justify-between items-center mb-2">
        <label className='font-semibold text-gray-800'>{skill.name}</label>
        <span className='text-sm font-medium text-gray-700'>{value}%</span>
      </div>
      <input
        type='range'
        min={0}
        max={100}
        value={value}
        readOnly
        className='w-full bg-indigo-500'
      />
    </motion.div>
  );
}

export default SkillsCard;
