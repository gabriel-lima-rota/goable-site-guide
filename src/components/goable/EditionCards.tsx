import { Link } from "@tanstack/react-router";
import { eventData, type EventKey } from "@/lib/goable/events";
import { ParticleWave } from "./ParticleWave";

const themes: Record<EventKey, { tone: "violet" | "med" | "gov"; accent: string; light: string; label: string }> = {
  business: {
    tone: "violet",
    accent: "var(--strategic-violet)",
    light: "rgba(109,77,255,0.08)",
    label: "Empresários",
  },
  med: {
    tone: "med",
    accent: "var(--med-green)",
    light: "rgba(0,153,93,0.08)",
    label: "MED",
  },
  gov: {
    tone: "gov",
    accent: "var(--gov-green)",
    light: "rgba(14,143,97,0.08)",
    label: "GOV",
  },
};

export function EditionCards({ keys = ["gov", "med", "business"] as EventKey[] }: { keys?: EventKey[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {keys.map((k) => {
        const e = eventData[k];
        const t = themes[k];
        const secondary =
          k === "med" ? "var(--med-orange)" : k === "gov" ? "var(--system-blue)" : "var(--soft-purple)";
        return (
          <Link
            key={k}
            to={e.path}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-white card-lift"
          >
            <div className="relative h-32 overflow-hidden" style={{ background: t.light }}>
              <ParticleWave className="absolute inset-0 opacity-60" tone={t.tone} density={12} />
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{ background: `linear-gradient(90deg, ${t.accent}, ${secondary})` }}
              />
              <div className="absolute left-5 top-4 text-[10px] uppercase tracking-[0.22em]" style={{ color: t.accent }}>
                Conect.AI · {t.label}
              </div>
              <div className="absolute right-5 bottom-4 rounded-md border border-[var(--border)] bg-white/85 px-3 py-1.5 text-[11px] font-medium text-[var(--goable-black)] backdrop-blur">
                {e.date}
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div>
                <div className="text-xl font-semibold text-[var(--goable-black)]">{e.name}</div>
                <div className="mt-2 text-sm text-muted-foreground">{e.audience}</div>
              </div>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                <div>
                  <dt className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground">Local</dt>
                  <dd className="mt-0.5 text-[var(--goable-black)]">{e.location.split(",")[0]}</dd>
                </div>
                <div>
                  <dt className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground">Valor</dt>
                  <dd className="mt-0.5 text-[var(--goable-black)]">{e.price}</dd>
                </div>
              </dl>
              <div
                className="mt-auto inline-flex items-center gap-2 text-sm font-medium"
                style={{ color: t.accent }}
              >
                Conhecer edição
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
