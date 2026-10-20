import Link from "next/link";
import { Reveal } from "./Reveal";
import { HeroActions } from "./HeroActions";

function Window({ title, children, className = "", style }: { title: string; children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div style={style} className={`rounded-xl border-2 border-ink shadow-[6px_6px_0_var(--ink)] ${className}`}>
      <div className="flex items-center justify-between border-b-2 border-current px-3 py-1.5 font-mono text-[11px]">
        <span className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-accent" /><i className="h-2.5 w-2.5 rounded-full bg-sun" /><i className="h-2.5 w-2.5 rounded-full bg-blue" /></span>
        <span>{title}</span><span>✕</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-peach via-surface to-sky">
      <div aria-hidden className="dot-grid absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.25fr_1fr] md:pt-24">
        <div>
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-sun px-3 py-1 font-mono text-xs font-medium -rotate-2">👋 hi, I&apos;m Dave · Hoboken, NJ</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-[2.7rem] font-extrabold leading-[0.98] tracking-[-0.045em] text-ink md:text-[4.6rem]">
              David Frost builds and ships products{" "}
              <span className="font-serif font-normal italic tracking-normal">with customers</span>
              <span className="text-accent"> —</span> CTO at{" "}
              <Link href="/work/discover-nil" className="relative inline-block -rotate-1 rounded-xl bg-blue px-3 text-white transition hover:rotate-1">Discover NIL</Link>
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-8 flex flex-wrap items-center gap-2 font-mono text-xs text-ink-muted">
              <span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping rounded-full bg-green-500 opacity-60" /><span className="relative h-2 w-2 rounded-full bg-green-500" /></span>
              Currently: CTO @ Discover NIL · open to forward-deployed / solutions roles · ET
            </p>
          </Reveal>
          <Reveal delay={0.26}><HeroActions /></Reveal>
        </div>

        <Reveal delay={0.2} className="relative h-[380px] md:h-[440px]">
          <div aria-hidden className="absolute right-0 top-4 h-64 w-64 rounded-full bg-sun md:h-80 md:w-80" />
          <Window title="status.app" className="floaty absolute left-0 top-8 w-64 bg-surface" style={{ ["--r" as string]: "-4deg" }}>
            <p className="font-mono text-[11px] text-ink-muted">now_playing</p>
            <p className="mt-1 text-lg font-bold leading-tight">CTO &amp; Founding Engineer</p>
            <p className="text-sm text-ink-muted">Discover NIL · Nov 2025 →</p>
            <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-[10px]">
              <span className="rounded-full bg-peach px-2 py-0.5">React Native</span><span className="rounded-full bg-sky px-2 py-0.5">Next.js</span><span className="rounded-full bg-mint px-2 py-0.5">Python</span>
            </div>
          </Window>
          <Window title="terminal" className="absolute bottom-6 right-2 w-64 rotate-3 bg-ink text-surface">
            <pre className="font-mono text-[11px] leading-relaxed text-surface"><span className="text-sun">❯</span> whoami{"\n"}dave — eng who ships{"\n"}<span className="text-sun">❯</span> athletes --count{"\n"}235,000+{"\n"}<span className="text-sun">❯</span> press ⌘K_</pre>
          </Window>
          <span className="hover-wiggle absolute right-10 top-0 grid h-20 w-20 rotate-12 place-items-center rounded-full border-2 border-ink bg-accent text-center font-mono text-[10px] font-bold uppercase leading-tight text-white">open to<br />work ✦</span>
          <span className="absolute bottom-0 left-8 -rotate-6 text-5xl" aria-hidden>🏈</span>
          <span className="absolute left-1/2 top-2 rotate-12 text-4xl" aria-hidden>⚡</span>
        </Reveal>
      </div>
    </section>
  );
}
