import React from 'react';
import { GitBranch, Layers, CheckCircle2, Box, Cloud, Activity, Check } from 'lucide-react';

export const StaticFallbackTopology: React.FC = () => {
  const nodes = [
    { label: "Git Repository", icon: GitBranch, sub: "Source Control", color: "text-sky-400" },
    { label: "Jenkins / GitLab", icon: Layers, sub: "CI Pipeline", color: "text-blue-400" },
    { label: "SonarQube", icon: CheckCircle2, sub: "Quality Gate", color: "text-emerald-400" },
    { label: "Docker & K8s", icon: Box, sub: "Containers", color: "text-indigo-400" },
    { label: "AWS Cloud", icon: Cloud, sub: "Infrastructure", color: "text-amber-400" },
    { label: "CloudWatch", icon: Activity, sub: "Observability", color: "text-rose-400" },
    { label: "Production", icon: Check, sub: "Zero-Downtime", color: "text-emerald-300" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 select-none">
      <div className="relative w-full max-w-lg">
        {/* Background Network Graphic */}
        <div className="flex flex-col gap-3">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <div key={node.label} className="relative flex items-center gap-3">
                {index < nodes.length - 1 && (
                  <div className="absolute left-4 top-8 w-0.5 h-6 bg-gradient-to-b from-sky-500/30 to-emerald-500/30" />
                )}
                <div className="w-8 h-8 rounded-lg bg-surface-100 border border-slate-700/60 flex items-center justify-center shadow-md z-10">
                  <Icon className={`w-4 h-4 ${node.color}`} />
                </div>
                <div className="flex items-baseline justify-between flex-1 py-1 px-3 rounded bg-surface-200/50 border border-slate-800/60 text-xs">
                  <span className="font-medium text-slate-200">{node.label}</span>
                  <span className="font-mono text-[10px] text-slate-400">{node.sub}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 pt-3 border-t border-slate-800 text-center">
          <span className="font-mono text-[10px] text-slate-400 tracking-wider uppercase">
            [ Verified Infrastructure Pipeline Flow ]
          </span>
        </div>
      </div>
    </div>
  );
};
