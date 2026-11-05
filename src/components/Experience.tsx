import { experience } from "../data/experience";
import { Section, card } from "./Section";
import { g } from "../lib/colors";

export function Experience() {
  return (
    <Section id="experience" title="Experience & Press">
      <div className="relative mx-auto max-w-5xl py-4">
        {/* Garis Vertikal Timeline (Berada di tengah pada layar md ke atas) */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-line md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-8">
          {experience.map((e, i) => {
            const isEven = i % 2 === 0;
            const circleColor = g(i);
            const textColor = circleColor === "#FBBC04" ? "#B45309" : circleColor;

            return (
              <div
                key={i}
                className={`relative flex flex-col md:flex-row md:items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Titik Lingkaran di Garis Timeline */}
                <span
                  className="absolute left-4 top-5 z-10 h-4 w-4 -translate-x-1/2 rounded-full ring-4 ring-cream md:left-1/2"
                  style={{ background: circleColor }}
                />

                {/* Sisi Kosong (Untuk Menjaga Keseimbangan Grid Kiri/Kanan) */}
                <div className="hidden md:block md:w-1/2" />

                {/* Kartu Informasi (Card Putih di Kanan atau Kiri) */}
                <div
                  className={`ml-10 md:ml-0 md:w-1/2 ${
                    isEven ? "md:pr-10" : "md:pl-10"
                  }`}
                >
                  <div
                    className={`${card} p-5 transition hover:-translate-y-1 hover:shadow-md`}
                  >
                    <time
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: textColor }}
                    >
                      {e.when}
                    </time>
                    <h3 className="mt-1 text-base font-semibold text-gray-900">
                      {e.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">{e.note}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}