export default function EmergencyButton() {
  return (
    <button
      className="
      relative flex h-36 w-36
      items-center justify-center
      rounded-full bg-red-500
      text-center text-white
      shadow-[0_0_60px_rgba(239,68,68,.45)]
    "
    >
      <div
        className="
        absolute inset-0 animate-ping
        rounded-full bg-red-400/40
      "
      />

      <div className="relative">
        <h2 className="text-3xl font-black">
          SOS
        </h2>

        <p className="text-sm">
          Tap to Call
        </p>
      </div>
    </button>
  );
}