import React, { useState } from 'react';
import { GitBranch, Layers, CheckCircle2, Box, Cpu, Cloud, Activity, ArrowRight } from 'lucide-react';
import { profileData } from '../data/profile';
import { SectionHeading } from '../components/common/SectionHeading';
import { Container } from '../components/layout/Container';
import { TechIcon } from '../components/icons/TechIcon';

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
    <section id="pipeline" className="py-24 bg-surface-400/50 relative backdrop-blur-sm">
      <Container>
        <SectionHeading
          badgeText="Methodology & Architecture"
          title="How I Work — The DevOps Lifecycle"
          subtitle="A structured, automated pipeline from Git commit to quality validation, container builds, and zero-downtime AWS production deployments."
        />

        {/* 7 Interactive Stage Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 pb-8">
          {profileData.pipelineStages.map((stage, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            const isActive = activeStage === idx;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(idx)}
                className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[120px] relative shadow-lg ${
                  isActive
                    ? 'bg-surface-200 border-brand-primary ring-2 ring-brand-primary/40 shadow-sky-950/50'
                    : 'bg-surface-300/80 border-slate-800 hover:border-slate-700 hover:bg-surface-200/60'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-brand-primary' : 'text-slate-500'}`}>
                    {stage.number}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-brand-primary' : 'text-slate-400'}`} />
                </div>

                <div className="mt-2">
                  <div className="text-xs font-bold text-slate-100 leading-tight">
                    {stage.name}
                  </div>
                  <div className="font-mono text-[10px] text-slate-400 truncate mt-1">
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

        {/* Active Stage Detailed Card */}
        <div className="mt-4 p-6 sm:p-10 rounded-2xl bg-surface-300 border border-slate-700/90 shadow-2xl relative overflow-hidden backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-3 py-1 rounded bg-brand-primary/10 text-brand-primary border border-brand-primary/30 font-bold">
                  STAGE {profileData.pipelineStages[activeStage].number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {profileData.pipelineStages[activeStage].name}
                </h3>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {profileData.pipelineStages[activeStage].description}
              </p>

              <div>
                <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2.5">
                  Applied Tools & Protocols in Resume:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {profileData.pipelineStages[activeStage].tools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-lg bg-surface-100 text-sky-300 border border-slate-700 shadow-sm"
                    >
                      <TechIcon name={tool} className="w-3.5 h-3.5" />
                      <span>{tool}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-surface-200/90 p-6 rounded-xl border border-slate-700/80 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-300 pb-2.5 border-b border-slate-800">
                <span className="text-slate-400">STAGE STATUS</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  VERIFIED PIPELINE
                </span>
              </div>
              <div className="space-y-2 text-slate-300 text-[11px]">
                <p className="flex items-center gap-1.5">
                  <span className="text-brand-primary">✔</span> Automated Git Webhooks
                </p>
                <p className="flex items-center gap-1.5">
                  <span className="text-brand-primary">✔</span> Environment Isolation (Dev/QA/UAT/Prod)
                </p>
                <p className="flex items-center gap-1.5">
                  <span className="text-brand-primary">✔</span> Real-Time CloudWatch Telemetry
                </p>
              </div>
              <div className="pt-3 text-right border-t border-slate-800">
                <button
                  onClick={() => setActiveStage((prev) => (prev + 1) % profileData.pipelineStages.length)}
                  className="inline-flex items-center gap-1.5 text-brand-primary hover:text-sky-300 text-xs font-semibold"
                >
                  <span>Next Lifecycle Stage</span>
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
