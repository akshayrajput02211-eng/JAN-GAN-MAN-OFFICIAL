"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function DocSearchBar({
  value,
  onChange,
}: Props) {
  return (
    <div
      className="
        bg-white/70
        dark:bg-slate-800/70
        backdrop-blur-xl
        border border-white/50
        rounded-[28px]
        p-4
        shadow-xl
      "
    >
      <input
        type="text"
        placeholder="Kaunsi yojana ke documents chahiye?"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          bg-transparent
          outline-none
          text-slate-800
          dark:text-white
          placeholder:text-slate-500
          text-lg
        "
      />
    </div>
  );
}