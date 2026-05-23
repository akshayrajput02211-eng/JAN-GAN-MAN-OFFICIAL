import { Bot } from "lucide-react";

export default function BotAvatar() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-500 shadow-lg">
      <Bot size={18} className="text-white" />
    </div>
  );
}