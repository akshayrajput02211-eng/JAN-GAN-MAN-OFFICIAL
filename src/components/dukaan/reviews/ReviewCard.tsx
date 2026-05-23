"use client";

import { Star } from "lucide-react";

export default function ReviewCard() {
  return (
    <div
      className="
        rounded-[32px]

        border
        border-orange-100
        dark:border-slate-700/50

        bg-white
        dark:bg-slate-800

        p-8

        shadow-[0_12px_40px_rgba(234,88,12,0.08)]

        transition-all
        duration-300

        hover:-translate-y-1
      "
    >
      {/* TOP */}

      <div className="mb-5 flex items-center gap-4">
        {/* Avatar */}

        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center

            rounded-full

            bg-orange-100
            dark:bg-orange-950/40

            text-xl
            font-black

            text-orange-700
            dark:text-orange-400
          "
        >
          RK
        </div>

        {/* Info */}

        <div>
          <h3
            className="
              text-xl
              font-black

              text-slate-900
              dark:text-white
            "
          >
            Ramesh Kumar
          </h3>

          <p
            className="
              text-slate-500
              dark:text-slate-400
            "
          >
            Najafgarh
          </p>
        </div>
      </div>

      {/* Rating */}

      <div className="mb-5 flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((item) => (
          <Star
            key={item}
            size={18}
            className="
              fill-orange-500
              text-orange-500
            "
          />
        ))}
      </div>

      {/* Review */}

      <p
        className="
          leading-relaxed

          text-slate-600
          dark:text-slate-300
        "
      >
        Har roj yahi se order karta hu.
        Delivery fast hai aur local
        dukaan ka experience bhi bahut
        trusted lagta hai. Best dukaan
        app hai.
      </p>
    </div>
  );
}