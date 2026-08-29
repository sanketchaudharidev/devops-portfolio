import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowRight, ShieldCheck } from 'lucide-react';
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
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />

      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Main Headline & Context */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Direct Communication
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase">
              LET&apos;S BUILD SOMETHING RELIABLE.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Available for DevOps Engineer roles, cloud infrastructure automation, CI/CD pipeline modernization, and high-availability application deployments.
            </p>
          </div>

          {/* Contact Box */}
          <div className="p-8 sm:p-10 rounded-2xl bg-surface-300 border border-slate-700/80 shadow-2xl space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-surface-200/80 border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-surface-100 flex items-center justify-center text-sky-400 mx-auto md:mx-0 border border-slate-700">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="font-mono text-xs text-slate-400 uppercase">Email Address</div>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-brand-primary break-all block transition-colors"
                >
                  {profileData.email}
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-xl bg-surface-200/80 border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-surface-100 flex items-center justify-center text-emerald-400 mx-auto md:mx-0 border border-slate-700">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="font-mono text-xs text-slate-400 uppercase">Contact Phone</div>
                <a
                  href={`tel:${profileData.phone}`}
                  className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-brand-primary block transition-colors"
                >
                  +91 {profileData.phone}
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-surface-200/80 border border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-surface-100 flex items-center justify-center text-amber-400 mx-auto md:mx-0 border border-slate-700">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="font-mono text-xs text-slate-400 uppercase">Location</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200">
                  {profileData.location}
                </div>
              </div>

            </div>

            {/* Quick Actions Bar */}
            <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-4">
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
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-100 hover:bg-surface-50 border border-slate-700 text-slate-200 font-mono text-xs font-semibold transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Configurable Placeholders for GitHub & LinkedIn without fake URLs */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-primary" />
                <span>Professional Links (Configurable Placeholders):</span>
              </div>

              <div className="flex items-center gap-3">
                {profileData.placeholders.github.url ? (
                  <a
                    href={profileData.placeholders.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded bg-surface-200 hover:bg-surface-100 border border-slate-700 text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>{profileData.placeholders.github.text}</span>
                  </a>
                ) : (
                  <span className="px-3 py-1 rounded bg-surface-200 border border-dashed border-slate-700 text-slate-400">
                    {profileData.placeholders.github.text}
                  </span>
                )}

                {profileData.placeholders.linkedin.url ? (
                  <a
                    href={profileData.placeholders.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded bg-surface-200 hover:bg-surface-100 border border-slate-700 text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>{profileData.placeholders.linkedin.text}</span>
                  </a>
                ) : (
                  <span className="px-3 py-1 rounded bg-surface-200 border border-dashed border-slate-700 text-slate-400">
                    {profileData.placeholders.linkedin.text}
                  </span>
                )}
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};
