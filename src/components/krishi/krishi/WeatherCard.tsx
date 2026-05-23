

export default function WeatherCard() {
  return (
    <div
      className="
      w-[250px]
      rounded-[28px]
      border border-white/40
      bg-white/80
      p-5
      shadow-2xl
      backdrop-blur-2xl
    "
    >
      <p className="text-sm text-slate-500">
        Najafgarh, Delhi
      </p>

      <div className="mt-4 flex items-center justify-between">
        <h2 className="text-5xl font-black text-slate-900">
          32°
        </h2>

        <span className="text-5xl">☀️</span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-slate-400">
            Humidity
          </p>

          <h4 className="mt-1 font-bold text-slate-800">
            48%
          </h4>
        </div>

        <div>
          <p className="text-xs text-slate-400">Wind</p>

          <h4 className="mt-1 font-bold text-slate-800">
            12km/h
          </h4>
        </div>
      </div>
    </div>
  );
}