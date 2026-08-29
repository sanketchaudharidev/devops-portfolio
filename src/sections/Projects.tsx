import React, { useState } from 'react';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import { profileData } from '../data/profile';
import { ProjectItem } from '../types';
import { SectionHeading } from '../components/common/SectionHeading';
import { Container } from '../components/layout/Container';
import { Modal } from '../components/common/Modal';
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
                className="p-6 sm:p-8 rounded-2xl bg-surface-300/90 border border-slate-700/80 hover:border-slate-600 transition-all flex flex-col justify-between shadow-2xl backdrop-blur-md"
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
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Tech stack with vector icons */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-md bg-surface-200 text-slate-200 border border-slate-700/80 shadow-sm"
                      >
                        <TechIcon name={t} className="w-3.5 h-3.5" />
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>

                  {/* Problem Statement */}
                  <div className="pt-3 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800">
                    <span className="text-slate-400 font-semibold uppercase font-mono text-xs block mb-1">
                      Problem Context:
                    </span>
                    {project.problem}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-400">
                    {project.approach.length} Architectural Steps
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-100 hover:bg-surface-50 border border-slate-700 text-slate-200 hover:text-brand-primary font-mono text-xs font-semibold transition-colors"
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
          <Modal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            title={selectedProject.title}
          >
            <div className="space-y-6">
              {/* Type & Tech summary */}
              <div className="flex flex-wrap items-center gap-2 pb-3 border-b border-slate-800 font-mono text-xs">
                <span className="text-brand-primary font-bold">{selectedProject.type}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300">
                  {selectedProject.technologies.join(' • ')}
                </span>
              </div>

              {/* Problem */}
              <div className="space-y-1.5">
                <h4 className="font-mono text-xs text-amber-400 uppercase tracking-wider font-semibold">
                  1. Problem Statement
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProject.problem}
                </p>
              </div>

              {/* Approach */}
              <div className="space-y-2">
                <h4 className="font-mono text-xs text-sky-400 uppercase tracking-wider font-semibold">
                  2. Architectural Approach
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {selectedProject.approach.map((step, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Result */}
              <div className="space-y-1.5 p-4 rounded-xl bg-surface-100 border border-slate-700/80">
                <h4 className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold">
                  3. Verified Outcome
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {selectedProject.result}
                </p>
              </div>
            </div>
          </Modal>
        )}
      </Container>
    </section>
  );
};
