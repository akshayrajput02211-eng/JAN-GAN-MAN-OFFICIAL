// components/hero/WeatherCard.tsx

"use client";

import { CloudSun, Droplets, Wind } from "lucide-react";

export default function WeatherCard() {
  return (
    <div
      className="
      w-[320px]
      bg-white/80
      backdrop-blur-xl
      border border-white/40
      rounded-3xl
      p-6
      shadow-xl
    "
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">Najafgarh, Delhi</p>

          <div className="flex items-center gap-3 mt-3">
            <CloudSun className="text-orange-400" size={42} />

            <div>
              <h2 className="text-4xl font-bold text-gray-900">32°C</h2>
              <p className="text-gray-500 text-sm">Sunny</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div>
          <div className="flex items-center gap-1 text-gray-500">
            <Droplets size={15} />
            <span className="text-xs">Humidity</span>
          </div>

          <h4 className="font-bold mt-1">45%</h4>
        </div>

        <div>
          <div className="flex items-center gap-1 text-gray-500">
            <Wind size={15} />
            <span className="text-xs">Wind</span>
          </div>

          <h4 className="font-bold mt-1">12 km/h</h4>
        </div>

        <div>
          <div className="flex items-center gap-1 text-gray-500">
            <Droplets size={15} />
            <span className="text-xs">Rain</span>
          </div>

          <h4 className="font-bold mt-1">10%</h4>
        </div>
      </div>
    </div>
  );
}