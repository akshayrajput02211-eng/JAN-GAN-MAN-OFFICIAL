// components/hero/WeatherCard.tsx

"use client";

import {
  CloudSun,
  Droplets,
  Wind,
} from "lucide-react";

export default function WeatherCard() {
  return (
    <div
      className="
      relative
      overflow-hidden
      w-full
      max-w-[320px]
      bg-white/80
      dark:bg-slate-800/80
      backdrop-blur-xl
      border
      border-white/40
      dark:border-slate-700/40
      rounded-3xl
      p-6
      shadow-xl
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-2xl
      "
    >

      {/* Glow */}
      <div
        className="
        absolute
        -top-10
        -right-10
        w-32
        h-32
        rounded-full
        bg-orange-300/20
        blur-3xl
        "
      />

      <div className="relative z-10">

        <div className="flex items-center justify-between">

          <div>

            <p
              className="
              text-sm
              text-slate-500
              dark:text-slate-400
              "
            >
              Najafgarh, Delhi
            </p>

            <div className="flex items-center gap-3 mt-4">

              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-orange-100
                dark:bg-orange-500/20
                flex
                items-center
                justify-center
                "
              >
                <CloudSun
                  className="
                  text-[#f97316]
                  "
                  size={34}
                />
              </div>

              <div>

                <h2
                  className="
                  text-4xl
                  font-black
                  text-slate-900
                  dark:text-white
                  "
                >
                  32°C
                </h2>

                <p
                  className="
                  text-slate-500
                  dark:text-slate-400
                  text-sm
                  "
                >
                  Sunny
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Stats */}
        <div
          className="
          grid
          grid-cols-3
          gap-4
          mt-6
          "
        >

          {/* Humidity */}
          <div
            className="
            rounded-2xl
            bg-white
            dark:bg-slate-800
            p-3
            shadow-sm
            "
          >

            <div
              className="
              flex
              items-center
              gap-1
              text-slate-500
              dark:text-slate-400
              "
            >
              <Droplets size={15} />
              <span className="text-xs">
                Humidity
              </span>
            </div>

            <h4
              className="
              font-bold
              mt-2
              text-slate-800
              dark:text-white
              "
            >
              45%
            </h4>

          </div>

          {/* Wind */}
          <div
            className="
            rounded-2xl
            bg-white
            dark:bg-slate-800
            p-3
            shadow-sm
            "
          >

            <div
              className="
              flex
              items-center
              gap-1
              text-slate-500
              dark:text-slate-400
              "
            >
              <Wind size={15} />
              <span className="text-xs">
                Wind
              </span>
            </div>

            <h4
              className="
              font-bold
              mt-2
              text-slate-800
              dark:text-white
              "
            >
              12 km/h
            </h4>

          </div>

          {/* Rain */}
          <div
            className="
            rounded-2xl
            bg-white
            dark:bg-slate-800
            p-3
            shadow-sm
            "
          >

            <div
              className="
              flex
              items-center
              gap-1
              text-slate-500
              dark:text-slate-400
              "
            >
              <Droplets size={15} />
              <span className="text-xs">
                Rain
              </span>
            </div>

            <h4
              className="
              font-bold
              mt-2
              text-slate-800
              dark:text-white
              "
            >
              10%
            </h4>

          </div>

        </div>

      </div>

    </div>
  );
}