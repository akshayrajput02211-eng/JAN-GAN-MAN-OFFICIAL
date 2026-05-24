"use client";

import BackgroundScene from "./BackgroundScene";
import FloatingElements from "./FloatingElements";
import BottomInput from "./BottomInput";

import ScrollParallax from "../chat/ScrollParallax";
import RobotAssistant from "../robot/RobotAssistant";

export default function ChatContainer() {
  return (
    <div
      className="
        relative

        min-h-[calc(100vh-140px)]

        overflow-hidden

        rounded-2xl
        md:rounded-[40px]

        border
        border-white/20

        bg-[#f3e8ff]

        shadow-[0_20px_60px_rgba(147,51,234,0.12)]
      "
    >
      {/* ================= BG ================= */}

      <BackgroundScene />

      {/* ================= FLOATING ITEMS ================= */}

      <FloatingElements />

      {/* ================= MAGICAL GLOW ================= */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top,rgba(147,51,234,0.18),transparent_45%)]

          pointer-events-none
        "
      />

      {/* ================= OVERLAY ================= */}

      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(to_bottom,rgba(255,255,255,0.18),transparent)]

          pointer-events-none
        "
      />

      {/* ================= MAIN ================= */}

      <div
        className="
          relative
          z-20

          flex
          min-h-[calc(100vh-140px)]
          flex-col
        "
      >
        {/* ================= HEADER ================= */}

        <div
          className="
            flex
            items-center
            gap-4

            px-4
            py-5

            md:px-8
            md:py-6
          "
        >
          {/* ================= AVATAR ================= */}

          <div
            className="
              flex
              h-14
              w-14

              items-center
              justify-center

              rounded-full

              border-4
              border-white/80

              bg-gradient-to-br
              from-[#9333ea]
              to-[#6b21a8]

              text-2xl

              shadow-[0_10px_35px_rgba(147,51,234,0.4)]
            "
          >
            🤖
          </div>

          {/* ================= TEXT ================= */}

          <div>
            <h1
              className="
                text-xl
                font-black

                tracking-tight

                text-[#3b0764]

                md:text-3xl
              "
            >
              AI Sahayak
            </h1>

            <p
              className="
                mt-1

                text-sm

                text-[#7e22ce]

                md:text-base
              "
            >
              Aapka Magical AI Dost ✨
            </p>
          </div>
        </div>

        {/* ================= CHAT AREA ================= */}

        <div
          className="
            relative

            flex-1

            overflow-y-auto

            px-2
            pb-36
            pt-4

            md:px-6
            md:pt-6
          "
        >
          {/* SOFT CHAT GLOW */}

          <div
            className="
              pointer-events-none

              absolute
              inset-0

              bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_70%)]
            "
          />

          <ScrollParallax />
        </div>

        {/* ================= INPUT ================= */}

        <div
          className="
            absolute
            bottom-4
            left-1/2

            z-30

            w-full
            max-w-5xl

            -translate-x-1/2

            px-3

            md:bottom-5
            md:px-4
          "
        >
          <BottomInput />
        </div>
      </div>

      {/* ================= ROBOT ================= */}

      <RobotAssistant />
    </div>
  );
}