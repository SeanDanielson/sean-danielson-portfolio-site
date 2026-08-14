import Reveal from "./Reveal";

const STATS = [
	{ value: "4+", label: "Years shipping financial software" },
	{ value: "3", label: "Years to Senior at Blackbaud" },
	{ value: "80–90%", label: "AI invoice extraction accuracy, in production" },
	{ value: "3.8", label: "GPA, B.S. Computer Science" },
];

export default function About() {
	return (
		<section
			id="about"
			className="border-t border-line px-6 py-24 md:px-10 md:py-32"
		>
			<div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.35fr_0.65fr] md:gap-16">
				<Reveal>
					<p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
						01 · About
					</p>
				</Reveal>

				<div>
					<Reveal>
						<p className="text-balance font-display text-3xl leading-snug text-ink sm:text-4xl">
							I spend my days on the hard middle of software: unstructured data,
							legacy systems, and the AI layer stitched between them, turned
							into things that hold up in production.
						</p>
					</Reveal>

					<Reveal delay={100}>
						<p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft">
							Recent work spans production LLM features (document ingestion, a
							retrieval-backed in-product assistant), a rewrite of the security
							service on the platform&rsquo;s critical path, and
							legacy-to-modern data migrations with zero customer-facing
							downtime. Depth in TypeScript/Node and C#/.NET, across Azure and
							GCP.
						</p>
					</Reveal>

					<Reveal delay={200}>
						<dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line pt-10 sm:grid-cols-4">
							{STATS.map((stat) => (
								<div key={stat.label}>
									<dt className="font-display text-3xl italic text-emerald sm:text-4xl">
										{stat.value}
									</dt>
									<dd className="mt-2 font-mono text-[11px] uppercase leading-snug tracking-wide text-ink-faint">
										{stat.label}
									</dd>
								</div>
							))}
						</dl>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
