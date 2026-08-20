import { Wallet, Users, TrendingUp } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

/** Three-up card grid summarizing the signed-in user's referral standing. */
export default function StatsGrid({ data }) {
  const stats = [
    {
      label: "Total Balance",
      value: `₹${data.totalBalance.toLocaleString()}`,
      Icon: Wallet,
    },
    {
      label: "Total Referrals",
      value: data.totalReferrals.toLocaleString(),
      Icon: Users,
    },
    {
      label: "Commission Earned Today",
      value: `₹${data.commissionToday.toLocaleString()}`,
      Icon: TrendingUp,
    },
  ];

  return (
    <section className="px-5 sm:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map(({ label, value, Icon }) => (
          <GlassCard key={label} className="p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                {label}
              </span>
              <Icon className="h-5 w-5 text-brand" />
            </div>
            <p className="mt-3 text-2xl font-bold text-ink">{value}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
