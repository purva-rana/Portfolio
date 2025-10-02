// src/components/Contact.jsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SiGithub, SiLinkedin } from 'react-icons/si';

// Consistent animation variants from other sections
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-6 max-w-8xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2 variants={itemVariants} className="text-3xl font-semibold mb-4">
          Let's Connect.
        </motion.h2>

        <motion.p variants={itemVariants} className="text-[color:var(--muted-gray)] mb-8">
          Whether it's a question, a project collaboration, or a chat about the future of human-AI interaction—my inbox is always open.
        </motion.p>

        {/* --- Social Links --- */}
        <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-12">
          <a href="https://linkedin.com/in/purva-rana " target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <SiLinkedin size={32} />
          </a>
          <a href="https://github.com/purva-rana" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <SiGithub size={32} />
          </a>
        </motion.div>

        <motion.form variants={itemVariants} className="grid gap-4" onSubmit={handleSubmit}>
          {/* --- Reordered for intuitive flow --- */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded-md bg-[color:var(--surface-800)] border border-[rgba(255,255,255,0.04)]"
            rows="5"
            placeholder="Message"
            required
          />
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-md bg-[color:var(--surface-800)] border border-[rgba(255,255,255,0.04)]"
            placeholder="From"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-md bg-[color:var(--surface-800)] border border-[rgba(255,255,255,0.04)]"
            placeholder="Your Email"
            type="email"
            required
          />
          <motion.button
            type="submit"
            className="btn-primary"
            disabled={status === 'sending'}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
        
        <div className="mt-4 min-h-[24px]"> {/* Prevents layout shift */}
          {status === 'success' && <p className="text-green-500">Message sent successfully!</p>}
          {status === 'error' && <p className="text-red-500">Something went wrong. Please try again.</p>}
        </div>
      </div>
    </motion.section>
  );
}