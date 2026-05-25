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
        className="theme-toggle-loading"
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
      className="theme-toggle"
      aria-label={isDark ? lightLabel : darkLabel}
    >
      <span
        className={`theme-toggle-thumb ${
          isDark ? "translate-x-[38px]" : "translate-x-0"
        }`}
      />
      <span className="theme-toggle-icons">
        <span className={`theme-toggle-icon ${!isDark ? "theme-toggle-icon-active" : ""}`}>☀</span>
        <span className={`theme-toggle-icon ${isDark ? "theme-toggle-icon-active" : ""}`}>☾</span>
      </span>
    </button>
  );
}
