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
    <main className="min-h-screen overflow-x-hidden bg-[#f5f7fb]">
      {/* NAVBAR */}

      <Navbar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* SIDEBAR */}

      <ServiceSidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      {/* PAGE CONTENT */}

      <div
        className="
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

      {/* BOTTOM NAV */}

      <BottomNav />
    </main>
  );
}