"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="
      relative overflow-hidden rounded-[40px]
      border border-white/40 dark:border-slate-700/40
      bg-[#dcfce7]/70 dark:bg-slate-800/70
      p-6 md:p-10
      shadow-[0_20px_80px_rgba(22,163,74,0.12)]
      backdrop-blur-2xl
    "
    >
      {/* Background Glow */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#16a34a]/20 blur-3xl" />
      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[#065f46]/20 blur-3xl" />

      {/* Grid */}
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          {/* Badge */}
          <div
            className="
            mb-5 inline-flex items-center gap-2
            rounded-full
            bg-green-100 dark:bg-slate-700
            px-4 py-2
            text-sm font-medium
            text-[#065f46] dark:text-green-300
          "
          >
            🌱 Digital Farming, Better Future
          </div>

          {/* Heading */}
          <h1
            className="
            max-w-xl text-5xl font-black leading-tight
            tracking-tight
            text-slate-900 dark:text-white
            md:text-6xl
          "
          >
            Apni Kheti Ko
            <span className="block text-[#16a34a]">
              Digital Banao
            </span>
          </h1>

          {/* Description */}
          <p
            className="
            mt-6 max-w-xl text-lg leading-8
            text-slate-700 dark:text-slate-300
          "
          >
            Khet ka record, fasal ki jaankari,
            mandi bhaav aur smart farming —
            sab ek jagah.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            {/* Primary */}
            <button
              className="
              rounded-2xl
              bg-gradient-to-r
              from-[#16a34a]
              to-[#065f46]
              px-7 py-4
              text-sm font-semibold text-white
              shadow-lg shadow-green-500/30
              transition-all duration-300
              hover:-translate-y-1 hover:scale-105
            "
            >
              Mera Khet Jodein
            </button>

            {/* Secondary */}
            <button
              className="
              rounded-2xl
              border border-slate-200 dark:border-slate-700/40
              bg-white dark:bg-slate-700
              px-7 py-4
              text-sm font-semibold
              text-slate-700 dark:text-slate-200
              transition-all duration-300
              hover:border-green-300
              hover:shadow-xl
            "
            >
              Fasal Bechein
            </button>
          </div>

          {/* Stats */}
          <div
            className="
            mt-10 grid
            grid-cols-1 xs:grid-cols-2
            gap-4
          "
          >
            <div
              className="
              rounded-3xl
              border border-white/40 dark:border-slate-700/40
              bg-white/70 dark:bg-slate-800/70
              p-5
              backdrop-blur-xl
            "
            >
              <h3 className="text-3xl font-black text-[#16a34a]">
                10K+
              </h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Farmers Connected
              </p>
            </div>

            <div
              className="
              rounded-3xl
              border border-white/40 dark:border-slate-700/40
              bg-white/70 dark:bg-slate-800/70
              p-5
              backdrop-blur-xl
            "
            >
              <h3 className="text-3xl font-black text-[#065f46] dark:text-green-300">
                24/7
              </h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Smart Farming Support
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <div className="absolute h-[420px] w-[420px] rounded-full bg-[#16a34a]/20 blur-3xl" />

          {/* Farmer Image */}
          <Image
            src="/dummy/farmer.png"
            alt="farmer"
            width={430}
            height={430}
            className="
            relative z-10 object-contain
            drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)]
          "
          />

          {/* Weather Card */}
          <div
            className="
            absolute right-0 top-10 z-20
            w-[250px]
            rounded-[28px]
            border border-white/40 dark:border-slate-700/40
            bg-white/80 dark:bg-slate-800/80
            p-5
            shadow-2xl
            backdrop-blur-2xl
          "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Najafgarh, Delhi
                </p>

                <h3 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
                  32°
                </h3>
              </div>

              <div className="text-5xl">☀️</div>
            </div>

            {/* Weather Stats */}
            <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-400">
                  Humidity
                </p>

                <h4 className="mt-1 font-bold text-slate-800 dark:text-slate-200">
                  48%
                </h4>
              </div>

              <div>
                <p className="text-slate-400">
                  Wind
                </p>

                <h4 className="mt-1 font-bold text-slate-800 dark:text-slate-200">
                  12 km/h
                </h4>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}