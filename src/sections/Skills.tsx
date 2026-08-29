import React, { useState } from 'react';
import {
  Cloud,
  GitBranch,
  Boxes,
  FileCode,
  Terminal,
  Activity,
  Network,
  Database,
  Server,
  Cpu,
  Sparkles,
  HardDrive,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { profileData } from '../data/profile';
import { SectionHeading } from '../components/common/SectionHeading';
import { Container } from '../components/layout/Container';

// Icon mapper
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Cloud,
  GitBranch,
  Boxes,
  FileCode,
  Terminal,
  Activity,
  Network,
  Database,
  Server,
  Cpu,
  Sparkles,
  HardDrive,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...profileData.skillCategories.map((c) => c.title)];

  const filteredCategories =
    selectedCategory === 'All'
      ? profileData.skillCategories
      : profileData.skillCategories.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-background relative">
      <Container>
        <SectionHeading
          badgeText="Technical Ecosystem"
          title="Skills & Tooling Matrix"
          subtitle="Categorized inventory of hands-on tools, cloud platforms, scripting languages, and containerization frameworks from verified resume data."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-primary text-slate-950 font-bold shadow-md shadow-sky-950/40'
                  : 'bg-surface-200 text-slate-400 hover:text-slate-200 hover:bg-surface-100 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const IconComponent = ICON_MAP[cat.iconName] || Cpu;

            return (
              <div
                key={cat.title}
                className="p-5 rounded-xl bg-surface-300/80 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 pb-3 border-b border-slate-800/80 text-white font-semibold text-sm">
                    <div className="w-7 h-7 rounded-lg bg-surface-100 flex items-center justify-center text-brand-primary border border-slate-700/60">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span>{cat.title}</span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-surface-200 text-slate-300 border border-slate-700/60 hover:text-brand-primary hover:border-brand-primary/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* DEDICATED AWS EXPERIENCE SECTION: Hands-on vs Currently Studying */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-surface-300 border border-slate-700/80 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
            <div>
              <span className="font-mono text-xs text-amber-400 font-semibold uppercase tracking-wider">
                Cloud Specialization
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                AWS Infrastructure Map
              </h3>
            </div>
            <span className="font-mono text-xs text-slate-400">
              Clear Separation of Hands-on vs Studying Scope
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Hands-on AWS Experience */}
            <div className="space-y-3 bg-surface-200/70 p-5 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>Hands-on AWS Experience (14 Services)</span>
              </div>
              <p className="text-xs text-slate-400">
                Applied across production, pre-prod, and multi-environment client infrastructures.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {profileData.awsExperience.handsOn.map((service) => (
                  <span
                    key={service}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently Studying AWS */}
            <div className="space-y-3 bg-surface-200/70 p-5 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase">
                <BookOpen className="w-4 h-4" />
                <span>Currently Studying / Conceptual</span>
              </div>
              <p className="text-xs text-slate-400">
                Active self-study & conceptual exploration (not claimed as production track record).
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {profileData.awsExperience.currentlyStudying.map((service) => (
                  <span
                    key={service}
                    className="font-mono text-xs px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};
