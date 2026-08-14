import Reveal from "./Reveal";

const STACK = ["React", "NestJS", "TypeScript", "MySQL", "Google Cloud"];

export default function CaseStudy() {
  return (
    <section
      id="work"
      className="border-t border-line-dark bg-ink-dark px-6 py-24 text-cream-on-dark md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cream-on-dark-soft">
            05 · Work
          </p>
        </Reveal>

        <div className="mt-10 grid gap-12 md:grid-cols-[0.6fr_0.4fr] md:items-end md:gap-10">
          <Reveal delay={100}>
            <h2 className="text-balance font-display text-4xl italic leading-tight sm:text-5xl">
              Cloud Music Suite
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream-on-dark-soft">
              A music education platform I cofounded and own end-to-end, as
              the sole engineer across architecture, implementation, and
              deployment. I rewrote the original frontend and backend onto a
              modern stack and executed a full database migration off the
              legacy schema, without disrupting existing users.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line-dark px-4 py-1.5 font-mono text-xs text-cream-on-dark-soft"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="https://cloudmusicsuite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-cream-on-dark px-7 py-3.5 font-mono text-xs uppercase tracking-wider text-ink-dark transition-colors hover:bg-white"
            >
              Visit cloudmusicsuite.com
              <span aria-hidden="true">↗</span>
            </a>
          </Reveal>

          <Reveal
            delay={200}
            className="rounded-2xl border border-line-dark p-8"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-cream-on-dark-soft">
              Role
            </p>
            <p className="mt-2 font-display text-lg italic">
              Cofounder &amp; Lead Engineer
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-wider text-cream-on-dark-soft">
              Timeline
            </p>
            <p className="mt-2 font-display text-lg italic">
              April 2020 – Present
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-wider text-cream-on-dark-soft">
              Scope
            </p>
            <p className="mt-2 text-sm leading-relaxed text-cream-on-dark-soft">
              Full-stack rewrite, database migration, and ongoing ownership
              of every layer: product, infrastructure, and deployment.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
