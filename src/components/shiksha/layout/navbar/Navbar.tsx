// ================================
// components/layout/navbar/Navbar.tsx
// ================================

"use client";

import { useState } from "react";

import Container from "../container/Container";

import PrimaryButton from "@/components/shiksha/shared/buttons/PrimaryButton";

import NavLinks from "./NavLinks";

import {
  Bell,
  Menu,
  Settings,
} from "lucide-react";

import ServiceSidebar from "@/components/cta/service-sidebar/ServiceSidebar";

export default function Navbar() {
  const [serviceOpen, setServiceOpen] =
    useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 py-4">
        <Container>
          <div
            className="
              rounded-full
              border
              border-white/40
              bg-white/70
              px-6
              py-4
              shadow-lg
              backdrop-blur-xl

              dark:border-slate-700/40
              dark:bg-slate-800/70

              flex
              items-center
              justify-between
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
                  bg-blue-600
                  text-xl
                  font-black
                  text-white
                "
              >
                S
              </div>

              <div>
                <h1
                  className="
                    text-xl
                    font-bold
                    text-gray-900

                    dark:text-white
                  "
                >
                  Shiksha
                </h1>

                <p
                  className="
                    text-sm
                    text-gray-500

                    dark:text-slate-400
                  "
                >
                  Learn Better
                </p>
              </div>
            </div>

            {/* ================= NAV LINKS ================= */}

            <NavLinks />

            {/* ================= RIGHT SIDE ================= */}

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
                  h-12
                  rounded-full
                  bg-gradient-to-r
                  from-blue-600
                  to-blue-700
                  px-5
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

                <span>Services</span>
              </button>

              {/* NOTIFICATION */}

              <button
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  bg-white
                  shadow
                  transition-all
                  hover:scale-105

                  dark:border-slate-700
                  dark:bg-slate-800
                  dark:text-white
                "
              >
                <Bell size={18} />
              </button>

              {/* PROFILE */}

              <PrimaryButton>
                My Profile
              </PrimaryButton>

              {/* MOBILE BUTTON */}

              <button
                onClick={() =>
                  setServiceOpen(true)
                }
                className="
                  flex
                  lg:hidden
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  bg-white
                  shadow
                  transition-all
                  hover:scale-105

                  dark:border-slate-700
                  dark:bg-slate-800
                  dark:text-white
                "
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* ================= SERVICE SIDEBAR ================= */}

      <ServiceSidebar
        open={serviceOpen}
        setOpen={setServiceOpen}
      />
    </>
  );
}