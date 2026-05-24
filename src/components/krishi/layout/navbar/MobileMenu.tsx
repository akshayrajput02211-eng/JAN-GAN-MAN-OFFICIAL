"use client";

import { Menu } from "lucide-react";

export default function MobileMenu() {
  return (
    <button
      className="
      flex h-11 w-11
      items-center justify-center

      rounded-2xl

      border border-white/40 dark:border-slate-700/40

      bg-white/70 dark:bg-slate-800/70

      backdrop-blur-xl

      transition-all duration-300

      hover:scale-105
      hover:shadow-lg
      hover:shadow-green-500/10

      lg:hidden
    "
    >
      <Menu
        className="
        h-5 w-5
        text-slate-800 dark:text-white
      "
      />
    </button>
  );
}