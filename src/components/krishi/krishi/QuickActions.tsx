

const actions = [
  "Mandi Bhaav",
  "Documents",
  "Weather Alert",
  "AI Sahayak",
];

export default function QuickActions() {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {actions.map((item, i) => (
        <button
          key={i}
          className="
          rounded-2xl border border-white/40
          bg-white/70 px-5 py-3
          text-sm font-medium text-slate-700
          backdrop-blur-xl
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-lg
        "
        >
          {item}
        </button>
      ))}
    </div>
  );
}