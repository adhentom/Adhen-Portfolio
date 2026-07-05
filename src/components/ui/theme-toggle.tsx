"use client";

import { useEffect, useRef } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
  isDark: boolean;
  onChange: (isDark: boolean) => void;
};

export function ThemeToggle({ className, isDark, onChange }: ThemeToggleProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleClick = () => {
      onChange(!isDark);
    };

    button.addEventListener("click", handleClick);
    return () => button.removeEventListener("click", handleClick);
  }, [isDark, onChange]);

  return (
    <button
      ref={buttonRef}
      type="button"
      className={cn("theme-toggle", isDark ? "is-dark" : "is-light", className)}
      aria-label={isDark ? "Switch website to light mode" : "Switch website to dark mode"}
      aria-pressed={!isDark}
    >
      <span className="theme-toggle-track">
        <span className="theme-toggle-thumb">
          {isDark ? <Moon aria-hidden="true" strokeWidth={1.7} /> : <Sun aria-hidden="true" strokeWidth={1.7} />}
        </span>
        <span className="theme-toggle-ghost">
          {isDark ? <Sun aria-hidden="true" strokeWidth={1.7} /> : <Moon aria-hidden="true" strokeWidth={1.7} />}
        </span>
      </span>
    </button>
  );
}
