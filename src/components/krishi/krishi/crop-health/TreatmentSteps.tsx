"use client";

import {
  Pill,
  Droplets,
  SprayCan,
  Store,
} from "lucide-react";

const steps = [
  {
    icon: Pill,
    title: "Fungicide Spray Karein",
  },
  {
    icon: Droplets,
    title: "Paani Ka Santulan Rakhein",
  },
  {
    icon: SprayCan,
    title: "Affected Pattiyaan Hataayein",
  },
];

export default function TreatmentSteps() {
  return (
    <section
      className="
        rounded-[36px]

        bg-white/70
        dark:bg-slate-800/70

        p-6

        shadow-2xl
        backdrop-blur-2xl
      "
    >
      <h2 className="text-3xl font-black dark:text-white">
        Ilaaj Ke Steps
      </h2>

      <div className="mt-8 space-y-5">
        {steps.map((step, i) => {
          const Icon = step.icon;

          return (
            <div
              key={i}
              className="
                flex
                items-start
                gap-4

                rounded-3xl

                bg-[#f6fff8]
                dark:bg-slate-700

                p-5
              "
            >
              {/* Number */}

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center

                  rounded-full

                  bg-[#16a34a]

                  text-lg
                  font-black
                  text-white
                "
              >
                {i + 1}
              </div>

              {/* Content */}

              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <Icon className="text-[#16a34a]" />

                  <h3 className="text-lg font-bold dark:text-white">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-2 text-slate-500">
                  Simple Hindi instructions yahan.
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}

      <button
        className="
          mt-8

          flex
          w-full
          items-center
          justify-center
          gap-3

          rounded-2xl

          bg-gradient-to-r
          from-[#16a34a]
          to-[#22c55e]

          py-4

          text-lg
          font-bold
          text-white

          shadow-xl
        "
      >
        <Store />
        Dawai Kahan Milegi?
      </button>

      {/* HISTORY */}

      <div className="mt-10">
        <h3 className="text-2xl font-black dark:text-white">
          Pehle ke Scan
        </h3>

        <div className="mt-5 space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="
                flex
                items-center
                gap-4

                rounded-2xl

                bg-[#f8fafc]
                dark:bg-slate-700

                p-4
              "
            >
              <div
                className="
                  h-16
                  w-16

                  rounded-2xl

                  bg-green-200
                "
              />

              <div className="flex-1">
                <h4 className="font-bold dark:text-white">
                  Wheat Scan #{item}
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  2 din pehle
                </p>
              </div>

              <div
                className="
                  rounded-full

                  bg-green-100

                  px-3
                  py-1

                  text-xs
                  font-bold

                  text-green-700
                "
              >
                Healthy
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}