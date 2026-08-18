import { Loader2 } from "lucide-react";

const VARIANT_CLASSES = {
  primary: "bg-brand text-ink hover:bg-brand-dim glow-brand",
  secondary: "bg-surface text-ink border border-border hover:bg-surface-hover",
  ghost: "bg-transparent text-ink-muted hover:text-ink",
};

/** Primary interactive control used across the platform — pass a `variant` to restyle. */
export default function Button({
  children,
  variant = "primary",
  className = "",
  isLoading = false,
  disabled = false,
  type = "button",
  ...rest
}) {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 ${VARIANT_CLASSES[variant]} ${className}`}
      {...rest}
    >
      {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}
