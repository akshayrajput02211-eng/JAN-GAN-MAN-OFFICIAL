export default function TypingIndicator() {
  return (
    <div className="flex gap-2 px-5">
      <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
      <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 delay-100" />
      <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 delay-200" />
    </div>
  );
}