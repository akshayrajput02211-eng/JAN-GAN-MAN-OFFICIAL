
"use client";

import { Menu } from "lucide-react";

export default function MobileMenu() {
  return (
    <button
      className="
      flex h-11 w-11 items-center justify-center
      rounded-2xl border border-white/40
      bg-white/70 lg:hidden
    "
    >
      <Menu className="h-5 w-5 text-slate-800" />
    </button>
  );
}