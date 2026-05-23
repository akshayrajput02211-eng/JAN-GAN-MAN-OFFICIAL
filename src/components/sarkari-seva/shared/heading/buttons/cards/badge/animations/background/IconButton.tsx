// components/shared/buttons/IconButton.tsx

import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
}

export default function IconButton({
  icon,
}: Props) {
  return (
    <button
      className="
      h-10 w-10
      rounded-xl
      bg-white
      border
      flex items-center justify-center
      hover:shadow-md
      transition
    "
    >
      {icon}
    </button>
  );
}