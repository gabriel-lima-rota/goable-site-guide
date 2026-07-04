import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Section } from "@/components/goable/AppShell";
import { HeroEventStage } from "@/components/goable/HeroEventStage";
import { SectionHeader } from "@/components/goable/SectionHeader";
import { SolutionCards } from "@/components/goable/SolutionCards";
import { PhotoFeature } from "@/components/goable/PhotoFeature";
import { MethodTimeline } from "@/components/goable/MethodTimeline";
import { PartnerLogos } from "@/components/goable/PartnerLogos";
import { TicketSection } from "@/components/goable/TicketSection";
import { FAQAccordion } from "@/components/goable/FAQAccordion";
import { CTAButton } from "@/components/goable/CTAButton";
import { Slot } from "@/components/goable/Slot";
import { PainPointGrid } from "@/components/goable/PainPointGrid";
import { eventData } from "@/lib/goable/events";
import { Glass3D } from "@/components/goable/Glass3D";

export const Route = createFileRoute("/conect-ai/gov")({
  head: () => ({
    meta: [
      { title: "Conect.AI GOV | 23/07/2026" },
      { name: "description", content: "IA aplicada à gestão pública. Realização Goable AI." },
      { property: "og:title", content: "Conect.AI GOV" },
      { property: "og:description", content: "23/07/2026 · Instituto Caldeira · Porto Alegre" },
    ],
  }),
  component: GovPage,
});

function GovPage() {
  const e = eventData.gov;
  return (
    <AppShell>
      <HeroEventStage
        theme="gov"
        eyebrow="Conect.AI GOV"
        h1Slot="COPY_GOV_HERO_H1"
        subSlot="COPY_GOV_HERO_SUB"
        date={e.date}
        location={e.location}
        price={e.price}
        ctaLabel="Garantir meu ingresso"
        ctaSecondaryLabel="Falar com a equipe"
        panelTitle="Gestão pública com IA"
        panelSubtitle="Correalização Camila Rodrigues Advocacia"
        centerBadge="Leitura jurídica e governança"
        nodes={[
          { key: "cidadao", label: "Atendimento ao cidadão", metric: "Canais · resposta" },
          { key: "compras", label: "Compras", metric: "Editais · análise" },
          { key: "protocolos", label: "Protocolos", metric: "Fluxo · prazos" },
          { key: "dados", label: "Dados", metric: "Indicadores · painel" },
        ]}
      />

      <Section bg="white">
        <SectionHeader eyebrow="Por que GOV" titleSlot="COPY_GOV_REASON_TITLE" />
        <div className="mt-12">
          <PainPointGrid
            items={[
              { slotProblem: "COPY_GOV_REASON_1_Q", slotAnswer: "COPY_GOV_REASON_1_A" },
              { slotProblem: "COPY_GOV_REASON_2_Q", slotAnswer: "COPY_GOV_REASON_2_A" },
              { slotProblem: "COPY_GOV_REASON_3_Q", slotAnswer: "COPY_GOV_REASON_3_A" },
              { slotProblem: "COPY_GOV_REASON_4_Q", slotAnswer: "COPY_GOV_REASON_4_A" },
            ]}
          />
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Para quem é" titleSlot="COPY_GOV_AUDIENCE_TITLE" />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="rounded-lg border border-[var(--border)] bg-white p-6">
              <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--gov-green)]">Público</div>
              <Slot id={`COPY_GOV_AUDIENCE_${i}_LABEL`} as="div" className="mt-2 text-lg font-semibold text-[var(--goable-black)]" />
              <Slot id={`COPY_GOV_AUDIENCE_${i}_LINE`} as="p" className="mt-2 text-sm text-muted-foreground" />
            </div>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <SectionHeader eyebrow="Tecnologia com leitura jurídica" titleSlot="COPY_GOV_COREALIZATION_TITLE" />
        <div className="relative">
          <Glass3D
            variant="shell"
            size={220}
            opacity={0.32}
            tint="gov"
            rotate={4}
            className="pointer-events-none absolute -top-8 right-0 hidden md:block"
          />
          <Slot id="COPY_GOV_COREALIZATION_BODY" as="p" className="mt-6 max-w-3xl text-base text-muted-foreground" />
        </div>
        <div className="mt-12">
          <PartnerLogos
            groups={[
              { label: "Realização", names: ["Goable AI"] },
              { label: "Correalização", names: ["Camila Rodrigues Advocacia"] },
            ]}
          />
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="O que será trabalhado" titleSlot="COPY_GOV_TOPICS_TITLE" />
        <div className="mt-12">
          <SolutionCards
            tone="gov"
            slotPrefix="COPY_GOV_TOPIC"
            items={[
              { key: "BUY", label: "Compras" },
              { key: "CIT", label: "Atendimento ao cidadão" },
              { key: "PROC", label: "Processos" },
              { key: "DATA", label: "Dados" },
              { key: "TRAIN", label: "Capacitação" },
              { key: "GOV", label: "Governança" },
            ]}
          />
        </div>
      </Section>

      <Section bg="white">
        <SectionHeader eyebrow="Experiência do dia" titleSlot="COPY_GOV_DAY_TITLE" />
        <div className="mt-12">
          <MethodTimeline tone="gov" steps={["Diagnóstico", "Aplicações", "Governança", "Execução"]} />
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Local e prova" titleSlot="COPY_GOV_PROOF_TITLE" />
        <div className="mt-12">
          <PhotoFeature assetName="COMBO_STUDIOS-325.jpg" caption="Instituto Caldeira, Porto Alegre" tone="gov" ratio="21/9" />
        </div>
      </Section>

      <Section bg="white">
        <TicketSection
          titleSlot="COPY_GOV_TICKET_TITLE"
          price={e.price}
          ctaVariant="gov"
          ctaLabel="Garantir meu ingresso"
          includes={[
            "Participação",
            "Aplicações para gestão pública",
            "Leitura jurídica",
            "Governança e dados",
            "Networking",
            "Certificado",
          ]}
        />
      </Section>

      <Section>
        <SectionHeader eyebrow="FAQ" titleSlot="COPY_GOV_FAQ_TITLE" />
        <div className="mt-12">
          <FAQAccordion prefix="COPY_GOV_FAQ" count={3} />
        </div>
      </Section>

      <Section bg="dark">
        <div className="text-center max-w-2xl mx-auto">
          <Slot id="COPY_GOV_FINAL_CTA_TITLE" as="h2" className="goable-section-title text-[var(--soft-white)]" />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton variant="gov" size="lg">Garantir meu ingresso</CTAButton>
            <CTAButton variant="secondary" size="lg">Falar com a equipe</CTAButton>
          </div>
        </div>
      </Section>
    </AppShell>
  );
}
