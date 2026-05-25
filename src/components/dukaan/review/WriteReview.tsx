// ========================================
// FILE: src/components/dukaan/review/WriteReview.tsx
// ========================================

"use client";

import { useState } from "react";

import { Star } from "lucide-react";

export default function WriteReview() {
  const [rating, setRating] =
    useState(0);

  return (
    <div
      className="
        rounded-[36px]
        border border-white/50

        bg-white/80
        p-6

        shadow-lg
        backdrop-blur-xl

        dark:border-white/10
        dark:bg-slate-800/70
      "
    >
      <h2
        className="
          text-3xl
          font-black
          text-slate-900
          dark:text-white
        "
      >
        Apna Review Do
      </h2>

      {/* STARS */}

      <div className="mt-6 flex gap-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() =>
              setRating(star)
            }
            className="
              transition-all
              duration-300

              hover:scale-110
            "
          >
            <Star
              className={`
                h-9 w-9

                ${
                  star <= rating
                    ? `
                      fill-yellow-400
                      text-yellow-400
                    `
                    : `
                      text-slate-300
                    `
                }
              `}
            />
          </button>
        ))}
      </div>

      {/* TEXTAREA */}

      <textarea
        placeholder="Kya acha laga / bura laga?"
        className="
          mt-6
          min-h-[140px]
          w-full

          rounded-[28px]

          border
          border-orange-100

          bg-orange-50/60

          p-5

          text-slate-800
          placeholder:text-slate-400

          outline-none

          transition-all
          duration-300

          focus:border-orange-400
          focus:ring-4
          focus:ring-orange-100

          dark:border-slate-700
          dark:bg-slate-900
          dark:text-slate-200
        "
      />

      {/* BUTTON */}

      <button
        className="
          mt-6

          rounded-2xl

          bg-gradient-to-r
          from-orange-600
          to-orange-700

          px-7
          py-4

          font-black
          text-white

          shadow-lg
          shadow-orange-300/30

          transition-all
          duration-300

          hover:-translate-y-1
        "
      >
        Submit Review
      </button>
    </div>
  );
}