import Link from "next/link";
import { navLinks, site } from "@/content/content";

type HeaderProps = {
  overlay?: boolean;
};

export function Header({ overlay = false }: HeaderProps) {
  return (
    <header
      className={
        overlay
          ? "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md"
          : "fixed inset-x-0 top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md"
      }
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="group">
          <span
            className={`font-serif text-xl tracking-wide transition-colors group-hover:text-accent ${
              overlay ? "text-ink" : "text-ink"
            }`}
          >
            {site.name}
          </span>
        </Link>
        <nav
          className={`flex items-center gap-6 text-sm transition-colors ${
            overlay ? "text-ink/80" : "text-ink-muted"
          }`}
        >
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
