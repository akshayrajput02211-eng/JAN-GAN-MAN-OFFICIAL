// ========================================
// FILE: src/components/dukaan/review/RatingBar.tsx
// ========================================

"use client";

import { Star } from "lucide-react";

export default function RatingBar({
  star,
  percentage,
}: {
  star: number;
  percentage: number;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex w-12 items-center gap-1">
        <span className="font-bold text-slate-700 dark:text-slate-200">
          {star}
        </span>

        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      </div>

      <div
        className="
          h-3
          flex-1
          overflow-hidden

          rounded-full
          bg-slate-200

          dark:bg-slate-700
        "
      >
        <div
          style={{
            width: `${percentage}%`,
          }}
          className="
            h-full

            rounded-full

            bg-gradient-to-r
            from-orange-500
            to-orange-600
          "
        />
      </div>

      <span className="w-12 text-sm font-bold text-slate-600 dark:text-slate-300">
        {percentage}%
      </span>
    </div>
  );
}