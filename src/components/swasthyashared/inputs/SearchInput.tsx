"use client";

import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div
      className="
      flex items-center overflow-hidden
      rounded-2xl border border-neutral-200
      bg-white shadow-sm
    "
    >
      <input
        placeholder="Search doctors, medicines..."
        className="
        h-14 flex-1 bg-transparent px-5
        outline-none
      "
      />

      <button
        className="
        flex h-14 w-14 items-center justify-center
        bg-green-600 text-white
        transition-all duration-300
        hover:bg-green-700
      "
      >
        <Search size={20} />
      </button>
    </div>
  );
}