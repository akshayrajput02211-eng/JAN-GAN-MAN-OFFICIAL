

import SectionTitle from "@/components/krishi/shared/section-title/SectionTitle";
import CropCard from "./CropCard";
import SellProductCard from "./SellProductCard";
import PriceTicker from "./PriceTicker";

export default function MandiSection() {
  return (
    <section className="space-y-6">
      <SectionTitle
        title="Mandi Bazaar"
        subtitle="Live mandi bhaav"
        action="View All"
      />

      <PriceTicker />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        <CropCard />
        <CropCard />
        <CropCard />
        <CropCard />
        <SellProductCard />
      </div>
    </section>
  );
}