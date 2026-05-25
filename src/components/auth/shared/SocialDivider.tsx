"use client";

interface Props {
  text?: string;
}

export default function SocialDivider({
  text = "ya phir",
}: Props) {
  return (
    <div className="my-6 flex items-center gap-4">
      
      <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />

      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
        {text}
      </span>

      <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
    </div>
  );
}