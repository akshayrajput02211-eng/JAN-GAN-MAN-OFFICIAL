
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
    <main className="relative overflow-hidden bg-[#f7fff8]">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8 space-y-8">
        <HeroSection />
        <FarmerStats />
        <KhetSection />
        <MandiSection />

        <div className="grid gap-6 lg:grid-cols-2">
          <AISection />
          <CropHealth />
        </div>

        <SchemeSection />
        <FarmingCalendar />
        <MetricsSection />
      </div>

      <Footer />
    </main>
  );
}