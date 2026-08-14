"use client";

import { useState } from "react";

const LINKS = [
  { n: "01", label: "About", href: "#about" },
  { n: "02", label: "Skills", href: "#skills" },
  { n: "03", label: "Experience", href: "#experience" },
  { n: "04", label: "Services", href: "#services" },
  { n: "05", label: "Work", href: "#work" },
  { n: "06", label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="font-display text-xl italic tracking-tight text-ink"
        >
          Sean Danielson
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink-soft transition-colors hover:text-emerald"
            >
              <span className="text-[10px] text-ink-faint group-hover:text-amber">
                {link.n}
              </span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="/resume.pdf"
            download
            className="rounded-full border border-ink px-5 py-2 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:border-emerald hover:bg-emerald hover:text-cream-on-dark"
          >
            Resume ↓
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-6 pb-6 lg:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 py-2.5 font-mono text-sm uppercase tracking-wider text-ink-soft"
            >
              <span className="text-[10px] text-ink-faint">{link.n}</span>
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="mt-2 w-fit rounded-full border border-ink px-5 py-2 font-mono text-xs uppercase tracking-wider text-ink"
          >
            Resume ↓
          </a>
        </nav>
      )}
    </header>
  );
}
