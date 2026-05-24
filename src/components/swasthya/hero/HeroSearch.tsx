// HEROSEARCH.tsx

"use client";

import {
  Mic,
  Search,
  Sparkles,
} from "lucide-react";

export default function HeroSearch() {
  return (
    <div
      className="
        rounded-[28px]

        border
        border-white/50
        dark:border-slate-700/50

        bg-white/70
        dark:bg-slate-800/70

        p-3

        backdrop-blur-2xl

        shadow-[0_10px_40px_rgba(0,0,0,0.05)]
      "
    >
      <div
        className="
          flex
          flex-col

          gap-3

          sm:flex-row
          sm:items-center
        "
      >
        {/* INPUT */}

        <div
          className="
            flex
            flex-1
            items-center

            gap-3

            rounded-2xl

            bg-white
            dark:bg-slate-800

            px-4
            py-4

            shadow-sm
          "
        >
          <Search
            size={20}
            className="text-slate-400"
          />

          <input
            type="text"
            placeholder="Search doctors, medicines, symptoms..."
            className="
              w-full

              bg-transparent

              text-sm
              text-slate-700
              dark:text-slate-200

              outline-none

              placeholder:text-slate-400
            "
          />

          <button
            className="
              hidden
              sm:flex

              h-10
              w-10

              items-center
              justify-center

              rounded-xl

              bg-slate-100
              dark:bg-slate-700

              transition-all
              duration-300

              hover:bg-red-100
              dark:hover:bg-red-950/40
            "
          >
            <Mic
              size={18}
              className="
                text-slate-600
                dark:text-slate-300
              "
            />
          </button>
        </div>

        {/* BUTTON */}

        <button
          className="
            flex
            items-center
            justify-center

            gap-2

            rounded-2xl

            bg-gradient-to-r
            from-red-600
            to-red-800

            px-6
            py-4

            text-sm
            font-semibold

            text-white

            shadow-[0_10px_30px_rgba(220,38,38,0.3)]

            transition-all
            duration-300

            hover:scale-[1.02]
          "
        >
          <Sparkles size={18} />

          AI Search
        </button>
      </div>
    </div>
  );
}