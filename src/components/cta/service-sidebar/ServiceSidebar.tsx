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

          bg-black/30
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

          w-[290px]

          border-r
          border-white/20
          dark:border-slate-700/40

          bg-white/75
          dark:bg-slate-900/95

          backdrop-blur-3xl

          shadow-[0_20px_60px_rgba(0,0,0,0.12)]

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

            px-5
            py-5
          "
        >
          <div>
            <h2
              className="
                text-[20px]
                font-black

                tracking-tight

                text-slate-900
                dark:text-white
              "
            >
              JAN GAN MAN
            </h2>

            <p
              className="
                mt-1

                text-[11px]

                text-slate-500
                dark:text-slate-400
              "
            >
              Rural Super App
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="
              flex
              h-10
              w-10

              items-center
              justify-center

              rounded-2xl

              bg-slate-100
              dark:bg-slate-800

              text-slate-700
              dark:text-white

              transition-all
              duration-300

              hover:scale-105
            "
          >
            <ChevronLeft size={18} />
          </button>
        </div>

        {/* TOP BUTTONS */}

        <div
          className="
            grid
            grid-cols-2
            gap-3

            px-4
            pt-4
          "
        >
          <Link href="/" className="block">
            <div
              className="
                rounded-[24px]

                bg-gradient-to-br
                from-green-500
                to-emerald-600

                p-4

                text-white

                shadow-lg

                transition-all
                duration-300

                hover:-translate-y-1
              "
            >
              <Home size={20} />

              <h3 className="mt-3 text-sm font-bold">
                Home
              </h3>

              <p className="mt-1 text-[10px] text-white/80">
                Dashboard
              </p>
            </div>
          </Link>

          <Link href="/profile" className="block">
            <div
              className="
                rounded-[24px]

                bg-gradient-to-br
                from-slate-800
                to-slate-900

                p-4

                text-white

                shadow-lg

                transition-all
                duration-300

                hover:-translate-y-1
              "
            >
              <User size={20} />

              <h3 className="mt-3 text-sm font-bold">
                Profile
              </h3>

              <p className="mt-1 text-[10px] text-white/70">
                My Account
              </p>
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
          <div className="flex flex-col gap-3">
            {services.map((service) => (
              <ServiceMiniCard
                key={service.title}
                title={service.title}
                subtitle={service.subtitle}
                icon={service.icon}
                href={service.href}
                color={service.color}
                glow={service.glow}
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

            p-4
          "
        >
          <div
            className="
              rounded-2xl

              bg-slate-100/80
              dark:bg-slate-800/80

              px-4
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
              Secure digital rural ecosystem with trusted
              services and citizen privacy protection.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}