import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Zap } from 'lucide-react';

const Feature = ({ icon: Icon, title, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm"
  >
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-gradient-to-tr from-indigo-500/40 to-fuchsia-500/40 p-2 ring-1 ring-white/10">
        <Icon className="size-5 text-indigo-300" />
      </div>
      <h4 className="text-lg font-semibold" style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>{title}</h4>
    </div>
    <p className="mt-3 text-sm text-slate-300" style={{ fontFamily: 'Montserrat, ui-sans-serif, system-ui' }}>{text}</p>
  </motion.div>
);

const LifeBrace = () => {
  return (
    <section id="lifebrace" className="relative w-full bg-[#07080D] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-12 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-24 left-12 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold sm:text-4xl" style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>
            LifeBrace
          </h2>
          <p className="mt-3 text-slate-300" style={{ fontFamily: 'Montserrat, ui-sans-serif, system-ui' }}>
            Technology that Protects. Innovation that Empowers.
          </p>
          <p className="mt-4 text-slate-300" style={{ fontFamily: 'Montserrat, ui-sans-serif, system-ui' }}>
            A smart safety bracelet concept blending edge AI, biometric sensing, and discreet
            communication to detect danger and trigger rapid assistance — designed to make safety
            feel wearable, personal, and powerful.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Feature
            icon={ShieldCheck}
            title="Proactive Safety"
            text="Anomaly detection, distress gestures, and secure signaling combine to respond before a situation escalates."
          />
          <Feature
            icon={Cpu}
            title="Edge Intelligence"
            text="On-device processing preserves privacy while enabling instant classification and response."
          />
          <Feature
            icon={Zap}
            title="Rapid Connectivity"
            text="Multi-channel alerts with location sharing keep trusted contacts informed when every second matters."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-12 overflow-hidden rounded-3xl ring-1 ring-white/10"
        >
          <img
            src="https://images.unsplash.com/photo-1551281044-8b89e82e5310?q=80&w=2128&auto=format&fit=crop"
            alt="Futuristic wearable technology"
            className="h-full w-full object-cover opacity-95"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LifeBrace;
