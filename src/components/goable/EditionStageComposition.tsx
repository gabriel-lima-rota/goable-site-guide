import { Link } from "@tanstack/react-router";
import { eventData, type EventKey } from "@/lib/goable/events";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { CTAButton } from "./CTAButton";
import { photos } from "@/lib/goable/assets";
import { ArrowUpRight } from "lucide-react";

const themes: Record<EventKey, { accent: string; secondary: string; label: string }> = {
  business: { accent: "#6D4DFF", secondary: "#A99BFF", label: "Empresários" },
  med: { accent: "#00995D", secondary: "#F58220", label: "MED" },
  gov: { accent: "#244EAE", secondary: "#0E8F61", label: "GOV" },
};

export function EditionStageComposition({
  keys = ["med", "business", "gov"] as EventKey[],
}: {
  keys?: EventKey[];
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.95fr] lg:items-center">
      {/* Stage photo */}
      <div className="relative">
        <div
          aria-hidden
          className="absolute -inset-6 rounded-[3rem] opacity-70 glass-shimmer"
          style={{
            background:
              "radial-gradient(ellipse at 40% 40%, rgba(109,77,255,0.30), transparent 65%)",
            filter: "blur(30px)",
          }}
        />
        <PhotoPlaceholder
          tone="dark"
          ratio="4/5"
          label="Palco Conect.AI"
          overlayLabel="Instituto Caldeira · Porto Alegre"
          className="relative"
          src={photos.palco}
          parallax
          reveal
        >
          {/* Waveform-like technical accent */}
          <svg
            aria-hidden
            viewBox="0 0 400 100"
            className="absolute inset-x-6 bottom-24 h-16 opacity-70"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveStage" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#A99BFF" stopOpacity="0" />
                <stop offset="50%" stopColor="#38E6E6" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FF3EA5" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0 50 Q 40 10, 80 50 T 160 50 T 240 50 T 320 50 T 400 50"
              fill="none"
              stroke="url(#waveStage)"
              strokeWidth="1.5"
            />
            <path
              d="M0 55 Q 30 30, 60 55 T 120 55 T 180 55 T 240 55 T 300 55 T 360 55 T 400 55"
              fill="none"
              stroke="url(#waveStage)"
              strokeWidth="0.8"
              opacity="0.6"
            />
          </svg>
        </PhotoPlaceholder>
      </div>

      {/* Edition mini cards stacked in glass */}
      <div className="relative">
        <div className="glass-strong lit-top-border rounded-[var(--radius-card-lg)] p-5 md:p-6">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--deep-violet)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--strategic-violet)] pulse-dot" />
              Conect.AI 2026
            </div>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              três edições
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-3">
            {keys.map((k) => {
              const e = eventData[k];
              const t = themes[k];
              return (
                <Link
                  key={k}
                  to={e.path}
                  className="group relative flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-white/80 p-4 card-lift"
                >
                  <div
                    className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-white text-xs font-mono tracking-normal"
                    style={{
                      background: `linear-gradient(135deg, ${t.accent}, ${t.secondary})`,
                    }}
                  >
                    <span className="leading-none">{e.date.slice(0, 2)}</span>
                    <span
                      aria-hidden
                      className="absolute inset-x-2 bottom-1.5 h-px opacity-70"
                      style={{ background: "rgba(255,255,255,0.5)" }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <div
                        className="text-[10px] font-medium uppercase tracking-[0.22em]"
                        style={{ color: t.accent }}
                      >
                        {t.label}
                      </div>
                      <span className="text-[10px] text-muted-foreground">·</span>
                      <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                        {e.date}
                      </div>
                    </div>
                    <div className="mt-1 text-sm font-semibold text-[var(--goable-black)] truncate">
                      {e.name}
                    </div>
                    <div className="mt-0.5 text-xs text-muted-foreground truncate">
                      {e.audience}
                    </div>
                  </div>
                  <ArrowUpRight
                    aria-hidden
                    className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    style={{ color: t.accent }}
                  />
                </Link>
              );
            })}
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)]/60 pt-4">
            <div className="text-xs text-muted-foreground">
              22, 23 e 24 de julho · Instituto Caldeira
            </div>
            <CTAButton variant="primary" size="sm" to="/conect-ai">
              Ver Conect.AI
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
