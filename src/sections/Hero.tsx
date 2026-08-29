import React from 'react';
import { ArrowRight, FileDown, ShieldCheck, Layers, Terminal } from 'lucide-react';
import { profileData } from '../data/profile';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { TopologyCanvas } from '../components/three/TopologyCanvas';

interface HeroProps {
  onOpenTerminal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background radial glow & grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & Clear 10-second Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Telemetry Status Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="emerald" pulse size="md">
                AVAILABLE FOR ROLES
              </Badge>
              <Badge variant="slate" size="md">
                PUNE, MAHARASHTRA, INDIA
              </Badge>
              {onOpenTerminal && (
                <button
                  onClick={onOpenTerminal}
                  className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-slate-700/80 bg-surface-100 hover:bg-surface-50 text-slate-300 text-xs font-mono transition-colors"
                >
                  <Terminal className="w-3 h-3 text-brand-primary" />
                  <span>Launch Shell</span>
                </button>
              )}
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase">
                {profileData.name}
              </h1>
              <div className="text-xl sm:text-2xl lg:text-3xl font-mono font-semibold text-brand-primary tracking-tight">
                {profileData.title}
              </div>
            </div>

            {/* Core Tech Pill Bar */}
            <div className="inline-flex flex-wrap items-center gap-2 py-1.5 px-3 rounded-lg bg-surface-200/80 border border-slate-800 font-mono text-xs text-slate-300">
              <span className="text-sky-400 font-semibold">AWS</span>
              <span className="text-slate-600">•</span>
              <span className="text-blue-400 font-semibold">CI/CD</span>
              <span className="text-slate-600">•</span>
              <span className="text-indigo-400 font-semibold">Kubernetes</span>
              <span className="text-slate-600">•</span>
              <span className="text-emerald-400 font-semibold">Docker</span>
              <span className="text-slate-600">•</span>
              <span className="text-amber-400 font-semibold">Terraform</span>
            </div>

            {/* Professional Statement */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Building reliable deployment pipelines, cloud infrastructure, and production-ready environments with automated quality gates and zero-downtime releases.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Button
                variant="primary"
                size="md"
                href="#experience"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                VIEW EXPERIENCE
              </Button>

              <Button
                variant="secondary"
                size="md"
                href="#projects"
                icon={<Layers className="w-4 h-4" />}
              >
                EXPLORE PROJECTS
              </Button>

              <Button
                variant="outline"
                size="md"
                href={profileData.resumeUrl}
                download={profileData.resumeFilename}
                icon={<FileDown className="w-4 h-4" />}
              >
                DOWNLOAD RESUME
              </Button>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-800/80 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>3+ Yrs Hands-on DevOps</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
                <span>Dev / QA / UAT / Prod</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                <span>Zero-Downtime Releases</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Topology Infrastructure Scene */}
          <div className="lg:col-span-5 h-[380px] sm:h-[420px] lg:h-[500px] rounded-2xl bg-surface-300/40 border border-slate-800/80 p-2 shadow-2xl relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-3 left-4 z-20 flex items-center gap-2 font-mono text-[11px] text-slate-400 bg-surface-200/80 px-2.5 py-1 rounded border border-slate-700/60">
              <span className="w-2 h-2 rounded-full bg-brand-primary" />
              <span>CI/CD & Cloud Topology Graph</span>
            </div>

            <TopologyCanvas />
          </div>

        </div>
      </div>
    </section>
  );
};
