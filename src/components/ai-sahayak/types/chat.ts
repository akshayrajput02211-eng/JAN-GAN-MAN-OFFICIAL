// src/components/ai-sahayak/types/chat.ts

export interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  time?: string;
}