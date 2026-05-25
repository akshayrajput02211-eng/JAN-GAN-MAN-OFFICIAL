"use client";

import { useState } from "react";
import { Bookmark } from "lucide-react";

interface Props {
  job: any;
}

export default function GovtJobCard({
  job,
}: Props) {
  const [saved, setSaved] =
    useState(false);

  const daysLeft = Math.ceil(
    (new Date(job.lastDate).getTime() -
      new Date().getTime()) /
      (1000 * 60 * 60 * 24)
  );

  return (
    <div
      className="
        relative

        overflow-hidden

        rounded-[30px]

        border
        border-orange-100
        dark:border-slate-700

        bg-white
        dark:bg-slate-900

        p-6

        shadow-lg

        transition-all
        duration-300

        hover:-translate-y-2
        hover:shadow-2xl
      "
    >

      {/* TOP */}

      <div className="flex items-start justify-between gap-4">

        <div>

          <h3
            className="
              text-2xl
              font-black
              text-slate-900
              dark:text-white
            "
          >
            {job.department}
          </h3>

          <p
            className="
              mt-1
              text-slate-600
              dark:text-slate-300
              font-semibold
            "
          >
            {job.post}
          </p>

        </div>

        <button
          onClick={() =>
            setSaved(!saved)
          }
          className={`
            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-2xl

            transition-all
            duration-300

            ${
              saved
                ? "bg-yellow-400 text-white scale-110"
                : "bg-slate-100 dark:bg-slate-800 text-slate-500"
            }
          `}
        >
          <Bookmark
            fill={saved ? "white" : "none"}
          />
        </button>

      </div>

      {/* BADGES */}

      <div className="mt-5 flex flex-wrap gap-3">

        <div
          className="
            rounded-full
            bg-yellow-100
            px-4
            py-2
            text-sm
            font-bold
            text-yellow-700
          "
        >
          {job.vacancies} Vacancies
        </div>

        <div
          className="
            rounded-full
            bg-sky-100
            px-4
            py-2
            text-sm
            font-bold
            text-sky-700
          "
        >
          {job.eligibility}
        </div>

        <div
          className={`
            rounded-full
            px-4
            py-2
            text-sm
            font-bold

            ${
              daysLeft < 7
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }
          `}
        >
          Last Date: {job.lastDate}
        </div>

      </div>

      {/* SALARY */}

      <div className="mt-6">

        <p
          className="
            text-sm
            text-slate-500
          "
        >
          Salary Range
        </p>

        <h4
          className="
            mt-1
            text-2xl
            font-black
            text-orange-600
          "
        >
          {job.salary}
        </h4>

      </div>

      {/* BUTTON */}

      <a
        href={job.applyLink}
        target="_blank"
        className="
          mt-7

          flex
          items-center
          justify-center

          rounded-2xl

          bg-gradient-to-r
          from-orange-500
          to-red-500

          py-4

          text-lg
          font-bold
          text-white

          transition-all
          duration-300

          hover:scale-[1.02]
        "
      >
        Apply Karo
      </a>

    </div>
  );
}