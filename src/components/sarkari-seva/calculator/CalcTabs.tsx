"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Landmark } from "lucide-react";
import { useSearchParams } from "next/navigation";

interface Props {
  ageTab: React.ReactNode;
  loanTab: React.ReactNode;
}

export default function CalcTabs({
  ageTab,
  loanTab,
}: Props) {
  const searchParams = useSearchParams();

  const initialTab =
    searchParams.get("tab") === "loan"
      ? "loan"
      : "age";

  const [active, setActive] = useState<
    "age" | "loan"
  >(initialTab);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          onClick={() => setActive("age")}
          className={`rounded-full px-6 py-3 font-semibold transition-all flex items-center gap-2 ${
            active === "age"
              ? "bg-[#f6b21a] text-black shadow-xl"
              : "bg-white text-black border"
          }`}
        >
          <Calculator size={18} />
          Age Calculator
        </button>

        <button
          onClick={() => setActive("loan")}
          className={`rounded-full px-6 py-3 font-semibold transition-all flex items-center gap-2 ${
            active === "loan"
              ? "bg-[#f6b21a] text-black shadow-xl"
              : "bg-white text-black border"
          }`}
        >
          <Landmark size={18} />
          Loan EMI
        </button>
      </div>

      <motion.div
        key={active}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {active === "age"
          ? ageTab
          : loanTab}
      </motion.div>
    </div>
  );
}