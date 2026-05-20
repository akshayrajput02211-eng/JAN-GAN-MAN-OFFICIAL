"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Clouds() {
  return (
    <>
      {/* Left Big */}
      <motion.div
        className="absolute top-4 left-6 md:left-12 z-10"
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
          src="/images/hero/cloud-l-01.png"
          alt="cloud"
          width={320}
          height={120}
          priority
          className="w-[180px] md:w-[320px] h-auto"
        />
      </motion.div>

      {/* Left Small */}
      <motion.div
        className="absolute top-40 left-[18rem] md:left-[22rem] z-10"
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
          src="/images/hero/cloud-l-02.png"
          alt="cloud"
          width={140}
          height={80}
          className="w-[90px] md:w-[140px] h-auto"
        />
      </motion.div>

      {/* Right Small */}
      <motion.div
        className="absolute top-4 right-6 md:right-20 z-10"
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
          src="/images/hero/cloud-r-01.png"
          alt="cloud"
          width={320}
          height={70}
          className="w-[180px] md:w-[320px] h-auto"
        />
      </motion.div>

      {/* Right Big */}
      <motion.div
        className="absolute top-0 right-[18rem] md:right-[22rem] z-10"
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
          src="/images/hero/cloud-r-02.png"
          alt="cloud"
          width={270}
          height={100}
          className="w-[160px] md:w-[270px] h-auto"
        />
      </motion.div>
    </>
  );
}