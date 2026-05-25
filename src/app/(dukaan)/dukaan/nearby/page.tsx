// ========================================
// FILE: src/app/(dukaan)/dukaan/nearby/page.tsx
// ========================================

import NearbyHeader from "@/components/dukaan/nearby/NearbyHeader";
import CategoryFilter from "@/components/dukaan/nearby/CategoryFilter";
import ShopListView from "@/components/dukaan/nearby/ShopListView";

export default function NearbyDukaanPage() {
  return (
    <main className="min-h-screen bg-[#f4f8ff] dark:bg-[#07111f]">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8">
        <NearbyHeader />

        <div className="mt-6">
          <CategoryFilter />
        </div>

        <div className="mt-6">
          <ShopListView />
        </div>
      </div>
    </main>
  );
}