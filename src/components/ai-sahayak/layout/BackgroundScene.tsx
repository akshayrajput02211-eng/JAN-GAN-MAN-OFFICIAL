"use client";

import Image from "next/image";

import hill from "@/assets/ai-sahayak/hill-bg.png";

import c1 from "@/assets/ai-sahayak/cloud-1.png";
import c2 from "@/assets/ai-sahayak/cloud-2.png";
import c3 from "@/assets/ai-sahayak/cloud-3.png";

import f1 from "@/assets/ai-sahayak/flower-yellow.png";
import f2 from "@/assets/ai-sahayak/flower-purple.png";

export default function BackgroundScene() {
  return (
    <>
      {/* SKY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#eaf7ff] to-[#f5fff2]" />

      {/* CLOUD 1 */}
      <Image
        src={c1}
        alt=""
        priority
        className="
          absolute

          left-2 top-6
          w-24

          opacity-90

          sm:left-6 sm:top-8 sm:w-32

          md:left-10 md:top-10 md:w-40

          lg:w-44
        "
      />

      {/* CLOUD 2 */}
      <Image
        src={c2}
        alt=""
        priority
        className="
          absolute

          right-2 top-10
          w-24

          opacity-90

          sm:right-6 sm:top-12 sm:w-32

          md:right-16 md:top-16 md:w-40

          lg:right-20 lg:top-20 lg:w-44
        "
      />

      {/* CLOUD 3 */}
      <Image
        src={c3}
        alt=""
        priority
        className="
          absolute

          left-1/2 top-20
          w-16
          -translate-x-1/2

          opacity-90

          sm:top-24 sm:w-20

          md:top-28 md:w-24

          lg:top-32 lg:w-28
        "
      />

      {/* HILL */}
      <Image
        src={hill}
        alt=""
        priority
        className="
          absolute bottom-0 left-0

          w-full
          min-h-[180px]
          object-cover
          object-bottom

          sm:min-h-[220px]

          md:min-h-[280px]

          lg:min-h-[340px]
        "
      />

      {/* FLOWER LEFT */}
      <Image
        src={f1}
        alt=""
        className="
          absolute

          bottom-3 left-2
          w-10

          sm:bottom-4 sm:left-4 sm:w-12

          md:bottom-5 md:left-6 md:w-14

          lg:left-8 lg:w-16
        "
      />

      {/* FLOWER RIGHT */}
      <Image
        src={f2}
        alt=""
        className="
          absolute

          bottom-3 right-2
          w-10

          sm:bottom-4 sm:right-4 sm:w-12

          md:bottom-5 md:right-6 md:w-14

          lg:right-8 lg:w-16
        "
      />
    </>
  );
}