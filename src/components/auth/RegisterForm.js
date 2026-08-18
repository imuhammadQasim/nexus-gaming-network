"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MessageCircle } from "lucide-react";
import PhoneInput from "@/components/ui/PhoneInput";
import PasswordInput from "@/components/ui/PasswordInput";
import TextInput from "@/components/ui/TextInput";
import Button from "@/components/ui/Button";
import { handleRegister, sendWhatsAppOTP, verifyWhatsAppOTP } from "@/lib/api";
import { useToast } from "@/components/providers/ToastProvider";
import { DEFAULT_DIAL_CODE } from "@/lib/countryCodes";

export default function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const toast = useToast();

  const [dialCode, setDialCode] = useState(DEFAULT_DIAL_CODE);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // Pre-filled from ?ref=<code> if the user arrived via a referral link; still editable.
  const [inviteCode, setInviteCode] = useState(() => searchParams.get("ref") || "");

  const [otpRequestId, setOtpRequestId] = useState(null);
  const [otpCode, setOtpCode] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Resend cooldown ticker.
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => setCooldown((c) => c - 1), 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  const passwordsMismatch = confirmPassword.length > 0 && password !== confirmPassword;

  const onSendOtp = async () => {
    if (!phone) {
      setErrors((prev) => ({ ...prev, phone: "Enter your phone number first." }));
      return;
    }
    setIsSendingOtp(true);
    try {
      // Backed by a dedicated WhatsApp OTP gateway service — see sendWhatsAppOTP in src/lib/api.js.
      const { requestId } = await sendWhatsAppOTP({ phone: `${dialCode}${phone}` });
      setOtpRequestId(requestId);
      setOtpVerified(false);
      setCooldown(60);
      toast.success("Verification code sent via WhatsApp.");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsSendingOtp(false);
    }
  };

  const onVerifyOtp = async () => {
    try {
      const { verified } = await verifyWhatsAppOTP({ requestId: otpRequestId, code: otpCode });
      setOtpVerified(verified);
      setErrors((prev) => ({ ...prev, otp: verified ? undefined : "Invalid code. Try again." }));
      if (verified) toast.success("Phone number verified.");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const nextErrors = {};
    if (!phone) nextErrors.phone = "Phone number is required.";
    if (password.length < 6) nextErrors.password = "Use at least 6 characters.";
    if (password !== confirmPassword) nextErrors.confirmPassword = "Passwords do not match.";
    if (!otpVerified) nextErrors.otp = "Verify your phone number first.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      await handleRegister({ phone: `${dialCode}${phone}`, password, inviteCode });
      toast.success("Account created! Welcome to b-g678.com.");
      router.push("/");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <PhoneInput
        dialCode={dialCode}
        onDialCodeChange={setDialCode}
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        error={errors.phone}
        required
      />

      <div>
        <div className="flex items-end gap-3">
          <div className="flex-1">
            <TextInput
              id="otp"
              label="Verification Code"
              placeholder="6-digit code"
              inputMode="numeric"
              maxLength={6}
              value={otpCode}
              onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ""))}
              disabled={!otpRequestId || otpVerified}
              error={errors.otp}
            />
          </div>

          {otpRequestId && !otpVerified ? (
            <Button
              type="button"
              variant="secondary"
              onClick={onVerifyOtp}
              disabled={otpCode.length !== 6}
              className="mb-0.5 shrink-0"
            >
              Verify
            </Button>
          ) : (
            <Button
              type="button"
              variant="secondary"
              onClick={onSendOtp}
              isLoading={isSendingOtp}
              disabled={cooldown > 0 || otpVerified}
              className="mb-0.5 shrink-0 whitespace-nowrap"
            >
              <MessageCircle className="h-4 w-4" />
              {otpVerified ? "Verified" : cooldown > 0 ? `Resend (${cooldown}s)` : "Send Code"}
            </Button>
          )}
        </div>
        <p className="mt-1.5 text-xs text-ink-muted">
          We&apos;ll send a verification code to your WhatsApp.
        </p>
      </div>

      <PasswordInput
        id="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Create a password"
        error={errors.password}
        required
      />

      <PasswordInput
        id="confirmPassword"
        label="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Re-enter your password"
        error={passwordsMismatch ? "Passwords do not match." : errors.confirmPassword}
        required
      />

      <TextInput
        id="inviteCode"
        label="Invite Code"
        value={inviteCode}
        onChange={(e) => setInviteCode(e.target.value)}
        placeholder="Optional"
      />

      <Button type="submit" isLoading={isSubmitting} className="mt-2 w-full">
        Create Account
      </Button>
    </form>
  );
}
