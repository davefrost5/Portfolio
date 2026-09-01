import Image from "next/image";
import { site } from "@/content/content";

export function HomeHero() {
  return (
    <section className="relative h-[85vh] min-h-[520px] max-h-[900px] w-full">
      <Image
        src={site.hero}
        alt={`${site.name} demonstrating SYNC at the Stevens Innovation Expo`}
        fill
        priority
        className="object-cover object-[center_35%]"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20"
      />
      <div className="relative flex h-full flex-col justify-end px-6 pb-14 pt-24 md:pb-20 md:pt-28">
        <div className="mx-auto w-full max-w-5xl">
          <h1 className="font-serif text-4xl leading-tight tracking-wide text-ink md:text-6xl lg:text-7xl">
            {site.name}
          </h1>
          <p className="mt-3 text-lg tracking-wide text-accent md:text-xl">
            {site.title}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/90 md:text-lg">
            {site.intro}
          </p>
          <p className="mt-2 text-sm text-ink-muted">{site.location}</p>
        </div>
      </div>
    </section>
  );
}
