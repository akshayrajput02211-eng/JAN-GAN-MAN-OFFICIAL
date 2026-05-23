// components/services/ServiceCard.tsx

import { ReactNode } from "react";

interface Props {
  title: string;
  icon: ReactNode;
  desc: string;
}

export default function ServiceCard({
  title,
  icon,
  desc,
}: Props) {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      p-5
      border
      hover:-translate-y-1
      hover:shadow-xl
      transition-all
    "
    >
      <div
        className="
        h-12 w-12
        rounded-2xl
        bg-green-100
        flex items-center justify-center
        text-green-600
      "
      >
        {icon}
      </div>

      <h3 className="mt-4 font-semibold text-lg">
        {title}
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        {desc}
      </p>
    </div>
  );
}