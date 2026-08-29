import React, { useState } from 'react';
import { GitBranch, Layers, CheckCircle2, Box, Cpu, Cloud, Activity, ArrowRight } from 'lucide-react';
import { profileData } from '../data/profile';
import { SectionHeading } from '../components/common/SectionHeading';
import { Container } from '../components/layout/Container';

const ICONS = [
  GitBranch,
  Layers,
  CheckCircle2,
  Box,
  Cpu,
  Cloud,
  Activity,
];

export const PipelineSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  return (
    <section id="pipeline" className="py-20 border-t border-slate-800/80 bg-surface-400/30 relative">
      <Container>
        <SectionHeading
          badgeText="Methodology & Architecture"
          title="How I Work — The DevOps Lifecycle"
          subtitle="A structured, automated journey from code commit to zero-downtime production deployment and proactive telemetry."
        />

        {/* Step-by-Step Interactive Pipeline Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 pb-8">
          {profileData.pipelineStages.map((stage, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            const isActive = activeStage === idx;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(idx)}
                className={`p-3 rounded-lg border text-left transition-all duration-200 flex flex-col justify-between min-h-[110px] relative ${
                  isActive
                    ? 'bg-surface-200 border-brand-primary shadow-lg shadow-sky-950/30 ring-1 ring-brand-primary/40'
                    : 'bg-surface-300/80 border-slate-800 hover:border-slate-700 hover:bg-surface-200/50'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-brand-primary' : 'text-slate-500'}`}>
                    {stage.number}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-brand-primary' : 'text-slate-400'}`} />
                </div>

                <div className="mt-2">
                  <div className="text-xs font-semibold text-slate-100 leading-tight">
                    {stage.name.split('&')[0]}
                  </div>
                  <div className="font-mono text-[10px] text-slate-400 truncate mt-0.5">
                    {stage.category}
                  </div>
                </div>

                {isActive && (
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-brand-primary" />
                )}
              </button>
            );
          })}
        </div>

        {/* Detailed Active Stage Spotlight Card */}
        <div className="mt-4 p-6 sm:p-8 rounded-2xl bg-surface-300 border border-slate-700/80 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm px-2.5 py-1 rounded bg-brand-primary/10 text-brand-primary border border-brand-primary/30 font-bold">
                  STAGE {profileData.pipelineStages[activeStage].number}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {profileData.pipelineStages[activeStage].name}
                </h3>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {profileData.pipelineStages[activeStage].description}
              </p>

              <div>
                <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2">
                  Applied Tools & Protocols in Resume:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {profileData.pipelineStages[activeStage].tools.map((tool) => (
                    <span
                      key={tool}
                      className="font-mono text-xs px-3 py-1 rounded-md bg-surface-100 text-sky-300 border border-slate-700 shadow-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-surface-200/90 p-5 rounded-xl border border-slate-800 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                <span>STAGE STATUS</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  VERIFIED
                </span>
              </div>
              <div className="space-y-1.5 text-slate-300 text-[11px]">
                <p>• Automated Execution</p>
                <p>• Multi-Environment Isolation</p>
                <p>• Metric-Driven Feedback Loops</p>
              </div>
              <div className="pt-2 text-right">
                <button
                  onClick={() => setActiveStage((prev) => (prev + 1) % profileData.pipelineStages.length)}
                  className="inline-flex items-center gap-1 text-brand-primary hover:text-sky-300 text-xs font-semibold"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};
