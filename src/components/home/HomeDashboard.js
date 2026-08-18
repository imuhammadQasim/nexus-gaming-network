"use client";

import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import FeatureGrid from "./FeatureGrid";
import GiftCodeStrip from "./GiftCodeStrip";
import StatsGrid from "./StatsGrid";
import InviteTool from "./InviteTool";
import PopularGuides from "./PopularGuides";
import PromotionsCarousel from "./PromotionsCarousel";
import GameRules from "./GameRules";
import LiveActivityFeed from "./LiveActivityFeed";
import { fetchDashboardStats } from "@/lib/api";

/** Orchestrates the home/referral dashboard: fetches stats, then composes the page sections. */
export default function HomeDashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    let active = true;
    fetchDashboardStats().then((data) => {
      if (active) setStats(data);
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <>
      <HeroSection onlinePlayers={stats?.onlinePlayers ?? 18000} />
      <FeatureGrid />

      {stats ? (
        <>
          <GiftCodeStrip inviteCode={stats.referralCode} />
          <StatsGrid data={stats} />
          <InviteTool referralCode={stats.referralCode} />
        </>
      ) : (
        <section className="px-5 py-8 sm:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 animate-pulse rounded-2xl border border-border bg-surface" />
            ))}
          </div>
        </section>
      )}

      <PopularGuides />
      <PromotionsCarousel />
      <GameRules />
      <LiveActivityFeed />
    </>
  );
}
