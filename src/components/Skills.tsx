import { Atom, Braces, Code2, Database, FileCode, Figma, GitBranch, Layers, Moon, PenTool, Server, Triangle, Wind, Gamepad2, type LucideIcon } from "lucide-react";
import { skills, languages } from "../data/site";
import { Section, card } from "./Section";
import { g, tint } from "../lib/colors";

const icons: Record<string, LucideIcon> = {
  JavaScript: Braces, Lua: Moon, "HTML & CSS": Code2, "Node.js": Server, Laravel: Layers, "UI/UX Design": PenTool, "Git & GitHub": GitBranch,
  "React.js": Atom, PHP: FileCode, MySQL: Database, "Tailwind CSS": Wind, "Next.js": Triangle, "Roblox Studio": Gamepad2, Figma,
};

export function Skills() {
  return (
    <Section 
      id="skills" 
      title="My Skills" 
      aside={<p className="max-w-xs text-sm text-gray-600">Continuously learning and improving my skills to build better solutions.</p>}
    >
      {/* Grid Utama Tech Stack (7 Kolom) */}
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
        {skills.map((s, i) => {
          const Icon = icons[s] ?? Code2;
          return (
            <li key={s} className={`${card} flex flex-col items-start gap-3 p-4 text-sm font-medium transition hover:-translate-y-1`}>
              <span className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: tint(g(i)), color: g(i) }}>
                <Icon size={20} />
              </span>
              {s}
            </li>
          );
        })}
      </ul>

      {/* Grid Bahasa: 50% & 50% memenuhi tepat di bawah grid tanpa sisa gantung */}
      <ul className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {languages.map(([l, lv], i) => (
          <li 
            key={l} 
            className={`${card} flex flex-col justify-center border-l-4 p-4 text-sm transition hover:-translate-y-0.5`} 
            style={{ borderLeftColor: g(i * 3) }}
          >
            <span className="font-semibold text-gray-800">{l}</span>
            <span className="mt-0.5 text-xs text-gray-500">{lv}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
} 