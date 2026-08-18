"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

/** Password field with a show/hide eye toggle. */
export default function PasswordInput({ label, error, id, className = "", ...rest }) {
  const [visible, setVisible] = useState(false);

  return (
    <label htmlFor={id} className="block">
      {label && <span className="mb-1.5 block text-xs font-medium text-ink-muted">{label}</span>}
      <div className="relative">
        <input
          id={id}
          type={visible ? "text" : "password"}
          className={`w-full rounded-xl border bg-surface-2 px-4 py-3 pr-11 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-brand disabled:opacity-50 ${
            error ? "border-danger" : "border-border"
          } ${className}`}
          {...rest}
        />
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute inset-y-0 right-0 flex items-center px-3 text-ink-faint transition-colors hover:text-ink"
          aria-label={visible ? "Hide password" : "Show password"}
          tabIndex={-1}
        >
          {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
      {error && <span className="mt-1.5 block text-xs text-danger">{error}</span>}
    </label>
  );
}
