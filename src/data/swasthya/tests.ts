// ========================================
// FILE: src/data/swasthya/tests.ts
// ========================================

export interface TestItem {
  id: number;
  name: string;
  price: number;
  category: string;
}

export const tests: TestItem[] = [
  {
    id: 1,
    name: "Complete Blood Test",
    price: 399,
    category: "Blood",
  },
  {
    id: 2,
    name: "Urine Test",
    price: 199,
    category: "Urine",
  },
  {
    id: 3,
    name: "Sugar Test",
    price: 149,
    category: "Diabetes",
  },
  {
    id: 4,
    name: "Thyroid Profile",
    price: 499,
    category: "Thyroid",
  },
  {
    id: 5,
    name: "Vitamin D Test",
    price: 799,
    category: "Vitamin",
  },
  {
    id: 6,
    name: "Liver Function Test",
    price: 699,
    category: "Liver",
  },
];