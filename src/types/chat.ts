export interface ChatMessageType {
  id: number;
  type: "user" | "bot";
  text: string;
}