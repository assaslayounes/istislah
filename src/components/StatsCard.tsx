import type { ReactNode } from 'react';

interface StatsCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  delay?: number;
}

export default function StatsCard({ icon, value, label, delay = 0 }: StatsCardProps) {
  return (
    <div
      className="flex items-center gap-3 px-5 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15 min-w-[170px] animate-scale-in hover:bg-white/15 transition-colors duration-200"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-400/30 text-primary-100">
        {icon}
      </div>
      <div className="text-right">
        <p className="text-xl font-extrabold text-white leading-none mb-0.5">
          {value}
        </p>
        <p className="text-[11px] text-primary-200/80 font-medium">
          {label}
        </p>
      </div>
    </div>
  );
}
