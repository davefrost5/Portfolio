import Image from "next/image";
import { site, work, linkedinPosts } from "@/content/content";
import { ProjectCard } from "@/components/ProjectCard";
import { LinkedInPostCard } from "@/components/LinkedInPostCard";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
      <section className="mb-16 grid gap-8 md:grid-cols-[auto_1fr] md:gap-12">
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border border-border md:h-32 md:w-32">
          <Image
            src={site.avatar}
            alt={site.name}
            fill
            className="object-cover object-[center_22%]"
            priority
            sizes="128px"
          />
        </div>
        <div className="prose-editorial">
          <h1 className="font-serif text-4xl leading-tight text-ink md:text-5xl">
            {site.name}
          </h1>
          <p className="mt-4 text-lg text-accent">{site.title}</p>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink-muted">{site.intro}</p>
          <p className="mt-2 text-sm text-ink-muted">{site.location}</p>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="mb-10 font-serif text-2xl text-ink">Selected Work</h2>
        <div className="flex flex-col gap-12">
          {work.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {linkedinPosts.length > 0 && (
        <section>
          <h2 className="mb-2 font-serif text-2xl text-ink">From LinkedIn</h2>
          <p className="mb-8 text-sm text-ink-muted">
            Recent posts — add more URLs in{" "}
            <code className="rounded bg-surface-raised px-1.5 py-0.5 text-xs text-accent">
              content/content.ts
            </code>
          </p>
          <div className="flex flex-col gap-4">
            {linkedinPosts.map((url) => (
              <LinkedInPostCard key={url} url={url} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
