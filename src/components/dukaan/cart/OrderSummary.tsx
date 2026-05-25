// ========================================
// FILE: src/components/dukaan/cart/OrderSummary.tsx
// ========================================

"use client";

export default function OrderSummary() {
  const subtotal = 115;
  const delivery = 20;
  const discount = 15;

  const total =
    subtotal + delivery - discount;

  return (
    <div
      className="
        rounded-[34px]
        border border-white/50

        bg-white/80
        p-6

        shadow-lg
        backdrop-blur-xl

        dark:border-white/10
        dark:bg-slate-800/70
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
        Order Summary
      </h2>

      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-slate-500">
            Subtotal
          </span>

          <span className="font-bold">
            ₹{subtotal}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-500">
            Delivery Charge
          </span>

          <span className="font-bold">
            ₹{delivery}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-500">
            Discount
          </span>

          <span className="font-bold text-green-600">
            -₹{discount}
          </span>
        </div>

        <div className="border-t border-dashed border-slate-200 pt-4 dark:border-slate-700">
          <div className="flex items-center justify-between">
            <span
              className="
                text-xl
                font-black
                text-slate-900
                dark:text-white
              "
            >
              Total
            </span>

            <span
              className="
                text-3xl
                font-black
                text-[#16a34a]
              "
            >
              ₹{total}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}