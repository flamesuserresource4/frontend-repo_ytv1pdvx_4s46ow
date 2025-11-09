import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-[#0A0B10] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 bottom-10 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute right-1/4 top-6 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold sm:text-4xl"
          style={{ fontFamily: 'Poppins, ui-sans-serif, system-ui' }}
        >
          Let’s Build Something Meaningful
        </motion.h2>
        <p className="mt-3 text-slate-300" style={{ fontFamily: 'Montserrat, ui-sans-serif, system-ui' }}>
          Open to collaborations, research, and opportunities that amplify impact.
        </p>

        <motion.form
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none ring-0 focus:border-indigo-400/60"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none ring-0 focus:border-indigo-400/60"
          />
          <textarea
            rows="5"
            placeholder="Message"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none ring-0 focus:border-indigo-400/60"
          />
          <button
            type="submit"
            className="mt-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-6 py-3 font-medium shadow-[0_0_40px_rgba(99,102,241,0.45)] ring-1 ring-white/20 hover:shadow-[0_0_60px_rgba(139,92,246,0.55)]"
          >
            Send Message
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 flex items-center justify-center gap-5"
        >
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-100 transition hover:border-indigo-400/60 hover:text-white">
            <Linkedin className="size-5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-100 transition hover:border-indigo-400/60 hover:text-white">
            <Github className="size-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-100 transition hover:border-indigo-400/60 hover:text-white">
            <Instagram className="size-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="pointer-events-none mt-12 text-xs text-slate-400"
        >
          © {new Date().getFullYear()} Sanjay Kumar · Fade to black
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
