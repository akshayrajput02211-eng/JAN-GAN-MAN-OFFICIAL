import OverviewStats from "./OverviewStats";
import PoliceIllustration from "./PoliceIllustration";

export default function AreaOverview() {
  return (
    <section
      className="
      rounded-[32px]
      border border-white/70
      bg-white/70 p-6
      backdrop-blur-xl
    "
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black">
          Area Overview
        </h2>

        <button className="text-sm text-green-600">
          View Details
        </button>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <OverviewStats />

        <PoliceIllustration />
      </div>
    </section>
  );
}