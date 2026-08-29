import React, { useState, useEffect } from 'react';
import { ArrowRight, FileDown, Layers, Terminal, Sparkles, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/profile';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { TechIcon } from '../components/icons/TechIcon';
import { TopologyCanvas } from '../components/three/TopologyCanvas';

interface HeroProps {
  onOpenTerminal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const [subTitleIndex, setSubTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubTitleIndex((prev) => (prev + 1) % profileData.subTitles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="emerald" pulse size="md">
                AVAILABLE FOR DEVOPS ROLES
              </Badge>
              <Badge variant="slate" size="md">
                PUNE, MAHARASHTRA, INDIA
              </Badge>
              {onOpenTerminal && (
                <button
                  onClick={onOpenTerminal}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-slate-700/80 bg-surface-100/90 hover:bg-surface-50 text-slate-300 text-xs font-mono transition-all shadow-sm"
                >
                  <Terminal className="w-3.5 h-3.5 text-brand-primary" />
                  <span>Launch Shell ($ whoami)</span>
                </button>
              )}
            </div>

            {/* Name & Animated Dynamic Subtitle */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase drop-shadow-md">
                {profileData.name}
              </h1>
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-400 to-amber-400">
                  {profileData.subTitles[subTitleIndex]}
                </span>
              </div>
            </div>

            {/* Interactive Tech Badge Bar with Real Logos */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-surface-200/90 border border-slate-700/80 font-mono text-xs text-slate-200 shadow-md">
                <TechIcon name="aws" className="w-4 h-4" />
                <span className="font-semibold text-amber-400">AWS</span>
              </div>
              <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-surface-200/90 border border-slate-700/80 font-mono text-xs text-slate-200 shadow-md">
                <TechIcon name="kubernetes" className="w-4 h-4" />
                <span className="font-semibold text-sky-400">Kubernetes</span>
              </div>
              <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-surface-200/90 border border-slate-700/80 font-mono text-xs text-slate-200 shadow-md">
                <TechIcon name="docker" className="w-4 h-4" />
                <span className="font-semibold text-blue-400">Docker</span>
              </div>
              <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-surface-200/90 border border-slate-700/80 font-mono text-xs text-slate-200 shadow-md">
                <TechIcon name="jenkins" className="w-4 h-4" />
                <span className="font-semibold text-red-400">Jenkins</span>
              </div>
              <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-surface-200/90 border border-slate-700/80 font-mono text-xs text-slate-200 shadow-md">
                <TechIcon name="terraform" className="w-4 h-4" />
                <span className="font-semibold text-purple-400">Terraform</span>
              </div>
              <div className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-surface-200/90 border border-slate-700/80 font-mono text-xs text-slate-200 shadow-md">
                <TechIcon name="sonarqube" className="w-4 h-4" />
                <span className="font-semibold text-emerald-400">SonarQube</span>
              </div>
            </div>

            {/* Professional Summary */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Building reliable deployment pipelines, multi-environment cloud infrastructure, and zero-downtime microservices across insurance, AdTech, and AI/SaaS platforms.
            </p>

            {/* Action CTAs */}
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
                href="#pipeline"
                icon={<Layers className="w-4 h-4" />}
              >
                EXPLORE PIPELINE
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

            {/* Trust Signals */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-800/80 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>3+ Yrs Hands-on DevOps</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Dev / QA / UAT / Prod</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
                <span>Zero-Downtime Releases</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero 3D Focused Topology Canvas */}
          <div className="lg:col-span-5 h-[380px] sm:h-[440px] lg:h-[500px] rounded-2xl bg-surface-300/60 border border-slate-700/80 p-3 shadow-2xl relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-3 left-4 z-20 flex items-center gap-2 font-mono text-[11px] text-slate-300 bg-surface-200/90 px-3 py-1 rounded-md border border-slate-700/70 shadow">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-ping" />
              <span>Interactive Infrastructure Topology</span>
            </div>

            <div className="absolute bottom-3 left-4 z-20 flex items-center gap-2 font-mono text-[10px] text-slate-400 bg-surface-100/90 px-2 py-0.5 rounded border border-slate-800">
              <span>Scroll down to navigate 3D stages</span>
            </div>

            <TopologyCanvas />
          </div>

        </div>
      </div>
    </section>
  );
};
