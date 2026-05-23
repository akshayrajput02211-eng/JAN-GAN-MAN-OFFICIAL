
export default function SellProductCard() {
  return (
    <div
      className="
      rounded-[30px]
      bg-gradient-to-br from-green-500 to-emerald-700
      p-8 text-white
      shadow-2xl
    "
    >
      <h2 className="text-3xl font-black">
        Apna Product Bechein
      </h2>

      <p className="mt-4 text-white/80">
        Better daam payein aur direct buyers se judein.
      </p>

      <button
        className="
        mt-8 rounded-2xl
        bg-white px-6 py-4
        text-sm font-bold text-green-700
      "
      >
        Product List Karein
      </button>
    </div>
  );
}