import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Code2, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = ['Home', 'About', 'Projects', 'Experience', 'Certificates', 'Contact'];

const socials = [
  { icon: Github, href: personalInfo.github, label: 'GitHub' },
  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
  { icon: Instagram, href: personalInfo.instagram, label: 'Instagram' },
  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Top gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 opacity-50"
        style={{ background: 'linear-gradient(to bottom, rgba(6,182,212,0.5), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(6,182,212,0.3), rgba(168,85,247,0.3))', border: '1px solid rgba(6,182,212,0.4)' }}>
                <Code2 size={18} className="text-cyan-400" />
              </div>
              <span className="font-mono font-bold text-lg">
                <span className="text-cyan-400">Fat</span>
                <span className="text-purple-400">lem</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Full Stack Web Developer based in Indonesia. Passionate about crafting beautiful digital experiences.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((label) => (
                <li key={label}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(label.toLowerCase());
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors font-mono"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Connect</h4>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:text-cyan-400 transition-all"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
                  whileHover={{ scale: 1.12, borderColor: 'rgba(6,182,212,0.4)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-slate-600 text-xs font-mono flex items-center gap-1.5">
            © 2025 Fatlem · Full Stack Developer
            <Heart size={11} className="text-red-500 fill-red-500" />
          </p>
          <p className="text-slate-600 text-xs font-mono">
            Built with <span className="text-cyan-500">React</span> + <span className="text-purple-500">Three.js</span> + <span className="text-emerald-500">Framer Motion</span>
          </p>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollTop}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 hover:text-cyan-400 transition-all"
            style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.2)' }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={15} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
