'use client'; // Required for using state and event handlers in some frameworks

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // Tracking submission status

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
        setFormData({ name: '', email: '', message: '' }); // Clear form on success
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-12 mx-auto px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Let's connect</h2>
        <p className="text-[color:var(--muted-gray)] mb-6">I'm open to research conversations, RA/intern collaborations, and project partnerships.</p>

        <form className="grid gap-4" onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-md bg-[color:var(--surface-800)] border border-[rgba(255,255,255,0.04)] text-left"
            placeholder="Your name"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-md bg-[color:var(--surface-800)] border border-[rgba(255,255,255,0.04)] text-left"
            placeholder="Your email"
            type="email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded-md bg-[color:var(--surface-800)] border border-[rgba(255,255,255,0.04)] text-left"
            rows="4"
            placeholder="Message"
            required
          />
          <motion.button
            type="submit"
            className="btn-primary"
            disabled={status === 'sending'}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </motion.button>
        </form>
        
        {status === 'success' && <p className="text-green-500 mt-4">Message sent successfully!</p>}
        {status === 'error' && <p className="text-red-500 mt-4">Something went wrong. Please try again.</p>}
      </div>
    </section>
  );
}