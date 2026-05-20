export default function FilterSidebar() {
  return (
    <div className="rounded-[30px] bg-white p-8 shadow-sm">
      <h3 className="text-3xl font-black text-[#1b2452]">
        Filter Jobs
      </h3>

      <div className="mt-8 space-y-5">
        <input
          placeholder="Kaun sa kaam?"
          className="w-full rounded-2xl border px-5 py-4"
        />

        <input
          placeholder="Location"
          className="w-full rounded-2xl border px-5 py-4"
        />

        <input type="range" className="w-full" />

        <button className="w-full rounded-2xl bg-blue-600 py-4 font-bold text-white">
          Apply Filter
        </button>
      </div>
    </div>
  );
}