// ========================================
// FILE: src/components/dukaan/track/TrackStep.tsx
// ========================================

"use client";

import { motion } from "framer-motion";

export default function TrackStep({
  step,
  isLast,
}: any) {
  const Icon = step.icon;

  const isCompleted =
    step.status === "completed";

  const isCurrent =
    step.status === "current";

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
      className="relative flex gap-5"
    >
      {/* LINE */}

      {!isLast && (
        <div
          className={`
            absolute
            left-[21px]
            top-12

            h-[72px]
            w-[3px]

            rounded-full

            ${
              isCompleted
                ? "bg-[#16a34a]"
                : "bg-slate-200 dark:bg-slate-700"
            }
          `}
        />
      )}

      {/* ICON */}

      <div
        className={`
          relative

          flex h-11 w-11 shrink-0 items-center justify-center

          rounded-full

          ${
            isCompleted
              ? `
                bg-[#16a34a]
                text-white
              `
              : isCurrent
              ? `
                bg-orange-500
                text-white
              `
              : `
                bg-slate-200
                text-slate-500
                dark:bg-slate-700
              `
          }
        `}
      >
        {isCurrent && (
          <span
            className="
              absolute

              h-full
              w-full

              animate-ping

              rounded-full
              bg-orange-400
              opacity-60
            "
          />
        )}

        <Icon className="relative h-5 w-5" />
      </div>

      {/* CONTENT */}

      <div className="pt-1">
        <h3
          className="
            text-lg
            font-black
            text-slate-900
            dark:text-white
          "
        >
          {step.title}
        </h3>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {step.time}
        </p>
      </div>
    </motion.div>
  );
}