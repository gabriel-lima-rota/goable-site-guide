export function MotionGlassObject({
  variant = "orb",
  className = "",
}: {
  variant?: "orb" | "beam" | "grid";
  className?: string;
}) {
  if (variant === "grid") {
    return (
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 opacity-[0.35] ${className}`}
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(109,77,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(109,77,255,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
    );
  }
  if (variant === "beam") {
    return (
      <div
        aria-hidden
        className={`pointer-events-none absolute ${className}`}
        style={{
          background:
            "linear-gradient(120deg, rgba(109,77,255,0.35), rgba(59,29,120,0.15) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    );
  }
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(169,155,255,0.65), rgba(109,77,255,0.35) 45%, rgba(59,29,120,0.15) 70%, transparent 80%)",
        filter: "blur(20px)",
      }}
    />
  );
}
