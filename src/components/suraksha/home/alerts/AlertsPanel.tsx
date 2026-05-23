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
      bg-white/70 p-6
      backdrop-blur-xl
    "
    >
      <div className="flex justify-between">
        <h2 className="text-2xl font-black">
          Local Alerts
        </h2>

        <button className="text-green-600">
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