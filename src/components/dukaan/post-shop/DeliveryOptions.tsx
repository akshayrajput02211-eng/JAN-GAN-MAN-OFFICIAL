// ========================================
// FILE: src/components/dukaan/post-shop/DeliveryOptions.tsx
// ========================================

"use client";

const options = [
  "Home Delivery",
  "Pickup",
  "Cash on Delivery",
  "UPI Payment",
];

export default function DeliveryOptions() {
  return (
    <div
      className="
        rounded-[32px]
        border border-orange-100

        bg-white
        dark:bg-slate-800

        p-6
      "
    >
      <h2
        className="
          text-2xl
          font-black
          text-slate-900
          dark:text-white
        "
      >
        Services
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {options.map((item) => (
          <label
            key={item}
            className="
              flex items-center gap-3

              rounded-2xl

              bg-orange-50
              px-5
              py-4
            "
          >
            <input type="checkbox" />

            <span className="font-semibold">
              {item}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}