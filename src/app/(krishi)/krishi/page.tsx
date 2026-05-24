import Navbar from "@/components/krishi/layout/navbar/Navbar";
import Footer from "@/components/krishi/layout/footer/Footer";

import HeroSection from "@/components/krishi/krishi/HeroSection";
import FarmerStats from "@/components/krishi/krishi/stats/FarmerStats";
import KhetSection from "@/components/krishi/krishi/khets/KhetSection";
import MandiSection from "@/components/krishi/krishi/mandi/MandiSection";
import AISection from "@/components/krishi/krishi/ai/AISection";
import CropHealth from "@/components/krishi/krishi/crop-monitor/CropHealth";
import SchemeSection from "@/components/krishi/krishi/schemes/SchemeSection";
import FarmingCalendar from "@/components/krishi/krishi/calendar/FarmingCalendar";
import MetricsSection from "@/components/krishi/krishi/metrics/MetricsSection";

export default function KrishiPage() {
  return (
    <main
      className="
      relative overflow-hidden

      bg-[#dcfce7]
      dark:bg-[#020617]

      transition-colors duration-300
    "
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
          absolute -top-40 -left-32
          h-[420px] w-[420px]
          rounded-full
          bg-[#16a34a]/10
          blur-3xl
        "
        />

        <div
          className="
          absolute bottom-0 right-0
          h-[380px] w-[380px]
          rounded-full
          bg-[#065f46]/10
          blur-3xl
        "
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div
        className="
        relative z-10

        mx-auto
        max-w-7xl

        space-y-8

        px-4 py-6

        md:px-6
        lg:px-8
      "
      >
        <HeroSection />

        <FarmerStats />

        <KhetSection />

        <MandiSection />

        {/* AI + Crop */}
        <div
          className="
          grid gap-6

          lg:grid-cols-2
        "
        >
          <AISection />

          <CropHealth />
        </div>

        <SchemeSection />

        <FarmingCalendar />

        <MetricsSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}