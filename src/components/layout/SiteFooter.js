import Link from "next/link";
import Logo from "@/components/ui/Logo";
import {
  SIGNUP_URL,
  TELEGRAM_CHANNEL_URL,
  TELEGRAM_SUPPORT_URL,
} from "@/lib/siteContent";

const LINK_COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "Download App", href: SIGNUP_URL, external: true },
      { label: "Referral Program", href: "SIGNUP_URL", external: true },
      { label: "Promotions", href: "SIGNUP_URL", external: true },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Login", href: SIGNUP_URL, external: true },
      { label: "Register", href: SIGNUP_URL, external: true },
      { label: "Sign Up Now", href: SIGNUP_URL, external: true },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Telegram Channel", href: TELEGRAM_CHANNEL_URL, external: true },
      { label: "Customer Service", href: TELEGRAM_SUPPORT_URL, external: true },
      {
        label: "Responsible Gaming",
        href: TELEGRAM_SUPPORT_URL,
        external: true,
      },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2">
            <Logo href={null} />
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-ink-muted">
              Gaming rewards, daily bonuses, and referral commissions. Play
              responsibly — 18+ only.
            </p>
          </div>
          {LINK_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                {col.title}
              </h3>
              <ul className="mt-3 flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-ink-muted transition-colors hover:text-ink"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-xs text-ink-muted transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 border-t border-border pt-6 text-xs leading-relaxed text-ink-faint">
          © {new Date().getFullYear()} b-g678.com. All rights reserved. This is
          an independent platform and is not affiliated with any third party.
        </p>
      </div>
    </footer>
  );
}
