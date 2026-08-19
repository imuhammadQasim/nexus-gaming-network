"use client";

import { useRef } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  PartyPopper,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROMOTIONS } from "@/lib/siteContent";

/** Horizontally scrollable promo rail with snap points and arrow controls. */
export default function PromotionsCarousel() {
  const railRef = useRef(null);

  const scrollByCard = (direction) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({
      left: direction * (rail.clientWidth * 0.8),
      behavior: "smooth",
    });
  };

  return (
    <section className="py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:px-8">
        <SectionHeading
          eyebrow="Promotions"
          EyebrowIcon={PartyPopper}
          title="Exclusive Offers"
          subtitle="Swipe through the current bonuses and reward campaigns."
        />
      </div>

      <div className="mx-auto mt-8 max-w-7xl">
        <div
          ref={railRef}
          className="snap-rail flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8"
        >
          {PROMOTIONS.map(({ Icon, title, body, reward, badge, tint }) => (
            <article
              key={title}
              className="group relative w-72 shrink-0 snap-start overflow-hidden rounded-3xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-brand sm:w-80"
            >
              {/* Gradient masthead with an oversized watermark icon. */}
              <div
                className={`relative h-40 overflow-hidden bg-linear-to-br ${tint}`}
              >
                <Icon
                  className="absolute -right-6 -bottom-8 h-40 w-40 text-white/15 transition-transform duration-500 group-hover:scale-110"
                  strokeWidth={1.25}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/45 to-transparent" />

                <span className="absolute left-4 top-4 rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-md">
                  {badge}
                </span>

                <span className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-md">
                  <Icon className="h-5 w-5" />
                </span>

                <div className="absolute inset-x-4 bottom-4">
                  <h3 className="text-lg font-extrabold leading-tight text-white">
                    {title}
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold text-white/85">
                    {reward}
                  </p>
                </div>
              </div>

              <div className="p-5">
                <p className="min-h-10 text-xs leading-relaxed text-ink-muted">
                  {body}
                </p>
                <button
                  type="button"
                  className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-on-brand transition-colors hover:bg-brand-dim"
                >
                  View Offer
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Arrow controls are pointer affordances; touch users just swipe the rail. */}
        <div className="mt-5 hidden justify-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Previous offers"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-ink-muted transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Next offers"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-ink-muted transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
