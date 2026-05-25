// ========================================
// FILE: src/components/shiksha/explore/TeacherSearch.tsx
// ========================================

"use client";

interface Props {
  active: string;
  setActive: (value: string) => void;
}

const grades = [
  "1-5",
  "6-8",
  "9-10",
  "11-12",
];

export default function TeacherSearch({
  active,
  setActive,
}: Props) {
  return (
    <section className="mt-10">
      <h2
        className="
          text-2xl
          font-black

          text-slate-900
          dark:text-white
        "
      >
        Grades
      </h2>

      <div className="mt-5 flex flex-wrap gap-3">
        {grades.map((grade) => (
          <button
            key={grade}
            onClick={() => setActive(grade)}
            className={`
              rounded-full

              px-6
              py-3

              font-bold

              transition-all
              duration-300

              ${
                active === grade
                  ? `
                    bg-blue-600
                    text-white
                  `
                  : `
                    bg-white
                    text-slate-700
                    dark:bg-slate-800
                    dark:text-white
                  `
              }
            `}
          >
            {grade}
          </button>
        ))}
      </div>
    </section>
  );
}