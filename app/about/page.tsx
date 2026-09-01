import type { Metadata } from "next";
import { about, site } from "@/content/content";

export const metadata: Metadata = {
  title: "About",
  description: about.paragraphs[0],
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-16 prose-editorial">
      <h1 className="font-serif text-4xl leading-tight text-ink md:text-5xl">
        {about.headline}
      </h1>

      <div className="mt-8 space-y-6 leading-relaxed text-ink-muted">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>

      <h2 className="mt-12 mb-4 font-serif text-2xl text-ink">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {about.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-border px-3 py-1 text-sm text-ink-muted"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-12 border-t border-border pt-8 text-sm text-ink-muted">
        <p>{site.education}</p>
        <p className="mt-2">{site.location}</p>
      </div>
    </div>
  );
}
