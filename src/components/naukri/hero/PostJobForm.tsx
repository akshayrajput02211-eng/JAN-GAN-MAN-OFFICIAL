"use client";

import { useState } from "react";

import {
  Briefcase,
  MapPin,
  Wallet,
} from "lucide-react";

export default function PostJobForm() {
  const [live, setLive] = useState(false);

  return (
    <div
      className="
        relative

        rounded-[36px]

        border
        border-white/50
        dark:border-slate-700/40

        bg-white/80
        dark:bg-slate-800/80

        p-6
        lg:p-8

        backdrop-blur-3xl

        shadow-[0_25px_80px_rgba(124,58,237,0.12)]
        dark:shadow-[0_25px_80px_rgba(0,0,0,0.45)]
      "
    >
      {/* TOP LIGHT */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_65%)]

          dark:bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.12),transparent_65%)]

          pointer-events-none
        "
      />

      {/* CONTENT */}

      <div className="relative z-10">
        {/* HEADER */}

        <div className="flex items-start justify-between gap-4">
          <div>
            {/* BADGE */}

            <div
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                bg-[#ede9fe]

                px-4
                py-2

                text-xs
                font-bold

                text-[#4c1d95]
              "
            >
              <div className="h-2 w-2 rounded-full bg-[#7c3aed]" />

              Quick Daily Hiring
            </div>

            {/* TITLE */}

            <h2
              className="
                mt-5

                text-3xl
                sm:text-4xl

                font-black

                leading-tight

                text-[#18214d]
                dark:text-white
              "
            >
              Mujhe Kaam
              <br />
              Chahiye
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-4

                max-w-[320px]

                text-sm
                leading-relaxed

                text-gray-500
                dark:text-slate-400
              "
            >
              Nearby workers aur local employers se
              instantly connect ho jao.
            </p>
          </div>

          {/* TOGGLE */}

          <button
            onClick={() => setLive(!live)}
            className={`
              relative

              h-8
              w-16

              rounded-full

              transition-colors
              duration-300

              ${
                live
                  ? "bg-[#7c3aed]"
                  : "bg-gray-300 dark:bg-slate-600"
              }
            `}
          >
            {/* TOGGLE DOT */}

            <div
              className={`
                absolute
                top-1

                h-6
                w-6

                rounded-full

                bg-white
                dark:bg-slate-200

                shadow-md

                transition-transform
                duration-300

                ${
                  live
                    ? "translate-x-8"
                    : "translate-x-1"
                }
              `}
            />

            {/* TEXT */}

            <span
              className={`
                absolute
                top-1/2

                -translate-y-1/2

                text-[10px]
                font-bold
                text-white

                ${
                  live
                    ? "left-3"
                    : "right-3"
                }
              `}
            >
              {live ? "ON" : "OFF"}
            </span>
          </button>
        </div>

        {/* FORM AREA */}

        <div
          className={`
            overflow-hidden

            transition-[max-height,opacity,margin]
            duration-500
            ease-in-out

            ${
              live
                ? "mt-8 max-h-[900px] opacity-100"
                : "mt-0 max-h-0 opacity-0"
            }
          `}
        >
          <div className="space-y-5">
            {/* JOB */}

            <Input
              icon={<Briefcase size={18} />}
              label="Kaun sa kaam?"
              placeholder="Painter, Driver..."
            />

            {/* LOCATION */}

            <Input
              icon={<MapPin size={18} />}
              label="Location"
              placeholder="Apna area daalein"
            />

            {/* PAYMENT */}

            <Input
              icon={<Wallet size={18} />}
              label="Expected Payment"
              placeholder="₹ Daily payment"
            />

            {/* RANGE */}

            <div>
              <div className="mb-3 flex items-center justify-between">
                <label
                  className="
                    text-sm
                    font-bold

                    text-[#18214d]
                    dark:text-white
                  "
                >
                  Nearby Distance
                </label>

                <span
                  className="
                    rounded-full

                    bg-[#ede9fe]

                    px-3
                    py-1

                    text-xs
                    font-bold

                    text-[#4c1d95]
                  "
                >
                  10 KM
                </span>
              </div>

              <input
                type="range"
                className="
                  h-2
                  w-full

                  cursor-pointer

                  appearance-none

                  rounded-full

                  bg-[#ddd6fe]

                  accent-[#7c3aed]
                "
              />
            </div>

            {/* BUTTON */}

            <button
              className="
                w-full

                rounded-2xl

                bg-gradient-to-r
                from-[#7c3aed]
                to-[#4c1d95]

                py-4

                text-sm
                sm:text-base

                font-bold
                text-white

                shadow-[0_10px_30px_rgba(124,58,237,0.35)]

                transition-transform
                duration-300

                hover:scale-[1.02]
              "
            >
              + Job Post Karein
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* INPUT */

function Input({
  icon,
  label,
  placeholder,
}: {
  icon: React.ReactNode;
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        className="
          mb-3

          flex
          items-center
          gap-2

          text-sm
          font-bold

          text-[#18214d]
          dark:text-white
        "
      >
        <span className="text-[#7c3aed]">
          {icon}
        </span>

        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="
          h-14
          w-full

          rounded-2xl

          border
          border-[#e7ebf3]
          dark:border-slate-700/40

          bg-[#f8fafc]
          dark:bg-slate-700/60

          px-5

          text-sm

          text-[#18214d]
          dark:text-white

          outline-none

          transition-all
          duration-300

          placeholder:text-gray-400
          dark:placeholder:text-slate-400

          focus:border-[#7c3aed]
          focus:bg-white
          dark:focus:bg-slate-600
        "
      />
    </div>
  );
}