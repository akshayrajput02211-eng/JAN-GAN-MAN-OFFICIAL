"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import hero from "@/assets/dukaan/hero.png";

export default function HeroLeft() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      {/* Badge */}
      <div
        className="
          inline-flex items-center gap-2
          rounded-full
          border border-orange-200
          bg-orange-100/80
          px-5 py-2
          font-semibold
          text-orange-800
          shadow-sm
          dark:border-orange-900/40
          dark:bg-orange-950/40
          dark:text-orange-200
          backdrop-blur-md
          mb-6
        "
      >
        One Day, Right Help!
      </div>

      {/* Heading */}
      <h1
        className="
          text-3xl sm:text-4xl lg:text-5xl xl:text-7xl
          font-black
          leading-tight
          tracking-tight
          text-slate-900
          dark:text-white
        "
      >
        Apne Gaon Ki
        <span className="block text-orange-600 dark:text-orange-400">
          Har Dukaan
        </span>
        Ab Online
      </h1>

      {/* Description */}
      <p
        className="
          mt-6
          max-w-2xl
          text-base sm:text-lg
          leading-relaxed
          text-slate-700
          dark:text-slate-300
        "
      >
        Kirana, Dawaai, Sabzi, Doodh aur rozmarra ka
        saamaan ab ghar tak — fast delivery aur trusted
        local dukaan ke saath.
      </p>

      {/* Stats */}
      <div className="mt-10 flex flex-wrap gap-4">
        <div
          className="
            rounded-3xl
            border border-orange-100
            bg-white
            dark:bg-slate-800
            px-6 py-5
            shadow-lg shadow-orange-100/40
            dark:shadow-black/20
            backdrop-blur-xl
            transition-all duration-300
            hover:-translate-y-1
          "
        >
          <h4 className="text-lg font-black text-orange-700 dark:text-orange-400">
            24 Shops Open
          </h4>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Near your location
          </p>
        </div>

        <div
          className="
            rounded-3xl
            border border-orange-100
            bg-white
            dark:bg-slate-800
            px-6 py-5
            shadow-lg shadow-orange-100/40
            dark:shadow-black/20
            backdrop-blur-xl
            transition-all duration-300
            hover:-translate-y-1
          "
        >
          <h4 className="text-lg font-black text-orange-700 dark:text-orange-400">
            10-20 mins
          </h4>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Fast delivery
          </p>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative mt-12">
        {/* Glow */}
        <div
          className="
            absolute inset-0
            rounded-[40px]
            bg-gradient-to-r
            from-orange-300/20
            to-amber-300/20
            blur-3xl
          "
        />

        <Image
          src={hero}
          alt="hero"
          priority
          className="
            relative z-10
            w-full
            drop-shadow-2xl
            object-contain
          "
        />
      </div>
    </motion.div>
  );
}