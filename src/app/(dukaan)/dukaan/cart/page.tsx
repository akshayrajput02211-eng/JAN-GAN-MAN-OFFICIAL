// ========================================
// FILE: src/app/(dukaan)/dukaan/cart/page.tsx
// ========================================

import CartHeader from "@/components/dukaan/cart/CartHeader";
import CartItemList from "@/components/dukaan/cart/CartItemList";
import DeliveryAddress from "@/components/dukaan/cart/DeliveryAddress";
import OrderSummary from "@/components/dukaan/cart/OrderSummary";
import PaymentOptions from "@/components/dukaan/cart/PaymentOptions";

export default function CartPage() {
  return (
    <main className="min-h-screen bg-[#f4f8ff] py-6 dark:bg-[#07111f]">
      <div className="mx-auto max-w-5xl space-y-6 px-4 lg:px-6">
        <CartHeader />

        <CartItemList />

        <DeliveryAddress />

        <OrderSummary />

        <PaymentOptions />
      </div>
    </main>
  );
}