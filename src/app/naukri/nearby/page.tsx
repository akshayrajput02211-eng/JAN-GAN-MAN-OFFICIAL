// ========================================
// FILE: src/app/naukri/nearby/page.tsx
// ========================================

import NearbyHero from "@/components/naukri/nearby/NearbyHero";
import NearbyJobList from "@/components/naukri/nearby/NearbyJobList";

export default function NearbyJobsPage() {
  return (
    <main className="min-h-screen bg-[#f4f8ff] dark:bg-[#07111f]">
      <NearbyHero />
      <NearbyJobList />
    </main>
  );
}