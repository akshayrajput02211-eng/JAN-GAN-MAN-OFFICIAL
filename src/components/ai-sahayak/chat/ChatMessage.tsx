import UserBubble from "./UserMessage";
import BotBubble from "./BotMessage";

interface Props {
  type: "user" | "bot";
  text: string;
}

export default function ChatMessage({
  type,
  text,
}: Props) {
  return (
    <div className="w-full">
      {type === "user" ? (
        <UserBubble text={text} />
      ) : (
        <BotBubble text={text} />
      )}
    </div>
  );
}