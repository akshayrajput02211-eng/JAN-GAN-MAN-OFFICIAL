
"use client";

import CountUp from "react-countup";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  suffix,
  prefix,
  duration = 2,
}: AnimatedCounterProps) {
  return (
    <h3 className="text-4xl font-black tracking-tight text-slate-900">
      <CountUp
        end={value}
        duration={duration}
        separator=","
        prefix={prefix}
        suffix={suffix}
      />
    </h3>
  );
}