import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";

/** Shared centered glass-card layout used by the Login and Register pages. */
export default function AuthShell({ title, subtitle, children, footerText, footerLinkText, footerHref }) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-10">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brand/10 blur-[110px]" />

      <div className="absolute right-5 top-5">
        <ThemeToggle />
      </div>

      <div className="relative w-full max-w-md">
        <div className="mb-8 text-center">
          <Logo size="md" />
        </div>

        <GlassCard className="p-6 sm:p-8">
          <h1 className="text-xl font-bold text-ink">{title}</h1>
          {subtitle && <p className="mt-1 text-sm text-ink-muted">{subtitle}</p>}
          <div className="mt-6">{children}</div>
        </GlassCard>

        {footerText && (
          <p className="mt-6 text-center text-sm text-ink-muted">
            {footerText}{" "}
            <Link href={footerHref} className="font-semibold text-brand hover:underline">
              {footerLinkText}
            </Link>
          </p>
        )}
      </div>
    </main>
  );
}
