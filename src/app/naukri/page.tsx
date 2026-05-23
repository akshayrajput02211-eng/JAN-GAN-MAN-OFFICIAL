import "@/styles/animations.css";

import Navbar from "@/components/naukri/shared/Navbar";

import BottomNav from "@/components/naukri/navbar/BottomNav";

import HeroSection from "@/components/naukri/hero/HeroSection";
import JobsSection from "@/components/naukri/jobs/JobsSection";
import HowItWorks from "@/components/naukri/process/HowItWorks";
import StatsSection from "@/components/naukri/process/StatsSection";

export default function NaukriPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f7fb]">
      {/* TOP NAVBAR */}

      <Navbar />

      {/* PAGE CONTENT */}

      <div
        className="
          mx-auto
          max-w-[1440px]

          px-4

          pt-28
          pb-40
        "
      >
        <HeroSection />

        <JobsSection />

        <HowItWorks />

        <StatsSection />
      </div>

      {/* STICKY BOTTOM NAV */}

      <BottomNav />
    </main>
  );
}