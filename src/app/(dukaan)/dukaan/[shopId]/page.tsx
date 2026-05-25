// ========================================
// FILE: src/app/(dukaan)/dukaan/[shopId]/page.tsx
// ========================================

import ShopHeader from "@/components/dukaan/shop/ShopHeader";
import CategoryNav from "@/components/dukaan/shop/CategoryNav";
import ProductGrid from "@/components/dukaan/shop/ProductGrid";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#f4f8ff] pb-32 dark:bg-[#07111f]">
      <ShopHeader />

      <CategoryNav />

      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <ProductGrid />
      </div>
    </main>
  );
}