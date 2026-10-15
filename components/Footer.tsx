import { site } from "@/content/content";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[680px] px-6 pb-32 pt-10 font-mono text-xs text-ink-muted">
      <div className="flex flex-col gap-3 border-t border-dashed border-border pt-6 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name} · Hoboken, NJ</p>
        <p className="flex gap-4">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">LinkedIn</a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">GitHub</a>
          <a href={`mailto:${site.email}`} className="hover:text-ink">Email</a>
          <span className="hidden sm:inline">press ⌘K</span>
        </p>
      </div>
    </footer>
  );
}
