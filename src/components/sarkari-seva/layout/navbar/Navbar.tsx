"use client";

import Link from "next/link";
import { useState } from "react";

import {
  Bell,
  Menu,
  Search,
  ChevronDown,
  Settings,
} from "lucide-react";

import ServiceSidebar from "@/components/cta/service-sidebar/ServiceSidebar";

const navItems = [
  "Home",
  "Yojna",
  "Jobs",
  "Banking",
  "Complaints",
  "Resources",
];

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
        border-orange-200/50
        dark:border-slate-700/50
        bg-[#fef3c7]
        dark:bg-slate-950
        shadow-sm
        transition-colors
        duration-300
        "
      >

        <div
          className="
          bg-[#fef3c7]
          dark:bg-slate-950
          "
        >

          <div className="max-w-7xl mx-auto px-4 lg:px-8">

            <div
              className="
              flex
              items-center
              justify-between
              h-20
              "
            >

              {/* ================= LEFT ================= */}

              <div className="flex items-center gap-3">

                <div
                  className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-orange-100
                  dark:bg-orange-500/20
                  flex
                  items-center
                  justify-center
                  text-xl
                  shadow-sm
                  "
                >
                  🇮🇳
                </div>

                <div>

                  <h1
                    className="
                    font-black
                    text-xl
                    sm:text-2xl
                    text-slate-900
                    dark:text-white
                    "
                  >
                    Sarkari Seva
                  </h1>

                  <p
                    className="
                    text-xs
                    sm:text-sm
                    text-slate-500
                    dark:text-slate-400
                    "
                  >
                    Digital Bharat Platform
                  </p>

                </div>

              </div>

              {/* ================= CENTER ================= */}

              <nav
                className="
                hidden
                lg:flex
                items-center
                gap-8
                "
              >

                {navItems.map((item) => (
                  <Link
                    key={item}
                    href="/"
                    className="
                    text-slate-700
                    dark:text-slate-200
                    hover:text-[#d97706]
                    dark:hover:text-orange-400
                    font-semibold
                    transition
                    relative
                    group
                    "
                  >

                    {item}

                    <span
                      className="
                      absolute
                      left-0
                      -bottom-2
                      h-[2px]
                      w-0
                      bg-gradient-to-r
                      from-[#d97706]
                      to-[#f97316]
                      transition-all
                      duration-300
                      group-hover:w-full
                      "
                    />

                  </Link>
                ))}

              </nav>

              {/* ================= RIGHT ================= */}

              <div className="flex items-center gap-3">

                {/* SERVICES BUTTON */}

                <button
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
                  bg-gradient-to-r
                  from-[#d97706]
                  to-[#f97316]
                  text-white
                  shadow-lg
                  shadow-orange-500/20
                  transition-all
                  duration-300
                  hover:scale-105
                  "
                >

                  <Settings size={18} />

                  <span
                    className="
                    text-sm
                    font-bold
                    tracking-wide
                    "
                  >
                    Services
                  </span>

                </button>

                {/* SEARCH */}

                <button
                  className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-white
                  dark:bg-slate-800
                  border
                  border-orange-100
                  dark:border-slate-700
                  flex
                  items-center
                  justify-center
                  text-slate-700
                  dark:text-slate-200
                  hover:text-[#d97706]
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-sm
                  "
                >
                  <Search size={20} />
                </button>

                {/* NOTIFICATION */}

                <button
                  className="
                  relative
                  w-12
                  h-12
                  rounded-2xl
                  bg-white
                  dark:bg-slate-800
                  border
                  border-orange-100
                  dark:border-slate-700
                  flex
                  items-center
                  justify-center
                  text-slate-700
                  dark:text-slate-200
                  hover:text-[#d97706]
                  hover:scale-105
                  transition-all
                  duration-300
                  shadow-sm
                  "
                >

                  <Bell size={20} />

                  <span
                    className="
                    absolute
                    top-3
                    right-3
                    w-2
                    h-2
                    rounded-full
                    bg-red-500
                    animate-ping
                    "
                  />

                </button>

                {/* PROFILE CTA */}

                <button
                  className="
                  hidden
                  md:flex
                  items-center
                  gap-3
                  px-3
                  py-2
                  rounded-2xl
                  bg-white
                  dark:bg-slate-800
                  border
                  border-orange-100
                  dark:border-slate-700
                  hover:scale-[1.03]
                  transition-all
                  duration-300
                  shadow-sm
                  "
                >

                  <div
                    className="
                    w-11
                    h-11
                    rounded-xl
                    bg-gradient-to-br
                    from-[#d97706]
                    to-[#f97316]
                    flex
                    items-center
                    justify-center
                    text-white
                    font-bold
                    shadow-lg
                    "
                  >
                    A
                  </div>

                  <div className="text-left leading-tight">

                    <h4
                      className="
                      font-semibold
                      text-sm
                      text-slate-800
                      dark:text-white
                      "
                    >
                      Akshay
                    </h4>

                    <p
                      className="
                      text-xs
                      text-[#d97706]
                      dark:text-orange-400
                      font-medium
                      "
                    >
                      Verified User
                    </p>

                  </div>

                  <ChevronDown
                    size={18}
                    className="
                    text-slate-500
                    dark:text-slate-400
                    "
                  />

                </button>

                {/* MOBILE MENU */}

                <button
                  onClick={() =>
                    setServiceOpen(true)
                  }
                  className="
                  lg:hidden
                  w-12
                  h-12
                  rounded-2xl
                  bg-white
                  dark:bg-slate-800
                  border
                  border-orange-100
                  dark:border-slate-700
                  flex
                  items-center
                  justify-center
                  text-slate-700
                  dark:text-slate-200
                  hover:text-[#d97706]
                  transition-all
                  duration-300
                  shadow-sm
                  "
                >
                  <Menu size={22} />
                </button>

              </div>

            </div>

          </div>

        </div>

      </header>

      {/* ================= SERVICE SIDEBAR ================= */}

      <ServiceSidebar
        open={serviceOpen}
        setOpen={setServiceOpen}
      />
    </>
  );
}