import { HomeHero } from "@/components/HomeHero";
import { work, linkedinPosts } from "@/content/content";
import { ProjectCard } from "@/components/ProjectCard";
import { LinkedInPostCard } from "@/components/LinkedInPostCard";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
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
    </>
  );
}
