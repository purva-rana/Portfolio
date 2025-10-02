// src/hooks/useTypewriter.js
import { useState, useEffect } from 'react';

// A clean, reusable hook for the typewriter effect.
export function useTypewriter(text, speed = 60) {
  const [typedText, setTypedText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Gracefully handle OS-level preference for reduced motion.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setTypedText(text);
      setIsDone(true);
      return;
    }

    let i = 0;
    setTypedText('');
    setIsDone(false);

    const timer = setInterval(() => {
      if (i < text.length) {
        setTypedText(prev => prev + text.charAt(i));
        i++;
      } else {
        setIsDone(true);
        clearInterval(timer);
      }
    }, speed);

    // Cleanup function to prevent memory leaks.
    return () => clearInterval(timer);
  }, [text, speed]); // Reruns only if text or speed changes.

  return { typedText, isDone };
}