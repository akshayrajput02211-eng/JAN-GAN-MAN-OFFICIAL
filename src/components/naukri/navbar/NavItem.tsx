"use client";

export default function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`
        flex
        flex-col
        items-center

        gap-2

        text-sm
        font-medium

        transition-all
        duration-300

        hover:scale-105

        ${
          active
            ? "text-blue-600"
            : "text-gray-700"
        }
      `}
    >
      {icon}

      <span>{label}</span>
    </button>
  );
}