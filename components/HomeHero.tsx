import Image from "next/image";
import { site } from "@/content/content";

export function HomeHero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-4 pt-10 md:pb-8 md:pt-14">
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,544px)_1fr] md:gap-12">
        <figure className="w-full max-w-[544px]">
          <Image
            src={site.hero}
            alt={`${site.name} demonstrating SYNC at the Stevens Innovation Expo`}
            width={544}
            height={359}
            priority
            unoptimized
            className="h-auto w-full border border-border"
          />
          <figcaption className="mt-3 text-xs uppercase tracking-[0.18em] text-ink-muted">
            Stevens Innovation Expo
          </figcaption>
        </figure>

        <div>
          <h1 className="font-serif text-4xl leading-tight tracking-wide text-ink md:text-6xl">
            {site.name}
          </h1>
          <p className="mt-3 text-lg tracking-wide text-accent md:text-xl">
            {site.title}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            {site.intro}
          </p>
          <p className="mt-2 text-sm text-ink-muted">{site.location}</p>
        </div>
      </div>
    </section>
  );
}
