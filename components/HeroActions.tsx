"use client";
import Link from "next/link";
import { useState } from "react";
import { contactEmails } from "@/content/content";
import { Toast } from "./CommandMenu";

export function HeroActions() {
  const [toast, setToast] = useState("");
  const base = "inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm transition active:scale-[0.97]";
  return (
    <div className="relative mt-8 flex flex-wrap gap-2">
      <Link href="/resume" className={`${base} bg-ink text-surface hover:opacity-90`}>Résumé</Link>
      <button className={`${base} border border-border bg-surface hover:bg-surface-raised`}
        onClick={() => { navigator.clipboard?.writeText(contactEmails.personal); setToast("Email copied to clipboard"); setTimeout(() => setToast(""), 1800); }}>
        Email <span className="font-mono text-[11px] text-ink-muted">copy</span>
      </button>
      <a href={`mailto:${contactEmails.personal}?subject=Let's%20set%20up%20a%20call`} className={`${base} border border-border bg-surface hover:bg-surface-raised`}>Book a call →</a>
      <Toast text={toast} />
    </div>
  );
}
