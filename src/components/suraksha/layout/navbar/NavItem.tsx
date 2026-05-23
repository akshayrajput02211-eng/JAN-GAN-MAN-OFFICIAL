interface Props {
  title: string;
  active?: boolean;
}

export default function NavItem({
  title,
  active,
}: Props) {
  return (
    <button
      className={`
      relative w-full rounded-2xl px-5 py-4
      text-left font-medium transition-all duration-300
      ${
        active
          ? "bg-green-100 text-green-700"
          : "text-slate-600 hover:bg-slate-100"
      }
    `}
    >
      {title}
    </button>
  );
}