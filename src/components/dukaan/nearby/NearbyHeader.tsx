// ========================================
// FILE: src/components/dukaan/nearby/NearbyHeader.tsx
// ========================================

"use client";

import { MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";

export default function NearbyHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="rounded-[32px] border border-white/50 bg-white/70 p-5 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-slate-800/70"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
            Paas Ki Dukaan
          </h1>

          <div className="mt-3 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <MapPin className="h-4 w-4 text-[#ea580c]" />

            <span className="font-medium">
              Shivaji Nagar, Delhi, India
            </span>
          </div>
        </div>

        <button
          className="
            inline-flex items-center gap-2 rounded-2xl
            bg-[#ea580c] px-5 py-3 text-sm font-semibold
            text-white transition-all duration-300
            hover:-translate-y-1 hover:shadow-xl
          "
        >
          <Navigation className="h-4 w-4" />
          Location Badlo
        </button>
      </div>
    </motion.div>
  );
}