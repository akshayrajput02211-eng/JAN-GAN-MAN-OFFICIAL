// ========================================
// FILE: src/components/suraksha/home/SOSButton.tsx
// ========================================

"use client";

import { useEffect, useRef, useState } from "react";

import {
  PhoneCall,
  ShieldAlert,
} from "lucide-react";

export default function SOSButton() {
  const [holding, setHolding] =
    useState(false);

  const [countdown, setCountdown] =
    useState(3);

  const [activated, setActivated] =
    useState(false);

  const timerRef =
    useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!holding) {
      setCountdown(3);

      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      return;
    }

    timerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timerRef.current!);

          setActivated(true);

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [holding]);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* BUTTON */}

      <button
        onMouseDown={() => setHolding(true)}
        onMouseUp={() => setHolding(false)}
        onTouchStart={() => setHolding(true)}
        onTouchEnd={() => setHolding(false)}
        className={`
          relative

          flex
          h-52
          w-52

          items-center
          justify-center

          rounded-full

          border-[10px]

          transition-all
          duration-300

          ${
            holding
              ? `
                scale-110
                border-red-200
              `
              : `
                border-red-300/50
              `
          }

          bg-red-600

          text-white

          shadow-[0_0_80px_rgba(239,68,68,.55)]
        `}
      >
        {/* PULSE */}

        <div
          className="
            absolute
            inset-0

            animate-ping

            rounded-full

            bg-red-400/40
          "
        />

        {/* INNER */}

        <div className="relative z-10 text-center">
          <ShieldAlert className="mx-auto h-14 w-14" />

          <h2 className="mt-3 text-5xl font-black">
            SOS
          </h2>

          <p className="mt-1 text-sm font-semibold">
            Hold 3 Seconds
          </p>
        </div>
      </button>

      {/* COUNTDOWN */}

      {holding && !activated && (
        <div
          className="
            mt-6

            rounded-full

            bg-white

            px-8
            py-3

            text-5xl
            font-black

            text-red-600
          "
        >
          {countdown}
        </div>
      )}

      {/* SUCCESS */}

      {activated && (
        <div
          className="
            mt-6

            rounded-[28px]

            bg-white/15

            p-6

            text-center
            text-white

            backdrop-blur-xl
          "
        >
          <PhoneCall className="mx-auto h-10 w-10" />

          <h3 className="mt-4 text-2xl font-black">
            Emergency Activated
          </h3>

          <p className="mt-2 text-white/80">
            Calling emergency services...
          </p>

          <p className="mt-1 text-sm text-white/70">
            Live location shared
          </p>
        </div>
      )}
    </div>
  );
}