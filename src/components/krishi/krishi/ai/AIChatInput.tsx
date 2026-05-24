"use client";

import { SendHorizonal } from "lucide-react";

export default function AIChatInput() {
  return (
    <div
      className="
      mt-6
      flex items-center gap-3

      rounded-[24px]

      border border-white/40 dark:border-slate-700/40

      bg-white/80 dark:bg-slate-800/80

      p-3

      shadow-lg
      backdrop-blur-2xl
    "
    >
      <input
        type="text"
        placeholder="Apna sawaal poochhein..."
        className="
        h-12 flex-1
        bg-transparent px-4

        text-sm
        text-slate-700 dark:text-slate-200

        outline-none

        placeholder:text-slate-400
      "
      />

      <button
        className="
        flex h-12 w-12 items-center justify-center

        rounded-2xl

        bg-gradient-to-r
        from-[#16a34a]
        to-[#065f46]

        text-white

        shadow-lg shadow-green-500/20

        transition-all duration-300
        hover:scale-105
      "
      >
        <SendHorizonal className="h-5 w-5" />
      </button>
    </div>
  );
}