// ========================================
// FILE: src/components/naukri/applications/ApplicationCard.tsx
// ========================================

"use client";

import { motion } from "framer-motion";
import {
  Building2,
  CalendarDays,
  MapPin,
  Phone,
  Eye,
} from "lucide-react";

import { JobApplication } from "@/data/naukri/applications";

interface Props {
  application: JobApplication;
}

const statusStyles = {
  Pending: {
    badge:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300",
    border: "border-l-yellow-400",
  },
  Selected: {
    badge:
      "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
    border: "border-l-green-500",
  },
  Rejected: {
    badge:
      "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",
    border: "border-l-red-500",
  },
  Interview: {
    badge:
      "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
    border: "border-l-blue-500",
  },
};

export default function ApplicationCard({
  application,
}: Props) {
  const styles = statusStyles[application.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className={`rounded-[30px] border-l-4 ${styles.border} border border-white/50 bg-white/70 p-5 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-800/70`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            {application.jobTitle}
          </h3>

          <div className="mt-2 flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <Building2 size={16} />
              <span>{application.company}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{application.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays size={16} />
              <span>Applied on {application.appliedDate}</span>
            </div>
          </div>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${styles.badge}`}
        >
          {application.status}
        </span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <a
          href={`tel:${application.phone}`}
          className="flex items-center justify-center gap-2 rounded-2xl bg-[#16a34a] px-4 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
        >
          <Phone size={16} />
          Employer ko Call karo
        </a>

        <button className="flex items-center justify-center gap-2 rounded-2xl border border-[#7c3aed]/20 bg-[#7c3aed]/10 px-4 py-3 text-sm font-semibold text-[#7c3aed] transition hover:bg-[#7c3aed] hover:text-white dark:border-[#7c3aed]/30">
          <Eye size={16} />
          Application Dekho
        </button>
      </div>
    </motion.div>
  );
}