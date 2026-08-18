"use client";

import { useEffect, useState } from "react";
import GlassCard from "@/components/ui/GlassCard";

const LABELS = ["User", "Player", "Member"];

function randomEntry() {
  const amount = (Math.floor(Math.random() * 48) + 2) * 25;
  const suffix = Math.floor(1000 + Math.random() * 9000);
  const label = LABELS[Math.floor(Math.random() * LABELS.length)];
  return {
    id: `${Date.now()}-${suffix}`,
    text: `+₱${amount.toLocaleString()} earned by ${label} ****${suffix} via referral`,
  };
}

/** Sleek auto-scrolling feed of dummy live referral payouts. */
export default function LiveActivityFeed() {
  // Starts empty and fills in on the client only — Math.random() values
  // generated during useState's initializer would differ between the
  // server-rendered HTML and the client's hydration pass, causing a
  // hydration mismatch. Seeding via a timer callback (rather than
  // synchronously in the effect body) sidesteps that safely.
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const seed = setTimeout(() => {
      setEntries(Array.from({ length: 10 }, randomEntry));
    }, 0);
    const interval = setInterval(() => {
      setEntries((prev) => [randomEntry(), ...prev].slice(0, 10));
    }, 3000);
    return () => {
      clearTimeout(seed);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-sm font-semibold text-ink">Live Payouts</h2>
        <GlassCard className="relative h-72 overflow-hidden p-0">
          <div className="absolute inset-x-0 top-0 z-10 h-8 bg-linear-to-b from-surface to-transparent" />
          <div className="absolute inset-x-0 bottom-0 z-10 h-8 bg-linear-to-t from-surface to-transparent" />
          <ul className="animate-marquee-vertical flex flex-col gap-1 p-3">
            {[...entries, ...entries].map((e, i) => (
              <li
                key={`${e.id}-${i}`}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 text-xs transition-colors hover:bg-surface-hover"
              >
                <span className="text-ink">{e.text}</span>
                <span className="text-success">●</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </section>
  );
}
