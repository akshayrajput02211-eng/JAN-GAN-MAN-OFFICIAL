// ========================================
// FILE: src/components/naukri/nearby/NearbyHero.tsx
// ========================================

"use client";

import { useState } from "react";

import { MapPin } from "lucide-react";

import LocationPrompt from "./LocationPrompt";

export default function NearbyHero() {
  const [allowed, setAllowed] = useState(false);

  if (!allowed) {
    return (
      <LocationPrompt
        onAllow={() => setAllowed(true)}
      />
    );
  }

  return (
    <section className="px-4 pt-8 sm:px-6 lg:px-8">
      <div
        className="
          mx-auto
          max-w-7xl

          overflow-hidden

          rounded-[40px]

          bg-gradient-to-br
          from-[#7c3aed]
          via-[#8b5cf6]
          to-[#4c1d95]

          p-8

          text-white

          shadow-[0_25px_80px_rgba(124,58,237,0.35)]
        "
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span
              className="
                rounded-full

                bg-white/15

                px-4
                py-1

                text-sm
                font-bold

                backdrop-blur-xl
              "
            >
              Nearby Jobs
            </span>

            <h1 className="mt-5 text-4xl font-black">
              Aas-Paas Ki Naukri
            </h1>

            <div className="mt-4 flex items-center gap-2 text-white/90">
              <MapPin size={18} />

              <span>
                Laxminagar, Delhi
              </span>

              <button className="font-bold underline">
                Change
              </button>
            </div>
          </div>

          {/* DISTANCE FILTER */}

          <div
            className="
              rounded-[28px]

              bg-white/10

              p-5

              backdrop-blur-xl
            "
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold">
                Distance Filter
              </span>

              <span className="text-sm font-bold">
                20 KM
              </span>
            </div>

            <input
              type="range"
              min={0}
              max={50}
              defaultValue={20}
              className="
                mt-4
                w-full

                accent-white
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}