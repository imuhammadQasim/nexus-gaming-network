import GlassCard from "@/components/ui/GlassCard";
import { FEATURES } from "@/lib/siteContent";

/** Four-up benefits grid directly under the hero. */
export default function FeatureGrid() {
  return (
    <section className="px-5 py-8 sm:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ Icon, title, body }) => (
          <GlassCard key={title} className="p-5 text-center">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand/12 text-brand">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-3 text-sm font-bold text-ink">{title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-ink-muted">{body}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
