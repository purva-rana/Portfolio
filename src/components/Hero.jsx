// src/components/Hero.jsx

import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useTypewriter } from "../hooks/useTypewriter"; 

const containerVariants = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  const headline = "Hi! I'm Purva Rana";
  const { typedText: typed, isDone: done } = useTypewriter(headline);

  const subline = "My work explores the intersection of code, design, and cognition—creating tools that don't just automate, but collaborate.";

  return (
    <section id="hero" className="relative flex items-center w-full px-6 py-20 lg:px-8">
      <div className="container mx-auto grid items-center gap-12 md:grid-cols-2">
        
        {/* Text Content: Ordered first for mobile, centered on mobile */}
        <div className="z-10 max-w-xl text-center md:text-left">
          <span className="sr-only">{headline} — {subline}</span>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl" aria-hidden="true">
            {typed}
            {!done && <span className="inline-block ml-1 animate-caret">|</span>}
          </h1>
          
          {/* Staggered animation container for subline and button */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={done ? "visible" : "hidden"}
            className="mt-4"
          >
            <motion.p variants={itemVariants} className="text-lg text-slate-400">
              {subline}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8">
              <ScrollLink to="projects" smooth offset={-80} className="inline-block">
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  Discover More
                </motion.button>
              </ScrollLink>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Art*/}
        <div className="relative flex items-center justify-center" aria-hidden="true">
          <div className="h-64 w-full max-w-sm rounded-2xl bg-gradient-to-br from-[#7C5CFF] to-[#5DD3FF] shadow-2xl shadow-slate-900/50 md:h-72 md:max-w-md" />
        </div>
      </div>
    </section>
  );
}