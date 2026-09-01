import { site } from "@/content/content";

export function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.location}
        </p>
        <div className="flex gap-4">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${site.email}`}
            className="hover:text-ink transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
