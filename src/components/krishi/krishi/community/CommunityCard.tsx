
export default function CommunityCard() {
  return (
    <div
      className="
      rounded-[30px]
      border border-white/40
      bg-white/70 p-6
      backdrop-blur-2xl
    "
    >
      <div className="flex items-center gap-4">
        <div
          className="
          flex h-14 w-14 items-center justify-center
          rounded-full bg-green-500
          text-white font-bold
        "
        >
          R
        </div>

        <div>
          <h3 className="font-bold text-slate-900">
            Ramesh Yadav
          </h3>

          <p className="text-sm text-slate-500">
            Delhi • 2h ago
          </p>
        </div>
      </div>

      <p className="mt-5 leading-7 text-slate-600">
        Meri gehun me peele daag aa rahe hain,
        koi upay bataye?
      </p>

      <button
        className="
        mt-6 rounded-2xl bg-green-500
        px-5 py-3 text-sm font-semibold text-white
      "
      >
        Join Discussion
      </button>
    </div>
  );
}