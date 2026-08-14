"use client";

import { useEffect, useRef, type ReactNode } from "react";

type TagName = "div" | "article" | "section";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: TagComponent = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: TagName;
}) {
  const ref = useRef<HTMLDivElement & HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }

    const reveal = () => node.classList.add("is-visible");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(node);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    // Safety net: never let content stay invisible if the observer misfires.
    const fallback = window.setTimeout(reveal, 2000 + delay);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [delay]);

  const TagComponentEl = TagComponent as "div";

  return (
    <TagComponentEl
      ref={ref}
      className={`reveal ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </TagComponentEl>
  );
}
