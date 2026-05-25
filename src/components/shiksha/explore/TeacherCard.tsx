// ========================================
// FILE: src/components/shiksha/explore/TeacherCard.tsx
// ========================================

"use client";

import Image from "next/image";

import {
  BadgeCheck,
  Star,
  Users,
} from "lucide-react";

interface Props {
  teacher: any;
}

export default function TeacherCard({
  teacher,
}: Props) {
  return (
    <div
      className="
        group

        rounded-[34px]

        border border-white/50

        bg-white/70
        dark:bg-slate-800/70

        p-6

        backdrop-blur-xl

        shadow-lg

        transition-all
        duration-300

        hover:scale-[1.02]
        hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]
      "
    >
      {/* TOP */}

      <div className="flex items-start gap-4">
        <Image
          src={teacher.image}
          alt={teacher.name}
          width={82}
          height={82}
          className="
            rounded-full
            object-cover
          "
        />

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3
              className="
                text-xl
                font-black

                text-slate-900
                dark:text-white
              "
            >
              {teacher.name}
            </h3>

            <BadgeCheck className="h-5 w-5 text-blue-600" />
          </div>

          <p
            className="
              mt-2

              text-sm
              font-semibold

              text-blue-600
            "
          >
            {teacher.subjects}
          </p>

          <p
            className="
              mt-1

              text-sm

              text-slate-500
            "
          >
            {teacher.board}
          </p>
        </div>
      </div>

      {/* INFO */}

      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-slate-500">
            Grades
          </span>

          <span className="font-bold text-slate-900 dark:text-white">
            {teacher.grades}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-500">
            Medium
          </span>

          <span className="font-bold text-slate-900 dark:text-white">
            {teacher.medium}
          </span>
        </div>
      </div>

      {/* STATS */}

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

          <span className="font-black text-slate-900 dark:text-white">
            {teacher.rating}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-blue-600" />

          <span className="font-bold text-slate-600 dark:text-slate-300">
            {teacher.students}
          </span>
        </div>
      </div>

      {/* PRICE */}

      <div className="mt-6 flex items-center justify-between">
        {teacher.demo ? (
          <div
            className="
              rounded-full

              bg-green-500

              px-4
              py-2

              text-sm
              font-bold

              text-white
            "
          >
            Free Demo
          </div>
        ) : (
          <div
            className="
              text-3xl
              font-black

              text-blue-600
            "
          >
            ₹{teacher.rate}/hr
          </div>
        )}
      </div>

      {/* BUTTONS */}

      <div className="mt-7 grid grid-cols-2 gap-3">
        <button
          className="
            rounded-2xl

            border border-blue-200

            px-4
            py-3

            font-bold

            text-blue-600
          "
        >
          Profile Dekho
        </button>

        <button
          className="
            rounded-2xl

            bg-blue-600

            px-4
            py-3

            font-bold
            text-white
          "
        >
          Book Demo
        </button>
      </div>
    </div>
  );
}