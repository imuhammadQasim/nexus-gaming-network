import { Suspense } from "react";
import AuthShell from "@/components/auth/AuthShell";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata = {
  title: "Register — b-g678.com",
  description: "Create your b-g678.com account and start earning referral commissions.",
};

export default function RegisterPage() {
  return (
    <AuthShell
      title="Create Account"
      subtitle="Join in seconds and start earning."
      footerText="Already have an account?"
      footerLinkText="Log in"
      footerHref="/login"
    >
      {/* useSearchParams (for ?ref=) requires a Suspense boundary in the app router. */}
      <Suspense fallback={null}>
        <RegisterForm />
      </Suspense>
    </AuthShell>
  );
}
