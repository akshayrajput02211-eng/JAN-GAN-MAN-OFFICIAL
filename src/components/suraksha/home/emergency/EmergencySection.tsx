import EmergencyGrid from "./EmergencyGrid";
import SOSButton from "./SOSButton";

export default function EmergencySection() {
  return (
    <section
      className="
      flex flex-col gap-10
      rounded-[32px]
      border border-red-100
      bg-gradient-to-r
      from-red-500 to-blue-800
      p-8 lg:flex-row
      lg:items-center
      lg:justify-between
    "
    >
      <EmergencyGrid />

      <SOSButton />
    </section>
  );
}