import { COUNTRY_CODES } from "@/lib/countryCodes";

/** Phone number field with an attached country-code prefix dropdown. */
export default function PhoneInput({
  label = "Phone Number",
  dialCode,
  onDialCodeChange,
  value,
  onChange,
  error,
  id = "phone",
  ...rest
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-1.5 block text-xs font-medium text-ink-muted">{label}</span>
      <div
        className={`flex items-stretch overflow-hidden rounded-xl border bg-surface-2 transition-colors focus-within:border-brand ${
          error ? "border-danger" : "border-border"
        }`}
      >
        <select
          value={dialCode}
          onChange={(e) => onDialCodeChange(e.target.value)}
          aria-label="Country code"
          className="shrink-0 border-r border-border bg-transparent px-3 text-sm text-ink outline-none"
        >
          {COUNTRY_CODES.map((c) => (
            <option key={c.code} value={c.dial} className="bg-surface-2 text-ink">
              {c.flag} {c.dial}
            </option>
          ))}
        </select>
        <input
          id={id}
          type="tel"
          inputMode="numeric"
          value={value}
          onChange={onChange}
          placeholder="912 345 6789"
          className="w-full bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-faint"
          {...rest}
        />
      </div>
      {error && <span className="mt-1.5 block text-xs text-danger">{error}</span>}
    </label>
  );
}
