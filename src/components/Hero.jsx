import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import Canvas3D from './Canvas3D';
import { personalInfo } from '../data/portfolioData';

const roles = [
  'Full Stack Developer',
  'Frontend Engineer',
  'UI/UX Enthusiast',
  'React Developer',
];

function TypewriterText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    const target = roles[index];
    let timeout;

    if (phase === 'typing') {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setPhase('deleting'), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setIndex((i) => (i + 1) % roles.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, index]);

  return (
    <span className="text-cyan-400 font-mono">
      {displayed}
      <span className="animate-pulse text-purple-400">|</span>
    </span>
  );
}

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero() {
  const heroRef = useRef(null);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl"
          style={{ background: 'radial-gradient(circle, #10b981, transparent)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full pt-24 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left: Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="flex flex-col justify-center z-10"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium"
                style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.25)', color: '#22d3ee' }}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-3"
            >
              <span className="text-white">Faathir</span>
              <br />
              <span className="animated-gradient">El Tasleem</span>
            </motion.h1>

            {/* Role typewriter */}
            <motion.div variants={fadeUp} className="text-2xl sm:text-3xl font-bold mb-6 h-10 flex items-center">
              <TypewriterText />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg mb-8"
            >
              {personalInfo.tagline} — crafting{' '}
              <span className="text-cyan-400">beautiful</span>,{' '}
              <span className="text-purple-400">functional</span> &{' '}
              <span className="text-emerald-400">user-friendly</span> web experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
              <motion.button
                onClick={scrollToProjects}
                className="btn-primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={scrollToContact}
                className="btn-secondary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <span className="text-slate-600 text-sm font-mono">find me on</span>
              <div className="h-px flex-1 max-w-12" style={{ background: 'linear-gradient(to right, rgba(6,182,212,0.4), transparent)' }} />
              {[
                { icon: Github, href: personalInfo.github, label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: Instagram, href: personalInfo.instagram, label: 'Instagram' },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  whileHover={{ scale: 1.15, borderColor: 'rgba(6,182,212,0.5)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </motion.div>

            {/* Quick stats */}
            <motion.div variants={fadeUp} className="flex gap-8 mt-10 pt-8 border-t border-white/5">
              {[
                { value: '5+', label: 'Projects Built' },
                { value: '9+', label: 'Certifications' },
                { value: '2+', label: 'Years Learning' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black text-glow-cyan text-cyan-400">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
            className="relative h-[420px] sm:h-[520px] lg:h-[600px]"
          >
            {/* Glow behind canvas */}
            <div className="absolute inset-0 rounded-2xl opacity-20 blur-3xl"
              style={{ background: 'radial-gradient(circle at center, #06b6d4 0%, #a855f7 50%, transparent 70%)' }} />

            {/* Canvas wrapper */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(6,182,212,0.1)' }}>
              <Canvas3D />
            </div>

            {/* Decorative corner badges */}
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-400"
              style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)' }}>
              ✦ interactive
            </div>
            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg text-xs font-mono text-purple-400"
              style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.2)' }}>
              drag to rotate
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <ArrowDown size={16} />
      </motion.button>
    </section>
  );
}
