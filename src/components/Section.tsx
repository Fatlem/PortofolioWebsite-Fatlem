import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { G } from "../lib/colors";

export const card = "rounded-2xl border border-line bg-white shadow-sm";

export function ColorBar({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`flex h-1.5 w-14 overflow-hidden rounded-full ${className}`}>{G.map((c) => <i key={c} className="flex-1" style={{ background: c }} />)}</span>;
}

export function Section({ id, title, aside, children }: { id: string; title: string; aside?: ReactNode; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-14">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.4 }}>
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div><ColorBar className="mb-3" /><h2 className="text-2xl font-bold tracking-tight">{title}</h2></div>
          {aside}
        </div>
        {children}
      </motion.div>
    </section>
  );
}
