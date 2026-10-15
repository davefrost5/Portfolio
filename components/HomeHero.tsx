import Link from "next/link";
import { Reveal } from "./Reveal";
import { HeroActions } from "./HeroActions";

export function HomeHero() {
  return (
    <section className="relative mx-auto max-w-[720px] overflow-hidden px-6 pt-24 md:pt-32">
      <div aria-hidden className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-accent/90 md:-right-10 md:top-16 md:h-[22rem] md:w-[22rem]" />
      <Reveal>
        <p className="relative mb-8 font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">David Frost · Hoboken, NJ</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h1 className="relative font-serif text-[2.6rem] leading-[1.02] tracking-tight text-ink md:text-[4.4rem]">
          David Frost builds
          <span className="block pl-[0.6em]">and ships products</span>
          <span className="block">with customers —</span>
          <span className="block pl-[0.6em]">
            <em className="italic">CTO at</em>{" "}
            <Link href="/work/discover-nil" className="underline decoration-2 underline-offset-[6px]">Discover NIL</Link>.
          </span>
        </h1>
      </Reveal>
      <Reveal delay={0.18}>
        <p className="relative mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-ink-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Currently: CTO @ Discover NIL · open to forward-deployed / solutions roles · Hoboken, NJ / ET
        </p>
      </Reveal>
      <Reveal delay={0.26}><HeroActions /></Reveal>
    </section>
  );
}
