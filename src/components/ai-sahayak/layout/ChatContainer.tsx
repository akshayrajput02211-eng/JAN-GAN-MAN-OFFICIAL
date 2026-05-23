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

        rounded-[40px]

        border
        border-white/40

        bg-[#eef7ff]

        shadow-[0_20px_60px_rgba(0,0,0,0.08)]
      "
    >
      {/* BG */}

      <BackgroundScene />

      {/* FLOATING ITEMS */}

      <FloatingElements />

      {/* OVERLAY */}

      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(to_bottom,rgba(255,255,255,0.15),transparent)]
        "
      />

      {/* MAIN */}

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

            px-5
            py-5

            md:px-8
            md:py-6
          "
        >
          {/* AVATAR */}

          <div
            className="
              flex
              h-14
              w-14

              items-center
              justify-center

              rounded-full

              border-4
              border-white

              bg-gradient-to-br
              from-[#7c3aed]
              to-[#6366f1]

              shadow-[0_10px_30px_rgba(124,58,237,0.35)]
            "
          >
            🤖
          </div>

          {/* TEXT */}

          <div>
            <h1
              className="
                text-2xl
                font-black

                tracking-tight

                text-[#1d2951]
              "
            >
              AI Sahayak
            </h1>

            <p
              className="
                text-sm

                text-[#6f7d95]
              "
            >
              Aapka AI dost
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
            pb-32
            pt-6

            md:px-6
          "
        >
          <ScrollParallax />
        </div>

        {/* ================= INPUT ================= */}

        <div
          className="
            absolute
            bottom-5
            left-1/2

            z-30

            w-full
            max-w-5xl

            -translate-x-1/2

            px-4
          "
        >
          <BottomInput />
        </div>
      </div>

      {/* ROBOT */}

      <RobotAssistant />
    </div>
  );
}