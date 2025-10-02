// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  const coreSkills = skills.filter(skill => skill.level === 'core');
  const otherSkills = skills.filter(skill => skill.level === 'other');

  return (
    <motion.section
      id="skills"
      className="py-12 px-6 max-w-8xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants} className="text-2xl font-semibold my-8 text-center">
        {/* Core Technologies */}
        My Go-To Stack
      </motion.h2>
      
      {/* Grid for Core Skills */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6"
        variants={containerVariants}
      >
        {coreSkills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-3 p-6 bg-[color:var(--surface-800)] rounded-lg border border-[rgba(255,255,255,0.04)]"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0px 0px 20px rgba(168, 85, 247, 0.3)',
              transition: { type: 'spring', stiffness: 300 }
            }}
          >
            <skill.icon className="w-12 h-12" />
            <span className="text-sm text-center">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.h3 variants={itemVariants} className="text-xl font-semibold my-10 text-center text-slate-400">
        Also In My Arsenal
      </motion.h3>

      {/* Flex container for Other Skills */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4"
        variants={containerVariants}
      >
        {otherSkills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="flex items-center gap-2 px-4 py-2 bg-[color:var(--surface-800)] rounded-full border border-[rgba(255,255,255,0.04)]"
          >
            <skill.icon className="w-5 h-5" />
            <span className="text-sm">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}