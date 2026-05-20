const stats = [
  "5000+ Roz ke Live Jobs",
  "2500+ Khush Users",
  "24 Hrs Live Guarantee",
  "Auto Daily Refresh",
];

export default function StatsSection() {
  return (
    <section className="mt-8 mb-10 grid overflow-hidden rounded-[35px] bg-[#eef8ec] lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat}
          className="border-r px-10 py-10"
        >
          <h3 className="text-4xl font-black text-green-700">
            {stat.split(" ")[0]}
          </h3>

          <p className="mt-3 text-lg font-semibold text-[#1b2452]">
            {stat.replace(stat.split(" ")[0], "")}
          </p>
        </div>
      ))}
    </section>
  );
}