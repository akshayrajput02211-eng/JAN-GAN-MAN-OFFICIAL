"use client";

import Link from "next/link";

import { useState } from "react";

import {
  Bell,
  ChevronDown,
  Menu,
  Settings,
} from "lucide-react";

import Image from "next/image";

import { motion } from "framer-motion";

import ServiceSidebar from "@/components/cta/service-sidebar/ServiceSidebar";

const navItems = [
  "Mera Khet",
  "Fasal Prabandhan",
  "Mandi Bazaar",
  "Krishi Salah",
  "Schemes",
];

export default function Navbar() {
  const [serviceOpen, setServiceOpen] =
    useState(false);

  return (
    <>
      <motion.header
        initial={{
          y: -60,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        className="
          sticky
          top-0
          z-50

          border-b
          border-white/30 dark:border-slate-700/40

          bg-[#dcfce7]/70 dark:bg-slate-900/80

          backdrop-blur-2xl
        "
      >
        <div
          className="
            mx-auto

            flex
            max-w-7xl
            items-center
            justify-between

            px-4
            py-4

            md:px-6
            lg:px-8
          "
        >
          {/* ================= LOGO ================= */}

          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-12
                w-12

                items-center
                justify-center

                rounded-2xl

                bg-gradient-to-br
                from-[#16a34a]
                to-[#065f46]

                shadow-lg
                shadow-green-500/20
              "
            >
              <span
                className="
                  text-xl
                  font-bold
                  text-white
                "
              >
                K
              </span>
            </div>

            <div>
              <h1
                className="
                  text-xl
                  font-bold
                  text-slate-900 dark:text-white
                "
              >
                Krishi
              </h1>

              <p
                className="
                  text-xs
                  text-slate-500 dark:text-slate-400
                "
              >
                Apni Kheti, Apna Vikas
              </p>
            </div>
          </div>

          {/* ================= NAV ================= */}

          <nav
            className="
              hidden
              lg:flex

              items-center
              gap-8
            "
          >
            {navItems.map((item, index) => (
              <Link
                key={index}
                href="#"
                className="
                  relative

                  text-sm
                  font-medium
                  text-slate-700 dark:text-slate-200

                  transition-all
                  duration-300

                  hover:text-[#16a34a]

                  after:absolute
                  after:left-0
                  after:-bottom-2

                  after:h-[2px]
                  after:w-0

                  after:bg-[#16a34a]

                  after:transition-all

                  hover:after:w-full
                "
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* ================= RIGHT ================= */}

          <div className="flex items-center gap-4">
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

                h-11

                rounded-2xl

                px-5

                bg-gradient-to-br
                from-[#16a34a]
                to-[#065f46]

                text-white

                shadow-[0_10px_30px_rgba(22,163,74,0.30)]

                transition-all
                duration-300
              "
            >
              <Settings className="h-4 w-4" />

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

            <button
              className="
                relative

                flex
                h-11
                w-11

                items-center
                justify-center

                rounded-2xl

                border
                border-white/40 dark:border-slate-700/40

                bg-white/70 dark:bg-slate-900/80

                backdrop-blur-xl

                transition-all
                duration-300

                hover:scale-105
                hover:shadow-xl
                hover:shadow-green-500/10
              "
            >
              <Bell className="h-5 w-5 text-slate-700 dark:text-slate-200" />

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
            </button>

            {/* PROFILE */}

            <div
              className="
                hidden
                md:flex

                items-center
                gap-3

                rounded-2xl

                border
                border-white/40 dark:border-slate-700/40

                bg-white/70 dark:bg-slate-900/80

                px-3
                py-2

                backdrop-blur-xl
              "
            >
              <Image
                src="/dummy/farmer.png"
                alt="farmer"
                width={42}
                height={42}
                className="
                  rounded-full
                  object-cover
                "
              />

              <div>
                <h4
                  className="
                    text-sm
                    font-semibold
                    text-slate-800 dark:text-white
                  "
                >
                  Akshay kumar
                </h4>

                <p
                  className="
                    text-xs
                    text-[#16a34a]
                  "
                >
                  Verified Farmer
                </p>
              </div>

              <ChevronDown
                className="
                  h-4
                  w-4
                  text-slate-500 dark:text-slate-400
                "
              />
            </div>

            {/* MOBILE BUTTON */}

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

                border
                border-white/40 dark:border-slate-700/40

                bg-white/70 dark:bg-slate-900/80

                lg:hidden
              "
            >
              <Menu className="h-5 w-5 text-slate-700 dark:text-white" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ================= SERVICE SIDEBAR ================= */}

      <ServiceSidebar
        open={serviceOpen}
        setOpen={setServiceOpen}
      />
    </>
  );
}