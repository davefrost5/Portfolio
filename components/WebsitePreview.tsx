import Image from "next/image";
import Link from "next/link";
import {
  fetchMicrolink,
  getMicrolinkScreenshotUrl,
  hostnameFromUrl,
} from "@/lib/microlink";

type WebsitePreviewProps = {
  url: string;
  title: string;
  className?: string;
};

function HostnameFallback({ url, title }: { url: string; title: string }) {
  const hostname = hostnameFromUrl(url);
  return (
    <div className="flex h-full min-h-[200px] flex-col items-center justify-center gap-3 bg-surface-raised p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface font-serif text-lg text-accent">
        {hostname.charAt(0).toUpperCase()}
      </div>
      <p className="font-serif text-lg text-ink">{title}</p>
      <p className="text-sm text-ink-muted">{hostname}</p>
    </div>
  );
}

export async function WebsitePreview({ url, title, className = "" }: WebsitePreviewProps) {
  const meta = await fetchMicrolink(url);
  const screenshotUrl = getMicrolinkScreenshotUrl(url);
  const imageUrl = meta?.image?.url ?? screenshotUrl;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block overflow-hidden rounded-lg border border-border bg-surface-raised transition-colors hover:border-accent/40 ${className}`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`Preview of ${title}`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 600px"
            unoptimized
          />
        ) : (
          <HostnameFallback url={url} title={title} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="flex items-center justify-between border-t border-border px-4 py-3">
        <span className="text-sm text-ink-muted group-hover:text-ink transition-colors">
          {hostnameFromUrl(url)}
        </span>
        <span className="text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100">
          Visit →
        </span>
      </div>
    </Link>
  );
}
