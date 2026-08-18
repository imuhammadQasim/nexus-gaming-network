/** Glassmorphic surface used for every card / panel across the platform. */
export default function GlassCard({ children, className = "", ...rest }) {
  return (
    <div className={`glass rounded-2xl ${className}`} {...rest}>
      {children}
    </div>
  );
}
