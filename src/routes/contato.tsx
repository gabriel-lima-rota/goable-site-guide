import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Instagram, Linkedin, ArrowUpRight, ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { AppShell } from "@/components/goable/AppShell";
import { CTAButton } from "@/components/goable/CTAButton";
import { HomeDiagnosticChat } from "@/components/goable/HomeDiagnosticChat";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { property: "og:url", content: "https://goable.ai/contato" },
      { title: "Contato | Goable AI" },
      { name: "description", content: "Comece com um diagnóstico, não com um formulário. A Goable entende sua operação antes de propor qualquer caminho." },
      { property: "og:title", content: "Contato | Goable AI" },
      { property: "og:description", content: "Comece com um diagnóstico, não com um formulário. A Goable entende sua operação antes de propor qualquer caminho." },
    ],
    links: [{ rel: "canonical", href: "https://goable.ai/contato" }],
  }),
  component: ContatoPage,
});

const img = (file: string) => `/goable-assets/${file}`;

const heroMeta = ["4 perguntas", "2 minutos", "sem compromisso"];

const steps = [
  ["01", "Diagnóstico", "A gente entra na sua operação e encontra onde ela realmente trava. Especialistas investigando, não achismo."],
  ["02", "Arquitetura", "Desenhamos o mapa: processos, dados, regras e o sistema certo para a sua realidade."],
  ["03", "Construção", "Construímos os agentes, automações e integrações, testados dentro da sua operação."],
  ["04", "Operação", "Colocamos para rodar com o seu time, medimos e ajustamos até virar rotina."],
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

function onHeroPointer(e: React.PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--sb-px", `${((e.clientX - r.left) / r.width - 0.5) * 24}px`);
  e.currentTarget.style.setProperty("--sb-py", `${((e.clientY - r.top) / r.height - 0.5) * 18}px`);
}
function onHeroLeave(e: React.PointerEvent<HTMLElement>) {
  e.currentTarget.style.setProperty("--sb-px", "0px");
  e.currentTarget.style.setProperty("--sb-py", "0px");
}

function ContatoPage() {
  const ref = useReveal();

  return (
    <AppShell>
      <div className="sb-page ct2-page" ref={ref}>
        {/* HERO com formas */}
        <section className="ct2-hero" onPointerMove={onHeroPointer} onPointerLeave={onHeroLeave}>
          <div className="ct2-grid" aria-hidden />
          <div className="ct2-aura" aria-hidden />
          <div className="ct2-wave" aria-hidden />
          <img className="ct2-shape ct2-shape-1" src={img("goable-4d.png")} alt="" aria-hidden draggable={false} />
          <img className="ct2-shape ct2-shape-2" src={img("goable-gradient-glass-9.png")} alt="" aria-hidden draggable={false} />
          <img className="ct2-shape ct2-shape-3" src={img("goable-3d.png")} alt="" aria-hidden draggable={false} />

          <div className="ct2-hero-inner" data-reveal>
            <span className="sb-eyebrow sb-eyebrow-dark">Contato</span>
            <h1 className="ct2-hero-h1">
              A conversa começa entendendo a sua <span className="sb-hl">operação</span>.
            </h1>
            <p className="ct2-hero-sub">
              Antes de qualquer proposta, a Goable faz um diagnóstico do que trava a sua empresa.
              Comece agora, são quatro perguntas rápidas.
            </p>
            <div className="ct2-hero-meta">
              {heroMeta.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
            <a className="ct2-scroll-cue" href="#diagnostico">
              <span>Começar o diagnóstico</span>
              <ArrowDown className="ct2-scroll-ic" aria-hidden />
            </a>
          </div>
        </section>

        {/* DIAGNÓSTICO GUIADO (ideia de contato da home) */}
        <div id="diagnostico" className="ct2-diag">
          <HomeDiagnosticChat />
        </div>

        {/* PASSO A PASSO */}
        <section className="ct2-steps-section">
          <img className="ct2-step-shape" src={img("goable-gradient-glass-21.png")} alt="" aria-hidden draggable={false} />
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow">Como vamos fazer</span>
              <h2 className="sb-h2 sb-h2-dark">Do diagnóstico ao sistema rodando, em quatro passos.</h2>
              <p className="sb-lead">
                Depois que a gente entende o seu cenário, o caminho é claro. Sem pacote pronto, sem
                promessa de palco.
              </p>
            </div>

            <div className="ct2-rail">
              <span className="ct2-rail-line" aria-hidden />
              {steps.map(([num, title, body], i) => (
                <article className="ct2-step" data-reveal style={{ transitionDelay: `${i * 90}ms` }} key={num}>
                  <span className="ct2-step-dot" aria-hidden />
                  <span className="ct2-step-num">{num}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CANAIS DIRETOS */}
        <section className="sb-cases ct2-channels">
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
              <CTAButton variant="primary" size="lg" href="#diagnostico">Fazer o diagnóstico</CTAButton>
              <CTAButton variant="glass" size="lg" to="/conect-ai">Conhecer o Conect.AI 2026</CTAButton>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
