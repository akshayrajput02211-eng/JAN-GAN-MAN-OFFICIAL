import AwarenessCard from "./AwarenessCard";

export default function AwarenessSection() {
  return (
    <section>
      <div className="mb-8 flex justify-between">
        <h2 className="text-3xl font-black">
          Safety Awareness
        </h2>

        <button className="text-green-600">
          View All
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <AwarenessCard title="Cyber Scam" />
        <AwarenessCard title="Women Safety" />
        <AwarenessCard title="Child Safety" />
        <AwarenessCard title="Traffic Rules" />
      </div>
    </section>
  );
}