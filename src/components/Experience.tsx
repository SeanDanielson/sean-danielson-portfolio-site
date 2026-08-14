import Reveal from "./Reveal";

const ROLES = [
  {
    date: "May 2022 – Present",
    company: "Blackbaud",
    location: "Charleston, SC",
    title: "Senior Software Engineer",
    subtitle: "Promoted from Software Engineer, May 2024",
    bullets: [
      "Designed and shipped the platform's AI invoice ingestion pipeline: OCR extraction, LLM interpretation of unstructured invoices, and an AI-driven matching layer that reconciles extracted fields against existing records, replacing manual AP data entry.",
      "Benchmarked multiple LLMs against real customer invoice formats, driving extraction accuracy from ~40% in early prototypes to 80–90% in production.",
      "Contributed to Blackbaud's in-product AI assistant, using tool calling and retrieval over product knowledge bases to answer customer questions in context.",
      "Led the rewrite of the product's security service, translating permissions between legacy and modern platforms on the critical path of every authenticated request.",
      "Migrated core entities off legacy systems with zero customer-facing downtime; mentors engineers through internal walkthroughs and code review.",
      "Promoted to Senior in two years, recognized for end-to-end feature ownership and influence on platform design decisions.",
    ],
  },
  {
    date: "Apr 2020 – Present",
    company: "Cloud Music Suite",
    location: "Remote",
    title: "Cofounder & Lead Software Engineer",
    subtitle: "Music education platform",
    bullets: [
      "Cofounded and own the full stack of a music education platform, as the sole engineer across architecture, implementation, and deployment.",
      "Rewrote the frontend and backend onto a modern stack (React, NestJS, TypeScript, MySQL on Google Cloud) and executed a full database migration off the original schema.",
    ],
  },
  {
    date: "May 2019 – Aug 2019",
    company: "Collins Aerospace",
    location: "Cedar Rapids, IA",
    title: "Software Engineering Intern",
    subtitle: "Internal R&D, Cyber Systems team",
    bullets: [],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
            03 · Experience
          </p>
          <h2 className="mt-4 font-display text-4xl italic text-ink sm:text-5xl">
            Where I&rsquo;ve built
          </h2>
        </Reveal>

        <div className="relative mt-16 border-l border-line pl-8 md:pl-12">
          {ROLES.map((role, i) => (
            <Reveal
              key={role.company}
              delay={i * 100}
              as="article"
              className="relative pb-16 last:pb-0"
            >
              <span className="absolute top-1.5 -left-[41px] h-3 w-3 rounded-full border-2 border-emerald bg-cream md:-left-[49px]" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="font-display text-2xl text-ink sm:text-3xl">
                  {role.title} at{" "}
                  <span className="italic text-emerald">{role.company}</span>
                </h3>
                <p className="shrink-0 font-mono text-xs uppercase tracking-wider text-ink-faint">
                  {role.date}
                </p>
              </div>

              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ink-faint">
                {role.location} · {role.subtitle}
              </p>

              {role.bullets.length > 0 && (
                <ul className="mt-5 max-w-3xl space-y-3">
                  {role.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-[15px] leading-relaxed text-ink-soft"
                    >
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-amber" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
