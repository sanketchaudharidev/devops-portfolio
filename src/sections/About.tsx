import React from 'react';
import { MapPin, Briefcase, Clock, CheckCircle, Server, Terminal, Shield } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Container } from '../components/layout/Container';
import { TechIcon } from '../components/icons/TechIcon';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-t border-slate-800/60 bg-slate-950/20 relative">
      <Container>
        <SectionHeading
          badgeText="Profile Overview"
          title="About & Engineering Narrative"
          subtitle="Specialized in cloud infrastructure lifecycle, container orchestration, automated release pipelines, and zero-downtime application deployments."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-8 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
            <p className="text-slate-200 font-normal">
              I am a <strong className="text-white font-semibold">DevOps Engineer</strong> with over 3+ years of hands-on experience orchestrating CI/CD pipelines, managing AWS cloud environments, and provisioning infrastructure automation across enterprise domains including <span className="text-sky-300 font-medium">AdTech/MarTech SaaS</span>, <span className="text-sky-300 font-medium">General Insurance</span>, and <span className="text-sky-300 font-medium">Generative AI platforms</span>.
            </p>

            <p>
              My background centers on taking code from version control to high-availability production environments. I specialize in building declarative Jenkins and GitLab pipelines, integrating automated SonarQube quality gates, containerizing microservices with Docker and Kubernetes, and codifying infrastructure with Terraform.
            </p>

            <p>
              Having managed Dev, QA, UAT, and live Production stages across multiple companies, I place strict emphasis on reliability, zero-downtime deployments, proactive CloudWatch telemetry, database connection stability, and clear transition documentation.
            </p>

            {/* Domain Focus Cards */}
            <div className="pt-3">
              <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-3.5">
                Proven Multi-Domain Track Record:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-xl bg-slate-950/45 border border-sky-500/25 space-y-2 shadow-lg backdrop-blur-md hover:border-sky-400/50 transition-all">
                  <div className="flex items-center gap-2 text-sky-400 font-semibold text-xs">
                    <Server className="w-4 h-4" />
                    <span>AdTech / MarTech</span>
                  </div>
                  <p className="text-xs text-slate-300">Microservices Pre-Prod management at blkbox.ai</p>
                  <div className="flex items-center gap-1.5 pt-1">
                    <TechIcon name="kubernetes" className="w-3.5 h-3.5" />
                    <TechIcon name="docker" className="w-3.5 h-3.5" />
                    <TechIcon name="terraform" className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/45 border border-emerald-500/25 space-y-2 shadow-lg backdrop-blur-md hover:border-emerald-400/50 transition-all">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                    <Shield className="w-4 h-4" />
                    <span>Insurance Platform</span>
                  </div>
                  <p className="text-xs text-slate-300">Enterprise PREMIA 9 at Tieto Software Technologies</p>
                  <div className="flex items-center gap-1.5 pt-1">
                    <TechIcon name="aws" className="w-3.5 h-3.5" />
                    <TechIcon name="jenkins" className="w-3.5 h-3.5" />
                    <TechIcon name="mysql" className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/45 border border-indigo-500/25 space-y-2 shadow-lg backdrop-blur-md hover:border-indigo-400/50 transition-all">
                  <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs">
                    <Terminal className="w-4 h-4" />
                    <span>AI / SaaS Platform</span>
                  </div>
                  <p className="text-xs text-slate-300">Sole DevOps Engineer for MERN & GenAI at AIQOD</p>
                  <div className="flex items-center gap-1.5 pt-1">
                    <TechIcon name="python" className="w-3.5 h-3.5" />
                    <TechIcon name="mongodb" className="w-3.5 h-3.5" />
                    <TechIcon name="docker" className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Verified Metadata Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-sky-500/25 shadow-2xl space-y-4 backdrop-blur-xl">
              <h3 className="font-mono text-xs text-sky-400 uppercase tracking-wider pb-3 border-b border-slate-800/80 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-sky-400" />
                Verified Profile Metadata
              </h3>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    Experience
                  </span>
                  <span className="text-slate-200 font-semibold">3+ Years</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                    Primary Role
                  </span>
                  <span className="text-slate-200 font-semibold">DevOps Engineer</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    Location
                  </span>
                  <span className="text-slate-200 font-semibold">Pune, India</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                  <span className="text-slate-400">Education</span>
                  <span className="text-slate-200 font-semibold">B.E. Computer Engg</span>
                </div>

                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-400">Cloud Focus</span>
                  <span className="text-slate-200 font-semibold">AWS & Automation</span>
                </div>
              </div>
            </div>

            {/* Core Tenet */}
            <div className="p-4 rounded-xl bg-slate-950/45 border border-slate-700/60 text-xs text-slate-300 font-mono flex items-start gap-2.5 shadow backdrop-blur-sm">
              <span className="text-sky-400 text-base font-bold">“</span>
              <p>
                Engineering discipline in release management: every build is validated, every environment is consistent, and observability is continuous.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
