// ========================================
// FILE: src/app/(dukaan)/dukaan/product/[productId]/page.tsx
// ========================================

import ProductImages from "@/components/dukaan/product/ProductImages";
import ProductInfo from "@/components/dukaan/product/ProductInfo";
import ProductActions from "@/components/dukaan/product/ProductActions";
import ProductDetails from "@/components/dukaan/product/ProductDetails";
import SimilarProducts from "@/components/dukaan/product/SimilarProducts";

export default function ProductDetailPage() {
  return (
    <main className="min-h-screen bg-[#f4f8ff] pb-32 dark:bg-[#07111f]">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-8
          px-4
          py-5

          lg:grid-cols-2
          lg:px-6
        "
      >
        {/* LEFT */}
        <div>
          <ProductImages />
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <ProductInfo />

          <ProductActions />

          <ProductDetails />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-10 lg:px-6">
        <SimilarProducts />
      </div>
    </main>
  );
}