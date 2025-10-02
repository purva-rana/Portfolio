import React from "react";
import { motion } from "framer-motion";
import useWindowSize from "../hooks/useWindowSize";

export default function About() {
  const { width } = useWindowSize(); 
  const isMobile = width <= 480;
  return (
    <motion.section
      id="about"
      className="py-8 px-6 max-w-3xl mx-auto" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }} // Trigger when 10% is in view
      transition={{ duration: 0.5, ease: "easeOut", delay: isMobile ? 0 : 1.7}}
    >
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-[color:var(--muted-)] leading-relaxed">
          I'm Purva Rana, a builder and designer who thrives at the intersection
          of human-AI collaboration, interaction design, and applied research.
          My focus is on creating systems that feel alive — not just working in
          the background, but engaging people with clarity, care, and delight.
          Experiences that feel natural, thoughtful, and genuinely enjoyable. I
          believe technology should amplify creativity and productivity, not
          diminish it.
        </p>

        <p className="mt-4 text-[color:var(--muted-ink)] leading-relaxed">
          Blending the precision of engineering with the eye of design, I
          explore how intelligence can be shaped into tools that inspire,
          empower, and evolve with people. For me, it's not just about code or
          design alone — it's about designing intelligence with purpose.
        </p>
    </motion.section>
  );
}
