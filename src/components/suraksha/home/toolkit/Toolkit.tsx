import ToolItem from "./ToolItem";

export default function Toolkit() {
  return (
    <section className="rounded-[32px] bg-white/70 p-6 backdrop-blur-xl">
      <h2 className="text-2xl font-black">
        Safety Toolkit
      </h2>

      <div className="mt-6 space-y-4">
        <ToolItem title="Live Location" />
        <ToolItem title="Fake Call" />
        <ToolItem title="Audio Recorder" />
      </div>
    </section>
  );
}