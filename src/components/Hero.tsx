import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-16 pb-24 md:px-10 md:pt-24 md:pb-32">
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-emerald-pale blur-3xl md:h-[560px] md:w-[560px]" />

      <div className="relative mx-auto grid max-w-6xl gap-14 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-10">
        <div>
          <Reveal>
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber" />
              Available for hire &amp; freelance projects
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-balance mt-6 font-display text-[2.6rem] leading-[1.08] tracking-tight text-ink sm:text-6xl md:text-6xl lg:text-7xl">
              I build software that ships — and{" "}
              <span className="italic text-emerald">AI features</span> that
              actually work.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-balance mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
              Senior full-stack engineer with 4+ years building and
              modernizing financial software — production LLM pipelines,
              critical-path systems, and full-stack rewrites. Promoted to
              Senior at Blackbaud in two years.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#experience"
                className="rounded-full bg-emerald px-7 py-3.5 text-center font-mono text-xs uppercase tracking-wider text-cream-on-dark transition-colors hover:bg-emerald-bright"
              >
                Hiring? View my experience
              </a>
              <a
                href="#contact"
                className="rounded-full border border-ink px-7 py-3.5 text-center font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-emerald hover:text-emerald"
              >
                Need something built? Let&rsquo;s talk
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150} className="relative mx-auto w-full max-w-sm md:mx-0">
          <div className="absolute -inset-3 -z-10 rotate-3 rounded-[2rem] border border-line bg-cream-deep" />
          <div className="overflow-hidden rounded-[1.75rem] border border-line bg-ink-dark shadow-[0_30px_60px_-25px_rgba(28,26,21,0.45)]">
            <Image
              src="/headshot.jpg"
              alt="Portrait of Sean Danielson"
              width={800}
              height={800}
              priority
              className="aspect-square w-full object-cover grayscale"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-line bg-cream px-4 py-3 shadow-[0_15px_30px_-15px_rgba(28,26,21,0.35)]">
            <p className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">
              Based in
            </p>
            <p className="font-display text-lg italic text-ink">
              Charlotte, NC
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
