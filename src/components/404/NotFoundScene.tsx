"use client";

import Image from "next/image";
import Link from "next/link";

import scene404 from "@/assets/404/scene.png";

export default function NotFoundScene() {
  return (
    <main
      className="
        relative

        min-h-screen
        w-full

        overflow-hidden

        bg-[#bdefff]
      "
    >
      {/* BG IMAGE */}
      <Image
        src={scene404}
        alt="404"

        fill

        priority

        className="
          object-fill
          object-center
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

      {/* CENTER BUTTON */}
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

            flex items-center gap-7

            rounded-full

            bg-gradient-to-b
            from-[#63d313]
            to-[#3f9e00]
            

            px-10 py-5

            text-2xl
            font-extrabold

            text-white

            shadow-[0_10px_30px_rgba(67,160,0,0.4)]

            transition-all duration-300

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