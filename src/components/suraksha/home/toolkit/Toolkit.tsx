import ToolItem from "./ToolItem";

export default function Toolkit() {
  return (
    <section
      className="
        rounded-[32px]

        border border-white/70

        bg-white/70

        p-6

        backdrop-blur-xl

        dark:border-slate-700/50
        dark:bg-slate-800/70
      "
    >
      <h2
        className="
          text-2xl font-black
          text-slate-900

          dark:text-white
        "
      >
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