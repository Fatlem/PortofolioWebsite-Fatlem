const items = [
  { n: "google", size: 64, left: "5%", top: "16%", d: 18, delay: 0, mobile: true },
  { n: "react", size: 58, left: "90%", top: "10%", d: 22, delay: -4, mobile: true },
  { n: "laravel", size: 52, left: "93%", top: "48%", d: 20, delay: -8, mobile: false },
  { n: "nodejs", size: 60, left: "3%", top: "58%", d: 24, delay: -2, mobile: true },
  { n: "git", size: 48, left: "46%", top: "90%", d: 19, delay: -10, mobile: false },
  { n: "react", size: 40, left: "74%", top: "78%", d: 26, delay: -6, mobile: false },
  { n: "google", size: 44, left: "30%", top: "6%", d: 21, delay: -12, mobile: false },
  { n: "nodejs", size: 42, left: "62%", top: "36%", d: 25, delay: -9, mobile: false },
  { n: "laravel", size: 40, left: "16%", top: "82%", d: 23, delay: -5, mobile: true },
];

/** Logo teknologi melayang pelan di belakang konten. Dimatikan otomatis untuk prefers-reduced-motion. */
export function FloatingLogos() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {items.map((it, i) => (
        <img key={i} src={`/images/${it.n}.png`} alt="" width={it.size} height={it.size}
          className={`drift absolute object-contain opacity-40 ${it.mobile ? "" : "hidden md:block"}`}
          style={{ left: it.left, top: it.top, width: it.size, height: it.size, ["--d" as string]: `${it.d}s`, animationDelay: `${it.delay}s` }} />
      ))}
    </div>
  );
}
