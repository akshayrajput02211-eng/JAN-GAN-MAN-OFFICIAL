// ========================================
// FILE: src/components/suraksha/home/EmergencySection.tsx
// ========================================

"use client";

import Link from "next/link";

import {
  ChevronRight,
  MapPinned,
} from "lucide-react";

import EmergencyGrid from "./EmergencyGrid";

import SOSButton from "./SOSButton";

export default function EmergencySection() {
  return (
    <section
      className="
        relative
        overflow-hidden

        rounded-[40px]

        border border-red-200/30

        bg-gradient-to-br
        from-red-600
        via-red-500
        to-indigo-700

        p-6
        md:p-8

        shadow-[0_25px_80px_rgba(0,0,0,0.18)]
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          -top-20
          -right-20

          h-72
          w-72

          rounded-full

          bg-white/10

          blur-3xl
        "
      />

      {/* CONTENT */}

      <div
        className="
          relative
          z-10

          flex
          flex-col
          gap-12

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        {/* LEFT */}

        <div className="flex-1">
          {/* HEADER */}

          <div className="mb-8">
            <h2
              className="
                text-5xl
                font-black

                tracking-tight

                text-white
              "
            >
              EMERGENCY
            </h2>

            <p
              className="
                mt-3

                max-w-xl

                text-lg
                font-medium

                text-white/80
              "
            >
              Emergency help aur safety support
              instantly access karo.
            </p>
          </div>

          {/* GRID */}

          <EmergencyGrid />

          {/* EXTRA ACTIONS */}

          <div
            className="
              mt-8

              flex
              flex-col
              gap-4

              sm:flex-row
            "
          >
            <Link
              href="/suraksha/emergency"
              className="
                inline-flex
                items-center
                justify-center
                gap-2

                rounded-2xl

                bg-white

                px-6
                py-4

                text-lg
                font-black

                text-red-600

                transition-all
                duration-300

                hover:scale-[1.02]
              "
            >
              Open Emergency Center

              <ChevronRight className="h-5 w-5" />
            </Link>

            <button
              className="
                inline-flex
                items-center
                justify-center
                gap-2

                rounded-2xl

                border border-white/30

                bg-white/10

                px-6
                py-4

                text-lg
                font-bold

                text-white

                backdrop-blur-xl
              "
            >
              <MapPinned className="h-5 w-5" />

              Share Live Location
            </button>
          </div>
        </div>

        {/* RIGHT */}

        <div
          className="
            flex
            justify-center
          "
        >
          <SOSButton />
        </div>
      </div>
    </section>
  );
}