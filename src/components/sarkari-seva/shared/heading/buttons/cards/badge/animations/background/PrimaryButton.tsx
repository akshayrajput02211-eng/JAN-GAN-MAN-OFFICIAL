// components/shared/buttons/PrimaryButton.tsx

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PrimaryButton({
  children,
}: Props) {
  return (
    <button
      className="
      h-12
      px-6
      rounded-2xl
      bg-green-600
      hover:bg-green-700
      text-white
      font-semibold
      transition-all
      shadow-lg
    "
    >
      {children}
    </button>
  );
}