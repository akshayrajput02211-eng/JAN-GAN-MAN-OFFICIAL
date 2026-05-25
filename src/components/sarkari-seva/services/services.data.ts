import type { LucideIcon } from "lucide-react";

import {
  FileText,
  Briefcase,
  Landmark,
} from "lucide-react";

export type Service = {
  title: string;
  desc: string;
  icon: LucideIcon;
  href: string;
};

export const servicesData: Service[] = [
  {
    title: "Sarkari Yojna",
    desc: "Sabhi yojna details",
    icon: FileText,
    href: "/sarkari-seva/yojna",
  },

  {
    title: "Jobs & Exam",
    desc: "Govt jobs & results",
    icon: Briefcase,
    href: "/sarkari-seva/govt-jobs",
  },

  {
    title: "Banking",
    desc: "Jan dhan & loan",
    icon: Landmark,
    href: "/sarkari-seva/banking",
  },
];