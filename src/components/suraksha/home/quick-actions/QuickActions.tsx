import {
  FileText,
  MapPin,
  Shield,
  Search,
  Siren,
  Grid2X2,
} from "lucide-react";

const actions = [
  {
    title: "Register Complaint",
    icon: FileText,
  },
  {
    title: "Nearest Police",
    icon: MapPin,
  },
  {
    title: "Women Safety",
    icon: Shield,
  },
  {
    title: "Cyber Crime",
    icon: Search,
  },
  {
    title: "Emergency",
    icon: Siren,
  },
  {
    title: "More",
    icon: Grid2X2,
  },
];

export default function QuickActions() {
  return (
    <section className="section-spacing">
      <div
        className="
        grid gap-4
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-6
      "
      >
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="
              glass-card premium-shadow hover-lift
              rounded-[28px]
              p-6 text-left
            "
            >
              <div
                className="
                mb-5 flex h-14 w-14 items-center
                justify-center rounded-2xl
                bg-gradient-to-br
                from-green-100
                to-blue-100
              "
              >
                <Icon className="text-green-600" />
              </div>

              <h3 className="font-semibold text-slate-900">
                {action.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Quick Access
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}