"use client";

import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import { teamMembers } from "@/data/about/team";

export default function TeamSection() {
  return (
    <section className="px-4 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-black md:text-5xl">
            Hamari Team
          </h2>

          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Bharat ke liye technology build karne wale passionate creators.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}