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
      <div className="inline-flex bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold mb-6">
        One Day, Right Help!
      </div>

      <h1 className="text-5xl lg:text-7xl font-black leading-tight text-slate-900">
        Apne Gaon Ki
        <span className="text-green-600 block">
          Har Dukaan
        </span>
        Ab Online
      </h1>

      <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
        Kirana, Dawaai, Sabzi, Doodh aur rozmarra ka
        saamaan ab ghar tak.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <div className="bg-white rounded-2xl px-5 py-4 shadow-md">
          <h4 className="font-bold text-green-700">24 Shops Open</h4>
          <p className="text-sm text-slate-500">Near you</p>
        </div>

        <div className="bg-white rounded-2xl px-5 py-4 shadow-md">
          <h4 className="font-bold text-green-700">10-20 mins</h4>
          <p className="text-sm text-slate-500">Fast delivery</p>
        </div>
      </div>

      <div className="relative mt-10">
        <Image
          src={hero}
          alt="hero"
          className="w-full drop-shadow-2xl"
          priority
        />
      </div>
    </motion.div>
  );
}