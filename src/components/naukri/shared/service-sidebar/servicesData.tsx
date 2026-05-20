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
    icon: <Briefcase size={20} />,
    href: "/naukri",
    color: "from-blue-500 to-cyan-500",
  },

  {
    title: "Police",
    icon: <Shield size={20} />,
    href: "/police",
    color: "from-indigo-500 to-violet-500",
  },

  {
    title: "AI Sahayak",
    icon: <Sparkles size={20} />,
    href: "/ai-sahayak",
    color: "from-purple-500 to-pink-500",
  },

  {
    title: "Health",
    icon: <HeartPulse size={20} />,
    href: "/health",
    color: "from-rose-500 to-red-500",
  },

  {
    title: "Krishi",
    icon: <Tractor size={20} />,
    href: "/krishi",
    color: "from-green-500 to-emerald-500",
  },

  {
    title: "Shiksha",
    icon: <GraduationCap size={20} />,
    href: "/shiksha",
    color: "from-orange-500 to-amber-500",
  },

  {
    title: "Yojana",
    icon: <Landmark size={20} />,
    href: "/yojana",
    color: "from-sky-500 to-blue-500",
  },

  {
    title: "Dukaan",
    icon: <Store size={20} />,
    href: "/dukaan",
    color: "from-pink-500 to-rose-500",
  },
];