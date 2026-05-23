"use client";

import {
  Download,
  Smartphone,
} from "lucide-react";

import Container from "../container/Container";

export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-orange-100
        dark:border-slate-700/50

        bg-white
        dark:bg-slate-900

        py-14
      "
    >
      <Container>
        <div
          className="
            grid
            gap-10

            lg:grid-cols-4
          "
        >
          {/* BRAND */}

          <div>
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center

                  rounded-2xl

                  bg-orange-100
                  dark:bg-orange-950/40

                  text-2xl

                  shadow-md
                "
              >
                🏪
              </div>

              <div>
                <h2
                  className="
                    text-3xl
                    font-black
                    text-orange-700
                    dark:text-orange-400
                  "
                >
                  Dukaan
                </h2>

                <p
                  className="
                    text-sm
                    text-slate-500
                    dark:text-slate-400
                  "
                >
                  Local Commerce Platform
                </p>
              </div>
            </div>

            <p
              className="
                mt-5
                max-w-sm
                leading-relaxed
                text-slate-500
                dark:text-slate-400
              "
            >
              Apne gaon ki apni dukaan —
              fast delivery, trusted shops
              aur local businesses ko digital
              support.
            </p>
          </div>

          {/* COMPANY */}

          <div>
            <h4
              className="
                mb-5
                text-lg
                font-black
                text-slate-900
                dark:text-white
              "
            >
              Company
            </h4>

            <ul
              className="
                space-y-3
                text-slate-500
                dark:text-slate-400
              "
            >
              <li className="transition hover:text-orange-600 dark:hover:text-orange-400">
                About
              </li>

              <li className="transition hover:text-orange-600 dark:hover:text-orange-400">
                Careers
              </li>

              <li className="transition hover:text-orange-600 dark:hover:text-orange-400">
                Blog
              </li>
            </ul>
          </div>

          {/* SUPPORT */}

          <div>
            <h4
              className="
                mb-5
                text-lg
                font-black
                text-slate-900
                dark:text-white
              "
            >
              Support
            </h4>

            <ul
              className="
                space-y-3
                text-slate-500
                dark:text-slate-400
              "
            >
              <li className="transition hover:text-orange-600 dark:hover:text-orange-400">
                Help Center
              </li>

              <li className="transition hover:text-orange-600 dark:hover:text-orange-400">
                Terms
              </li>

              <li className="transition hover:text-orange-600 dark:hover:text-orange-400">
                Privacy
              </li>
            </ul>
          </div>

          {/* DOWNLOAD */}

          <div>
            <h4
              className="
                mb-5
                text-lg
                font-black
                text-slate-900
                dark:text-white
              "
            >
              Download App
            </h4>

            <div className="space-y-4">
              <button
                className="
                  flex
                  h-14
                  w-full
                  items-center
                  gap-4

                  rounded-2xl

                  border
                  border-orange-100
                  dark:border-slate-700/50

                  bg-orange-50
                  dark:bg-slate-800

                  px-5

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-orange-300
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center

                    rounded-xl

                    bg-orange-100
                    dark:bg-orange-950/40
                  "
                >
                  <Download
                    size={20}
                    className="text-orange-700 dark:text-orange-400"
                  />
                </div>

                <div className="text-left">
                  <p
                    className="
                      text-xs
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    Download on
                  </p>

                  <h5
                    className="
                      font-bold
                      text-slate-900
                      dark:text-white
                    "
                  >
                    Play Store
                  </h5>
                </div>
              </button>

              <button
                className="
                  flex
                  h-14
                  w-full
                  items-center
                  gap-4

                  rounded-2xl

                  border
                  border-orange-100
                  dark:border-slate-700/50

                  bg-orange-50
                  dark:bg-slate-800

                  px-5

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-orange-300
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center

                    rounded-xl

                    bg-orange-100
                    dark:bg-orange-950/40
                  "
                >
                  <Smartphone
                    size={20}
                    className="text-orange-700 dark:text-orange-400"
                  />
                </div>

                <div className="text-left">
                  <p
                    className="
                      text-xs
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    Available on
                  </p>

                  <h5
                    className="
                      font-bold
                      text-slate-900
                      dark:text-white
                    "
                  >
                    App Store
                  </h5>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM */}

        <div
          className="
            mt-12

            flex
            flex-col
            gap-4

            border-t
            border-orange-100
            dark:border-slate-700/50

            pt-6

            text-sm
            text-slate-500
            dark:text-slate-400

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © 2026 Dukaan. All rights reserved.
          </p>

          <p>
            Built with for local businesses.
          </p>
        </div>
      </Container>
    </footer>
  );
}