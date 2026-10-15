import type { Metadata } from "next";
import { experience, skillGroups, site } from "@/content/content";
import { Timeline } from "@/components/Timeline";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = { title: "Experience", description: "The journey so far — David Frost." };

function Device() {
  return (
    <div aria-hidden className="relative mx-auto h-32 w-40">
      <div className="absolute inset-x-2 top-0 h-24 rounded-[28px] border border-border bg-gradient-to-b from-surface to-surface-raised shadow-[inset_0_2px_0_rgba(255,255,255,.6),0_18px_40px_rgba(0,0,0,.10)]">
        <div className="absolute inset-3 rounded-[18px] border border-border bg-surface-raised p-3 font-mono text-[9px] leading-tight text-ink-muted">
          <span className="text-accent">❯</span> ship --with customers<br /><span className="text-green-600">✓</span> deployed
        </div>
      </div>
      <div className="absolute bottom-1 left-1/2 h-4 w-20 -translate-x-1/2 rounded-full border border-border bg-surface-raised" />
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-[680px] px-6 pt-16 md:pt-24">
      <Reveal className="text-center">
        <Device />
        <h1 className="mt-6 font-serif text-4xl text-ink md:text-5xl">The Journey So Far</h1>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-muted">
          From HIPAA-aware health software to energy storage and brain-computer interfaces — now CTO at Discover NIL. Building alongside the people who use it, at every stop.
        </p>
      </Reveal>
      <Reveal delay={0.15} className="mt-14"><Timeline roles={experience} /></Reveal>

      <section className="mt-20">
        <h2 className="font-serif text-3xl text-ink">Skills</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.name} className="rounded-2xl border border-border p-4">
              <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">{g.name}</p>
              <ul className="mt-3 space-y-1 text-sm text-ink">{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-16">
        <h2 className="font-serif text-3xl text-ink">Education</h2>
        <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-dashed border-border pt-4">
          <div>
            <p className="text-ink">Stevens Institute of Technology</p>
            <p className="text-sm text-ink-muted">B.E. Software Engineering · SYNC co-founder · L3Harris Innovation Award</p>
          </div>
          <span className="shrink-0 font-mono text-[11px] text-ink-muted">2021 – 2025</span>
        </div>
        <p className="sr-only">{site.location}</p>
      </section>
    </div>
  );
}
