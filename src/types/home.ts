export type ServiceIcon =
  | "job"
  | "shop"
  | "scheme"
  | "health"
  | "education"
  | "farming"
  | "police"
  | "ai";

export interface Service {
  title: string;
  description: string;
  icon: string;
  tone: string;
  href: string;
}

export type UpdateItem = {
  title: string;
  description: string;
  time: string;
  icon: string;
};
