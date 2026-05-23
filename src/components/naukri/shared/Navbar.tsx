"use client";

import Link from "next/link";

import {
  Bell,
  Briefcase,
  ChevronDown,
  Menu,
  Search,
} from "lucide-react";

import { motion } from "framer-motion";

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NaukriNavbar({
  sidebarOpen,
  setSidebarOpen,
}: Props) {
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

          rounded-[26px]
          lg:rounded-[34px]

          border
          border-white/40
          dark:border-slate-700/40

          bg-white/80
          dark:bg-slate-900/80

          px-4
          sm:px-6
          lg:px-8

          backdrop-blur-3xl

          shadow-[0_15px_50px_rgba(124,58,237,0.12)]
          dark:shadow-[0_15px_50px_rgba(0,0,0,0.45)]
        "
      >
        {/* LIGHT */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_65%)]

            dark:bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.18),transparent_65%)]

            pointer-events-none
          "
        />

        {/* LEFT */}

        <div className="relative z-10 flex items-center gap-3 lg:gap-5">
          {/* MOBILE MENU */}

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
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

              transition-all
              duration-300

              lg:hidden
            "
          >
            <Menu className="h-5 w-5 text-[#10224f] dark:text-white" />
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
            <div
              className="
                flex
                h-11
                w-11

                items-center
                justify-center

                rounded-2xl

                bg-gradient-to-br
                from-[#7c3aed]
                to-[#4c1d95]

                shadow-[0_10px_30px_rgba(124,58,237,0.35)]
              "
            >
              <Briefcase className="h-5 w-5 text-white" />
            </div>

            <div className="hidden sm:block">
              <h2
                className="
                  text-lg
                  font-black

                  text-[#10224f]
                  dark:text-white
                "
              >
                Jan Gan Man
              </h2>

              <p
                className="
                  text-xs

                  text-[#6f7d95]
                  dark:text-slate-400
                "
              >
                Career Opportunities Nearby
              </p>
            </div>
          </Link>
        </div>

        {/* SEARCH */}

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
            border-[#e9ddff]
            dark:border-slate-700/40

            bg-white/70
            dark:bg-slate-800/70

            px-4

            shadow-inner
          "
        >
          <Search className="h-5 w-5 text-[#7a859f] dark:text-slate-400" />

          <input
            type="text"
            placeholder="Search jobs, skills, companies..."
            className="
              h-full
              w-full

              bg-transparent

              px-3

              text-sm
              font-medium

              text-[#10224f]
              dark:text-white

              outline-none

              placeholder:text-[#94a3b8]
              dark:placeholder:text-slate-500
            "
          />
        </div>

        {/* RIGHT */}

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
          {/* SERVICES CTA */}

          <motion.button
            whileHover={{
              y: -2,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.96,
            }}
            onClick={() => setSidebarOpen(!sidebarOpen)}
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
              to-[#4c1d95]

              text-white

              shadow-[0_10px_30px_rgba(124,58,237,0.35)]

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
            "
          >
            <Bell className="h-5 w-5 text-[#10224f] dark:text-white" />

            <span
              className="
                absolute
                right-3
                top-3

                h-2.5
                w-2.5

                rounded-full

                bg-red-500
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
                dark:border-slate-700/40

                bg-white/80
                dark:bg-slate-900/80

                px-3
                py-2

                lg:px-5
                lg:py-3

                backdrop-blur-xl

                shadow-[0_10px_30px_rgba(124,58,237,0.12)]
                dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)]

                transition-all
                duration-300
              "
            >
              <div
                className="
                  absolute
                  inset-0

                  bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_60%)]

                  dark:bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.12),transparent_60%)]

                  pointer-events-none
                "
              />

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
                  to-[#4c1d95]

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

                    text-[#10224f]
                    dark:text-white
                  "
                >
                  My Profile
                </p>

                <span
                  className="
                    text-xs

                    text-[#6f7d95]
                    dark:text-slate-400
                  "
                >
                  View account
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

                  text-[#7a859f]
                  dark:text-slate-400
                "
              />
            </motion.div>
          </Link>
        </div>
      </motion.div>
    </header>
  );
}