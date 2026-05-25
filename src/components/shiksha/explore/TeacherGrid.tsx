// ========================================
// FILE: src/components/shiksha/explore/TeacherGrid.tsx
// ========================================

"use client";

import TeacherCard from "./TeacherCard";

const teachers = [
  {
    id: 1,
    name: "Aman Verma",
    subjects: "Math, Science",
    board: "CBSE",
    grades: "6-10",
    medium: "Hindi & English",
    rating: "4.9",
    students: "1.2k Students",
    rate: 399,
    demo: true,
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },

  {
    id: 2,
    name: "Priya Sharma",
    subjects: "English, Social Studies",
    board: "ICSE",
    grades: "5-9",
    medium: "English",
    rating: "4.8",
    students: "860 Students",
    rate: 499,
    demo: false,
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },

  {
    id: 3,
    name: "Rohit Singh",
    subjects: "Computer Science",
    board: "UP Board",
    grades: "9-12",
    medium: "Hindi",
    rating: "4.7",
    students: "940 Students",
    rate: 599,
    demo: true,
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },

  {
    id: 4,
    name: "Neha Gupta",
    subjects: "Hindi, Art",
    board: "CBSE",
    grades: "1-8",
    medium: "Hindi",
    rating: "4.9",
    students: "1.5k Students",
    rate: 299,
    demo: true,
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },

  {
    id: 5,
    name: "Arjun Mehta",
    subjects: "Physics, Chemistry",
    board: "ICSE",
    grades: "11-12",
    medium: "English",
    rating: "5.0",
    students: "2k Students",
    rate: 799,
    demo: false,
    image:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
  },

  {
    id: 6,
    name: "Kavya Iyer",
    subjects: "Music, English",
    board: "CBSE",
    grades: "3-8",
    medium: "English",
    rating: "4.8",
    students: "670 Students",
    rate: 349,
    demo: true,
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  },
];

interface Props {
  search: string;
  subject: string;
  grade: string;
}

export default function TeacherGrid({
  search,
  subject,
  grade,
}: Props) {
  const filteredTeachers = teachers.filter(
    (teacher) => {
      const matchesSearch =
        teacher.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        teacher.subjects
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesSubject =
        teacher.subjects.includes(subject);

      const matchesGrade =
        teacher.grades.includes(
          grade.split("-")[0]
        ) || grade === "";

      return (
        matchesSearch &&
        matchesSubject &&
        matchesGrade
      );
    }
  );

  return (
    <section className="mt-12">
      {/* ================= HEADER ================= */}

      <div className="mb-7">
        <h2
          className="
            text-3xl
            font-black

            text-slate-900
            dark:text-white
          "
        >
          Teachers Explore
        </h2>

        <p
          className="
            mt-2

            text-slate-500
            dark:text-slate-300
          "
        >
          Verified teachers from different boards
        </p>
      </div>

      {/* ================= GRID ================= */}

      <div
        className="
          grid
          gap-6

          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {filteredTeachers.map((teacher) => (
          <TeacherCard
            key={teacher.id}
            teacher={teacher}
          />
        ))}
      </div>

      {/* ================= EMPTY ================= */}

      {filteredTeachers.length === 0 && (
        <div
          className="
            mt-10

            rounded-[32px]

            border border-dashed
            border-blue-200

            bg-white/70
            dark:bg-slate-800/70

            p-12

            text-center

            backdrop-blur-xl
          "
        >
          <h3
            className="
              text-2xl
              font-black

              text-slate-900
              dark:text-white
            "
          >
            No Teachers Found
          </h3>

          <p
            className="
              mt-3

              text-slate-500
              dark:text-slate-300
            "
          >
            Try changing subject or grade filters
          </p>
        </div>
      )}

      {/* ================= FEATURED ================= */}

      <div className="mt-16">
        <div className="mb-6">
          <h2
            className="
              text-3xl
              font-black

              text-slate-900
              dark:text-white
            "
          >
            Top Rated Teachers
          </h2>

          <p
            className="
              mt-2

              text-slate-500
              dark:text-slate-300
            "
          >
            Most loved by students
          </p>
        </div>

        <div
          className="
            flex
            gap-5

            overflow-x-auto

            pb-2
          "
        >
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="min-w-[340px]"
            >
              <TeacherCard teacher={teacher} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}