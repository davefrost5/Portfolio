import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { ProjectRows } from "@/components/ProjectRows";
import { Reveal } from "@/components/Reveal";
import { NumberTicker } from "@/components/NumberTicker";
import { work, experience, linkedinPosts } from "@/content/content";
import { LinkedInPostCard } from "@/components/LinkedInPostCard";

const H = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-5 flex items-baseline justify-between font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">{children}</h2>
);

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <div className="mx-auto max-w-[680px] px-6">
        <Reveal delay={0.34}>
          <section className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
            {[
              { v: <NumberTicker value={235} suffix="k" />, l: "athletes on Discover NIL" },
              { v: <NumberTicker value={600} suffix="+" />, l: "university outreach" },
              { v: <NumberTicker value={84} suffix="%" />, l: "EEG accuracy" },
              { v: "L3Harris", l: "Innovation Award" },
            ].map((m) => (
              <div key={m.l} className="bg-surface p-4">
                <div className="font-serif text-3xl text-ink">{m.v}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ink-muted">{m.l}</div>
              </div>
            ))}
          </section>
        </Reveal>

        <Reveal delay={0.4}>
          <section className="mt-20">
            <H>Today</H>
            <p className="text-[15px] leading-relaxed text-ink-muted">
              I lead engineering at <Link href="/work/discover-nil" className="link-underline text-ink">Discover NIL</Link>, a dual-platform NIL marketplace connecting athletes with universities and brands. Before that I built real-time energy storage UI at <Link href="/work/flexgen" className="link-underline text-ink">FlexGen</Link>, co-founded <Link href="/work/sync-prosthetics" className="link-underline text-ink">SYNC</Link> (an EEG-controlled hand exoskeleton), and shipped a HIPAA-aware patient portal at SmartPatient. Stevens Software Engineering, 2021–2025.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
              Find me on <a href="https://github.com/davefrost5" target="_blank" rel="noopener noreferrer" className="link-underline text-ink">GitHub</a>, <a href="https://www.linkedin.com/in/davefrost525" target="_blank" rel="noopener noreferrer" className="link-underline text-ink">LinkedIn</a>, or press <kbd className="rounded border border-border px-1 font-mono text-xs">⌘K</kbd>.
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.46}>
          <section id="projects" className="mt-20 scroll-mt-10">
            <H>Projects <span className="normal-case tracking-normal">{work.length}</span></H>
            <ProjectRows projects={work} />
          </section>
        </Reveal>

        <section className="mt-20">
          <H>Experience <Link href="/experience" className="normal-case tracking-normal hover:text-accent">The journey →</Link></H>
          <ul className="divide-y divide-dashed divide-border">
            {experience.map((r) => (
              <li key={r.company} className="flex items-baseline justify-between gap-4 py-3 text-[15px]">
                <span><span className="text-ink">{r.company}</span> <span className="text-ink-muted">· {r.title}</span></span>
                <span className="shrink-0 font-mono text-[11px] text-ink-muted">{r.period}</span>
              </li>
            ))}
          </ul>
        </section>

        {linkedinPosts.length > 0 && (
          <section className="mt-20">
            <H>From LinkedIn</H>
            <div className="flex flex-col gap-3">
              {linkedinPosts.map((url) => <LinkedInPostCard key={url} url={url} />)}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
