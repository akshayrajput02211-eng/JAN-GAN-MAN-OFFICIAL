"use client";

import {
  Mic,
  SendHorizontal,
  Sparkles,
  Paperclip,
} from "lucide-react";

export default function BottomInput() {
  return (
    <div
      className="
        relative z-50

        px-4 pb-5
        md:px-8
      "
    >
      {/* OUTER GLOW */}
      <div
        className="
          absolute

          left-1/2 top-1/2

          h-[140px]
          w-[65%]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#3b82f6]/20

          blur-[80px]
        "
      />

      {/* MAIN BAR */}
      <div
        className="
          relative

          mx-auto

          flex items-center gap-3

          max-w-4xl

          rounded-[34px]

          border border-white/20

          bg-white/70

          px-4 py-4

          backdrop-blur-3xl

          shadow-[0_10px_60px_rgba(0,0,0,0.12)]

          transition-all duration-500

          hover:shadow-[0_20px_80px_rgba(59,130,246,0.18)]
        "
      >
        {/* AI ICON */}
        <div
          className="
            flex items-center justify-center

            h-12 w-12

            rounded-2xl

            bg-gradient-to-br
            from-[#3b82f6]
            to-[#7c3aed]

            text-white

            shadow-lg
          "
        >
          <Sparkles size={20} />
        </div>

        {/* INPUT */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="AI Sahayak se kuch bhi poochiye..."
            className="
              w-full

              bg-transparent

              text-[15px]
              font-medium

              text-[#1b2440]

              placeholder:text-gray-400

              outline-none
            "
          />
        </div>

        {/* ATTACH */}
        <button
          className="
            hidden md:flex

            items-center justify-center

            h-11 w-11

            rounded-2xl

            bg-[#f3f7ff]

            text-[#5b6b8c]

            transition-all duration-300

            hover:scale-105
            hover:bg-[#e7efff]
          "
        >
          <Paperclip size={18} />
        </button>

        {/* MIC */}
        <button
          className="
            group

            flex items-center justify-center

            h-12 w-12

            rounded-2xl

            bg-gradient-to-br
            from-[#2d7ef7]
            to-[#2563eb]

            text-white

            shadow-[0_8px_25px_rgba(37,99,235,0.35)]

            transition-all duration-300

            hover:scale-105
          "
        >
          <Mic
            size={18}
            className="
              transition-transform duration-300

              group-hover:scale-110
            "
          />
        </button>

        {/* SEND */}
        <button
          className="
            group

            relative overflow-hidden

            flex items-center gap-2

            rounded-2xl

            bg-gradient-to-r
            from-[#16a34a]
            to-[#22c55e]

            px-5 py-3

            font-semibold

            text-white

            shadow-[0_8px_25px_rgba(34,197,94,0.35)]

            transition-all duration-300

            hover:scale-[1.03]
            hover:shadow-[0_12px_35px_rgba(34,197,94,0.45)]
          "
        >
          {/* BUTTON LIGHT */}
          <div
            className="
              absolute inset-0

              opacity-0
              group-hover:opacity-100

              transition-opacity duration-500

              bg-gradient-to-r
              from-white/10
              via-transparent
              to-white/20
            "
          />

          <span className="relative z-10 hidden md:block">
            Send
          </span>

          <SendHorizontal
            size={18}
            className="
              relative z-10

              transition-transform duration-300

              group-hover:translate-x-1
            "
          />
        </button>
      </div>
    </div>
  );
}