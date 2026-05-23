import { Phone, ShieldAlert } from "lucide-react";

export default function EmergencyActions() {
  return (
    <div className="flex flex-wrap gap-4">
      <button
        className="
        flex items-center gap-3
        rounded-2xl bg-red-500
        px-6 py-4 font-semibold
        text-white transition
        hover:scale-105
      "
      >
        <ShieldAlert />
        SOS Emergency
      </button>

      <button
        className="
        flex items-center gap-3
        rounded-2xl bg-white
        px-6 py-4 font-semibold
        text-slate-800 shadow-sm
        transition hover:scale-105
      "
      >
        <Phone />
        Get Police Help
      </button>
    </div>
  );
}