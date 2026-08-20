"use client";

import { useState } from "react";
import { Check, Copy, Download, Gamepad2, Gift, PiggyBank } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { useToast } from "@/components/providers/ToastProvider";
import { SIGNUP_URL } from "@/lib/siteContent";

/** Highlight strip: platform name, the current invite code, welcome bonus, and the APK CTA. */
export default function GiftCodeStrip({ inviteCode }) {
  const [copied, setCopied] = useState(false);
  const toast = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inviteCode);
      setCopied(true);
      toast.success("Invite code copied!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy the code — please copy it manually.");
    }
  };

  const tileClass =
    "rounded-xl border border-border bg-surface-2 p-4 text-center";
  const labelClass =
    "flex items-center justify-center gap-1.5 text-xs font-medium text-ink-muted";

  return (
    <section className="px-5 py-8 sm:px-8">
      <GlassCard className="mx-auto max-w-6xl p-5 sm:p-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          <div className={tileClass}>
            <p className={labelClass}>
              <Gamepad2 className="h-3.5 w-3.5" />
              Platform
            </p>
            <p className="mt-1.5 text-sm font-bold text-brand">b-g678.com</p>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="rounded-xl border border-brand bg-surface-2 p-4 text-center transition-colors hover:bg-surface"
          >
            <span className={labelClass}>
              <Gift className="h-3.5 w-3.5" />
              Invite Code
            </span>
            <span className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
              {inviteCode}
              {copied ? (
                <Check className="h-3.5 w-3.5" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </span>
          </button>

          <div className={tileClass}>
            <p className={labelClass}>
              <PiggyBank className="h-3.5 w-3.5" />
              Welcome Bonus
            </p>
            <p className="mt-1.5 text-sm font-bold text-brand">Up to ₹199</p>
          </div>

          <div className={tileClass}>
            <p className={labelClass}>
              <Download className="h-3.5 w-3.5" />
              Get the App
            </p>
            <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
              <Button
                variant="primary"
                className="mt-1.5 w-full px-3 py-1.5 text-xs"
              >
                Download
              </Button>
            </a>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
