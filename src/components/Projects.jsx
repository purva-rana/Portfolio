import React from "react";
import projects from "../data/projects";

function ProjectCard({p}){
  return (
    <article className="bg-[color:var(--surface-800)] p-6 rounded-2xl border border-[rgba(255,255,255,0.03)]">
      <h3 className="font-semibold text-lg">{p.title}</h3>
      <p className="text-[color:var(--muted-gray)] mt-1">{p.subtitle}</p>

      <ul className="mt-3 text-sm space-y-1">
        <li><strong>Features:</strong> {p.features.join(" · ")}</li>
        <li><strong>Impact:</strong> {p.impact}</li>
        <li><strong>Tech:</strong> {p.tech}</li>
        <li><strong>Status:</strong> {p.status}</li>
      </ul>
    </article>
  );
}

export default function Projects(){
  return (
    <section id="projects" className="py-12">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
