import type { ReactNode } from "react";
import { Slot } from "./Slot";
import { CTAButton } from "./CTAButton";
import { AnimatedMeshBackground } from "./AnimatedMeshBackground";
import { GlassGlyph } from "./GlassGlyph";
import { ParticleWave } from "./ParticleWave";
import { FloatingDataPill } from "./FloatingDataPill";

export function HeroEditorial({
  eyebrow,
  h1Slot,
  subSlot,
  microSlot,
  primaryLabel = "Contato",
  secondaryLabel,
  secondaryTo,
  visual,
  tone = "violet",
  hint,
}: {
  eyebrow?: string;
  h1Slot: string;
  subSlot?: string;
  microSlot?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  visual?: ReactNode;
  tone?: "violet" | "med" | "gov" | "neutral";
  hint?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <AnimatedMeshBackground tone={tone} intensity="whisper" />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-24 md:pt-36 md:pb-32">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            {eyebrow ? (
              <div className="fade-up mb-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-[var(--strategic-violet)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--strategic-violet)] pulse-dot" />
                {eyebrow}
              </div>
            ) : null}
            <Slot
              id={h1Slot}
              as="h1"
              className="goable-page-title fade-up-delay-1 text-[var(--goable-black)]"
            />
            {subSlot ? (
              <div className="mt-8 max-w-lg fade-up-delay-2">
                <Slot id={subSlot} as="p" className="text-lg text-muted-foreground" />
              </div>
            ) : null}
            {microSlot ? (
              <div className="mt-3 max-w-lg fade-up-delay-2">
                <Slot id={microSlot} as="p" className="text-sm text-muted-foreground" />
              </div>
            ) : null}
            <div className="mt-10 flex flex-wrap gap-3 fade-up-delay-3">
              <CTAButton variant="primary" size="lg">
                {primaryLabel}
              </CTAButton>
              {secondaryLabel && secondaryTo ? (
                <CTAButton variant="ghost" size="lg" to={secondaryTo}>
                  {secondaryLabel}
                </CTAButton>
              ) : null}
            </div>
            {hint ? (
              <div className="mt-14 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground fade-up-delay-3">
                <span className="h-px w-8 bg-[var(--border)]" />
                {hint}
              </div>
            ) : null}
          </div>
          <div className="relative h-[380px] lg:h-[520px] fade-up-delay-2">
            {visual ?? <DefaultHeroVisual tone={tone} />}
          </div>
        </div>
      </div>
    </section>
  );
}

function DefaultHeroVisual({ tone = "violet" }: { tone?: "violet" | "med" | "gov" | "neutral" }) {
  const glyphTone = tone === "med" ? "med" : tone === "gov" ? "gov" : "violet";
  return (
    <div className="relative h-full w-full">
      <ParticleWave className="absolute inset-0" tone={glyphTone} density={18} />
      <GlassGlyph className="absolute inset-0" tone={glyphTone} />
      <FloatingDataPill
        label="Diagnóstico"
        value="operação mapeada"
        className="absolute left-2 bottom-8"
        tone={glyphTone}
      />
      <FloatingDataPill
        label="Sistema"
        value="sob medida"
        className="absolute right-4 top-10"
        tone={glyphTone}
      />
    </div>
  );
}
