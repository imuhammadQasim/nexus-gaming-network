// ---------------------------------------------------------------------------
// Mock Backend-as-a-Service (BaaS) layer.
//
// Every function here simulates a network round-trip and resolves/rejects
// with the same shape a real backend should use. UI components only ever
// import from this file, so swapping mocks for real calls (Supabase,
// Firebase, or a custom Node API) never requires touching a component.
// ---------------------------------------------------------------------------

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Authenticate a user with phone + password.
 * TODO(BaaS): replace with e.g. `supabase.auth.signInWithPassword({ phone, password })`
 */
export async function handleLogin({ phone, password, remember }) {
  await wait(900);
  if (!phone || !password) {
    throw new Error("Phone number and password are required.");
  }
  return { token: "mock-session-token", user: { phone, remember } };
}

/**
 * Create a new account. Assumes the phone number has already been verified
 * via `sendWhatsAppOTP` + `verifyWhatsAppOTP`.
 * TODO(BaaS): replace with e.g. `supabase.auth.signUp(...)`, then attach
 * `inviteCode` to the new user's referral record.
 */
export async function handleRegister({ phone, password, inviteCode }) {
  await wait(1100);
  if (!phone || !password) {
    throw new Error("Phone number and password are required.");
  }
  return { token: "mock-session-token", user: { phone, inviteCode } };
}

/**
 * Request a WhatsApp OTP for the given phone number.
 * TODO(BaaS): POST to your OTP gateway service, e.g.
 *   POST https://your-service.example.com/otp/send  { phone }
 * That service is expected to own the actual WhatsApp sending transport
 * (whichever automation worker and dedicated number you run) — this
 * frontend only needs the HTTP contract: a `requestId` to reference when
 * verifying, and how long the code stays valid.
 */
export async function sendWhatsAppOTP({ phone }) {
  await wait(1400);
  if (!phone) {
    throw new Error("Enter a phone number first.");
  }
  return { requestId: `otp_${Date.now()}`, expiresInSeconds: 120 };
}

/**
 * Verify a code the user received via WhatsApp.
 * TODO(BaaS): POST `{ requestId, code }` to your OTP gateway for verification.
 */
export async function verifyWhatsAppOTP({ requestId, code }) {
  await wait(700);
  if (!requestId) {
    throw new Error("Request a verification code first.");
  }
  return { verified: /^\d{6}$/.test(code) };
}

/**
 * Fetch the signed-in user's referral dashboard data.
 * TODO(BaaS): replace with a real query against the user/referrals table.
 */
export async function fetchDashboardStats() {
  await wait(500);
  return {
    totalBalance: 48213.5,
    totalReferrals: 812,
    commissionToday: 1284.2,
    onlinePlayers: 18342,
    referralCode: "GX7F92K",
  };
}
