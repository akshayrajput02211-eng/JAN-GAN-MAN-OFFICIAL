"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  show: {
    opacity: 1,
    y: 0,
  },
};

export default function StaggerContainer({
  children,
}: Props) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div variants={item}>
        {children}
      </motion.div>
    </motion.div>
  );
}