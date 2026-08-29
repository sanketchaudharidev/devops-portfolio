import React from 'react';
import { Terminal, Shield, ArrowUp } from 'lucide-react';
import { profileData } from '../../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-surface-400 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-surface-100 border border-slate-700/80 flex items-center justify-center font-mono font-bold text-xs text-brand-primary">
              SC
            </div>
            <div>
              <span className="font-semibold text-slate-200 text-sm">
                {profileData.name}
              </span>
              <span className="mx-2 text-slate-600">•</span>
              <span className="font-mono text-xs text-slate-400">DevOps Engineer</span>
            </div>
          </div>

          <div className="flex items-center gap-6 font-mono text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Production Ready</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-sky-400" />
              <span>Verified Experience</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-brand-primary" />
              <span>CI/CD Automated</span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-surface-200 hover:bg-surface-100 border border-slate-700/60 text-slate-300 hover:text-white font-mono text-xs transition-colors"
            aria-label="Scroll to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            © {new Date().getFullYear()} {profileData.name}. All technical data verified from primary resume.
          </p>
          <div className="flex items-center gap-4">
            <span>Pune, Maharashtra, India</span>
            <span>•</span>
            <a
              href={`mailto:${profileData.email}`}
              className="text-slate-400 hover:text-brand-primary transition-colors"
            >
              {profileData.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
