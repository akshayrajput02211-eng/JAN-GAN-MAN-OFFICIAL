"use client";

import { useState } from "react";

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

  return (
    <>
      <header
        className="
          sticky top-0 z-50

          border-b border-white/50

          bg-white/70

          backdrop-blur-2xl
        "
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
                from-blue-600
                to-green-500

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
                "
              >
                Suraksha Setu
              </h2>

              <p
                className="
                  text-xs
                  text-slate-500
                "
              >
                Aapki Suraksha
              </p>
            </div>
          </div>

          {/* ================= CTA NAVIGATION ================= */}

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
                    hover:bg-green-50
                    hover:text-green-600
                    hover:shadow-lg
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
            {/* SERVICES BUTTON */}

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
                from-blue-600
                to-green-500

                px-5
                py-3

                text-sm
                font-bold

                text-white

                shadow-[0_10px_30px_rgba(37,99,235,0.25)]

                transition-all
                duration-300

                hover:scale-105
              "
            >
              <Settings size={18} />

              Services
            </button>

            {/* EMERGENCY CTA */}

            <button
              className="
                hidden
                md:flex

                items-center
                gap-2

                rounded-2xl

                bg-red-500

                px-5
                py-3

                font-semibold
                text-white

                shadow-lg

                transition-all
                duration-300

                hover:scale-105
                hover:bg-red-600
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

                bg-white

                p-3

                shadow-sm

                transition-all
                duration-300

                hover:scale-105
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

                p-2

                transition

                hover:bg-white/70

                lg:hidden
              "
            >
              <Menu />
            </button>
          </div>
        </div>
      </header>

      {/* ================= SERVICE SIDEBAR ================= */}

      <ServiceSidebar
        open={serviceOpen}
        setOpen={setServiceOpen}
      />
    </>
  );
}