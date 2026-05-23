export default function SOSButton() {
  return (
    <button
      className="
      relative flex h-40 w-40
      items-center justify-center
      rounded-full bg-red-500
      text-white shadow-[0_0_60px_rgba(239,68,68,.45)]
    "
    >
      <div
        className="
        absolute inset-0 animate-ping
        rounded-full bg-red-400/40
      "
      />

      <div className="relative text-center">
        <h2 className="text-4xl font-black">
          SOS
        </h2>

        <p className="text-sm">
          Tap To Call
        </p>
      </div>
    </button>
  );
}