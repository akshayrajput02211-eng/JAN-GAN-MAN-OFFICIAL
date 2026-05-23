import MainContainer from "@/components/suraksha/layout/containers/MainContainer";

import Navbar from "@/components/suraksha/layout/navbar/Navbar";
import Footer from "@/components/suraksha/layout/footer/Footer";

import Hero from "@/components/suraksha/home/hero/Hero";
import QuickActions from "@/components/suraksha/home/quick-actions/QuickActions";
import AreaOverview from "@/components/suraksha/home/overview/AreaOverview";
import AlertsPanel from "@/components/suraksha/home/alerts/AlertsPanel";
import EmergencySection from "@/components/suraksha/home/emergency/EmergencySection";
import ComplaintList from "@/components/suraksha/home/complaints/ComplaintList";
import Contacts from "@/components/suraksha/home/contacts/Contacts";
import Toolkit from "@/components/suraksha/home/toolkit/Toolkit";
import WomenSafetyBanner from "@/components/suraksha/home/women-safety/WomenSafetyBanner";
import AwarenessSection from "@/components/suraksha/home/awareness/AwarenessSection";
import TrustBadges from "@/components/suraksha/home/trust/TrustBadges";

export default function SurakshaPage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      <MainContainer>
        <Hero />

        <QuickActions />

        <section className="grid gap-6 lg:grid-cols-2">
          <AreaOverview />
          <AlertsPanel />
        </section>

        <EmergencySection />

        <section className="grid gap-6 xl:grid-cols-3">
          <ComplaintList />
          <Contacts />
          <Toolkit />
        </section>

        <WomenSafetyBanner />

        <AwarenessSection />

        <TrustBadges />
      </MainContainer>

      <Footer />
    </main>
  );
}