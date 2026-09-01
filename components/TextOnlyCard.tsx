type TextOnlyCardProps = {
  title: string;
  subtitle?: string;
  description?: string;
};

export function TextOnlyCard({ title, subtitle, description }: TextOnlyCardProps) {
  return (
    <div className="flex min-h-[200px] flex-col justify-center rounded-lg border border-border bg-surface-raised p-8">
      <p className="font-serif text-xl text-ink">{title}</p>
      {subtitle && <p className="mt-1 text-sm text-ink-muted">{subtitle}</p>}
      {description && (
        <p className="mt-4 text-sm leading-relaxed text-ink-muted">{description}</p>
      )}
    </div>
  );
}
