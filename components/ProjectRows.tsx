"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { WorkProject } from "@/content/content";
import { projectIcons } from "@/content/content";

const shot = (url: string) => `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
const tints = ["bg-peach", "bg-sky", "bg-mint", "bg-sun/40", "bg-surface-raised", "bg-sky"];
const tilts = ["hover:-rotate-1", "hover:rotate-1", "hover:-rotate-[0.6deg]", "hover:rotate-[0.8deg]"];

export function ProjectRows({ projects }: { projects: WorkProject[] }) {
  const [hover, setHover] = useState<string | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const active = projects.find((p) => p.slug === hover);
  return (
    <div className="relative" onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}>
      <ul className="grid gap-4 md:grid-cols-3">
        {projects.map((p, i) => {
          const flagship = p.slug === "discover-nil";
          return (
            <li key={p.slug} className={flagship ? "md:col-span-2 md:row-span-2" : ""} onMouseEnter={() => setHover(p.slug)} onMouseLeave={() => setHover(null)}>
              <Link href={`/work/${p.slug}`} className={`group flex h-full flex-col justify-between rounded-3xl border-2 border-ink p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0_var(--ink)] ${flagship ? "bg-blue text-white" : tints[i % tints.length]} ${tilts[i % tilts.length]}`}>
                <div className="flex items-start justify-between">
                  <span className={`hover-wiggle grid place-items-center rounded-2xl border-2 border-ink bg-surface text-ink ${flagship ? "h-14 w-14 text-2xl" : "h-11 w-11 text-lg"}`}>{projectIcons[p.slug] ?? "•"}</span>
                  <span className={`font-mono text-[11px] ${flagship ? "text-white/80" : "text-ink-muted"}`}>{p.period}</span>
                </div>
                <div className={flagship ? "mt-16" : "mt-8"}>
                  {flagship && <span className="mb-3 inline-block -rotate-2 rounded-full bg-sun px-3 py-1 font-mono text-[11px] font-bold text-ink">★ flagship case study</span>}
                  <h3 className={`font-bold tracking-tight ${flagship ? "text-4xl md:text-5xl" : "text-xl"}`}>{p.company}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${flagship ? "max-w-md text-base text-white/85" : "text-ink-muted line-clamp-2"}`}>{p.summary}</p>
                  {flagship && (
                    <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px]">
                      {p.stack.map((s) => <span key={s} className="rounded-full border border-white/40 px-2.5 py-0.5">{s}</span>)}
                    </div>
                  )}
                  <span className="mt-4 inline-block font-mono text-xs transition group-hover:translate-x-1">read →</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <AnimatePresence>
        {active?.url && (
          <motion.div key={active.slug} className="pointer-events-none fixed z-30 hidden w-72 rotate-2 overflow-hidden rounded-xl border-2 border-ink bg-surface shadow-[6px_6px_0_var(--ink)] md:block"
            style={{ left: pos.x + 24, top: pos.y - 90 }}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ type: "spring", stiffness: 350, damping: 26 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={shot(active.url)} alt="" className="aspect-[16/10] w-full object-cover object-top" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
