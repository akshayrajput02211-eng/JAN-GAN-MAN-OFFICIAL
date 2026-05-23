// components/shared/heading/SectionHeading.tsx

interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-8">
      <h2
        className="
        text-3xl
        font-bold
        text-gray-900
      "
      >
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-500 mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}