

import Hero from "@/components/landing/hero/Hero";

import ServiceGrid from "@/components/landing/services/ServiceGrid";

import { AskBanner } from "@/components/landing/ask-banner/AskBanner";

import { UpdatesSection } from "@/components/landing/updates/UpdatesSection";

import { PremiumFooter } from "@/components/landing/footer/PremiumFooter";

import { services } from "@/data/services";

import { updates } from "@/data/updates";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <ServiceGrid services={services} />

      <AskBanner />

      <UpdatesSection updates={updates} />

      <PremiumFooter />
    </main>
  );
}