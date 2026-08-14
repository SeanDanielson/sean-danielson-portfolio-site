import Reveal from "./Reveal";

const GROUPS = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "C#", "SQL"],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      ".NET",
      "REST APIs",
      "Event-Driven Architecture (Azure Service Bus)",
    ],
  },
  {
    label: "Frontend",
    items: ["React", "Angular", "HTML/CSS"],
  },
  {
    label: "Data & Cloud",
    items: [
      "SQL Server",
      "MySQL",
      "Cloud SQL",
      "CosmosDB",
      "Azure",
      "GCP",
      "AWS",
      "CI/CD",
    ],
  },
  {
    label: "AI",
    items: [
      "LLM Integration",
      "Model Evaluation & Selection",
      "Tool / Function Calling",
      "RAG",
      "OCR & Document Intelligence",
      "Claude Code",
      "GitHub Copilot",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-line bg-cream-deep px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              02 · Skills
            </p>
            <h2 className="mt-4 font-display text-4xl italic text-ink sm:text-5xl">
              What I work with
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {GROUPS.map((group, i) => (
            <Reveal
              key={group.label}
              delay={i * 80}
              className={group.label === "AI" ? "md:col-span-2" : ""}
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-emerald">
                {group.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-cream px-4 py-2 text-sm text-ink-soft transition-colors hover:border-emerald hover:text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
