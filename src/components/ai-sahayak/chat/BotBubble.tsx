interface Props {
  text: string;
}

export default function BotBubble({
  text,
}: Props) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[75%] rounded-3xl text-[25px] mt-40 bg-lime-300 px-20 py-6 shadow-lg">
        {text}
      </div>
    </div>
  );
}