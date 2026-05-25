// ========================================
// FILE: src/types/dukaan/shop.ts
// ========================================

export type Product = {
  id: number;
  name: string;
  quantity: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
};

export type CartItem = {
  [key: number]: number;
};