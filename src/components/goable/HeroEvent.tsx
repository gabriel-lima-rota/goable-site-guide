import { Slot } from "./Slot";
import { CTAButton } from "./CTAButton";
import { AnimatedMeshBackground } from "./AnimatedMeshBackground";
import { ParticleWave } from "./ParticleWave";
import { FloatingDataPill } from "./FloatingDataPill";

export function HeroEvent({
  eyebrow,
  h1Slot,
  subSlot,
  date,
  time,
  location,
  price,
  ctaLabel = "Contato",
  ctaVariant = "primary",
  theme = "default",
}: {
  eyebrow: string;
  h1Slot: string;
  subSlot?: string;
  date: string;
  time?: string;
  location: string;
  price: string;
  ctaLabel?: string;
  ctaVariant?: "primary" | "event" | "med" | "gov";
  theme?: "default" | "med" | "gov";
}) {
  const meshTone: "violet" | "med" | "gov" =
    theme === "med" ? "med" : theme === "gov" ? "gov" : "violet";
  const bg =
    theme === "med"
      ? "bg-[var(--med-bg)]"
      : theme === "gov"
      ? "bg-[var(--light-bg)]"
      : "bg-[var(--light-bg)]";
  const headingColor =
    theme === "med" ? "text-[var(--med-text)]" : "text-[var(--goable-black)]";
  const eyebrowColor =
    theme === "med"
      ? "text-[var(--med-green)]"
      : theme === "gov"
      ? "text-[var(--gov-green)]"
      : "text-[var(--strategic-violet)]";
  return (
    <section className={`relative overflow-hidden ${bg}`}>
      <AnimatedMeshBackground tone={meshTone} intensity="soft" />
      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-20 md:pt-36">
        <div className={`fade-up inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] ${eyebrowColor}`}>
          <span className="h-1.5 w-1.5 rounded-full pulse-dot" style={{ backgroundColor: "currentColor" }} />
          {eyebrow}
        </div>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <div>
            <Slot
              id={h1Slot}
              as="h1"
              className={`fade-up-delay-1 text-5xl md:text-7xl font-semibold leading-[0.98] tracking-normal max-w-[16ch] ${headingColor}`}
            />
            {subSlot ? (
              <div className="mt-6 max-w-xl fade-up-delay-2">
                <Slot id={subSlot} as="p" className="text-lg text-muted-foreground" />
              </div>
            ) : null}
          </div>
          <div className="relative hidden h-[220px] lg:block">
            <ParticleWave className="absolute inset-0 opacity-70" tone={meshTone} density={16} />
            <FloatingDataPill
              label="Local"
              value={location.split(",")[0]}
              className="absolute left-2 top-6"
              tone={meshTone}
            />
            <FloatingDataPill
              label="Data"
              value={date}
              className="absolute right-4 bottom-6"
              tone={meshTone}
            />
          </div>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-4 max-w-5xl fade-up-delay-3">
          <MetaBlock label="Data" value={date} />
          <MetaBlock label="Horário" value={time || "A definir"} />
          <MetaBlock label="Local" value={location} />
          <MetaBlock label="Valor" value={price} />
        </div>
        <div className="mt-8">
          <CTAButton variant={ctaVariant} size="lg">
            {ctaLabel}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-white/70 backdrop-blur px-4 py-3 card-lift">
      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 text-sm font-medium text-[var(--goable-black)]">{value}</div>
    </div>
  );
}
