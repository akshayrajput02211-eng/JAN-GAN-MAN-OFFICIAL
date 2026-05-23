"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroImage() {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 6,
      }}
      className="relative"
    >
      <div
        className="
        absolute -right-10 -top-10
        h-40 w-40 rounded-full
        bg-green-400/20 blur-3xl
      "
      />

  <div className="relative min-h-[360px] w-full overflow-hidden rounded-[32px]">
  <Image
    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    alt="Police patrol"
    fill
    className="object-cover"
  />
</div>
    </motion.div>
  );
}