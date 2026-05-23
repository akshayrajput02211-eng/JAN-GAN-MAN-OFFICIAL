"use client";

import {
  Moon,
  Sun,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const {
    resolvedTheme,
    setTheme,
  } = useTheme();

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark =
    resolvedTheme === "dark";

  return (
    <button
      onClick={() =>
        setTheme(
          isDark
            ? "light"
            : "dark"
        )
      }
      className="
        flex
        h-11
        w-11

        items-center
        justify-center

        rounded-2xl

        border
        border-slate-200/60

        bg-white

        shadow-lg

        transition-all
        duration-300

        hover:scale-105

        dark:bg-slate-800
        dark:border-slate-700/60
      "
    >
      {isDark ? (
        <Sun
          size={19}
          className="text-yellow-400"
        />
      ) : (
        <Moon
          size={18}
          className="text-slate-700 dark:text-slate-200"
        />
      )}
    </button>
  );
}