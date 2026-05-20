export default function JobStatusCard() {
  return (
    <div className="rounded-[30px] bg-white p-8 shadow-sm">
      <h3 className="text-3xl font-black text-[#1b2452]">
        Mera Job Status
      </h3>

      <div className="mt-6">
        <h4 className="text-2xl font-bold">
          Painter chahiye
        </h4>

        <p className="mt-3 text-green-600">
          Live for 21h 45m
        </p>

        <button className="mt-6 w-full rounded-2xl border border-blue-500 py-4 font-bold text-blue-600">
          Go to My Jobs
        </button>
      </div>
    </div>
  );
}