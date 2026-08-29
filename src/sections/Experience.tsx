import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, Check, Layers } from 'lucide-react';
import { profileData } from '../data/profile';
import { SectionHeading } from '../components/common/SectionHeading';
import { Container } from '../components/layout/Container';
import { TechIcon } from '../components/icons/TechIcon';

export const Experience: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<string[]>([profileData.experience[0].id]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="experience" className="py-24 bg-background/80 relative backdrop-blur-sm">
      <Container>
        <SectionHeading
          badgeText="Work History"
          title="Professional Experience"
          subtitle="Chronological timeline of enterprise roles, pre-production management, AWS cloud environments, and CI/CD operations."
        />

        <div className="relative border-l-2 border-slate-800 ml-3 sm:ml-6 space-y-10">
          {profileData.experience.map((exp) => {
            const isExpanded = expandedIds.includes(exp.id);

            return (
              <div key={exp.id} className="relative pl-6 sm:pl-10">
                {/* Timeline node dot */}
                <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-surface-400 border-2 border-brand-primary flex items-center justify-center shadow-lg shadow-sky-950/50">
                  <div className="w-2 h-2 rounded-full bg-brand-primary" />
                </div>

                {/* Experience Card */}
                <div className="rounded-2xl bg-surface-300/90 border border-slate-700/80 hover:border-brand-primary/40 transition-all p-6 sm:p-8 shadow-xl backdrop-blur-md">
                  
                  {/* Top Row: Company & Dates */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {exp.company}
                        </h3>
                        <span className="font-mono text-xs px-2.5 py-1 rounded bg-brand-primary/10 text-brand-primary border border-brand-primary/30 font-semibold">
                          {exp.role}
                        </span>
                      </div>

                      {exp.project && (
                        <p className="text-xs sm:text-sm text-slate-300 mt-1.5 flex items-center gap-2">
                          <Layers className="w-4 h-4 text-sky-400 shrink-0" />
                          <span className="font-medium">{exp.project}</span>
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-400">
                      <span className="flex items-center gap-1.5 bg-surface-200 px-2.5 py-1 rounded border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-brand-primary" />
                        {exp.dates}
                      </span>
                      <span className="flex items-center gap-1.5 bg-surface-200 px-2.5 py-1 rounded border border-slate-800">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Domain tag if present */}
                  {exp.domain && (
                    <div className="mt-3 font-mono text-xs text-emerald-400">
                      <span className="text-slate-500">Domain / Architecture: </span>
                      {exp.domain}
                    </div>
                  )}

                  {/* Technology Chips with Vector Icons */}
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-md bg-surface-200/90 text-slate-200 border border-slate-700/80 shadow-sm"
                      >
                        <TechIcon name={tech} className="w-3.5 h-3.5" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  {/* Responsibilities List */}
                  <div className="mt-5">
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {(isExpanded ? exp.responsibilities : exp.responsibilities.slice(0, 3)).map(
                        (resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        )
                      )}
                    </ul>

                    {/* Expand/Collapse Button */}
                    {exp.responsibilities.length > 3 && (
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-brand-primary hover:text-sky-300 transition-colors focus:outline-none font-semibold"
                      >
                        <span>
                          {isExpanded
                            ? 'Show Fewer Responsibilities'
                            : `View All ${exp.responsibilities.length} Responsibilities`}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
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
