import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, Check, Layers } from 'lucide-react';
import { profileData } from '../data/profile';
import { SectionHeading } from '../components/common/SectionHeading';
import { Container } from '../components/layout/Container';

export const Experience: React.FC = () => {
  // Store expanded card IDs (initially expand first item)
  const [expandedIds, setExpandedIds] = useState<string[]>([profileData.experience[0].id]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="experience" className="py-20 bg-background relative">
      <Container>
        <SectionHeading
          badgeText="Work History"
          title="Professional Experience"
          subtitle="Chronological timeline of enterprise roles, pre-production management, AWS cloud environments, and CI/CD operations."
        />

        <div className="relative border-l border-slate-800 ml-3 sm:ml-6 space-y-8">
          {profileData.experience.map((exp) => {
            const isExpanded = expandedIds.includes(exp.id);

            return (
              <div key={exp.id} className="relative pl-6 sm:pl-10">
                {/* Timeline node dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-surface-400 border-2 border-brand-primary flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                </div>

                {/* Experience Card */}
                <div className="rounded-xl bg-surface-300/90 border border-slate-800/90 hover:border-slate-700/80 transition-all p-5 sm:p-6 shadow-lg">
                  
                  {/* Top Row: Company & Dates */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {exp.company}
                        </h3>
                        <span className="font-mono text-xs px-2 py-0.5 rounded bg-surface-100 text-sky-400 border border-slate-700">
                          {exp.role}
                        </span>
                      </div>

                      {exp.project && (
                        <p className="text-xs sm:text-sm text-slate-400 mt-1 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          <span>{exp.project}</span>
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-brand-primary" />
                        {exp.dates}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Technology Pills */}
                  <div className="mt-4 flex flex-wrap items-center gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-200 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Summary / Responsibilities List */}
                  <div className="mt-4">
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {/* Show first 2 items when collapsed, all when expanded */}
                      {(isExpanded ? exp.responsibilities : exp.responsibilities.slice(0, 2)).map(
                        (resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        )
                      )}
                    </ul>

                    {/* Expand/Collapse Toggle Button */}
                    {exp.responsibilities.length > 2 && (
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-brand-primary hover:text-sky-300 transition-colors focus:outline-none"
                      >
                        <span>
                          {isExpanded
                            ? 'Show Less'
                            : `View All ${exp.responsibilities.length} Responsibilities`}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
