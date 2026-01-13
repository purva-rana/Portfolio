import React from "react";
import projects from "../data/projects";
import { motion } from "framer-motion";
import { GithubIcon } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // 0.2 second delay between each card
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Start invisible and 50px down
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

function ProjectCard({ p }) {
  return (
    <a
      href={p.github}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <motion.article
        variants={cardVariants}
        whileHover={{
          scale: 1.03,
          boxShadow: "0px 10px 30px rgba(168, 85, 247, 0.3)", // The purple glow effect
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }} // A smooth, springy transition
        className="bg-[color:var(--surface-800)] p-6 rounded-2xl border border-[rgba(255,255,255,0.03)] cursor-pointer overflow-hidden" // Added cursor-pointer for better UX
      >
        <div className="absolute top-4 right-4 opacity-0 translate-y-[-6px] transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 text-[color:var(--muted-gray)] group-hover:text-purple-400">
          <GithubIcon size={18} />
        </div>

        <h3 className="font-semibold text-lg">{p.title}</h3>
        <p className="text-[color:var(--muted-gray)] mt-1">{p.subtitle}</p>

        <ul className="mt-3 text-sm space-y-1">
          <li>
            <strong>Features:</strong> {p.features.join(" · ")}
          </li>
          <li>
            <strong>Impact:</strong> {p.impact}
          </li>
          <li>
            <strong>Tech:</strong> {p.tech}
          </li>
          <li>
            <strong>Status:</strong> {p.status}
          </li>
        </ul>

        {p.showCTA && (
          <div className="mt-4 inline-flex items-center gap-2 text-sm text-purple-400 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            View Repo →
          </div>
        )}
      </motion.article>
    </a>
  );
}

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the section is visible
    >
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <motion.div
        variants={containerVariants}
        className="grid md:grid-cols-2 gap-6"
      >
        {projects.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </motion.div>
    </motion.section>
  );
}
