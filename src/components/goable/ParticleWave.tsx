export function ParticleWave({
  className = "",
  tone = "violet",
  density = 14,
}: {
  className?: string;
  tone?: "violet" | "med" | "gov";
  density?: number;
}) {
  const color =
    tone === "med" ? "#00995D" : tone === "gov" ? "#0E8F61" : "#6D4DFF";
  const cols = density;
  const rows = Math.round(density * 0.55);
  const dots: { x: number; y: number; d: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = (c / (cols - 1)) * 100;
      const yBase = (r / (rows - 1)) * 100;
      const wave = Math.sin((c / cols) * Math.PI * 2 + r * 0.6) * 4;
      dots.push({ x, y: yBase + wave, d: (c + r) * 40 });
    }
  }
  return (
    <div className={`relative overflow-hidden ${className}`} aria-hidden>
      <svg viewBox="0 0 100 60" preserveAspectRatio="none" className="h-full w-full">
        {dots.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={0.35}
            fill={color}
            opacity={0.55}
            style={{
              transformOrigin: `${p.x}px ${p.y}px`,
              animation: `goable-pulse-dot ${2.4 + (i % 5) * 0.4}s ease-in-out ${p.d}ms infinite`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}