import React from "react";
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <div className="min-h-screen bg-[color:var(--bg-900)] text-[color:var(--muted-ink)]">
      <Navbar />
      <main className="container mx-auto px-6 lg:px-8">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <SpeedInsights />
    </div>
  );
}

export default App;
