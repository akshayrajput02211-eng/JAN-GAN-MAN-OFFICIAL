// ========================================
// FILE: src/components/suraksha/emergency/SOSButton.tsx
// ========================================

"use client";

import { useEffect, useRef, useState } from "react";
import { PhoneCall, ShieldAlert } from "lucide-react";

export default function SOSButton() {
  const [holding, setHolding] = useState(false);

  const [countdown, setCountdown] = useState(3);

  const [activated, setActivated] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

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
    <section className="flex flex-col items-center justify-center py-10">
      {/* SOS BUTTON */}

      <button
        onMouseDown={() => setHolding(true)}
        onMouseUp={() => setHolding(false)}
        onTouchStart={() => setHolding(true)}
        onTouchEnd={() => setHolding(false)}
        className={`
          relative

          flex
          h-[220px]
          w-[220px]

          items-center
          justify-center

          rounded-full

          border-[12px]

          transition-all
          duration-300

          ${
            holding
              ? `
                scale-110
                border-red-300
              `
              : `
                border-red-200
              `
          }

          bg-red-600

          shadow-[0_0_80px_rgba(220,38,38,0.5)]
        `}
      >
        {/* PULSE */}

        <div
          className="
            absolute
            inset-0

            animate-ping

            rounded-full

            bg-red-500/40
          "
        />

        <div className="relative z-10 text-center text-white">
          <ShieldAlert className="mx-auto h-16 w-16" />

          <h2 className="mt-3 text-5xl font-black">
            SOS
          </h2>
        </div>
      </button>

      {/* TEXT */}

      <h3 className="mt-8 text-3xl font-black text-red-600">
        SOS Dabao
      </h3>

      <p className="mt-2 text-center text-base font-semibold text-slate-500">
        Hold 3 seconds to activate
      </p>

      {/* COUNTDOWN */}

      {holding && !activated && (
        <div
          className="
            mt-8

            rounded-full

            bg-red-100

            px-8
            py-4

            text-5xl
            font-black
            text-red-600
          "
        >
          {countdown}
        </div>
      )}

      {/* ACTIVATED */}

      {activated && (
        <div
          className="
            mt-8

            w-full
            max-w-xl

            rounded-[32px]

            border
            border-red-200

            bg-red-50

            p-8

            text-center
          "
        >
          <PhoneCall className="mx-auto h-14 w-14 text-red-600" />

          <h3 className="mt-5 text-3xl font-black text-red-700">
            Emergency Activated
          </h3>

          <p className="mt-3 text-lg font-medium text-red-600">
            Calling emergency services...
          </p>

          <p className="mt-2 text-sm text-slate-600">
            Live location shared successfully
          </p>
        </div>
      )}
    </section>
  );
}