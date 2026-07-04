import { Slot } from "./Slot";
import { SpecialistCard } from "./SpecialistCard";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { photos } from "@/lib/goable/assets";

const chips = [
  "IA aplicada a negócios",
  "Educação e mercado financeiro",
  "Visão estratégica",
  "Execução prática",
];

export function SpecialistBand() {
  return (
    <div className="space-y-8">
      {/* Edgar leadership panel */}
      <div className="relative">
        <div
          aria-hidden
          className="absolute -inset-4 rounded-[3rem] opacity-60 glass-shimmer"
          style={{
            background:
              "radial-gradient(ellipse at 20% 40%, rgba(109,77,255,0.28), transparent 65%)",
            filter: "blur(30px)",
          }}
        />
        <div className="relative glass-strong lit-top-border noise-overlay rounded-[var(--radius-card-lg)] p-5 md:p-6">
          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="relative">
              <PhotoPlaceholder
                tone="violet"
                ratio="4/5"
                overlayLabel="Liderança"
                src={photos.edgarSmile}
                parallax
                reveal
                compact
              />

            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--deep-violet)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--strategic-violet)] pulse-dot" />
                Liderança Goable
              </div>
              <Slot
                id="COPY_SPECIALIST_EDGAR_TITLE"
                as="h3"
                className="mt-4 text-2xl md:text-3xl font-semibold leading-tight tracking-normal text-[var(--goable-black)]"
              />
              <div className="mt-4 max-w-xl">
                <Slot
                  id="COPY_SPECIALIST_EDGAR_BODY"
                  as="p"
                  className="text-[15px] text-muted-foreground leading-relaxed"
                />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-[var(--border)] bg-white/70 px-3 py-1 text-[11px] font-medium text-[var(--goable-black)]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specialist cards by area */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <SpecialistCard
          slotName="COPY_SPECIALIST_1_NAME"
          slotArea="Marketing e Vendas"
          slotLine="COPY_SPECIALIST_1_LINE"
          accent="#FF3EA5"
        />
        <SpecialistCard
          slotName="COPY_SPECIALIST_2_NAME"
          slotArea="People e Cultura"
          slotLine="COPY_SPECIALIST_2_LINE"
          accent="#6D4DFF"
        />
        <SpecialistCard
          slotName="COPY_SPECIALIST_3_NAME"
          slotArea="Financeiro e FP&A"
          slotLine="COPY_SPECIALIST_3_LINE"
          accent="#244EAE"
        />
        <SpecialistCard
          slotName="COPY_SPECIALIST_4_NAME"
          slotArea="Gestão e Processos"
          slotLine="COPY_SPECIALIST_4_LINE"
          accent="#38E6E6"
        />
      </div>
    </div>
  );
}
