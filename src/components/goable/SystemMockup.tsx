import type { ReactNode } from "react";

type Module = { key: string; label: string; status: string; metric?: string };

export function SystemMockup({
  title = "Operação Goable",
  activeKey,
  modules,
  tone = "violet",
  extra,
  compactMobile = false,
}: {
  title?: string;
  activeKey?: string;
  modules: Module[];
  tone?: "violet" | "med" | "gov";
  extra?: ReactNode;
  compactMobile?: boolean;
}) {
  const accent =
    tone === "med" ? "var(--med-green)" : tone === "gov" ? "var(--gov-green)" : "var(--strategic-violet)";
  return (
    <div className="relative w-full max-w-full min-w-0 overflow-hidden rounded-[28px] border border-white/70 bg-white/80 shadow-[0_28px_90px_-42px_rgba(7,10,18,0.42)] backdrop-blur-xl">
      <div
        className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 border-b border-white/10 px-3 py-3 text-white sm:px-4"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--goable-black) 96%, transparent), color-mix(in oklab, var(--deep-violet) 76%, var(--goable-black)))",
        }}
      >
        <div className="flex shrink-0 gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full pulse-dot" style={{ backgroundColor: accent }} />
        </div>
        <div className="min-w-0 truncate text-[11px] font-medium text-white/90">{title}</div>
        <div className="shrink-0 text-[10px] uppercase tracking-[0.14em] text-white/55 sm:tracking-[0.18em]">
          Live
        </div>
      </div>
      <div className={compactMobile ? "grid min-w-0 grid-cols-1 sm:grid-cols-[160px_1fr]" : "grid min-w-0 grid-cols-[160px_1fr]"}>
        <nav className={compactMobile ? "flex min-w-0 gap-2 overflow-x-auto border-b border-white/70 bg-[color:color-mix(in_oklab,var(--light-bg)_82%,white)] p-3 sm:block sm:space-y-1 sm:overflow-visible sm:border-b-0 sm:border-r" : "border-r border-white/70 bg-[color:color-mix(in_oklab,var(--light-bg)_82%,white)] p-3 space-y-1"}>
          {modules.map((m) => {
            const isActive = m.key === activeKey;
            return (
              <div
                key={m.key}
                className={`${compactMobile ? "shrink-0" : ""} rounded-2xl px-3 py-2 text-xs transition-colors ${
                  isActive
                    ? "bg-white text-[var(--goable-black)] shadow-[0_14px_34px_-24px_rgba(7,10,18,0.34)]"
                    : "text-muted-foreground hover:text-[var(--goable-black)]"
                }`}
                style={isActive ? { boxShadow: `inset 0 0 0 1px ${accent}` } : undefined}
              >
                {m.label}
              </div>
            );
          })}
        </nav>
        <div className="min-w-0 space-y-4 p-3 sm:p-5">
          <div className={compactMobile ? "grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-3" : "grid grid-cols-3 gap-3"}>
            {modules.slice(0, 3).map((m) => (
              <div
                key={m.key}
                className="min-w-0 rounded-2xl border border-white/70 bg-white/75 p-3 shadow-[0_16px_44px_-32px_rgba(7,10,18,0.32)]"
              >
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {m.label}
                </div>
                <div className="mt-1.5 text-sm font-semibold text-[var(--goable-black)]">
                  {m.metric ?? "Em desenho"}
                </div>
                <div className="mt-2 flex min-w-0 items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] text-muted-foreground sm:tracking-[0.16em]">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full pulse-dot"
                    style={{ backgroundColor: accent }}
                  />
                  <span className="min-w-0 truncate">{m.status}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="min-w-0 rounded-2xl border border-white/70 bg-white/55 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] sm:p-4">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 text-[10px] uppercase tracking-[0.12em] text-muted-foreground sm:tracking-[0.18em]">
              <span>Fluxo diagnosticado</span>
              <span className="flex shrink-0 items-center gap-1.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full pulse-dot" style={{ backgroundColor: accent }} />
                em execução
              </span>
            </div>
            <div className={compactMobile ? "mt-3 flex min-w-0 items-stretch gap-2 overflow-x-auto pb-1" : "mt-3 flex items-center gap-2"}>
              {modules.map((m, idx) => (
                <div key={m.key} className={compactMobile ? "flex min-w-[140px] flex-1 items-center gap-2" : "flex flex-1 items-center gap-2"}>
                  <div
                    className="min-w-0 flex-1 truncate rounded-xl border border-[var(--border)] bg-white/70 px-2 py-1.5 text-[11px]"
                    style={
                      m.key === activeKey
                        ? { borderColor: accent, color: "var(--goable-black)" }
                        : { color: "var(--muted-foreground)" }
                    }
                  >
                    {m.status}
                  </div>
                  {idx < modules.length - 1 ? (
                    <div className="h-px w-4 shrink-0 bg-[var(--border)]" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          {extra}
        </div>
      </div>
    </div>
  );
}
