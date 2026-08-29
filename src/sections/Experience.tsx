import React, { useState } from 'react';
import { Calendar, MapPin, Check, ChevronDown, Layers } from 'lucide-react';
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
    <section id="experience" className="py-24 bg-transparent relative">
      <Container>
        <SectionHeading
          badgeText="Work History"
          title="Professional Experience"
          subtitle="Chronological timeline of enterprise roles, pre-production management, AWS cloud environments, and CI/CD operations."
        />

        <div className="relative border-l-2 border-sky-500/30 ml-3 sm:ml-6 space-y-10">
          {profileData.experience.map((exp) => {
            const isExpanded = expandedIds.includes(exp.id);

            return (
              <div key={exp.id} className="relative pl-6 sm:pl-10">
                {/* Timeline node dot */}
                <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-slate-950 border-2 border-sky-400 flex items-center justify-center shadow-lg shadow-sky-950/50">
                  <div className="w-2 h-2 rounded-full bg-sky-400" />
                </div>

                {/* Highly Transparent Glassmorphic Experience Card */}
                <div className="rounded-2xl bg-slate-950/20 hover:bg-slate-950/30 border border-sky-500/25 hover:border-sky-400/50 transition-all p-6 sm:p-8 shadow-2xl backdrop-blur-[6px]">
                  
                  {/* Top Row: Company & Dates */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-slate-700/40">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-md">
                          {exp.company}
                        </h3>
                        <span className="font-mono text-xs px-2.5 py-1 rounded bg-sky-500/15 text-sky-300 border border-sky-500/35 font-semibold backdrop-blur-sm">
                          {exp.role}
                        </span>
                      </div>

                      {exp.project && (
                        <p className="text-xs sm:text-sm text-slate-200 mt-1.5 flex items-center gap-2 drop-shadow">
                          <Layers className="w-4 h-4 text-sky-400 shrink-0" />
                          <span className="font-medium">{exp.project}</span>
                        </p>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-300">
                      <span className="flex items-center gap-1.5 bg-slate-950/30 px-2.5 py-1 rounded border border-slate-700/50 backdrop-blur-sm">
                        <Calendar className="w-3.5 h-3.5 text-sky-400" />
                        {exp.dates}
                      </span>
                      <span className="flex items-center gap-1.5 bg-slate-950/30 px-2.5 py-1 rounded border border-slate-700/50 backdrop-blur-sm">
                        <MapPin className="w-3.5 h-3.5 text-slate-300" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Domain tag if present */}
                  {exp.domain && (
                    <div className="mt-3 font-mono text-xs text-emerald-400 drop-shadow">
                      <span className="text-slate-400">Domain / Architecture: </span>
                      {exp.domain}
                    </div>
                  )}

                  {/* Technology Chips with Vector Icons */}
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-md bg-slate-950/35 text-slate-100 border border-slate-700/50 shadow-sm backdrop-blur-sm hover:border-sky-400/50 transition-colors"
                      >
                        <TechIcon name={tech} className="w-3.5 h-3.5" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  {/* Responsibilities List */}
                  <div className="mt-5">
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-100 leading-relaxed font-normal drop-shadow">
                      {(isExpanded ? exp.responsibilities : exp.responsibilities.slice(0, 3)).map(
                        (resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Expand / Collapse Button */}
                  {exp.responsibilities.length > 3 && (
                    <div className="mt-5 pt-3 border-t border-slate-700/40">
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
                      >
                        <span>{isExpanded ? 'Show Less Details' : `+ Show ${exp.responsibilities.length - 3} More Key Responsibilities`}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
