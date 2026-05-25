"use client";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function PhoneInput({
  value,
  onChange,
  placeholder = "10 digit mobile number",
}: Props) {
  const handleChange = (input: string) => {
    const cleaned = input.replace(/\D/g, "");

    if (cleaned.length <= 10) {
      onChange(cleaned);
    }
  };

  return (
    <div className="relative">
      
      <div
        className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          text-sm
          font-semibold
          text-slate-500

          dark:text-slate-300
        "
      >
        +91
      </div>

      <input
        type="tel"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        className="
          h-14
          w-full
          rounded-2xl
          border
          border-white/50
          bg-white/70
          pl-16
          pr-5
          text-base
          font-medium
          outline-none
          transition-all

          focus:border-green-500
          focus:ring-4
          focus:ring-green-500/20

          dark:border-slate-700/50
          dark:bg-slate-900/60
          dark:text-white
        "
      />
    </div>
  );
}