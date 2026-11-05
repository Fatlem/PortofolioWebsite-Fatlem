import { Download } from "lucide-react";
import { CV, nav } from "../data/site";
import { SafeImg } from "./SafeImg";

export function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2.5 text-lg font-bold tracking-tight">
      <SafeImg src="/logo.png" alt="" className="h-9 w-9 object-contain"
        fallback={<span className="grid h-9 w-9 place-items-center rounded-xl bg-[#4285F4] text-white">F</span>} />
      Fatlem
    </a>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-cream/90 backdrop-blur" style={{ paddingTop: "env(safe-area-inset-top)" }}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Logo />
        <nav aria-label="Primary" className="hidden gap-5 text-sm text-gray-600 md:flex">
          {nav.map(([l, h]) => <a key={h} href={h} className="py-2 transition hover:text-ink">{l}</a>)}
        </nav>
        <a href={CV.href} download={CV.filename} aria-label="Download CV"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 lg:px-5">
          <Download size={16} /><span className="hidden lg:inline">Download CV</span>
        </a>
      </div>
    </header>
  );
}
