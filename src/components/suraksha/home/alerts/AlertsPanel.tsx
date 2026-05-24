import AlertItem from "./AlertItem";

const alerts = [
  {
    title: "Sadak par ped gira hua hai",
    location: "Rampur Main Road",
    time: "2h ago",
  },
  {
    title: "Police verification camp",
    location: "Panchayat Bhawan",
    time: "5h ago",
  },
];

export default function AlertsPanel() {
  return (
    <section
      className="
        rounded-[32px]

        border border-white/70

        bg-white/70

        p-6

        backdrop-blur-xl

        dark:border-slate-700/50
        dark:bg-slate-800/70
      "
    >
      <div className="flex justify-between">
        <h2
          className="
            text-2xl font-black
            text-slate-900

            dark:text-white
          "
        >
          Local Alerts
        </h2>

        <button
          className="
            font-semibold
            text-blue-800

            dark:text-blue-400
          "
        >
          View All
        </button>
      </div>

      <div className="mt-8 space-y-4">
        {alerts.map((alert) => (
          <AlertItem
            key={alert.title}
            {...alert}
          />
        ))}
      </div>
    </section>
  );
}