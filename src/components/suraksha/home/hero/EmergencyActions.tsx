import { Phone, ShieldAlert } from "lucide-react";

export default function EmergencyActions() {
  return (
    <div className="flex flex-wrap gap-4">
      <button
        className="
          flex items-center gap-3

          rounded-2xl

          bg-red-600

          px-6 py-4

          font-semibold
          text-white

          transition-all duration-300

          hover:scale-105
          hover:bg-red-700
        "
      >
        <ShieldAlert />

        SOS Emergency
      </button>

      <button
        className="
          flex items-center gap-3

          rounded-2xl

          border border-white/70

          bg-white

          px-6 py-4

          font-semibold
          text-slate-800

          shadow-sm

          transition-all duration-300

          hover:scale-105

          dark:border-slate-700/50
          dark:bg-slate-800
          dark:text-white
        "
      >
        <Phone />

        Get Police Help
      </button>
    </div>
  );
}