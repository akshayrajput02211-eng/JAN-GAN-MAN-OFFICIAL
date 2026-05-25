
"use client";

import { useState } from "react";

import {
  Check,
  ClipboardList,
  FileText,
  ShieldCheck,
} from "lucide-react";

import ComplaintTypeSelector from "@/components/suraksha/complaint/ComplaintTypeSelector";

import ComplaintForm from "@/components/suraksha/complaint/ComplaintForm";

import ComplaintSuccess from "@/components/suraksha/complaint/ComplaintSuccess";

const steps = [
  {
    title: "Type",
    icon: ClipboardList,
  },
  {
    title: "Details",
    icon: FileText,
  },
  {
    title: "Review",
    icon: ShieldCheck,
  },
  {
    title: "Done",
    icon: Check,
  },
];

export default function ComplaintPage() {
  const [step, setStep] = useState(1);

  const [data, setData] = useState({
    type: "",
    description: "",
    date: "",
    time: "",
    location: "Delhi, India",
    contact: "+91 9876543210",
    anonymous: false,
    evidence: null,
  });

  const refNumber =
    "SRK-" + Math.floor(Math.random() * 999999);

  return (
    <main className="min-h-screen bg-[#f4f8ff] dark:bg-[#07111f] px-4 py-6 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}

        <div className="mb-10">
          <h1 className="text-5xl font-black text-slate-900 dark:text-white">
            Complaint Darj Karo
          </h1>

          <p className="mt-3 text-slate-500 dark:text-slate-300">
            Suraksha support system for public safety
          </p>
        </div>

        {/* ================= PROGRESS ================= */}

        <div className="mb-10 flex items-center justify-between gap-3 overflow-x-auto">
          {steps.map((item, index) => {
            const Icon = item.icon;

            const active = step >= index + 1;

            return (
              <div
                key={item.title}
                className="
                  flex
                  min-w-[120px]
                  items-center
                  gap-3
                "
              >
                <div
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    transition-all

                    ${
                      active
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-200 text-slate-500"
                    }
                  `}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <span
                  className={`
                    font-bold

                    ${
                      active
                        ? "text-indigo-600"
                        : "text-slate-400"
                    }
                  `}
                >
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* ================= STEP 1 ================= */}

        {step === 1 && (
          <ComplaintTypeSelector
            selected={data.type}
            onSelect={(value) => {
              setData({
                ...data,
                type: value,
              });

              setStep(2);
            }}
          />
        )}

        {/* ================= STEP 2 ================= */}

        {step === 2 && (
          <ComplaintForm
            data={data}
            setData={setData}
            onNext={() => setStep(3)}
          />
        )}

        {/* ================= STEP 3 ================= */}

        {step === 3 && (
          <section
            className="
              rounded-[36px]
              border border-white/50
              bg-white/70
              dark:bg-slate-800/70
              p-8
              backdrop-blur-xl
            "
          >
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">
              Review Complaint
            </h2>

            <div className="mt-8 space-y-5">
              <div className="rounded-[24px] bg-indigo-50 dark:bg-slate-700 p-5">
                <p className="text-sm font-bold text-indigo-600">
                  Complaint Type
                </p>

                <h3 className="mt-2 text-xl font-black text-slate-900 dark:text-white">
                  {data.type}
                </h3>
              </div>

              <div className="rounded-[24px] bg-indigo-50 dark:bg-slate-700 p-5">
                <p className="text-sm font-bold text-indigo-600">
                  Description
                </p>

                <p className="mt-2 text-slate-700 dark:text-slate-200">
                  {data.description}
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-[24px] bg-indigo-50 dark:bg-slate-700 p-5">
                  <p className="text-sm font-bold text-indigo-600">
                    Date & Time
                  </p>

                  <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                    {data.date} — {data.time}
                  </p>
                </div>

                <div className="rounded-[24px] bg-indigo-50 dark:bg-slate-700 p-5">
                  <p className="text-sm font-bold text-indigo-600">
                    Location
                  </p>

                  <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                    {data.location}
                  </p>
                </div>
              </div>

              <div className="rounded-[24px] bg-indigo-50 dark:bg-slate-700 p-5">
                <p className="text-sm font-bold text-indigo-600">
                  Contact
                </p>

                <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                  {data.contact}
                </p>
              </div>

              <div className="rounded-[24px] bg-indigo-50 dark:bg-slate-700 p-5">
                <p className="text-sm font-bold text-indigo-600">
                  Anonymous
                </p>

                <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                  {data.anonymous ? "Yes" : "No"}
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(2)}
                  className="
                    rounded-[20px]
                    border
                    border-indigo-300
                    px-6
                    py-4
                    font-bold
                    text-indigo-600
                  "
                >
                  Back
                </button>

                <button
                  onClick={() => setStep(4)}
                  className="
                    rounded-[20px]
                    bg-indigo-600
                    px-8
                    py-4
                    font-bold
                    text-white
                  "
                >
                  Final Submit
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ================= STEP 4 ================= */}

        {step === 4 && (
          <ComplaintSuccess refNumber={refNumber} />
        )}
      </div>
    </main>
  );
}