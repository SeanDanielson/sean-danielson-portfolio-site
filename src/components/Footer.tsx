import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-line-dark bg-ink-dark px-6 py-24 text-cream-on-dark md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cream-on-dark-soft">
            05 · Contact
          </p>
          <h2 className="text-balance mt-5 max-w-2xl font-display text-4xl italic leading-tight sm:text-5xl md:text-6xl">
            Let&rsquo;s build something.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-cream-on-dark-soft">
            Open to full-time roles and select freelance projects, whether
            that&rsquo;s a recruiter reaching out or a business that needs
            software built.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <a
            href="mailto:seandanielsondev@gmail.com"
            className="text-balance mt-10 inline-block font-display text-2xl italic text-cream-on-dark underline decoration-line-dark decoration-1 underline-offset-8 transition-colors hover:decoration-amber sm:text-3xl"
          >
            seandanielsondev@gmail.com
          </a>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line-dark pt-8 font-mono text-xs uppercase tracking-wider text-cream-on-dark-soft">
            <a
              href="https://linkedin.com/in/sean-danielson"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-cream-on-dark"
            >
              LinkedIn ↗
            </a>
            <a
              href="tel:+19373086219"
              className="transition-colors hover:text-cream-on-dark"
            >
              (937) 308-6219
            </a>
            <a
              href="/resume.pdf"
              download
              className="transition-colors hover:text-cream-on-dark"
            >
              Download Resume ↓
            </a>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-col gap-2 font-mono text-[11px] uppercase tracking-wider text-cream-on-dark-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Sean Danielson · Charlotte, NC</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
