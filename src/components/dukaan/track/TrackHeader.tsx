// ========================================
// FILE: src/components/dukaan/track/TrackHeader.tsx
// ========================================

"use client";

import {
  Clock3,
  Store,
} from "lucide-react";

export default function TrackHeader() {
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
      {/* TOP */}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1
            className="
              text-4xl
              font-black
              text-slate-900
              dark:text-white
            "
          >
            Order #12345
          </h1>

          <div className="mt-3 flex items-center gap-2">
            <Store className="h-4 w-4 text-[#16a34a]" />

            <span className="text-sm text-slate-500 dark:text-slate-400">
              Sharma Kirana Store
            </span>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <Clock3 className="h-4 w-4 text-orange-500" />

            <span className="text-sm text-slate-500 dark:text-slate-400">
              Ordered Today • 5:45 PM
            </span>
          </div>
        </div>

        {/* STATUS */}

        <div
          className="
            flex items-center gap-3

            rounded-full

            bg-orange-50
            px-5 py-3

            dark:bg-orange-950/30
          "
        >
          <span className="relative flex h-3 w-3">
            <span
              className="
                absolute inline-flex h-full w-full
                animate-ping rounded-full
                bg-orange-400 opacity-75
              "
            />

            <span
              className="
                relative inline-flex h-3 w-3
                rounded-full bg-orange-500
              "
            />
          </span>

          <span
            className="
              text-sm
              font-black
              text-orange-700
              dark:text-orange-400
            "
          >
            On The Way
          </span>
        </div>
      </div>
    </div>
  );
}