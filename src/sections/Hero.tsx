import React, { useState, useEffect } from 'react';
import { ArrowRight, FileDown, Layers, Terminal, Sparkles, ShieldCheck, Activity, Cloud, CheckCircle2, Play } from 'lucide-react';
import { profileData } from '../data/profile';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { TechIcon } from '../components/icons/TechIcon';

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
    <section className="relative min-h-[95vh] lg:min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-28 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Left Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Status Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="emerald" pulse size="md">
                AVAILABLE FOR DEVOPS ROLES
              </Badge>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-sky-500/30 bg-slate-900/40 text-slate-300 font-mono text-xs shadow-sm backdrop-blur-md">
                <Cloud className="w-3.5 h-3.5 text-sky-400" />
                <span>AWS Cloud Infrastructure</span>
              </div>
              {onOpenTerminal && (
                <button
                  onClick={onOpenTerminal}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-slate-700/60 bg-slate-900/40 hover:bg-slate-800/60 text-slate-300 text-xs font-mono transition-all shadow-sm cursor-pointer backdrop-blur-md"
                  title="Open DevOps Terminal ($ whoami)"
                >
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>Launch Shell ($ whoami)</span>
                </button>
              )}
            </div>

            {/* Name & Animated Dynamic Role Subtitle */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase drop-shadow-2xl">
                {profileData.name}
              </h1>
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400 drop-shadow">
                  {profileData.subTitles[subTitleIndex]}
                </span>
              </div>
            </div>

            {/* Tech Stack Pills with Official Vector Logos */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="flex items-center gap-2 py-1.5 px-3 rounded-lg bg-slate-900/40 border border-sky-500/30 font-mono text-xs text-slate-200 shadow-md backdrop-blur-md hover:border-sky-400/60 transition-all">
                <TechIcon name="aws" className="w-4 h-4" />
                <span className="font-semibold text-sky-400">AWS</span>
              </div>
              <div className="flex items-center gap-2 py-1.5 px-3 rounded-lg bg-slate-900/40 border border-sky-500/30 font-mono text-xs text-slate-200 shadow-md backdrop-blur-md hover:border-sky-400/60 transition-all">
                <TechIcon name="kubernetes" className="w-4 h-4" />
                <span className="font-semibold text-sky-400">Kubernetes</span>
              </div>
              <div className="flex items-center gap-2 py-1.5 px-3 rounded-lg bg-slate-900/40 border border-blue-500/30 font-mono text-xs text-slate-200 shadow-md backdrop-blur-md hover:border-blue-400/60 transition-all">
                <TechIcon name="docker" className="w-4 h-4" />
                <span className="font-semibold text-blue-400">Docker</span>
              </div>
              <div className="flex items-center gap-2 py-1.5 px-3 rounded-lg bg-slate-900/40 border border-red-500/30 font-mono text-xs text-slate-200 shadow-md backdrop-blur-md hover:border-red-400/60 transition-all">
                <TechIcon name="jenkins" className="w-4 h-4" />
                <span className="font-semibold text-red-400">Jenkins</span>
              </div>
              <div className="flex items-center gap-2 py-1.5 px-3 rounded-lg bg-slate-900/40 border border-purple-500/30 font-mono text-xs text-slate-200 shadow-md backdrop-blur-md hover:border-purple-400/60 transition-all">
                <TechIcon name="terraform" className="w-4 h-4" />
                <span className="font-semibold text-purple-400">Terraform</span>
              </div>
              <div className="flex items-center gap-2 py-1.5 px-3 rounded-lg bg-slate-900/40 border border-emerald-500/30 font-mono text-xs text-slate-200 shadow-md backdrop-blur-md hover:border-emerald-400/60 transition-all">
                <TechIcon name="sonarqube" className="w-4 h-4" />
                <span className="font-semibold text-emerald-400">SonarQube</span>
              </div>
            </div>

            {/* Concise Value Proposition */}
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl font-normal drop-shadow">
              Building reliable deployment pipelines, multi-environment cloud infrastructure, and zero-downtime microservices across insurance, AdTech, and AI/SaaS platforms.
            </p>

            {/* Action Buttons */}
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

            {/* Verified Credentials Bar */}
            <div className="pt-5 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-800/80 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>3+ Yrs Hands-on DevOps</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Dev / QA / UAT / Prod</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Activity className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero-Downtime Releases</span>
              </div>
            </div>

          </div>

          {/* Right Column: DevOps Journey Chapter Guide HUD */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/40 border border-sky-500/25 shadow-2xl backdrop-blur-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2 font-mono text-xs text-sky-400 font-bold uppercase tracking-wider">
                  <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                  <span>DevOps Work Journey Story</span>
                </div>
                <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                  Scroll To Play
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                Scroll down through the page to experience the continuous cinematic journey from the cozy night desk to production deployment.
              </p>

              {/* 5 Story Chapters */}
              <div className="space-y-2 pt-1 font-mono text-xs">
                <a
                  href="#hero"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/40 border border-slate-700/50 hover:border-sky-400/70 text-slate-200 transition-colors backdrop-blur-sm"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                    <span>1. Night Owl DevOps Desk</span>
                  </span>
                  <span className="text-[10px] text-sky-300">Hero</span>
                </a>

                <a
                  href="#pipeline"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/40 border border-slate-700/50 hover:border-emerald-400/70 text-slate-200 transition-colors backdrop-blur-sm"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>2. CI/CD Pipeline & Docker</span>
                  </span>
                  <span className="text-[10px] text-emerald-300">Pipeline</span>
                </a>

                <a
                  href="#experience"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/40 border border-slate-700/50 hover:border-indigo-400/70 text-slate-200 transition-colors backdrop-blur-sm"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    <span>3. AWS Cloud Whiteboard</span>
                  </span>
                  <span className="text-[10px] text-indigo-300">Experience</span>
                </a>

                <a
                  href="#skills"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/40 border border-slate-700/50 hover:border-sky-400/70 text-slate-200 transition-colors backdrop-blur-sm"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    <span>4. CloudWatch Observability</span>
                  </span>
                  <span className="text-[10px] text-sky-300">Skills</span>
                </a>

                <a
                  href="#contact"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/40 border border-slate-700/50 hover:border-emerald-400/70 text-slate-200 transition-colors backdrop-blur-sm"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>5. Sunrise Zero-Downtime Release</span>
                  </span>
                  <span className="text-[10px] text-emerald-300">Contact</span>
                </a>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  60 FPS Video Scrub
                </span>
                <span className="text-sky-400">3D Parallax Tilt</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
