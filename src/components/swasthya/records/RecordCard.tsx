interface Props {
  title: string;
  icon: string;
  desc: string;
}

export default function RecordCard({
  title,
  icon,
  desc,
}: Props) {
  return (
    <div
      className="
        group

        relative

        overflow-hidden

        rounded-[28px]

        border border-white/40

        bg-white/70

        p-6

        backdrop-blur-2xl

        shadow-[0_10px_40px_rgba(0,0,0,0.04)]

        transition-all
        duration-300

        hover:-translate-y-2
        hover:bg-white
      "
    >
      {/* GLOW */}

      <div
        className="
          absolute
          right-[-40px]
          top-[-40px]

          h-[120px]
          w-[120px]

          rounded-full

          bg-green-100/40

          blur-3xl
        "
      />

      {/* ICON */}

      <div
        className="
          relative z-10

          flex
          h-16
          w-16

          items-center
          justify-center

          rounded-2xl

          bg-gradient-to-br
          from-green-100
          to-emerald-100

          text-3xl

          shadow-sm

          transition-all
          duration-300

          group-hover:scale-110
        "
      >
        {icon}
      </div>

      {/* CONTENT */}

      <div className="relative z-10">
        <h3
          className="
            mt-5

            text-xl
            font-black

            text-slate-900
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2

            text-sm
            leading-7

            text-slate-600
          "
        >
          {desc}
        </p>

        <button
          className="
            mt-6

            rounded-2xl

            bg-green-500

            px-5
            py-3

            text-sm
            font-semibold

            text-white

            transition-all
            duration-300

            hover:scale-105
            hover:bg-green-600
          "
        >
          View Record
        </button>
      </div>
    </div>
  );
}