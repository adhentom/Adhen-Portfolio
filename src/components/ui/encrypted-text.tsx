"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type EncryptedTextProps = {
  text: string;
  className?: string;
  revealDelayMs?: number;
  charset?: string;
  flipDelayMs?: number;
  encryptedClassName?: string;
  revealedClassName?: string;
};

const DEFAULT_CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@._-+";

function randomCharacter(charset: string) {
  return charset.charAt(Math.floor(Math.random() * charset.length));
}

function scrambleText(text: string, charset: string) {
  return text
    .split("")
    .map((char) => (char === " " ? " " : randomCharacter(charset)))
    .join("");
}

export function EncryptedText({
  text,
  className,
  revealDelayMs = 42,
  charset = DEFAULT_CHARSET,
  flipDelayMs = 38,
  encryptedClassName,
  revealedClassName,
}: EncryptedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const animationFrame = useRef<number | null>(null);
  const startTime = useRef(0);
  const lastFlipTime = useRef(0);
  const [isInView, setIsInView] = useState(false);
  const [revealCount, setRevealCount] = useState(text.length);
  const [scrambled, setScrambled] = useState(text);
  const prefersReducedMotion = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion) {
      setRevealCount(text.length);
      setScrambled(text);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersReducedMotion, text]);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    let cancelled = false;

    const tick = (now: number) => {
      if (cancelled) return;

      const nextRevealCount = Math.min(text.length, Math.floor((now - startTime.current) / Math.max(1, revealDelayMs)));
      setRevealCount(nextRevealCount);

      if (nextRevealCount >= text.length) {
        setScrambled(text);
        return;
      }

      if (now - lastFlipTime.current >= Math.max(1, flipDelayMs)) {
        setScrambled((current) =>
          text
            .split("")
            .map((char, index) => {
              if (index < nextRevealCount) return char;
              if (char === " ") return " ";
              return current[index] && Math.random() > 0.45 ? current[index] : randomCharacter(charset);
            })
            .join(""),
        );
        lastFlipTime.current = now;
      }

      animationFrame.current = requestAnimationFrame(tick);
    };

    animationFrame.current = requestAnimationFrame((now) => {
      if (cancelled) return;
      setRevealCount(0);
      setScrambled(scrambleText(text, charset));
      startTime.current = now;
      lastFlipTime.current = now;
      animationFrame.current = requestAnimationFrame(tick);
    });

    return () => {
      cancelled = true;
      if (animationFrame.current !== null) cancelAnimationFrame(animationFrame.current);
    };
  }, [charset, flipDelayMs, isInView, prefersReducedMotion, revealDelayMs, text]);

  if (!text) return null;

  return (
    <span ref={ref} className={cn(className)} aria-label={text} role="text">
      {text.split("").map((char, index) => {
        const revealed = index < revealCount;
        const display = revealed ? char : scrambled[index] ?? char;
        return (
          <span key={`${char}-${index}`} className={cn(revealed ? revealedClassName : encryptedClassName)}>
            {display}
          </span>
        );
      })}
    </span>
  );
}
