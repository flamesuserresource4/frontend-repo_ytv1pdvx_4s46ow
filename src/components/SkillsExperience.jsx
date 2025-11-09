import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Radio, Sparkles } from 'lucide-react';

const skills = [
  { icon: Code2, name: 'Frontend', value: 85 },
  { icon: Cpu, name: 'Edge AI', value: 75 },
  { icon: Radio, name: 'IoT & Wearables', value: 80 },
  { icon: Sparkles, name: 'UX Motion', value: 90 },
];

const Ring = ({ value }) => (
  <svg viewBox="0 0 36 36" className="h-20 w-20">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6366F1" />
        <stop offset="100%" stopColor="#A855F7" />
      </linearGradient>
    </defs>
    <path
      d="M18 2a16 16 0 1 1 0 32a16 16 0 1 1 0-32"
      fill="none"
      stroke="rgba(255,255,255,0.1)"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M18 2a16 16 0 1 1 0 32a16 16 0 1 1 0-32"
      fill="none"
      stroke="url(#g)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray={`${value}, 100`}
      transform="rotate(-90 18 18)"
    />
  </svg>
);

const SkillsExperience = () => {
  return (
    <section id="skills" className="relative w-full bg-[#07080D] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-8 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.2),transparent_60%)] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl" style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>Skills</h2>
            <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-2">
              {skills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur-sm"
                >
                  <Ring value={s.value} />
                  <div>
                    <div className="flex items-center gap-2">
                      <s.icon className="size-5 text-indigo-300" />
                      <h4 className="text-lg font-semibold" style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>{s.name}</h4>
                    </div>
                    <p className="mt-1 text-sm text-slate-300" style={{ fontFamily: 'Montserrat, ui-sans-serif, system-ui' }}>{s.value}% proficiency</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl" style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>Experience</h2>
            <div className="mt-6 space-y-6">
              {[{
                title: 'Founder, LifeBrace',
                time: '2024 — Present',
                text: 'Leading R&D into wearable safety tech powered by edge AI and IoT.'
              },{
                title: 'IT Student',
                time: '2019 — 2024',
                text: 'Focused on human-centered computing, embedded systems, and product design.'
              },{
                title: 'Prototype Builder',
                time: '2018 — 2019',
                text: 'Early experiments with sensors, microcontrollers, and interaction design.'
              }].map((e, i) => (
                <motion.div
                  key={e.title}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="relative overflow-hidden rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-sm"
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-indigo-500 to-fuchsia-500" />
                  <div className="ml-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold" style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>{e.title}</h4>
                      <span className="text-sm text-slate-300" style={{ fontFamily: 'Montserrat, ui-sans-serif, system-ui' }}>{e.time}</span>
                    </div>
                    <p className="mt-1 text-slate-300" style={{ fontFamily: 'Montserrat, ui-sans-serif, system-ui' }}>{e.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsExperience;
