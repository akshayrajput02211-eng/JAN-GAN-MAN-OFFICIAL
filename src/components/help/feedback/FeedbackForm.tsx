// ========================================
// FILE: src/components/help/feedback/FeedbackForm.tsx
// ========================================

"use client";

import { useState } from "react";

import {
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";

export default function FeedbackForm() {
  const [selected, setSelected] = useState<
    "up" | "down" | null
  >(null);

  return (
    <div
      className="
        rounded-[36px]
        border
        border-white/50
        bg-white/70
        p-8
        backdrop-blur-xl
        dark:border-slate-700/50
        dark:bg-slate-800/70
      "
    >
      
      <h2 className="text-3xl font-bold">
        Kya yeh helpful tha?
      </h2>

      <p className="mt-3 text-slate-600 dark:text-slate-300">
        Aapka feedback hamare liye bahut important hai.
      </p>

      <div className="mt-8 flex gap-4">
        
        <button
          onClick={() => setSelected("up")}
          className={`
            flex items-center gap-3 rounded-2xl px-6 py-4
            transition-all
            ${
              selected === "up"
                ? "bg-[#16a34a] text-white"
                : "bg-white dark:bg-slate-900"
            }
          `}
        >
          <ThumbsUp className="size-5" />
          Helpful
        </button>

        <button
          onClick={() => setSelected("down")}
          className={`
            flex items-center gap-3 rounded-2xl px-6 py-4
            transition-all
            ${
              selected === "down"
                ? "bg-red-500 text-white"
                : "bg-white dark:bg-slate-900"
            }
          `}
        >
          <ThumbsDown className="size-5" />
          Not Helpful
        </button>

      </div>

      <textarea
        placeholder="Optional feedback..."
        className="
          mt-8
          min-h-[140px]
          w-full
          rounded-3xl
          border
          border-white/50
          bg-white
          p-5
          outline-none
          dark:border-slate-700
          dark:bg-slate-900
        "
      />

      <button
        className="
          mt-6
          rounded-2xl
          bg-[#16a34a]
          px-8
          py-4
          font-semibold
          text-white
          transition-all
          hover:scale-105
        "
      >
        Submit Feedback
      </button>

    </div>
  );
}