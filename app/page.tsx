import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { ProjectRows } from "@/components/ProjectRows";
import { Reveal } from "@/components/Reveal";
import { NumberTicker } from "@/components/NumberTicker";
import { Marquee } from "@/components/Marquee";
import { work, experience, linkedinPosts } from "@/content/content";
import { LinkedInPostCard } from "@/components/LinkedInPostCard";

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">{children}</p>
);

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Marquee className="-rotate-1 bg-sun" items={["CTO @ Discover NIL", "React Native", "Next.js", "Python + SQL", "EEG / BCI", "Stevens '25", "Hoboken, NJ", "ships with customers"]} />

      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal delay={0.3}>
          <section className="mt-20 grid gap-4 md:grid-cols-4 md:grid-rows-2">
            <div className="flex flex-col justify-between rounded-3xl bg-accent p-6 text-white md:col-span-2 md:row-span-2">
              <Label><span className="text-white/80">athletes on Discover NIL</span></Label>
              <p className="mt-10 text-7xl font-extrabold tracking-tighter md:text-8xl"><NumberTicker value={235} suffix="k" /></p>
              <p className="mt-2 text-sm text-white/85">across 25 sports, on a React Native app + Next.js portal</p>
            </div>
            <div className="rounded-3xl bg-sky p-6"><Label>university outreach</Label><p className="mt-4 text-5xl font-extrabold tracking-tighter"><NumberTicker value={600} suffix="+" /></p></div>
            <div className="rounded-3xl bg-mint p-6"><Label>EEG accuracy</Label><p className="mt-4 text-5xl font-extrabold tracking-tighter"><NumberTicker value={84} suffix="%" /></p></div>
            <div className="relative overflow-hidden rounded-3xl border-2 border-ink bg-surface p-6 md:col-span-2">
              <Label>award</Label>
              <p className="mt-3 text-3xl font-extrabold tracking-tight">L3Harris Innovation Award <span className="font-serif font-normal italic">winner</span></p>
              <span aria-hidden className="absolute -right-2 -top-2 rotate-12 text-6xl">🏆</span>
            </div>
          </section>
        </Reveal>

        <section className="mt-24 grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <Label>Today</Label>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight">Range, <span className="font-serif font-normal italic">shipped.</span></h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-ink-muted">
            <p>I lead engineering at <Link href="/work/discover-nil" className="link-underline text-ink">Discover NIL</Link>, a dual-platform NIL marketplace connecting athletes with universities and brands. Before that I built real-time energy storage UI at <Link href="/work/flexgen" className="link-underline text-ink">FlexGen</Link>, co-founded <Link href="/work/sync-prosthetics" className="link-underline text-ink">SYNC</Link> (an EEG-controlled hand exoskeleton), and shipped a HIPAA-aware patient portal at SmartPatient. Stevens Software Engineering, 2021–2025.</p>
            <p>Find me on <a href="https://github.com/davefrost5" target="_blank" rel="noopener noreferrer" className="link-underline text-ink">GitHub</a>, <a href="https://www.linkedin.com/in/davefrost525" target="_blank" rel="noopener noreferrer" className="link-underline text-ink">LinkedIn</a>, or press <kbd className="rounded-md border-2 border-ink bg-sun px-1.5 font-mono text-sm text-ink">⌘K</kbd>.</p>
          </div>
        </section>

        <section id="projects" className="mt-24 scroll-mt-10">
          <div className="mb-6 flex items-end justify-between"><h2 className="text-4xl font-extrabold tracking-tight">Projects</h2><Label>{work.length} things shipped</Label></div>
          <ProjectRows projects={work} />
        </section>
      </div>

      <section className="mt-24 bg-ink py-16 text-surface">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-4xl font-extrabold tracking-tight">Experience</h2>
            <Link href="/experience" className="rounded-full bg-sun px-4 py-2 font-mono text-xs font-bold text-ink transition hover:-rotate-2">the journey →</Link>
          </div>
          <ul className="grid gap-4 md:grid-cols-4">
            {experience.map((r) => (
              <li key={r.company} className="rounded-2xl border border-white/15 p-5 transition hover:-translate-y-1 hover:border-sun">
                <span className="grid h-9 w-9 place-items-center rounded-lg font-mono text-[11px] font-bold text-white" style={{ background: r.logoColor }}>{r.logo}</span>
                <p className="mt-4 text-lg font-bold">{r.company}</p>
                <p className="text-sm text-white/60">{r.title}</p>
                <p className="mt-3 font-mono text-[11px] text-sun">{r.period}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {linkedinPosts.length > 0 && (
        <section className="mx-auto mt-24 max-w-[1200px] px-6">
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight">From LinkedIn</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {linkedinPosts.map((url) => <LinkedInPostCard key={url} url={url} />)}
          </div>
        </section>
      )}
    </>
  );
}
