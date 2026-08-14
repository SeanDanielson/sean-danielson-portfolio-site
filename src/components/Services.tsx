import Reveal from "./Reveal";

const SERVICES = [
  {
    n: "01",
    title: "Web & Software Development",
    body: "Full-stack web apps and product builds on the same stack behind production fintech software: React/Next.js, Node/NestJS, and .NET, deployed on Azure, GCP, or AWS. From a marketing site to a full application, built to last past launch.",
    icon: (
      <path
        d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z M4 9h16 M7.5 7h.01"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    n: "02",
    title: "Internal Tooling",
    body: "Custom internal tools and dashboards that replace manual, error-prone workflows — the same kind of work that took accounts-payable data entry at a public company from a manual process to an automated one.",
    icon: (
      <path
        d="M14.7 6.3a1 1 0 0 0 1.4 0l1.6-1.6a1 1 0 0 1 1.4 1.4l-1.6 1.6a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 1-1.4 1.4l-1.6-1.6a1 1 0 0 0-1.4 0L5.3 19.7a1 1 0 0 1-1.4-1.4L14.7 7.5a1 1 0 0 0 0-1.2Z M7 15l2 2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    n: "03",
    title: "AI & LLM Pipelines",
    body: "Document ingestion, retrieval-augmented assistants, and tool-calling AI features — built and evaluated the way production LLM systems need to be: benchmarked against real data, measured, and reliable.",
    icon: (
      <path
        d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-line bg-cream-deep px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
            04 · Services
          </p>
          <h2 className="mt-4 font-display text-4xl italic text-ink sm:text-5xl">
            What I build for clients
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Outside of full-time work, I take on select projects for small
            businesses and teams that need real software — not just a
            template.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.n}
              delay={i * 100}
              className="group rounded-2xl border border-line bg-cream p-8 transition-all hover:-translate-y-1 hover:shadow-[0_25px_45px_-25px_rgba(28,26,21,0.3)]"
            >
              <div className="flex items-center justify-between">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7 text-emerald"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  {service.icon}
                </svg>
                <span className="font-mono text-xs text-ink-faint">
                  {service.n}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl text-ink">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {service.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
