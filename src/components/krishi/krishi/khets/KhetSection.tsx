

import SectionTitle from "@/components/krishi/shared/section-title/SectionTitle";
import KhetCard from "./KhetCard";
import AddKhetCard from "./AddKhetCard";

export default function KhetSection() {
  return (
    <section>
      <SectionTitle
        title="Mera Khet"
        subtitle="Apni zameen ka management"
        action="View All"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <KhetCard />
        <KhetCard />
        <KhetCard />
        <AddKhetCard />
      </div>
    </section>
  );
}