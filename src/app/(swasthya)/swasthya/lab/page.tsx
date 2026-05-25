// ========================================
// FILE: src/app/(swasthya)/swasthya/lab/page.tsx
// ========================================

"use client";

import { useMemo, useState } from "react";

import LabHero from "@/components/swasthya/lab/LabHero";
import TestSearch from "@/components/swasthya/lab/TestSearch";
import LabCard from "@/components/swasthya/lab/LabCard";
import BookingForm from "@/components/swasthya/lab/BookingForm";

import {
  tests,
  TestItem,
} from "@/data/swasthya/tests";

const labs = [
  {
    id: 1,
    name: "Apollo Diagnostic Center",
    distance: "1.2 KM",
    timing: "6 AM - 10 PM",
  },
  {
    id: 2,
    name: "RedHealth Lab",
    distance: "2.4 KM",
    timing: "24 Hours",
  },
  {
    id: 3,
    name: "City Care Diagnostics",
    distance: "3.1 KM",
    timing: "7 AM - 9 PM",
  },
];

export default function LabPage() {
  const [search, setSearch] = useState("");

  const [cart, setCart] = useState<TestItem[]>([]);

  const [selectedLab, setSelectedLab] =
    useState("");

  const filteredTests = useMemo(() => {
    return tests.filter((test) =>
      test.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  const addToCart = (test: TestItem) => {
    setCart((prev) => [...prev, test]);
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <main className="min-h-screen bg-[#f4f8ff] dark:bg-[#07111f] px-4 py-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <LabHero
          search={search}
          setSearch={setSearch}
        />

        <TestSearch
          tests={filteredTests}
          addToCart={addToCart}
        />

        <section
          className="
            mt-10
            rounded-[40px]
            border border-white/50
            bg-white/70
            dark:bg-slate-800/70
            backdrop-blur-xl
            p-7
            shadow-xl
          "
        >
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              My Cart
            </h2>

            <div className="text-right">
              <p className="text-sm text-slate-500">
                Total
              </p>

              <h3 className="text-3xl font-black text-red-600">
                ₹{total}
              </h3>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {cart.length === 0 ? (
              <p className="text-slate-500">
                Abhi koi test add nahi hua.
              </p>
            ) : (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex items-center justify-between
                    rounded-2xl bg-red-50 dark:bg-slate-700
                    p-4
                  "
                >
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      {item.name}
                    </h4>

                    <p className="text-sm text-slate-500">
                      {item.category}
                    </p>
                  </div>

                  <p className="text-xl font-black text-red-600">
                    ₹{item.price}
                  </p>
                </div>
              ))
            )}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="mb-6 text-3xl font-black text-slate-900 dark:text-white">
            Select Lab
          </h2>

          <div className="space-y-5">
            {labs.map((lab) => (
              <LabCard
                key={lab.id}
                name={lab.name}
                distance={lab.distance}
                timing={lab.timing}
                total={total}
                onSelect={() =>
                  setSelectedLab(lab.name)
                }
              />
            ))}
          </div>
        </section>

        {selectedLab && (
          <div className="mt-10">
            <BookingForm
              selectedLab={selectedLab}
              total={total}
            />
          </div>
        )}
      </div>
    </main>
  );
}