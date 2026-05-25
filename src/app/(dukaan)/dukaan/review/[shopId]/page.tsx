// ========================================
// FILE: src/app/(dukaan)/dukaan/review/[shopId]/page.tsx
// ========================================

import ReviewHeader from "@/components/dukaan/review/ReviewHeader";
import WriteReview from "@/components/dukaan/review/WriteReview";
import ReviewList from "@/components/dukaan/review/ReviewList";

export default function ReviewPage() {
  return (
    <main className="min-h-screen bg-[#f4f8ff] py-6 dark:bg-[#07111f]">
      <div className="mx-auto max-w-5xl space-y-6 px-4 lg:px-6">
        <ReviewHeader />

        <WriteReview />

        <ReviewList />
      </div>
    </main>
  );
}