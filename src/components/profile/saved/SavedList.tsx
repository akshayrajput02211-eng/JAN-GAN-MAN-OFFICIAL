"use client";

import { useState } from "react";

import SavedItem from "./SavedItem";

const tabs = [
  "Jobs",
  "Products",
  "Schemes",
  "Notes",
  "Doctors",
];

export default function SavedList() {
  const [active, setActive] = useState("Jobs");

  return (
    <div className="px-5 py-6">
      <h1 className="text-3xl font-bold dark:text-white">
        Saved Items
      </h1>

      <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`
              whitespace-nowrap
              rounded-full
              px-5
              py-3
              text-sm
              font-semibold
              ${
                active === tab
                  ? "bg-[#3558ff] text-white"
                  : "bg-white text-slate-700 dark:bg-slate-800 dark:text-white"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        <SavedItem
          title="Delivery Boy Job"
          module="Naukri"
          date="25 May 2026"
        />

        <SavedItem
          title="PM Awas Yojana"
          module="Sarkari Seva"
          date="22 May 2026"
        />
      </div>
    </div>
  );
}