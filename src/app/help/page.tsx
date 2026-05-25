// ========================================
// FILE: src/app/help/page.tsx
// ========================================

import HelpHero from "@/components/help/hero/HelpHero";
import FaqSection from "@/components/help/faq/FaqSection";
import ContactCard from "@/components/help/contact/ContactCard";
import FeedbackForm from "@/components/help/feedback/FeedbackForm";

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-[#f4f8ff] text-slate-900 dark:bg-[#07111f] dark:text-white">
      
      <HelpHero />

      <FaqSection />

      <section className="px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          
          <div className="mb-10">
            <h2 className="text-3xl font-bold">
              Sampark Sahayata
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Hamari support team aapki madad ke liye hamesha taiyaar hai.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <ContactCard
              type="call"
              title="Call Us"
              description="1800-123-4567"
            />

            <ContactCard
              type="chat"
              title="Chat With Us"
              description="Live support available"
            />

            <ContactCard
              type="email"
              title="Email Support"
              description="support@jangman.in"
            />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <FeedbackForm />
        </div>
      </section>

    </main>
  );
}