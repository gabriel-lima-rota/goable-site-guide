import { createFileRoute } from "@tanstack/react-router";
import { AppShell, Section } from "@/components/goable/AppShell";
import { SectionHeader } from "@/components/goable/SectionHeader";
import { ContactChatSimulation, type ContactDraft } from "@/components/goable/ContactChatSimulation";
import { LeadCRMPanel } from "@/components/goable/LeadCRMPanel";
import { Slot } from "@/components/goable/Slot";
import { AnimatedMeshBackground } from "@/components/goable/AnimatedMeshBackground";
import { Glass3D } from "@/components/goable/Glass3D";
import { glass, photos } from "@/lib/goable/assets";
import { useState } from "react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Goable AI" },
      { name: "description", content: "Conte sua dor. O time Goable retorna com clareza." },
      { property: "og:title", content: "Contato | Goable AI" },
      { property: "og:description", content: "Conte sua dor. O time Goable retorna com clareza." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  const [draft, setDraft] = useState<ContactDraft>({
    nome: "",
    empresa: "",
    whatsapp: "",
    interesse: "",
  });
  const [hoverInterest, setHoverInterest] = useState<string | null>(null);
  const previewInterest = draft.interesse || hoverInterest || "";
  const status: "aguardando" | "recebido" =
    draft.nome || draft.empresa || draft.whatsapp || previewInterest ? "recebido" : "aguardando";

  return (
    <AppShell>
      <section className="relative overflow-hidden">
        <AnimatedMeshBackground intensity="whisper" />
        <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-36">
          {/* Master glass stage */}
          <div className="relative">
            <Glass3D
              variant="drop"
              size={260}
              opacity={0.28}
              rotate={12}
              className="pointer-events-none absolute -right-6 -top-16 hidden lg:block"
            />
            <Glass3D
              variant="ring"
              size={200}
              opacity={0.22}
              rotate={-8}
              className="pointer-events-none absolute -left-10 bottom-8 hidden lg:block"
            />

            <div className="relative overflow-hidden rounded-[var(--radius-card-lg)] glass-strong lit-top-border">
              {/* Ambient textures */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `url(${glass.conectWave})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center right",
                  mixBlendMode: "multiply",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage: `url(${photos.palco})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.05,
                  mixBlendMode: "luminosity",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -top-32 right-1/3 h-96 w-96 rounded-full opacity-40 blur-3xl"
                style={{ background: "var(--gradient-violet-blue)" }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full opacity-30 blur-3xl"
                style={{ background: "var(--gradient-magenta-violet)" }}
              />

              <div className="relative grid gap-10 p-6 md:p-10 lg:grid-cols-[0.9fr_1.25fr] lg:gap-12 lg:p-12">
                {/* Left column: headline + CRM preview */}
                <div className="flex flex-col">
                  <div className="fade-up inline-flex items-center gap-2 self-start text-xs uppercase tracking-[0.24em] text-[var(--strategic-violet)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--strategic-violet)] pulse-dot" />
                    Contato
                  </div>
                  <Slot
                    id="COPY_CONTACT_HERO_H1"
                    as="h1"
                    className="goable-page-title fade-up-delay-1 mt-5 text-[var(--goable-black)]"
                  />
                  <Slot
                    id="COPY_CONTACT_HERO_SUB"
                    as="p"
                    className="fade-up-delay-2 mt-5 max-w-md text-base md:text-lg text-muted-foreground"
                  />

                  <div className="fade-up-delay-3 mt-8">
                    <CrmPreview
                      status={status}
                      nome={draft.nome}
                      empresa={draft.empresa}
                      whatsapp={draft.whatsapp}
                      interesse={previewInterest}
                      interesseGhost={!draft.interesse && Boolean(hoverInterest)}
                    />
                    <div className="mt-3 text-[11px] text-muted-foreground">
                      <Slot id="COPY_CONTACT_SIMULATION_NOTE" />
                    </div>
                  </div>
                </div>

                {/* Right column: chat as protagonist */}
                <div className="fade-up-delay-2 relative">
                  <ContactChatSimulation
                    origin="/contato"
                    draft={draft}
                    onDraftChange={setDraft}
                    onInterestHover={setHoverInterest}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader eyebrow="Administração" titleSlot="COPY_CONTACT_CRM_TITLE" subSlot="COPY_CONTACT_CRM_SUBTITLE" />
        <div className="mt-8">
          <LeadCRMPanel />
        </div>
      </Section>
    </AppShell>
  );
}

function CrmPreview({
  status,
  nome,
  empresa,
  whatsapp,
  interesse,
  interesseGhost,
}: {
  status: "aguardando" | "recebido";
  nome: string;
  empresa: string;
  whatsapp: string;
  interesse: string;
  interesseGhost: boolean;
}) {
  const isRecebido = status === "recebido";
  return (
    <div className="relative rounded-[var(--radius-card-lg)] glass-strong lit-top-border p-5">
      <div className="flex items-center justify-between">
        <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--strategic-violet)]">
          CRM Goable
        </div>
        <div
          className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] transition-colors ${
            isRecebido
              ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700"
              : "border-[var(--border)] bg-white/70 text-muted-foreground"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isRecebido ? "bg-emerald-500 pulse-dot" : "bg-muted-foreground/50"
            }`}
          />
          {isRecebido ? "Recebido" : "Aguardando"}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <CrmField label="Nome" value={nome} />
        <CrmField label="Empresa" value={empresa} />
        <CrmField label="WhatsApp" value={whatsapp} />
        <CrmField label="Interesse" value={interesse} ghost={interesseGhost} />
      </div>
    </div>
  );
}

function CrmField({
  label,
  value,
  ghost = false,
}: {
  label: string;
  value: string;
  ghost?: boolean;
}) {
  const filled = Boolean(value);
  return (
    <div className="rounded-lg border border-[var(--border)] bg-white/70 p-3 transition-colors">
      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </div>
      <div
        className={`mt-1 truncate text-xs ${
          filled
            ? ghost
              ? "text-[var(--strategic-violet)]/70 italic"
              : "text-[var(--goable-black)] font-medium"
            : "italic text-muted-foreground/70"
        }`}
      >
        {filled ? value : "aguardando"}
      </div>
    </div>
  );
}
