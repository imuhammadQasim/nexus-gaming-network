"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { useToast } from "@/components/providers/ToastProvider";

/** Referral link display + one-click copy, with toast feedback. */
export default function InviteTool({ referralCode }) {
  const [copied, setCopied] = useState(false);
  const toast = useToast();

  const referralLink =
    typeof window !== "undefined"
      ? `${window.location.origin}/register?ref=${referralCode}`
      : `${process.env.NEXT_PUBLIC_SITE_URL}/register?ref=${referralCode}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      toast.success("Referral link copied!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy the link — please copy it manually.");
    }
  };

  return (
    <section className="px-5 py-8 sm:px-8">
      <GlassCard className="mx-auto max-w-6xl p-5 sm:p-6">
        <h2 className="text-sm font-semibold text-ink">My Invite Link</h2>
        <p className="mt-1 text-xs text-ink-muted">
          Share this link — you earn commission on every friend who signs up and plays.
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <div className="flex-1 truncate rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink-muted">
            {referralLink}
          </div>
          <Button onClick={handleCopy} variant="primary" className="shrink-0">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied" : "Copy Link"}
          </Button>
        </div>
      </GlassCard>
    </section>
  );
}
