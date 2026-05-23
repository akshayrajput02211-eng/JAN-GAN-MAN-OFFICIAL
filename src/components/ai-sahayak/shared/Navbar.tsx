"use client";

import Link from "next/link";

import Image from "next/image";

import {
  Bell,
  Bot,
  ChevronDown,
  Menu,
  Mic,
  Search,
  Sparkles,
  User,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header
      className="
        fixed
        top-3
        left-1/2
        z-50

        w-full

        -translate-x-1/2

        px-2
        sm:px-4
        lg:px-6
      "
    >
      <motion.div
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
        }}
        className="
          relative

          mx-auto

          flex
          h-[72px]
          lg:h-[86px]

          max-w-7xl

          items-center
          justify-between

          overflow-hidden

          rounded-[28px]
          lg:rounded-[34px]

          border
          border-white/30

          bg-white/75

          px-4
          sm:px-6
          lg:px-8

          backdrop-blur-3xl

          shadow-[0_15px_50px_rgba(0,0,0,0.08)]
        "
      >
        {/* PREMIUM LIGHT */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_65%)]

            pointer-events-none
          "
        />

        {/* ================= LEFT ================= */}

        <div className="relative z-10 flex items-center gap-3 lg:gap-5">
          {/* MOBILE MENU */}

          <button
            className="
              flex
              h-11
              w-11

              items-center
              justify-center

              rounded-2xl

              bg-white/70

              shadow-md

              lg:hidden
            "
          >
            <Menu className="h-5 w-5 text-[#1e1b4b]" />
          </button>

          {/* LOGO */}

          <Link
            href="/"
            className="
              flex
              items-center
              gap-3
            "
          >
            {/* ICON */}

            <div
              className="
                relative

                flex
                h-11
                w-11

                items-center
                justify-center

                rounded-2xl

                bg-gradient-to-br
                from-[#7c3aed]
                via-[#8b5cf6]
                to-[#6366f1]

                shadow-[0_10px_30px_rgba(124,58,237,0.35)]

                overflow-hidden
              "
            >
              {/* GLOW */}

              <div
                className="
                  absolute
                  inset-0

                  bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.5),transparent_70%)]
                "
              />

              <Bot className="relative z-10 h-5 w-5 text-white" />
            </div>

            {/* TEXT */}

            <div className="hidden sm:block">
              <h2
                className="
                  text-lg
                  font-black

                  tracking-tight

                  text-[#1e1b4b]
                "
              >
                AI Sahayak
              </h2>

              <p
                className="
                  text-xs

                  text-[#7b879d]
                "
              >
                Smart Rural Assistant
              </p>
            </div>
          </Link>
        </div>

        {/* ================= SEARCH ================= */}

        <div
          className="
            relative
            z-10

            hidden
            md:flex

            h-14
            w-full
            max-w-xl

            items-center

            overflow-hidden

            rounded-2xl

            border
            border-[#ecebff]

            bg-white/70

            px-4

            shadow-inner
          "
        >
          {/* SEARCH ICON */}

          <Search className="h-5 w-5 text-[#8b5cf6]" />

          <input
            type="text"
            placeholder="Ask AI anything..."
            className="
              h-full
              w-full

              bg-transparent

              px-3

              text-sm
              font-medium

              text-[#1e1b4b]

              outline-none

              placeholder:text-[#9ca3af]
            "
          />

          {/* AI TAG */}

          <div
            className="
              flex
              items-center
              gap-1

              rounded-full

              bg-[#f3f0ff]

              px-3
              py-1
            "
          >
            <Sparkles className="h-3.5 w-3.5 text-[#7c3aed]" />

            <span
              className="
                text-[10px]
                font-bold

                text-[#7c3aed]
              "
            >
              AI
            </span>
          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <div
          className="
            relative
            z-10

            flex
            items-center

            gap-3
            lg:gap-4
          "
        >
          {/* MIC BUTTON */}

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.92,
            }}
            className="
              hidden
              sm:flex

              relative

              h-12
              w-12

              items-center
              justify-center

              rounded-2xl

              bg-gradient-to-br
              from-[#7c3aed]
              to-[#6366f1]

              shadow-[0_10px_30px_rgba(124,58,237,0.25)]
            "
          >
            {/* GLOW */}

            <div
              className="
                absolute
                inset-0

                rounded-2xl

                bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_70%)]
              "
            />

            <Mic className="relative z-10 h-5 w-5 text-white" />
          </motion.button>

          {/* NOTIFICATION */}

          <motion.button
            whileHover={{
              y: -2,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              relative

              hidden
              sm:flex

              h-12
              w-12

              items-center
              justify-center

              rounded-2xl

              bg-white/70

              shadow-md
            "
          >
            <Bell className="h-5 w-5 text-[#1e1b4b]" />

            {/* DOT */}

            <span
              className="
                absolute
                right-3
                top-3

                h-2.5
                w-2.5

                rounded-full

                bg-[#7c3aed]
              "
            />
          </motion.button>

          {/* PROFILE */}

          <Link href="/profile">
            <motion.div
              whileHover={{
                y: -2,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="
                group

                relative

                flex
                items-center

                gap-2
                lg:gap-3

                overflow-hidden

                rounded-2xl

                border
                border-white/40

                bg-white/80

                px-3
                py-2

                lg:px-5
                lg:py-3

                backdrop-blur-xl

                shadow-[0_10px_30px_rgba(0,0,0,0.08)]

                transition-all
                duration-300
              "
            >
              {/* LIGHT */}

              <div
                className="
                  absolute
                  inset-0

                  bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_60%)]

                  pointer-events-none
                "
              />

              {/* AVATAR */}

              <div
                className="
                  relative
                  z-10

                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-full

                  bg-gradient-to-br
                  from-[#7c3aed]
                  to-[#6366f1]

                  text-sm
                  font-black
                  text-white

                  shadow-lg
                "
              >
                AK
              </div>

              {/* TEXT */}

              <div className="relative z-10 hidden sm:block">
                <p
                  className="
                    text-sm
                    font-bold

                    text-[#1e1b4b]
                  "
                >
                  AI Profile
                </p>

                <span
                  className="
                    text-xs

                    text-[#7b879d]
                  "
                >
                  Open dashboard
                </span>
              </div>

              {/* DROPDOWN */}

              <ChevronDown
                className="
                  relative
                  z-10

                  hidden
                  lg:block

                  h-4
                  w-4

                  text-[#7b879d]
                "
              />
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </header>
  );
}