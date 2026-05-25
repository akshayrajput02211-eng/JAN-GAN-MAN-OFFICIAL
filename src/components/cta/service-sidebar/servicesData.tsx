"use client";

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

export const services = [
  {
    title: "Naukri",
    subtitle: "Jobs & Employment",
    icon: <Briefcase size={20} />,
    href: "/naukri",
    color: "from-blue-500 via-cyan-500 to-sky-500",
    glow: "shadow-blue-500/20",
  },

  {
    title: "Police",
    subtitle: "Safety & Security",
    icon: <Shield size={20} />,
    href: "/suraksha",
    color: "from-indigo-500 via-violet-500 to-purple-500",
    glow: "shadow-violet-500/20",
  },

  {
    title: "AI Sahayak",
    subtitle: "Smart Assistant",
    icon: <Sparkles size={20} />,
    href: "/ai-sahayak",
    color: "from-fuchsia-500 via-pink-500 to-rose-500",
    glow: "shadow-pink-500/20",
  },

  {
    title: "Health",
    subtitle: "Medical Support",
    icon: <HeartPulse size={20} />,
    href: "/swasthya",
    color: "from-rose-500 via-red-500 to-orange-500",
    glow: "shadow-red-500/20",
  },

  {
    title: "Krishi",
    subtitle: "Farmer Services",
    icon: <Tractor size={20} />,
    href: "/krishi",
    color: "from-green-500 via-emerald-500 to-lime-500",
    glow: "shadow-green-500/20",
  },

  {
    title: "Shiksha",
    subtitle: "Learning Platform",
    icon: <GraduationCap size={20} />,
    href: "/shiksha",
    color: "from-amber-500 via-orange-500 to-yellow-500",
    glow: "shadow-orange-500/20",
  },

  {
    title: "Yojana",
    subtitle: "Govt Schemes",
    icon: <Landmark size={20} />,
    href: "/sarkari-seva",
    color: "from-sky-500 via-blue-500 to-indigo-500",
    glow: "shadow-sky-500/20",
  },

  {
    title: "Dukaan",
    subtitle: "Village Marketplace",
    icon: <Store size={20} />,
    href: "/dukaan",
    color: "from-pink-500 via-rose-500 to-red-500",
    glow: "shadow-pink-500/20",
  },
];