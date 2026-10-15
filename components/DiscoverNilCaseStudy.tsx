import Link from "next/link";
import type { WorkProject } from "@/content/content";
import { Reveal } from "./Reveal";
import { NumberTicker } from "./NumberTicker";

const Section = ({ n, title, children, tint = "" }: { n: string; title: string; children: React.ReactNode; tint?: string }) => (
  <section className={`mt-6 grid gap-6 rounded-3xl p-6 md:grid-cols-[280px_1fr] md:p-10 ${tint || "border-2 border-ink"}`}>
    <div>
      <p className="inline-block -rotate-2 rounded-full bg-ink px-2.5 py-0.5 font-mono text-[11px] text-sun">{n}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink">{title}</h2>
    </div>
    <div className="text-base leading-relaxed text-ink-muted md:text-lg">{children}</div>
  </section>
);

const Box = ({ t, s, accent }: { t: string; s: string; accent?: boolean }) => (
  <div className={`rounded-xl border-2 border-ink px-3 py-3 text-center shadow-[3px_3px_0_var(--ink)] ${accent ? "bg-accent text-white" : "bg-surface"}`}>
    <p className="text-sm font-bold">{t}</p>
    <p className="font-mono text-[10px] opacity-70">{s}</p>
  </div>
);

export function DiscoverNilCaseStudy({ project }: { project: WorkProject }) {
  return (
    <article className="mx-auto max-w-[1200px] px-6 pt-10 md:pt-14">
      <Reveal className="relative overflow-hidden rounded-[2rem] border-2 border-ink bg-blue p-8 text-white md:p-14">
        <div aria-hidden className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-sun/90" />
        <span aria-hidden className="absolute right-10 top-10 rotate-12 text-6xl">🏈</span>
        <div className="relative">
        <Link href="/#projects" className="font-mono text-xs text-white/80 hover:text-white">← Projects</Link>
        <div className="mt-8 flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg font-mono text-xs font-semibold text-white border-2 border-white" style={{ background: "#E8590C" }}>DN</span>
          <span className="-rotate-2 rounded-full bg-sun px-3 py-1 font-mono text-[11px] font-bold text-ink">★ flagship case study</span>
        </div>
        <h1 className="mt-5 text-6xl font-extrabold leading-[0.95] tracking-tighter md:text-8xl">Discover <span className="font-serif font-normal italic tracking-normal">NIL</span></h1>
        <p className="mt-5 max-w-2xl text-xl leading-relaxed text-white/90">{project.summary}</p>
        <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/30 pt-5 font-mono text-[11px]">
          <div><dt className="text-white/60">Role</dt><dd className="mt-1 text-white">CTO & Founding Eng.</dd></div>
          <div><dt className="text-white/60">Timeline</dt><dd className="mt-1 text-white">Nov 2025 – Present</dd></div>
          <div><dt className="text-white/60">Where</dt><dd className="mt-1 text-white">Hoboken, NJ</dd></div>
        </dl>
        </div>
      </Reveal>

      <Section n="01" title="Problem" tint="bg-peach">
        <p>Name, Image, and Likeness (NIL) opened a market between college athletes, universities, and brands — but discovery and outreach were fragmented across social platforms, inboxes, and spreadsheets. Athletes needed a simple mobile home; universities and brands needed a portal to find, match, and engage athletes at scale.</p>
      </Section>

      <Section n="02" title="Customer context" tint="bg-sky">
        <ul className="space-y-2">
          <li><span className="text-ink">Athletes</span> — 235k+ across 25 sports, primarily on mobile.</li>
          <li><span className="text-ink">Universities</span> — athletic departments reached through 600+ outreach partnerships.</li>
          <li><span className="text-ink">Brands</span> — looking for the right athletes and measurable engagement.</li>
        </ul>
      </Section>

      <Section n="03" title="Architecture">
        <div className="rounded-2xl border border-border bg-surface-raised dot-grid p-6">
          <div className="grid grid-cols-2 gap-3">
            <Box t="Athlete app" s="React Native" />
            <Box t="University / brand portal" s="Next.js" />
          </div>
          <div className="my-2 text-center font-mono text-xs text-ink-muted">↓ TypeScript API ↓</div>
          <Box t="Matching & outreach analytics" s="SQL · Python pipelines" accent />
          <div className="my-2 text-center font-mono text-xs text-ink-muted">↕</div>
          <Box t="Social API integrations" s="athlete discovery & engagement" />
        </div>
      </Section>

      <Section n="04" title="What shipped" tint="bg-mint">
        <ul className="space-y-2.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{h}</li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => <span key={s} className="rounded-full border-2 border-ink bg-surface px-2.5 py-0.5 font-mono text-[11px] text-ink">{s}</span>)}
        </div>
      </Section>

      <Section n="05" title="Metrics" tint="bg-sun/50">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
          <div className="bg-surface p-5"><p className="text-6xl font-extrabold tracking-tighter text-ink"><NumberTicker value={235} suffix="k" /></p><p className="mt-1 font-mono text-[11px] text-ink-muted">athletes on the platform</p></div>
          <div className="bg-surface p-5"><p className="text-6xl font-extrabold tracking-tighter text-ink"><NumberTicker value={600} suffix="+" /></p><p className="mt-1 font-mono text-[11px] text-ink-muted">university outreach partnerships</p></div>
        </div>
      </Section>

      <div className="mt-10 flex flex-wrap gap-4 border-t border-dashed border-border pt-6 text-sm">
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="link-underline text-ink">discovernil.com ↗</a>
        <a href="mailto:dave@discovernil.com" className="link-underline text-ink">dave@discovernil.com</a>
        <Link href="/experience" className="link-underline text-ink">Experience →</Link>
      </div>
    </article>
  );
}
