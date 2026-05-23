

import MetricCard from "./MetricCard";

const metrics = [
  {
    value: "50K+",
    label: "Kisan Judey",
  },
  {
    value: "1.2L+",
    label: "Khet Registered",
  },
  {
    value: "2L+",
    label: "Fasal Listings",
  },
  {
    value: "24/7",
    label: "Sahayata",
  },
];

export default function MetricsSection() {
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((item, i) => (
        <MetricCard
          key={i}
          value={item.value}
          label={item.label}
        />
      ))}
    </section>
  );
}