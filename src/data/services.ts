import type { Service } from "@/types/home";

export const services: Service[] = [
  {
    title: "Naukri",
    description: "Kaam dhoondo",
    icon: "Job",
    tone: "purple",
    href: "/naukri",
  },

  {
    title: "Dukaan",
    description: "Paas ki dukaan",
    icon: "Shop",
    tone: "orange",
    href: "/dukaan",
  },

  {
    title: "Sarkari Seva",
    description: "Yojana aur labh",
    icon: "Scheme",
    tone: "yellow",
    href: "/sarkari-seva",
  },

  {
    title: "Swasthya",
    description: "Sehat ki seva",
    icon: "Health",
    tone: "red",
    href: "/swasthya",
  },

  {
    title: "Shiksha",
    description: "Padho aur badho",
    icon: "Education",
    tone: "blue",
    href: "/shiksha",
  },

  {
    title: "Krishi",
    description: "Kheti ki jankari",
    icon: "Farming",
    tone: "green",
    href: "/krishi",
  },

 {
  title: "Police",
  description: "Suraksha aur help",
  icon: "Police",
  tone: "indigo",
  href: "/police",
  image: "/assets/home/police.png",
},

  {
    title: "AI Sahayak",
    description: "Poocho kuch bhi",
    icon: "Ai",
    tone: "pink",
    href: "/ai-sahayak",
  },
];