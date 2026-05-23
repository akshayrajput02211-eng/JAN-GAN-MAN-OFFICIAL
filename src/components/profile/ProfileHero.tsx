"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Bell,
  ChevronLeft,
  Pencil,
  Settings,
} from "lucide-react";

import { motion } from "framer-motion";

import bg from "@/assets/profile/village-bg.png";
import avatar from "@/assets/profile/avatar.png";

import ServiceSidebar from "@/components/cta/service-sidebar/ServiceSidebar";

export default function ProfileHero() {
  const [serviceOpen, setServiceOpen] =
    useState(false);

  const router = useRouter();

  return (
    <>
      <section className="relative pt-6">
        {/* ================= TOPBAR ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            flex
            items-center
            justify-between
          "
        >
          {/* LEFT */}

          <div className="flex items-center gap-3">
            {/* BACK BUTTON */}

            <motion.button
              whileHover={{
                scale: 1.08,
                x: -3,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => router.back()}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center

                rounded-2xl

                bg-white/70
                dark:bg-slate-800/80

                shadow-md

                backdrop-blur-xl

                transition-all
                duration-300

                hover:bg-white
                dark:hover:bg-slate-700/80
              "
            >
              <ChevronLeft className="h-5 w-5 text-[#10224f] dark:text-white" />
            </motion.button>

            {/* MOBILE SERVICES */}

            <button
              onClick={() =>
                setServiceOpen(true)
              }
              className="
                flex
                md:hidden

                h-11
                w-11

                items-center
                justify-center

                rounded-2xl

                bg-white/70
                dark:bg-slate-800/80

                shadow-md

                backdrop-blur-xl

                transition-all
                duration-300

                hover:bg-white
                dark:hover:bg-slate-700/80
              "
            >
              <Settings className="h-5 w-5 text-[#10224f] dark:text-white" />
            </button>

            {/* LOGO */}

            <div>
              <span
                className="
                  text-lg
                  font-black
                  text-[#183153]
                  dark:text-white

                  md:text-2xl
                "
              >
                Jan Gan Man
              </span>
            </div>
          </div>

          {/* RIGHT */}

          <div className="flex items-center gap-3">
            {/* BELL */}

            <motion.div
              whileHover={{
                rotate: 10,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                relative

                flex
                h-11
                w-11
                items-center
                justify-center

                rounded-2xl

                bg-white/70
                dark:bg-slate-800/80

                shadow-md

                backdrop-blur-xl

                transition-all
                duration-300

                hover:bg-white
                dark:hover:bg-slate-700/80
              "
            >
              {/* DOT */}

              <span
                className="
                  absolute
                  right-2
                  top-2

                  h-2.5
                  w-2.5

                  rounded-full

                  bg-red-500
                "
              />

              <Bell className="h-5 w-5 text-[#10224f] dark:text-white" />
            </motion.div>

            {/* SERVICES BUTTON */}

            <motion.button
              whileHover={{
                y: -2,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() =>
                setServiceOpen(true)
              }
              className="
                hidden
                md:flex

                items-center
                gap-2

                h-11

                rounded-2xl

                px-5

                bg-gradient-to-r
                from-[#3558ff]
                to-[#5b7cff]

                text-white

                shadow-[0_10px_30px_rgba(53,88,255,0.25)]

                transition-all
                duration-300
              "
            >
              <Settings className="h-4 w-4" />

              <span
                className="
                  text-sm
                  font-bold
                "
              >
                Services
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* ================= HERO ================= */}

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
          className="
            relative
            mt-10

            overflow-hidden

            rounded-[42px]

            border
            border-white/40
            dark:border-slate-700/30

            bg-gradient-to-br
            from-white
            via-[#f8fbff]
            to-[#eef6ff]

            dark:from-slate-800
            dark:via-slate-800
            dark:to-slate-900

            px-6
            py-10

            shadow-[0_25px_80px_rgba(0,0,0,0.06)]

            md:px-12
            md:py-16
          "
        >
          {/* BG GLOW */}

          <div
            className="
              absolute
              inset-0

              bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_60%)]

              dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]

              pointer-events-none
            "
          />

          {/* TEXT */}

          <div className="relative z-20 max-w-xl">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="
                text-4xl
                font-black
                tracking-tight
                text-[#10224f]
                dark:text-white

                md:text-7xl
              "
            >
              Mera Profile
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              className="
                mt-3

                text-lg
                text-[#6f7d95]
                dark:text-slate-400

                md:text-2xl
              "
            >
              Apni jankari aur suvidhayein
            </motion.p>

            {/* LINE */}

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: 90,
              }}
              transition={{
                delay: 0.4,
                duration: 0.5,
              }}
              className="
                mt-5
                h-1.5

                rounded-full

                bg-gradient-to-r
                from-green-500
                to-lime-400
              "
            />
          </div>

          {/* BG IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 1.1,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="
              absolute
              right-0
              top-0

              h-full
              w-[82%]
            "
          >
            <Image
              src={bg}
              alt="Village"
              fill
              priority
              className="
                object-cover
                object-right-bottom
              "
            />
          </motion.div>

          {/* ================= PROFILE CARD ================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
            whileHover={{
              y: -3,
            }}
            className="
              relative
              z-30

              mt-14

              rounded-[36px]

              border
              border-white/60
              dark:border-slate-700/50

              bg-white/80
              dark:bg-slate-800/85

              p-5

              shadow-[0_20px_60px_rgba(0,0,0,0.08)]

              backdrop-blur-2xl

              md:flex
              md:items-center
              md:justify-between
              md:p-8
            "
          >
            {/* LEFT */}

            <div className="flex items-center gap-5">
              {/* AVATAR */}

              <motion.div
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                }}
                className="
                  relative

                  h-24
                  w-24

                  overflow-hidden

                  rounded-full

                  border-[5px]
                  border-white
                  dark:border-slate-700

                  shadow-[0_10px_30px_rgba(0,0,0,0.12)]

                  md:h-32
                  md:w-32
                "
              >
                <div
                  className="
                    absolute
                    inset-0

                    z-10

                    bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.5),transparent_60%)]
                  "
                />

                <Image
                  src={avatar}
                  alt="avatar"
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* INFO */}

              <div>
                <motion.h2
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.5,
                  }}
                  className="
                    text-2xl
                    font-black
                    tracking-tight
                    text-[#10224f]
                    dark:text-white

                    md:text-4xl
                  "
                >
                  Akshay Kumar
                </motion.h2>

                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.6,
                  }}
                  className="
                    mt-2

                    text-lg
                    font-semibold
                    text-[#43506b]
                    dark:text-slate-300

                    md:text-2xl
                  "
                >
                  +91 9693697966
                </motion.p>

                <motion.span
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.7,
                  }}
                  className="
                    mt-1
                    block

                    text-[#7b879d]
                    dark:text-slate-400
                  "
                >
                  Laxminagar, Delhi
                </motion.span>
              </div>
            </div>

            {/* BUTTON */}

            <Link href="/profile/edit">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  mt-6

                  flex
                  h-14
                  items-center
                  gap-2

                  rounded-full

                  border
                  border-[#dce3ff]
                  dark:border-slate-700/50

                  bg-gradient-to-r
                  from-[#f4f7ff]
                  to-[#eef2ff]

                  dark:from-slate-700
                  dark:to-slate-800

                  px-7

                  font-bold
                  text-[#3558ff]
                  dark:text-white

                  shadow-[0_10px_25px_rgba(53,88,255,0.12)]

                  transition-all
                  duration-300

                  md:mt-0
                "
              >
                <Pencil size={18} />

                Edit Profile
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= SERVICE SIDEBAR ================= */}

      <ServiceSidebar
        open={serviceOpen}
        setOpen={setServiceOpen}
      />
    </>
  );
}