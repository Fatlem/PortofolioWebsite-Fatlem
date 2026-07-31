import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Award, X, ZoomIn } from 'lucide-react';
import { certificates } from '../data/portfolioData';

function CertCard({ cert, index, onOpen }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{ background: 'rgba(15,23,42,0.7)', border: '1px solid rgba(255,255,255,0.06)' }}
      onClick={() => onOpen(cert)}
      whileHover={{ y: -4 }}
    >
      {/* Certificate image */}
      <div className="relative overflow-hidden h-44">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.parentElement.style.background = 'linear-gradient(135deg, rgba(6,182,212,0.1), rgba(168,85,247,0.1))';
            e.target.style.display = 'none';
          }}
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'rgba(3,7,18,0.7)' }}>
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm font-medium">
            <ZoomIn size={16} />
            View Certificate
          </div>
        </div>

        {/* Top gradient */}
        <div className="absolute top-0 left-0 right-0 h-16"
          style={{ background: 'linear-gradient(to bottom, rgba(3,7,18,0.6), transparent)' }} />

        <div className="absolute top-3 left-3">
          <Award size={16} className="text-cyan-400 opacity-80" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-bold text-white leading-tight mb-1 line-clamp-2">{cert.title}</h3>
        <p className="text-xs font-mono text-cyan-400 opacity-80">{cert.issuer}</p>
      </div>

      {/* Bottom neon line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: 'linear-gradient(to right, #06b6d4, #a855f7)' }} />
    </motion.div>
  );
}

function CertModal({ cert, onClose }) {
  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0" style={{ background: 'rgba(3,7,18,0.92)', backdropFilter: 'blur(16px)' }} />
          <motion.div
            className="relative max-w-2xl w-full rounded-2xl overflow-hidden z-10"
            style={{ background: 'rgba(15,23,42,0.95)', border: '1px solid rgba(6,182,212,0.3)' }}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              style={{ background: 'rgba(255,255,255,0.08)' }}
              onClick={onClose}
            >
              <X size={16} />
            </button>
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full object-contain max-h-96"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <Award size={16} className="text-cyan-400" />
                <span className="text-xs font-mono text-cyan-400">{cert.issuer}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{cert.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{cert.description}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #10b981, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-mono text-emerald-400 tracking-[0.3em] uppercase mb-3">Achievements</p>
          <h2 className="section-title">Certificates</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            // continuous learning, continuous growth
          </p>

          {/* Count badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono mt-4"
            style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)', color: '#34d399' }}>
            <Award size={14} />
            {certificates.length} Certifications from Dicoding Indonesia
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {certificates.map((cert, i) => (
            <CertCard key={i} cert={cert} index={i} onOpen={setSelected} />
          ))}
        </div>
      </div>

      <CertModal cert={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
