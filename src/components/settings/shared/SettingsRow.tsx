"use client";

interface Props {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  rightContent?: React.ReactNode;
}

export default function SettingsRow({
  icon,
  title,
  subtitle,
  rightContent,
}: Props) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-3xl
        border
        border-white/50
        bg-white/70
        p-4
        dark:border-slate-700
        dark:bg-slate-800/70
      "
    >
      <div className="flex items-center gap-4">
        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-yellow-100
            text-yellow-600
            dark:bg-yellow-500/10
            dark:text-yellow-400
          "
        >
          {icon}
        </div>

        <div>
          <p
            className="
              font-semibold
              text-slate-900
              dark:text-white
            "
          >
            {title}
          </p>

          {subtitle && (
            <p
              className="
                text-sm
                text-slate-500
                dark:text-slate-400
              "
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {rightContent}
    </div>
  );
}