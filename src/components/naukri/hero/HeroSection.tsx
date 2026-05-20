"use client";

import Image from "next/image";
import PostJobForm from "./PostJobForm";
import {
  Clock3,
  RefreshCcw,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        rounded-[40px]
        border
        border-white/60
        bg-gradient-to-br
        from-[#edf7ff]
        via-[#f7fbff]
        to-[#eef9ef]
        shadow-[0_20px_80px_rgba(0,0,0,0.06)]
      "
    >
      {/* FULL BG IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/naukri/housecloud.png"
          alt="background"
          fill
          priority
          className="
            object-cover
            object-center
            scale-[1.02]
            opacity-[0.88]
          "
        />
      </div>

      {/* TOP BLUR */}
      <div
        className="
          absolute
          left-[-120px]
          top-[-120px]
          z-[1]
          h-[320px]
          w-[320px]
          rounded-full
          bg-blue-200/30
          blur-3xl
        "
      />

      {/* MAIN GRID */}
      <div
        className="
          relative
          z-10
          grid
          gap-10

          px-6
          py-10

          lg:grid-cols-[1.1fr_0.9fr]
          lg:px-14
          lg:py-14
        "
      >
        {/* LEFT CONTENT */}
        <div className="relative">
          {/* BADGE */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-green-200
              bg-[#e8f9eb]
              px-5
              py-2
              text-sm
              font-semibold
              text-green-700
            "
          >
            <div className="h-2 w-2 rounded-full bg-green-500" />
            One Day. Right Help.
          </div>

          {/* HEADING */}
          <h1
            className="
              mt-8
              max-w-[650px]

              text-5xl
              font-black
              leading-[1.05]
              tracking-[-2px]
              text-[#18214d]

              md:text-6xl
              lg:text-7xl
            "
          >
            Post a Job for

            <span className="block text-blue-600">
              One Day
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              max-w-[560px]

              text-lg
              leading-relaxed
              text-[#4b5578]

              md:text-2xl
            "
          >
            Roz kaam post karo aur 24 ghante ke andar
            nearby workers se connect ho jao.
          </p>

          {/* FEATURES */}
          <div
            className="
              mt-50
              grid
              gap-5

              sm:grid-cols-2
            "
          >
            <FeatureCard
              icon={<Clock3 size={22} />}
              title="Live for 24 Hours"
              desc="Job 24 ghante tak visible rahega"
            />

            <FeatureCard
              icon={<RefreshCcw size={22} />}
              title="Auto Refresh"
              desc="Automatically next day refresh"
            />
          </div>

          {/* SCENE IMAGE */}
          <div
            className="
              relative
              mt-12
              w-full
            "
          >
           
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="relative flex justify-center lg:justify-end mt-15">
          <div
            className="
              sticky
              top-100
              w-full
              max-w-[4000px]

              rounded-[35px]
              

             

             

              
              
            "
          >
            <PostJobForm />
          </div>
        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div
        className="
          relative
          z-10
          grid
          border-t
          border-white/60
          bg-white/70
          backdrop-blur-xl

          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        <BottomInfo
          title="24 Hour Live"
          desc="Job 24 ghante visible"
        />

        <BottomInfo
          title="Auto Refresh"
          desc="Automatically refresh"
        />

        <BottomInfo
          title="Profile Visible"
          desc="Workers aapko dekhenge"
        />

        <BottomInfo
          title="Call & Message"
          desc="Direct connect"
        />
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="
        flex
        items-start
        gap-4

        rounded-2xl
        border
        border-white/70
        bg-white/70

        p-5

        backdrop-blur-lg
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-blue-100
          text-blue-600
        "
      >
        {icon}
      </div>

      <div>
        <h4 className="font-bold text-[#18214d]">
          {title}
        </h4>

        <p className="mt-1 text-sm text-gray-500">
          {desc}
        </p>
      </div>
    </div>
  );
}

function BottomInfo({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div
      className="
        border-r
        border-white/50

        px-6
        py-6
      "
    >
      <h4 className="font-bold text-blue-600">
        {title}
      </h4>

      <p className="mt-2 text-sm text-gray-500">
        {desc}
      </p>
    </div>
  );
}