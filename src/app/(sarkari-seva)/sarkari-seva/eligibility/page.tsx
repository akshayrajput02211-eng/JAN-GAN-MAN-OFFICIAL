// ========================================
// FILE: src/app/sarkari-seva/eligibility/page.tsx
// ========================================

import EligibilityHero from "@/components/sarkari-seva/eligibility/EligibilityHero";
import EligibilityForm from "@/components/sarkari-seva/eligibility/EligibilityForm";

export default function EligibilityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-yellow-950/20 text-white">
      
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-120px] h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        
        {/* HERO */}
        <EligibilityHero />

        {/* FORM */}
        <div className="mt-10">
          <EligibilityForm />
        </div>

      </div>
    </main>
  );
}