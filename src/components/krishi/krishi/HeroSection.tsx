
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="
      relative overflow-hidden rounded-[40px]
      border border-white/40
      bg-white/70
      p-6 md:p-10
      shadow-[0_20px_80px_rgba(34,197,94,0.12)]
      backdrop-blur-2xl
    "
    >
      {/* Glow */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-green-300/30 blur-3xl" />
      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <div
            className="
            mb-5 inline-flex items-center gap-2
            rounded-full bg-green-100 px-4 py-2
            text-sm font-medium text-green-700
          "
          >
            🌱 Digital Farming, Better Future
          </div>

          <h1
            className="
            max-w-xl text-5xl font-black leading-tight
            tracking-tight text-slate-900
            md:text-6xl
          "
          >
            Apni Kheti Ko
            <span className="block text-green-600">
              Digital Banao
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Khet ka record, fasal ki jaankari, mandi bhaav aur
            smart farming — sab ek jagah.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              className="
              rounded-2xl bg-gradient-to-r
              from-green-500 to-emerald-600
              px-7 py-4 text-sm font-semibold text-white
              shadow-lg shadow-green-500/30
              transition-all duration-300
              hover:-translate-y-1 hover:scale-105
            "
            >
              Mera Khet Jodein
            </button>

            <button
              className="
              rounded-2xl border border-slate-200
              bg-white px-7 py-4
              text-sm font-semibold text-slate-700
              transition-all duration-300
              hover:border-green-200
              hover:shadow-xl
            "
            >
              Fasal Bechein
            </button>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          {/* Floating Glow */}
          <div className="absolute h-[420px] w-[420px] rounded-full bg-green-400/20 blur-3xl" />

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
            border border-white/40
            bg-white/80
            p-5
            shadow-2xl
            backdrop-blur-2xl
          "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  Najafgarh, Delhi
                </p>

                <h3 className="mt-2 text-4xl font-bold text-slate-900">
                  32°
                </h3>
              </div>

              <div className="text-5xl">☀️</div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-slate-400">Humidity</p>
                <h4 className="mt-1 font-bold text-slate-800">
                  48%
                </h4>
              </div>

              <div>
                <p className="text-slate-400">Wind</p>
                <h4 className="mt-1 font-bold text-slate-800">
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