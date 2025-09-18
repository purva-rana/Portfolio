import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar(){
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-[color:var(--bg-900)]/60 border-b border-[rgba(255,255,255,0.04)]">
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[color:var(--lavender)] to-[color:var(--sky-blue)] flex items-center justify-center font-display text-[color:var(--bg-900)]">PR</div>
          <div className="hidden sm:block text-sm text-[color:var(--muted-ink)]">Purva Rana</div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <ScrollLink to="hero" smooth offset={-80} className="cursor-pointer hover:text-[color:var(--lavender)]">Home</ScrollLink>
          <ScrollLink to="about" smooth offset={-80} className="cursor-pointer hover:text-[color:var(--lavender)]">About</ScrollLink>
          <ScrollLink to="projects" smooth offset={-80} className="cursor-pointer hover:text-[color:var(--lavender)]">Projects</ScrollLink>
          <ScrollLink to="contact" smooth offset={-80} className="cursor-pointer hover:text-[color:var(--lavender)]">Contact</ScrollLink>
        </nav>

        <div className="flex items-center gap-3">
          <a className="hidden sm:inline-block btn-primary px-3 py-2 rounded-md" href="/PurvaRana_Resume.pdf" target="_blank"
  rel="noopener noreferrer" >Resume</a>
          <button className="md:hidden p-2 rounded-md border border-[rgba(255,255,255,0.04)]">Menu</button>
        </div>
      </div>
    </header>
  );
}
