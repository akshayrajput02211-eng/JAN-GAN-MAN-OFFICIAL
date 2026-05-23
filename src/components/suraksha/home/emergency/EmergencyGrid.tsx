interface EmergencyItem {
  title: string;
  number: string;
}

const emergencyItems: EmergencyItem[] = [
  {
    title: "Police",
    number: "100",
  },
  {
    title: "Ambulance",
    number: "108",
  },
  {
    title: "Women Helpline",
    number: "1091",
  },
];

export default function EmergencyGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {emergencyItems.map((item) => (
        <div
          key={item.title}
          className="
            rounded-2xl bg-white/70
            p-5 backdrop-blur-xl
            shadow-sm
          "
        >
          <h3 className="font-bold text-slate-900">
            {item.title}
          </h3>

          <p className="mt-2 text-2xl font-black text-red-500">
            {item.number}
          </p>
        </div>
      ))}
    </div>
  );
}