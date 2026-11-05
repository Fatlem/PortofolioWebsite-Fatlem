import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";
import { slug } from "../lib/slug";
import { catColor } from "../lib/colors";
import { card } from "./Section";

const enc = encodeURIComponent;

/** Urutan: gambar lokal -> mshots -> Microlink -> placeholder. */
function sources(p: Project): string[] {
  return [
    p.image ?? `/images/projects/${slug(p.title)}.jpg`,
    p.link && `https://s0.wp.com/mshots/v1/${enc(p.link)}?w=800&h=500`,
    p.link && `https://api.microlink.io/?url=${enc(p.link)}&screenshot=true&meta=false&embed=screenshot.url`,
  ].filter((s): s is string => Boolean(s));
}

export function ProjectCard({ project: p }: { project: Project }) {
  const list = sources(p);
  const [i, setI] = useState(0);
  const failed = i >= list.length;
  const color = catColor[p.category];
  useEffect(() => setI(0), [p.link, p.title]);

  return (
    <article className={`${card} flex h-full flex-col gap-3 overflow-hidden p-4 transition hover:-translate-y-1 hover:shadow-md`}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-[#EEF3FD]">
        {failed ? (
          <div className="grid h-full place-items-center text-center">
            <div><span className="block text-4xl font-extrabold" style={{ color }}>{p.title[0]}</span><span className="font-mono text-xs text-gray-500">{p.link ? new URL(p.link).hostname : "Local project"}</span></div>
          </div>
        ) : (
          <img key={list[i]} src={list[i]} alt={`Preview ${p.title}`} loading="lazy" onError={() => setI((n) => n + 1)} className="h-full w-full object-cover object-top" />
        )}
      </div>
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500"><i className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />{p.category}</p>
      <h3 className="-mt-1 text-lg font-bold">{p.title}</h3>
      <p className="flex-1 text-sm text-gray-600">{p.description}</p>
      <div className="flex flex-wrap gap-1.5">{p.tech.map((t) => <span key={t} className="rounded-full border border-line bg-cream px-2.5 py-1 text-xs text-gray-700">{t}</span>)}</div>
      {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full border border-ink/15 text-sm font-semibold transition hover:bg-ink hover:text-white">Live Preview <ExternalLink size={14} /></a>}
    </article>
  );
}
