"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import { Sun, Moon } from "lucide-react"; // импорт lucide иконок

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const theme = useMemo(() => (mounted ? resolvedTheme ?? "dark" : "dark"), [mounted, resolvedTheme]);
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-11 w-24 items-center rounded-full border border-soft bg-glass px-2 text-[0.55rem] font-semibold uppercase tracking-[0.35em] text-muted transition hover:border-strong"
    >
      <motion.span
        layout
        initial={false}
        animate={{ x: isDark ? 44 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className="absolute top-1 left-1 flex h-9 w-10 items-center justify-center rounded-full shadow-soft"
        style={{
          backgroundColor: isDark ? "var(--accent-text)" : "var(--accent-bg)",
          color: isDark ? "var(--accent-bg)" : "var(--accent-text)",
        }}
      >
        {isDark ? (
          <Moon className="h-5 w-5" strokeWidth={2} />
        ) : (
          <Sun className="h-5 w-5" strokeWidth={2} />
        )}
      </motion.span>
      <span className="relative z-10 flex w-full justify-between pr-1">
        <span className={isDark ? "opacity-40" : "opacity-100"}>Day</span>
        <span className={isDark ? "opacity-100" : "opacity-40"}>Night</span>
      </span>
    </button>
  );
}
