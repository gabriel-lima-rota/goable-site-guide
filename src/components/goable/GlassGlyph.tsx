export function GlassGlyph({
  className = "",
  tone = "violet",
}: {
  className?: string;
  tone?: "violet" | "med" | "gov";
}) {
  const stroke =
    tone === "med" ? "#00995D" : tone === "gov" ? "#0E8F61" : "#6D4DFF";
  const highlight =
    tone === "med" ? "#F58220" : tone === "gov" ? "#244EAE" : "#A99BFF";
  return (
    <div className={`relative ${className}`} aria-hidden>
      <div className="absolute inset-0 float-slow">
        <svg viewBox="0 0 400 400" className="h-full w-full">
          <defs>
            <linearGradient id="glyphFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={stroke} stopOpacity="0.16" />
              <stop offset="100%" stopColor={stroke} stopOpacity="0" />
            </linearGradient>
            <linearGradient id="glyphStroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={stroke} stopOpacity="0.85" />
              <stop offset="100%" stopColor={highlight} stopOpacity="0.9" />
            </linearGradient>
          </defs>
          {/* Stylised G / arc, inspired by the brand shape */}
          <path
            d="M300 130 A90 90 0 1 0 300 270 L230 270 L230 210 L280 210"
            fill="none"
            stroke="url(#glyphStroke)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M300 130 A90 90 0 1 0 300 270 L230 270 L230 210 L280 210"
            fill="url(#glyphFill)"
            opacity="0.35"
          />
          <circle cx="200" cy="200" r="120" fill="none" stroke={stroke} strokeWidth="0.6" opacity="0.5" />
          <circle cx="200" cy="200" r="150" fill="none" stroke={stroke} strokeWidth="0.4" opacity="0.3" />
        </svg>
      </div>
      <div
        className="absolute inset-6 rounded-lg glass-panel glass-shimmer"
        style={{ opacity: 0.6 }}
      />
    </div>
  );
}
