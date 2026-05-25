// ========================================
// FILE: src/components/swasthya/lab/TestSearch.tsx
// ========================================

"use client";

import TestCard from "./TestCard";
import { TestItem } from "@/data/swasthya/tests";

interface Props {
  tests: TestItem[];
  addToCart: (test: TestItem) => void;
}

export default function TestSearch({
  tests,
  addToCart,
}: Props) {
  return (
    <section className="mt-10">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white">
          Popular Tests
        </h2>
      </div>

      <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide">
        {tests.map((test) => (
          <TestCard
            key={test.id}
            test={test}
            onAdd={() => addToCart(test)}
          />
        ))}
      </div>
    </section>
  );
}