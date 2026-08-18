"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PhoneInput from "@/components/ui/PhoneInput";
import PasswordInput from "@/components/ui/PasswordInput";
import Button from "@/components/ui/Button";
import { handleLogin } from "@/lib/api";
import { useToast } from "@/components/providers/ToastProvider";
import { DEFAULT_DIAL_CODE } from "@/lib/countryCodes";

export default function LoginForm() {
  const router = useRouter();
  const toast = useToast();

  const [dialCode, setDialCode] = useState(DEFAULT_DIAL_CODE);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      // Swap this for a real BaaS call in src/lib/api.js — the form never changes.
      await handleLogin({ phone: `${dialCode}${phone}`, password, remember });
      toast.success("Welcome back!");
      router.push("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <PhoneInput
        dialCode={dialCode}
        onDialCodeChange={setDialCode}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <PasswordInput
        id="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        required
      />

      {error && <p className="text-xs text-danger">{error}</p>}

      <label className="flex items-center gap-2 text-sm text-ink-muted">
        <input
          type="checkbox"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
          className="h-4 w-4 rounded border-border bg-surface accent-brand"
        />
        Remember me
      </label>

      <Button type="submit" isLoading={isLoading} className="mt-2 w-full">
        Log In
      </Button>
    </form>
  );
}
