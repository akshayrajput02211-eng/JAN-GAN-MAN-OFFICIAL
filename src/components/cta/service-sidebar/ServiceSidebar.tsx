"use client";

import Link from "next/link";

import {
  ChevronLeft,
  Home,
  User,
} from "lucide-react";

import ServiceMiniCard from "./ServiceMiniCard";
import { services } from "./servicesData";

interface Props {
  open: boolean;
  setOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

export default function ServiceSidebar({
  open,
  setOpen,
}: Props) {
  return (
    <>
      {/* OVERLAY */}

      <div
        onClick={() => setOpen(false)}
        className={`
          fixed
          inset-0
          z-[60]

          bg-black/20
          backdrop-blur-sm

          transition-all
          duration-300

          ${
            open
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      />

      {/* SIDEBAR */}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-[70]

          flex
          h-screen
          flex-col

          w-[260px]

          border-r
          border-white/20
          dark:border-slate-700/40

          bg-white/75
          dark:bg-slate-900/95

          backdrop-blur-3xl

          shadow-[0_20px_50px_rgba(0,0,0,0.08)]

          transition-all
          duration-500

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* HEADER */}

        <div
          className="
            flex
            items-center
            justify-between

            border-b
            border-black/5
            dark:border-slate-700/60

            px-4
            py-4
          "
        >
          <div>
            <h2
              className="
                text-[17px]
                font-black

                tracking-tight

                text-slate-900
                dark:text-white
              "
            >
              Services
            </h2>

            <p
              className="
                mt-0.5

                text-[11px]
                text-slate-500
                dark:text-slate-400
              "
            >
              Healthcare modules
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="
              flex
              h-9
              w-9

              items-center
              justify-center

              rounded-xl

              border
              border-black/5
              dark:border-slate-700/60

              bg-white
              dark:bg-slate-800

              text-slate-900
              dark:text-white

              transition-all
              duration-300

              hover:bg-slate-50
              dark:hover:bg-slate-700
            "
          >
            <ChevronLeft size={17} />
          </button>
        </div>

        {/* HOME + PROFILE */}

        <div
          className="
            grid
            grid-cols-2
            gap-3

            px-4
            pt-4
          "
        >
          {/* HOME */}

          <Link href="/">
            <div
              className="
                group
                relative

                overflow-hidden

                rounded-[22px]

                bg-gradient-to-br
                from-green-500
                to-emerald-600

                p-4

                text-white

                shadow-[0_12px_30px_rgba(34,197,94,0.22)]

                transition-all
                duration-300

                hover:-translate-y-1
              "
            >
              <div
                className="
                  absolute
                  right-[-30px]
                  top-[-30px]

                  h-[90px]
                  w-[90px]

                  rounded-full

                  bg-white/10

                  blur-3xl
                "
              />

              <div className="relative z-10">
                <div
                  className="
                    flex
                    h-10
                    w-10

                    items-center
                    justify-center

                    rounded-2xl

                    bg-white/15
                  "
                >
                  <Home size={18} />
                </div>

                <h3
                  className="
                    mt-3

                    text-sm
                    font-bold
                  "
                >
                  Home
                </h3>

                <p
                  className="
                    mt-1

                    text-[10px]

                    text-white/80
                  "
                >
                  Dashboard
                </p>
              </div>
            </div>
          </Link>

          {/* PROFILE */}

          <Link href="/profile">
            <div
              className="
                group
                relative

                overflow-hidden

                rounded-[22px]

                bg-gradient-to-br
                from-slate-800
                to-slate-900

                p-4

                text-white

                shadow-[0_12px_30px_rgba(15,23,42,0.22)]

                transition-all
                duration-300

                hover:-translate-y-1
              "
            >
              <div
                className="
                  absolute
                  right-[-30px]
                  top-[-30px]

                  h-[90px]
                  w-[90px]

                  rounded-full

                  bg-white/10

                  blur-3xl
                "
              />

              <div className="relative z-10">
                <div
                  className="
                    flex
                    h-10
                    w-10

                    items-center
                    justify-center

                    rounded-2xl

                    bg-white/10
                  "
                >
                  <User size={18} />
                </div>

                <h3
                  className="
                    mt-3

                    text-sm
                    font-bold
                  "
                >
                  Profile
                </h3>

                <p
                  className="
                    mt-1

                    text-[10px]

                    text-white/70
                  "
                >
                  My Account
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* SERVICES */}

        <div
          className="
            flex-1

            overflow-y-auto

            px-4
            py-4
          "
        >
          <div
            className="
              flex
              flex-col
              gap-2.5
            "
          >
            {services.map((service) => (
              <ServiceMiniCard
                key={service.title}
                title={service.title}
                icon={service.icon}
                href={service.href}
                color={service.color}
              />
            ))}
          </div>
        </div>

        {/* FOOTER */}

        <div
          className="
            border-t
            border-black/5
            dark:border-slate-700/60

            px-4
            py-3
          "
        >
          <div
            className="
              rounded-2xl

              bg-slate-50/80
              dark:bg-slate-800/80

              px-3
              py-3
            "
          >
            <p
              className="
                text-[11px]
                leading-5

                text-slate-500
                dark:text-slate-400
              "
            >
              Secure healthcare platform with protected
              medical privacy support.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}