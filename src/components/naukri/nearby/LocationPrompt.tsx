// ========================================
// FILE: src/components/naukri/nearby/LocationPrompt.tsx
// ========================================

"use client";

import { MapPin } from "lucide-react";

interface Props {
  onAllow: () => void;
}

export default function LocationPrompt({
  onAllow,
}: Props) {
  return (
    <div
      className="
        flex
        min-h-[85vh]

        items-center
        justify-center

        px-4
      "
    >
      <div
        className="
          w-full
          max-w-xl

          rounded-[42px]

          border
          border-white/50

          bg-white/80
          dark:bg-slate-800/80

          p-8
          sm:p-12

          text-center

          backdrop-blur-3xl

          shadow-[0_20px_80px_rgba(124,58,237,0.15)]
        "
      >
        <div
          className="
            mx-auto

            flex
            h-24
            w-24

            items-center
            justify-center

            rounded-full

            bg-[#ede9fe]

            text-[#7c3aed]
          "
        >
          <MapPin size={42} />
        </div>

        <h2
          className="
            mt-8

            text-3xl
            font-black

            text-[#18214d]
            dark:text-white
          "
        >
          Location Access Chahiye
        </h2>

        <p
          className="
            mt-4

            text-sm
            leading-relaxed

            text-slate-600
            dark:text-slate-300
          "
        >
          Aapke paas ki naukri dikhane ke liye location permission zaroori hai.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <button
            onClick={onAllow}
            className="
              flex-1

              rounded-2xl

              bg-gradient-to-r
              from-[#16a34a]
              to-[#22c55e]

              px-6
              py-4

              font-bold
              text-white

              shadow-lg
            "
          >
            Location Do
          </button>

          <button
            className="
              flex-1

              rounded-2xl

              border
              border-[#7c3aed]/30

              bg-transparent

              px-6
              py-4

              font-bold

              text-[#7c3aed]
            "
          >
            Manually Dhundho
          </button>
        </div>
      </div>
    </div>
  );
}