interface Props {
  title: string;
  value: string;
}

export default function CalcResult({
  title,
  value,
}: Props) {
  return (
    <div
      className="
        rounded-[32px]
        bg-gradient-to-br
        from-[#16a34a]
        to-emerald-500
        p-6
        text-white
        shadow-xl
      "
    >
      <p className="text-sm opacity-80">
        {title}
      </p>

      <h2
        className="
          text-3xl
          md:text-5xl
          font-black
          mt-3
          leading-tight
        "
      >
        {value}
      </h2>
    </div>
  );
}