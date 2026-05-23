
const tools = [
  "Pest Detector",
  "Fertilizer Guide",
  "Weather Radar",
  "Spray Reminder",
];

export default function QuickTools() {
  return (
    <div
      className="
      rounded-[30px]
      border border-white/40
      bg-white/70 p-6
      backdrop-blur-2xl
    "
    >
      <h2 className="text-2xl font-black text-slate-900">
        Quick Tools
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {tools.map((tool, i) => (
          <button
            key={i}
            className="
            rounded-2xl bg-white p-5
            text-sm font-semibold text-slate-700
            transition-all duration-300
            hover:-translate-y-1
            hover:bg-green-50
            hover:text-green-700
          "
          >
            {tool}
          </button>
        ))}
      </div>
    </div>
  );
}