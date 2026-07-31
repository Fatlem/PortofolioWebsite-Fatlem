import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Rocket } from 'lucide-react';
import { timeline } from '../data/portfolioData';

const colorMap = {
  cyan: { text: '#22d3ee', border: 'rgba(6,182,212,0.35)', bg: 'rgba(6,182,212,0.08)', dot: '#06b6d4', glow: 'rgba(6,182,212,0.4)' },
  purple: { text: '#c084fc', border: 'rgba(168,85,247,0.35)', bg: 'rgba(168,85,247,0.08)', dot: '#a855f7', glow: 'rgba(168,85,247,0.4)' },
  emerald: { text: '#34d399', border: 'rgba(16,185,129,0.35)', bg: 'rgba(16,185,129,0.08)', dot: '#10b981', glow: 'rgba(16,185,129,0.4)' },
};

const typeIcon = {
  work: Briefcase,
  education: GraduationCap,
  project: Rocket,
};

function TimelineItem({ item, index, isLeft }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const c = colorMap[item.color];
  const Icon = typeIcon[item.type] || Briefcase;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center gap-0 ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'} flex-row`}
    >
      {/* Card — desktop left/right, mobile always right */}
      <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:ml-8' : 'md:mr-8'} ml-8 md:ml-0`}>
        <div
          className="rounded-2xl p-5 glass-hover transition-all duration-300"
          style={{ background: c.bg, border: `1px solid ${c.border}` }}
        >
          <div className="flex items-start gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: c.bg, border: `1px solid ${c.border}` }}>
              <Icon size={14} style={{ color: c.text }} />
            </div>
            <div>
              <span className="text-xs font-mono px-2 py-0.5 rounded-full mb-1 inline-block"
                style={{ background: c.bg, color: c.text, border: `1px solid ${c.border}` }}>
                {item.year}
              </span>
              <h3 className="text-base font-bold text-white leading-tight">{item.title}</h3>
              <p className="text-xs font-mono mt-0.5" style={{ color: c.text }}>{item.company}</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>

      {/* Center dot — hidden on mobile, shown via absolute line */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex-shrink-0">
        <motion.div
          className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
          style={{ background: '#030712', borderColor: c.dot, boxShadow: `0 0 12px ${c.glow}` }}
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        >
          <div className="w-2 h-2 rounded-full" style={{ background: c.dot }} />
        </motion.div>
      </div>

      {/* Spacer for opposite side on desktop */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }} />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="text-xs font-mono text-emerald-400 tracking-[0.3em] uppercase mb-3">Journey</p>
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            the path that shaped me
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="timeline-line" />

          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => (
              <TimelineItem
                key={i}
                item={item}
                index={i}
                isLeft={i % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
