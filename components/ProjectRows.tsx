"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { WorkProject } from "@/content/content";
import { projectIcons } from "@/content/content";

const shot = (url: string) => `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

export function ProjectRows({ projects }: { projects: WorkProject[] }) {
  const [hover, setHover] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const active = projects.find((p) => p.slug === hover);
  return (
    <div className="relative" onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}>
      <ul className="-mx-3">
        {projects.map((p) => (
          <li key={p.slug} onMouseEnter={() => setHover(p.slug)} onMouseLeave={() => setHover(null)}>
            <Link href={`/work/${p.slug}`} className="group flex items-center gap-4 rounded-xl px-3 py-3 transition hover:bg-surface-raised">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-surface text-base shadow-sm">{projectIcons[p.slug] ?? "•"}</span>
              <span className="min-w-0 flex-1">
                <span className="flex items-center gap-2 text-[15px] text-ink">
                  {p.company}
                  {p.slug === "discover-nil" && <span className="rounded-full bg-accent/15 px-2 py-0.5 font-mono text-[10px] text-accent">flagship</span>}
                </span>
                <span className="block truncate text-sm text-ink-muted">{p.summary}</span>
              </span>
              <span className="hidden font-mono text-[11px] text-ink-muted sm:block">{p.period}</span>
              <span className="text-ink-muted transition group-hover:translate-x-0.5 group-hover:text-accent">→</span>
            </Link>
          </li>
        ))}
      </ul>
      <AnimatePresence>
        {active && (
          <motion.div key={active.slug} className="pointer-events-none fixed z-30 hidden w-72 overflow-hidden rounded-xl border border-border bg-surface shadow-2xl md:block"
            style={{ left: pos.x + 24, top: pos.y - 90 }}
            initial={{ opacity: 0, scale: 0.92, filter: "blur(4px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}>
            {active.url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={shot(active.url)} alt="" className="aspect-[16/10] w-full object-cover object-top" />
            ) : (
              <div className="grid aspect-[16/10] place-items-center bg-surface-raised p-4 text-center font-serif text-2xl">{active.company}</div>
            )}
            <div className="border-t border-border px-3 py-2 font-mono text-[10px] text-ink-muted">{active.stack.slice(0, 4).join(" · ")}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
