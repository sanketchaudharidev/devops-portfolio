import React, { useState } from 'react';
import { ChevronRight, X, Layers, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';
import { ProjectItem } from '../types';
import { SectionHeading } from '../components/common/SectionHeading';
import { Container } from '../components/layout/Container';
import { TechIcon } from '../components/icons/TechIcon';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-24 bg-slate-950/20 relative">
      <Container>
        <SectionHeading
          badgeText="Verified Work & Engineering"
          title="Projects & Implementations"
          subtitle="Real-world automation pipelines and independent technical builds documented in the primary resume."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {profileData.projects.map((project) => {
            const isAutomation = project.type === 'Automation Pipeline';

            return (
              <div
                key={project.id}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/45 border border-sky-500/20 hover:border-sky-400/50 transition-all flex flex-col justify-between shadow-2xl backdrop-blur-xl"
              >
                <div className="space-y-4">
                  {/* Badge & Type */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`font-mono text-xs px-3 py-1 rounded-md border font-semibold ${
                        isAutomation
                          ? 'bg-sky-500/10 text-sky-400 border-sky-500/30'
                          : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30'
                      }`}
                    >
                      {project.type}
                    </span>

                    {project.metrics && (
                      <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/30 font-semibold">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed font-normal">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Tech stack with vector icons */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-md bg-slate-950/50 text-slate-200 border border-slate-700/60 shadow-sm backdrop-blur-sm"
                      >
                        <TechIcon name={t} className="w-3.5 h-3.5" />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>

                  {/* Problem Statement */}
                  <div className="pt-3 text-xs sm:text-sm text-slate-200 leading-relaxed border-t border-slate-800/80">
                    <span className="text-slate-400 font-semibold uppercase font-mono text-xs block mb-1">
                      Problem Context:
                    </span>
                    {project.problem}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-400">
                    {project.approach.length} Architectural Steps
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-950/60 hover:bg-slate-900/60 border border-slate-700/70 text-slate-200 hover:text-sky-400 font-mono text-xs font-semibold transition-colors cursor-pointer backdrop-blur-sm"
                  >
                    <span>View Architecture & Results</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <div className="relative w-full max-w-2xl bg-slate-900/90 border border-sky-500/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl max-h-[90vh] overflow-y-auto backdrop-blur-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 font-mono text-xs text-sky-400 font-bold uppercase tracking-wider">
                  <Layers className="w-4 h-4 text-sky-400" />
                  <span>Architecture Deep Dive</span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <p className="text-slate-300 text-sm mt-1">{selectedProject.subtitle}</p>
              </div>

              <div className="space-y-4">
                <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  Architectural Implementation Steps:
                </h4>
                <div className="space-y-3">
                  {selectedProject.approach.map((step: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                      <span className="font-mono text-xs font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded">
                        0{idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-200">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedProject.result && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                  <div className="font-mono text-xs font-bold text-emerald-400 uppercase flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified Production Outcome:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-200">
                    {selectedProject.result}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
