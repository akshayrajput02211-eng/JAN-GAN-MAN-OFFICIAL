const items = [
  "24 Hour Live",
  "Auto Refresh",
  "Profile Visible",
  "Call & Message",
];

export default function FeatureStrip() {
  return (
    <div className="grid border-t bg-white lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item}
          className="border-r px-8 py-6"
        >
          <h4 className="font-bold text-blue-600">
            {item}
          </h4>

          <p className="mt-2 text-sm text-gray-500">
            Job live rahega
          </p>
        </div>
      ))}
    </div>
  );
}