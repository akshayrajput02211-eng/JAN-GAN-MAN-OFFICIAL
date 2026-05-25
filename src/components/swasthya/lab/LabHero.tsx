// ========================================
// FILE: src/components/swasthya/lab/LabHero.tsx
// ========================================

"use client";

import { motion } from "framer-motion";
import { Search, FlaskConical } from "lucide-react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function LabHero({ search, setSearch }: Props) {
  return (
    <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-red-600 to-red-500 p-8 md:p-12 text-white">
      <div className="absolute top-0 right-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-md">
          <FlaskConical className="h-4 w-4" />
          <span className="text-sm font-medium">
            Swasthya Lab Services
          </span>
        </div>

        <h1 className="max-w-2xl text-4xl md:text-6xl font-black leading-tight">
          Ghar baithe
          <span className="block text-red-100">
            test karwaao
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-red-100 text-lg">
          Blood test, thyroid, sugar aur health checkup
          aasani se book karo.
        </p>

        <div className="mt-8 flex items-center gap-3 rounded-[24px] bg-white/15 p-3 backdrop-blur-xl border border-white/20">
          <Search className="h-5 w-5 text-white" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Test search karo..."
            className="w-full bg-transparent outline-none placeholder:text-red-100"
          />
        </div>
      </motion.div>
    </section>
  );
}