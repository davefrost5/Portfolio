"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { ExperienceRole } from "@/content/content";

export function Timeline({ roles }: { roles: ExperienceRole[] }) {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="relative pl-8">
      <div aria-hidden className="absolute bottom-0 left-[7px] top-8 border-l border-dashed border-ink-muted/50" />
      <div aria-hidden className="absolute left-0 top-0 grid h-4 w-4 place-items-center text-ink">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="5" y="3" width="14" height="14" rx="3" /><path d="M8 21l2-4m6 4-2-4M5 10h14" /></svg>
      </div>
      <ol className="space-y-6 pt-8">
        {roles.map((r) => {
          const isOpen = open === r.company;
          return (
            <motion.li layout key={r.company} className="relative" onMouseEnter={() => setOpen(r.company)} onMouseLeave={() => setOpen(null)} onFocus={() => setOpen(r.company)}>
              <span aria-hidden className="absolute -left-[29px] top-2 h-2.5 w-2.5 rounded-full bg-ink ring-4 ring-surface" />
              <motion.div layout className={`-mx-4 rounded-2xl px-4 py-4 transition-colors ${isOpen ? "bg-surface-raised" : ""}`}>
                <motion.div layout="position" className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-2xl leading-tight text-ink">{r.title}</h3>
                  <span className="shrink-0 font-mono text-[11px] text-ink-muted">{r.period}</span>
                </motion.div>
                <motion.div layout="position" className="mt-2 flex items-center gap-2.5">
                  <span className="grid h-7 w-7 place-items-center rounded-md font-mono text-[10px] font-semibold text-white" style={{ background: r.logoColor }}>{r.logo}</span>
                  <span className="text-sm text-ink">{r.company}</span>
                </motion.div>
                <motion.p layout="position" className="mt-3 text-[15px] leading-relaxed text-ink-muted">{r.narrative}</motion.p>
                <motion.div layout="position" className="mt-3 flex flex-wrap gap-1.5">
                  {r.chips.map((c) => (
                    <span key={c} className="rounded-full border border-border bg-surface px-2.5 py-0.5 font-mono text-[11px] text-ink">{c}</span>
                  ))}
                </motion.div>
                <motion.p layout="position" className="mt-3 text-sm text-ink-muted"><span className="font-mono text-[11px] uppercase tracking-wider text-accent">Deployed with</span> · {r.deployedWith}</motion.p>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ type: "spring", stiffness: 300, damping: 32 }} className="overflow-hidden">
                      <div className="mt-4 border-t border-dashed border-border pt-4 text-sm">
                        <p className="font-mono text-[11px] text-ink-muted">{r.stack.join(" · ")}</p>
                        <p className="mt-2 font-serif text-lg italic leading-snug text-ink">“{r.story}”</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <motion.div layout="position" className="mt-3 flex justify-end">
                  <Link href={`/work/${r.projectSlugs[0]}`} className="inline-flex items-center gap-1.5 text-sm text-ink hover:text-accent">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 6h7l2 2h9v11H3z" /></svg>
                    View projects
                  </Link>
                </motion.div>
              </motion.div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
