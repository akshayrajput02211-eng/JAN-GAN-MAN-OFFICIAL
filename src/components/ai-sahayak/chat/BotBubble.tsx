"use client";

interface Props {
  text: string;
}

export default function BotBubble({
  text,
}: Props) {
  return (
    <div
      className="
        mb-6

        flex
        justify-start

        px-4
        md:px-8
      "
    >
      <div
        className="
          relative

          max-w-[85%]
          md:max-w-[60%]

          overflow-hidden

          rounded-[30px]
          rounded-bl-md

          bg-gradient-to-br
          from-[#d9f99d]
          via-[#bef264]
          to-[#a3e635]

          px-6
          py-5

          shadow-[0_10px_35px_rgba(163,230,53,0.25)]
        "
      >
        {/* LIGHT */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.4),transparent_35%)]
          "
        />

        <p
          className="
            relative
            z-10

            text-base
            md:text-xl

            font-medium

            leading-7

            text-[#1d2951]
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
}