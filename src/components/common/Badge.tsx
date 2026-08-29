import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'sky' | 'emerald' | 'amber' | 'indigo' | 'slate' | 'rose';
  size?: 'sm' | 'md';
  className?: string;
  icon?: React.ReactNode;
  pulse?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'slate',
  size = 'md',
  className,
  icon,
  pulse = false,
}) => {
  const variants = {
    sky: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    slate: 'bg-slate-800/80 text-slate-300 border-slate-700/60',
    rose: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  };

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5 font-mono gap-1.5',
    md: 'text-xs px-2.5 py-1 font-mono gap-2',
  };

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center rounded-md border font-medium tracking-tight',
          variants[variant],
          sizes[size],
          className
        )
      )}
    >
      {pulse && (
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-current" />
        </span>
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
