import type { Metadata } from "next";
import { contact, site } from "@/content/content";

export const metadata: Metadata = {
  title: "Contact",
  description: contact.message,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-16 prose-editorial">
      <h1 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
        {contact.headline}
      </h1>

      <p className="mt-8 leading-relaxed text-ink-muted">{contact.message}</p>

      <div className="mt-12 space-y-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-ink-muted">Email</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-1 inline-block font-serif text-xl text-ink hover:text-accent transition-colors"
          >
            {site.email}
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-ink-muted">LinkedIn</p>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block font-serif text-xl text-ink hover:text-accent transition-colors"
          >
            linkedin.com/in/davefrost525
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-ink-muted">GitHub</p>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block font-serif text-xl text-ink hover:text-accent transition-colors"
          >
            github.com/davefrost5
          </a>
        </div>
      </div>
    </div>
  );
}
