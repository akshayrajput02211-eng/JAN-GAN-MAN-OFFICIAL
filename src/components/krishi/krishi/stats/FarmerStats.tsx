"use client";

import { motion } from "framer-motion";

import {
  BadgeCheck,
  FileText,
  LandPlot,
  Tractor,
} from "lucide-react";

const stats = [
  {
    title: "Kul Zameen",
    value: "8.25",
    sub: "Bigha",
    icon: LandPlot,
  },
  {
    title: "Khet ki Sankhya",
    value: "3",
    sub: "Alag Plot",
    icon: Tractor,
  },
  {
    title: "Register Status",
    value: "Registered",
    sub: "Govt Verified",
    icon: BadgeCheck,
  },
  {
    title: "Documents",
    value: "4",
    sub: "Uploaded",
    icon: FileText,
  },
];

export default function FarmerStats() {
  return (
    <section
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      xl:grid-cols-4
      gap-5
    "
    >
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            className="
            rounded-[30px]

            border border-white/40 dark:border-slate-700/40

            bg-[#dcfce7]/70 dark:bg-slate-800/70

            p-5 md:p-6

            backdrop-blur-2xl

            transition-all duration-300
            hover:shadow-[0_20px_50px_rgba(22,163,74,0.15)]
          "
          >
            {/* Icon */}
            <div
              className="
              mb-5

              flex h-14 w-14
              items-center justify-center

              rounded-2xl

              bg-white dark:bg-slate-800

              shadow-sm
            "
            >
              <Icon className="h-7 w-7 text-[#16a34a]" />
            </div>

            {/* Title */}
            <p
              className="
              text-sm
              text-slate-500 dark:text-slate-400
            "
            >
              {item.title}
            </p>

            {/* Value */}
            <h3
              className="
              mt-2

              text-3xl md:text-4xl
              font-black

              text-slate-900 dark:text-white
            "
            >
              {item.value}
            </h3>

            {/* Sub */}
            <p
              className="
              mt-1 text-sm
              text-slate-500 dark:text-slate-400
            "
            >
              {item.sub}
            </p>
          </motion.div>
        );
      })}
    </section>
  );
}