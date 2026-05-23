import {
  User,
  ShoppingBag,
  Heart,
  Phone,
  Wallet,
  MapPin,
  Settings,
  CircleHelp,
  LogOut,
  Store,
} from "lucide-react";

export const profileMenus = [
  {
    title: "Meri Jankari",
    subtitle: "Apni personal jankari dekhein aur update karein",
    icon: User,
  },
  {
    title: "Mere Orders",
    subtitle: "Aapke sabhi orders ki jankari",
    icon: ShoppingBag,
  },
  {
    title: "Meri Post / Listings",
    subtitle: "Aapke dwara ki gayi posts aur listings",
    icon: Store,
  },
  {
    title: "Saved Items",
    subtitle: "Aapke save kiye gaye items",
    icon: Heart,
  },
  {
    title: "Call History",
    subtitle: "Aapke calls ka itihaas",
    icon: Phone,
  },
  {
    title: "Wallet",
    subtitle: "Wallet balance aur transactions",
    icon: Wallet,
  },
  {
    title: "Address Book",
    subtitle: "Saved addresses",
    icon: MapPin,
  },
  {
    title: "Settings",
    subtitle: "App settings aur preferences",
    icon: Settings,
  },
  {
    title: "Help & Support",
    subtitle: "Support aur sahayata",
    icon: CircleHelp,
  },
  {
    title: "Logout",
    subtitle: "Apne account se logout karein",
    icon: LogOut,
  },
];