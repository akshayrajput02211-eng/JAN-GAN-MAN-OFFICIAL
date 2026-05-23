// components/shared/badge/Badge.tsx

interface Props {
  text: string;
}

export default function Badge({ text }: Props) {
  return (
    <span
      className="
      inline-flex
      items-center
      px-3 py-1
      rounded-full
      text-xs
      font-semibold
      bg-green-100
      text-green-700
    "
    >
      {text}
    </span>
  );
}