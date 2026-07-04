import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Section } from "@/components/goable/AppShell";
import { HeroEditorial } from "@/components/goable/HeroEditorial";
import { SectionHeader } from "@/components/goable/SectionHeader";
import { MethodTimeline } from "@/components/goable/MethodTimeline";
import { SpecialistBand } from "@/components/goable/SpecialistBand";
import { PhotoFeature } from "@/components/goable/PhotoFeature";
import { SolutionCards } from "@/components/goable/SolutionCards";
import { CTAButton } from "@/components/goable/CTAButton";
import { Slot } from "@/components/goable/Slot";
import { EventPhotoSlot } from "@/components/goable/EventPhotoSlot";
import { photos, glass } from "@/lib/goable/assets";
import { Glass3D } from "@/components/goable/Glass3D";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre | Goable AI" },
      { name: "description", content: "Método, liderança e execução real da Goable AI." },
      { property: "og:title", content: "Sobre | Goable AI" },
      { property: "og:description", content: "Método, liderança e execução real da Goable AI." },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <AppShell>
      <HeroEditorial
        eyebrow="Sobre a Goable"
        h1Slot="COPY_ABOUT_HERO_H1"
        subSlot="COPY_ABOUT_HERO_SUB"
        primaryLabel="Contato"
        visual={<AboutHeroVisual />}
      />

      <Section bg="white">
        <SectionHeader eyebrow="Tese" titleSlot="COPY_ABOUT_THESIS_TITLE" subSlot="COPY_ABOUT_THESIS_BODY" />
      </Section>

      <Section>
        <SectionHeader eyebrow="Como trabalhamos" titleSlot="COPY_ABOUT_METHOD_TITLE" />
        <div className="mt-12">
          <MethodTimeline
            steps={[
              {
                title: "Dor real",
                desc: "Entendemos o problema como ele acontece, não como aparece no organograma.",
              },
              {
                title: "Processo real",
                desc: "Mapeamos fluxo, dado, rotina, exceção e impacto.",
              },
              {
                title: "Sistema certo",
                desc: "Desenhamos uma solução para a empresa, não para uma apresentação.",
              },
              {
                title: "Execução prática",
                desc: "Implementamos com clareza, medição e melhoria contínua.",
              },
            ]}
          />
        </div>
      </Section>

      <Section bg="white">
        <SectionHeader eyebrow="Liderança" titleSlot="COPY_ABOUT_EDGAR_TITLE" subSlot="COPY_ABOUT_EDGAR_BODY" />
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <EventPhotoSlot assetName="COMBO_STUDIOS-591.jpg" aspect="4/5" caption="Edgar Abreu · Liderança Goable AI" />
          <div>
            <Slot id="COPY_ABOUT_EDGAR_BIO" as="p" className="text-base text-muted-foreground max-w-lg" />
            <div className="mt-6 flex flex-wrap gap-2">
              {["Estratégia", "IA aplicada", "Educação", "Palco"].map((c) => (
                <span key={c} className="rounded-md border border-[var(--border)] bg-white px-3 py-1.5 text-xs text-[var(--goable-black)]">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Especialistas" titleSlot="COPY_ABOUT_SPECIALISTS_TITLE" />
        <div className="mt-12">
          <SpecialistBand />
        </div>
      </Section>

      <Section bg="white">
        <SectionHeader eyebrow="No palco" titleSlot="COPY_ABOUT_STAGE_TITLE" />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <EventPhotoSlot assetName="COMBO_STUDIOS-644.jpg" aspect="21/9" caption="Goable AI · Palco principal" />
          <div className="grid grid-cols-2 gap-4 self-center">
            {[
              { k: "Edições", v: "COPY_ABOUT_STAT_1" },
              { k: "Participantes", v: "COPY_ABOUT_STAT_2" },
              { k: "Especialistas", v: "COPY_ABOUT_STAT_3" },
              { k: "Setores", v: "COPY_ABOUT_STAT_4" },
            ].map((s) => (
              <div key={s.k} className="rounded-lg border border-[var(--border)] bg-white p-5">
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{s.k}</div>
                <div className="mt-2 text-2xl font-semibold text-[var(--goable-black)]">
                  <Slot id={s.v} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Frentes de atuação" titleSlot="COPY_ABOUT_CASES_TITLE" />
        <div className="mt-12">
          <SolutionCards
            slotPrefix="COPY_ABOUT_CASE"
            items={[
              { key: "EDU", label: "Educação" },
              { key: "HEALTH", label: "Saúde" },
              { key: "FIN", label: "Mercado financeiro" },
              { key: "GOV", label: "Governo" },
            ]}
          />
        </div>
      </Section>

      <Section bg="dark">
        <div className="text-center max-w-2xl mx-auto">
          <Slot id="COPY_ABOUT_FINAL_CTA_TITLE" as="h2" className="text-3xl md:text-5xl font-semibold text-[var(--soft-white)]" />
          <div className="mt-8">
            <CTAButton variant="primary" size="lg">Contato</CTAButton>
          </div>
        </div>
      </Section>
    </AppShell>
  );
}

function AboutHeroVisual() {
  return (
    <div className="relative h-full w-full">
      {/* Editorial photo frame */}
      <div className="absolute inset-0 overflow-hidden rounded-[var(--radius-card-lg)] shadow-[0_40px_100px_-40px_rgba(7,10,18,0.35)]">
        <img
          src={photos.edgarBackdrop}
          alt=""
          className="h-full w-full object-cover"
          style={{ animation: "goable-parallax-drift 22s ease-in-out infinite alternate" }}
        />
        {/* Tint for editorial mood */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,10,18,0.10) 0%, rgba(7,10,18,0.55) 100%)",
          }}
        />
        {/* Subtle conect wave texture as brand imprint */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${glass.conectWave})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "screen",
          }}
        />
      </div>

      {/* Floating 3D glass object (brand imprint, not decoration) */}
      <Glass3D
        variant="ring"
        size={180}
        opacity={0.55}
        rotate={-8}
        className="pointer-events-none absolute -right-8 -top-6 hidden md:block"
      />

      {/* Glass identity panel, connected to the photo */}
      <div className="absolute -bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-[320px]">
        <div className="glass-strong lit-top-border rounded-[var(--radius-card-lg)] p-4 md:p-5">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--deep-violet)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--strategic-violet)] pulse-dot" />
              Goable AI
            </div>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              Desde 2019
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Base
              </div>
              <div className="mt-1 text-sm font-semibold text-[var(--goable-black)]">
                Porto Alegre
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Palco
              </div>
              <div className="mt-1 text-sm font-semibold text-[var(--goable-black)]">
                Instituto Caldeira
              </div>
            </div>
          </div>
          <div className="mt-3 border-t border-[var(--border)]/60 pt-3 text-[12px] leading-relaxed text-muted-foreground">
            Tese da marca: entender antes de aplicar.
          </div>
        </div>
      </div>
    </div>
  );
}
