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
      border border-white/40 dark:border-slate-700/40
      bg-[#dcfce7]/70 dark:bg-slate-800/70
      p-6
      backdrop-blur-2xl
    "
    >
      <h2
        className="
        text-2xl font-black
        text-slate-900 dark:text-white
      "
      >
        Quick Tools
      </h2>

      <div
        className="
        mt-6 grid
        grid-cols-1 sm:grid-cols-2
        gap-4
      "
      >
        {tools.map((tool, i) => (
          <button
            key={i}
            className="
            rounded-2xl

            border border-white/40 dark:border-slate-700/40

            bg-white dark:bg-slate-800

            p-5

            text-sm font-semibold
            text-slate-700 dark:text-slate-200

            transition-all duration-300

            hover:-translate-y-1
            hover:bg-green-50
            hover:text-[#16a34a]
          "
          >
            {tool}
          </button>
        ))}
      </div>
    </div>
  );
}