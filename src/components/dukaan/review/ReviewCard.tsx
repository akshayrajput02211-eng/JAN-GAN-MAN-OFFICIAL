// ========================================
// FILE: src/components/dukaan/review/ReviewCard.tsx
// ========================================

"use client";

import {
  Star,
  ThumbsUp,
} from "lucide-react";

import { motion } from "framer-motion";

export default function ReviewCard({
  review,
}: any) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        show: {
          opacity: 1,
          y: 0,
        },
      }}
      className="
        rounded-[30px]

        border border-orange-100

        bg-orange-50/60
        p-5

        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* TOP */}

      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4">
          {/* AVATAR */}

          <div
            className="
              flex h-14 w-14 items-center justify-center

              rounded-full

              bg-gradient-to-br
              from-orange-500
              to-orange-700

              text-lg
              font-black
              text-white
            "
          >
            {review.name.charAt(0)}
          </div>

          {/* INFO */}

          <div>
            <h3
              className="
                text-lg
                font-black
                text-slate-900
                dark:text-white
              "
            >
              {review.name}
            </h3>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {review.date}
            </p>

            <div className="mt-3 flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`
                    h-4 w-4

                    ${
                      star <= review.rating
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
              ))}
            </div>
          </div>
        </div>

        {/* HELPFUL */}

        <button
          className="
            flex items-center gap-2

            rounded-full

            bg-white
            px-4 py-2

            text-sm
            font-semibold
            text-slate-600

            transition-all
            duration-300

            hover:bg-green-100
            hover:text-green-700

            dark:bg-slate-800
          "
        >
          <ThumbsUp className="h-4 w-4" />

          Helpful
        </button>
      </div>

      {/* REVIEW */}

      <p
        className="
          mt-5
          leading-relaxed
          text-slate-700
          dark:text-slate-300
        "
      >
        {review.text}
      </p>
    </motion.div>
  );
}