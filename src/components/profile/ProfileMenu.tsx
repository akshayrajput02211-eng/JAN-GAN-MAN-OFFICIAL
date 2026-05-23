"use client";

import Link from "next/link";

import {
  ChevronRight,
} from "lucide-react";

import {
  motion,
} from "framer-motion";

import { profileMenus } from "./profile.data";

export default function ProfileMenu() {
  return (
    <section
      className="
        mt-8

        overflow-hidden

        rounded-[36px]

        border
        border-white/40
        dark:border-slate-700/50

        bg-white/80
        dark:bg-slate-800/80

        backdrop-blur-2xl

        shadow-[0_20px_60px_rgba(0,0,0,0.06)]
      "
    >
      {profileMenus.map((item, i) => {
        const Icon = item.icon;

        return (
          <Link
            key={i}
            href={item.href || "#"}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: i * 0.05,
                duration: 0.4,
              }}
              whileHover={{
                scale: 1.01,
                backgroundColor:
                  "rgba(248,250,255,0.95)",
              }}
              whileTap={{
                scale: 0.99,
              }}
              className="
                group
                relative

                flex
                items-center
                justify-between

                border-b
                border-[#edf1f7]
                dark:border-slate-700/50

                px-4
                py-5

                transition-all
                duration-300

                md:px-7
              "
            >
              {/* LEFT SIDE */}

              <div className="flex items-center gap-4">
                {/* ICON BOX */}

                <motion.div
                  whileHover={{
                    rotate: 6,
                    scale: 1.08,
                  }}
                  className="
                    relative

                    flex
                    h-14
                    w-14
                    items-center
                    justify-center

                    rounded-2xl

                    bg-gradient-to-br
                    from-[#f4f7ff]
                    to-[#eef2ff]

                    dark:from-slate-700
                    dark:to-slate-600

                    shadow-[0_10px_25px_rgba(53,88,255,0.08)]

                    overflow-hidden
                  "
                >
                  {/* GLOW */}

                  <div
                    className="
                      absolute
                      inset-0

                      bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.7),transparent_60%)]
                    "
                  />

                  <Icon className="relative z-10 h-6 w-6 text-[#3558ff]" />
                </motion.div>

                {/* TEXT */}

                <div>
                  <h4
                    className="
                      text-lg
                      font-black
                      text-[#10224f]
                      dark:text-white

                      transition-all
                      duration-300

                      group-hover:text-[#3558ff]

                      md:text-xl
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      mt-1

                      text-sm
                      text-[#7b879d]
                      dark:text-slate-400

                      md:text-base
                    "
                  >
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* RIGHT ARROW */}

              <motion.div
                whileHover={{
                  x: 5,
                }}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  rounded-full

                  bg-[#f8faff]
                  dark:bg-slate-700

                  shadow-sm

                  transition-all
                  duration-300

                  group-hover:bg-[#3558ff]
                "
              >
                <ChevronRight
                  className="
                    h-5
                    w-5

                    text-[#7b879d]
                    dark:text-slate-400

                    transition-all
                    duration-300

                    group-hover:text-white
                  "
                />
              </motion.div>

              {/* HOVER LINE */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0

                  h-[3px]
                  w-0

                  rounded-full

                  bg-gradient-to-r
                  from-[#3558ff]
                  to-[#6c63ff]

                  transition-all
                  duration-500

                  group-hover:w-full
                "
              />
            </motion.div>
          </Link>
        );
      })}
    </section>
  );
}