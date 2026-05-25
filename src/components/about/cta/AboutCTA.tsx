"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="px-4 pb-24 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[42px] bg-gradient-to-r from-[#16a34a] via-[#15803d] to-[#166534] p-10 md:p-16"
      >
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
              App Download Karo
            </h2>

            <p className="mt-6 text-lg leading-8 text-green-50">
              Bharat ke har gaon ke liye bana digital super-app — ab aapke
              mobile mein.
            </p>
          </div>

          <button className="flex items-center gap-3 rounded-2xl bg-white px-8 py-5 text-lg font-bold text-[#16a34a] transition hover:scale-105">
            <Download size={22} />
            Download App
          </button>
        </div>
      </motion.div>
    </section>
  );
}