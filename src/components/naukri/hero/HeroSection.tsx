"use client";

import Image from "next/image";

import {
  Clock3,
  MapPin,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";

import PostJobForm from "./PostJobForm";

const features = [
  {
    icon: <Clock3 size={18} />,
    title: "24 Hour Live",
  },
  {
    icon: <RefreshCcw size={18} />,
    title: "Auto Refresh",
  },
  {
    icon: <ShieldCheck size={18} />,
    title: "Verified Workers",
  },
  {
    icon: <MapPin size={18} />,
    title: "Nearby Jobs",
  },
];

export default function HeroSection() {
  return (
    <section
      className="
        relative
        overflow-hidden

        rounded-[36px]

        border
        border-white/50

        bg-gradient-to-br
        from-[#eef6ff]
        via-[#f8fbff]
        to-[#f4fff5]

        shadow-[0_20px_80px_rgba(0,0,0,0.06)]
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          left-[-120px]
          top-[-120px]

          h-[320px]
          w-[320px]

          rounded-full

          bg-blue-300/20

          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-[-100px]
          right-[-100px]

          h-[260px]
          w-[260px]

          rounded-full

          bg-green-300/20

          blur-3xl
        "
      />

      {/* MAIN CONTENT */}

      <div
        className="
          relative
          z-10

          grid
          gap-12

          px-5
          py-8

          lg:grid-cols-[1.05fr_0.95fr]

          lg:px-10
          lg:py-10
        "
      >
        {/* LEFT SIDE */}

        <div
          className="
            flex
            flex-col
            justify-center
          "
        >
          {/* BADGE */}

          <div
            className="
              inline-flex
              w-fit
              items-center
              gap-2

              rounded-full

              border
              border-green-200

              bg-green-50

              px-4
              py-2

              text-sm
              font-semibold

              text-green-700
            "
          >
            <div className="h-2 w-2 rounded-full bg-green-500" />

            Trusted Daily Jobs Platform
          </div>

          {/* TITLE */}

          <h1
            className="
              mt-6

              max-w-[650px]

              text-4xl
              sm:text-5xl
              lg:text-7xl

              font-black

              leading-[1.05]

              tracking-[-2px]

              text-[#18214d]
            "
          >
            Find Daily Jobs
            <span className="block text-blue-600">
              Near Your Area
            </span>
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mt-6

              max-w-[560px]

              text-base
              sm:text-lg
              lg:text-xl

              leading-relaxed

              text-[#4b5578]
            "
          >
            Nearby workers aur local job providers se
            instantly connect ho jao. Roz naye kaam,
            verified profiles aur direct calling support.
          </p>

          {/* CTA */}

          <div
            className="
              mt-8

              flex
              flex-wrap

              gap-4
            "
          >
            <button
              className="
                rounded-2xl

                bg-gradient-to-r
                from-blue-600
                to-blue-500

                px-6
                py-4

                text-sm
                sm:text-base

                font-bold
                text-white

                shadow-[0_10px_30px_rgba(37,99,235,0.35)]

                transition-all
                duration-300

                hover:scale-[1.03]
              "
            >
              Yahan Apne Liye Saare Job Dekhe
            </button>

            <button
              className="
                rounded-2xl

                border
                border-[#dbe4f0]

                bg-white/70

                px-6
                py-4

                text-sm
                sm:text-base

                font-bold

                text-[#18214d]

                backdrop-blur-xl

                transition-all
                duration-300

                hover:bg-white
              "
            >
              Kaam Post Karein
            </button>
          </div>

          {/* FEATURES */}

          <div
            className="
              mt-10

              grid
              gap-4

              sm:grid-cols-2
            "
          >
            {features.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  items-center
                  gap-3

                  rounded-2xl

                  border
                  border-white/60

                  bg-white/70

                  px-4
                  py-4

                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10

                    items-center
                    justify-center

                    rounded-xl

                    bg-blue-100

                    text-blue-600
                  "
                >
                  {item.icon}
                </div>

                <div>
                  <h4
                    className="
                      text-sm
                      font-bold

                      text-[#18214d]
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      text-xs
                      text-gray-500
                    "
                  >
                    Professional support
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div
          className="
            relative

            flex
            items-center
            justify-center
          "
        >
          {/* IMAGE */}

          <div
            className="
              absolute
              inset-0

              hidden
              lg:block
            "
          >
            <Image
              src="/images/naukri/housecloud.png"
              alt="background"
              fill
              priority
              className="
                object-contain
                opacity-20
              "
            />
          </div>

          {/* FORM */}

          <div
            className="
              relative
              z-10

              w-full
              max-w-[540px]
            "
          >
            <PostJobForm />
          </div>
        </div>
      </div>
    </section>
  );
}