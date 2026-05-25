// ========================================
// FILE: src/app/(dukaan)/dukaan/post-shop/page.tsx
// ========================================

import PostShopHeader from "@/components/dukaan/post-shop/PostShopHeader";
import ShopBasicInfo from "@/components/dukaan/post-shop/ShopBasicInfo";
import ShopCategorySelector from "@/components/dukaan/post-shop/ShopCategorySelector";
import ShopImageUpload from "@/components/dukaan/post-shop/ShopImageUpload";
import ShopLocationForm from "@/components/dukaan/post-shop/ShopLocationForm";
import DeliveryOptions from "@/components/dukaan/post-shop/DeliveryOptions";
import ShopTimingForm from "@/components/dukaan/post-shop/ShopTimingForm";
import VerificationNotice from "@/components/dukaan/post-shop/VerificationNotice";
import SubmitShopButton from "@/components/dukaan/post-shop/SubmitShopButton";

export default function PostShopPage() {
  return (
    <main className="min-h-screen bg-[#f4f8ff] py-6 dark:bg-[#07111f]">
      <div className="mx-auto max-w-5xl space-y-6 px-4 lg:px-6">
        <PostShopHeader />

        <ShopBasicInfo />

        <ShopCategorySelector />

        <ShopImageUpload />

        <ShopLocationForm />

        <DeliveryOptions />

        <ShopTimingForm />

        <VerificationNotice />

        <SubmitShopButton />
      </div>
    </main>
  );
}