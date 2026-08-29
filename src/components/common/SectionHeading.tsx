import React from 'react';

interface SectionHeadingProps {
  badgeText?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badgeText,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  return (
    <div
      className={`mb-12 ${
        align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'
      } ${className}`}
    >
      {badgeText && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary font-mono text-xs mb-3 font-medium tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
          {badgeText}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-100">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
