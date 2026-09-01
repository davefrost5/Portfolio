import Link from "next/link";
import type { WorkProject } from "@/content/content";
import { WebsitePreview } from "./WebsitePreview";
import { TextOnlyCard } from "./TextOnlyCard";

type ProjectCardProps = {
  project: WorkProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="grid gap-6 border-b border-border pb-12 last:border-b-0 last:pb-0 md:grid-cols-2 md:gap-10">
      <div className="flex flex-col justify-center">
        <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <Link href={`/work/${project.slug}`}>
            <h2 className="font-serif text-2xl text-ink hover:text-accent transition-colors">
              {project.company}
            </h2>
          </Link>
          <span className="text-sm text-ink-muted">{project.period}</span>
        </div>
        <p className="mb-1 text-sm font-medium text-accent">{project.role}</p>
        <p className="mb-4 text-sm text-ink-muted">{project.location}</p>
        <p className="mb-4 leading-relaxed text-ink-muted">{project.summary}</p>
        <Link
          href={`/work/${project.slug}`}
          className="text-sm text-accent hover:underline underline-offset-4"
        >
          Read more →
        </Link>
      </div>
      <div>
        {project.url ? (
          <WebsitePreview url={project.url} title={project.company} />
        ) : (
          <TextOnlyCard
            title={project.company}
            subtitle={`${project.role} · ${project.period}`}
            description={project.summary}
          />
        )}
      </div>
    </article>
  );
}
