import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { PipelineSection } from './sections/PipelineSection';
import { Skills } from './sections/Skills';
import { Impact } from './sections/Impact';
import { Projects } from './sections/Projects';
import { EducationCertifications } from './sections/EducationCertifications';
import { Contact } from './sections/Contact';
import { TerminalModal } from './components/terminal/TerminalModal';

export const App: React.FC = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-slate-100 flex flex-col selection:bg-brand-primary/20 selection:text-brand-primary">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        <About />
        <Experience />
        <PipelineSection />
        <Skills />
        <Impact />
        <Projects />
        <EducationCertifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Easter Egg Terminal Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
};

export default App;
