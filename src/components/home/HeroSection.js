"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Download, LogIn, UserPlus } from "lucide-react";
import Button from "@/components/ui/Button";

/** Top-of-page hero: value prop, live online-player count, and the primary APK download CTA. */
export default function HeroSection({ onlinePlayers }) {
  // Displayed count is derived from the prop plus a small random "wobble" that
  // drifts over time — this avoids ever syncing the prop into local state.
  const [wobble, setWobble] = useState(0);
  const count = Math.max(0, onlinePlayers + wobble);

  useEffect(() => {
    const interval = setInterval(() => {
      setWobble((w) => w + Math.floor(Math.random() * 7) - 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden px-5 pb-10 pt-8 sm:px-8 sm:pb-16 sm:pt-14">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand/12 blur-[100px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-ink-muted">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
          </span>
          {count.toLocaleString()} players online now
        </div>

        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
          Play More. Earn More. <span className="text-brand">Every Day.</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-ink-muted sm:text-base">
          Join the fastest-growing gaming rewards network. Download the app, invite friends, and
          earn real commission on every referral — instantly.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button variant="primary" className="w-full animate-pulse-glow sm:w-auto">
            <Download className="h-5 w-5" />
            Download App Now (APK)
          </Button>
          <Link href="/register" className="w-full sm:w-auto">
            <Button variant="secondary" className="w-full">
              <UserPlus className="h-4 w-4" />
              Register
            </Button>
          </Link>
          <Link href="/login" className="w-full sm:w-auto">
            <Button variant="ghost" className="w-full border border-border">
              <LogIn className="h-4 w-4" />
              Login
            </Button>
          </Link>
        </div>
        <p className="mt-3 text-xs text-ink-faint">Android APK · v2.4.1 · 48MB</p>
      </div>
    </section>
  );
}
