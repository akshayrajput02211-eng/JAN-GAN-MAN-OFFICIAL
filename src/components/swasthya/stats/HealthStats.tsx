import GlassCard from "@/components/swasthyashared/cards/GlassCard";

const stats = [
  {
    title: "Steps",
    value: "4,231",
    color: "bg-green-500",
  },
  {
    title: "Water",
    value: "5 / 8",
    color: "bg-blue-500",
  },
  {
    title: "Sleep",
    value: "6.5 hrs",
    color: "bg-violet-500",
  },
  {
    title: "Heart Rate",
    value: "72 bpm",
    color: "bg-pink-500",
  },
];

export default function HealthStats() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-3xl font-black text-slate-900">
          Health at a Glance
        </h2>

        <p className="mt-2 text-slate-500">
          Track your daily health.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <GlassCard
            key={item.title}
            className="p-6"
          >
            <h3 className="text-sm text-slate-500">
              {item.title}
            </h3>

            <p className="mt-3 text-3xl font-black">
              {item.value}
            </p>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-neutral-100">
              <div
                className={`h-full w-[70%] rounded-full ${item.color}`}
              />
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}