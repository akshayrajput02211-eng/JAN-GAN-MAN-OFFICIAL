interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>

      {subtitle && (
        <p className="mt-2 text-gray-500 max-w-xl">{subtitle}</p>
      )}
    </div>
  );
}