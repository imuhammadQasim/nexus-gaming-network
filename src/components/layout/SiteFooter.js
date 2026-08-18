import Link from "next/link";
import Logo from "@/components/ui/Logo";

const LINK_COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "Download App", href: "#" },
      { label: "Referral Program", href: "#" },
      { label: "Promotions", href: "#" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Login", href: "/login" },
      { label: "Register", href: "/register" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Responsible Gaming", href: "#" },
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
              Gaming rewards, daily bonuses, and referral commissions. Play responsibly — 18+ only.
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
                    <Link
                      href={link.href}
                      className="text-xs text-ink-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 border-t border-border pt-6 text-xs leading-relaxed text-ink-faint">
          © {new Date().getFullYear()} b-g678.com. All rights reserved. This is an independent
          platform and is not affiliated with any third party.
        </p>
      </div>
    </footer>
  );
}
