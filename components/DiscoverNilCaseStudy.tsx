import Link from "next/link";
import type { WorkProject } from "@/content/content";
import { Reveal } from "./Reveal";
import { NumberTicker } from "./NumberTicker";

const Section = ({ n, title, children }: { n: string; title: string; children: React.ReactNode }) => (
  <section className="mt-16">
    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">{n}</p>
    <h2 className="mt-1 font-serif text-3xl text-ink">{title}</h2>
    <div className="mt-4 text-[15px] leading-relaxed text-ink-muted">{children}</div>
  </section>
);

const Box = ({ t, s, accent }: { t: string; s: string; accent?: boolean }) => (
  <div className={`rounded-xl border px-3 py-2.5 text-center ${accent ? "border-accent/50 bg-accent/10" : "border-border bg-surface"}`}>
    <p className="text-sm text-ink">{t}</p>
    <p className="font-mono text-[10px] text-ink-muted">{s}</p>
  </div>
);

export function DiscoverNilCaseStudy({ project }: { project: WorkProject }) {
  return (
    <article className="mx-auto max-w-[680px] px-6 pt-16 md:pt-24">
      <Reveal>
        <Link href="/#projects" className="font-mono text-xs text-ink-muted hover:text-ink">← Projects</Link>
        <div className="mt-8 flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg font-mono text-xs font-semibold text-white" style={{ background: "#E8590C" }}>DN</span>
          <span className="rounded-full bg-accent/15 px-2 py-0.5 font-mono text-[10px] text-accent">flagship case study</span>
        </div>
        <h1 className="mt-5 font-serif text-5xl leading-[1.02] text-ink md:text-6xl">Discover NIL</h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">{project.summary}</p>
        <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-dashed border-border py-4 font-mono text-[11px]">
          <div><dt className="text-ink-muted">Role</dt><dd className="mt-1 text-ink">CTO & Founding Eng.</dd></div>
          <div><dt className="text-ink-muted">Timeline</dt><dd className="mt-1 text-ink">Nov 2025 – Present</dd></div>
          <div><dt className="text-ink-muted">Where</dt><dd className="mt-1 text-ink">Hoboken, NJ</dd></div>
        </dl>
      </Reveal>

      <Section n="01" title="Problem">
        <p>Name, Image, and Likeness (NIL) opened a market between college athletes, universities, and brands — but discovery and outreach were fragmented across social platforms, inboxes, and spreadsheets. Athletes needed a simple mobile home; universities and brands needed a portal to find, match, and engage athletes at scale.</p>
      </Section>

      <Section n="02" title="Customer context">
        <ul className="space-y-2">
          <li><span className="text-ink">Athletes</span> — 235k+ across 25 sports, primarily on mobile.</li>
          <li><span className="text-ink">Universities</span> — athletic departments reached through 600+ outreach partnerships.</li>
          <li><span className="text-ink">Brands</span> — looking for the right athletes and measurable engagement.</li>
        </ul>
      </Section>

      <Section n="03" title="Architecture">
        <div className="rounded-2xl border border-border bg-surface-raised p-5">
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

      <Section n="04" title="What shipped">
        <ul className="space-y-2.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{h}</li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => <span key={s} className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-ink">{s}</span>)}
        </div>
      </Section>

      <Section n="05" title="Metrics">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
          <div className="bg-surface p-5"><p className="font-serif text-5xl text-ink"><NumberTicker value={235} suffix="k" /></p><p className="mt-1 font-mono text-[11px] text-ink-muted">athletes on the platform</p></div>
          <div className="bg-surface p-5"><p className="font-serif text-5xl text-ink"><NumberTicker value={600} suffix="+" /></p><p className="mt-1 font-mono text-[11px] text-ink-muted">university outreach partnerships</p></div>
        </div>
      </Section>

      <div className="mt-16 flex flex-wrap gap-4 border-t border-dashed border-border pt-6 text-sm">
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="link-underline text-ink">discovernil.com ↗</a>
        <a href="mailto:dave@discovernil.com" className="link-underline text-ink">dave@discovernil.com</a>
        <Link href="/experience" className="link-underline text-ink">Experience →</Link>
      </div>
    </article>
  );
}
