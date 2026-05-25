// ========================================
// FILE: src/components/swasthya/lab/BookingForm.tsx
// ========================================

"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

interface Props {
  selectedLab: string;
  total: number;
}

const slots = ["Morning", "Afternoon", "Evening"];

export default function BookingForm({
  selectedLab,
  total,
}: Props) {
  const [selectedDate, setSelectedDate] = useState(0);
  const [slot, setSlot] = useState("Morning");
  const [homeCollection, setHomeCollection] =
    useState(true);

  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const [success, setSuccess] = useState(false);

  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);

    return date;
  });

  const finalTotal = homeCollection
    ? total + 50
    : total;

  if (success) {
    return (
      <div
        className="
          rounded-[40px]
          bg-green-600
          p-8
          text-white
          shadow-2xl
        "
      >
        <CheckCircle2 className="h-20 w-20" />

        <h2 className="mt-5 text-4xl font-black">
          Booking Confirmed
        </h2>

        <div className="mt-6 space-y-2 text-lg">
          <p>Booking ID: LAB28491</p>
          <p>Lab: {selectedLab}</p>
          <p>
            Date:{" "}
            {dates[selectedDate].toLocaleDateString()}
          </p>
          <p>Slot: {slot}</p>
        </div>
      </div>
    );
  }

  return (
    <section
      className="
        rounded-[40px]
        border border-white/50
        bg-white/70
        dark:bg-slate-800/70
        backdrop-blur-xl
        p-7
        shadow-2xl
      "
    >
      <h2 className="text-3xl font-black text-slate-900 dark:text-white">
        Booking Form
      </h2>

      <div className="mt-8">
        <p className="mb-4 text-sm font-bold uppercase tracking-wide text-red-600">
          Select Date
        </p>

        <div className="grid grid-cols-2 md:grid-cols-7 gap-3">
          {dates.map((date, index) => (
            <button
              key={index}
              onClick={() => setSelectedDate(index)}
              className={`
                rounded-2xl p-4 text-center transition
                ${
                  selectedDate === index
                    ? "bg-red-600 text-white"
                    : "bg-slate-100 dark:bg-slate-700"
                }
              `}
            >
              <p className="text-xs">
                {date.toLocaleDateString("en-US", {
                  weekday: "short",
                })}
              </p>

              <p className="mt-1 text-lg font-black">
                {date.getDate()}
              </p>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <p className="mb-4 text-sm font-bold uppercase tracking-wide text-red-600">
          Time Slot
        </p>

        <div className="flex flex-wrap gap-3">
          {slots.map((item) => (
            <button
              key={item}
              onClick={() => setSlot(item)}
              className={`
                rounded-full px-5 py-3 font-semibold transition
                ${
                  slot === item
                    ? "bg-red-600 text-white"
                    : "bg-slate-100 dark:bg-slate-700"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between rounded-[24px] bg-red-50 dark:bg-slate-700 p-5">
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white">
            Home Collection
          </h4>

          <p className="text-sm text-slate-600 dark:text-slate-300">
            Extra ₹50 charge
          </p>
        </div>

        <button
          onClick={() =>
            setHomeCollection(!homeCollection)
          }
          className={`
            relative h-8 w-16 rounded-full transition
            ${
              homeCollection
                ? "bg-red-600"
                : "bg-slate-400"
            }
          `}
        >
          <div
            className={`
              absolute top-1 h-6 w-6 rounded-full bg-white transition
              ${
                homeCollection
                  ? "left-9"
                  : "left-1"
              }
            `}
          />
        </button>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <input
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) =>
            setPatientName(e.target.value)
          }
          className="
            rounded-2xl border border-slate-200
            bg-white dark:bg-slate-900
            px-5 py-4 outline-none
          "
        />

        <input
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="
            rounded-2xl border border-slate-200
            bg-white dark:bg-slate-900
            px-5 py-4 outline-none
          "
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="
            rounded-2xl border border-slate-200
            bg-white dark:bg-slate-900
            px-5 py-4 outline-none
          "
        >
          <option value="">Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            Total Amount
          </p>

          <h3 className="text-4xl font-black text-red-600">
            ₹{finalTotal}
          </h3>
        </div>

        <button
          onClick={() => setSuccess(true)}
          className="
            rounded-[24px]
            bg-red-600
            px-8 py-4
            text-lg font-bold text-white
            shadow-lg transition hover:scale-105
          "
        >
          Confirm Booking
        </button>
      </div>
    </section>
  );
}