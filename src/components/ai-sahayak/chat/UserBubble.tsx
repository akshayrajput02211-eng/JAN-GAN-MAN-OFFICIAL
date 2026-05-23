"use client";

interface Props {
  text: string;
}

export default function UserBubble({
  text,
}: Props) {
  return (
    <div
      className="
        mb-6

        flex
        justify-end

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
          rounded-br-md

          bg-gradient-to-br
          from-[#2563eb]
          via-[#3b82f6]
          to-[#7c3aed]

          px-6
          py-5

          text-white

          shadow-[0_10px_40px_rgba(37,99,235,0.35)]
        "
      >
        {/* LIGHT */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_35%)]
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

            tracking-wide
          "
        >
          {text}
        </p>
      </div>
    </div>
  );
}