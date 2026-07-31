import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, GraduationCap, Code, Sparkles } from 'lucide-react';
import { personalInfo, skills } from '../data/portfolioData';

const colorMap = {
  cyan: {
    border: 'rgba(6,182,212,0.3)',
    bg: 'rgba(6,182,212,0.05)',
    text: '#22d3ee',
    bar: 'linear-gradient(to right, #06b6d4, #22d3ee)',
    glow: 'rgba(6,182,212,0.3)',
    icon: 'rgba(6,182,212,0.15)',
  },
  purple: {
    border: 'rgba(168,85,247,0.3)',
    bg: 'rgba(168,85,247,0.05)',
    text: '#c084fc',
    bar: 'linear-gradient(to right, #9333ea, #c084fc)',
    glow: 'rgba(168,85,247,0.3)',
    icon: 'rgba(168,85,247,0.15)',
  },
  emerald: {
    border: 'rgba(16,185,129,0.3)',
    bg: 'rgba(16,185,129,0.05)',
    text: '#34d399',
    bar: 'linear-gradient(to right, #10b981, #34d399)',
    glow: 'rgba(16,185,129,0.3)',
    icon: 'rgba(16,185,129,0.15)',
  },
};

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const c = colorMap[color];

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-slate-300 font-medium">{name}</span>
        <span className="text-xs font-mono" style={{ color: c.text }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: c.bar, boxShadow: `0 0 8px ${c.glow}` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

function SkillCard({ category, color, items, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const c = colorMap[color];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="rounded-2xl p-6 glass-hover"
      style={{ background: c.bg, border: `1px solid ${c.border}` }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: c.icon }}>
          <Code size={15} style={{ color: c.text }} />
        </div>
        <h3 className="font-bold text-white">{category}</h3>
      </div>
      {items.map((skill, i) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} color={color} delay={i * 0.1 + 0.3} />
      ))}
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="text-xs font-mono text-cyan-400 tracking-[0.3em] uppercase mb-3">Who I Am</p>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            passionate developer & continuous learner
          </p>
        </motion.div>

        {/* About content + photo */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative rings */}
              <motion.div
                className="absolute -inset-4 rounded-full opacity-20"
                style={{ border: '1px solid rgba(6,182,212,0.5)' }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -inset-8 rounded-full opacity-10"
                style={{ border: '1px dashed rgba(168,85,247,0.5)' }}
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />

              {/* Photo frame */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden"
                style={{ border: '2px solid rgba(6,182,212,0.3)', boxShadow: '0 0 40px rgba(6,182,212,0.15)' }}>
                <img
                  src="/images/El.jpg"
                  alt="Faathir El Tasleem"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.background = 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(168,85,247,0.2))';
                    e.target.parentElement.innerHTML += '<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:4rem;font-weight:900;background:linear-gradient(135deg,#22d3ee,#a855f7);-webkit-background-clip:text;-webkit-text-fill-color:transparent">FE</div>';
                  }}
                />
              </div>

              {/* Badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl text-sm font-mono font-bold"
                style={{ background: 'rgba(6,182,212,0.15)', border: '1px solid rgba(6,182,212,0.3)', color: '#22d3ee' }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles size={12} className="inline mr-1" />
                Open to Work
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              Hello, I'm <span className="text-glow-cyan text-cyan-400">{personalInfo.nickname}</span> 👋
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">{personalInfo.bio}</p>
            <p className="text-slate-400 leading-relaxed mb-6">{personalInfo.bio2}</p>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                { icon: MapPin, label: 'Location', value: personalInfo.location, color: 'cyan' },
                { icon: GraduationCap, label: 'University', value: personalInfo.university, color: 'purple' },
                { icon: Code, label: 'Major', value: personalInfo.major, color: 'emerald' },
                { icon: Sparkles, label: 'Status', value: 'Available for opportunities', color: 'cyan' },
              ].map(({ icon: Icon, label, value, color }) => {
                const c = colorMap[color];
                return (
                  <div key={label} className="flex items-start gap-3 p-3 rounded-xl"
                    style={{ background: c.bg, border: `1px solid ${c.border}` }}>
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: c.icon }}>
                      <Icon size={13} style={{ color: c.text }} />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-mono">{label}</div>
                      <div className="text-sm text-slate-200 font-medium leading-snug">{value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="btn-primary inline-block"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>

        {/* Skills grid */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mb-10"
          >
            <p className="text-xs font-mono text-purple-400 tracking-[0.3em] uppercase mb-2">Tech Stack</p>
            <h3 className="text-2xl font-bold text-white">Skills & Expertise</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((group, i) => (
              <SkillCard key={group.category} {...group} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
