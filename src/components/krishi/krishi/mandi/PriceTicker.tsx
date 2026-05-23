
const prices = [
  "Gehu ₹2420",
  "Sarson ₹5800",
  "Makka ₹1820",
  "Dhan ₹2180",
];

export default function PriceTicker() {
  return (
    <div
      className="
      flex gap-6 overflow-hidden
      rounded-2xl bg-green-500 px-6 py-4
      text-white
    "
    >
      {prices.map((item, i) => (
        <span
          key={i}
          className="whitespace-nowrap font-semibold"
        >
          {item}
        </span>
      ))}
    </div>
  );
}