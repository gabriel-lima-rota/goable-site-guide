export function MotionLine({
  vertical = false,
  className = "",
  tone = "violet",
}: {
  vertical?: boolean;
  className?: string;
  tone?: "violet" | "med" | "gov";
}) {
  const color =
    tone === "med" ? "#00995D" : tone === "gov" ? "#0E8F61" : "#6D4DFF";
  return (
    <div
      aria-hidden
      className={`relative overflow-hidden ${vertical ? "w-px" : "h-px"} ${className}`}
      style={{ backgroundColor: "color-mix(in oklab, currentColor 12%, transparent)" }}
    >
      <span
        className="absolute inset-0 reveal-line"
        style={{
          background: vertical
            ? `linear-gradient(to bottom, transparent, ${color}, transparent)`
            : `linear-gradient(to right, transparent, ${color}, transparent)`,
        }}
      />
    </div>
  );
}