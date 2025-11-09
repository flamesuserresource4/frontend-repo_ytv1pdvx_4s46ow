import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import LifeBrace from './components/LifeBrace';
import Projects from './components/Projects';
import SkillsExperience from './components/SkillsExperience';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#0A0B10] text-white">
      {/* Top nav */}
      <header className="fixed left-0 right-0 top-0 z-50 mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur-md">
          <div className="text-sm font-semibold tracking-wide text-slate-200" style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>
            Sanjay Kumar
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex" style={{ fontFamily: 'Montserrat, ui-sans-serif, system-ui' }}>
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#lifebrace" className="hover:text-white">LifeBrace</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main className="w-full overflow-x-hidden">
        <Hero />
        <About />
        <LifeBrace />
        <Projects />
        <SkillsExperience />
        <Contact />
      </main>
    </div>
  );
};

export default App;
