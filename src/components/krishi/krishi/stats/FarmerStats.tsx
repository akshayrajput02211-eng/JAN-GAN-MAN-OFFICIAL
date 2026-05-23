

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
    <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            whileHover={{ y: -8 }}
            className="
            rounded-[30px]
            border border-white/40
            bg-white/70
            p-6
            backdrop-blur-2xl
            transition-all duration-300
            hover:shadow-[0_20px_50px_rgba(34,197,94,0.15)]
          "
          >
            <div
              className="
              mb-5 flex h-14 w-14 items-center justify-center
              rounded-2xl bg-green-100
            "
            >
              <Icon className="h-7 w-7 text-green-600" />
            </div>

            <p className="text-sm text-slate-500">
              {item.title}
            </p>

            <h3 className="mt-2 text-3xl font-bold text-slate-900">
              {item.value}
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              {item.sub}
            </p>
          </motion.div>
        );
      })}
    </section>
  );
}