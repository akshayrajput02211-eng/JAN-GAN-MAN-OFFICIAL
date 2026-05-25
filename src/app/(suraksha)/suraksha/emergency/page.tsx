// ========================================
// FILE: src/app/(suraksha)/suraksha/emergency/page.tsx
// ========================================

"use client";

import { useState } from "react";

import SOSButton from "@/components/suraksha/emergency/SOSButton";

import EmergencyNumbers from "@/components/suraksha/emergency/EmergencyNumbers";

import QuickShare from "@/components/suraksha/emergency/QuickShare";

import SafetyTips from "@/components/suraksha/emergency/SafetyTips";

export default function EmergencyPage() {
  const [shareLocation, setShareLocation] =
    useState(true);

  return (
    <main className="min-h-screen bg-[#f4f8ff] dark:bg-[#07111f] px-4 py-6 md:px-8">
      <div className="mx-auto max-w-5xl">
        {/* ================= HEADER ================= */}

        <section className="text-center">
          <h1
            className="
              text-5xl
              md:text-7xl

              font-black

              tracking-tight

              text-red-600
            "
          >
            EMERGENCY
          </h1>

          <p
            className="
              mt-4

              text-lg
              font-semibold

              text-slate-500
              dark:text-slate-300
            "
          >
            Immediate help and emergency response
          </p>
        </section>

        {/* ================= SOS ================= */}

        <SOSButton />

        {/* ================= LOCATION ================= */}

        <section
          className="
            mt-12

            flex
            items-center
            justify-between

            rounded-[32px]

            border border-white/50

            bg-white/70
            dark:bg-slate-800/70

            p-6

            backdrop-blur-xl
          "
        >
          <div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">
              Live location share karo
            </h3>

            <p className="mt-2 text-slate-500">
              Emergency ke waqt trusted contacts ko
              location bhejo
            </p>
          </div>

          <button
            onClick={() =>
              setShareLocation(!shareLocation)
            }
            className={`
              relative

              h-9
              w-20

              rounded-full

              transition-all

              ${
                shareLocation
                  ? "bg-red-600"
                  : "bg-slate-400"
              }
            `}
          >
            <div
              className={`
                absolute
                top-1

                h-7
                w-7

                rounded-full

                bg-white

                transition-all

                ${
                  shareLocation
                    ? "left-12"
                    : "left-1"
                }
              `}
            />
          </button>
        </section>

        {/* ================= QUICK CALL ================= */}

        <EmergencyNumbers />

        {/* ================= CONTACTS ================= */}

        <QuickShare />

        {/* ================= TIPS ================= */}

        <SafetyTips />
      </div>
    </main>
  );
}