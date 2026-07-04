import type { CSSProperties, ReactNode } from "react";

type Tone = "violet" | "med" | "gov" | "dark";

const toneMap: Record<Tone, { a: string; b: string; c: string; label: string; ring: string }> = {
  violet: {
    a: "#3B1D78",
    b: "#6D4DFF",
    c: "#38E6E6",
    label: "Foto Goable",
    ring: "rgba(169,155,255,0.5)",
  },
  med: {
    a: "#0E5F3A",
    b: "#00995D",
    c: "#F58220",
    label: "Foto Goable MED",
    ring: "rgba(0,153,93,0.4)",
  },
  gov: {
    a: "#0E3A6E",
    b: "#244EAE",
    c: "#0E8F61",
    label: "Foto Goable GOV",
    ring: "rgba(36,78,174,0.4)",
  },
  dark: {
    a: "#070A12",
    b: "#241a55",
    c: "#38E6E6",
    label: "Foto Goable",
    ring: "rgba(255,255,255,0.15)",
  },
};

export function PhotoPlaceholder({
  tone = "violet",
  ratio = "16/9",
  caption,
  label,
  children,
  className = "",
  overlayLabel,
  compact = false,
  src,
  alt,
  parallax = false,
  reveal = false,
}: {
  tone?: Tone;
  ratio?: string;
  caption?: string;
  label?: string;
  children?: ReactNode;
  className?: string;
  overlayLabel?: string;
  compact?: boolean;
  src?: string;
  alt?: string;
  parallax?: boolean;
  reveal?: boolean;
}) {
  const t = toneMap[tone];
  const style: CSSProperties = {
    background: `
      radial-gradient(ellipse at 20% 20%, ${t.c}22 0%, transparent 55%),
      radial-gradient(ellipse at 85% 15%, ${t.b}55 0%, transparent 60%),
      radial-gradient(ellipse at 70% 85%, ${t.a}88 0%, transparent 60%),
      linear-gradient(135deg, ${t.a} 0%, ${t.b} 55%, ${t.a} 100%)
    `,
    aspectRatio: ratio,
  };
  return (
    <div
      className={`relative overflow-hidden rounded-[var(--radius-card-lg)] border border-white/10 shadow-[var(--shadow-lift)] noise-overlay ${className}`}
      style={src ? { aspectRatio: ratio, backgroundColor: t.a } : style}
    >
      {src ? (
        <img
          src={src}
          alt={alt ?? overlayLabel ?? label ?? t.label}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 h-full w-full object-cover ${parallax ? "parallax-slow" : ""} ${reveal ? "mask-reveal" : ""}`}
          style={{ transformOrigin: "center" }}
        />
      ) : null}
      {src ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              tone === "med"
                ? `linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(14,95,58,0.35) 55%, rgba(14,95,58,0.60) 100%)`
                : tone === "gov"
                ? `linear-gradient(180deg, rgba(14,58,110,0.10) 0%, rgba(14,58,110,0.40) 60%, rgba(7,10,18,0.55) 100%)`
                : `linear-gradient(180deg, rgba(7,10,18,0.05) 0%, rgba(7,10,18,0.35) 60%, rgba(7,10,18,0.55) 100%)`,
          }}
        />
      ) : null}
      {/* Soft light streak */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24"
        style={{
          background: `linear-gradient(180deg, ${t.ring} 0%, transparent 100%)`,
          maskImage: "linear-gradient(180deg, black, transparent)",
        }}
      />
      {/* Grid */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 ${src ? "opacity-[0.04]" : "opacity-[0.08]"}`}
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at 30% 40%, black 20%, transparent 80%)",
        }}
      />
      {/* Halo */}
      {!src ? (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-[280px] w-[280px] rounded-full glass-shimmer"
          style={{ background: `radial-gradient(circle, ${t.b}66 0%, transparent 60%)`, filter: "blur(30px)" }}
        />
      ) : null}
      {/* Small tag: only render when we have a real caption/label OR when there's no real image */}
      {(overlayLabel || label || !src) ? (
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white/85 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
          {overlayLabel ?? label ?? t.label}
        </div>
      ) : null}
      {caption && !compact ? (
        <div className="absolute inset-x-4 bottom-4 max-w-[80%]">
          <div className="rounded-2xl border border-white/15 bg-black/25 px-4 py-3 text-xs text-white/85 backdrop-blur">
            {caption}
          </div>
        </div>
      ) : null}
      {children}
    </div>
  );
}