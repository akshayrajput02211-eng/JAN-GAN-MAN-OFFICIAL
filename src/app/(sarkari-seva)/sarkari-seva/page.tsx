import Navbar from "@/components/sarkari-seva/layout/navbar/Navbar";

import HeroSection from "@/components/sarkari-seva/hero/HeroSection";

import UpdatesSection from "@/components/sarkari-seva/updates/UpdatesSection";

import AIAssistant from "@/components/sarkari-seva/ai/AIAssistant";

import ServicesGrid from "@/components/sarkari-seva/services/ServicesGrid";

import MandiSection from "@/components/sarkari-seva/mandi/MandiSection";
import ApplySection from "@/components/sarkari-seva/apply/ApplySection";
import CategorySection from "@/components/sarkari-seva/categories/CategorySection";
import { updates } from "@/data/sarkari-seva/updates";
import Footer from "@/components/sarkari-seva/layout/footer/Footer";
export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      <AIAssistant />
      <UpdatesSection updates={updates} />
      <ServicesGrid />
      <MandiSection />
      <ApplySection />
      <CategorySection />
      <Footer />
    </main>
  );
}