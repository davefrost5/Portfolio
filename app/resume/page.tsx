import type { Metadata } from "next";
import { resume, site } from "@/content/content";

export const metadata: Metadata = {
  title: "Resume",
  description: resume.downloadNote,
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-16 prose-editorial">
      <h1 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
        {resume.headline}
      </h1>

      <p className="mt-4 text-sm text-ink-muted">{resume.downloadNote}</p>

      <div className="mt-10 border-t border-border pt-8">
        <h2 className="font-serif text-xl text-ink">{site.name}</h2>
        <p className="mt-1 text-sm text-ink-muted">{site.title}</p>
        <p className="mt-1 text-sm text-ink-muted">{site.location}</p>
        <p className="mt-1 text-sm">
          <a href={`mailto:${site.email}`} className="text-accent hover:underline underline-offset-4">
            {site.email}
          </a>
          {" · "}
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">
            LinkedIn
          </a>
          {" · "}
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">
            GitHub
          </a>
        </p>
      </div>

      <div className="mt-10 space-y-10">
        {resume.sections.map((section) => (
          <section key={section.title}>
            <h3 className="font-serif text-lg text-ink">{section.title}</h3>
            <p className="mt-1 text-sm text-ink-muted">
              {section.period} · {section.location}
            </p>
            <ul className="mt-3 space-y-2">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm text-ink-muted leading-relaxed">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {bullet}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-10 border-t border-border pt-8">
        <h3 className="font-serif text-lg text-ink">Education</h3>
        <p className="mt-2 text-sm text-ink-muted">{resume.education}</p>
      </div>
    </div>
  );
}
