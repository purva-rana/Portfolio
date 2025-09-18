import React from "react";
import { motion } from "framer-motion";
import useWindowSize from "../hooks/useWindowSize";

export default function About() {
  return (
    <motion.section
      id="about"
      className="pb-8 px-6 max-w-8xl mx-auto" // Your existing class names
      // 4. Conditionally apply the variants based on screen size
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 1.7}}// Trigger when 30% is in view
    >
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-[color:var(--muted-gray)] leading-relaxed">
          I'm Purva Rana, a builder and designer who thrives at the intersection
          of human-AI collaboration, interaction design, and applied research.
          My focus is on creating systems that feel alive — not just working in
          the background, but engaging people with clarity, care, and delight.
          Experiences that feel natural, thoughtful, and genuinely enjoyable. I
          believe technology should amplify creativity and productivity, not
          diminish it.
        </p>

        <p className="mt-4 text-[color:var(--muted-gray)] leading-relaxed">
          Blending the precision of engineering with the eye of design, I
          explore how intelligence can be shaped into tools that inspire,
          empower, and evolve with people. For me, it's not just about code or
          design alone — it's about designing intelligence with purpose.
        </p>
    </motion.section>
  );
}
