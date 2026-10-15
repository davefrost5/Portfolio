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
    <>
    <div className="bg-gradient-to-b from-sky via-surface to-surface">
    <div className="mx-auto grid max-w-[1200px] gap-12 px-6 pt-16 md:grid-cols-[360px_1fr] md:pt-24">
      <aside className="md:sticky md:top-12 md:self-start">
        <Reveal>
          <div className="w-fit -rotate-3"><Device /></div>
          <h1 className="mt-6 text-5xl font-extrabold leading-[0.95] tracking-tight text-ink md:text-6xl">The Journey <span className="font-serif font-normal italic">so far</span></h1>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            From HIPAA-aware health software to energy storage and brain-computer interfaces — now CTO at Discover NIL. Building alongside the people who use it, at every stop.
          </p>
          <p className="mt-4 inline-block rotate-2 rounded-full border-2 border-ink bg-sun px-3 py-1 font-mono text-[11px]">hover a role for the story ✦</p>
        </Reveal>
      </aside>
      <Reveal delay={0.15}><Timeline roles={experience} /></Reveal>
    </div>
    </div>
    <div className="mx-auto max-w-[1200px] px-6">
      <section className="mt-24 grid gap-4 md:grid-cols-4">
        <h2 className="text-4xl font-extrabold tracking-tight md:pt-2">Skills</h2>
        {skillGroups.map((g, i) => (
          <div key={g.name} className={`rounded-3xl p-6 ${["bg-peach", "bg-sky", "bg-mint"][i]}`}>
            <p className="font-mono text-[11px] uppercase tracking-wider text-ink-muted">{g.name}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5 text-sm text-ink">{g.items.map((s) => <li key={s} className="rounded-full border-2 border-ink bg-surface px-2.5 py-0.5">{s}</li>)}</ul>
          </div>
        ))}
      </section>
      <section className="mt-16 grid gap-4 md:grid-cols-4">
        <h2 className="text-4xl font-extrabold tracking-tight md:pt-2">Education</h2>
        <div className="relative flex items-baseline justify-between gap-4 rounded-3xl border-2 border-ink bg-surface p-6 md:col-span-3">
          <div>
            <p className="text-xl font-bold text-ink">Stevens Institute of Technology</p>
            <p className="text-sm text-ink-muted">B.E. Software Engineering · SYNC co-founder · L3Harris Innovation Award</p>
          </div>
          <span className="shrink-0 font-mono text-[11px] text-ink-muted">2021 – 2025</span>
          <span aria-hidden className="absolute -right-3 -top-4 rotate-12 text-4xl">🎓</span>
        </div>
        <p className="sr-only">{site.location}</p>
      </section>
    </div>
    </>
  );
}
