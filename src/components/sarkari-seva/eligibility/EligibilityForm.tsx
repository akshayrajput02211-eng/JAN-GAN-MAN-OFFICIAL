// ========================================
// FILE: src/components/sarkari-seva/eligibility/EligibilityForm.tsx
// ========================================

"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tractor,
  Users,
  User,
  HeartHandshake,
  Accessibility,
} from "lucide-react";

import { schemes } from "@/data/sarkari-seva/schemes";
import SchemeResult from "./SchemeResult";

const roleOptions = [
  {
    label: "Kisan",
    icon: Tractor,
  },
  {
    label: "Mahila",
    icon: HeartHandshake,
  },
  {
    label: "Yuva",
    icon: Users,
  },
  {
    label: "Buzdurg",
    icon: User,
  },
  {
    label: "Divyang",
    icon: Accessibility,
  },
];

const incomeOptions = [
  {
    label: "Below 1L",
    value: "below-1",
  },
  {
    label: "1 - 3L",
    value: "1-3",
  },
  {
    label: "3 - 6L",
    value: "3-6",
  },
  {
    label: "Above 6L",
    value: "above-6",
  },
];

const categories = ["General", "OBC", "SC", "ST"];

const states = [
  "Delhi",
  "Uttar Pradesh",
  "Bihar",
  "Maharashtra",
  "Rajasthan",
  "Punjab",
];

export default function EligibilityForm() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    role: "",
    age: "",
    income: "",
    state: "",
    category: "",
  });

  const totalSteps = 5;

  const matchedSchemes = useMemo(() => {
    return schemes.filter((scheme) => {
      const roleMatch =
        !scheme.eligibility.roles ||
        scheme.eligibility.roles.includes(form.role);

      const ageMatch =
        !scheme.eligibility.minAge ||
        Number(form.age) >= scheme.eligibility.minAge;

      const incomeMatch =
        !scheme.eligibility.maxIncome ||
        scheme.eligibility.maxIncome.includes(form.income);

      const categoryMatch =
        !scheme.eligibility.categories ||
        scheme.eligibility.categories.includes(form.category);

      return roleMatch && ageMatch && incomeMatch && categoryMatch;
    });
  }, [form]);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const retry = () => {
    setForm({
      role: "",
      age: "",
      income: "",
      state: "",
      category: "",
    });

    setStep(1);
  };

  const cardClass =
    "group rounded-3xl border border-yellow-900/40 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 text-left transition-all hover:-translate-y-1 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10";

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="mb-6 text-2xl font-black text-white">
              Aap kaun hain?
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {roleOptions.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.label}
                    onClick={() => {
                      setForm({
                        ...form,
                        role: item.label,
                      });

                      nextStep();
                    }}
                    className={cardClass}
                  >
                    <div className="mb-4 inline-flex rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4 text-yellow-300">
                      <Icon size={28} />
                    </div>

                    <h3 className="text-lg font-bold text-white">
                      {item.label}
                    </h3>
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h2 className="mb-6 text-2xl font-black text-white">
              Aapki Umar?
            </h2>

            <input
              type="number"
              placeholder="Age enter karein"
              className="w-full rounded-3xl border border-yellow-900/40 bg-zinc-900 px-6 py-5 text-lg font-semibold text-white outline-none placeholder:text-zinc-500 focus:border-yellow-500"
              onChange={(e) =>
                setForm({
                  ...form,
                  age: e.target.value,
                })
              }
            />

            <button
              onClick={nextStep}
              className="mt-6 rounded-2xl bg-gradient-to-r from-yellow-400 to-amber-500 px-6 py-3 font-black text-black transition hover:shadow-lg hover:shadow-yellow-500/30"
            >
              Next
            </button>
          </div>
        );

      case 3:
        return (
          <div>
            <h2 className="mb-6 text-2xl font-black text-white">
              Aapki Income?
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {incomeOptions.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    setForm({
                      ...form,
                      income: item.value,
                    });

                    nextStep();
                  }}
                  className={`${cardClass} text-lg font-bold text-white`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h2 className="mb-6 text-2xl font-black text-white">
              State Select Karein
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {states.map((state) => (
                <button
                  key={state}
                  onClick={() => {
                    setForm({
                      ...form,
                      state,
                    });

                    nextStep();
                  }}
                  className={`${cardClass} text-lg font-bold text-white`}
                >
                  {state}
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div>
            <h2 className="mb-6 text-2xl font-black text-white">
              Category?
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setForm({
                      ...form,
                      category,
                    });

                    nextStep();
                  }}
                  className={`${cardClass} text-lg font-bold text-white`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <SchemeResult
            matchedSchemes={matchedSchemes}
            onRetry={retry}
          />
        );
    }
  };

  return (
    <section className="mt-10">
      {step <= totalSteps && (
        <div className="mb-8 flex items-center justify-center gap-3">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={`h-3 rounded-full transition-all duration-300 ${
                step === index + 1
                  ? "w-10 bg-gradient-to-r from-yellow-400 to-amber-500"
                  : "w-3 bg-zinc-700"
              }`}
            />
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{
            opacity: 0,
            x: 80,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: -80,
          }}
          transition={{
            duration: 0.35,
          }}
          className="rounded-[2rem] border border-yellow-900/40 bg-gradient-to-br from-zinc-950 via-zinc-900 to-yellow-950/20 p-6 md:p-10"
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}