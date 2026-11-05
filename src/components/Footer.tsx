import { ArrowUp, Home, LayoutGrid, Award, Mail } from "lucide-react";
import { Logo } from "./Header";
import { Socials } from "./Icons";

export function Footer() {
  return (
    <footer id="footer" className="border-t border-line py-8 text-sm text-gray-600">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row">
        {/* Kiri: Logo & Copyright */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
          <Logo />
          <span className="text-xs text-gray-500 sm:text-sm">
            © 2026 Fatlem. All rights reserved.
          </span>
        </div>

        {/* Kanan: Social Icons & Tombol Back to Top */}
        <div className="flex items-center gap-3">
          <Socials />
          <div className="h-4 w-px bg-gray-200" /> {/* Divider vertical */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-white text-gray-600 transition hover:bg-gray-50 active:scale-95 shadow-sm"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}

const tabs = [
  ["Home", "#home", Home],
  ["Projects", "#projects", LayoutGrid],
  ["Certificates", "#certificates", Award],
  ["Contact", "#contact", Mail],
] as const;

export function MobileNav() {
  return (
    <nav
      aria-label="Mobile"
      className="fixed inset-x-3 z-40 flex rounded-2xl border border-line bg-white/95 p-1.5 shadow-lg backdrop-blur md:hidden"
      style={{ bottom: "calc(12px + env(safe-area-inset-bottom, 0px))" }}
    >
      {tabs.map(([l, h, Icon]) => (
        <a
          key={h}
          href={h}
          className="flex min-h-12 flex-1 flex-col items-center justify-center gap-0.5 rounded-xl text-xs text-gray-600 active:bg-blue-50"
        >
          <Icon size={20} />
          {l}
        </a>
      ))}
    </nav>
  );
}