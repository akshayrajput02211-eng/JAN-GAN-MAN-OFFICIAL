"use client";

import { use } from "react";
import { useEffect, useState } from "react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default function ApplyDetailsPage({
  params,
}: Props) {
  const { slug } = use(params);

  const [darkMode, setDarkMode] =
    useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add(
        "dark"
      );
    } else {
      document.documentElement.classList.remove(
        "dark"
      );
    }
  }, [darkMode]);

  return (
    <main
      className="
        min-h-screen

        bg-[#fff7ed]
        dark:bg-slate-950

        transition-colors
        duration-300

        px-4
        py-10
      "
    >
      <div className="max-w-5xl mx-auto">

        {/* TOP */}

        <div
          className="
            flex
            items-center
            justify-between

            mb-10
          "
        >

          <div>

            <h1
              className="
                text-4xl
                md:text-5xl

                font-black

                capitalize

                text-slate-900
                dark:text-white
              "
            >
              {slug.replaceAll("-", " ")}
            </h1>

            <p
              className="
                mt-3

                text-lg

                text-slate-600
                dark:text-slate-400
              "
            >
              Government Application Service
            </p>

          </div>

          {/* DARK MODE */}

          {/* <button
            onClick={() =>
              setDarkMode(!darkMode)
            }
            className="
              flex
              items-center
              justify-center

              h-14
              w-14

              rounded-2xl

              bg-white
              dark:bg-slate-800

              border
              border-orange-100
              dark:border-slate-700

              text-2xl

              shadow-lg

              transition-all
              duration-300

              hover:scale-105
            "
          >
            {darkMode ? "" : ""}
          </button> */}

        </div>

        {/* CARD */}

        <div
          className="
            rounded-[35px]

            border
            border-orange-100
            dark:border-slate-800

            bg-white
            dark:bg-slate-900

            p-8
            md:p-10

            shadow-2xl
          "
        >

          {/* BADGE */}

          <div
            className="
              inline-flex
              items-center

              rounded-full

              bg-orange-100
              dark:bg-orange-500/10

              px-4
              py-2

              text-sm
              font-semibold

              text-orange-600
              dark:text-orange-300
            "
          >
            Digital Citizen Service
          </div>

          {/* FORM */}

          <div className="mt-8 grid gap-5">

            <input
              type="text"
              placeholder="Full Name"
              className="
                h-14

                rounded-2xl

                border
                border-orange-100
                dark:border-slate-700

                bg-white
                dark:bg-slate-800

                px-5

                text-slate-900
                dark:text-white

                outline-none
              "
            />

            <input
              type="text"
              placeholder="Mobile Number"
              className="
                h-14

                rounded-2xl

                border
                border-orange-100
                dark:border-slate-700

                bg-white
                dark:bg-slate-800

                px-5

                text-slate-900
                dark:text-white

                outline-none
              "
            />

            <input
              type="text"
              placeholder="Address"
              className="
                h-14

                rounded-2xl

                border
                border-orange-100
                dark:border-slate-700

                bg-white
                dark:bg-slate-800

                px-5

                text-slate-900
                dark:text-white

                outline-none
              "
            />

            <button
              className="
                mt-4

                h-14

                rounded-2xl

                bg-gradient-to-r
                from-orange-500
                to-red-500

                text-lg
                font-bold
                text-white

                transition-all
                duration-300

                hover:scale-[1.02]

                shadow-xl
                shadow-orange-500/20
              "
            >
              Submit Application
            </button>

          </div>

        </div>

      </div>
    </main>
  );
}