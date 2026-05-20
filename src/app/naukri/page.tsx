

import "@/styles/animations.css";

import Navbar from "@/components/naukri/shared/Navbar";
import HeroSection from "@/components/naukri/hero/HeroSection";
import JobsSection from "@/components/naukri/jobs/JobsSection";
import HowItWorks from "@/components/naukri/process/HowItWorks";
import StatsSection from "@/components/naukri/process/StatsSection";

export default function NaukriPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fb] overflow-x-hidden">

      <Navbar />

      <div className="mx-auto max-w-[1440px] px-4 pt-28">

        <HeroSection />

        <JobsSection />

        <HowItWorks />

        <StatsSection />

      </div>
    </main>
  );
}