

import SectionTitle from "@/components/krishi/shared/section-title/SectionTitle";
import SchemeCard from "./SchemeCard";

export default function SchemeSection() {
  return (
    <section>
      <SectionTitle
        title="Sarkari Yojanayein"
        subtitle="Govt support for farmers"
        action="View All"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <SchemeCard
          title="PM Kisan"
          amount="₹6000"
        />

        <SchemeCard
          title="Fasal Bima"
          amount="Insurance"
        />

        <SchemeCard
          title="Soil Health Card"
          amount="Free"
        />

        <SchemeCard
          title="Kisan Credit"
          amount="Loan"
        />
      </div>
    </section>
  );
}