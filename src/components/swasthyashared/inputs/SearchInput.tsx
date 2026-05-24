// SEARCHINPUT.tsx

"use client";

import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div
      className="
        flex
        items-center
        overflow-hidden

        rounded-2xl

        border
        border-white/40
        dark:border-slate-700/40

        bg-white
        dark:bg-slate-800

        shadow-sm
      "
    >
      <input
        placeholder="Search doctors, medicines..."
        className="
          h-14
          flex-1

          bg-transparent

          px-5

          text-slate-700
          dark:text-slate-200

          outline-none

          placeholder:text-slate-400
        "
      />

      <button
        className="
          flex
          h-14
          w-14

          items-center
          justify-center

          bg-red-600

          text-white

          transition-all
          duration-300

          hover:bg-red-700
        "
      >
        <Search size={20} />
      </button>
    </div>
  );
}