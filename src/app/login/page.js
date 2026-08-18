import AuthShell from "@/components/auth/AuthShell";
import LoginForm from "@/components/auth/LoginForm";

export const metadata = {
  title: "Login — b-g678.com",
  description: "Log in to your b-g678.com account.",
};

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome Back"
      subtitle="Log in to continue earning."
      footerText="Don't have an account?"
      footerLinkText="Register"
      footerHref="/register"
    >
      <LoginForm />
    </AuthShell>
  );
}
