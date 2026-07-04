import { Slot } from "./Slot";
import { CTAButton } from "./CTAButton";

const gradientByVariant: Record<string, string> = {
  event: "linear-gradient(135deg, rgba(109,77,255,0.35), rgba(56,230,230,0.25))",
  med: "linear-gradient(135deg, rgba(0,153,93,0.35), rgba(245,130,32,0.25))",
  gov: "linear-gradient(135deg, rgba(36,78,174,0.35), rgba(56,230,230,0.25))",
  primary: "var(--gradient-magenta-violet)",
};

const borderByVariant: Record<string, string> = {
  event: "rgba(109,77,255,0.35)",
  med: "rgba(0,153,93,0.30)",
  gov: "rgba(36,78,174,0.35)",
  primary: "rgba(109,77,255,0.35)",
};

export function TicketSection({
  titleSlot,
  price,
  includes,
  ctaVariant = "primary",
  ctaLabel = "Contato",
}: {
  titleSlot: string;
  price: string;
  includes: string[];
  ctaVariant?: "primary" | "event" | "med" | "gov";
  ctaLabel?: string;
}) {
  const glow = gradientByVariant[ctaVariant] ?? gradientByVariant.primary;
  const borderColor = borderByVariant[ctaVariant] ?? borderByVariant.primary;
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[3rem] opacity-70 blur-3xl"
        style={{ background: glow }}
      />
      <div
        className="relative rounded-[var(--radius-card-lg)] glass-strong lit-top-border p-8 md:p-12 overflow-hidden border"
        style={{ borderColor }}
      >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-40 blur-3xl"
        style={{ background: glow }}
      />
      <div className="relative grid gap-8 md:grid-cols-[1.2fr_1fr] items-start">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/70 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[var(--strategic-violet)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--strategic-violet)] pulse-dot" />
            Ingresso oficial
          </div>
          <Slot id={titleSlot} as="h3" className="mt-4 text-3xl md:text-4xl font-semibold tracking-normal text-[var(--goable-black)]" />
          <div className="mt-8">
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Valor
            </div>
            <div className="mt-1 text-4xl md:text-5xl font-semibold tracking-normal text-[var(--goable-black)]">
              {price}
            </div>
          </div>
          <div className="mt-10">
            <CTAButton variant={ctaVariant} size="lg">
              {ctaLabel}
            </CTAButton>
          </div>
        </div>
        <div className="rounded-2xl border border-white/70 bg-white/50 backdrop-blur p-6">
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Inclui
          </div>
          <ul className="mt-4 space-y-3">
            {includes.map((i) => (
              <li key={i} className="flex gap-3 text-sm text-[var(--goable-black)]">
                <span className="mt-[9px] h-1.5 w-1.5 rounded-full bg-[var(--strategic-violet)] shrink-0" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}
