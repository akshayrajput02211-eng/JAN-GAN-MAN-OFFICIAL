"use client";

import { useState } from "react";

import "@/styles/animations.css";

import Navbar from "@/components/naukri/shared/Navbar";

import BottomNav from "@/components/naukri/navbar/BottomNav";

import HeroSection from "@/components/naukri/hero/HeroSection";
import JobsSection from "@/components/naukri/jobs/JobsSection";
import HowItWorks from "@/components/naukri/process/HowItWorks";
import StatsSection from "@/components/naukri/process/StatsSection";

import ServiceSidebar from "@/components/cta/service-sidebar/ServiceSidebar";

export default function NaukriPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main
      className="
        relative

        min-h-screen

        overflow-x-hidden

        bg-[#f5f7fb]
        dark:bg-gradient-to-br
        dark:from-[#020617]
        dark:via-[#0f172a]
        dark:to-[#111827]

        transition-colors
        duration-500
      "
    >
      {/* ================= GLOBAL BG EFFECT ================= */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          overflow-hidden
        "
      >
        {/* LIGHT MODE BG */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(76,29,149,0.08),transparent_35%)]

            dark:hidden
          "
        />

        {/* DARK MODE BG */}

        <div
          className="
            hidden
            dark:block

            absolute
            inset-0
          "
        >
          {/* LEFT GLOW */}

          <div
            className="
              absolute
              left-[-180px]
              top-[-180px]

              h-[420px]
              w-[420px]

              rounded-full

              bg-[#7c3aed]/20

              blur-3xl
            "
          />

          {/* RIGHT GLOW */}

          <div
            className="
              absolute
              bottom-[-180px]
              right-[-180px]

              h-[420px]
              w-[420px]

              rounded-full

              bg-[#4c1d95]/20

              blur-3xl
            "
          />

          {/* GRID */}

          <div
            className="
              absolute
              inset-0

              opacity-[0.04]

              [background-image:linear-gradient(to_right,#7c3aed_1px,transparent_1px),linear-gradient(to_bottom,#7c3aed_1px,transparent_1px)]

              [background-size:60px_60px]
            "
          />
        </div>
      </div>

      {/* ================= NAVBAR ================= */}

      <Navbar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* ================= SIDEBAR ================= */}

      <ServiceSidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      {/* ================= PAGE CONTENT ================= */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[1440px]

          px-4

          pt-32
          pb-40
        "
      >
        <HeroSection />

        <JobsSection />

        <HowItWorks />

        <StatsSection />
      </div>

      {/* ================= BOTTOM NAV ================= */}

      <BottomNav />
    </main>
  );
}