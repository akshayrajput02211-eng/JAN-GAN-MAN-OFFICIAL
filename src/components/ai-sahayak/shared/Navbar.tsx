"use client";

import Link from "next/link";

import { useState } from "react";

import {
  Bell,
  Bot,
  ChevronDown,
  Menu,
  Mic,
  Search,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

import ServiceSidebar from "@/components/cta/service-sidebar/ServiceSidebar";

export default function Navbar() {
  const [serviceOpen, setServiceOpen] =
    useState(false);

  return (
    <>
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
            dark:border-white/10

            bg-white/75
            dark:bg-slate-900/80

            px-4
            sm:px-6
            lg:px-8

            backdrop-blur-3xl

            shadow-[0_15px_50px_rgba(0,0,0,0.08)]

            transition-colors
            duration-300
          "
        >
          {/* PREMIUM LIGHT */}

          <div
            className="
              absolute
              inset-0

              bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_65%)]

              dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_65%)]

              pointer-events-none
            "
          />

          {/* ================= LEFT ================= */}

          <div className="relative z-10 flex items-center gap-3 lg:gap-5">
            {/* MOBILE MENU */}

            <button
              onClick={() =>
                setServiceOpen(true)
              }
              className="
                flex
                h-11
                w-11

                items-center
                justify-center

                rounded-2xl

                bg-white/70
                dark:bg-slate-800/70

                shadow-md

                transition-colors
                duration-300

                lg:hidden
              "
            >
              <Menu className="h-5 w-5 text-[#1e1b4b] dark:text-white" />
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
                    dark:text-white
                  "
                >
                  AI Sahayak
                </h2>

                <p
                  className="
                    text-xs

                    text-[#7b879d]
                    dark:text-slate-400
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
              dark:border-slate-700/60

              bg-white/70
              dark:bg-slate-800/70

              px-4

              shadow-inner

              transition-colors
              duration-300
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
                dark:text-slate-100

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
                dark:bg-slate-700

                px-3
                py-1

                transition-colors
                duration-300
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
            {/* SERVICES BUTTON */}

            <motion.button
              whileHover={{
                y: -2,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() =>
                setServiceOpen(true)
              }
              className="
                hidden
                lg:flex

                items-center
                gap-2

                h-12

                rounded-2xl

                px-5

                bg-gradient-to-br
                from-[#7c3aed]
                to-[#6366f1]

                text-white

                shadow-[0_10px_30px_rgba(124,58,237,0.30)]

                transition-all
                duration-300
              "
            >
              <span
                className="
                  text-sm
                  font-bold
                  tracking-wide
                "
              >
                Services
              </span>
            </motion.button>

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
                dark:bg-slate-800/70

                shadow-md

                transition-colors
                duration-300
              "
            >
              <Bell className="h-5 w-5 text-[#1e1b4b] dark:text-white" />

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
                  dark:border-white/10

                  bg-white/80
                  dark:bg-slate-800/80

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

                    dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_60%)]

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

               

                <div className="relative z-10 hidden sm:block">
                  <p
                    className="
                      text-sm
                      font-bold

                      text-[#1e1b4b]
                      dark:text-white
                    "
                  >
                    AI Profile
                  </p>

                  <span
                    className="
                      text-xs

                      text-[#7b879d]
                      dark:text-slate-400
                    "
                  >
                    Open dashboard
                  </span>
                </div>

                

                <ChevronDown
                  className="
                    relative
                    z-10

                    hidden
                    lg:block

                    h-4
                    w-4

                    text-[#7b879d]
                    dark:text-slate-400
                  "
                />
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </header>

      

      <ServiceSidebar
        open={serviceOpen}
        setOpen={setServiceOpen}
      />
    </>
  );
}