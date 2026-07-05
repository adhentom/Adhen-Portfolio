"use client";

import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type FlipWordsProps = {
  words: string[];
  duration?: number;
  className?: string;
};

export function FlipWords({ words, duration = 2600, className }: FlipWordsProps) {
  const safeWords = useMemo(() => words.filter(Boolean), [words]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeWords.length <= 1) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % safeWords.length);
    }, duration);

    return () => window.clearInterval(timer);
  }, [duration, safeWords.length]);

  if (!safeWords.length) return null;

  const currentWord = safeWords[index % safeWords.length];

  return (
    <span className={cn("flip-words", className)} aria-live="polite">
      <span key={currentWord} className="flip-word">
        {currentWord.split("").map((letter, letterIndex) => (
          <span key={`${letter}-${letterIndex}`} style={{ "--letter-index": letterIndex } as CSSProperties}>
            {letter}
          </span>
        ))}
      </span>
    </span>
  );
}
