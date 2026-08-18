/** Generic labeled text input with an optional inline error message. */
export default function TextInput({ label, error, className = "", id, ...rest }) {
  return (
    <label htmlFor={id} className="block">
      {label && <span className="mb-1.5 block text-xs font-medium text-ink-muted">{label}</span>}
      <input
        id={id}
        className={`w-full rounded-xl border bg-surface-2 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-brand disabled:opacity-50 ${
          error ? "border-danger" : "border-border"
        } ${className}`}
        {...rest}
      />
      {error && <span className="mt-1.5 block text-xs text-danger">{error}</span>}
    </label>
  );
}
