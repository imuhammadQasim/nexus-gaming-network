import { Flame } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { GUIDES } from "@/lib/siteContent";

/** Grid of help/guide entry points. */
export default function PopularGuides() {
  return (
    <section className="px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Guides" EyebrowIcon={Flame} title="Popular Guides" />
        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {GUIDES.map(({ Icon, title, meta }) => (
            <GlassCard
              key={title}
              className="group cursor-pointer p-4 text-center transition-colors hover:border-brand"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/12 text-brand">
                <Icon className="h-4.5 w-4.5" />
              </span>
              <h3 className="mt-2.5 text-xs font-bold text-ink transition-colors group-hover:text-brand sm:text-sm">
                {title}
              </h3>
              <p className="mt-1 text-[11px] text-ink-faint">{meta}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
