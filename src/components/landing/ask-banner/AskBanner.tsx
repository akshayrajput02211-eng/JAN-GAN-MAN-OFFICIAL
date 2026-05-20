"use client";

import { Mic } from "lucide-react";

type AskBannerProps = {
  className?: string;
};

export function AskBanner({ className = "" }: AskBannerProps) {
  return (
    <section
      className={`
        relative overflow-hidden
        mt-8
        rounded-[28px]
        px-6 py-5
        md:px-8 md:py-6

        flex flex-col md:flex-row
        items-start md:items-center
        justify-between
        gap-5

        bg-gradient-to-br
        from-violet-400
        via-purple-500
        to-indigo-600

        shadow-[0_15px_40px_rgba(109,40,217,0.28)]

        transition-all duration-500
        hover:scale-[1.01]
        hover:shadow-[0_20px_60px_rgba(109,40,217,0.38)]

        ${className}
      `}
      aria-label="AI assistant"
    >
      {/* Glow Effect */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.18),transparent_30%)]
          pointer-events-none
        "
      />

      {/* Floating Blur */}
      <div
        className="
          absolute -top-10 -right-10
          w-40 h-40
          rounded-full
          bg-white/10
          blur-3xl
          animate-pulse
        "
      />

      {/* LEFT CONTENT */}
      <div className="relative z-10 flex items-center gap-4">
        
        {/* BOT */}
        <div
          className="
            relative
            w-20 h-20 md:w-24 md:h-24

            rounded-full

            bg-gradient-to-b
            from-white
            to-slate-100

            shadow-[0_10px_25px_rgba(0,0,0,0.15)]

            flex items-center justify-center

            transition-transform duration-500
            hover:rotate-6 hover:scale-105
          "
        >
          {/* Antenna */}
          <div
            className="
              absolute -top-4
              w-1.5 h-5
              bg-white
              rounded-full
            "
          >
            <div
              className="
                absolute -top-2 left-1/2
                -translate-x-1/2

                w-4 h-4
                rounded-full

                bg-violet-500

                shadow-[0_0_18px_rgba(139,92,246,0.9)]

                animate-ping
              "
            />
          </div>

          {/* Face */}
          <div
            className="
              w-14 h-10

              rounded-2xl

              bg-gradient-to-b
              from-indigo-500
              to-indigo-800

              flex items-center justify-center
              gap-3
            "
          >
            <span
              className="
                w-2.5 h-2.5
                rounded-full
                bg-white
                animate-bounce
              "
            />

            <span
              className="
                w-2.5 h-2.5
                rounded-full
                bg-white
                animate-bounce
                [animation-delay:0.2s]
              "
            />
          </div>

          {/* Hand */}
          <div
            className="
              absolute right-[-8px] bottom-3

              w-6 h-2

              rounded-full

              bg-white

              rotate-[-25deg]
            "
          />
        </div>

        {/* TEXT */}
        <div className="text-white">
          <h2
            className="
              text-xl md:text-3xl
              font-extrabold
              leading-tight
              drop-shadow-sm
            "
          >
            Bolkar poochho apna sawaal
          </h2>

          <p
            className="
              mt-1
              text-sm md:text-base
              text-white/90
              font-medium
            "
          >
            AI Sahayak hamesha aapke saath hai
          </p>
        </div>
      </div>

      {/* BUTTON */}
      <button
        type="button"
        className="
          relative z-10

          w-full md:w-auto

          flex items-center justify-center
          gap-3

          px-6 py-4

          rounded-2xl

          bg-gradient-to-r
          from-indigo-700
          to-violet-700

          text-white
          font-bold
          text-sm md:text-base

          shadow-[0_10px_30px_rgba(49,46,129,0.35)]

          transition-all duration-300

          hover:scale-105
          hover:shadow-[0_15px_40px_rgba(49,46,129,0.5)]

          active:scale-95
        "
      >
        <span>Bolkar Poochen</span>

        <div
          className="
            flex items-center justify-center

            w-9 h-9

            rounded-full

            bg-white/15
            backdrop-blur-md
          "
        >
          <Mic className="w-5 h-5" aria-hidden="true" />
        </div>
      </button>
    </section>
  );
}