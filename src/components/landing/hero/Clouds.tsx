"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Clouds() {
  return (
    <>
      {/* Left Big */}
      <motion.div
        className="
          absolute
          top-20
          md:top-4
          left-2
          sm:left-6
          md:left-12
          z-10
        "
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
          className="
            w-[140px]
            sm:w-[180px]
            md:w-[320px]
            h-auto
            object-contain
          "
        />
      </motion.div>

      {/* Left Small */}
      <motion.div
        className="
          absolute
          top-40
          md:top-40
          left-[9rem]
          sm:left-[14rem]
          md:left-[22rem]
          z-10
        "
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
          className="
            w-[70px]
            sm:w-[90px]
            md:w-[140px]
            h-auto
            object-contain
          "
        />
      </motion.div>

      {/* Right Small */}
      <motion.div
        className="
          absolute
          top-20
          md:top-4
          right-2
          sm:right-6
          md:right-20
          z-10
        "
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
          className="
            w-[140px]
            sm:w-[180px]
            md:w-[320px]
            h-auto
            object-contain
          "
        />
      </motion.div>

      {/* Right Big */}
      <motion.div
        className="
          absolute
          top-16
          md:top-0
          right-[8rem]
          sm:right-[14rem]
          md:right-[22rem]
          z-10
        "
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
          className="
            w-[110px]
            sm:w-[160px]
            md:w-[270px]
            h-auto
            object-contain
          "
        />
      </motion.div>
    </>
  );
}