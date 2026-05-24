"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  Bell,
  User,
  Settings,
  Menu,
} from "lucide-react";

import ServiceSidebar from "@/components/cta/service-sidebar/ServiceSidebar";

const navItems = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "Consult",
    href: "/consult",
  },

  {
    label: "Medicines",
    href: "/medicines",
  },

  {
    label: "Appointments",
    href: "/appointments",
  },
];

export default function Navbar() {
  const [serviceOpen, setServiceOpen] =
    useState(false);

  const [isScrolled, setIsScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      <header
        className="
          fixed
          top-0
          left-0
          right-0

          z-50

          px-2
          pt-3

          sm:px-4
          lg:px-6
        "
      >
        <div
          className={`
            mx-auto

            transition-all
            duration-300

            ${
              isScrolled
                ? "translate-y-0"
                : "translate-y-0"
            }
          `}
        >
          <div
            className={`
              rounded-[24px]
              lg:rounded-[30px]

              border

              backdrop-blur-2xl

              shadow-[0_10px_40px_rgba(0,0,0,0.05)]

              transition-all
              duration-300

              ${
                isScrolled
                  ? `
                    border-white/30
                    dark:border-slate-700/40

                    bg-white/80
                    dark:bg-slate-900/85

                    shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                  `
                  : `
                    border-white/40
                    dark:border-slate-700/40

                    bg-white/70
                    dark:bg-slate-900/80
                  `
              }
            `}
          >
            <div
              className="
                flex
                items-center
                justify-between

                px-3
                py-3

                sm:px-5
                lg:px-8
              "
            >
              {/* ================= LEFT ================= */}

              <div
                className="
                  flex
                  items-center

                  gap-4
                  sm:gap-6
                  lg:gap-14

                  min-w-0
                "
              >
                {/* LOGO */}

                <Link
                  href="/"
                  className="
                    flex
                    items-center

                    gap-2
                    sm:gap-3

                    shrink-0
                  "
                >
                  <img
                    src="/assets/swasthya/logo.png"
                    alt="logo"
                    className="
                      w-10
                      sm:w-11
                      lg:w-12

                      shrink-0
                    "
                  />

                  <div
                    className="
                      hidden
                      xs:block
                    "
                  >
                    <h2
                      className="
                        text-lg
                        sm:text-xl
                        lg:text-2xl

                        font-black

                        leading-none

                        text-slate-900
                        dark:text-white
                      "
                    >
                      Swasthya
                    </h2>

                    <p
                      className="
                        hidden
                        sm:block

                        text-[11px]

                        text-slate-500
                        dark:text-slate-400
                      "
                    >
                      Sehat pe dhyan, jeevan aasan
                    </p>
                  </div>
                </Link>

                {/* NAV LINKS */}

                <nav
                  className="
                    hidden
                    lg:flex

                    items-center

                    gap-8
                    xl:gap-10
                  "
                >
                  {navItems.map(
                    (item, index) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={`
                          relative

                          text-sm
                          font-semibold

                          whitespace-nowrap

                          transition-all
                          duration-300

                          hover:text-red-600
                          dark:hover:text-red-400

                          ${
                            index === 0
                              ? "text-red-600 dark:text-red-400"
                              : "text-slate-600 dark:text-slate-300"
                          }
                        `}
                      >
                        {item.label}

                        {index === 0 && (
                          <span
                            className="
                              absolute
                              left-0
                              -bottom-[10px]

                              h-[3px]
                              w-full

                              rounded-full

                              bg-red-600
                              dark:bg-red-400
                            "
                          />
                        )}
                      </Link>
                    )
                  )}
                </nav>
              </div>

              {/* ================= RIGHT ================= */}

              <div
                className="
                  flex
                  items-center

                  gap-2
                  sm:gap-3
                  lg:gap-4

                  shrink-0
                "
              >
                {/* SERVICES BUTTON */}

                <button
                  onClick={() =>
                    setServiceOpen(true)
                  }
                  className="
                    hidden
                    xl:flex

                    items-center
                    justify-center

                    gap-2

                    h-11
                    px-5

                    rounded-2xl

                    bg-gradient-to-r
                    from-red-600
                    to-red-800

                    text-sm
                    font-semibold

                    text-white

                    whitespace-nowrap

                    shadow-[0_10px_30px_rgba(220,38,38,0.25)]

                    transition-all
                    duration-300

                    hover:scale-105
                  "
                >
                  <Settings
                    size={17}
                    className="shrink-0"
                  />

                  Services
                </button>

                {/* REGISTER DOCTOR */}

                <Link
                  href="/register-doctor"
                  className="
                    hidden
                    md:flex

                    items-center
                    justify-center

                    gap-2

                    h-11

                    px-4
                    lg:px-5

                    rounded-2xl

                    border
                    border-white/40
                    dark:border-slate-700/40

                    bg-white/70
                    dark:bg-slate-800/70

                    backdrop-blur-xl

                    text-sm
                    font-semibold

                    text-red-600
                    dark:text-red-300

                    whitespace-nowrap

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-white
                    dark:hover:bg-slate-700
                  "
                >
                  <span className="hidden lg:block">
                    Register as a Doctor
                  </span>

                  <span className="lg:hidden">
                    Register
                  </span>
                </Link>

                {/* NOTIFICATION */}

                <button
                  className="
                    flex

                    h-10
                    w-10

                    sm:h-11
                    sm:w-11

                    items-center
                    justify-center

                    rounded-2xl

                    border
                    border-white/40
                    dark:border-slate-700/40

                    bg-white/70
                    dark:bg-slate-800/70

                    backdrop-blur-xl

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-white
                    dark:hover:bg-slate-700
                  "
                >
                  <Bell
                    size={18}
                    className="
                      shrink-0

                      text-slate-700
                      dark:text-slate-200
                    "
                  />
                </button>

                {/* MY PROFILE */}

                <Link
                  href="/profile"
                  className="
                    hidden
                    sm:flex

                    items-center
                    justify-center

                    gap-2

                    h-10
                    sm:h-11

                    px-3
                    lg:px-4

                    rounded-2xl

                    border
                    border-white/40
                    dark:border-slate-700/40

                    bg-white/70
                    dark:bg-slate-800/70

                    backdrop-blur-xl

                    text-sm
                    font-semibold

                    text-slate-700
                    dark:text-slate-200

                    whitespace-nowrap

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-white
                    dark:hover:bg-slate-700

                    hover:text-red-600
                    dark:hover:text-red-300
                  "
                >
                  <User
                    size={17}
                    className="shrink-0"
                  />

                  <span className="hidden lg:block">
                    My Profile
                  </span>
                </Link>

                {/* MOBILE MENU */}

                <button
                  onClick={() =>
                    setServiceOpen(true)
                  }
                  className="
                    flex
                    lg:hidden

                    h-10
                    w-10

                    sm:h-11
                    sm:w-11

                    items-center
                    justify-center

                    rounded-2xl

                    border
                    border-white/40
                    dark:border-slate-700/40

                    bg-white/70
                    dark:bg-slate-800/70

                    backdrop-blur-xl

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-white
                    dark:hover:bg-slate-700
                  "
                >
                  <Menu
                    size={18}
                    className="
                      shrink-0

                      text-slate-700
                      dark:text-slate-200
                    "
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* NAVBAR SPACER */}

      <div className="h-[90px] sm:h-[100px]" />

      {/* ================= SERVICE SIDEBAR ================= */}

      <ServiceSidebar
        open={serviceOpen}
        setOpen={setServiceOpen}
      />
    </>
  );
}