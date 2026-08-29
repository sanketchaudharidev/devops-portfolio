import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, Minimize2, CheckCircle2 } from 'lucide-react';
import { profileData } from '../../data/profile';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandOutput {
  command: string;
  output: string | React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'whoami',
      output: (
        <div className="space-y-1 text-slate-300 font-mono text-xs">
          <p className="text-emerald-400 font-bold">sanket@devops-node-01:~$</p>
          <p><span className="text-sky-400">Name:</span> {profileData.name}</p>
          <p><span className="text-sky-400">Role:</span> {profileData.title}</p>
          <p><span className="text-sky-400">Location:</span> {profileData.location}</p>
          <p><span className="text-sky-400">AWS Services:</span> EC2, S3, VPC, IAM, RDS, CloudFront, Route 53, ELB, CloudWatch</p>
          <p><span className="text-sky-400">CI/CD:</span> Jenkins (Declarative), GitLab CI/CD, GitHub Actions, SonarQube</p>
          <p><span className="text-sky-400">Containers:</span> Docker, Docker Compose, Kubernetes</p>
          <p className="text-slate-400 mt-2">Type &apos;help&apos; for available commands or &apos;exit&apos; to close.</p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let result: React.ReactNode = '';

    switch (cmd) {
      case 'help':
        result = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p className="text-amber-400 font-semibold">Available Commands:</p>
            <p><span className="text-sky-400">whoami</span> - Display engineer profile summary</p>
            <p><span className="text-sky-400">experience</span> - List verified roles and companies</p>
            <p><span className="text-sky-400">skills</span> - Display key technical skills</p>
            <p><span className="text-sky-400">contact</span> - Display email and location</p>
            <p><span className="text-sky-400">resume</span> - Download resume PDF</p>
            <p><span className="text-sky-400">clear</span> - Clear terminal session</p>
            <p><span className="text-sky-400">exit</span> - Close terminal window</p>
          </div>
        );
        break;

      case 'whoami':
        result = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p><span className="text-sky-400">User:</span> Sanket Chaudhari</p>
            <p><span className="text-sky-400">Role:</span> DevOps Engineer (3+ Years Experience)</p>
            <p><span className="text-sky-400">Status:</span> Ready for High-Scale Infrastructure & Pipelines</p>
          </div>
        );
        break;

      case 'experience':
        result = (
          <div className="space-y-2 text-xs text-slate-300 font-mono">
            {profileData.experience.map((exp) => (
              <div key={exp.id} className="border-l-2 border-sky-400/40 pl-2">
                <p className="text-slate-100 font-semibold">{exp.company} — <span className="text-sky-400">{exp.role}</span></p>
                <p className="text-slate-400 text-[11px]">{exp.dates} | {exp.location}</p>
                {exp.project && <p className="text-slate-300 text-[11px]">Context: {exp.project}</p>}
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        result = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p><span className="text-amber-400">AWS:</span> {profileData.awsExperience.handsOn.join(', ')}</p>
            <p><span className="text-sky-400">CI/CD:</span> Jenkins, GitLab CI/CD, GitHub Actions, SonarQube</p>
            <p><span className="text-emerald-400">Containers:</span> Docker, Docker Compose, Kubernetes</p>
            <p><span className="text-purple-400">IaC:</span> Terraform, CloudFormation (conceptual)</p>
            <p><span className="text-slate-300">Scripting:</span> Bash, Python, Groovy, YAML, Node.js</p>
          </div>
        );
        break;

      case 'contact':
        result = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p><span className="text-sky-400">Email:</span> {profileData.email}</p>
            <p><span className="text-sky-400">Phone:</span> {profileData.phone}</p>
            <p><span className="text-sky-400">Location:</span> {profileData.location}</p>
          </div>
        );
        break;

      case 'resume':
        window.open(profileData.resumeUrl, '_blank');
        result = <p className="text-emerald-400 font-mono text-xs">Triggered resume download: {profileData.resumeFilename}</p>;
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
        onClose();
        setInput('');
        return;

      default:
        result = (
          <p className="text-rose-400 text-xs font-mono">
            zsh: command not found: {cmd}. Type &apos;help&apos; for available commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: input, output: result }]);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-surface-400 border border-slate-700/90 rounded-lg shadow-2xl overflow-hidden font-mono flex flex-col h-[460px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Titlebar */}
        <div className="bg-surface-200 px-4 py-2.5 flex items-center justify-between border-b border-slate-800 select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-xs text-slate-400 ml-2 font-mono flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-brand-primary" />
              sanket@infrastructure-node-01: ~ (zsh)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="text-slate-400 hover:text-white">
              <Minimize2 className="w-3.5 h-3.5" />
            </button>
            <button onClick={onClose} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Output area */}
        <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-surface-400 text-slate-200">
          <div className="text-slate-500 text-[11px] pb-2 border-b border-slate-800/80 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>DevOps Terminal Environment [Interactive Easter Egg]</span>
          </div>

          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs">
                <span className="text-emerald-400 font-semibold">sanket@devops:~$</span>
                <span className="text-slate-200">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
        </div>

        {/* Command Input prompt */}
        <form onSubmit={handleCommand} className="p-3 bg-surface-300 border-t border-slate-800 flex items-center gap-2">
          <span className="text-emerald-400 text-xs font-semibold shrink-0">sanket@devops:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-xs text-slate-100 font-mono placeholder:text-slate-600"
            placeholder="Type 'help', 'whoami', 'skills', or 'experience'..."
          />
          <button type="submit" className="text-xs px-2.5 py-1 bg-surface-100 hover:bg-surface-50 text-slate-300 rounded border border-slate-700">
            Run
          </button>
        </form>
      </div>
    </div>
  );
};
