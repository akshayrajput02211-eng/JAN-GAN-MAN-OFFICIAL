// ========================================
// FILE: src/app/(dukaan)/dukaan/track/[orderId]/page.tsx
// ========================================

import TrackHeader from "@/components/dukaan/track/TrackHeader";
import TrackTimeline from "@/components/dukaan/track/TrackTimeline";
import DeliveryCard from "@/components/dukaan/track/DeliveryCard";

export default function TrackOrderPage() {
  return (
    <main className="min-h-screen bg-[#f4f8ff] py-6 dark:bg-[#07111f]">
      <div className="mx-auto max-w-4xl space-y-6 px-4 lg:px-6">
        <TrackHeader />

        <TrackTimeline />

        <DeliveryCard />
      </div>
    </main>
  );
}