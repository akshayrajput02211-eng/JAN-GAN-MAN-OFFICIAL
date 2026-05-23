"use client";

import Link from "next/link";

import {
  Bell,
  User,
} from "lucide-react";

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

  {
    label: "Health Records",
    href: "/health-records",
  },
];

export default function Navbar() {
  return (
    <header
      className="
      sticky top-0 z-50
      rounded-[28px]
      border border-white/40
      bg-white/70
      backdrop-blur-xl
      shadow-[0_10px_40px_rgba(0,0,0,0.04)]
    "
    >
      <div
        className="
        flex items-center justify-between
        px-5 py-4
        lg:px-8
      "
      >
        {/* LEFT */}

        <div className="flex items-center gap-14">

          {/* LOGO */}

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <img
              src="/assets/swasthya/logo.png"
              alt="logo"
              className="w-12"
            />

            <div>
              <h2
                className="
                text-2xl font-black
                text-slate-900
              "
              >
                Swasthya
              </h2>

              <p
                className="
                text-xs text-slate-500
              "
              >
                Sehat pe dhyan, jeevan aasan
              </p>
            </div>
          </Link>

          {/* NAV LINKS */}

          <nav
            className="
            hidden lg:flex
            items-center gap-10
          "
          >
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  relative
                  text-sm font-medium
                  transition-all duration-300
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
                    absolute left-0 top-[28px]
                    h-[3px] w-full
                    rounded-full bg-green-600
                  "
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* RIGHT */}

        <div
          className="
          flex items-center
          gap-4
        "
        >
          {/* REGISTER DOCTOR */}

          <Link
            href="/register-doctor"
            className="
            hidden md:flex
            items-center justify-center
            gap-2

            min-w-[160px]

            rounded-2xl
            bg-red-500

            px-5 py-3

            text-sm font-semibold
            text-white

            transition-all duration-300

            hover:scale-105
            hover:bg-red-600
          "
          >
            Register as a Doctor
          </Link>

          {/* NOTIFICATION */}

          <button
            className="
            flex h-12 w-12
            items-center justify-center

            rounded-2xl
            border border-neutral-200
            bg-white

            transition-all duration-300

            hover:-translate-y-1
            hover:border-green-200
            hover:bg-green-50
          "
          >
            <Bell size={20} />
          </button>

          {/* MY PROFILE */}

          <Link
            href="/profile"
            className="
            flex items-center justify-center
            gap-2

            min-w-[150px]

            rounded-2xl
            border border-neutral-200
            bg-white

            px-5 py-3

            text-sm font-semibold
            text-slate-700

            transition-all duration-300

            hover:-translate-y-1
            hover:border-green-200
            hover:bg-green-50
            hover:text-green-700
          "
          >
            <User size={18} />

            My Profile
          </Link>
        </div>
      </div>
    </header>
  );
}