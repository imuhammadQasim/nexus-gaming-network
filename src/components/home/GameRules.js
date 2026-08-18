import { BookOpen, Lightbulb } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { BET_RULES, COLOR_RULES } from "@/lib/siteContent";

/** Explains the 1-minute colour/number round format. */
export default function GameRules() {
  return (
    <section className="px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="How to Play"
          EyebrowIcon={BookOpen}
          title="Colour & Number Rounds"
          subtitle="Each round runs for one minute — most of it open for bets, with a short window for the result."
        />

        <GlassCard className="mt-6 flex items-start gap-3 border-l-4 border-l-brand p-4">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
          <p className="text-sm text-ink-muted">
            <span className="font-semibold text-ink">Tip:</span> a small service fee is deducted
            from each stake before your contract amount is calculated.
          </p>
        </GlassCard>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {COLOR_RULES.map((rule) => (
            <GlassCard key={rule.label} className="p-5">
              <div className="flex items-center gap-2">
                <span className={`h-3 w-3 rounded-full ${rule.dot}`} aria-hidden="true" />
                <h3 className="text-sm font-bold text-brand">{rule.label}</h3>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-ink-muted">{rule.body}</p>
            </GlassCard>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {BET_RULES.map(({ Icon, label, body }) => (
            <GlassCard key={label} className="p-5">
              <div className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-brand" />
                <h3 className="text-sm font-bold text-brand">{label}</h3>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-ink-muted">{body}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
