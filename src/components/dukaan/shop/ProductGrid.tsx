// ========================================
// FILE: src/components/dukaan/shop/ProductGrid.tsx
// ========================================

"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import CartBar from "./CartBar";

const products = [
  {
    id: 1,
    name: "Aloo",
    quantity: "1kg",
    price: 40,
    originalPrice: 55,
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1000&auto=format&fit=crop",
    category: "Sabzi",
  },
  {
    id: 2,
    name: "Tamatar",
    quantity: "1kg",
    price: 35,
    originalPrice: 50,
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=1000&auto=format&fit=crop",
    category: "Sabzi",
  },
  {
    id: 3,
    name: "Milk",
    quantity: "500ml",
    price: 32,
    originalPrice: 40,
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1000&auto=format&fit=crop",
    category: "Dairy",
  },
  {
    id: 4,
    name: "Chips",
    quantity: "1 pack",
    price: 20,
    originalPrice: 30,
    image:
      "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=1000&auto=format&fit=crop",
    category: "Snacks",
  },
];

export default function ProductGrid() {
  const [cart, setCart] = useState<any>({});

  const addToCart = (id: number) => {
    setCart((prev: any) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decreaseQty = (id: number) => {
    setCart((prev: any) => {
      const updated = { ...prev };

      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }

      return updated;
    });
  };

  const totalItems = Object.values(cart).reduce(
    (acc: any, qty: any) => acc + qty,
    0
  );

  const totalPrice = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + (cart[product.id] || 0) * product.price;
    }, 0);
  }, [cart]);

  return (
    <>
      <div className="space-y-10">
        {["Sabzi", "Snacks", "Dairy"].map((category) => (
          <section key={category} id={category}>
            <h2
              className="
                mb-5 text-2xl font-black
                text-slate-900 dark:text-white
              "
            >
              {category}
            </h2>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {products
                .filter((product) => product.category === category)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    qty={cart[product.id] || 0}
                    addToCart={addToCart}
                    decreaseQty={decreaseQty}
                  />
                ))}
            </div>
          </section>
        ))}
      </div>

      <CartBar items={totalItems} total={totalPrice} />
    </>
  );
}