import {
  Home,
  Store,
  Package,
  CirclePlus,
  MessageCircle,
  User,
} from "lucide-react";

export const navItems = [
  {
    icon: Home,
    label: "Home",
    href: "/",
  },

  {
    icon: Store,
    label: "Shops",
    href: "/shops",
  },

  {
    icon: CirclePlus,
    label: "Post",
    href: "/post-shop",
    center: true,
  },

  {
    icon: Package,
    label: "Orders",
    href: "/orders",
  },

  {
    icon: MessageCircle,
    label: "Chat",
    href: "/messages",
  },

  {
    icon: User,
    label: "Profile",
    href: "/profile",
  },
];