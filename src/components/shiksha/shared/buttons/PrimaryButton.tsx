import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PrimaryButton({ children }: Props) {
  return (
    <button
      className="
        rounded-2xl

        bg-[#2563eb]
        hover:bg-[#1d4ed8]

        text-white

        px-6
        py-3

        font-semibold
        tracking-wide

        shadow-lg
        shadow-blue-500/30

        border
        border-blue-400/20

        transition-all
        duration-300

        hover:scale-105
        hover:shadow-blue-500/40

        active:scale-95

        dark:bg-[#1d4ed8]
        dark:hover:bg-[#2563eb]
        dark:border-blue-500/20
      "
    >
      {children}
    </button>
  );
}