// ========================================
// FILE: src/data/naukri/job-categories.ts
// ========================================

export interface JobCategory {
  id: number;
  name: string;
  icon?: string;
  color?: string;
}

export const jobCategories: JobCategory[] = [
  {
    id: 1,
    name: "Construction",
    icon: "🏗️",
    color: "#f59e0b",
  },
  {
    id: 2,
    name: "Farming",
    icon: "🌾",
    color: "#16a34a",
  },
  {
    id: 3,
    name: "Driving",
    icon: "🚚",
    color: "#2563eb",
  },
  {
    id: 4,
    name: "Domestic Work",
    icon: "🏠",
    color: "#ec4899",
  },
  {
    id: 5,
    name: "Security",
    icon: "🛡️",
    color: "#7c3aed",
  },
  {
    id: 6,
    name: "Delivery",
    icon: "📦",
    color: "#ea580c",
  },
  {
    id: 7,
    name: "Electrician",
    icon: "⚡",
    color: "#eab308",
  },
  {
    id: 8,
    name: "Plumbing",
    icon: "🔧",
    color: "#0ea5e9",
  },
  {
    id: 9,
    name: "Factory Work",
    icon: "🏭",
    color: "#64748b",
  },
  {
    id: 10,
    name: "Shop Helper",
    icon: "🛒",
    color: "#22c55e",
  },
  {
    id: 11,
    name: "Cook / Hotel Staff",
    icon: "🍛",
    color: "#ef4444",
  },
  {
    id: 12,
    name: "Cleaner",
    icon: "🧹",
    color: "#14b8a6",
  },
  {
    id: 13,
    name: "Tailor",
    icon: "🧵",
    color: "#8b5cf6",
  },
  {
    id: 14,
    name: "Mechanic",
    icon: "🛠️",
    color: "#475569",
  },
  {
    id: 15,
    name: "Warehouse",
    icon: "📍",
    color: "#0f766e",
  },
];