import Image from "next/image";
import Link from "next/link";
import { fetchMicrolink, hostnameFromUrl } from "@/lib/microlink";

type LinkedInPostCardProps = {
  url: string;
};

export async function LinkedInPostCard({ url }: LinkedInPostCardProps) {
  const meta = await fetchMicrolink(url);
  const title = meta?.title ?? "LinkedIn Post";
  const description = meta?.description ?? "";
  const imageUrl = meta?.image?.url;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-surface-raised transition-colors hover:border-accent/40 sm:flex-row"
    >
      {imageUrl ? (
        <div className="relative aspect-[1.91/1] w-full shrink-0 sm:w-48 md:w-56">
          <Image
            src={imageUrl}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 224px"
            unoptimized
          />
        </div>
      ) : (
        <div className="flex w-full shrink-0 items-center justify-center bg-surface p-6 sm:w-48 md:w-56">
          <span className="font-serif text-2xl text-accent">in</span>
        </div>
      )}
      <div className="flex flex-1 flex-col justify-center gap-2 p-5">
        <p className="text-xs uppercase tracking-wider text-ink-muted">LinkedIn</p>
        <p className="font-serif text-lg leading-snug text-ink line-clamp-2 group-hover:text-accent transition-colors">
          {title}
        </p>
        {description && (
          <p className="text-sm text-ink-muted line-clamp-2">{description}</p>
        )}
        <p className="text-xs text-ink-muted">{hostnameFromUrl(url)}</p>
      </div>
    </Link>
  );
}
