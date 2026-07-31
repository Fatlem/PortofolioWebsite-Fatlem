import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { projects } from '../data/portfolioData';

const colorMap = {
  cyan: {
    tag: 'tag',
    border: 'rgba(6,182,212,0.25)',
    glow: '0 0 30px rgba(6,182,212,0.15)',
    hoverBorder: 'rgba(6,182,212,0.6)',
    hoverGlow: '0 0 40px rgba(6,182,212,0.25)',
    accent: '#22d3ee',
  },
  purple: {
    tag: 'tag tag-purple',
    border: 'rgba(168,85,247,0.25)',
    glow: '0 0 30px rgba(168,85,247,0.15)',
    hoverBorder: 'rgba(168,85,247,0.6)',
    hoverGlow: '0 0 40px rgba(168,85,247,0.25)',
    accent: '#c084fc',
  },
  emerald: {
    tag: 'tag tag-emerald',
    border: 'rgba(16,185,129,0.25)',
    glow: '0 0 30px rgba(16,185,129,0.15)',
    hoverBorder: 'rgba(16,185,129,0.6)',
    hoverGlow: '0 0 40px rgba(16,185,129,0.25)',
    accent: '#34d399',
  },
};

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const c = colorMap[project.color];

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -y * 12, y: x * 12 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
    >
      <motion.div
        ref={cardRef}
        className="rounded-2xl overflow-hidden glass-hover h-full flex flex-col"
        style={{
          background: 'rgba(15,23,42,0.7)',
          border: `1px solid ${hovered ? c.hoverBorder : c.border}`,
          boxShadow: hovered ? c.hoverGlow : c.glow,
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image */}
        <div className="relative overflow-hidden h-52">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700"
            style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
            onError={(e) => {
              e.target.parentElement.style.background = `linear-gradient(135deg, rgba(6,182,212,0.15), rgba(168,85,247,0.15))`;
              e.target.style.display = 'none';
            }}
          />
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-4"
            style={{ background: 'rgba(3,7,18,0.85)', backdropFilter: 'blur(4px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {project.live !== '#' && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm"
                style={{ background: `rgba(${project.color === 'cyan' ? '6,182,212' : project.color === 'purple' ? '168,85,247' : '16,185,129'},0.2)`, border: `1px solid ${c.accent}`, color: c.accent }}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={14} />
                Live Demo
              </motion.a>
            )}
            {project.github !== '#' && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-slate-300"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)' }}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={14} />
                Code
              </motion.a>
            )}
          </motion.div>

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className={c.tag + ' text-xs'}>{project.category}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className={c.tag + ' text-xs'}>{t}</span>
            ))}
          </div>

          {/* Bottom link */}
          <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            {project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-mono transition-colors"
                style={{ color: c.accent }}
              >
                <ExternalLink size={13} />
                {project.live.replace('https://', '')}
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const categories = ['All', 'Frontend', 'Fullstack'];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-mono text-purple-400 tracking-[0.3em] uppercase mb-3">My Work</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            building things that live on the internet
          </p>

          {/* Filter buttons */}
          <div className="flex justify-center gap-3 mt-8">
            <Filter size={16} className="text-slate-500 self-center" />
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-mono font-medium transition-all ${
                  activeFilter === cat
                    ? 'text-black font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
                style={
                  activeFilter === cat
                    ? { background: 'linear-gradient(135deg, #06b6d4, #a855f7)' }
                    : { background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }
                }
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          layout
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* More projects hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href={`https://github.com/Fatlem`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors font-mono"
          >
            <Github size={15} />
            More projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
