export type Message = {
  id: number;
  type: "user" | "bot";
  text: string;
  time: string;
};