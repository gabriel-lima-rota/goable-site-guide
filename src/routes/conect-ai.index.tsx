import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Section } from "@/components/goable/AppShell";
import { HeroEditorial } from "@/components/goable/HeroEditorial";
import { SectionHeader } from "@/components/goable/SectionHeader";
import { PainPointGrid } from "@/components/goable/PainPointGrid";
import { MethodTimeline } from "@/components/goable/MethodTimeline";
import { PhotoGalleryEditorial } from "@/components/goable/PhotoGalleryEditorial";
import { EditionCards } from "@/components/goable/EditionCards";
import { CTAButton } from "@/components/goable/CTAButton";
import { Slot } from "@/components/goable/Slot";
import { AnimatedMeshBackground } from "@/components/goable/AnimatedMeshBackground";
import { Glass3D } from "@/components/goable/Glass3D";
import { photos, glass } from "@/lib/goable/assets";
import { eventData, type EventKey } from "@/lib/goable/events";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/conect-ai/")({
  head: () => ({
    meta: [
      { title: "Conect.AI | Goable" },
      { name: "description", content: "IA aplicada em problemas reais. Empresários, MED e GOV." },
      { property: "og:title", content: "Conect.AI | Goable" },
      { property: "og:description", content: "IA aplicada em problemas reais." },
    ],
  }),
  component: ConectAiIndex,
});

function ConectAiIndex() {
  return (
    <AppShell>
      <section className="relative overflow-hidden">
        <AnimatedMeshBackground intensity="whisper" />
        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-36 md:pb-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.25fr] lg:items-center">
            <div>
              <div className="fade-up inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[var(--strategic-violet)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--strategic-violet)] pulse-dot" />
                Conect.AI
              </div>
              <Slot id="COPY_CONNECT_HERO_H1" as="h1" className="goable-page-title fade-up-delay-1 mt-5 text-[var(--goable-black)]" />
              <div className="mt-7 max-w-lg fade-up-delay-2">
                <Slot id="COPY_CONNECT_HERO_SUB" as="p" className="text-lg text-muted-foreground" />
              </div>
              <div className="mt-3 max-w-lg fade-up-delay-2">
                <Slot id="COPY_CONNECT_HERO_MICRO" as="p" className="text-sm text-muted-foreground" />
              </div>
              <div className="mt-9 flex flex-wrap gap-3 fade-up-delay-3">
                <CTAButton variant="primary" size="lg">Falar com a Goable</CTAButton>
                <CTAButton variant="ghost" size="lg" to="/conect-ai/business">Ver edições</CTAButton>
              </div>
              <div className="mt-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground fade-up-delay-3">
                <span className="h-px w-8 bg-[var(--border)]" />
                22, 23 e 24 de julho · Instituto Caldeira
              </div>
            </div>

            <div className="fade-up-delay-2 relative">
              <ConnectHeroStage />
            </div>
          </div>
        </div>
      </section>

      <Section bg="white">
        <SectionHeader eyebrow="Por que existe" titleSlot="COPY_CONNECT_REASON_TITLE" />
        <div className="mt-12">
          <PainPointGrid
            items={[
              { slotProblem: "COPY_CONNECT_REASON_1_Q", slotAnswer: "COPY_CONNECT_REASON_1_A" },
              { slotProblem: "COPY_CONNECT_REASON_2_Q", slotAnswer: "COPY_CONNECT_REASON_2_A" },
              { slotProblem: "COPY_CONNECT_REASON_3_Q", slotAnswer: "COPY_CONNECT_REASON_3_A" },
              { slotProblem: "COPY_CONNECT_REASON_4_Q", slotAnswer: "COPY_CONNECT_REASON_4_A" },
            ]}
          />
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Para quem é" titleSlot="COPY_CONNECT_AUDIENCE_TITLE" />
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {[
            { name: "Empresários", slot: "COPY_CONNECT_AUDIENCE_1_LINE" },
            { name: "Gestão pública", slot: "COPY_CONNECT_AUDIENCE_2_LINE" },
            { name: "Saúde", slot: "COPY_CONNECT_AUDIENCE_3_LINE" },
            { name: "Operações", slot: "COPY_CONNECT_AUDIENCE_4_LINE" },
          ].map((a) => (
            <div key={a.name} className="rounded-lg border border-[var(--border)] bg-white p-6">
              <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--strategic-violet)]">Público</div>
              <div className="mt-2 text-lg font-semibold text-[var(--goable-black)]">{a.name}</div>
              <Slot id={a.slot} as="p" className="mt-2 text-sm text-muted-foreground" />
            </div>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <SectionHeader eyebrow="Experiência" titleSlot="COPY_CONNECT_EXPERIENCE_TITLE" />
        <div className="mt-12">
          <MethodTimeline
            steps={[
              { title: "Dores reais", desc: "O ponto de partida é o problema que trava a operação." },
              { title: "Leitura estratégica", desc: "Especialistas mostram onde a IA faz sentido e onde não faz." },
              { title: "Construção ao vivo", desc: "Você vê possibilidades reais tomando forma." },
              { title: "Próximo passo", desc: "Sua empresa sai com direção para diagnóstico e implementação." },
            ]}
          />
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Prova visual" titleSlot="COPY_CONNECT_PROOF_TITLE" />
        {/* Transition: single Goable glass object bridging hero energy into the gallery */}
        <div className="relative mt-12">
          <Glass3D
            variant="arch"
            size={340}
            opacity={0.55}
            rotate={-6}
            className="pointer-events-none absolute -top-24 right-0 hidden md:block"
          />
          <PhotoGalleryEditorial variant="editorial" />
        </div>
      </Section>

      <Section bg="white">
        <SectionHeader eyebrow="Edições" titleSlot="COPY_CONNECT_EDITIONS_TITLE" />
        <div className="mt-12">
          <EditionCards />
        </div>
      </Section>

      <Section bg="dark">
        <div className="text-center max-w-2xl mx-auto">
          <Slot id="COPY_CONNECT_FINAL_CTA_TITLE" as="h2" className="goable-section-title text-[var(--soft-white)]" />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton variant="primary" size="lg">Falar com a Goable</CTAButton>
            <CTAButton variant="ghost" size="lg" to="/conect-ai/business">Ver edições</CTAButton>
          </div>
        </div>
      </Section>
    </AppShell>
  );
}

const heroEditions: EventKey[] = ["gov", "med", "business"];
const editionAccent: Record<EventKey, string> = {
  business: "#6D4DFF",
  med: "#00995D",
  gov: "#244EAE",
};

function ConnectHeroStage() {
  return (
    <div className="relative">
      <Glass3D
        variant="drop"
        size={220}
        opacity={0.32}
        rotate={12}
        className="pointer-events-none absolute -right-6 -top-10 hidden md:block"
      />
      <Glass3D
        variant="ring"
        size={160}
        opacity={0.24}
        rotate={-10}
        className="pointer-events-none absolute -left-6 bottom-10 hidden md:block"
      />

      {/* Editorial photo, protagonist */}
      <div className="relative overflow-hidden rounded-[var(--radius-card-lg)] shadow-[0_50px_120px_-50px_rgba(7,10,18,0.45)]">
        <img
          src={photos.palco}
          alt="Palco Conect.AI no Instituto Caldeira"
          className="h-[520px] w-full object-cover md:h-[560px] lg:h-[600px]"
          style={{ animation: "goable-parallax-drift 22s ease-in-out infinite alternate" }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,10,18,0.10) 0%, rgba(7,10,18,0.65) 100%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url(${glass.conectWave})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "screen",
          }}
        />

        {/* Location cue */}
        <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-white pulse-dot" />
          Instituto Caldeira · Porto Alegre
        </div>

        {/* Edition dock overlay */}
        <div className="absolute inset-x-4 bottom-4 md:inset-x-5 md:bottom-5">
          <div className="glass-strong lit-top-border rounded-[var(--radius-card-lg)] p-4 md:p-5">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--deep-violet)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--strategic-violet)] pulse-dot" />
                Conect.AI 2026
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                três edições
              </div>
            </div>
            <div className="mt-3 grid gap-2 md:grid-cols-3">
              {heroEditions.map((k) => {
                const e = eventData[k];
                const accent = editionAccent[k];
                return (
                  <Link
                    key={k}
                    to={e.path}
                    className="group relative flex items-center justify-between gap-3 rounded-lg border border-[var(--border)] bg-white/85 px-3 py-2.5 card-lift"
                  >
                    <div className="min-w-0">
                      <div
                        className="text-[10px] font-medium uppercase tracking-[0.22em]"
                        style={{ color: accent }}
                      >
                        {k === "business" ? "Empresários" : k.toUpperCase()}
                      </div>
                      <div className="mt-0.5 text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground">
                        {e.date}
                      </div>
                    </div>
                    <span
                      aria-hidden
                      className="text-lg transition-transform group-hover:translate-x-0.5"
                      style={{ color: accent }}
                    >
                      →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
