import React, { useState, useEffect } from 'react';
import { ArrowRight, FileDown, Layers, Terminal, Sparkles, ShieldCheck, Activity, Cpu, Cloud } from 'lucide-react';
import { profileData } from '../data/profile';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { TechIcon } from '../components/icons/TechIcon';
import { AwsServiceIcon } from '../components/icons/AwsIcons';

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
      {/* Subtle Background Radial Depth */}
      <div className="absolute inset-0 bg-radial-glow opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Live Telemetry Status Bar */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="emerald" pulse size="md">
                AVAILABLE FOR DEVOPS ROLES
              </Badge>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-slate-700/80 bg-surface-200/90 text-slate-300 font-mono text-xs shadow-sm">
                <Cloud className="w-3.5 h-3.5 text-sky-400" />
                <span>AWS Cloud Infrastructure</span>
              </div>
              {onOpenTerminal && (
                <button
                  onClick={onOpenTerminal}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-slate-700/80 bg-surface-100/90 hover:bg-surface-50 text-slate-300 text-xs font-mono transition-all shadow-sm cursor-pointer"
                  title="Open DevOps Terminal ($ whoami)"
                >
                  <Terminal className="w-3.5 h-3.5 text-brand-primary" />
                  <span>Launch Shell ($ whoami)</span>
                </button>
              )}
            </div>

            {/* Name & Animated Dynamic Role Subtitle */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase drop-shadow-xl">
                {profileData.name}
              </h1>
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-emerald-400">
                  {profileData.subTitles[subTitleIndex]}
                </span>
              </div>
            </div>

            {/* Tech Stack Pills with Official Vector Logos */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <div className="flex items-center gap-2 py-1.5 px-3 rounded-lg bg-surface-200/90 border border-slate-700/80 font-mono text-xs text-slate-200 shadow-md backdrop-blur-md">
                <TechIcon name="aws" className="w-4 h-4" />
                <span className="font-semibold text-sky-400">AWS</span>
              </div>
              <div className="flex items-center gap-2 py-1.5 px-3 rounded-lg bg-surface-200/90 border border-slate-700/80 font-mono text-xs text-slate-200 shadow-md backdrop-blur-md">
                <TechIcon name="kubernetes" className="w-4 h-4" />
                <span className="font-semibold text-sky-400">Kubernetes</span>
              </div>
              <div className="flex items-center gap-2 py-1.5 px-3 rounded-lg bg-surface-200/90 border border-slate-700/80 font-mono text-xs text-slate-200 shadow-md backdrop-blur-md">
                <TechIcon name="docker" className="w-4 h-4" />
                <span className="font-semibold text-blue-400">Docker</span>
              </div>
              <div className="flex items-center gap-2 py-1.5 px-3 rounded-lg bg-surface-200/90 border border-slate-700/80 font-mono text-xs text-slate-200 shadow-md backdrop-blur-md">
                <TechIcon name="jenkins" className="w-4 h-4" />
                <span className="font-semibold text-red-400">Jenkins</span>
              </div>
              <div className="flex items-center gap-2 py-1.5 px-3 rounded-lg bg-surface-200/90 border border-slate-700/80 font-mono text-xs text-slate-200 shadow-md backdrop-blur-md">
                <TechIcon name="terraform" className="w-4 h-4" />
                <span className="font-semibold text-purple-400">Terraform</span>
              </div>
              <div className="flex items-center gap-2 py-1.5 px-3 rounded-lg bg-surface-200/90 border border-slate-700/80 font-mono text-xs text-slate-200 shadow-md backdrop-blur-md">
                <TechIcon name="sonarqube" className="w-4 h-4" />
                <span className="font-semibold text-emerald-400">SonarQube</span>
              </div>
            </div>

            {/* Concise Value Proposition */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
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
            <div className="pt-5 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-800 font-mono text-xs text-slate-400">
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

          {/* Right Column: 3D AWS Cloud Architecture HUD Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-surface-300/80 border border-slate-700/80 shadow-2xl backdrop-blur-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2 font-mono text-xs text-sky-400 font-bold uppercase tracking-wider">
                  <Cpu className="w-4 h-4 text-sky-400" />
                  <span>AWS 3D Cloud Topology</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                Interact with the full-page 3D AWS environment in the background. Move your cursor to align parallax, and scroll to travel through infrastructure layers.
              </p>

              {/* AWS Live Service Indicators */}
              <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
                <div className="flex items-center gap-1.5 p-2 rounded-lg bg-surface-200/90 border border-slate-800 text-slate-200">
                  <AwsServiceIcon service="ec2" className="w-3.5 h-3.5" />
                  <span>EC2 Compute</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-lg bg-surface-200/90 border border-slate-800 text-slate-200">
                  <AwsServiceIcon service="s3" className="w-3.5 h-3.5" />
                  <span>S3 Buckets</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-lg bg-surface-200/90 border border-slate-800 text-slate-200">
                  <AwsServiceIcon service="rds" className="w-3.5 h-3.5" />
                  <span>RDS MySQL</span>
                </div>
                <div className="flex items-center gap-1.5 p-2 rounded-lg bg-surface-200/90 border border-slate-800 text-slate-200">
                  <AwsServiceIcon service="cloudwatch" className="w-3.5 h-3.5" />
                  <span>CloudWatch</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Multi-Region Mesh</span>
                <span className="text-emerald-400">● 60 FPS WebGL</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
