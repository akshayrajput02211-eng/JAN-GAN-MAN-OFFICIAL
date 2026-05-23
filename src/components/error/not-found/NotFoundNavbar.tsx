"use client";

import Link from "next/link";

import { useState } from "react";

import {
  Home,
  Search,
  Settings,
  Menu,
} from "lucide-react";

import { motion } from "framer-motion";

import ServiceSidebar from "@/components/cta/service-sidebar/ServiceSidebar";

export default function NotFoundNavbar() {
  const [serviceOpen, setServiceOpen] =
    useState(false);

  return (
    <>
      <header
        className="
          fixed
          top-4
          left-1/2
          z-50

          w-full
          max-w-7xl

          -translate-x-1/2

          px-3
          sm:px-5
        "
      >
        <motion.div
        //   initial={{
        //     y: -30,
        //     opacity: 0,
        //   }}
        //   animate={{
        //     y: 0,
        //     opacity: 1,
        //   }}
        //   transition={{
        //     duration: 0.5,
        //   }}
          className="
            relative

            flex
            h-[90px]
            items-center
            justify-between

            overflow-hidden

            rounded-[28px]

            border
            border-white/30

            bg-white/30

            px-4
            sm:px-6

            backdrop-blur-3xl

            shadow-[0_15px_50px_rgba(0,0,0,0.10)]
          "
        >
          {/* LIGHT */}

          <div
            className="
              absolute
              inset-0

              bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_70%)]

              pointer-events-none
            "
          />

          {/* LEFT */}

          <Link
            href="/"
            className="
              relative
              z-10

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
                from-[#63d313]
                to-[#3f9e00]

                text-white

                shadow-lg
              "
            >
              <Home className="h-5 w-5" />
            </div>

            <div className="hidden sm:block">
              <h2
                className="
                  text-lg
                  font-black

                  text-[#173400]
                "
              >
                JAN GAN MAN
              </h2>

              <p
                className="
                  text-xs

                  text-[#47612f]
                "
              >
                Smart India Platform
              </p>
            </div>
          </Link>

          {/* SEARCH */}

          <div
            className="
              hidden
              md:flex

              relative
              z-10

              h-12
              w-full
              max-w-md

              items-center

              rounded-2xl

              border
              border-white/40

              bg-white/50

              px-4

              backdrop-blur-xl
            "
          >
            <Search className="h-4 w-4 text-[#47612f]" />

            <input
              placeholder="Search services..."
              className="
                h-full
                w-full

                bg-transparent

                px-3

                text-sm
                font-medium

                outline-none

                placeholder:text-[#6b7280]
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
                md:flex

                items-center
                gap-2

                h-12

                rounded-2xl

                px-5

                bg-gradient-to-br
                from-[#63d313]
                to-[#3f9e00]

                text-white

                shadow-[0_10px_30px_rgba(67,160,0,0.30)]
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

            {/* MOBILE BUTTON */}

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

                bg-white/60

                shadow-md
              "
            >
              <Menu className="h-5 w-5 text-[#173400]" />
            </button>
          </div>
        </motion.div>
      </header>

      {/* SERVICE SIDEBAR */}

      <ServiceSidebar
        open={serviceOpen}
        setOpen={setServiceOpen}
      />
    </>
  );
}