// ========================================
// FILE: src/components/naukri/applications/ApplicationList.tsx
// ========================================

"use client";

import { useMemo, useState } from "react";

import { Bell, ArrowLeft, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import ApplicationCard from "./ApplicationCard";
import ApplicationFilter from "./ApplicationFilter";

import { applications } from "@/data/naukri/applications";

export default function ApplicationList() {
  const [activeFilter, setActiveFilter] = useState("Sabhi");

  const filteredApplications = useMemo(() => {
    if (activeFilter === "Sabhi") return applications;

    return applications.filter(
      (item) => item.status === activeFilter
    );
  }, [activeFilter]);

  const stats = {
    total: applications.length,
    pending: applications.filter((a) => a.status === "Pending").length,
    selected: applications.filter((a) => a.status === "Selected").length,
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
      {/* HEADER */}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/naukri"
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/50 bg-white/70 backdrop-blur-xl transition hover:scale-105 dark:border-slate-700 dark:bg-slate-800/70"
          >
            <ArrowLeft className="text-slate-700 dark:text-white" />
          </Link>

          <div>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white">
              Meri Job Applications
            </h1>

            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              Aapke applied jobs aur unka status
            </p>
          </div>
        </div>

        <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/50 bg-white/70 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-800/70">
          <Bell className="text-slate-700 dark:text-white" />

          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500" />
        </button>
      </div>

      {/* STATS */}

      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="rounded-[24px] bg-[#7c3aed] p-4 text-white shadow-lg shadow-purple-500/20">
          <p className="text-xs font-medium opacity-80">
            Total Applied
          </p>
          <h3 className="mt-1 text-2xl font-black">
            {stats.total}
          </h3>
        </div>

        <div className="rounded-[24px] border border-white/50 bg-white/70 p-4 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-800/70">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-300">
            Pending
          </p>
          <h3 className="mt-1 text-2xl font-black text-yellow-500">
            {stats.pending}
          </h3>
        </div>

        <div className="rounded-[24px] border border-white/50 bg-white/70 p-4 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-800/70">
          <p className="text-xs font-medium text-slate-500 dark:text-slate-300">
            Selected
          </p>
          <h3 className="mt-1 text-2xl font-black text-green-500">
            {stats.selected}
          </h3>
        </div>
      </div>

      {/* FILTER */}

      <div className="mt-6">
        <ApplicationFilter
          active={activeFilter}
          onChange={setActiveFilter}
        />
      </div>

      {/* LIST */}

      {filteredApplications.length > 0 ? (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="mt-6 space-y-5"
        >
          {filteredApplications.map((application) => (
            <ApplicationCard
              key={application.id}
              application={application}
            />
          ))}
        </motion.div>
      ) : (
        <div className="mt-10 flex flex-col items-center justify-center rounded-[42px] border border-dashed border-slate-300 bg-white/70 px-6 py-16 text-center backdrop-blur-xl dark:border-slate-700 dark:bg-slate-800/70">
          <div className="relative h-52 w-52">
            <Image
              src="/images/naukri/empty-applications.webp"
              alt="No applications"
              fill
              className="object-contain"
            />
          </div>

          <h3 className="mt-5 text-2xl font-black text-slate-900 dark:text-white">
            Abhi koi application nahi
          </h3>

          <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-slate-300">
            Aapne abhi tak kisi job ke liye apply nahi kiya hai.
          </p>

          <Link
            href="/naukri"
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-[#16a34a] px-6 py-3 font-semibold text-white transition hover:scale-105"
          >
            <Briefcase size={18} />
            Jobs Dekho
          </Link>
        </div>
      )}
    </section>
  );
}