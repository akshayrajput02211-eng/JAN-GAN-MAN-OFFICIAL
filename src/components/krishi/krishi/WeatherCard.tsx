export default function WeatherCard() {
  return (
    <div
      className="
      w-full max-w-[250px]
      rounded-[28px]
      border border-white/40 dark:border-slate-700/40
      bg-white/80 dark:bg-slate-800/80
      p-5
      shadow-2xl
      backdrop-blur-2xl
    "
    >
      {/* Location */}
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Najafgarh, Delhi
      </p>

      {/* Temperature */}
      <div className="mt-4 flex items-center justify-between">
        <h2
          className="
          text-5xl font-black
          text-slate-900 dark:text-white
        "
        >
          32°
        </h2>

        <span className="text-5xl">☀️</span>
      </div>

      {/* Weather Stats */}
      <div
        className="
        mt-6 grid
        grid-cols-1 sm:grid-cols-2
        gap-4
      "
      >
        {/* Humidity */}
        <div
          className="
          rounded-2xl
          border border-white/40 dark:border-slate-700/40
          bg-white/80 dark:bg-slate-800/80
          p-3
        "
        >
          <p className="text-xs text-slate-400">
            Humidity
          </p>

          <h4
            className="
            mt-1 font-bold
            text-slate-800 dark:text-slate-200
          "
          >
            48%
          </h4>
        </div>

        {/* Wind */}
        <div
          className="
          rounded-2xl
          border border-white/40 dark:border-slate-700/40
          bg-white/80 dark:bg-slate-800/80
          p-3
        "
        >
          <p className="text-xs text-slate-400">
            Wind
          </p>

          <h4
            className="
            mt-1 font-bold
            text-slate-800 dark:text-slate-200
          "
          >
            12 km/h
          </h4>
        </div>
      </div>
    </div>
  );
}