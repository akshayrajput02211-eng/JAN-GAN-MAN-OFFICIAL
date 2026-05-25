"use client";

import Link from "next/link";

export default function PostJobForm() {
  return (
    <div
      className="
        relative

        rounded-[36px]

        border
        border-white/50
        dark:border-slate-700/40

        bg-white/80
        dark:bg-slate-800/80

        p-6
        lg:p-8

        backdrop-blur-3xl

        shadow-[0_25px_80px_rgba(124,58,237,0.12)]
        dark:shadow-[0_25px_80px_rgba(0,0,0,0.45)]
      "
    >
      {/* TOP LIGHT */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_65%)]

          dark:bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.12),transparent_65%)]

          pointer-events-none
        "
      />

      {/* CONTENT */}

      <div className="relative z-10 text-center">
        {/* BADGE */}

        <div
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            bg-[#ede9fe]

            px-4
            py-2

            text-xs
            font-bold

            text-[#4c1d95]
          "
        >
          <div className="h-2 w-2 rounded-full bg-[#7c3aed]" />

          Quick Hiring
        </div>

        {/* TITLE */}

        <h2
          className="
            mt-6

            text-3xl
            sm:text-4xl

            font-black

            leading-tight

            text-[#18214d]
            dark:text-white
          "
        >
          Apna Job
          <br />
          Post Karein
        </h2>

        {/* DESCRIPTION */}

        <p
          className="
            mx-auto
            mt-4

            max-w-md

            text-sm
            leading-relaxed

            text-gray-500
            dark:text-slate-400
          "
        >
          Nearby workers aur trusted local candidates se instantly connect ho jao.
        </p>

        {/* BUTTON */}

        <Link
          href="/naukri/post-job"
          className="
            mt-8

            inline-flex
            items-center
            justify-center

            rounded-2xl

            bg-gradient-to-r
            from-[#7c3aed]
            to-[#4c1d95]

            px-8
            py-4

            text-sm
            sm:text-base

            font-bold
            text-white

            shadow-[0_10px_30px_rgba(124,58,237,0.35)]

            transition-all
            duration-300

            hover:scale-[1.03]
          "
        >
          + Job Post Karein
        </Link>
      </div>
    </div>
  );
}