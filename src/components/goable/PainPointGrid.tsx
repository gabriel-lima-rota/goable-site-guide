import { Slot } from "./Slot";
import { SystemMockup } from "./SystemMockup";
import { useState } from "react";

const defaultModules = [
  { key: "sales", label: "Vendas", status: "Pipeline em revisão", metric: "Em desenho" },
  { key: "support", label: "Atendimento", status: "Fila com IA", metric: "Em execução" },
  { key: "mgmt", label: "Gestão", status: "Relatórios ao vivo", metric: "Integrado" },
  { key: "ops", label: "Operação", status: "Fluxos otimizados", metric: "Mapeado" },
];

export function PainPointGrid({
  items,
  scanner = false,
  tone = "violet",
}: {
  items: Array<{ slotProblem: string; slotAnswer: string; moduleKey?: string }>;
  scanner?: boolean;
  tone?: "violet" | "med" | "gov";
}) {
  const [active, setActive] = useState<string | undefined>(defaultModules[0].key);
  if (scanner) {
    const mapped = items.map((it, i) => ({
      ...it,
      moduleKey: it.moduleKey ?? defaultModules[i]?.key,
    }));
    const activeItem =
      mapped.find((it) => it.moduleKey === active) ?? mapped[0];
    return (
      <div className="grid w-full max-w-full min-w-0 grid-cols-1 gap-8 overflow-hidden lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:overflow-visible">
        {/* LEFT: list of pains with connector rail */}
        <div className="relative w-full max-w-full min-w-0 overflow-hidden">
          <div
            aria-hidden
            className="absolute left-[11px] top-3 bottom-3 w-px"
            style={{
              background:
                "linear-gradient(180deg, transparent, color-mix(in oklab, var(--strategic-violet) 45%, transparent), transparent)",
            }}
          />
          <div className="flex w-full max-w-full min-w-0 flex-col gap-3">
            {mapped.map((it) => {
              const isActive = active === it.moduleKey;
              return (
                <button
                  key={it.slotProblem}
                  type="button"
                  onMouseEnter={() => it.moduleKey && setActive(it.moduleKey)}
                  onFocus={() => it.moduleKey && setActive(it.moduleKey)}
                  onClick={() => it.moduleKey && setActive(it.moduleKey)}
                  className={`group relative box-border w-full max-w-full min-w-0 pl-8 pr-5 py-4 text-left rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? "border-[color:color-mix(in_oklab,var(--strategic-violet)_50%,transparent)] bg-white shadow-[0_20px_60px_-30px_rgba(109,77,255,0.35)]"
                      : "border-[var(--border)] bg-white/70 hover:bg-white"
                  }`}
                >
                  {/* Node dot on the rail */}
                  <span
                    className="absolute left-[6px] top-6 h-[11px] w-[11px] rounded-full border-2 border-white transition-colors"
                    style={{
                      backgroundColor: isActive
                        ? "var(--strategic-violet)"
                        : "var(--border)",
                      boxShadow: isActive
                        ? "0 0 0 4px color-mix(in oklab, var(--strategic-violet) 18%, transparent)"
                        : "none",
                    }}
                  />
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                    <div className="min-w-0 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                      Sintoma
                    </div>
                    <div
                      className="min-w-0 text-right text-[10px] font-mono uppercase tracking-[0.14em] sm:tracking-[0.18em]"
                      style={{ color: isActive ? "var(--strategic-violet)" : "var(--muted-foreground)" }}
                    >
                      {defaultModules.find((m) => m.key === it.moduleKey)?.label}
                    </div>
                  </div>
                  <Slot
                    id={it.slotProblem}
                    as="h3"
                    className="mt-1 min-w-0 text-base font-semibold text-[var(--goable-black)]"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT: diagnostic glass panel */}
        <div className="w-full max-w-full min-w-0 lg:sticky lg:top-24">
          <div className="relative w-full max-w-full min-w-0 overflow-hidden lg:overflow-visible">
            <div
              aria-hidden
              className="absolute inset-0 rounded-[2rem] opacity-45 glass-shimmer lg:-inset-6 lg:rounded-[3rem] lg:opacity-60"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 30%, rgba(56,230,230,0.22), transparent 65%)",
                filter: "blur(28px)",
              }}
            />
            <div className="relative box-border w-full max-w-full min-w-0 overflow-hidden rounded-[28px] p-4 glass-strong lit-top-border noise-overlay sm:p-6 lg:rounded-[var(--radius-card-lg)]">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                <div className="inline-flex min-w-0 items-center gap-2 rounded-full border border-[var(--border)] bg-white/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--deep-violet)] sm:tracking-[0.24em]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--strategic-violet)] pulse-dot" />
                  <span className="truncate">Diagnóstico Goable</span>
                </div>
                <div className="shrink-0 text-[10px] font-mono uppercase tracking-[0.12em] text-muted-foreground sm:tracking-[0.2em]">
                  scan · em curso
                </div>
              </div>

              {/* Chips row */}
              <div className="mt-5 flex w-full max-w-full min-w-0 flex-wrap gap-2 overflow-hidden">
                {defaultModules.map((m) => {
                  const isActive = active === m.key;
                  return (
                    <button
                      key={m.key}
                      type="button"
                      onMouseEnter={() => setActive(m.key)}
                      onClick={() => setActive(m.key)}
                      className={`max-w-full rounded-full px-3 py-1.5 text-[11px] font-medium tracking-wide transition-all ${
                        isActive
                          ? "bg-[var(--goable-black)] text-white"
                          : "bg-white/70 text-muted-foreground border border-[var(--border)] hover:bg-white"
                      }`}
                    >
                      {m.label}
                    </button>
                  );
                })}
              </div>

              {/* Answer card */}
              <div className="mt-5 box-border w-full max-w-full min-w-0 rounded-2xl border border-[var(--border)] bg-white/85 p-4 sm:p-5">
                <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--strategic-violet)]">
                  Resposta Goable
                </div>
                <Slot
                  id={activeItem.slotAnswer}
                  as="p"
                  className="mt-2 text-sm md:text-[15px] leading-relaxed text-[var(--goable-black)]"
                />
              </div>

              {/* System mockup preview */}
              <div className="mt-5 w-full max-w-full min-w-0 overflow-hidden">
                <SystemMockup
                  title="Módulos ativos"
                  modules={defaultModules}
                  activeKey={active}
                  tone={tone}
                  compactMobile
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((it) => (
        <div
          key={it.slotProblem}
          className="rounded-lg border border-[var(--border)] bg-white p-6 card-lift"
        >
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Dor
          </div>
          <Slot id={it.slotProblem} as="h3" className="mt-2 text-lg font-semibold text-[var(--goable-black)]" />
          <div className="mt-4 text-[10px] uppercase tracking-[0.18em] text-[var(--strategic-violet)]">
            Resposta Goable
          </div>
          <Slot id={it.slotAnswer} as="p" className="mt-2 text-sm text-muted-foreground" />
        </div>
      ))}
    </div>
  );
}
