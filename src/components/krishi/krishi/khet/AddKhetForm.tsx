"use client";

import { useState } from "react";

const units = ["Bigha", "Acre", "Hectare"];
const soilTypes = [
  "Sandy",
  "Clay",
  "Loam",
  "Silty",
];

const irrigationTypes = [
  "Rain",
  "Tube Well",
  "Canal",
  "Drip",
];

export default function AddKhetForm() {
  const [unit, setUnit] = useState("Bigha");

  return (
    <div
      className="
        mt-8

        rounded-[34px]

        border
        border-white/50

        bg-white/70
        dark:bg-slate-800/70

        p-5

        shadow-xl
        backdrop-blur-xl
      "
    >
      <h2 className="text-2xl font-black dark:text-white">
        Naya Khet Jodo
      </h2>

      <div className="mt-6 space-y-5">
        <Input placeholder="Field Name" />

        {/* AREA */}

        <div className="grid grid-cols-2 gap-3">
          <Input
            placeholder="Area"
            type="number"
          />

          <select
            value={unit}
            onChange={(e) =>
              setUnit(e.target.value)
            }
            className="input"
          >
            {units.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        <Input placeholder="State" />

        <Input placeholder="District" />

        <Input placeholder="Village" />

        {/* SOIL */}

        <select className="input">
          <option>Soil Type</option>

          {soilTypes.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        {/* CROP */}

        <select className="input">
          <option>Current Crop</option>

          <option>Wheat</option>
          <option>Rice</option>
          <option>Sugarcane</option>
        </select>

        {/* IRRIGATION */}

        <select className="input">
          <option>Irrigation Type</option>

          {irrigationTypes.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <button
          className="
            w-full

            rounded-2xl

            bg-gradient-to-r
            from-[#16a34a]
            to-[#22c55e]

            py-4

            text-lg
            font-bold
            text-white

            shadow-xl
          "
        >
          Save Karo
        </button>
      </div>
    </div>
  );
}

function Input(props: any) {
  return (
    <input
      {...props}
      className="
        input

        w-full
        rounded-2xl

        border
        border-slate-200

        bg-white

        px-5
        py-4

        outline-none

        dark:border-slate-700
        dark:bg-slate-900
        dark:text-white
      "
    />
  );
}