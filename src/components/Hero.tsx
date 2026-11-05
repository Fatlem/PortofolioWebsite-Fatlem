import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Socials } from "./Icons";
import { SafeImg } from "./SafeImg";
import { ColorBar } from "./Section";
import { G } from "../lib/colors";

export function Hero() {
  return (
    <section id="home" className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-10 pt-10 md:grid-cols-[1.1fr_.9fr] md:pt-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-xl text-gray-500 md:text-2xl">Hi, I&apos;m</p>
        <h1 className="mt-1 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">Faathir El Tasleem</h1>
        <ColorBar className="mt-5 w-24" />
        <h2 className="mt-5 text-xl font-semibold">Full Stack Web Developer &amp; Game Developer</h2>
        <p className="mt-3 max-w-md text-gray-600">I build modern web applications and engaging experiences, from responsive websites to Roblox games.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a href="#projects" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#1A73E8] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5">View My Projects <ArrowRight size={16} /></a>
          <a href="#contact" className="inline-flex min-h-11 items-center rounded-full border border-ink/20 bg-white px-6 text-sm font-semibold transition hover:-translate-y-0.5">Contact Me</a>
        </div>
        <Socials className="mt-5" />
      </motion.div>
      <div className="relative mx-auto aspect-square w-full max-w-md">
        <div aria-hidden className="absolute left-[2%] top-[14%] h-[46%] w-[46%] rounded-full" style={{ background: G[2] }} />
        <div aria-hidden className="absolute right-[2%] top-[2%] h-[32%] w-[32%] rotate-12 rounded-3xl" style={{ background: G[1] }} />
        <div aria-hidden className="absolute bottom-[4%] left-0 h-[28%] w-[28%] -rotate-6 rounded-3xl" style={{ background: G[3] }} />
        <div className="absolute inset-x-[14%] bottom-0 top-[8%] overflow-hidden rounded-[2.5rem] border-4 border-white bg-[#E8F0FE] shadow-xl">
          <SafeImg src="/images/wisuda.png" alt="Faathir El Tasleem" className="h-full w-full object-cover object-top"
            fallback={<SafeImg src="/images/wisuda.png" alt="" className="m-auto h-full w-1/2 object-contain" fallback={null} />} />
        </div>
        <div className="absolute -right-1 bottom-[14%] -rotate-3 rounded-2xl border border-line bg-white px-4 py-3 text-sm font-semibold shadow-lg">
          <span className="mr-2 font-mono font-bold"><span style={{ color: G[1] }}>&lt;</span><span style={{ color: G[2] }}>/</span><span style={{ color: G[3] }}>&gt;</span></span>
          Let&apos;s Build<br />Something Great
        </div>
      </div>
    </section>
  );
}
