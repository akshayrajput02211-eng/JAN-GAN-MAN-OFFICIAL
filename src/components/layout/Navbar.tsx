"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Help",
      href: "/help",
    },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header className="fixed top-3 left-0 w-full z-50 px-2 sm:px-4 md:px-8">
        <div
          className="
            w-full
            max-w-7xl
            mx-auto

            h-[64px]
            md:h-[84px]

            flex
            items-center
            justify-between

            px-3
            sm:px-5
            md:px-8

            rounded-full

            bg-white/20
            backdrop-blur-2xl

            border
            border-white/30

            shadow-[0_8px_32px_rgba(0,0,0,0.15)]

            overflow-hidden
          "
        >
          {/* ================= LEFT ================= */}

          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 min-w-0"
          >
            {/* LOGO */}

            <div className="relative w-12 h-12 md:w-16 md:h-16 shrink-0">
              <Image
                src="/images/logo/logo.png"
                alt="logo"
                fill
                sizes="64px"
                className="object-contain"
                priority
              />
            </div>

            {/* TEXT */}

            <h1
              className="
                text-[15px]
                sm:text-lg
                md:text-2xl

                font-black
                text-green-700

                truncate
                whitespace-nowrap
                leading-none
              "
            >
              JAN GAN MAN
            </h1>
          </Link>

          {/* ================= DESKTOP NAV ================= */}

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  relative

                  text-lg
                  font-semibold
                  text-black/80

                  transition-all
                  duration-300

                  hover:text-black

                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-[3px]
                  after:w-0
                  after:bg-lime-500
                  after:rounded-full
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ================= RIGHT ================= */}

          <div className="flex items-center gap-3 shrink-0">
            {/* ================= PROFILE BUTTON ================= */}

            <Link
              href="/profile"
              className="
                hidden
                md:flex

                items-center
                justify-center

                px-6
                h-[48px]

                rounded-2xl

                bg-lime-500
                hover:bg-lime-600

                text-white
                text-sm
                lg:text-base
                font-bold

                transition-all
                duration-300

                hover:scale-105

                shadow-lg
              "
            >
              MY PROFILE
            </Link>

            {/* ================= MOBILE MENU BUTTON ================= */}

            <button
              onClick={() => setOpen(true)}
              className="
                lg:hidden

                w-10
                h-10

                rounded-full

                bg-white/30
                backdrop-blur-md

                flex
                items-center
                justify-center

                border
                border-white/20
              "
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= OVERLAY ================= */}

      <div
        onClick={() => setOpen(false)}
        className={`
          fixed
          inset-0
          bg-black/40
          backdrop-blur-sm
          z-[90]

          transition-all
          duration-500

          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* ================= MOBILE SIDEBAR ================= */}

      <div
        className={`
          fixed
          top-0
          right-0

          h-screen
          w-[280px]

          bg-white/20
          backdrop-blur-2xl

          border-l
          border-white/20

          z-[100]

          p-6

          transition-all
          duration-500

          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* ================= CLOSE BUTTON ================= */}

        <div className="flex justify-end">
          <button
            onClick={() => setOpen(false)}
            className="
              w-10
              h-10

              rounded-full

              bg-white/30

              flex
              items-center
              justify-center

              border
              border-white/20
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* ================= MOBILE LINKS ================= */}

        <nav className="flex flex-col gap-7 mt-16">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="
                text-2xl
                font-bold
                text-black/80

                transition-all
                duration-300

                hover:translate-x-2
                hover:text-green-700
              "
            >
              {item.label}
            </Link>
          ))}

          {/* ================= PROFILE BUTTON ================= */}

          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="
              mt-6

              h-[54px]

              rounded-2xl

              bg-lime-500
              hover:bg-lime-600

              text-white
              text-lg
              font-bold

              transition-all
              duration-300

              flex
              items-center
              justify-center
            "
          >
            My Profile
          </Link>
        </nav>
      </div>
    </>
  );
}