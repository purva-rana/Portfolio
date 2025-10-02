// src/components/Navbar.jsx
'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

// An animated hamburger/close icon component
const AnimatedHamburgerIcon = ({ isOpen, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
      aria-label="Toggle menu"
    >
      <motion.div
        className="w-6 h-6 flex flex-col items-center justify-center"
        animate={isOpen ? "open" : "closed"}
      >
        <motion.span
          className="block h-0.5 w-full bg-white"
          variants={{
            closed: { rotate: 0, y: -4 },
            open: { rotate: 42, y: 1 },
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="block h-0.5 w-full bg-white mt-1.5"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="block h-0.5 w-full bg-white mt-1.5"
          variants={{
            closed: { rotate: 0, y: 4 },
            open: { rotate: -42, y: -1 },
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.button>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Define nav links in an array for cleaner, reusable code (Don't Repeat Yourself)
  const navLinks = [
    { to: "hero", label: "Home" },
    { to: "about", label: "About" },
    {to:"skills", label:"Skills"},
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[color:var(--bg-900)]/80 border-b border-[rgba(255,255,255,0.04)]">
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[color:var(--lavender)] to-[color:var(--sky-blue)] flex items-center justify-center font-display text-[color:var(--bg-900)]">PR</div>
          <div className=" font-serif-display text-xl font-bold text-[color:var(--muted-ink)]">Purva Rana</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link) => (
            <ScrollLink key={link.to} to={link.to} smooth offset={-80} className="cursor-pointer hover:text-[color:var(--lavender)] transition-colors">
              {link.label}
            </ScrollLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="hidden md:inline-block btn-primary px-4 py-2"
            href="/PurvaRana_Resume.pdf" // Use the "safe" version
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <AnimatedHamburgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-4 py-4 border-t border-[rgba(255,255,255,0.04)]">
              {navLinks.map((link) => (
                <ScrollLink key={link.to} to={link.to} smooth offset={-80} className="cursor-pointer py-2" onClick={() => setIsOpen(false)}>
                  {link.label}
                </ScrollLink>
              ))}
              <a
                className="btn-primary px-4 py-2 mt-2"
                href="/PurvaRana_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}