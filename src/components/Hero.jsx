import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  // headline to type
  const headline = "Hi! I'm Purva Rana";
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Respect reduced motion in OS preferences
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setTyped(headline);
      setDone(true);
      return;
    }

    let i = 0;
    const tick = () => {
      if (i <= headline.length) {
        setTyped(headline.slice(0, i));
        i++;
        // base speed; optional small jitter
      } else {
        setDone(true);
        clearInterval(timer);
      }
    };
    // typing speed (ms)
    const speed = 60;
    const timer = setInterval(tick, speed);
    return () => clearInterval(timer);
  }, []);

  const subline =
    "My work explores the intersection of code, design, and cognition—creating tools that don't just automate, but collaborate.";

  return (
    <section
      id="hero"
      className="relative  w-full flex justify-center items-center pt-12 pb-20"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center container mx-auto px-6 lg:px-8">
        <div className="max-w-xl z-30 relative">
          {/* Screen-reader friendly full headline immediately available */}
          <span className="sr-only" role="text">
            {headline} — {subline}
          </span>

          {/* Visible typed headline */}
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold leading-tight">
            <span className="inline-block text-[color:var(--muted-ink)]">
              <span aria-hidden="true">{typed}</span>
              {/* caret */}
              {!done ? (
                <span
                  className="inline-block ml-1 animate-caret"
                  aria-hidden="true"
                >
                  |
                </span>
              ) : null}
            </span>
          </h1>

          {/* Subline: fade in once typing is done */}
          <motion.p
            className="mt-4 text-lg hero-subline"
            initial={{ opacity: 0, y: 6 }}
            animate={done ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            {subline}
          </motion.p>

          <div className="mt-6 flex gap-4">
            <ScrollLink
              to="projects"
              smooth
              offset={-80}
              className="cursor-pointer"
            >
              {/* 👇 We are converting this button into a motion.button and adding animation props */}
              <motion.button
                className="btn-primary" // Your existing class for styling (gradient, padding, etc.)
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Discover More
              </motion.button>
            </ScrollLink>
          </div>
          {/* <ScrollLink
              to="projects"
              smooth
              offset={-80}
              className="cursor-pointer"
            >
              <button className="button-secondary">Explore My Work</button>
            </ScrollLink> */}
        </div>

        {/* hero art placeholder */}
        <div
          className="hero-art w-full flex justify-center items-center z-0"
          aria-hidden="true"
        >
          <div
            className="w-[420px] h-[300px] rounded-2xl"
            style={{
              background: "linear-gradient(120deg,#7C5CFF,#5DD3FF)",
              boxShadow: "0 12px 40px rgba(2,6,23,0.6)",
            }}
          />
        </div>
      </div>
      {/* <SnowParticles count={18} /> */}
    </section>
  );
}
