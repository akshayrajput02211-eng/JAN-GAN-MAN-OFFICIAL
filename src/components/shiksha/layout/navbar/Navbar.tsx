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
              glass

              rounded-full

              px-6
              py-4

              flex
              items-center
              justify-between

              shadow-lg
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

                  bg-green-600

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
                  "
                >
                  Shiksha
                </h1>

                <p
                  className="
                    text-sm
                    text-gray-500
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
                  from-green-500
                  to-emerald-600

                  px-5

                  text-white
                  font-bold

                  shadow-[0_10px_30px_rgba(34,197,94,0.25)]

                  transition-all
                  duration-300

                  hover:scale-105
                "
              >
                <Settings size={18} />

                <span className="text-sm">
                  Services
                </span>
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

                  bg-white

                  shadow

                  transition-all

                  hover:scale-105
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

                  bg-white

                  shadow

                  transition-all

                  hover:scale-105
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