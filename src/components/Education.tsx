import Reveal from "./Reveal";

export default function Education() {
  return (
    <section className="border-t border-line px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
              06 · Education
            </p>
            <h2 className="mt-3 font-display text-2xl italic text-ink sm:text-3xl">
              Clemson University
            </h2>
          </div>
          <p className="max-w-md font-mono text-xs uppercase leading-relaxed tracking-wider text-ink-soft">
            B.S. Computer Science · Minor in Cybersecurity
            <br />
            3.8 GPA · Aug 2018 – May 2022
          </p>
        </Reveal>
      </div>
    </section>
  );
}
