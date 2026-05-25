// ========================================
// FILE: src/data/servicesData.tsx
// ========================================

import type { LucideIcon } from "lucide-react";

import {
  Briefcase,
  Shield,
  Sparkles,
  HeartPulse,
  Tractor,
  GraduationCap,
  Landmark,
  Store,
} from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
  image: string;
}

export const services: ServiceItem[] = [
  {
    title: "Naukri",
    description:
      "Government aur private jobs, internships aur rojgar opportunities.",
    icon: Briefcase,
    href: "/naukri",
    color: "from-blue-500 to-cyan-500",
    image: "/dummy/jobs.png",
  },

  {
    title: "Dukaan",
    description:
      "Apni local dukaan ko online laayein aur digital India se jud jaayein.",
    icon: Store,
    href: "/dukaan",
    color: "from-pink-500 to-rose-500",
    image: "/dummy/shop.png",
  },

  {
    title: "Sarkari Seva",
    description:
      "Yojana, documents, certificates aur government services ek jagah.",
    icon: Shield,
    href: "/sarkari-seva",
    color: "from-orange-500 to-yellow-500",
    image: "/dummy/government.png",
  },

  {
    title: "Healthcare",
    description:
      "Health schemes, hospitals, AI health support aur emergency seva.",
    icon: HeartPulse,
    href: "/healthcare",
    color: "from-red-500 to-pink-500",
    image: "/dummy/healthcare.png",
  },

  {
    title: "Krishi",
    description:
      "Farmers ke liye mandi rates, weather, subsidy aur farming tools.",
    icon: Tractor,
    href: "/krishi",
    color: "from-green-500 to-emerald-500",
    image: "/dummy/farming.png",
  },

  {
    title: "Education",
    description:
      "Scholarships, online learning aur student support services.",
    icon: GraduationCap,
    href: "/education",
    color: "from-violet-500 to-purple-500",
    image: "/dummy/education.png",
  },

  {
    title: "AI Help",
    description:
      "AI assistant se turant help paayein Hindi aur local language mein.",
    icon: Sparkles,
    href: "/ai-help",
    color: "from-fuchsia-500 to-indigo-500",
    image: "/dummy/ai.png",
  },

  {
    title: "Banking",
    description:
      "Bank account, loans, insurance, subsidy aur digital banking services.",
    icon: Landmark,
    href: "/banking",
    color: "from-yellow-500 to-orange-500",
    image: "/dummy/banking.png",
  },
];