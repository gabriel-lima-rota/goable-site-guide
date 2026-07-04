export function AnimatedMeshBackground({
  className = "",
  intensity = "default",
  tone = "violet",
}: {
  className?: string;
  intensity?: "default" | "soft" | "strong" | "whisper";
  tone?: "violet" | "med" | "gov" | "neutral";
}) {
  const gridOpacity =
    intensity === "strong"
      ? 0.14
      : intensity === "whisper"
      ? 0.025
      : intensity === "soft"
      ? 0.05
      : 0.09;
  const lightA =
    tone === "med"
      ? "rgba(0,153,93,0.18)"
      : tone === "gov"
      ? "rgba(14,143,97,0.16)"
      : tone === "neutral"
      ? "rgba(36,78,174,0.14)"
      : "rgba(109,77,255,0.24)";
  const lightB =
    tone === "med"
      ? "rgba(245,130,32,0.14)"
      : tone === "gov"
      ? "rgba(36,78,174,0.16)"
      : tone === "neutral"
      ? "rgba(109,77,255,0.16)"
      : "rgba(36,78,174,0.18)";
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 mesh-pan"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(7,10,18,${gridOpacity}) 1px, transparent 1px), linear-gradient(to bottom, rgba(7,10,18,${gridOpacity}) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at 70% 30%, black 0%, black 40%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 70% 30%, black 0%, black 40%, transparent 78%)",
        }}
      />
      <div
        className="absolute -top-40 -right-32 h-[560px] w-[560px] rounded-full glass-shimmer"
        style={{
          background: `radial-gradient(circle at 40% 40%, ${lightA} 0%, transparent 60%)`,
          filter: "blur(30px)",
        }}
      />
      <div
        className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full float-slow"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${lightB} 0%, transparent 65%)`,
          filter: "blur(40px)",
        }}
      />
    </div>
  );
}