"use client";

import {
  Calendar,
  Camera,
  BellRing,
} from "lucide-react";

export default function KhetDetail() {
  return (
    <div
      className="
        mt-8

        rounded-[34px]

        bg-white/70
        dark:bg-slate-800/70

        p-5

        shadow-xl
        backdrop-blur-xl
      "
    >
      <h2 className="text-2xl font-black dark:text-white">
        Field Details
      </h2>

      {/* MAP */}

      <div
        className="
          mt-5

          flex
          h-52
          items-center
          justify-center

          rounded-3xl

          bg-gradient-to-br
          from-[#d1fae5]
          to-[#dcfce7]

          text-center

          dark:from-slate-700
          dark:to-slate-800
        "
      >
        <p className="font-bold text-[#166534] dark:text-white">
          Map Location Placeholder
        </p>
      </div>

      {/* TIMELINE */}

      <div className="mt-6 space-y-4">
        <Timeline
          title="Sowing Date"
          date="12 June 2026"
        />

        <Timeline
          title="Watering Date"
          date="18 June 2026"
        />

        <Timeline
          title="Harvesting Date"
          date="25 September 2026"
        />
      </div>

      {/* REMINDERS */}

      <div className="mt-6 flex flex-wrap gap-3">
        <button className="rounded-full bg-yellow-100 px-4 py-3 text-sm font-bold text-yellow-700">
          Fertilizer Dalna Hai
        </button>

        <button className="rounded-full bg-blue-100 px-4 py-3 text-sm font-bold text-blue-700">
          Paani Dena Hai
        </button>

        <button className="rounded-full bg-green-100 px-4 py-3 text-sm font-bold text-green-700">
          Crop Check
        </button>
      </div>

      {/* PHOTO */}

      <button
        className="
          mt-6

          flex
          w-full
          items-center
          justify-center
          gap-3

          rounded-2xl

          border-2
          border-dashed
          border-green-300

          py-5

          text-[#16a34a]
        "
      >
        <Camera />
        Crop Health Photo Upload
      </button>
    </div>
  );
}

function Timeline({
  title,
  date,
}: any) {
  return (
    <div
      className="
        flex
        items-center
        gap-4

        rounded-2xl

        bg-[#f8fafc]
        p-4

        dark:bg-slate-700
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center

          rounded-2xl

          bg-green-100
        "
      >
        <Calendar className="text-[#16a34a]" />
      </div>

      <div>
        <p className="text-sm text-slate-500">
          {title}
        </p>

        <h4 className="font-bold dark:text-white">
          {date}
        </h4>
      </div>
    </div>
  );
}