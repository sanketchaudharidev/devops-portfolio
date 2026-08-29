import React from 'react';
import { MapPin, Briefcase, Clock, CheckCircle, Server, Terminal, Shield } from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Container } from '../components/layout/Container';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-800/80 bg-surface-400/50 relative">
      <Container>
        <SectionHeading
          badgeText="Profile Overview"
          title="About & Engineering Narrative"
          subtitle="Specialized in cloud infrastructure lifecycle, container orchestration, automated release pipelines, and zero-downtime application deployments."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-8 space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base">
            <p className="text-slate-200 font-normal">
              I am a <strong className="text-white font-semibold">DevOps Engineer</strong> with over 3+ years of hands-on experience orchestrating CI/CD pipelines, managing AWS cloud environments, and provisioning infrastructure automation across enterprise domains including <span className="text-sky-300 font-medium">AdTech/MarTech SaaS</span>, <span className="text-sky-300 font-medium">General Insurance</span>, and <span className="text-sky-300 font-medium">Generative AI platforms</span>.
            </p>

            <p>
              My background centers on taking code from version control to high-availability production environments. I specialize in building declarative Jenkins and GitLab pipelines, integrating automated SonarQube quality gates, containerizing microservices with Docker and Kubernetes, and codifying infrastructure with Terraform.
            </p>

            <p>
              Having managed Dev, QA, UAT, and live Production stages across multiple companies, I place strict emphasis on reliability, zero-downtime deployments, proactive CloudWatch telemetry, database connection stability, and clear transition documentation.
            </p>

            {/* Domain Focus Tags */}
            <div className="pt-2">
              <h4 className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-3">
                Proven Multi-Domain Experience
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-lg bg-surface-200/90 border border-slate-800/90 space-y-1">
                  <div className="flex items-center gap-2 text-sky-400 font-semibold text-xs">
                    <Server className="w-4 h-4" />
                    <span>AdTech / MarTech</span>
                  </div>
                  <p className="text-xs text-slate-400">Microservices Pre-Prod at blkbox.ai</p>
                </div>

                <div className="p-3.5 rounded-lg bg-surface-200/90 border border-slate-800/90 space-y-1">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs">
                    <Shield className="w-4 h-4" />
                    <span>Insurance Platform</span>
                  </div>
                  <p className="text-xs text-slate-400">Enterprise PREMIA 9 at Tieto</p>
                </div>

                <div className="p-3.5 rounded-lg bg-surface-200/90 border border-slate-800/90 space-y-1">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs">
                    <Terminal className="w-4 h-4" />
                    <span>AI / SaaS Platform</span>
                  </div>
                  <p className="text-xs text-slate-400">Sole DevOps Engineer at AIQOD</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Verified Metadata Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-xl bg-surface-300 border border-slate-800/80 shadow-xl space-y-4">
              <h3 className="font-mono text-xs text-brand-primary uppercase tracking-wider pb-3 border-b border-slate-800 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand-primary" />
                Verified Metadata
              </h3>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-sky-400" />
                    Experience
                  </span>
                  <span className="text-slate-200 font-semibold">3+ Years</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                    Primary Role
                  </span>
                  <span className="text-slate-200 font-semibold">DevOps Engineer</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    Location
                  </span>
                  <span className="text-slate-200 font-semibold">Pune, India</span>
                </div>

                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                  <span className="text-slate-400">Education</span>
                  <span className="text-slate-200 font-semibold">B.E. Comp Engg</span>
                </div>

                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-400">AWS Focus</span>
                  <span className="text-slate-200 font-semibold">Cloud & Automation</span>
                </div>
              </div>
            </div>

            {/* Core Working Tenet */}
            <div className="p-4 rounded-lg bg-surface-200/50 border border-slate-800 text-xs text-slate-400 font-mono flex items-start gap-2.5">
              <span className="text-brand-primary text-base">“</span>
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
