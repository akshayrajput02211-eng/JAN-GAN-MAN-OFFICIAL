// ========================================
// FILE: src/components/layout/navbar/Navbar.tsx
// ========================================

"use client";

import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import {
  Menu,
  X,
  Settings,
  LogIn,
  Briefcase,
  Store,
  Landmark,
  HeartPulse,
  GraduationCap,
  Wheat,
  Shield,
  Bot,
  FileText,
  ShieldCheck,
  Wallet,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [serviceOpen, setServiceOpen] =
    useState(false);

  const navLinks = [
    {
      label: "Home",
      href: "/",
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

  const services = [
    {
      title: "Naukri",
      icon: Briefcase,
    },
    {
      title: "Dukaan",
      icon: Store,
    },
    {
      title: "Sarkari Seva",
      icon: Landmark,
    },
    {
      title: "Swasthya",
      icon: HeartPulse,
    },
    {
      title: "Shiksha",
      icon: GraduationCap,
    },
    {
      title: "Krishi",
      icon: Wheat,
    },
    {
      title: "Suraksha",
      icon: Shield,
    },
    {
      title: "AI Sahayak",
      icon: Bot,
    },
  ];

  const actionButtons = [
    {
      label: "Terms",
      href: "/terms",
      icon: FileText,
      gradient: false,
    },
    {
      label: "Privacy",
      href: "/privacy",
      icon: ShieldCheck,
      gradient: false,
    },
    {
      label: "Wallet",
      href: "/wallet",
      icon: Wallet,
      gradient: true,
    },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header className="fixed left-0 top-3 z-50 w-full px-2 sm:px-4 md:px-8">
        <div
          className="
            mx-auto
            flex
            h-[64px]
            w-full
            max-w-7xl
            items-center
            justify-between
            overflow-hidden
            rounded-full
            border
            border-white/30
            bg-white/20
            px-3
            shadow-[0_8px_32px_rgba(0,0,0,0.15)]
            backdrop-blur-2xl
            sm:px-5
            md:h-[84px]
            md:px-8
            dark:border-slate-700/40
            dark:bg-slate-900/40
          "
        >
          {/* ================= LEFT ================= */}

          <Link
            href="/"
            className="flex min-w-0 items-center gap-2 sm:gap-3"
          >
            {/* LOGO */}

            <div className="relative h-12 w-12 shrink-0 md:h-16 md:w-16">
              <Image
                src="/images/logo/logo.png"
                alt="JAN GAN MAN Logo"
                fill
                sizes="64px"
                className="object-contain"
                priority
              />
            </div>

            {/* BRAND */}

            <div className="min-w-0">
              <h1
                className="
                  truncate
                  whitespace-nowrap
                  text-[15px]
                  font-black
                  leading-none
                  text-green-700
                  sm:text-lg
                  md:text-2xl
                "
              >
                JAN GAN MAN
              </h1>

              <p
                className="
                  hidden
                  text-xs
                  font-medium
                  text-slate-500
                  md:block
                "
              >
                Rural India Super App
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  relative
                  text-base
                  font-semibold
                  text-black/80
                  transition-all
                  duration-300
                  hover:text-black

                  after:absolute
                  after:-bottom-2
                  after:left-0
                  after:h-[3px]
                  after:w-0
                  after:rounded-full
                  after:bg-lime-500
                  after:transition-all
                  after:duration-300

                  hover:after:w-full

                  dark:text-white/80
                  dark:hover:text-white
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ================= RIGHT ================= */}

          <div className="flex shrink-0 items-center gap-2">
            {/* SERVICES */}

            <button
              onClick={() =>
                setServiceOpen(true)
              }
              className="
                hidden
                h-[48px]
                items-center
                gap-2
                rounded-2xl
                border
                border-white/20
                bg-white/30
                px-4
                text-sm
                font-semibold
                text-black
                shadow-lg
                backdrop-blur-xl
                transition-all
                duration-300

                hover:scale-105
                hover:bg-white/50

                md:flex

                dark:border-slate-700/40
                dark:bg-slate-800/70
                dark:text-white
              "
            >
              <Settings size={18} />

              Services
            </button>

            {/* SETTINGS CTA */}

            <Link
              href="/settings"
              className="
                hidden
                h-[48px]
                w-[48px]
                items-center
                justify-center
                rounded-2xl
                border
                border-white/20
                bg-white/30
                text-black
                shadow-lg
                backdrop-blur-xl
                transition-all
                duration-300

                hover:scale-105
                hover:bg-green-500
                hover:text-white

                md:flex

                dark:border-slate-700/40
                dark:bg-slate-800/70
                dark:text-white
              "
            >
              <Settings size={20} />
            </Link>

            {/* ACTION BUTTONS */}

            {actionButtons.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`
                    hidden
                    h-[48px]
                    items-center
                    gap-2
                    rounded-2xl
                    px-4
                    text-sm
                    font-semibold
                    transition-all
                    duration-300

                    hover:scale-105

                    md:flex

                    ${
                      item.gradient
                        ? `
                          bg-gradient-to-r
                          from-green-500
                          to-emerald-600
                          text-white
                          shadow-[0_8px_24px_rgba(34,197,94,0.35)]

                          hover:from-green-600
                          hover:to-emerald-700
                        `
                        : `
                          border
                          border-white/20
                          bg-white/30
                          text-black
                          shadow-lg
                          backdrop-blur-xl

                          hover:bg-white/50

                          dark:border-slate-700/40
                          dark:bg-slate-800/70
                          dark:text-white
                        `
                    }
                  `}
                >
                  <Icon size={18} />

                  {item.label}
                </Link>
              );
            })}

            {/* LOGIN */}

            <Link
              href="/login"
              className="
                hidden
                h-[48px]
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-gradient-to-r
                from-slate-900
                to-slate-700
                px-5
                text-sm
                font-bold
                text-white
                shadow-lg
                transition-all
                duration-300

                hover:scale-105

                md:flex
              "
            >
              <LogIn size={18} />

              LOGIN
            </Link>

            {/* MOBILE MENU */}

            <button
              onClick={() =>
                setOpen(true)
              }
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/30
                backdrop-blur-md

                lg:hidden

                dark:border-slate-700/40
                dark:bg-slate-800/70
              "
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE OVERLAY ================= */}

      <div
        onClick={() =>
          setOpen(false)
        }
        className={`
          fixed
          inset-0
          z-[90]
          bg-black/40
          backdrop-blur-sm
          transition-all
          duration-500

          ${
            open
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      />

      {/* ================= MOBILE SIDEBAR ================= */}

      <aside
        className={`
          fixed
          right-0
          top-0
          z-[100]
          h-screen
          w-[300px]
          overflow-y-auto
          border-l
          border-white/20
          bg-white/20
          p-6
          backdrop-blur-2xl
          transition-all
          duration-500

          dark:border-slate-700/40
          dark:bg-slate-900/80

          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* CLOSE */}

        <div className="flex justify-end">
          <button
            onClick={() =>
              setOpen(false)
            }
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/30

              dark:border-slate-700/40
              dark:bg-slate-800/70
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* MOBILE NAV */}

        <nav className="mt-12 flex flex-col gap-5">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() =>
                setOpen(false)
              }
              className="
                text-2xl
                font-bold
                text-black/80
                transition-all
                duration-300

                hover:translate-x-2
                hover:text-green-700

                dark:text-white/80
              "
            >
              {item.label}
            </Link>
          ))}

          {/* MOBILE SERVICES */}

          <button
            onClick={() => {
              setOpen(false);
              setServiceOpen(true);
            }}
            className="
              mt-5
              flex
              h-[54px]
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-white/20
              bg-white/30
              text-lg
              font-bold
              text-black
              transition-all
              duration-300

              hover:bg-white/50

              dark:border-slate-700/40
              dark:bg-slate-800/70
              dark:text-white
            "
          >
            <Settings size={20} />

            Services
          </button>

          {/* MOBILE SETTINGS */}

          <Link
            href="/settings"
            onClick={() =>
              setOpen(false)
            }
            className="
              flex
              h-[54px]
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-white/20
              bg-white/30
              text-lg
              font-bold
              text-black
              transition-all
              duration-300

              hover:bg-green-500
              hover:text-white

              dark:border-slate-700/40
              dark:bg-slate-800/70
              dark:text-white
            "
          >
            <Settings size={20} />

            Settings
          </Link>

          {/* ACTION BUTTONS */}

          {actionButtons.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() =>
                  setOpen(false)
                }
                className={`
                  flex
                  h-[54px]
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  text-lg
                  font-bold
                  transition-all
                  duration-300

                  ${
                    item.gradient
                      ? `
                        bg-gradient-to-r
                        from-green-500
                        to-emerald-600
                        text-white
                        shadow-lg

                        hover:from-green-600
                        hover:to-emerald-700
                      `
                      : `
                        border
                        border-white/20
                        bg-white/30
                        text-black

                        hover:bg-white/50

                        dark:border-slate-700/40
                        dark:bg-slate-800/70
                        dark:text-white
                      `
                  }
                `}
              >
                <Icon size={20} />

                {item.label}
              </Link>
            );
          })}

          {/* LOGIN */}

          <Link
            href="/login"
            onClick={() =>
              setOpen(false)
            }
            className="
              flex
              h-[54px]
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-gradient-to-r
              from-slate-900
              to-slate-700
              text-lg
              font-bold
              text-white
              shadow-lg
              transition-all
              duration-300

              hover:opacity-90
            "
          >
            <LogIn size={20} />

            Login
          </Link>
        </nav>
      </aside>

      {/* ================= SERVICE OVERLAY ================= */}

      <div
        onClick={() =>
          setServiceOpen(false)
        }
        className={`
          fixed
          inset-0
          z-[120]
          bg-black/40
          backdrop-blur-sm
          transition-all
          duration-300

          ${
            serviceOpen
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
      />

      {/* ================= SERVICE SIDEBAR ================= */}

      <aside
        className={`
          fixed
          right-0
          top-0
          z-[130]
          h-screen
          w-[340px]
          overflow-y-auto
          border-l
          border-white/20
          bg-white/70
          p-6
          backdrop-blur-2xl
          transition-all
          duration-500

          dark:border-slate-700/40
          dark:bg-slate-900/80

          ${
            serviceOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* SERVICE HEADER */}

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Services
            </h2>

            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              JAN GAN MAN Super App
            </p>
          </div>

          <button
            onClick={() =>
              setServiceOpen(false)
            }
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-2xl
              bg-white/60

              dark:bg-slate-800
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* SERVICES LIST */}

        <div className="mt-10 grid gap-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <button
                key={service.title}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  rounded-[24px]
                  border
                  border-white/30
                  bg-white/60
                  p-4
                  transition-all
                  duration-300

                  hover:scale-[1.02]
                  hover:bg-green-50

                  dark:border-slate-700/40
                  dark:bg-slate-800/70
                  dark:hover:bg-slate-700
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-green-100
                    text-green-700
                    transition-transform
                    duration-300

                    group-hover:scale-110
                  "
                >
                  <Icon size={22} />
                </div>

                <div className="text-left">
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Digital Rural Service
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
}