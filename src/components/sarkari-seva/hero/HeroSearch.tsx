// components/hero/HeroSearch.tsx

"use client";

import { Search, Mic } from "lucide-react";

export default function HeroSearch() {
  return (
    <div className="w-full max-w-2xl">
      <div
        className="
        flex items-center
        bg-white
        rounded-2xl
        overflow-hidden
        border border-gray-200
        shadow-lg
      "
      >
        <div className="px-4 text-gray-400">
          <Search size={20} />
        </div>

        <input
          type="text"
          placeholder="Kuch bhi search karein..."
          className="
            flex-1
            h-14
            outline-none
            text-sm
            text-gray-700
          "
        />

        <button className="text-gray-400 px-3">
          <Mic size={20} />
        </button>

        <button
          className="
          h-14
          w-16
          bg-green-600
          hover:bg-green-700
          flex items-center justify-center
          text-white
          transition
        "
        >
          <Search size={20} />
        </button>
      </div>
    </div>
  );
}