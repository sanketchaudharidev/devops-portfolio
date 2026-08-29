import React from 'react';
import { CheckCircle, TrendingUp, Clock, Database, GitBranch } from 'lucide-react';
import { profileData } from '../data/profile';
import { SectionHeading } from '../components/common/SectionHeading';
import { Container } from '../components/layout/Container';

const IMPACT_ICONS = [
  Clock,
  GitBranch,
  Database,
  TrendingUp,
];

export const Impact: React.FC = () => {
  return (
    <section className="py-20 border-t border-slate-800/80 bg-surface-400/50 relative">
      <Container>
        <SectionHeading
          badgeText="Verified Outcomes"
          title="Selected Measurable Impact"
          subtitle="Direct, factual outcomes achieved across CI/CD implementation, database stability monitoring, and automation pipelines."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData.impact.map((item, index) => {
            const Icon = IMPACT_ICONS[index % IMPACT_ICONS.length];

            return (
              <div
                key={item.label}
                className="p-6 rounded-xl bg-surface-300 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between shadow-lg relative overflow-hidden group"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-100 border border-slate-700/80 flex items-center justify-center text-brand-primary">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                      {item.value}
                    </div>
                    <div className="text-sm font-semibold text-sky-400 font-mono mt-0.5">
                      {item.label}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 font-mono text-[11px] text-slate-400 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{item.context}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
