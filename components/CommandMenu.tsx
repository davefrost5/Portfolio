"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { site, contactEmails, work } from "@/content/content";
import { toggleTheme } from "./Dock";

type Cmd = { label: string; hint: string; run: () => void };

export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);
  const [toast, setToast] = useState("");
  const input = useRef<HTMLInputElement>(null);

  const copy = (t: string) => { navigator.clipboard?.writeText(t); setToast(`Copied ${t}`); setTimeout(() => setToast(""), 1800); };
  const cmds: Cmd[] = useMemo(() => [
    { label: "Home", hint: "page", run: () => router.push("/") },
    { label: "Experience", hint: "page", run: () => router.push("/experience") },
    { label: "Discover NIL case study", hint: "flagship", run: () => router.push("/work/discover-nil") },
    ...work.filter((w) => w.slug !== "discover-nil").map((w) => ({ label: w.company, hint: "project", run: () => router.push(`/work/${w.slug}`) })),
    { label: "Résumé", hint: "page", run: () => router.push("/resume") },
    { label: "Copy email", hint: contactEmails.personal, run: () => copy(contactEmails.personal) },
    { label: "Copy work email", hint: contactEmails.work, run: () => copy(contactEmails.work) },
    { label: "GitHub", hint: "↗", run: () => window.open(site.github, "_blank") },
    { label: "LinkedIn", hint: "↗", run: () => window.open(site.linkedin, "_blank") },
    { label: "Toggle theme", hint: "light / dark", run: toggleTheme },
    { label: "sudo hire dave", hint: "easter egg", run: () => setToast("Permission granted. Opening mail…") },
  ], [router]);
  const list = cmds.filter((c) => c.label.toLowerCase().includes(q.toLowerCase()));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setOpen((o) => !o); }
      if (e.key === "Escape") setOpen(false);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-cmdk", onOpen);
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("open-cmdk", onOpen); };
  }, []);
  useEffect(() => { if (open) { setQ(""); setIdx(0); setTimeout(() => input.current?.focus(), 10); } }, [open]);

  const run = (c?: Cmd) => { if (!c) return; setOpen(false); c.run(); if (c.label === "sudo hire dave") setTimeout(() => (window.location.href = `mailto:${contactEmails.personal}`), 600); };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-50 flex items-start justify-center bg-black/20 px-4 pt-[18vh] backdrop-blur-[2px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
            <motion.div role="dialog" aria-label="Command menu" onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96, y: -8 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="w-full max-w-md overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
              <div className="flex items-center gap-2 border-b border-border px-4">
                <span className="font-mono text-xs text-accent">❯</span>
                <input ref={input} value={q} onChange={(e) => { setQ(e.target.value); setIdx(0); }}
                  onKeyDown={(e) => { if (e.key === "ArrowDown") { e.preventDefault(); setIdx((i) => Math.min(i + 1, list.length - 1)); } if (e.key === "ArrowUp") { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)); } if (e.key === "Enter") run(list[idx]); }}
                  placeholder="Type a command or search…" className="h-12 flex-1 bg-transparent font-mono text-sm outline-none placeholder:text-ink-muted" />
                <kbd className="font-mono text-[10px] text-ink-muted">esc</kbd>
              </div>
              <ul className="max-h-80 overflow-auto p-2">
                {list.map((c, i) => (
                  <li key={c.label}>
                    <button onMouseEnter={() => setIdx(i)} onClick={() => run(c)} className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm ${i === idx ? "bg-surface-raised text-ink" : "text-ink-muted"}`}>
                      <span>{c.label}</span><span className="font-mono text-[11px] text-ink-muted">{c.hint}</span>
                    </button>
                  </li>
                ))}
                {list.length === 0 && <li className="px-3 py-6 text-center font-mono text-xs text-ink-muted">command not found: {q}</li>}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Toast text={toast} />
    </>
  );
}

export function Toast({ text }: { text: string }) {
  return (
    <AnimatePresence>
      {text && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
          className="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 rounded-full bg-ink px-4 py-2 font-mono text-xs text-surface shadow-lg">{text}</motion.div>
      )}
    </AnimatePresence>
  );
}
