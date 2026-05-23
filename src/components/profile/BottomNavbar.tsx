"use client";

import Link from "next/link";

import {
  Briefcase,
  HeartHandshake,
  Home,
  MessageCircle,
  Mic,
  Store,
  User,
} from "lucide-react";

import { motion } from "framer-motion";

export default function BottomNavbar() {
  return (
    <div
      className="
        fixed
        bottom-3
        left-1/2
        z-50

        w-full

        -translate-x-1/2

        flex
        justify-center

        px-2
        sm:px-4
      "
    >
      <motion.nav
        initial={{
          y: 120,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          relative

          flex
          items-center
          justify-center

          h-[82px]
          sm:h-[92px]
          md:h-[100px]

          w-full
          max-w-6xl

          rounded-[28px]
          sm:rounded-[34px]
          md:rounded-[38px]

          border
          border-white/40

          bg-white/85

          backdrop-blur-3xl

          shadow-[0_20px_60px_rgba(0,0,0,0.12)]

          overflow-visible
        "
      >
        {/* PREMIUM LIGHT */}

        <div
          className="
            absolute
            inset-0

            rounded-[28px]
            sm:rounded-[34px]
            md:rounded-[38px]

            bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_65%)]

            pointer-events-none
          "
        />

        {/* ================= LEFT SIDE ================= */}

        <div
          className="
            absolute

            left-4
            sm:left-6
            md:left-10

            flex
            items-center

            gap-4
            sm:gap-8
            md:gap-14
          "
        >
          {/* HOME */}

          <Link href="/">
            <motion.div
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                group

                flex
                flex-col
                items-center

                gap-1
                sm:gap-2

                text-[#7a859f]
              "
            >
              <div
                className="
                  flex

                  h-11
                  w-11

                  sm:h-12
                  sm:w-12

                  md:h-14
                  md:w-14

                  items-center
                  justify-center

                  rounded-xl
                  sm:rounded-2xl

                  bg-white/70

                  shadow-lg
                "
              >
                <Home className="h-5 w-5 md:h-6 md:w-6" />
              </div>

              <span
                className="
                  text-[10px]
                  sm:text-xs

                  font-semibold
                "
              >
                Home
              </span>
            </motion.div>
          </Link>

          {/* NAUKRI */}

          <Link href="/naukri">
            <motion.div
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                group

                flex
                flex-col
                items-center

                gap-1
                sm:gap-2

                text-[#7a859f]
              "
            >
              <div
                className="
                  flex

                  h-11
                  w-11

                  sm:h-12
                  sm:w-12

                  md:h-14
                  md:w-14

                  items-center
                  justify-center

                  rounded-xl
                  sm:rounded-2xl

                  bg-white/70

                  shadow-lg
                "
              >
                <Briefcase className="h-5 w-5 md:h-6 md:w-6" />
              </div>

              <span
                className="
                  text-[10px]
                  sm:text-xs

                  font-semibold
                "
              >
                Naukri
              </span>
            </motion.div>
          </Link>

          {/* SUPPORT */}

          <Link href="/support">
            <motion.div
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                hidden
                lg:flex

                group

                flex-col
                items-center

                gap-2

                text-[#7a859f]
              "
            >
              <div
                className="
                  relative

                  flex
                  h-14
                  w-14

                  items-center
                  justify-center

                  rounded-2xl

                  bg-white/70

                  shadow-lg
                "
              >
                <HeartHandshake className="h-6 w-6" />

                <span
                  className="
                    absolute
                    -right-1
                    -top-1

                    flex
                    h-5
                    w-5

                    items-center
                    justify-center

                    rounded-full

                    bg-red-500

                    text-[10px]
                    font-bold
                    text-white
                  "
                >
                  2
                </span>
              </div>

              <span className="text-xs font-semibold">
                Support
              </span>
            </motion.div>
          </Link>
        </div>

        {/* ================= MIC BUTTON ================= */}

        {/* ================= SIMPLE CENTER MIC ================= */}

<motion.button
 
 
  className="
    absolute
    left-1/2
    top-0

    z-50

    flex

    h-16
    w-16

    sm:h-20
    sm:w-20

    md:h-24
    md:w-24

    -translate-x-1/2
    -translate-y-1/2

    items-center
    justify-center

    rounded-full

    border-[5px]
    border-white

    bg-[#22c55e]

    shadow-[0_15px_40px_rgba(34,197,94,0.35)]

    transition-all
    duration-300
  "
>
  {/* INNER LIGHT */}

  <div
    className="
      absolute
      inset-0

      rounded-full

      bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_65%)]
    "
  />

  {/* ICON */}

  <Mic
    className="
      relative
      z-10

      h-7
      w-7

      sm:h-8
      sm:w-8

      md:h-10
      md:w-10

      text-white
    "
  />

          {/* GLOW */}

          <div
            className="
              absolute
              inset-0

              rounded-full

              bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_60%)]
            "
          />

          {/* PULSE */}

          <div
            className="
              absolute

              h-full
              w-full

              animate-ping

              rounded-full

              bg-green-400/20
            "
          />

        </motion.button>

        {/* ================= RIGHT SIDE ================= */}

        <div
          className="
            absolute

            right-4
            sm:right-6
            md:right-10

            flex
            items-center

            gap-4
            sm:gap-8
            md:gap-14
          "
        >
          {/* DUKAAN */}

          <Link href="/dukaan">
            <motion.div
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                group

                flex
                flex-col
                items-center

                gap-1
                sm:gap-2

                text-[#7a859f]
              "
            >
              <div
                className="
                  flex

                  h-11
                  w-11

                  sm:h-12
                  sm:w-12

                  md:h-14
                  md:w-14

                  items-center
                  justify-center

                  rounded-xl
                  sm:rounded-2xl

                  bg-white/70

                  shadow-lg
                "
              >
                <Store className="h-5 w-5 md:h-6 md:w-6" />
              </div>

              <span
                className="
                  text-[10px]
                  sm:text-xs

                  font-semibold
                "
              >
                Dukaan
              </span>
            </motion.div>
          </Link>

          {/* CHAT */}

          <Link href="/chat">
            <motion.div
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                hidden
                lg:flex

                group

                flex-col
                items-center

                gap-2

                text-[#7a859f]
              "
            >
              <div
                className="
                  relative

                  flex
                  h-14
                  w-14

                  items-center
                  justify-center

                  rounded-2xl

                  bg-white/70

                  shadow-lg
                "
              >
                <MessageCircle className="h-6 w-6" />

                <span
                  className="
                    absolute
                    -right-1
                    -top-1

                    h-3
                    w-3

                    rounded-full

                    bg-green-500
                  "
                />
              </div>

              <span className="text-xs font-semibold">
                Chat
              </span>
            </motion.div>
          </Link>

          {/* PROFILE */}

          <Link href="/profile">
            <motion.div
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                group

                flex
                flex-col
                items-center

                gap-1
                sm:gap-2

                text-[#5b3df5]
              "
            >
              <div
                className="
                  relative

                  flex

                  h-11
                  w-11

                  sm:h-12
                  sm:w-12

                  md:h-14
                  md:w-14

                  items-center
                  justify-center

                  rounded-xl
                  sm:rounded-2xl

                  bg-gradient-to-br
                  from-[#ede9ff]
                  to-[#f5f3ff]

                  shadow-[0_10px_30px_rgba(91,61,245,0.18)]
                "
              >
                <User className="h-5 w-5 md:h-6 md:w-6" />

                <div
                  className="
                    absolute
                    -right-1
                    -top-1

                    flex
                    h-4
                    w-4

                    sm:h-5
                    sm:w-5

                    items-center
                    justify-center

                    rounded-full

                    bg-[#5b3df5]

                    text-[9px]
                    sm:text-[10px]

                    font-bold
                    text-white
                  "
                >
                  1
                </div>
              </div>

              <span
                className="
                  text-[10px]
                  sm:text-xs

                  font-bold
                "
              >
                Profile
              </span>
            </motion.div>
          </Link>
        </div>
      </motion.nav>
    </div>
  );
}