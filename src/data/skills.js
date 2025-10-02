// src/data/skills.js
import {
  SiPython, SiPytorch, SiTensorflow, SiJavascript, SiReact, SiNodedotjs, 
  SiFigma, SiGit, SiCplusplus, SiHtml5, SiCss3, SiPhp, SiMysql, 
  SiBlender, SiVite, SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa'; // FaJava is often preferred for Java
import { VscSymbolNamespace } from "react-icons/vsc"; // Placeholder for NLP/Prompt Eng.

export const skills = [
  // --- CORE SKILLS ---
  { name: 'Python', icon: SiPython, level: 'core' },
  { name: 'AI & ML', icon: SiPytorch, level: 'core' }, // Representing with a key framework
  { name: 'NLP', icon: VscSymbolNamespace, level: 'core' }, // Using a generic icon
  { name: 'React', icon: SiReact, level: 'core' },
  { name: 'Node.js', icon: SiNodedotjs, level: 'core' },
  { name: 'UI/UX Design', icon: SiFigma, level: 'core' }, // Representing with Figma
  
  // --- ADDITIONAL SKILLS ---
  { name: 'Java', icon: FaJava, level: 'other' },
  { name: 'C/C++', icon: SiCplusplus, level: 'other' },
  { name: 'Git', icon: SiGit, level: 'other' },
  { name: 'Next.js', icon: SiNextdotjs, level: 'other' },
  { name: 'JavaScript', icon: SiJavascript, level: 'other' },
  //   { name: 'TypeScript', icon: SiTypescript, level: 'other' },
  { name: 'SQL', icon: SiMysql, level: 'other' },
  { name: 'MongoDB', icon: SiMongodb, level: 'other' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'other' },
  { name: 'HTML5', icon: SiHtml5, level: 'other' },
  { name: 'CSS', icon: SiCss3, level: 'other' },
  { name: 'PHP', icon: SiPhp, level: 'other' },
  { name: 'Blender', icon: SiBlender, level: 'other' },
];