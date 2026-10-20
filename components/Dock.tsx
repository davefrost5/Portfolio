"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const I = {
  home: <path d="M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z" />,
  exp: <path d="M4 7h16v13H4zM9 7V4h6v3M4 12h16" />,
  proj: <path d="M3 6h7l2 2h9v11H3z" />,
  about: <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm-8 9a8 8 0 0 1 16 0" />,
  moon: <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" />,
  sun: <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 1v2m0 18v2M4.2 4.2l1.4 1.4m12.8 12.8 1.4 1.4M1 12h2m18 0h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />,
  cmd: <path d="M9 6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3z" />,
};
const Icon = ({ d }: { d: React.ReactNode }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{d}</svg>
);

const items = [
  { href: "/", label: "Home", icon: I.home },
  { href: "/experience", label: "Experience", icon: I.exp },
  { href: "/#projects", label: "Projects", icon: I.proj },
  { href: "/about", label: "About", icon: I.about },
];

export function toggleTheme() {
  const dark = document.documentElement.classList.toggle("dark");
  try { localStorage.theme = dark ? "dark" : "light"; } catch {}
  window.dispatchEvent(new Event("themechange"));
}

export function Dock() {
  const path = usePathname();
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const sync = () => setDark(document.documentElement.classList.contains("dark"));
    sync();
    window.addEventListener("themechange", sync);
    return () => window.removeEventListener("themechange", sync);
  }, []);
  const btn = "group relative grid h-10 w-10 place-items-center rounded-full text-ink-muted transition hover:bg-surface-raised hover:text-ink";
  return (
    <nav aria-label="Primary" className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full border border-border bg-surface/80 px-2 py-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md">
        {items.map((it, i) => (
          <span key={it.href} className="flex items-center">
            {i > 0 && <span className="mx-0.5 h-4 w-px bg-border" />}
            <Link href={it.href} aria-label={it.label} className={`${btn} ${path === it.href ? "text-ink" : ""}`}>
              <Icon d={it.icon} />
              <span className="pointer-events-none absolute -top-9 rounded-md bg-ink px-2 py-1 font-mono text-[10px] text-surface opacity-0 transition group-hover:opacity-100">{it.label}</span>
              {path === it.href && <span className="absolute bottom-1 h-1 w-1 rounded-full bg-accent" />}
            </Link>
          </span>
        ))}
        <span className="mx-0.5 h-4 w-px bg-border" />
        <button aria-label="Open command menu" className={btn} onClick={() => window.dispatchEvent(new Event("open-cmdk"))}><Icon d={I.cmd} /></button>
        <button aria-label="Toggle theme" className={btn} onClick={toggleTheme}><Icon d={dark ? I.sun : I.moon} /></button>
      </div>
    </nav>
  );
}
