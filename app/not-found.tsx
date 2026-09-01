import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center prose-editorial">
      <h1 className="font-serif text-4xl text-ink">Page not found</h1>
      <p className="mt-4 text-ink-muted">That page doesn&apos;t exist.</p>
      <Link href="/" className="mt-8 inline-block text-accent hover:underline underline-offset-4">
        ← Back home
      </Link>
    </div>
  );
}
