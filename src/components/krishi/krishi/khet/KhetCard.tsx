"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Leaf,
  MapPin,
  Pencil,
  Eye,
} from "lucide-react";

interface Props {
  fieldName: string;
  area: string;
  crop: string;
  soil: string;
  watered: string;
  health: "Good" | "Fair" | "Poor";
}

export default function KhetCard({
  fieldName,
  area,
  crop,
  soil,
  watered,
  health,
}: Props) {
  const healthColor =
    health === "Good"
      ? "bg-green-500"
      : health === "Fair"
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="
        overflow-hidden
        rounded-[34px]

        border
        border-white/50

        bg-white/70
        dark:bg-slate-800/70

        p-5

        shadow-[0_20px_60px_rgba(0,0,0,0.08)]

        backdrop-blur-2xl
      "
    >
      {/* TOP */}

      <div className="flex items-start justify-between gap-4">
        <div>
          <h2
            className="
              text-2xl
              font-black
              text-[#10224f]
              dark:text-white
            "
          >
            {fieldName}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            {area}
          </p>
        </div>

        <span
          className="
            rounded-full
            bg-green-100
            px-4
            py-2
            text-xs
            font-bold
            text-green-700
          "
        >
          {crop}
        </span>
      </div>

      {/* INFO */}

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div
          className="
            rounded-2xl
            bg-[#f6fff8]
            p-4
            dark:bg-slate-700
          "
        >
          <div className="flex items-center gap-2">
            <Leaf className="h-4 w-4 text-[#16a34a]" />

            <p className="text-xs font-semibold text-slate-500">
              Soil Type
            </p>
          </div>

          <h4 className="mt-2 font-bold dark:text-white">
            {soil}
          </h4>
        </div>

        <div
          className="
            rounded-2xl
            bg-[#f6fff8]
            p-4
            dark:bg-slate-700
          "
        >
          <div className="flex items-center gap-2">
            <Droplets className="h-4 w-4 text-blue-500" />

            <p className="text-xs font-semibold text-slate-500">
              Last Watered
            </p>
          </div>

          <h4 className="mt-2 font-bold dark:text-white">
            {watered}
          </h4>
        </div>
      </div>

      {/* HEALTH */}

      <div
        className="
          mt-5
          flex
          items-center
          justify-between

          rounded-2xl

          bg-[#f8fafc]
          p-4

          dark:bg-slate-700
        "
      >
        <div className="flex items-center gap-3">
          <div
            className={`h-3 w-3 rounded-full ${healthColor}`}
          />

          <p className="font-semibold dark:text-white">
            Crop Health: {health}
          </p>
        </div>

        <MapPin className="h-5 w-5 text-[#16a34a]" />
      </div>

      {/* BUTTONS */}

      <div className="mt-6 flex gap-3">
        <button
          className="
            flex-1
            rounded-2xl

            bg-gradient-to-r
            from-[#16a34a]
            to-[#22c55e]

            py-3

            text-sm
            font-bold
            text-white

            shadow-lg
          "
        >
          <div className="flex items-center justify-center gap-2">
            <Eye size={16} />
            Dekho
          </div>
        </button>

        <button
          className="
            flex-1
            rounded-2xl

            border
            border-green-200

            bg-white

            py-3

            text-sm
            font-bold
            text-[#16a34a]

            dark:bg-slate-800
          "
        >
          <div className="flex items-center justify-center gap-2">
            <Pencil size={16} />
            Edit
          </div>
        </button>
      </div>
    </motion.div>
  );
}