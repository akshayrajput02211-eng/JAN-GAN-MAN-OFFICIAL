// ========================================
// FILE: src/app/naukri/post-job/page.tsx
// ========================================

import PostJobHero from "@/components/naukri/post-job/PostJobHero";
import PostJobForm from "@/components/naukri/post-job/PostJobForms";
import FeatureStrip from "@/components/naukri/hero/FeatureStrip";

export default function PostJobPage() {
  return (
    <main className="min-h-screen bg-[#f4f8ff] dark:bg-[#07111f]">
      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <PostJobHero />

        <FeatureStrip />

        <PostJobForm />
      </div>
    </main>
  );
}