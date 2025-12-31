export default function Section({
  children,
  size = "default",
  className = "",
}) {
  const spacing = {
    hero: "py-28 md:py-36",
    default: "py-20",
    compact: "py-12",
  };

  return (
    <section className={`${spacing[size]} ${className}`}>{children}</section>
  );
}
