import UserBubble from "./UserBubble";
import BotBubble from "./BotBubble";

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