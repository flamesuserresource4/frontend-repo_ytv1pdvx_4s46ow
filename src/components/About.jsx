import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0A0B10] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-2 md:order-1"
        >
          <h2 className="text-3xl font-semibold sm:text-4xl" style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}>
            About Me
          </h2>
          <p className="mt-4 text-slate-300" style={{ fontFamily: 'Montserrat, ui-sans-serif, system-ui' }}>
            I’m Sanjay Kumar — a passionate innovator and IT student, driven to build technology that
            creates real-world impact. My work blends human-centered design with emerging tech to craft
            solutions that feel intuitive, empowering, and safe.
          </p>
          <p className="mt-3 text-slate-300" style={{ fontFamily: 'Montserrat, ui-sans-serif, system-ui' }}>
            I believe innovation is a responsibility. With LifeBrace, I’m exploring how wearables,
            edge AI, and connected systems can help protect lives and inspire confidence.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="order-1 md:order-2"
        >
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl ring-1 ring-white/10">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1780&auto=format&fit=crop"
              alt="Sanjay Kumar portrait"
              className="h-full w-full object-cover opacity-90"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-700/20 via-transparent to-fuchsia-600/20 mix-blend-screen" />
          </div>
        </motion.div>
      </div>
      {/* subtle parallax background lines */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.25),transparent_70%)]" />
    </section>
  );
};

export default About;
