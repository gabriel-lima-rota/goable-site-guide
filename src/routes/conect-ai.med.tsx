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
import { SystemMockup } from "@/components/goable/SystemMockup";
import { eventData } from "@/lib/goable/events";
import { Glass3D } from "@/components/goable/Glass3D";

export const Route = createFileRoute("/conect-ai/med")({
  head: () => ({
    meta: [
      { title: "Conect.AI MED | 22/07/2026" },
      { name: "description", content: "IA aplicada à saúde. Realização Faculdade Unimed." },
      { property: "og:title", content: "Conect.AI MED" },
      { property: "og:description", content: "22/07/2026 · Instituto Caldeira · Porto Alegre" },
    ],
  }),
  component: MedPage,
});

function MedPage() {
  const e = eventData.med;
  return (
    <AppShell>
      <HeroEventStage
        theme="med"
        eyebrow="Conect.AI MED"
        h1Slot="COPY_MED_HERO_H1"
        subSlot="COPY_MED_HERO_SUB"
        date={e.date}
        time={e.time}
        location={e.location}
        price={e.price}
        ctaLabel="Falar com a equipe"
        panelTitle="Fluxo médico inteligente"
        panelSubtitle="Rotina do consultório com IA responsável"
        centerBadge="Realização Faculdade Unimed"
        nodes={[
          { key: "atend", label: "Atendimento", metric: "Escuta · triagem" },
          { key: "agenda", label: "Agenda", metric: "Otimização · retorno" },
          { key: "prontuario", label: "Prontuário", metric: "Notas assistidas" },
          { key: "gestao", label: "Gestão", metric: "Convênios · dados" },
        ]}
      />

      <Section bg="med">
        <SectionHeader eyebrow="Por que agora" titleSlot="COPY_MED_REASON_TITLE" />
        <div className="mt-12">
          <PainPointGrid
            items={[
              { slotProblem: "COPY_MED_REASON_1_Q", slotAnswer: "COPY_MED_REASON_1_A" },
              { slotProblem: "COPY_MED_REASON_2_Q", slotAnswer: "COPY_MED_REASON_2_A" },
              { slotProblem: "COPY_MED_REASON_3_Q", slotAnswer: "COPY_MED_REASON_3_A" },
              { slotProblem: "COPY_MED_REASON_4_Q", slotAnswer: "COPY_MED_REASON_4_A" },
            ]}
          />
        </div>
      </Section>

      <Section bg="white">
        <SectionHeader eyebrow="Você vai entender" titleSlot="COPY_MED_LEARN_TITLE" />
        <div className="mt-12">
          <SolutionCards
            tone="med"
            slotPrefix="COPY_MED_SYSTEM"
            items={[
              { key: "CLINIC", label: "Consultório" },
              { key: "PLANS", label: "Planos" },
              { key: "MGMT", label: "Gestão" },
              { key: "REP", label: "Reputação" },
              { key: "SEC", label: "Segurança" },
              { key: "ASSIST", label: "Assistente personalizado" },
            ]}
          />
        </div>
      </Section>

      <Section bg="med">
        <SectionHeader eyebrow="Prática com responsabilidade" titleSlot="COPY_MED_PRACTICE_TITLE" />
        <div className="relative mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Glass3D
            variant="ring"
            size={260}
            opacity={0.35}
            tint="med"
            rotate={-8}
            className="pointer-events-none absolute -top-16 right-0 hidden md:block"
          />
          <PhotoFeature assetName="COMBO_STUDIOS-259.jpg" caption="Palestrante em cena" tone="med" ratio="16/9" />
          <SystemMockup
            title="Assistente clínico conceitual"
            tone="med"
            modules={[
              { key: "agenda", label: "Agenda", status: "Otimizada", metric: "24" },
              { key: "notas", label: "Notas clínicas", status: "Assistidas", metric: "9" },
              { key: "planos", label: "Convênios", status: "Auditoria", metric: "3" },
              { key: "pac", label: "Pacientes", status: "Retorno agendado", metric: "12" },
            ]}
          />
        </div>
      </Section>

      <Section bg="white">
        <SectionHeader eyebrow="Segurança, ética e LGPD" titleSlot="COPY_MED_SECURITY_TITLE" />
      </Section>

      <Section bg="med">
        <SectionHeader eyebrow="Experiência do dia" titleSlot="COPY_MED_DAY_TITLE" />
        <div className="mt-12">
          <MethodTimeline tone="med" steps={["Contexto médico", "Aplicações", "Prática guiada", "Próximo passo"]} />
        </div>
      </Section>

      <Section bg="white">
        <SectionHeader eyebrow="Realização e apoios" titleSlot="COPY_MED_PARTNERS_TITLE" />
        <div className="mt-12">
          <PartnerLogos
            groups={[
              { label: "Realização", names: ["Faculdade Unimed"] },
              { label: "Apoio técnico", names: ["Goable AI"] },
              { label: "Apoio institucional", names: ["Unimed Porto Alegre"] },
            ]}
          />
        </div>
      </Section>

      <Section bg="med">
        <TicketSection
          titleSlot="COPY_MED_TICKET_TITLE"
          price={e.price}
          ctaVariant="med"
          ctaLabel="Falar com a equipe"
          includes={[
            "Participação",
            "Prática para médicos",
            "Sistemas aplicados à rotina médica",
            "Diagnóstico",
            "LGPD e ética",
            "Networking",
            "Certificado",
          ]}
        />
      </Section>

      <Section bg="white">
        <SectionHeader eyebrow="FAQ" titleSlot="COPY_MED_FAQ_TITLE" />
        <div className="mt-12">
          <FAQAccordion prefix="COPY_MED_FAQ" count={3} />
        </div>
      </Section>

      <Section bg="dark">
        <div className="text-center max-w-2xl mx-auto">
          <Slot id="COPY_MED_FINAL_CTA_TITLE" as="h2" className="goable-section-title text-[var(--soft-white)]" />
          <div className="mt-8">
            <CTAButton variant="med" size="lg">Falar com a equipe</CTAButton>
          </div>
        </div>
      </Section>
    </AppShell>
  );
}
