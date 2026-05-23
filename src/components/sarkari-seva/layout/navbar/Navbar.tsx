"use client";

import Link from "next/link";
import {
  Bell,
  Menu,
  Search,
  ChevronDown,
} from "lucide-react";

const navItems = [
  "Home",
  "Yojna",
  "Jobs",
  "Banking",
  "Complaints",
  "Resources",
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="glass border-b border-white/30">

        <div className="max-w-7xl mx-auto px-4 lg:px-8">

          <div className="flex items-center justify-between h-20">

            {/* LEFT */}
            <div className="flex items-center gap-3">

              <div
                className="
                w-12 h-12
                rounded-2xl
                bg-green-500/10
                flex items-center justify-center
                "
              >
                🇮🇳
              </div>

              <div>

                <h1 className="font-bold text-2xl">
                  Sarkari Seva
                </h1>

                <p className="text-sm text-slate-500">
                  Digital Bharat Platform
                </p>

              </div>

            </div>

            {/* CENTER */}
            <nav className="hidden lg:flex items-center gap-8">

              {navItems.map((item) => (
                <Link
                  key={item}
                  href="/"
                  className="
                  text-slate-700
                  hover:text-green-600
                  font-medium
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
                    bg-green-500
                    transition-all
                    duration-300
                    group-hover:w-full
                    "
                  />

                </Link>
              ))}

            </nav>

            {/* RIGHT */}
            <div className="flex items-center gap-4">

              {/* SEARCH */}
              <button
                className="
                w-12 h-12 rounded-2xl
                glass
                flex items-center justify-center
                hover:scale-110 transition
                "
              >
                <Search size={20} />
              </button>

              {/* NOTIFICATION */}
              <button
                className="
                relative
                w-12 h-12 rounded-2xl
                glass
                flex items-center justify-center
                hover:scale-110 transition
                "
              >
                <Bell size={20} />

                <span
                  className="
                  absolute top-3 right-3
                  w-2 h-2 rounded-full
                  bg-red-500
                  animate-ping
                  "
                />

              </button>

              {/* PROFILE CTA */}
              <button
                className="
                hidden md:flex
                items-center gap-3
                px-3 py-2
                rounded-2xl
                glass
                hover:scale-[1.03]
                transition-all duration-300
                border border-white/30
                "
              >

                <div
                  className="
                  w-11 h-11
                  rounded-xl
                  bg-gradient-to-br
                  from-green-500
                  to-emerald-600
                  flex items-center justify-center
                  text-white
                  font-bold
                  shadow-lg
                  "
                >
                  A
                </div>

                <div className="text-left leading-tight">

                  <h4 className="font-semibold text-sm text-slate-800">
                    Akshay
                  </h4>

                  <p className="text-xs text-green-600 font-medium">
                    Verified User
                  </p>

                </div>

                <ChevronDown
                  size={18}
                  className="text-slate-500"
                />

              </button>

              {/* MOBILE MENU */}
              <button
                className="
                lg:hidden
                w-12 h-12 rounded-2xl
                glass
                flex items-center justify-center
                "
              >
                <Menu />
              </button>

            </div>

          </div>

        </div>

      </div>
    </header>
  );
}