export function FloatingDataPill({
  label,
  value,
  className = "",
  tone = "violet",
}: {
  label: string;
  value: string;
  className?: string;
  tone?: "violet" | "med" | "gov";
}) {
  const dot =
    tone === "med" ? "var(--med-green)" : tone === "gov" ? "var(--gov-green)" : "var(--strategic-violet)";
  return (
    <div
      className={`float-slow inline-flex items-center gap-3 rounded-lg border border-[var(--border)] bg-white/85 px-4 py-2.5 backdrop-blur shadow-[var(--shadow-soft)] ${className}`}
    >
      <span
        className="h-2 w-2 rounded-full pulse-dot"
        style={{ backgroundColor: dot }}
      />
      <div className="flex flex-col leading-tight">
        <span className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
        <span className="text-xs font-medium text-[var(--goable-black)]">{value}</span>
      </div>
    </div>
  );
}