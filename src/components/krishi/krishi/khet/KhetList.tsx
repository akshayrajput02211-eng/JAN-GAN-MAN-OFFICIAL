"use client";

import { Plus } from "lucide-react";

import KhetCard from "./KhetCard";
import AddKhetForm from "./AddKhetForm";
import KhetStats from "./KhetStats";
import KhetDetail from "./KhetDetail";

export default function KhetList() {
  return (
    <section>
      {/* HEADER */}

      <div className="flex items-center justify-between">
        <div>
          <h1
            className="
              text-4xl
              font-black
              text-[#10224f]
              dark:text-white
            "
          >
            Mere Khet
          </h1>

          <p className="mt-2 text-slate-500">
            Aapke fields aur crop data
          </p>
        </div>

        <button
          className="
            flex
            items-center
            gap-2

            rounded-2xl

            bg-gradient-to-r
            from-[#16a34a]
            to-[#22c55e]

            px-5
            py-4

            text-sm
            font-bold
            text-white

            shadow-xl
          "
        >
          <Plus size={18} />
          Naya Khet
        </button>
      </div>

      {/* STATS */}

      <div className="mt-6">
        <KhetStats />
      </div>

      {/* LIST */}

      <div className="mt-6 space-y-5">
        <KhetCard
          fieldName="North Field"
          area="5 Acre"
          crop="Wheat"
          soil="Loam"
          watered="2 days ago"
          health="Good"
        />

        <KhetCard
          fieldName="River Side"
          area="3 Bigha"
          crop="Rice"
          soil="Clay"
          watered="Today"
          health="Fair"
        />
      </div>

      {/* ADD FORM */}

      <AddKhetForm />

      {/* DETAIL */}

      <KhetDetail />
    </section>
  );
}