import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Terminal as TerminalIcon } from 'lucide-react';
import { profileData } from '../../data/profile';
import { useScrollSpy } from '../../hooks/useScrollSpy';

interface NavbarProps {
  onOpenTerminal?: () => void;
}

const NAV_ITEMS = [
  { label: 'ABOUT', href: '#about', id: 'about' },
  { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
  { label: 'PIPELINE', href: '#pipeline', id: 'pipeline' },
  { label: 'SKILLS', href: '#skills', id: 'skills' },
  { label: 'PROJECTS', href: '#projects', id: 'projects' },
  { label: 'CONTACT', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(
    NAV_ITEMS.map((item) => item.id),
    120
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface-400/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#"
            className="flex items-center gap-2 group text-slate-100 hover:text-brand-primary transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-surface-100 border border-slate-700/80 flex items-center justify-center font-mono font-bold text-xs text-brand-primary group-hover:border-brand-primary/50 transition-colors">
              SC
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-slate-100 group-hover:text-brand-primary transition-colors">
                {profileData.name.toUpperCase()}
              </span>
              <span className="font-mono text-[10px] text-slate-400 tracking-wider">
                DEVOPS ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 font-mono text-xs">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-md transition-colors ${
                    isActive
                      ? 'text-brand-primary bg-brand-primary/10 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-surface-100/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-100 hover:bg-surface-50 border border-slate-700/80 text-slate-300 hover:text-brand-primary font-mono text-xs transition-colors"
                title="Open DevOps Terminal Easter Egg"
                aria-label="Open DevOps Terminal Easter Egg"
              >
                <TerminalIcon className="w-3.5 h-3.5 text-brand-primary" />
                <span>$ sh</span>
              </button>
            )}

            <a
              href={profileData.resumeUrl}
              download={profileData.resumeFilename}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-brand-primary text-slate-950 font-semibold font-mono text-xs hover:bg-sky-300 shadow-md transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>RESUME</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="p-2 rounded-lg bg-surface-100 border border-slate-800 text-brand-primary"
                aria-label="Open Terminal"
              >
                <TerminalIcon className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-surface-100 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-surface-300 border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-3 animate-in fade-in slide-in-from-top-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-md font-mono text-xs ${
                activeSection === item.id
                  ? 'text-brand-primary bg-brand-primary/10 font-semibold'
                  : 'text-slate-300 hover:bg-surface-100'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={profileData.resumeUrl}
              download={profileData.resumeFilename}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-brand-primary text-slate-950 font-semibold font-mono text-xs shadow"
            >
              <FileDown className="w-4 h-4" />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
