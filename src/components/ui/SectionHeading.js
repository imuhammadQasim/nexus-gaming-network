/** Centered section title with an optional pill eyebrow and subtitle. */
export default function SectionHeading({ eyebrow, EyebrowIcon, title, subtitle }) {
  return (
    <div className="text-center">
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-on-brand">
          {EyebrowIcon && <EyebrowIcon className="h-3.5 w-3.5" />}
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">{title}</h2>
      {subtitle && <p className="mx-auto mt-2 max-w-lg text-sm text-ink-muted">{subtitle}</p>}
    </div>
  );
}
