import VoiceButton from "@/components/ai-sahayak/voice/VoiceButton";

export default function ChatInput() {
  return (
    <div className="flex items-center gap-3">
      <input
        className="flex-1 rounded-xl border p-4"
        placeholder="Message..."
      />

      <VoiceButton />
    </div>
  );
}