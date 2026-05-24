import ComplaintItem from "./ComplaintItem";

const complaints = [
  "Theft Complaint",
  "Noise Pollution",
  "Harassment",
];

export default function ComplaintList() {
  return (
    <section className="rounded-[32px] bg-slate-500 p-6 backdrop-blur-xl">
      <div className="flex justify-between">
        <h2 className="text-2xl font-black">
          My Complaints
        </h2>

        <button className="text-green-600">
          View All
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {complaints.map((item) => (
          <ComplaintItem
            key={item}
            title={item}
          />
        ))}
      </div>
    </section>
  );
}