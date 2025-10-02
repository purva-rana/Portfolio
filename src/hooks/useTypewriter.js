// src/hooks/useTypewriter.js
import { useState, useEffect, useRef } from 'react';

export function useTypewriter(text, speed = 60) {
  const [typedText, setTypedText] = useState('');
  const [isDone, setIsDone] = useState(false);
  const index = useRef(0);
  const timeoutId = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setTypedText(text);
      setIsDone(true);
      return;
    }

    // Reset everything on each run
    setTypedText('');
    setIsDone(false);
    index.current = 1; // Start index at 1 for the first slice

    const type = () => {
      if (index.current <= text.length) {
        // Build the string from the original source using slice
        // This is more reliable than appending characters
        setTypedText(text.slice(0, index.current));
        index.current++;
        timeoutId.current = setTimeout(type, speed);
      } else {
        setIsDone(true);
      }
    };

    // Start the first tick
    timeoutId.current = setTimeout(type, speed);

    // Cleanup clears the scheduled timeout
    return () => clearTimeout(timeoutId.current);
  }, [text, speed]);

  return { typedText, isDone };
}