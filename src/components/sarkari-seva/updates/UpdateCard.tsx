// components/updates/UpdateCard.tsx

interface Props {
  title: string;
  amount?: string;
  date: string;
}

export default function UpdateCard({
  title,
  amount,
  date,
}: Props) {
  return (
    <div
      className="
      bg-white
      border
      rounded-3xl
      p-5
      hover:shadow-xl
      transition
    "
    >
      <h3 className="font-semibold text-lg">
        {title}
      </h3>

      {amount && (
        <p className="text-3xl font-bold text-green-600 mt-3">
          {amount}
        </p>
      )}

      <p className="text-sm text-gray-500 mt-4">
        Last Date:
      </p>

      <p className="font-semibold mt-1">
        {date}
      </p>

      <button
        className="
        mt-5
        h-11
        w-full
        rounded-2xl
        bg-green-600
        text-white
        font-semibold
      "
      >
        Apply Now
      </button>
    </div>
  );
}