import { ArrowUpRight } from "lucide-react";
import { socials } from "../data/site";
import { Section, card } from "./Section";
import { isExternal, socialIcons } from "./Icons";
import { g, tint } from "../lib/colors";

export function Contact() {
  return (
    <Section id="contact" title="Let's Work Together" aside={<p className="max-w-xs text-sm text-gray-600">Terbuka untuk proyek freelance dan kolaborasi. Hubungi lewat salah satu kanal di bawah.</p>}>
      <div className="grid gap-4 sm:grid-cols-2">
        {socials.map(({ name, href, label }, i) => {
          const Icon = socialIcons[name];
          return (
            <a key={name} href={href} {...(isExternal(href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`${card} group flex items-center gap-4 p-5 transition hover:-translate-y-1 hover:shadow-md`}>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl" style={{ background: tint(g(i)), color: g(i) === "#FBBC04" ? "#B45309" : g(i) }}><Icon size={22} /></span>
              <span className="min-w-0 flex-1"><b className="block">{name}</b><span className="block truncate text-sm text-gray-600">{label}</span></span>
              <ArrowUpRight size={18} className="text-gray-400 transition group-hover:text-ink" />
            </a>
          );
        })}
      </div>
    </Section>
  );
}
