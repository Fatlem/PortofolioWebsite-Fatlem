import { BadgeCheck, Briefcase, GraduationCap, MapPin } from "lucide-react";
import { about } from "../data/site";
import { Section, card } from "./Section";
import { SafeImg } from "./SafeImg";
import { g, tint } from "../lib/colors";

const icons = [Briefcase, GraduationCap, MapPin, BadgeCheck];
const words = ["DREAM", "CODE", "CREATE"];

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid items-start gap-8 md:grid-cols-2">
        <figure className={`${card} overflow-hidden flex flex-col justify-between h-full`}>
          <div className="aspect-[4/3.5] bg-[#EEF3FD] overflow-hidden">
            <SafeImg 
              src="/images/profile2.png" 
              alt="Faathir El Tasleem" 
              className="h-full w-full object-cover object-[center_68%]"
              fallback={
                <SafeImg 
                  src="/profile2.png" 
                  alt="Faathir El Tasleem" 
                  className="h-full w-full object-cover object-[center_68%]" 
                  fallback={null} 
                />
              } 
            />
          </div>
          <figcaption className="flex items-center justify-center gap-4 border-t border-line py-3.5 text-sm font-extrabold tracking-[.22em]">
            {words.map((w, i) => (
              <span key={w} className="flex items-center gap-4">
                {i > 0 && <i className="h-1.5 w-1.5 rounded-full bg-gray-300" />}
                <span style={{ color: g(i === 0 ? 0 : i === 1 ? 1 : 3) }}>{w}</span>
              </span>
            ))}
          </figcaption>
        </figure>

        <div className="flex flex-col gap-4">
          {/* Teks Deskripsi Dibungkus Kartu Putih (Card) */}
          <div className={`${card} p-5`}>
            <p className="leading-relaxed text-gray-600 text-justify text-sm sm:text-base">
              <strong className="font-semibold text-gray-900">Full Stack Web Developer</strong> di Kementerian Koordinator Bidang Pangan RI dan lulusan S1 Teknik Informatika Universitas Dian Nuswantoro. Berpengalaman membangun sistem web <em className="not-italic text-gray-800">end-to-end</em> menggunakan <strong className="font-semibold text-gray-800">React.js, TypeScript,</strong> dan <strong className="font-semibold text-gray-800">Laravel</strong>, serta peraih pendanaan nasional P2MW 2025 dari Kemendikbudristek RI. Memiliki sertifikasi kompetensi BNSP Web Developer dan berfokus merancang aplikasi modern yang responsif, intuitif, dan performan tinggi.
            </p>
          </div>
          
          {/* Grid 4 Kartu Info Utama */}
          <dl className="grid gap-3 sm:grid-cols-2">
            {about.map(([k, v], i) => {
              const Icon = icons[i];
              return (
                <div key={k} className={`${card} flex gap-3 p-4`}>
                  <span 
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl" 
                    style={{ background: tint(g(i)), color: g(i) }}
                  >
                    <Icon size={20} />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-gray-500">{k}</dt>
                    <dd className="mt-0.5 text-sm font-medium">{v}</dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </Section>
  );
}