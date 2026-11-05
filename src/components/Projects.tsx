import { useState } from "react";
import { categories, projects } from "../data/projects";
import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [all, setAll] = useState(false);
  const list = projects.filter((p) => cat === "All" || p.category === cat);
  const shown = cat === "All" && !all ? list.slice(0, 6) : list;
  return (
    <Section id="projects" title="My Projects" aside={cat === "All" && <button onClick={() => setAll(!all)} className="text-sm font-semibold underline-offset-4 hover:underline">{all ? "Show fewer ←" : "View All Projects →"}</button>}>
      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {categories.map((c) => (
          <button key={c} aria-pressed={c === cat} onClick={() => setCat(c)}
            className={`min-h-10 rounded-full border px-4 text-sm font-medium transition ${c === cat ? "border-ink bg-ink text-white" : "border-line bg-white text-gray-600 hover:border-ink/40"}`}>{c}</button>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{shown.map((p) => <ProjectCard key={p.title} project={p} />)}</div>
    </Section>
  );
}
