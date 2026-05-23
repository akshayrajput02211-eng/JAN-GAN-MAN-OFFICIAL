"use client";

import Image from "next/image";
import Link from "next/link";

import scene404 from "@/assets/404/scene.png";

import NotFoundNavbar from "./NotFoundNavbar";

export default function NotFoundScene() {
  return (
    <main
      className="
        relative

        min-h-screen
        w-100
        

        overflow-hidden

        bg-[#bdefff]
      "
    >
      {/* NAVBAR */}

      <NotFoundNavbar />

      {/* BG IMAGE */}

      <Image
        src={scene404}
        alt="404"

        fill

        priority

        className="
          object-center
          object-cover
        "
      />

      {/* DARK GRADIENT */}

      <div
        className="
          absolute inset-0

          bg-gradient-to-b
          from-black/5
          via-transparent
          to-black/10
        "
      />

      {/* 404 TEXT */}

      <div
        className="
          absolute

          top-[18%]
          left-1/2

          z-20

          -translate-x-1/2

          text-center
        "
      >
        <h1
          className="
            text-6xl
            md:text-8xl

            font-black

            text-slate-950

            drop-shadow-lg
          "
        > 
          
        </h1>

        <p
          className="
            mt-3

            text-lg
            md:text-2xl

            font-semibold

            text-slate-900
          "
        >
          
        </p>
      </div>

      {/* HOME BUTTON */}

      <div
        className="
          absolute

          left-1/2
          bottom-[11%]

          -translate-x-1/2

          z-20
        "
      >
        <Link
          href="/"
          className="
            group

            flex
            items-center
            gap-4

            rounded-full

            bg-gradient-to-b
            from-[#63d313]
            to-[#3f9e00]

            px-10
            py-5

            text-xl
            md:text-2xl

            font-extrabold

            text-white

            shadow-[0_10px_30px_rgba(67,160,0,0.4)]

            transition-all
            duration-300

            hover:scale-105
            hover:shadow-[0_15px_40px_rgba(67,160,0,0.55)]
          "
        >
          Home Page par chalo
        </Link>
      </div>
    </main>
  );
}