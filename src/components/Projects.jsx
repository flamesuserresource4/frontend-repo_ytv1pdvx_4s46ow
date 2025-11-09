import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI Safety Assistant',
    desc: 'Lightweight on-device model for intent recognition and emergency triggers.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
  },
  {
    title: 'IoT SOS Beacon',
    desc: 'Low-power BLE + LoRa prototype enabling location-aware alerts.',
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Gesture Detection',
    desc: 'TinyML model trained on IMU data for silent distress signaling.',
    img: 'https://images.unsplash.com/photo-1542834369-f10ebf06d3cb?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Portfolio Engine',
    desc: 'Cinematic React experience with scroll-driven storytelling.',
    img: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2094&auto=format&fit=crop',
  },
  {
    title: 'Secure Cloud Relay',
    desc: 'Encrypted message routing for trusted contacts and responders.',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Edge Analytics Dashboard',
    desc: 'Real-time insights, anomalies, and system health metrics.',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2069&auto=format&fit=crop',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-[#0A0B10] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-8 top-8 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.2),transparent_60%)] blur-3xl" />
        <div className="absolute right-8 bottom-8 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.2),transparent_60%)] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl" style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>Featured Projects</h2>
          <p className="mt-3 text-slate-300" style={{ fontFamily: 'Montserrat, ui-sans-serif, system-ui' }}>
            Selected experiments across AI, IoT, and experience design.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl ring-1 ring-white/10"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>
              <div className="bg-white/5 p-5 backdrop-blur-sm">
                <h3 className="text-lg font-semibold" style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>{p.title}</h3>
                <p className="mt-1 text-sm text-slate-300" style={{ fontFamily: 'Montserrat, ui-sans-serif, system-ui' }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
