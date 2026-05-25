// ========================================
// FILE: src/components/shiksha/explore/SubjectFilter.tsx
// ========================================

"use client";

const subjects = [
  "Math",
  "Science",
  "Hindi",
  "English",
  "Social Studies",
  "Computer",
  "Art",
  "Music",
];

interface Props {
  active: string;
  setActive: (value: string) => void;
}

export default function SubjectFilter({
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
        Subjects
      </h2>

      <div
        className="
          mt-5

          flex
          gap-3

          overflow-x-auto

          pb-2
        "
      >
        {subjects.map((subject) => (
          <button
            key={subject}
            onClick={() => setActive(subject)}
            className={`
              whitespace-nowrap

              rounded-full

              px-5
              py-3

              text-sm
              font-bold

              transition-all
              duration-300

              ${
                active === subject
                  ? `
                    bg-blue-600
                    text-white
                    shadow-lg
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
            {subject}
          </button>
        ))}
      </div>
    </section>
  );
}