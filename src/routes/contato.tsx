import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AppShell } from "@/components/goable/AppShell";
import { CTAButton } from "@/components/goable/CTAButton";
import { ContactChatSimulation, type ContactDraft } from "@/components/goable/ContactChatSimulation";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Goable AI" },
      { name: "description", content: "Conte o que trava sua operação. A Goable entende o contexto antes de sugerir qualquer caminho." },
      { property: "og:title", content: "Contato | Goable AI" },
      { property: "og:description", content: "Conte o que trava sua operação. A Goable entende o contexto antes de sugerir qualquer caminho." },
    ],
  }),
  component: ContatoPage,
});

const steps = [
  ["01", "Você conta a dor", "No chat aqui do lado ou no WhatsApp, do jeito que for mais fácil. Sem formulário longo."],
  ["02", "A gente diagnostica", "O time entende área, urgência e contexto da operação. Sem custo e sem compromisso."],
  ["03", "Você recebe um caminho", "Uma leitura clara do que pode virar agente, automação ou sistema na sua empresa."],
];

const channels = [
  { icon: MessageCircle, label: "WhatsApp", line: "Fale com o time comercial: (51) 8545-8646.", cta: "Chamar no WhatsApp", href: "https://wa.me/555185458646?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Goable%20e%20quero%20falar%20sobre%20IA%20na%20minha%20empresa." },
  { icon: Instagram, label: "Instagram", line: "Bastidores, cases e novidades da Goable.", cta: "Seguir no Instagram", href: "https://www.instagram.com/goable.ai/" },
  { icon: Linkedin, label: "LinkedIn", line: "Acompanhe a Goable no mundo corporativo.", cta: "Seguir a Goable", href: "https://www.linkedin.com/company/goable-ai/" },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

function ContatoPage() {
  const ref = useReveal();
  const [draft, setDraft] = useState<ContactDraft>({ nome: "", empresa: "", whatsapp: "", interesse: "" });
  const [hoverInterest, setHoverInterest] = useState<string | null>(null);
  const previewInterest = draft.interesse || hoverInterest || "";
  const filled = Boolean(draft.nome || draft.empresa || draft.whatsapp || previewInterest);

  return (
    <AppShell>
      <div className="sb-page ct-page" ref={ref}>
        {/* HERO com chat */}
        <section className="sb-hero ct-hero" id="conversa">
          <div className="sb-hero-grid" aria-hidden />
          <div className="sb-hero-inner ct-hero-inner">
            <div className="ct-hero-copy" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark">Contato</span>
              <h1 className="sb-hero-h1 ct-hero-h1">
                Comece com <span className="sb-hl">uma conversa</span>. Não com um formulário genérico.
              </h1>
              <p className="sb-hero-sub">
                Conte o que trava sua operação. A Goable entende o contexto antes de sugerir qualquer
                caminho e volta com clareza, não com proposta pronta.
              </p>

              <div className="ct-crm" data-reveal>
                <div className="ct-crm-top">
                  <span className="ct-crm-label">CRM Goable</span>
                  <span className={`ct-crm-status ${filled ? "is-on" : ""}`}>
                    <i aria-hidden />
                    {filled ? "Recebido" : "Aguardando"}
                  </span>
                </div>
                <div className="ct-crm-grid">
                  <CrmField label="Nome" value={draft.nome} />
                  <CrmField label="Empresa" value={draft.empresa} />
                  <CrmField label="WhatsApp" value={draft.whatsapp} />
                  <CrmField label="Interesse" value={previewInterest} ghost={!draft.interesse && Boolean(hoverInterest)} />
                </div>
                <p className="ct-crm-note">Cada conversa vira um lead com contexto no CRM da Goable.</p>
              </div>
            </div>

            <div className="ct-chat" data-reveal>
              <ContactChatSimulation
                origin="/contato"
                draft={draft}
                onDraftChange={setDraft}
                onInterestHover={setHoverInterest}
              />
            </div>
          </div>
        </section>

        {/* O QUE ACONTECE DEPOIS */}
        <section className="sb-thesis ct-process">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow">Depois da conversa</span>
              <h2 className="sb-h2 sb-h2-dark">Da sua dor até uma proposta de sistema.</h2>
            </div>
            <div className="ct-steps">
              {steps.map(([num, title, body], i) => (
                <article className="ct-step" data-reveal style={{ transitionDelay: `${i * 90}ms` }} key={num}>
                  <span className="ct-step-num">{num}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CANAIS DIRETOS */}
        <section className="sb-cases ct-channels">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark">Canais diretos</span>
              <h2 className="sb-h2">Prefere ir direto ao ponto?</h2>
            </div>
            <div className="ct-channel-grid">
              {channels.map(({ icon: Icon, label, line, cta, href }, i) => (
                <a
                  className="ct-channel-card"
                  data-reveal
                  style={{ transitionDelay: `${i * 70}ms` }}
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="ct-channel-ic"><Icon aria-hidden /></span>
                  <strong>{label}</strong>
                  <p>{line}</p>
                  <span className="ct-channel-cta">{cta} <ArrowUpRight className="sb-ic" aria-hidden /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="sb-final">
          <div className="sb-final-card" data-reveal>
            <div className="sb-final-glow" aria-hidden />
            <span className="sb-eyebrow sb-eyebrow-dark">Vamos começar</span>
            <h2 className="sb-h2">Qual problema da sua empresa precisa virar sistema?</h2>
            <div className="sb-final-actions">
              <CTAButton variant="primary" size="lg" href="#conversa">Começar a conversa</CTAButton>
              <CTAButton variant="glass" size="lg" to="/conect-ai">Conhecer o Conect.AI 2026</CTAButton>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

function CrmField({ label, value, ghost = false }: { label: string; value: string; ghost?: boolean }) {
  const filled = Boolean(value);
  return (
    <div className="ct-crm-field">
      <span className="ct-crm-field-label">{label}</span>
      <span className={`ct-crm-field-value ${filled ? (ghost ? "is-ghost" : "is-filled") : ""}`}>
        {filled ? value : "aguardando"}
      </span>
    </div>
  );
}
