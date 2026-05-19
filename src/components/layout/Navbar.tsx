"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="absolute top-4 left-0 w-full z-50 px-4 md:px-8">

        <div
          className="
            max-w-7xl
            mx-auto

            h-[72px] md:h-[88px]

            flex
            items-center
            justify-between

            px-5 md:px-10

            rounded-full

            bg-white/20
            backdrop-blur-xl

            border border-white/30

            shadow-[0_8px_32px_rgba(0,0,0,0.15)]

            transition-all
            duration-300

            hover:bg-white/25
          "
        >

       {/* LEFT */}
<div className="flex items-center gap-3">

  {/* LOGO */}
  <div className="relative w-14 h-14 md:w-20 md:h-20">

    <Image
      src="/images/logo/logo.png"
      alt="logo"
      fill
      className="object-contain"
    />

  </div>

  {/* TEXT */}
  <h1
    className="
      text-lg
      md:text-2xl

      font-black
      text-green-700

      whitespace-nowrap
      leading-none
    "
  >
    JAN GAN MAN
  </h1>

</div>

          {/* DESKTOP NAV */}
          <nav
            className="
              hidden
              lg:flex
              items-center
              gap-12
            "
          >

            <a
              href="#"
              className="
                relative
                text-xl
                font-semibold
                text-black/80

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[3px]
                after:w-0
                after:bg-green-500
                after:rounded-full
                after:transition-all
                after:duration-300

                hover:after:w-full
                hover:text-black
              "
            >
              Home
            </a>

            <a
              href="#"
              className="
                relative
                text-xl
                font-semibold
                text-black/80

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[3px]
                after:w-0
                after:bg-green-500
                after:rounded-full
                after:transition-all
                after:duration-300

                hover:after:w-full
                hover:text-black
              "
            >
              Services
            </a>

            <a
              href="#"
              className="
                relative
                text-xl
                font-semibold
                text-black/80

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[3px]
                after:w-0
                after:bg-green-500
                after:rounded-full
                after:transition-all
                after:duration-300

                hover:after:w-full
                hover:text-black
              "
            >
              About
            </a>

            <a
              href="#"
              className="
                relative
                text-xl
                font-semibold
                text-black/80

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[3px]
                after:w-0
                after:bg-green-500
                after:rounded-full
                after:transition-all
                after:duration-300

                hover:after:w-full
                hover:text-black
              "
            >
              Help
            </a>

          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* DESKTOP BUTTON */}
            <button
              className="
                hidden
                md:flex

                items-center
                justify-center

                px-7
                h-[52px]

                rounded-2xl

                bg-lime-500
                hover:bg-lime-600

                text-white
                text-lg
                font-bold

                transition-all
                duration-300

                hover:scale-105

                shadow-lg
              "
            >
              MY PROFILE
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="
                lg:hidden

                w-11
                h-11

                rounded-full

                bg-white/30
                backdrop-blur-md

                flex
                items-center
                justify-center
              "
            >
              <Menu size={24} />
            </button>

          </div>

        </div>

      </header>

      {/* MOBILE SIDEBAR */}
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

          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >

        {/* CLOSE */}
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
            "
          >
            <X size={22} />
          </button>

        </div>

        {/* MOBILE LINKS */}
        <nav className="flex flex-col gap-8 mt-16">

          <a
            href="#"
            className="
              text-2xl
              font-bold
              text-black/80
            "
          >
            Home
          </a>

          <a
            href="#"
            className="
              text-2xl
              font-bold
              text-black/80
            "
          >
            Services
          </a>

          <a
            href="#"
            className="
              text-2xl
              font-bold
              text-black/80
            "
          >
            About
          </a>

          <a
            href="#"
            className="
              text-2xl
              font-bold
              text-black/80
            "
          >
            Help
          </a>

          <button
            className="
              mt-8

              h-[55px]

              rounded-2xl

              bg-lime-500

              text-white
              text-lg
              font-bold
            "
          >
            Download App
          </button>

        </nav>

      </div>
    </>
  );
}