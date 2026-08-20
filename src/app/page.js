import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import HomeDashboard from "@/components/home/HomeDashboard";

export const metadata = {
  title: "b-g678.com - Play, Invite, Earn",
  description: "The premium gaming rewards and referral platform.",
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">
        <HomeDashboard />
      </div>
      <SiteFooter />
    </main>
  );
}
