import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowRight, ShieldCheck, Github, Linkedin } from 'lucide-react';
import { profileData } from '../data/profile';
import { Button } from '../components/common/Button';
import { Container } from '../components/layout/Container';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950/20 relative overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Main Headline & Context */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wide backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Direct Communication
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase drop-shadow-2xl">
              LET&apos;S BUILD SOMETHING RELIABLE.
            </h2>

            <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed font-normal">
              Available for DevOps Engineer roles, cloud infrastructure automation, CI/CD pipeline modernization, and high-availability application deployments.
            </p>
          </div>

          {/* Contact Box */}
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/50 border border-sky-500/25 shadow-2xl space-y-8 backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-700/60 space-y-2 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-lg bg-slate-900/80 flex items-center justify-center text-sky-400 mx-auto md:mx-0 border border-slate-700/60">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="font-mono text-xs text-slate-400 uppercase">Email Address</div>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-sky-400 break-all block transition-colors"
                >
                  {profileData.email}
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-700/60 space-y-2 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-lg bg-slate-900/80 flex items-center justify-center text-emerald-400 mx-auto md:mx-0 border border-slate-700/60">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="font-mono text-xs text-slate-400 uppercase">Contact Phone</div>
                <a
                  href={`tel:${profileData.phone}`}
                  className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-emerald-400 block transition-colors"
                >
                  +91 {profileData.phone}
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-700/60 space-y-2 backdrop-blur-sm">
                <div className="w-8 h-8 rounded-lg bg-slate-900/80 flex items-center justify-center text-sky-400 mx-auto md:mx-0 border border-slate-700/60">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="font-mono text-xs text-slate-400 uppercase">Location</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200">
                  {profileData.location}
                </div>
              </div>

            </div>

            {/* Quick Actions Bar */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="primary"
                size="md"
                href={`mailto:${profileData.email}`}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Send Email Message
              </Button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-950/60 hover:bg-slate-900/60 border border-slate-700/70 text-slate-200 font-mono text-xs font-semibold transition-all cursor-pointer backdrop-blur-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>Verified Profiles:</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/sanketchaudharidev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-950/60 hover:bg-slate-900/60 border border-slate-700/60 text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-1.5 backdrop-blur-sm"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-950/60 hover:bg-slate-900/60 border border-slate-700/60 text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-1.5 backdrop-blur-sm"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Verified availability note */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-center gap-2 text-center text-xs font-mono text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full-time DevOps / Cloud Engineer • Ready to join</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
