"use client";

import { useState } from "react";
import { CalendarDays } from "lucide-react";
import CalcResult from "./CalcResult";

export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<any>(null);

  const calculateAge = () => {
    if (!dob) return;

    const birthDate = new Date(dob);
    const today = new Date();

    let years =
      today.getFullYear() -
      birthDate.getFullYear();

    let months =
      today.getMonth() -
      birthDate.getMonth();

    let days =
      today.getDate() -
      birthDate.getDate();

    if (days < 0) {
      months--;

      const prevMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      );

      days += prevMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const nextBirthday = years + 1;

    const retirementYears =
      Math.max(60 - years, 0);

    setResult({
      years,
      months,
      days,
      nextBirthday,
      retirementYears,
    });
  };

  return (
    <div
      className="
        bg-white/70
        dark:bg-slate-800/70
        backdrop-blur-xl
        border
        border-white/50
        rounded-[36px]
        p-6
        md:p-8
        shadow-xl
      "
    >
      <div className="max-w-xl">
        <label
          className="
            text-sm
            font-semibold
            text-slate-700
            dark:text-slate-200
            mb-3
            block
          "
        >
          Date of Birth
        </label>

        <div className="relative">
          <CalendarDays
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-500
            "
          />

          <input
            type="date"
            value={dob}
            onChange={(e) =>
              setDob(e.target.value)
            }
            className="
              w-full
              rounded-2xl
              border
              border-white/40
              bg-white/80
              dark:bg-slate-900/60
              pl-12
              pr-4
              py-4
              outline-none
              text-slate-800
              dark:text-white
            "
          />
        </div>

        <button
          onClick={calculateAge}
          className="
            mt-5
            rounded-2xl
            bg-[#16a34a]
            hover:scale-[1.02]
            active:scale-[0.98]
            transition-all
            px-6
            py-4
            text-white
            font-bold
            shadow-lg
          "
        >
          Calculate Age
        </button>
      </div>

      {result && (
        <div className="mt-8">
          <CalcResult
            title="Aapki Umar"
            value={`${result.years} saal, ${result.months} mahine, ${result.days} din`}
          />

          <div
            className="
              mt-5
              grid
              grid-cols-1
              md:grid-cols-2
              gap-4
            "
          >
            <div
              className="
                rounded-[28px]
                bg-gradient-to-br
                from-[#f6b21a]
                to-yellow-300
                p-5
                text-black
              "
            >
              <p className="text-sm font-medium">
                Next Birthday Age
              </p>

              <h3 className="text-3xl font-black mt-2">
                {result.nextBirthday} Years
              </h3>
            </div>

            <div
              className="
                rounded-[28px]
                bg-gradient-to-br
                from-[#16a34a]
                to-emerald-400
                p-5
                text-white
              "
            >
              <p className="text-sm font-medium">
                Retirement Countdown
              </p>

              <h3 className="text-3xl font-black mt-2">
                {result.retirementYears} Years Left
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}