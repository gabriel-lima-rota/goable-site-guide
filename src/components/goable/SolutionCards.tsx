import { Slot } from "./Slot";

const defaultSystems = [
  { key: "AGENTS", label: "Agentes comerciais" },
  { key: "SUPPORT", label: "Atendimento com IA" },
  { key: "DASHBOARDS", label: "Dashboards" },
  { key: "AUTOMATIONS", label: "Automações" },
  { key: "RAG", label: "RAG corporativo" },
  { key: "FLOWS", label: "Fluxos personalizados" },
];

export function SolutionCards({
  items = defaultSystems,
  slotPrefix = "COPY_HOME_SYSTEM",
  tone = "violet",
}: {
  items?: Array<{ key: string; label: string }>;
  slotPrefix?: string;
  tone?: "violet" | "med" | "gov";
}) {
  const accent =
    tone === "med" ? "var(--med-green)" : tone === "gov" ? "var(--gov-green)" : "var(--strategic-violet)";
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <div
          key={it.key}
          className="group relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--border)] bg-white/85 p-6 shadow-[var(--shadow-soft)] backdrop-blur card-lift"
        >
          <div
            aria-hidden
            className="absolute -right-14 -top-14 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle, color-mix(in oklab, ${accent} 28%, transparent), transparent 66%)`,
            }}
          />
          <div className="relative flex items-start justify-between">
            <div
              className="flex h-10 min-w-10 items-center justify-center rounded-2xl border text-[10px] font-mono uppercase tracking-[0.18em]"
              style={{
                backgroundColor: `color-mix(in oklab, ${accent} 9%, white)`,
                borderColor: `color-mix(in oklab, ${accent} 22%, transparent)`,
                color: accent,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="text-[9px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
              módulo Goable
            </div>
          </div>
          <div className="relative mt-5 text-base font-semibold text-[var(--goable-black)]">{it.label}</div>
          <div className="mt-2">
            <Slot id={`${slotPrefix}_${it.key}`} as="p" className="text-sm text-muted-foreground" />
          </div>
          <div
            className="mt-6 h-px w-full opacity-55"
            style={{ background: `linear-gradient(to right, ${accent}, transparent)` }}
          />
          <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full pulse-dot" style={{ backgroundColor: accent }} />
            desenhado sob medida
          </div>
        </div>
      ))}
    </div>
  );
}
