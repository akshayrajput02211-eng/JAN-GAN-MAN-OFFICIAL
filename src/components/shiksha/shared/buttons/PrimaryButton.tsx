import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PrimaryButton({ children }: Props) {
  return (
    <button
      className="
        rounded-2xl
        bg-green-600
        text-white
        px-6
        py-3
        font-semibold
        shadow-lg
        shadow-green-500/30
        transition-all
        duration-300
        hover:scale-105
        hover:bg-green-700
        active:scale-95
      "
    >
      {children}
    </button>
  );
}