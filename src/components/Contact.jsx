import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const socials = [
  { icon: Github, label: 'GitHub', href: personalInfo.github, username: '@Fatlem', color: 'rgba(255,255,255,0.15)' },
  { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedin, username: 'faathir-el-tasleem', color: 'rgba(10,102,194,0.25)' },
  { icon: Instagram, label: 'Instagram', href: personalInfo.instagram, username: '@fatelm_', color: 'rgba(225,48,108,0.25)' },
  { icon: Mail, label: 'Email', href: `mailto:${personalInfo.email}`, username: 'faathireltasleem224', color: 'rgba(6,182,212,0.15)' },
];

function ContactCard({ icon: Icon, label, value, href, color }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300"
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
      whileHover={{ x: 4, borderColor: 'rgba(6,182,212,0.4)', background: 'rgba(6,182,212,0.05)' }}
    >
      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: color }}>
        <Icon size={18} className="text-cyan-400" />
      </div>
      <div>
        <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">{label}</div>
        <div className="text-sm font-medium text-slate-200">{value}</div>
      </div>
    </motion.a>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'sending' | 'sent' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate form submission (replace with actual backend/EmailJS/Formspree)
    await new Promise((r) => setTimeout(r, 1500));
    // For now, open mailto as fallback
    const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(mailto);
    setStatus('sent');
    setTimeout(() => {
      setStatus(null);
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const inputClass = `w-full px-4 py-3 rounded-xl text-slate-200 text-sm outline-none transition-all duration-300 font-sans placeholder:text-slate-600 bg-white/[0.04] border border-white/10 focus:border-cyan-500/60 focus:bg-cyan-500/5 focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)]`;

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-mono text-cyan-400 tracking-[0.3em] uppercase mb-3">Let's Talk</p>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            // have a project in mind? let's build something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Let's work together</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm currently open to freelance projects, full-time opportunities, and interesting collaborations. Don't hesitate to reach out!
              </p>
            </div>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              <ContactCard
                icon={Mail}
                label="Email"
                value={personalInfo.email}
                href={`mailto:${personalInfo.email}`}
                color="rgba(6,182,212,0.12)"
              />
              <ContactCard
                icon={Phone}
                label="WhatsApp"
                value={personalInfo.phone}
                href={`https://wa.me/${personalInfo.phone.replace('+', '')}`}
                color="rgba(37,211,102,0.12)"
              />
              <ContactCard
                icon={MapPin}
                label="Location"
                value={personalInfo.location}
                href="#"
                color="rgba(168,85,247,0.12)"
              />
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Find me on</p>
              <div className="grid grid-cols-2 gap-3">
                {socials.map(({ icon: Icon, label, href, username, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl transition-all duration-300"
                    style={{ background: color, border: '1px solid rgba(255,255,255,0.08)' }}
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <Icon size={15} className="text-slate-300 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-200">{label}</div>
                      <div className="text-xs text-slate-500 font-mono">{username}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl p-8"
              style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(6,182,212,0.12)' }}>
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <Send size={16} className="text-cyan-400" />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-slate-500 mb-1.5 block">Your Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-slate-500 mb-1.5 block">Email Address *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-500 mb-1.5 block">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration / Job Opportunity"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-500 mb-1.5 block">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={inputClass + ' resize-none'}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className="relative overflow-hidden w-full py-3.5 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all disabled:opacity-70"
                  style={{
                    background: status === 'sent'
                      ? 'linear-gradient(135deg, rgba(16,185,129,0.3), rgba(52,211,153,0.3))'
                      : 'linear-gradient(135deg, rgba(6,182,212,0.25), rgba(168,85,247,0.25))',
                    border: status === 'sent' ? '1px solid rgba(16,185,129,0.5)' : '1px solid rgba(6,182,212,0.4)',
                    color: status === 'sent' ? '#34d399' : '#22d3ee',
                  }}
                  whileHover={!status ? { scale: 1.02 } : {}}
                  whileTap={!status ? { scale: 0.98 } : {}}
                >
                  {status === 'sending' ? (
                    <>
                      <motion.div
                        className="w-4 h-4 rounded-full border-2 border-cyan-400/30 border-t-cyan-400"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      />
                      Sending...
                    </>
                  ) : status === 'sent' ? (
                    <>
                      <CheckCircle size={16} />
                      Message Sent! Check your email client.
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
