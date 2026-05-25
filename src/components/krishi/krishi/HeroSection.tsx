"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        overflow-hidden

        rounded-[40px]

        border
        border-white/40
        dark:border-slate-700/40

        bg-[#dcfce7]/70
        dark:bg-slate-800/70

        p-6
        md:p-10

        shadow-[0_20px_80px_rgba(22,163,74,0.12)]

        backdrop-blur-2xl
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          -left-20
          top-0

          h-72
          w-72

          rounded-full

          bg-[#16a34a]/20

          blur-3xl
        "
      />

      <div
        className="
          absolute
          right-0
          top-10

          h-72
          w-72

          rounded-full

          bg-[#065f46]/20

          blur-3xl
        "
      />

      {/* GRID */}

      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* LEFT CONTENT */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative z-10"
        >
          {/* BADGE */}

          <div
            className="
              mb-5

              inline-flex
              items-center
              gap-2

              rounded-full

              bg-green-100
              dark:bg-slate-700

              px-4
              py-2

              text-sm
              font-medium

              text-[#065f46]
              dark:text-green-300
            "
          >
            🌱 Digital Farming, Better Future
          </div>

          {/* HEADING */}

          <h1
            className="
              max-w-xl

              text-5xl
              font-black
              leading-tight
              tracking-tight

              text-slate-900
              dark:text-white

              md:text-6xl
            "
          >
            Apni Kheti Ko

            <span className="block text-[#16a34a]">
              Digital Banao
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mt-6

              max-w-xl

              text-lg
              leading-8

              text-slate-700
              dark:text-slate-300
            "
          >
            Khet ka record, fasal ki jaankari,
            mandi bhaav aur smart farming —
            sab ek jagah.
          </p>

          {/* BUTTONS */}

          <div className="mt-8 flex flex-wrap gap-4">
            {/* PRIMARY BUTTON */}

            <Link href="/krishi/mera-khet">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -4,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group

                  relative
                  overflow-hidden

                  rounded-2xl

                  bg-gradient-to-r
                  from-[#16a34a]
                  via-[#22c55e]
                  to-[#065f46]

                  px-7
                  py-4

                  text-sm
                  font-semibold
                  text-white

                  shadow-[0_15px_40px_rgba(22,163,74,0.35)]

                  transition-all
                  duration-300
                "
              >
                {/* SHINE EFFECT */}

                <div
                  className="
                    absolute
                    inset-0

                    bg-white/20

                    opacity-0

                    transition-opacity
                    duration-300

                    group-hover:opacity-100
                  "
                />

                {/* GLOW */}

                <div
                  className="
                    absolute
                    -left-10
                    top-0

                    h-full
                    w-20

                    rotate-12

                    bg-white/20

                    blur-xl

                    transition-all
                    duration-700

                    group-hover:left-[120%]
                  "
                />

                <span className="relative z-10">
                  🌱 Mera Khet Jodein
                </span>
              </motion.button>
            </Link>

            {/* SECONDARY BUTTON */}

            <Link href="/krishi/mandi">
              <motion.button
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group

                  relative
                  overflow-hidden

                  rounded-2xl

                  border
                  border-green-200
                  dark:border-slate-700/40

                  bg-white
                  dark:bg-slate-700

                  px-7
                  py-4

                  text-sm
                  font-semibold

                  text-slate-700
                  dark:text-slate-200

                  shadow-lg

                  transition-all
                  duration-300

                  hover:border-green-300
                  hover:shadow-2xl
                "
              >
                {/* HOVER GLOW */}

                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-r
                    from-[#16a34a]/5
                    to-[#22c55e]/10

                    opacity-0

                    transition-opacity
                    duration-300

                    group-hover:opacity-100
                  "
                />

                {/* SHINE */}

                <div
                  className="
                    absolute
                    -left-10
                    top-0

                    h-full
                    w-20

                    rotate-12

                    bg-[#16a34a]/10

                    blur-xl

                    transition-all
                    duration-700

                    group-hover:left-[120%]
                  "
                />

                <span className="relative z-10">
                  🌾 Fasal Bechein
                </span>
              </motion.button>
            </Link>
          </div>

          {/* STATS */}

          <div
            className="
              mt-10

              grid
              grid-cols-1
              gap-4

              xs:grid-cols-2
            "
          >
            {/* CARD 1 */}

            <motion.div
              whileHover={{
                y: -5,
              }}
              className="
                rounded-3xl

                border
                border-white/40
                dark:border-slate-700/40

                bg-white/70
                dark:bg-slate-800/70

                p-5

                shadow-xl

                backdrop-blur-xl
              "
            >
              <h3
                className="
                  text-3xl
                  font-black
                  text-[#16a34a]
                "
              >
                10K+
              </h3>

              <p
                className="
                  mt-2

                  text-sm

                  text-slate-600
                  dark:text-slate-300
                "
              >
                Farmers Connected
              </p>
            </motion.div>

            {/* CARD 2 */}

            <motion.div
              whileHover={{
                y: -5,
              }}
              className="
                rounded-3xl

                border
                border-white/40
                dark:border-slate-700/40

                bg-white/70
                dark:bg-slate-800/70

                p-5

                shadow-xl

                backdrop-blur-xl
              "
            >
              <h3
                className="
                  text-3xl
                  font-black

                  text-[#065f46]
                  dark:text-green-300
                "
              >
                24/7
              </h3>

              <p
                className="
                  mt-2

                  text-sm

                  text-slate-600
                  dark:text-slate-300
                "
              >
                Smart Farming Support
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative flex justify-center"
        >
          {/* GLOW */}

          <div
            className="
              absolute

              h-[420px]
              w-[420px]

              rounded-full

              bg-[#16a34a]/20

              blur-3xl
            "
          />

          {/* FARMER IMAGE */}

          <Image
            src="/dummy/farmer.png"
            alt="farmer"
            width={430}
            height={430}
            className="
              relative
              z-10

              object-contain

              drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)]
            "
          />

          {/* WEATHER CARD */}

          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="
              absolute
              right-0
              top-10
              z-20

              w-[250px]

              rounded-[28px]

              border
              border-white/40
              dark:border-slate-700/40

              bg-white/80
              dark:bg-slate-800/80

              p-5

              shadow-2xl

              backdrop-blur-2xl
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  className="
                    text-sm
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Najafgarh, Delhi
                </p>

                <h3
                  className="
                    mt-2

                    text-4xl
                    font-bold

                    text-slate-900
                    dark:text-white
                  "
                >
                  32°
                </h3>
              </div>

              <div className="text-5xl">
                ☀️
              </div>
            </div>

            {/* WEATHER STATS */}

            <div
              className="
                mt-5

                grid
                grid-cols-2
                gap-4

                text-sm
              "
            >
              <div>
                <p className="text-slate-400">
                  Humidity
                </p>

                <h4
                  className="
                    mt-1
                    font-bold

                    text-slate-800
                    dark:text-slate-200
                  "
                >
                  48%
                </h4>
              </div>

              <div>
                <p className="text-slate-400">
                  Wind
                </p>

                <h4
                  className="
                    mt-1
                    font-bold

                    text-slate-800
                    dark:text-slate-200
                  "
                >
                  12 km/h
                </h4>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}