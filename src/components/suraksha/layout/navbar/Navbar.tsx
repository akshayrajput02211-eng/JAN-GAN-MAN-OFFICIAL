"use client";

import { useEffect, useState } from "react";

import {
  Bell,
  Menu,
  Shield,
  PhoneCall,
  FileWarning,
  Siren,
  MapPinned,
  Settings,
} from "lucide-react";

import UserProfile from "./UserProfile";

import ServiceSidebar from "@/components/cta/service-sidebar/ServiceSidebar";

const navItems = [
  {
    label: "Emergency",
    icon: Siren,
  },
  {
    label: "Complaints",
    icon: FileWarning,
  },
  {
    label: "Nearby Police",
    icon: MapPinned,
  },
];

export default function Navbar() {
  const [serviceOpen, setServiceOpen] =
    useState(false);

  const [isScrolled, setIsScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    <>
      <header
        className={`
          fixed
          top-0
          left-0
          right-0

          z-[9999]

          border-b

          backdrop-blur-2xl

          transition-all
          duration-300

          ${
            isScrolled
              ? `
                border-slate-700/40
                bg-slate-900/90
                shadow-2xl
              `
              : `
                border-white/50
                bg-white/70

                dark:border-slate-700/40
                dark:bg-slate-900/80
              `
          }
        `}
      >
        <div
          className="
            mx-auto

            flex
            h-20
            max-w-7xl

            items-center
            justify-between

            px-4
            lg:px-8
          "
        >
          {/* ================= LOGO ================= */}

          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-12
                w-12

                items-center
                justify-center

                rounded-2xl

                bg-gradient-to-br
                from-blue-900
                to-blue-700

                text-white

                shadow-lg
              "
            >
              <Shield size={24} />
            </div>

            <div>
              <h2
                className="
                  font-bold
                  text-slate-900

                  dark:text-white
                "
              >
                Suraksha Setu
              </h2>

              <p
                className="
                  text-xs
                  text-slate-500

                  dark:text-slate-400
                "
              >
                Aapki Suraksha
              </p>
            </div>
          </div>

          {/* ================= NAV ITEMS ================= */}

          <nav
            className="
              hidden
              lg:flex

              items-center
              gap-4
            "
          >
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  className="
                    flex
                    items-center
                    gap-2

                    rounded-2xl

                    border
                    border-white/50

                    bg-white/80

                    px-4
                    py-3

                    text-sm
                    font-semibold

                    text-slate-700

                    shadow-sm

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:bg-blue-50
                    hover:text-blue-900
                    hover:shadow-lg

                    dark:border-slate-700/40
                    dark:bg-slate-800/80
                    dark:text-slate-200

                    dark:hover:bg-slate-700/70
                    dark:hover:text-white
                  "
                >
                  <Icon size={18} />

                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* ================= RIGHT SECTION ================= */}

          <div className="flex items-center gap-4">
            {/* SERVICES */}

            <button
              onClick={() =>
                setServiceOpen(true)
              }
              className="
                hidden
                lg:flex

                items-center
                gap-2

                rounded-2xl

                bg-gradient-to-r
                from-blue-900
                to-blue-700

                px-5
                py-3

                text-sm
                font-bold

                text-white

                shadow-[0_10px_30px_rgba(30,58,138,0.35)]

                transition-all
                duration-300

                hover:scale-105
              "
            >
              <Settings size={18} />

              Services
            </button>

            {/* SOS BUTTON */}

            <button
              className="
                hidden
                md:flex

                items-center
                gap-2

                rounded-2xl

                bg-red-600

                px-5
                py-3

                font-semibold
                text-white

                shadow-lg

                transition-all
                duration-300

                hover:scale-105
                hover:bg-red-700
              "
            >
              <PhoneCall size={18} />

              SOS Help
            </button>

            {/* NOTIFICATION */}

            <button
              className="
                relative

                rounded-2xl

                border
                border-white/50

                bg-white

                p-3

                shadow-sm

                transition-all
                duration-300

                hover:scale-105

                dark:border-slate-700/40
                dark:bg-slate-800
                dark:text-white
              "
            >
              <Bell size={18} />

              <span
                className="
                  absolute
                  right-2
                  top-2

                  h-2
                  w-2

                  rounded-full

                  bg-red-500
                "
              />
            </button>

            {/* PROFILE */}

            <div className="hidden md:block">
              <UserProfile />
            </div>

            {/* MOBILE MENU */}

            <button
              onClick={() =>
                setServiceOpen(true)
              }
              className="
                rounded-xl

                border
                border-white/50

                bg-white/70

                p-2

                transition-all
                duration-300

                hover:bg-white/70

                dark:border-slate-700/40
                dark:bg-slate-800
                dark:text-white

                dark:hover:bg-slate-700/70

                lg:hidden
              "
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {/* NAVBAR SPACE FIX */}

      <div className="h-20" />

      {/* ================= SIDEBAR ================= */}

      <ServiceSidebar
        open={serviceOpen}
        setOpen={setServiceOpen}
      />
    </>
  );
}