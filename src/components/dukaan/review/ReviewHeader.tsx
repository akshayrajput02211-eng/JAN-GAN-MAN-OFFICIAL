// ========================================
// FILE: src/components/dukaan/review/ReviewHeader.tsx
// ========================================

"use client";

import { Star } from "lucide-react";

import RatingBar from "./RatingBar";

export default function ReviewHeader() {
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
      <div
        className="
          grid gap-8
          lg:grid-cols-[240px_1fr]
        "
      >
        {/* LEFT */}

        <div className="text-center lg:text-left">
          <h1
            className="
              text-7xl
              font-black
              text-slate-900
              dark:text-white
            "
          >
            4.3
          </h1>

          <div className="mt-3 flex justify-center gap-1 lg:justify-start">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`
                  h-6 w-6

                  ${
                    star <= 4
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-slate-300"
                  }
                `}
              />
            ))}
          </div>

          <p className="mt-3 text-slate-500 dark:text-slate-400">
            2,453 Reviews
          </p>
        </div>

        {/* RIGHT */}

        <div className="space-y-4">
          <RatingBar
            star={5}
            percentage={60}
          />

          <RatingBar
            star={4}
            percentage={20}
          />

          <RatingBar
            star={3}
            percentage={10}
          />

          <RatingBar
            star={2}
            percentage={5}
          />

          <RatingBar
            star={1}
            percentage={5}
          />
        </div>
      </div>
    </div>
  );
}