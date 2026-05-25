import {
  User2,
  Bookmark,
  FileText,
  MapPin,
  Bell,
  ShieldCheck,
  HeartHandshake,
  Settings,
} from "lucide-react";

export const profileMenus = [
  {
    title: "Edit Profile",
    subtitle: "Apni jankari update karo",
    icon: User2,
    href: "/profile/edit",
  },

  {
    title: "Saved Items",
    subtitle: "Saved jobs, products aur schemes",
    icon: Bookmark,
    href: "/profile/saved",
  },

  {
    title: "Meri Listings",
    subtitle: "Aapke posts aur listings",
    icon: FileText,
    href: "/profile/posts",
  },

  {
    title: "Address Book",
    subtitle: "Saved addresses manage karo",
    icon: MapPin,
    href: "/profile/address-book",
  },

  {
    title: "Notifications",
    subtitle: "Latest updates dekho",
    icon: Bell,
    href: "/notifications",
  },

  {
    title: "Suraksha",
    subtitle: "Account safety aur privacy",
    icon: ShieldCheck,
    href: "/suraksha",
  },

  {
    title: "Help & Support",
    subtitle: "Madad aur support pao",
    icon: HeartHandshake,
    href: "/support",
  },

  {
    title: "Settings",
    subtitle: "App settings manage karo",
    icon: Settings,
    href: "/settings",
  },
];