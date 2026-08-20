import Link from "next/link";
import Logo from "@/components/ui/Logo";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-canvas/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Logo />
        <nav className="flex items-center gap-2 text-sm font-medium">
          <ThemeToggle />
          <Link
            href="https://www.bg678lottery7.com/#/pages/login/register?invitationCode=8575750066"
            target="_blank"
            className="rounded-lg px-3 py-2 text-ink-muted transition-colors hover:text-ink"
          >
            Login
          </Link>
          <Link
            href="https://www.bg678lottery7.com/#/pages/login/register?invitationCode=8575750066"
            target="_blank"
            className="rounded-lg bg-brand px-4 py-2 text-on-brand transition-colors hover:bg-brand-dim"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}
