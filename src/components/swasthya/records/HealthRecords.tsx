import GlassCard from "@/components/swasthyashared/cards/GlassCard";

const records = [
  "Prescriptions",
  "Lab Reports",
  "Vaccination",
  "Health Profile",
];

export default function HealthRecords() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-3xl font-black">
          Your Health Records
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {records.map((record) => (
          <GlassCard
            key={record}
            className="p-6"
          >
            <div
              className="
              flex h-14 w-14 items-center
              justify-center rounded-2xl
              bg-green-100 text-2xl
            "
            >
              📄
            </div>

            <h3 className="mt-5 text-lg font-bold">
              {record}
            </h3>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}