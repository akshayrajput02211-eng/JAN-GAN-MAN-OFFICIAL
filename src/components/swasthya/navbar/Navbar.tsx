"use client";

import Link from "next/link";
import { useState } from "react";

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

  return (
    <>
      <header
        className="
          sticky top-3 z-50

          mx-2
          sm:mx-4
          lg:mx-6
        "
      >
        <div
          className="
            rounded-[24px]
            lg:rounded-[30px]

            border border-white/40

            bg-white/70

            backdrop-blur-2xl

            shadow-[0_10px_40px_rgba(0,0,0,0.05)]
          "
        >
          <div
            className="
              flex items-center justify-between

              px-3 py-3

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
                {navItems.map((item, index) => (
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

                      hover:text-green-600

                      ${
                        index === 0
                          ? "text-green-600"
                          : "text-slate-600"
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

                          bg-green-600
                        "
                      />
                    )}
                  </Link>
                ))}
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
                  from-green-500
                  to-emerald-600

                  text-sm
                  font-semibold

                  text-white

                  whitespace-nowrap

                  shadow-[0_10px_30px_rgba(34,197,94,0.25)]

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

                  bg-red-500

                  text-sm
                  font-semibold

                  text-white

                  whitespace-nowrap

                  transition-all
                  duration-300

                  hover:scale-105
                  hover:bg-red-600
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
                  border-neutral-200

                  bg-white

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-green-200
                  hover:bg-green-50
                "
              >
                <Bell
                  size={18}
                  className="shrink-0"
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
                  border-neutral-200

                  bg-white

                  text-sm
                  font-semibold

                  text-slate-700

                  whitespace-nowrap

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-green-200
                  hover:bg-green-50
                  hover:text-green-700
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
                  border-neutral-200

                  bg-white

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-green-200
                  hover:bg-green-50
                "
              >
                <Menu
                  size={18}
                  className="shrink-0"
                />
              </button>
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