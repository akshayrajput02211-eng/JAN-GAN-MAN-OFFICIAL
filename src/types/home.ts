export type ServiceIcon =
  | "job"
  | "shop"
  | "scheme"
  | "health"
  | "education"
  | "farming"
  | "police"
  | "ai";

export type Service = {
  title: string;
  description: string;
  icon: ServiceIcon;
  tone: string;
};

export type UpdateItem = {
  title: string;
  description: string;
  time: string;
  icon: string;
};