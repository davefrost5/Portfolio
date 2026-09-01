import Link from "next/link";
import { navLinks, site } from "@/content/content";

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="group">
          <span className="font-serif text-xl tracking-wide text-ink group-hover:text-accent transition-colors">
            {site.name}
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-ink-muted">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
