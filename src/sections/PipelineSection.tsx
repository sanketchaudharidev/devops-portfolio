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
    <section id="pipeline" className="py-24 bg-slate-950/20 relative">
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
                className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[120px] relative shadow-lg backdrop-blur-md cursor-pointer ${
                  isActive
                    ? 'bg-slate-900/70 border-sky-400 ring-2 ring-sky-400/30 shadow-sky-950/50 text-white'
                    : 'bg-slate-950/40 border-slate-700/50 hover:border-slate-600 hover:bg-slate-900/40 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-sky-400' : 'text-slate-500'}`}>
                    {stage.number}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-sky-400' : 'text-slate-400'}`} />
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
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-sky-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Card */}
        <div className="mt-4 p-6 sm:p-10 rounded-2xl bg-slate-900/50 border border-sky-500/25 shadow-2xl relative overflow-hidden backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-3 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/30 font-bold">
                  STAGE {profileData.pipelineStages[activeStage].number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {profileData.pipelineStages[activeStage].name}
                </h3>
              </div>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
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
                      className="inline-flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-lg bg-slate-950/50 text-sky-300 border border-slate-700/60 shadow-sm backdrop-blur-sm"
                    >
                      <TechIcon name={tool} className="w-3.5 h-3.5" />
                      <span>{tool}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-xl bg-slate-950/60 border border-slate-800/80 font-mono text-xs text-slate-300 space-y-3 shadow-inner backdrop-blur-md">
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
