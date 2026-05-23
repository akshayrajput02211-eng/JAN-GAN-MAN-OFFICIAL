const stats = [
  {
    title: "Nearest Police Station",
    value: "Rampur Police Station",
  },
  {
    title: "Patrol Status",
    value: "Active",
  },
  {
    title: "Area Safety",
    value: "Good",
  },
  {
    title: "Traffic Status",
    value: "Normal",
  },
];

export default function OverviewStats() {
  return (
    <div className="space-y-5">
      {stats.map((item) => (
        <div
          key={item.title}
          className="
          rounded-2xl bg-slate-50 p-4
        "
        >
          <p className="text-sm text-slate-500">
            {item.title}
          </p>

          <h3 className="mt-1 font-bold">
            {item.value}
          </h3>
        </div>
      ))}
    </div>
  );
}