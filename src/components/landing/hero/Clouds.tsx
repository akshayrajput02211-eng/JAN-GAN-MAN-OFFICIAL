"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Clouds() {
  return (
    <>

      {/* Left Big */}
      <motion.div
        className="absolute top-2 left-12 z-10"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/hero/cloud l 01.png"
          alt="cloud"
          width={320}
          height={120}
        />
      </motion.div>

      {/* Left Small */}
      <motion.div
        className="absolute top-44 left-88 z-10"
        animate={{
          y: [0, -10, 0],
          x: [0, -12, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/hero/cloud l 02.png"
          alt="cloud"
          width={140}
          height={80}
        />
      </motion.div>

      {/* Right Small */}
      <motion.div
        className="absolute top-2 right-28 z-10"
        animate={{
          x: [0, 40, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/hero/cloud r01.png"
          alt="cloud"
          width={320}
          height={70}
        />
      </motion.div>

      {/* Right Big */}
      <motion.div
        className="absolute top-0 right-88 z-10"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/hero/cloud r 02.png"
          alt="cloud"
          width={270}
          height={100}
        />
      </motion.div>

    </>
  );
}