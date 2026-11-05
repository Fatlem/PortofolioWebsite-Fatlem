import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { certificates, type Cert } from "../data/certificates";
import { Section, card } from "./Section";
import { SafeImg } from "./SafeImg";
import { g } from "../lib/colors";

export function Certificates() {
  const [sel, setSel] = useState<Cert | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSel(null);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);
  return (
    <Section id="certificates" title="Certifications & Credentials">
      <div className="grid gap-4 md:grid-cols-2">
        {certificates.map((c, i) => (
          <button key={c.image} onClick={() => setSel(c)} style={{ borderLeftColor: g(i), borderLeftWidth: 4 }}
            className={`${card} flex items-center gap-4 p-4 text-left transition hover:-translate-y-0.5`}>
            <SafeImg src={c.image} alt="" className="aspect-[4/3] w-24 shrink-0 rounded-lg border border-line object-cover" fallback={null} />
            <span><b className="block text-sm">{c.title}</b><span className="text-sm text-gray-600">{[c.issuer, c.date].filter(Boolean).join(" · ")}</span></span>
          </button>
        ))}
      </div>
      {sel && (
        <div role="dialog" aria-modal="true" aria-label={sel.title} onClick={() => setSel(null)} className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4">
          <div onClick={(e) => e.stopPropagation()} className="max-h-[90vh] w-full max-w-xl overflow-auto rounded-2xl bg-white p-6">
            <div className="flex items-start justify-between gap-3"><h3 className="font-bold">{sel.title}</h3><button onClick={() => setSel(null)} aria-label="Close" className="grid h-9 w-9 place-items-center rounded-lg hover:bg-gray-100"><X size={18} /></button></div>
            <p className="mb-4 text-sm text-gray-600">{[sel.issuer, sel.date].filter(Boolean).join(" · ")}</p>
            <SafeImg src={sel.image} alt={sel.title} className="w-full rounded-xl border border-line" fallback={<div className="grid aspect-[16/10] place-items-center rounded-xl bg-cream p-4 text-center text-sm text-gray-500">Certificate image not added yet</div>} />
            {sel.description && <p className="mt-4 text-sm text-gray-600">{sel.description}</p>}
          </div>
        </div>
      )}
    </Section>
  );
}
