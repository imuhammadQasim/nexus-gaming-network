# Nexus Gaming Network

Gaming rewards & referral platform. Next.js (App Router) + Tailwind CSS v4, mobile-first, light/dark theme.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## Pages

- `/` — Home/referral dashboard: hero, feature grid, gift-code strip, referral stats, invite-link tool, popular guides, promotions carousel, game rules, live payouts feed.
- `/login` — phone + password, remember me.
- `/register` — phone (country code), WhatsApp OTP verify, password + confirm, invite code (auto-filled from `?ref=`).

## Theming

Single source of truth: [`src/app/globals.css`](src/app/globals.css). All colors are CSS variables mapped through `@theme inline`, defined once for light (`:root`) and once for dark (`[data-theme="dark"]`). Change `--brand` / `--brand-dim` to reskin the whole site instantly.

Theme toggle persists to `localStorage` (`src/lib/theme.js`) and is applied via an inline bootstrap script in `layout.js` before first paint (no flash).

> `--color-*` token names must not collide with Tailwind's built-in utility names (e.g. avoid `base`, which would hijack `text-base`'s font-size utility).

## Structure

```
src/
  app/                 routes (page.js, login/, register/, layout.js)
  components/
    ui/                Button, GlassCard, TextInput, PasswordInput, PhoneInput,
                        ThemeToggle, Logo, SectionHeading
    layout/             SiteHeader, SiteFooter
    home/               HeroSection, FeatureGrid, GiftCodeStrip, StatsGrid,
                        InviteTool, PopularGuides, PromotionsCarousel,
                        GameRules, LiveActivityFeed, HomeDashboard
    auth/               AuthShell, LoginForm, RegisterForm
    providers/          ToastProvider
  lib/
    api.js              mock BaaS layer — swap points for a real backend
    theme.js            light/dark store
    countryCodes.js     phone dial-code list
    siteContent.js      guides/promotions/game-rule copy + icons
```

## Environment variables

Copy `.env.example` to `.env` and fill in real values (`.env` is gitignored, `.env.example` is committed):

- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase project (Project Settings > API).
- `SUPABASE_SERVICE_ROLE_KEY` — server-only, never expose to the client.
- `NEXT_PUBLIC_SITE_URL` — SSR fallback used to build the referral link before `window.location` is available.

## Backend integration

Everything routes through `src/lib/api.js`. Replace the mock bodies with real calls (Supabase, Firebase, custom API) — components never change:

- `handleLogin({ phone, password, remember })`
- `handleRegister({ phone, password, inviteCode })`
- `sendWhatsAppOTP({ phone })` — expects your own gateway endpoint, not a direct WhatsApp client call
- `verifyWhatsAppOTP({ requestId, code })`
- `fetchDashboardStats()`

Icons: `lucide-react` throughout (no emoji, except country flags in the phone dial-code dropdown).
