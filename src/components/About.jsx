import React from "react";
import { motion } from "framer-motion";

export default function About(){
  return (
    <section id="about" className="py-12">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-[color:var(--muted-gray)] leading-relaxed">
          I'm Purva Rana, a builder and designer who thrives at the intersection of human-AI collaboration, interaction design, and applied research.
          My focus is on creating systems that feel alive — not just working in the background, but engaging people with clarity, care, and delight.
          Experiences that feel natural, thoughtful, and genuinely enjoyable. I believe technology should amplify creativity and productivity, not diminish it.
        </p>

        <p className="mt-4 text-[color:var(--muted-gray)] leading-relaxed">
          Blending the precision of engineering with the eye of design, I explore how intelligence can be shaped into tools that inspire, empower, and evolve with people.
          For me, it's not just about code or design alone — it's about designing intelligence with purpose.
        </p>
      </div>
    </section>
  );
}
