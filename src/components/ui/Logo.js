import Link from "next/link";

const SIZES = {
  sm: "text-lg",
  md: "text-xl",
};

/** Wordmark used in the header, auth pages, and footer. */
export default function Logo({ size = "sm", href = "/", className = "" }) {
  const content = (
    <span className={`font-extrabold tracking-tight text-ink ${SIZES[size]} ${className}`}>
      b-g678<span className="text-brand">.com</span>
    </span>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
