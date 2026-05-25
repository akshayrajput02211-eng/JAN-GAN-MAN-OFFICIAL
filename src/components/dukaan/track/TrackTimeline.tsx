// ========================================
// FILE: src/components/dukaan/track/TrackTimeline.tsx
// ========================================

"use client";

import {
  CheckCircle2,
  PackageCheck,
  Bike,
  Home,
} from "lucide-react";

import { motion } from "framer-motion";

import TrackStep from "./TrackStep";

const steps = [
  {
    icon: CheckCircle2,
    title: "Order Placed",
    time: "5:40 PM",
    status: "completed",
  },

  {
    icon: PackageCheck,
    title: "Order Confirmed",
    time: "5:45 PM",
    status: "completed",
  },

  {
    icon: Bike,
    title: "Out for Delivery",
    time: "6:00 PM",
    status: "current",
  },

  {
    icon: Home,
    title: "Delivered",
    time: "Pending",
    status: "pending",
  },
];

export default function TrackTimeline() {
  return (
    <div
      className="
        rounded-[36px]
        border border-white/50

        bg-white/80
        p-6

        shadow-lg
        backdrop-blur-xl

        dark:border-white/10
        dark:bg-slate-800/70
      "
    >
      <h2
        className="
          text-3xl
          font-black
          text-slate-900
          dark:text-white
        "
      >
        Order Timeline
      </h2>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="mt-8 space-y-8"
      >
        {steps.map((step, index) => (
          <TrackStep
            key={step.title}
            step={step}
            isLast={
              index === steps.length - 1
            }
          />
        ))}
      </motion.div>
    </div>
  );
}