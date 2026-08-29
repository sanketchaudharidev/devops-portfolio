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
import { TechIcon } from '../components/icons/TechIcon';
import { AwsServiceIcon } from '../components/icons/AwsIcons';

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
    <section id="skills" className="py-24 bg-background/80 relative backdrop-blur-sm">
      <Container>
        <SectionHeading
          badgeText="Technical Ecosystem"
          title="Skills & Tooling Matrix"
          subtitle="Categorized inventory of hands-on tools, cloud platforms, scripting languages, and containerization frameworks with authentic vectors."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-primary text-slate-950 font-bold shadow-md shadow-sky-950/40'
                  : 'bg-surface-200/90 text-slate-300 hover:text-white hover:bg-surface-100 border border-slate-700/80'
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
                className="p-6 rounded-2xl bg-surface-300/90 border border-slate-700/80 hover:border-slate-600 transition-all flex flex-col justify-between shadow-xl backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-800 text-white font-semibold text-sm">
                    <div className="w-8 h-8 rounded-lg bg-surface-100 flex items-center justify-center text-brand-primary border border-slate-700">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span>{cat.title}</span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-md bg-surface-200 text-slate-200 border border-slate-700/70 hover:text-brand-primary hover:border-brand-primary/40 transition-colors shadow-sm"
                      >
                        <TechIcon name={skill} className="w-3.5 h-3.5" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* DEDICATED AWS EXPERIENCE SECTION WITH OFFICIAL AWS ICONS */}
        <div className="mt-16 p-6 sm:p-10 rounded-2xl bg-surface-300 border border-slate-700/90 shadow-2xl space-y-8 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold uppercase tracking-wider">
                <TechIcon name="aws" className="w-4 h-4" />
                <span>Cloud Infrastructure Architecture</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                AWS Experience Map
              </h3>
            </div>
            <span className="font-mono text-xs text-slate-400 bg-surface-200 px-3 py-1 rounded border border-slate-700">
              Verified Production vs Exploratory Scope
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Hands-on AWS Experience (14 Services) */}
            <div className="space-y-4 bg-surface-200/80 p-6 rounded-xl border border-slate-700/90">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Hands-on AWS Experience (14 Services)</span>
                </div>
                <span className="font-mono text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Production Validated
                </span>
              </div>

              <p className="text-xs text-slate-300">
                Applied in real production and multi-stage client architectures across Tieto, AIQOD, and blkbox.ai.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                {profileData.awsExperience.handsOn.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-2 p-2 rounded-lg bg-surface-100 border border-slate-800 text-slate-200 font-mono text-xs hover:border-emerald-500/40 transition-colors shadow-sm"
                  >
                    <AwsServiceIcon service={service} className="w-4 h-4 shrink-0" />
                    <span className="truncate">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently Studying AWS (4 Services) */}
            <div className="space-y-4 bg-surface-200/80 p-6 rounded-xl border border-slate-700/90">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-bold uppercase">
                  <BookOpen className="w-4 h-4" />
                  <span>Currently Studying / Conceptual</span>
                </div>
                <span className="font-mono text-[11px] text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                  Continuous Learning
                </span>
              </div>

              <p className="text-xs text-slate-300">
                Active self-study & exploratory prototyping (strictly separated from enterprise track record).
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                {profileData.awsExperience.currentlyStudying.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-100 border border-slate-800 text-slate-200 font-mono text-xs hover:border-indigo-500/40 transition-colors shadow-sm"
                  >
                    <AwsServiceIcon service={service} className="w-4 h-4 shrink-0" />
                    <span className="truncate">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};
