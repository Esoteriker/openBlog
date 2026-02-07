"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type ThemeToggleProps = {
  lightLabel: string;
  darkLabel: string;
  loadingLabel: string;
};

export function ThemeToggle({ lightLabel, darkLabel, loadingLabel }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="rounded-md border border-border/80 bg-canvas/75 px-3 py-1.5 text-xs font-semibold text-ink/75"
      >
        {loadingLabel}
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-md border border-border/90 bg-canvas/70 px-3 py-1.5 text-xs font-semibold text-ink transition hover:border-accent"
      aria-label="Toggle theme"
    >
      {isDark ? lightLabel : darkLabel}
    </button>
  );
}
