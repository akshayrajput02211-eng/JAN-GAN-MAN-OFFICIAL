// ========================================
// FILE: LoanCalculator.tsx
// ========================================

"use client";

import {
  Landmark,
  Sparkles,
} from "lucide-react";

export default function LoanCalculator() {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-yellow-900/30
        bg-gradient-to-br
        from-white/10
        via-white/5
        to-white/10
        p-6
        md:p-8
        shadow-2xl
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          -top-16
          -right-16
          h-56
          w-56
          rounded-full
          bg-yellow-500/20
          blur-3xl
        "
      />

      <div className="relative z-10">
        {/* Badge */}
        <div
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-yellow-500/20
            bg-green-800/50
            px-4
            py-2
            text-sm
            font-semibold
            text-yellow-300
          "
        >
          <Sparkles size={16} />
          Smart EMI Tool
        </div>

        {/* Heading */}
        <div className="mt-5 flex items-center gap-3">
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-yellow-400
              to-amber-500
              text-black
              shadow-lg
            "
          >
            <Landmark size={28} />
          </div>

          <div>
            <h2
              className="
                text-3xl
                md:text-4xl
                font-black
                text-slate
              "
            >
              Loan EMI Calculator
            </h2>

            <p className="mt-1 text-zinc-400">
              Calculate monthly EMI
              instantly
            </p>
          </div>
        </div>

        {/* Content */}
        <div
          className="
            mt-8
            rounded-[28px]
            border
            border-zinc-800
            bg-white/10
            p-6
            backdrop-blur-xl
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              bg-gradient-to-r
              from-green-500
              to-emerald-400
              p-5
              text-white
            "
          >
            <div>
              <p className="text-sm opacity-80">
                Estimated EMI
              </p>

              <h3 className="mt-2 text-4xl font-black">
                ₹12,540
              </h3>
            </div>

            <div
              className="
                rounded-2xl
                bg-white/20
                px-4
                py-3
                text-sm
                font-semibold
                backdrop-blur-md
              "
            >
              10 Years
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div
              className="
                rounded-2xl
                border
                border-zinc-800
                bg-white/90
                p-5
              "
            >
              <p className="text-sm text-zinc-400">
                Loan Amount
              </p>

              <h4
                className="
                  mt-2
                  text-2xl
                  font-black
                  text-slate-700
                "
              >
                ₹5,00,000
              </h4>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-zinc-800
                bg-white/90
                p-5
              "
            >
              <p className="text-sm text-zinc-400">
                Interest Rate
              </p>

              <h4
                className="
                  mt-2
                  text-2xl
                  font-black
                  text-slate-700
                "
              >
                8.5%
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}