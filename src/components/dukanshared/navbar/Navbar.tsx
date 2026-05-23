"use client";

import Image from "next/image";
import { useState } from "react";

import Container from "../container/Container";

import {
  Bell,
  MapPin,
  Search,
  Settings,
  Menu,
} from "lucide-react";

import ServiceSidebar from "@/components/cta/service-sidebar/ServiceSidebar";

export default function Navbar() {
  const [serviceOpen, setServiceOpen] =
    useState(false);

  return (
    <>
      <header
        className="
          sticky
          top-0
          z-50

          border-b
          border-white/40
          dark:border-slate-700/40

          bg-white/70
          dark:bg-slate-900/80

          backdrop-blur-xl
        "
      >
        <Container>
          <div
            className="
              flex
              h-20
              items-center
              justify-between
              gap-6
            "
          >
            {/* ================= LEFT ================= */}

            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center

                  rounded-2xl

                  bg-orange-100
                  dark:bg-orange-950/40

                  shadow-md
                "
              >
                🏪
              </div>

              <div>
                <h2
                  className="
                    text-2xl
                    font-black
                    text-orange-700
                    dark:text-orange-400
                  "
                >
                  Dukaan
                </h2>

                <p
                  className="
                    text-sm
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Apne gaon ki apni dukaan
                </p>
              </div>
            </div>

            {/* ================= SEARCH ================= */}

            <div
              className="
                hidden
                lg:flex

                w-[500px]

                items-center
                gap-3

                rounded-full

                border
                border-orange-100
                dark:border-slate-700/50

                bg-white
                dark:bg-slate-800

                px-5
                py-3

                shadow-sm
              "
            >
              <Search
                className="
                  h-5
                  w-5
                  text-slate-400
                "
              />

              <input
                placeholder="Search for milk, bread, kirana..."
                className="
                  w-full
                  bg-transparent
                  text-slate-700
                  dark:text-slate-200
                  placeholder:text-slate-400
                  outline-none
                "
              />
            </div>

            {/* ================= RIGHT ================= */}

            <div className="flex items-center gap-5">
              {/* LOCATION */}

              <div
                className="
                  hidden
                  md:flex

                  items-center
                  gap-2

                  text-slate-700
                  dark:text-slate-300
                "
              >
                <MapPin
                  className="
                    h-4
                    w-4
                    text-orange-600
                    dark:text-orange-400
                  "
                />

                Delhi
              </div>

              {/* SERVICES BUTTON */}

              <button
                onClick={() =>
                  setServiceOpen(true)
                }
                className="
                  hidden
                  md:flex

                  h-11
                  items-center
                  gap-2

                  rounded-2xl

                  border
                  border-orange-100
                  dark:border-slate-700/50

                  bg-white
                  dark:bg-slate-800

                  px-4

                  shadow-sm

                  transition-all
                  duration-300

                  hover:scale-105
                "
              >
                <Settings
                  size={18}
                  className="text-orange-600 dark:text-orange-400"
                />

                <span
                  className="
                    text-sm
                    font-semibold
                    text-slate-700
                    dark:text-slate-200
                  "
                >
                  Services
                </span>
              </button>

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
                  border-orange-100
                  dark:border-slate-700/50

                  bg-white
                  dark:bg-slate-800

                  shadow-sm
                "
              >
                <Menu
                  size={20}
                  className="text-slate-700 dark:text-slate-200"
                />
              </button>

              {/* NOTIFICATION */}

              <button className="relative">
                <Bell
                  className="
                    h-6
                    w-6
                    text-slate-700
                    dark:text-slate-200
                  "
                />

                <span
                  className="
                    absolute
                    -right-1
                    -top-1

                    flex
                    h-4
                    w-4
                    items-center
                    justify-center

                    rounded-full

                    bg-orange-600

                    text-[10px]
                    text-white
                  "
                >
                  3
                </span>
              </button>

              {/* PROFILE */}

              <div
                className="
                  h-12
                  w-12

                  rounded-full

                  bg-gradient-to-br
                  from-orange-400
                  to-orange-700

                  shadow-md
                "
              />
            </div>
          </div>
        </Container>
      </header>

      {/* ================= SERVICE SIDEBAR ================= */}

      <ServiceSidebar
        open={serviceOpen}
        setOpen={setServiceOpen}
      />
    </>
  );
}