"use client";

import Container from "../container/Container";

import PrimaryButton from "@/components/shiksha/shared/buttons/PrimaryButton";

import NavLinks from "./NavLinks";

import { Bell } from "lucide-react";

export default function Navbar() {
  return (
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
          {/* Logo */}
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
              <h1 className="text-xl font-bold">
                Shiksha
              </h1>

              <p className="text-sm text-gray-500">
                Learn Better
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <NavLinks />

          {/* Right Side */}
          <div className="flex items-center gap-4">
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

            <PrimaryButton>
              My Profile
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </header>
  );
}