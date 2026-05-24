"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  Mic,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#fef3c7] dark:bg-slate-950 py-14 lg:py-24 transition-colors duration-300">

      {/* GLOW */}
      <div
        className="
        absolute
        top-0
        left-0
        w-full
        max-w-[500px]
        aspect-square
        bg-orange-300/20
        blur-[120px]
        rounded-full
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-full
        max-w-[500px]
        aspect-square
        bg-orange-400/20
        blur-[120px]
        rounded-full
        "
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-14
          lg:gap-16
          items-center
          "
        >

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Badge */}
            <div
              className="
              inline-flex
              items-center
              px-4
              py-2
              rounded-full
              bg-orange-100
              dark:bg-orange-500/20
              text-[#d97706]
              dark:text-orange-300
              font-semibold
              text-sm
              mb-6
              "
            >
              Digital Bharat Platform
            </div>

            {/* Heading */}
            <h1
              className="
              text-4xl
              sm:text-5xl
              lg:text-7xl
              font-black
              leading-tight
              text-slate-900
              dark:text-white
              "
            >
              Sarkari Jankari,
              <span
                className="
                block
                bg-gradient-to-r
                from-[#d97706]
                to-[#f97316]
                bg-clip-text
                text-transparent
                "
              >
                Ab Ek Jagah
              </span>
            </h1>

            {/* Description */}
            <p
              className="
              mt-6
              text-slate-600
              dark:text-slate-300
              text-base
              sm:text-lg
              max-w-xl
              leading-relaxed
              "
            >
              Yojna, jobs, documents, complaints,
              AI help aur live government updates —
              sab kuch ek smart digital platform par.
            </p>

            {/* SEARCH */}
            <div
              className="
              mt-10
              rounded-[28px]
              border
              border-orange-200/60
              dark:border-slate-700/60
              bg-white/80
              dark:bg-slate-900/80
              backdrop-blur-xl
              p-3
              flex
              items-center
              gap-3
              shadow-xl
              transition-colors
              duration-300
              "
            >

              <Search className="text-slate-400 shrink-0" />

              <input
                type="text"
                placeholder="Search yojna, jobs..."
                className="
                flex-1
                bg-transparent
                outline-none
                text-sm
                sm:text-lg
                text-slate-800
                dark:text-white
                placeholder:text-slate-400
                min-w-0
                "
              />

              <button
                className="
                w-full
                max-w-[52px]
                h-[52px]
                rounded-2xl
                bg-[#d97706]
                hover:bg-[#f97316]
                dark:bg-slate-800
                text-white
                flex
                items-center
                justify-center
                hover:scale-105
                transition-all
                duration-300
                shrink-0
                "
              >
                <Mic size={20} />
              </button>

            </div>

            {/* TAGS */}
            <div
              className="
              mt-6
              flex
              flex-wrap
              gap-3
              "
            >

              {[
                "PM Kisan",
                "Ayushman",
                "SSC",
                "Ration Card",
              ].map((tag) => (
                <div
                  key={tag}
                  className="
                  px-4
                  sm:px-5
                  py-2
                  rounded-full
                  bg-white
                  dark:bg-slate-800
                  shadow-md
                  text-sm
                  font-medium
                  text-slate-700
                  dark:text-slate-200
                  transition-colors
                  duration-300
                  "
                >
                  {tag}
                </div>
              ))}

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            {/* Main Card */}
            <div
              className="
              rounded-[36px]
              border
              border-orange-200/60
              dark:border-slate-700/60
              bg-white/70
              dark:bg-slate-900/70
              backdrop-blur-xl
              p-4
              sm:p-6
              relative
              overflow-hidden
              shadow-2xl
              "
            >

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-br
                from-orange-100/40
                to-orange-200/20
                dark:from-orange-500/10
                dark:to-transparent
                "
              />

              <div className="relative z-10">

                <Image
                  src="/dummy/farmer.png"
                  alt="hero"
                  width={700}
                  height={700}
                  className="
                  w-full
                  h-auto
                  mx-auto
                  object-contain
                  drop-shadow-2xl
                  "
                />

              </div>

            </div>

            {/* FLOAT CARD */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
              absolute
              top-6
              sm:top-10
              right-0
              sm:-right-6
              rounded-[28px]
              border
              border-orange-200/60
              dark:border-slate-700/60
              bg-white/80
              dark:bg-slate-900/80
              backdrop-blur-xl
              p-4
              sm:p-5
              w-full
              max-w-[220px]
              shadow-xl
              "
            >

              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Delhi Weather
              </p>

              <h2
                className="
                text-4xl
                sm:text-5xl
                font-black
                mt-3
                text-slate-900
                dark:text-white
                "
              >
                32°
              </h2>

              <p className="text-[#d97706] mt-2 font-medium">
                Sunny
              </p>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}