// ========================================
// FILE: src/components/suraksha/home/ComplaintList.tsx
// ========================================

"use client";

import Link from "next/link";

import ComplaintItem from "./ComplaintItem";

const complaints = [
  {
    title: "Theft Complaint",
    status: "Under Investigation",
    refId: "SRK-29831",
    date: "Today • 10:30 AM",
  },

  {
    title: "Noise Pollution",
    status: "Officer Assigned",
    refId: "SRK-84321",
    date: "Yesterday • 08:10 PM",
  },

  {
    title: "Harassment",
    status: "Review Pending",
    refId: "SRK-11209",
    date: "24 May • 02:40 PM",
  },
];

export default function ComplaintList() {
  return (
    <section
      className="
        rounded-[36px]

        border border-white/50

        bg-white/70
        dark:bg-slate-800/70

        p-6

        backdrop-blur-xl

        shadow-[0_10px_40px_rgba(0,0,0,0.06)]
      "
    >
      {/* ================= HEADER ================= */}

      <div className="flex items-center justify-between">
        <div>
          <h2
            className="
              text-2xl
              font-black

              text-slate-900
              dark:text-white
            "
          >
            My Complaints
          </h2>

          <p
            className="
              mt-1

              text-sm
              text-slate-500
              dark:text-slate-300
            "
          >
            Track your complaint activity
          </p>
        </div>

        <Link
          href="/suraksha/complaint"
          className="
            rounded-full

            bg-indigo-100
            px-4
            py-2

            text-sm
            font-bold
            text-indigo-700

            transition-all
            duration-300

            hover:bg-indigo-200
          "
        >
          View All
        </Link>
      </div>

      {/* ================= LIST ================= */}

      <div className="mt-6 space-y-4">
        {complaints.map((item) => (
          <ComplaintItem
            key={item.refId}
            title={item.title}
            status={item.status}
            refId={item.refId}
            date={item.date}
          />
        ))}
      </div>

      {/* ================= CTA ================= */}

      <Link
        href="/suraksha/complaint"
        className="
          mt-6

          flex
          items-center
          justify-center

          rounded-[24px]

          bg-gradient-to-r
          from-indigo-600
          to-purple-600

          px-6
          py-4

          text-lg
          font-black
          text-white

          shadow-lg

          transition-all
          duration-300

          hover:scale-[1.01]
        "
      >
        + New Complaint Darj Karo
      </Link>
    </section>
  );
}