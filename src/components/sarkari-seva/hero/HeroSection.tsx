
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  Mic,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative py-14 lg:py-24 overflow-hidden">

      {/* GLOW */}
      <div className="
      absolute top-0 left-0
      w-[500px] h-[500px]
      bg-green-300/20
      blur-[120px]
      rounded-full
      " />

      <div className="
      absolute bottom-0 right-0
      w-[500px] h-[500px]
      bg-blue-300/20
      blur-[120px]
      rounded-full
      " />

      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="
        grid
        lg:grid-cols-2
        gap-16
        items-center
        ">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >

            <div className="
            inline-flex
            px-4 py-2
            rounded-full
            bg-green-100
            text-green-700
            font-medium
            mb-6
            ">
              Digital Bharat Platform
            </div>

            <h1 className="
            text-5xl
            lg:text-7xl
            font-black
            leading-tight
            ">
              Sarkari Jankari,
              <span className="gradient-text block">
                Ab Ek Jagah
              </span>
            </h1>

            <p className="
            mt-6
            text-slate-600
            text-lg
            max-w-xl
            leading-relaxed
            ">
              Yojna, jobs, documents, complaints,
              AI help aur live government updates.
            </p>

            {/* SEARCH */}
            <div className="
            mt-10
            glass
            rounded-[30px]
            p-3
            flex items-center
            gap-3
            shadow-xl
            ">

              <Search className="text-slate-400" />

              <input
                type="text"
                placeholder="Search yojna, jobs..."
                className="
                flex-1
                bg-transparent
                outline-none
                text-lg
                "
              />

              <button className="
              w-12 h-12 rounded-2xl
              bg-green-500
              text-white
              flex items-center justify-center
              hover:scale-110
              transition
              ">
                <Mic />
              </button>

            </div>

            {/* TAGS */}
            <div className="
            mt-6
            flex flex-wrap gap-3
            ">
              {[
                "PM Kisan",
                "Ayushman",
                "SSC",
                "Ration Card",
              ].map((tag) => (
                <div
                  key={tag}
                  className="
                  px-5 py-2
                  rounded-full
                  bg-white
                  shadow-md
                  text-sm
                  font-medium
                  "
                >
                  {tag}
                </div>
              ))}
            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8 }}
            className="relative"
          >

            <div className="
            glass
            rounded-[40px]
            p-6
            relative
            overflow-hidden
            shadow-2xl
            ">

              <div className="
              absolute inset-0
              bg-gradient-to-br
              from-green-100/50
              to-blue-100/50
              " />

              <div className="relative z-10">

                <Image
                  src="/dummy/farmer.png"
                  alt="hero"
                  width={700}
                  height={700}
                  className="
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
              top-10
              -right-6
              glass
              rounded-[28px]
              p-5
              w-[220px]
              shadow-xl
              "
            >
              <p className="text-slate-500 text-sm">
                Delhi Weather
              </p>

              <h2 className="
              text-5xl
              font-black
              mt-3
              ">
                32°
              </h2>

              <p className="text-green-600 mt-2">
                Sunny
              </p>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}