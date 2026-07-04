import type { CSSProperties } from "react";
import { Slot } from "./Slot";
import { CTAButton } from "./CTAButton";
import { AnimatedMeshBackground } from "./AnimatedMeshBackground";
import { photos, glass3d } from "@/lib/goable/assets";

type Theme = "business" | "med" | "gov";

type Node = { key: string; label: string; metric?: string };

const themeMap: Record<
  Theme,
  {
    bg: string;
    eyebrowColor: string;
    headingColor: string;
    accent: string;
    accent2: string;
    ctaVariant: "event" | "med" | "gov";
    meshTone: "violet" | "med" | "gov";
    panelLabel: string;
    photo: string;
    photoTint: string;
    seal?: { label: string; value: string };
    glassObject: string;
  }
> = {
  business: {
    bg: "bg-[var(--light-bg)]",
    eyebrowColor: "text-[var(--strategic-violet)]",
    headingColor: "text-[var(--goable-black)]",
    accent: "#6D4DFF",
    accent2: "#38E6E6",
    ctaVariant: "event",
    meshTone: "violet",
    panelLabel: "Diagnóstico empresarial ao vivo",
    photo: photos.palco,
    photoTint:
      "linear-gradient(160deg, rgba(11,15,30,0.35) 0%, rgba(27,14,61,0.55) 60%, rgba(109,77,255,0.35) 100%)",
    glassObject: glass3d.loop,
  },
  med: {
    bg: "bg-[var(--med-bg)]",
    eyebrowColor: "text-[var(--med-green)]",
    headingColor: "text-[var(--med-text)]",
    accent: "#00995D",
    accent2: "#F58220",
    ctaVariant: "med",
    meshTone: "med",
    panelLabel: "Fluxo médico inteligente",
    photo: photos.palestrante,
    photoTint:
      "linear-gradient(160deg, rgba(0,60,42,0.30) 0%, rgba(0,153,93,0.35) 55%, rgba(0,153,93,0.20) 100%)",
    seal: { label: "Realização", value: "Faculdade Unimed" },
    glassObject: glass3d.ring,
  },
  gov: {
    bg: "bg-[var(--light-bg)]",
    eyebrowColor: "text-[var(--gov-green)]",
    headingColor: "text-[var(--goable-black)]",
    accent: "#38E6E6",
    accent2: "#0E8F61",
    ctaVariant: "gov",
    meshTone: "gov",
    panelLabel: "Governança e IA aplicada",
    photo: photos.publico,
    photoTint:
      "linear-gradient(160deg, rgba(14,28,54,0.65) 0%, rgba(20,48,95,0.55) 55%, rgba(14,143,97,0.30) 100%)",
    seal: { label: "Correalização", value: "Camila Rodrigues Advocacia" },
    glassObject: glass3d.shell,
  },
};

export function HeroEventStage({
  theme,
  eyebrow,
  h1Slot,
  subSlot,
  date,
  time,
  location,
  price,
  ctaLabel,
  ctaSecondaryLabel,
  panelTitle,
  panelSubtitle,
  nodes,
  centerBadge,
}: {
  theme: Theme;
  eyebrow: string;
  h1Slot: string;
  subSlot?: string;
  date: string;
  time?: string;
  location: string;
  price: string;
  ctaLabel: string;
  ctaSecondaryLabel?: string;
  panelTitle?: string;
  panelSubtitle?: string;
  nodes: Node[];
  centerBadge?: string;
}) {
  const t = themeMap[theme];
  void centerBadge;
  const overlayNodes = nodes.slice(0, 4);
  const h1MaxCh = theme === "gov" ? "max-w-[14ch]" : "max-w-[15ch]";
  const dockStyle: CSSProperties = {
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.82) 100%)",
    borderColor: "color-mix(in oklab, var(--border), transparent 20%)",
    boxShadow: "var(--shadow-lift)",
    backdropFilter: "blur(18px) saturate(140%)",
  };

  return (
    <section
      className={`relative overflow-hidden ${t.bg}`}
      style={{ minHeight: "min(90vh, 900px)" }}
    >
      <AnimatedMeshBackground tone={t.meshTone} intensity="whisper" />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-10 md:pt-28 md:pb-12">
        <div
          className={`fade-up inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] ${t.eyebrowColor}`}
        >
          <span
            className="h-1.5 w-1.5 rounded-full pulse-dot"
            style={{ backgroundColor: "currentColor" }}
          />
          {eyebrow}
        </div>

        <div className="mt-5 grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          {/* LEFT: copy + CTAs */}
          <div>
            <Slot
              id={h1Slot}
              as="h1"
              className={`goable-page-title fade-up-delay-1 ${h1MaxCh} ${t.headingColor}`}
            />
            {subSlot ? (
              <div className="mt-5 max-w-xl fade-up-delay-2">
                <Slot id={subSlot} as="p" className="text-base md:text-lg text-muted-foreground" />
              </div>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-3 fade-up-delay-3">
              <CTAButton variant={t.ctaVariant} size="lg">
                {ctaLabel}
              </CTAButton>
              {ctaSecondaryLabel ? (
                <CTAButton variant="ghost" size="lg">
                  {ctaSecondaryLabel}
                </CTAButton>
              ) : null}
            </div>
          </div>

          {/* RIGHT: real photo + system overlay */}
          <div className="relative fade-up-delay-2 group">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-8 rounded-[3rem] opacity-55 glass-shimmer"
              style={{
                background: `radial-gradient(ellipse at 25% 30%, ${t.accent}55, transparent 60%), radial-gradient(ellipse at 80% 80%, ${t.accent2}44, transparent 65%)`,
                filter: "blur(40px)",
              }}
            />

            {/* Photo frame */}
            <div
              className="relative overflow-hidden rounded-[32px] border border-white/40 shadow-[var(--shadow-lift)]"
              style={{ height: "clamp(420px, 58vh, 560px)" }}
            >
              <img
                src={t.photo}
                alt=""
                loading="eager"
                className="absolute inset-0 h-full w-full object-cover scale-[1.02] transition-transform duration-[1200ms] ease-out motion-safe:group-hover:scale-[1.05] motion-reduce:transform-none"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{ background: t.photoTint }}
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-40"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 45%, rgba(7,10,18,0.55) 100%)",
                }}
              />

              {/* Optional seal top-left */}
              {t.seal ? (
                <div
                  className="absolute left-4 top-4 rounded-lg border border-white/25 bg-black/25 px-2.5 py-1.5 text-white backdrop-blur-md"
                >
                  <div className="text-[9px] uppercase tracking-[0.22em] text-white/70">
                    {t.seal.label}
                  </div>
                  <div className="mt-0.5 text-xs font-semibold">{t.seal.value}</div>
                </div>
              ) : null}

              {/* Floating glass object */}
              <img
                src={t.glassObject}
                alt=""
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-8 h-32 w-32 object-contain opacity-70 motion-safe:animate-[goable-float-object_9s_ease-in-out_infinite] motion-reduce:animate-none"
              />

              {/* System overlay panel */}
              <div
                className="absolute inset-x-3 bottom-3 rounded-[22px] border border-white/25 p-3.5 text-white backdrop-blur-xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,12,24,0.55) 0%, rgba(10,12,24,0.75) 100%)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.22em] text-white">
                    <span
                      className="h-1.5 w-1.5 rounded-full pulse-dot"
                      style={{ backgroundColor: t.accent }}
                    />
                    {panelTitle ?? t.panelLabel}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/60">
                    ao vivo
                  </span>
                </div>
                <div className="mt-2.5 grid grid-cols-2 gap-2">
                  {overlayNodes.map((n, i) => (
                    <div
                      key={n.key}
                      className="group/node rounded-xl border border-white/15 bg-white/[0.06] px-2.5 py-2 transition-all duration-300 hover:-translate-y-[3px] motion-reduce:hover:translate-y-0"
                      style={{
                        animationDelay: `${i * 80}ms`,
                        boxShadow: `inset 0 0 0 1px transparent`,
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="h-1 w-1 shrink-0 rounded-full transition-transform duration-300 group-hover/node:scale-150"
                          style={{ backgroundColor: t.accent }}
                        />
                        <span className="text-[12px] font-semibold text-white truncate">
                          {n.label}
                        </span>
                      </div>
                      {n.metric ? (
                        <div className="mt-0.5 text-[10px] text-white/55 truncate">{n.metric}</div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ticket dock: full-width, first fold */}
        <div
          className="relative mt-8 grid gap-4 rounded-2xl border p-4 md:grid-cols-[1fr_1.4fr_1fr_auto] md:items-center md:p-4 fade-up-delay-3"
          style={dockStyle}
        >
          <DockCell label="Data" value={date} accent={t.accent} />
          <DockCell
            label={time ? "Horário" : "Local"}
            value={time || location}
            accent={t.accent}
          />
          <DockCell label="Valor" value={price} accent={t.accent} />
          <div className="md:pl-2">
            <CTAButton variant={t.ctaVariant} size="lg">
              {ctaLabel}
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function DockCell({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="relative pl-4">
      <span
        aria-hidden
        className="absolute left-0 top-1.5 h-8 w-[2px] rounded-full"
        style={{ backgroundColor: accent }}
      />
      <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 text-base font-semibold text-[var(--goable-black)]">
        {value}
      </div>
    </div>
  );
}
