import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleExplore = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#0A0B10] text-white">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Cinematic gradient auras */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(60,130,246,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
      </div>

      {/* Headline content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}
        >
          Sanjay Kumar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2, ease: 'easeOut' }}
          className="mt-4 max-w-2xl text-base/relaxed sm:text-lg/relaxed md:text-xl/relaxed text-slate-200"
          style={{ fontFamily: 'Montserrat, ui-sans-serif, system-ui' }}
        >
          Founder of LifeBrace – Empowering Safety Through Technology
        </motion.p>

        <motion.button
          onClick={handleExplore}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-7 py-3 text-base font-medium shadow-[0_0_40px_rgba(99,102,241,0.45)] ring-1 ring-white/20 hover:shadow-[0_0_60px_rgba(139,92,246,0.55)] focus:outline-none focus:ring-2 focus:ring-indigo-400/70"
        >
          Explore My Vision
          <ArrowRight className="size-4" />
        </motion.button>
      </div>

      {/* Slow cinematic bottom cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.5 }}
        className="pointer-events-none absolute bottom-6 left-0 right-0 mx-auto flex w-full max-w-7xl justify-center"
      >
        <div className="flex items-center gap-2 text-xs text-slate-300/80">
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-slate-300/50 to-transparent" />
          Scroll
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-slate-300/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
