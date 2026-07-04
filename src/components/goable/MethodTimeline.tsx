type Step = { title: string; desc: string };

const defaultSteps: Step[] = [
  { title: "Diagnóstico", desc: "Entendemos dor, objetivo, time e impacto." },
  { title: "Mapeamento", desc: "Mapeamos processos, dados e gargalos." },
  { title: "Desenho", desc: "Desenhamos o sistema certo para a sua realidade." },
  { title: "Implementação", desc: "Implementamos, medimos e ajustamos com o time." },
];

export function MethodTimeline({
  steps = defaultSteps,
  tone = "violet",
}: {
  steps?: (Step | string)[];
  tone?: "violet" | "med" | "gov";
}) {
  const accent =
    tone === "med" ? "var(--med-green)" : tone === "gov" ? "var(--gov-green)" : "var(--strategic-violet)";
  const normalized: Step[] = steps.map((s) =>
    typeof s === "string" ? { title: s, desc: "" } : s,
  );
  return (
    <div className="relative">
      {/* Fluid connecting line between steps */}
      <div aria-hidden className="hidden md:block absolute inset-x-6 top-8 h-16 pointer-events-none">
        <svg viewBox="0 0 1000 60" preserveAspectRatio="none" className="h-full w-full">
          <defs>
            <linearGradient id="methodLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={accent} stopOpacity="0" />
              <stop offset="15%" stopColor={accent} stopOpacity="0.75" />
              <stop offset="85%" stopColor={accent} stopOpacity="0.75" />
              <stop offset="100%" stopColor={accent} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 30 C 150 -10, 300 70, 500 30 S 850 -10, 1000 30"
            fill="none"
            stroke="url(#methodLine)"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />
        </svg>
      </div>

      <div className="grid gap-5 md:grid-cols-4">
        {normalized.map((s, i) => (
          <div
            key={s.title}
            className="group relative glass-strong rounded-[var(--radius-card)] border border-white/60 p-5 card-lift"
          >
            <div className="flex items-start justify-between">
              <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                etapa {String(i + 1).padStart(2, "0")}
              </div>
              <span
                className="h-1.5 w-1.5 rounded-full pulse-dot"
                style={{ backgroundColor: accent }}
              />
            </div>
            <div
              className="mt-3 text-4xl font-semibold leading-none tracking-normal"
              style={{ color: accent, opacity: 0.9 }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="mt-4 text-base font-semibold text-[var(--goable-black)]">
              {s.title}
            </div>
            <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {s.desc}
            </div>
            <div
              className="mt-5 h-px w-8 opacity-60"
              style={{ background: `linear-gradient(to right, ${accent}, transparent)` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
