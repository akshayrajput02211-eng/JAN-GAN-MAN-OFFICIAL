

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
    image: "/image/hero/service/job.png",
  },

  {
    title: "Dukaan",
    description:
      "Apni local dukaan ko online laayein aur digital India se jud jaayein.",
    icon: Store,
    href: "/dukaan",
    color: "from-pink-500 to-rose-500",
    image: "/image/hero/service/shop.png",
  },

  {
    title: "Sarkari Seva",
    description:
      "Yojana, documents, certificates aur government services ek jagah.",
    icon: Shield,
    href: "/sarkari-seva",
    color: "from-orange-500 to-yellow-500",
    image: "/image/hero/service/yojna.png",
  },

  {
    title: "Swasthya",
    description:
      "Health schemes, hospitals, AI health support aur emergency seva.",
    icon: HeartPulse,
    href: "/swasthya",
    color: "from-red-500 to-pink-500",
    image: "/image/hero/service/doctor.png",
  },

  {
    title: "Krishi",
    description:
      "Farmers ke liye mandi rates, weather, subsidy aur farming tools.",
    icon: Tractor,
    href: "/krishi",
    color: "from-green-500 to-emerald-500",
    image: "/image/hero/service/farmer.png",
  },

  {
    title: "Shiksha",
    description:
      "Scholarships, online learning aur student support services.",
    icon: GraduationCap,
    href: "/shiksha",
    color: "from-violet-500 to-purple-500",
    image: "/image/hero/service/teacher.png",
  },

  {
    title: "AI Help",
    description:
      "AI assistant se turant help paayein Hindi aur local language mein.",
    icon: Sparkles,
    href: "/ai-sahayak",
    color: "from-fuchsia-500 to-indigo-500",
    image: "/image/hero/service/ai.png",
  },

  {
    title: "Suraksha",
    description:
      "Bank account, loans, insurance aur digital banking services.",
    icon: Landmark,
    href: "/suraksha",
    color: "from-yellow-500 to-orange-500",
    image: "/image/hero/service/police.png",
  },
];