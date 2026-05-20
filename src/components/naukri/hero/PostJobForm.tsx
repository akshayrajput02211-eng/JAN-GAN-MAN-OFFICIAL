"use client";

import { useState } from "react";

export default function PostJobForm() {
  const [live, setLive] = useState(false);

  return (
    <div
      className={`
        w-full
        max-w-[540px]
        overflow-hidden
        rounded-[34px]
        border border-white/40
        bg-white/80
        backdrop-blur-2xl
        shadow-[0_25px_80px_rgba(0,0,0,0.12)]
        transition-all
        duration-500
      `}
    >
      {/* TOP SECTION */}
      <div
        className={`
          p-6
          transition-all
          duration-500
        `}
      >
        {/* TOP ROW */}
        <div className="flex items-start justify-between gap-5">
          <div>
            {/* BADGE */}
            <span
              className="
                inline-flex
                rounded-full
                bg-gradient-to-r
                from-blue-100
                to-cyan-100
                px-4
                py-1.5
                text-xs
                font-bold
                text-blue-700
              "
            >
              One Day Help
            </span>

            {/* TITLE */}
            <h2
              className={`
                font-black
                leading-[1.05]
                tracking-tight
                text-[#18214d]
                transition-all
                duration-500
                ${
                  live
                    ? "mt-4 text-4xl"
                    : "mt-3 text-2xl"
                }
              `}
            >
              Mujhe kaam 
              <br />
               dundh raha hu
            </h2>

            {/* SUBTEXT */}
            <div
              className={`
                overflow-hidden
                transition-all
                duration-500
                ${
                  live
                    ? "mt-3 max-h-20 opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              <p className="text-sm leading-relaxed text-gray-500">
                Nearby workers ko instantly connect karo
                aur ek din ke liye kaam pao.
              </p>
            </div>
          </div>

          {/* TOGGLE */}
          <div className="flex items-center gap-3 pt-1">
            <span
              className={`
                text-sm
                font-bold
                transition-all
                ${
                  live
                    ? "text-green-600"
                    : "text-gray-400"
                }
              `}
            >
              {live ? "LIVE" : "OFF"}
            </span>

            <button
              onClick={() => setLive(!live)}
              className={`
                relative
                h-7
                w-14
                rounded-full
                transition-all
                duration-300
                ${
                  live
                    ? "bg-green-500"
                    : "bg-gray-300"
                }
              `}
            >
              <div
                className={`
                  absolute
                  top-1
                  h-5
                  w-5
                  rounded-full
                  bg-white
                  shadow-md
                  transition-all
                  duration-300
                  ${
                    live
                      ? "right-1"
                      : "left-1"
                  }
                `}
              />
            </button>
          </div>
        </div>

        {/* EXPAND FORM */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-700
            ease-in-out
            
            ${
              live
                ? "mt-1 max-h-[900px] opacity-100"
                : "mt-1 max-h-0 opacity-0"
            }
          `}
        >
          <div className="space-y-6 pb-2">
            <Input
              label="Kaun sa kaam chahiye?"
              placeholder="Painter, Driver, Mason..."
            />

            <Input
              label="Location"
              placeholder="Apna location daalein"
            />

            {/* RANGE */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <label className="font-semibold text-[#18214d]">
                  Kitne km ke andar?
                </label>

                <span
                  className="
                    rounded-full
                    bg-green-100
                    px-3
                    py-1
                    text-sm
                    font-bold
                    text-green-700
                  "
                >
                  10 km Max
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
                  bg-green-100
                  accent-green-600
                "
              />

              <div className="mt-2 flex justify-between text-sm text-gray-500">
                <span>0 km</span>
                <span>10 km</span>
              </div>
            </div>

            <Input
              label="Payment Desire?"
              placeholder="₹ Enter daily payment"
            />

            {/* BUTTON */}
            <button
              className="
                w-full
                rounded-2xl
                bg-blue-600
                py-5
                text-lg
                font-bold
                text-white
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:bg-blue-700
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

function Input({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        className="
          mb-3
          block
          font-semibold
          text-[#18214d]
        "
      >
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="
          w-full
          rounded-2xl
          border
          border-gray-200
          bg-[#fafcff]
          px-5
          py-4
          text-[15px]
          outline-none
          transition-all
          placeholder:text-gray-400
          focus:border-blue-400
          focus:bg-white
          focus:ring-4
          focus:ring-blue-100
        "
      />
    </div>
  );
}