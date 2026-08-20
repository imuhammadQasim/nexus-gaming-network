import {
  ArrowDownWideNarrow,
  ArrowUpWideNarrow,
  BadgeCheck,
  CalendarCheck,
  ClipboardList,
  Crown,
  Gift,
  Hash,
  Megaphone,
  PiggyBank,
  Send,
  Smartphone,
  Sparkles,
  Trophy,
  Users,
  Wallet,
  Zap,
} from "lucide-react";

// Static marketing content for the home page. Kept out of the components so
// copy and icons can be edited (or swapped for a CMS fetch) without touching JSX.

export const SIGNUP_URL =
  "https://www.bg678lottery7.com/#/pages/login/register?invitationCode=8575750066";
export const TELEGRAM_CHANNEL_URL = "https://t.me/hjjjuit";
export const TELEGRAM_SUPPORT_URL = "https://t.me/Rina_BG678";

export const FEATURES = [
  {
    Icon: Gift,
    title: "Daily Gift Codes",
    body: "Fresh reward codes released every day — claim them before they expire.",
  },
  {
    Icon: PiggyBank,
    title: "Deposit Bonus",
    body: "New and returning members unlock bonus credit on qualifying deposits.",
  },
  {
    Icon: Users,
    title: "Referral Rewards",
    body: "Invite friends and earn ongoing commission from your team's activity.",
  },
  {
    Icon: Zap,
    title: "Instant Payouts",
    body: "Withdraw your winnings quickly, with transparent rules on every game.",
  },
];

export const GUIDES = [
  { Icon: Smartphone, title: "App Download Guide", meta: "Getting Started" },
  { Icon: Wallet, title: "Deposit Bonus Rules", meta: "Bonuses" },
  { Icon: Gift, title: "Weekly Reward Drops", meta: "Weekly" },
  { Icon: Users, title: "Invitation Bonus", meta: "Referrals" },
  { Icon: Trophy, title: "Newbie Event Rewards", meta: "Events" },
  { Icon: Crown, title: "VIP Level Perks", meta: "VIP" },
  { Icon: CalendarCheck, title: "Daily Login Streaks", meta: "Daily" },
  { Icon: ClipboardList, title: "Betting Task Guide", meta: "Tasks" },
];

export const PROMOTIONS = [
  {
    Icon: Send,
    title: "Join Our Channel",
    body: "Get gift codes and results the moment they drop.",
    reward: "Free codes",
    badge: "Popular",
    tint: "from-emerald-400 via-emerald-500 to-teal-700",
  },
  {
    Icon: Sparkles,
    title: "1-Minute Win Streak",
    body: "Stack consecutive wins for escalating streak rewards.",
    reward: "Up to 5x",
    badge: "Hot",
    tint: "from-amber-300 via-amber-500 to-orange-700",
  },
  {
    Icon: Megaphone,
    title: "Play More, Earn More",
    body: "Higher weekly volume unlocks a bigger rebate tier.",
    reward: "Tiered rebate",
    badge: "Weekly",
    tint: "from-sky-400 via-blue-500 to-indigo-700",
  },
  {
    Icon: Wallet,
    title: "Second Deposit Bonus",
    body: "An extra match bonus on your second qualifying deposit.",
    reward: "+50% match",
    badge: "Limited",
    tint: "from-rose-400 via-rose-500 to-pink-700",
  },
  {
    Icon: BadgeCheck,
    title: "Weekend Cashback",
    body: "Recover a share of weekend losses every Monday.",
    reward: "Up to 10%",
    badge: "Every week",
    tint: "from-violet-400 via-purple-500 to-fuchsia-700",
  },
];

// "Colour" round rules, mirroring the classic 1-minute lottery format.
export const COLOR_RULES = [
  { dot: "bg-emerald-500", label: "Green", body: "Wins on results 1, 3, 7 or 9." },
  { dot: "bg-rose-500", label: "Red", body: "Wins on results 2, 4, 6 or 8." },
  { dot: "bg-violet-500", label: "Violet", body: "Wins on results 0 or 5, at a higher multiplier." },
];

export const BET_RULES = [
  {
    Icon: Hash,
    label: "Number",
    body: "Pick a single digit — an exact match pays the top multiplier.",
  },
  { Icon: ArrowUpWideNarrow, label: "Big", body: "Covers results 5 through 9." },
  { Icon: ArrowDownWideNarrow, label: "Small", body: "Covers results 0 through 4." },
];
