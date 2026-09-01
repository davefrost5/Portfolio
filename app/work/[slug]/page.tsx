import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { work, getProjectBySlug } from "@/content/content";
import { WebsitePreview } from "@/components/WebsitePreview";
import { TextOnlyCard } from "@/components/TextOnlyCard";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return work.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.company} — ${project.role}`,
    description: project.summary,
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
      <Link
        href="/"
        className="mb-8 inline-block text-sm text-ink-muted hover:text-ink transition-colors"
      >
        ← Back to work
      </Link>

      <header className="mb-10">
        <h1 className="font-serif text-4xl leading-tight text-ink md:text-5xl">
          {project.company}
        </h1>
        <p className="mt-2 text-lg text-accent">{project.role}</p>
        <p className="mt-1 text-sm text-ink-muted">
          {project.period} · {project.location}
        </p>
      </header>

      <div className="mb-12">
        {project.url ? (
          <WebsitePreview url={project.url} title={project.company} className="max-w-3xl" />
        ) : (
          <TextOnlyCard
            title={project.company}
            subtitle={`${project.role} · ${project.period}`}
            description="No public website — internal/HIPAA-aware platform."
          />
        )}
      </div>

      <div className="prose-editorial max-w-3xl">
        <p className="text-lg leading-relaxed text-ink-muted">{project.summary}</p>

        <h2 className="mt-10 mb-4 font-serif text-2xl text-ink">Highlights</h2>
        <ul className="space-y-3">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-3 text-ink-muted leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>

        <h2 className="mt-10 mb-4 font-serif text-2xl text-ink">Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-3 py-1 text-sm text-ink-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.url || project.repoUrls || project.pressUrl) && (
          <div className="mt-10 flex flex-wrap gap-4 border-t border-border pt-8">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline underline-offset-4"
              >
                Visit site →
              </a>
            )}
            {project.repoUrls?.map((repo) => (
              <a
                key={repo}
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline underline-offset-4"
              >
                GitHub repo →
              </a>
            ))}
            {project.pressUrl && (
              <a
                href={project.pressUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline underline-offset-4"
              >
                Press coverage →
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
