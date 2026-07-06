import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Section } from "@/components/goable/AppShell";
import { HeroEventStage } from "@/components/goable/HeroEventStage";
import { SectionHeader } from "@/components/goable/SectionHeader";
import { PainPointGrid } from "@/components/goable/PainPointGrid";
import { SolutionCards } from "@/components/goable/SolutionCards";
import { PhotoFeature } from "@/components/goable/PhotoFeature";
import { SpecialistBand } from "@/components/goable/SpecialistBand";
import { MethodTimeline } from "@/components/goable/MethodTimeline";
import { TicketSection } from "@/components/goable/TicketSection";
import { FAQAccordion } from "@/components/goable/FAQAccordion";
import { CTAButton } from "@/components/goable/CTAButton";
import { Slot } from "@/components/goable/Slot";
import { SystemMockup } from "@/components/goable/SystemMockup";
import { eventData } from "@/lib/goable/events";
import { Glass3D } from "@/components/goable/Glass3D";

export const Route = createFileRoute("/conect-ai/business")({
  head: () => ({
    meta: [
      { title: "Conect.AI Empresários | 23/07/2026" },
      { name: "description", content: "IA aplicada para empresários. Instituto Caldeira, Porto Alegre." },
      { property: "og:title", content: "Conect.AI Empresários" },
      { property: "og:description", content: "23/07/2026 · Instituto Caldeira · Porto Alegre" },
    ],
  }),
  component: BusinessPage,
});

function BusinessPage() {
  const e = eventData.business;
  return (
    <AppShell>
      <HeroEventStage
        theme="business"
        eyebrow="Conect.AI Empresários"
        h1Slot="COPY_BUSINESS_HERO_H1"
        subSlot="COPY_BUSINESS_HERO_SUB"
        date={e.date}
        location={e.location}
        price={e.price}
        ctaLabel="Garantir meu ingresso"
        ctaSecondaryLabel="Falar com a equipe"
        panelTitle="Diagnóstico empresarial"
        panelSubtitle="Mapa de oportunidades por área da empresa"
        centerBadge="IA aplicada na prática"
        nodes={[
          { key: "vendas", label: "Vendas", metric: "Ciclo · funil · CRM" },
          { key: "atendimento", label: "Atendimento", metric: "Suporte · resposta" },
          { key: "financeiro", label: "Financeiro", metric: "Fluxo · previsão" },
          { key: "operacao", label: "Operação", metric: "Processos · dados" },
        ]}
      />

      <Section bg="white">
        <SectionHeader eyebrow="Problema central" titleSlot="COPY_BUSINESS_PROBLEM_TITLE" />
        <div className="mt-12">
          <PainPointGrid
            items={[
              { slotProblem: "COPY_BUSINESS_PROBLEM_1_Q", slotAnswer: "COPY_BUSINESS_PROBLEM_1_A" },
              { slotProblem: "COPY_BUSINESS_PROBLEM_2_Q", slotAnswer: "COPY_BUSINESS_PROBLEM_2_A" },
              { slotProblem: "COPY_BUSINESS_PROBLEM_3_Q", slotAnswer: "COPY_BUSINESS_PROBLEM_3_A" },
              { slotProblem: "COPY_BUSINESS_PROBLEM_4_Q", slotAnswer: "COPY_BUSINESS_PROBLEM_4_A" },
            ]}
          />
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Você vai entender" titleSlot="COPY_BUSINESS_LEARN_TITLE" />
        <div className="mt-12">
          <SolutionCards
            items={[
              { key: "POSSIBLE", label: "Possibilidades reais" },
              { key: "PRACTICE", label: "Prática guiada" },
              { key: "EXPERT", label: "Especialistas na mesa" },
              { key: "DIAG", label: "Diagnóstico" },
            ]}
            slotPrefix="COPY_BUSINESS_LEARN"
          />
        </div>
      </Section>

      <Section bg="white">
        <SectionHeader eyebrow="Aprender na prática" titleSlot="COPY_BUSINESS_PRACTICE_TITLE" />
        <div className="mt-12 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
          <PhotoFeature assetName="COMBO_STUDIOS-652.jpg" caption="Workshop AI Sprint em execução" ratio="16/10" />
          <div className="grid gap-4">
            <PhotoFeature assetName="COMBO_STUDIOS-325.jpg" caption="Público em diagnóstico" ratio="16/10" tone="dark" />
            <PhotoFeature assetName="COMBO_STUDIOS-558.jpg" caption="Apresentação prática" ratio="16/10" />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Especialistas" titleSlot="COPY_BUSINESS_SPECIALISTS_TITLE" />
        <div className="mt-12">
          <SpecialistBand />
        </div>
      </Section>

      <Section bg="white">
        <SectionHeader eyebrow="Diagnóstico" titleSlot="COPY_BUSINESS_DIAGNOSIS_TITLE" />
        <div className="relative mt-12">
          <Glass3D
            variant="loop"
            size={180}
            opacity={0.75}
            rotate={12}
            className="pointer-events-none absolute -top-10 right-2 hidden md:block"
          />
          <SystemMockup
            title="Diagnóstico executivo"
            tone="violet"
            modules={[
              { key: "map", label: "Mapa de oportunidades", status: "Escaneando processos", metric: "12" },
              { key: "score", label: "Score de prontidão", status: "Métricas comparadas", metric: "68" },
              { key: "plan", label: "Plano tático", status: "Rota gerada", metric: "3" },
              { key: "team", label: "Time envolvido", status: "Papéis definidos", metric: "5" },
            ]}
          />
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Experiência do dia" titleSlot="COPY_BUSINESS_DAY_TITLE" />
        <div className="mt-12">
          <MethodTimeline steps={["Contexto", "Possibilidades", "Especialistas", "Construção"]} />
        </div>
      </Section>

      <Section bg="white">
        <TicketSection
          titleSlot="COPY_BUSINESS_TICKET_TITLE"
          price={e.price}
          ctaVariant="event"
          ctaLabel="Garantir meu ingresso"
          includes={[
            "Participação",
            "Dinâmicas práticas",
            "Especialistas",
            "Diagnóstico inicial",
            "Mapa de possibilidades",
            "Networking",
            "Certificado",
          ]}
        />
      </Section>

      <Section>
        <SectionHeader eyebrow="FAQ" titleSlot="COPY_BUSINESS_FAQ_TITLE" />
        <div className="mt-12">
          <FAQAccordion prefix="COPY_BUSINESS_FAQ" count={3} />
        </div>
      </Section>

      <Section bg="dark">
        <div className="text-center max-w-2xl mx-auto">
          <Slot id="COPY_BUSINESS_FINAL_CTA_TITLE" as="h2" className="goable-section-title text-[var(--soft-white)]" />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton variant="event" size="lg">Garantir meu ingresso</CTAButton>
            <CTAButton variant="secondary" size="lg">Falar com a equipe</CTAButton>
          </div>
        </div>
      </Section>
    </AppShell>
  );
}
