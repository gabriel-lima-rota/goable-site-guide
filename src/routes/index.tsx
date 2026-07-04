import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import type { CSSProperties } from "react";
import { AppShell } from "@/components/goable/AppShell";
import { CTAButton } from "@/components/goable/CTAButton";
import { EventPhotoSlot } from "@/components/goable/EventPhotoSlot";
import { HeroHomeStage } from "@/components/goable/HeroHomeStage";
import { PhotoPlaceholder } from "@/components/goable/PhotoPlaceholder";
import { Slot } from "@/components/goable/Slot";
import { glass, glass3d, gradientGlass, photos } from "@/lib/goable/assets";

export const Route = createFileRoute("/")({
  component: HomePage,
});

type PainKey = "sales" | "support" | "management" | "operation";

const painItems: Array<{ key: PainKey; label: string; title: string; body: string }> = [
  {
    key: "sales",
    label: "Vendas",
    title: "Vendas dependem de esforço manual demais",
    body: "Oportunidades somem, follow-up atrasa e o time decide sem contexto.",
  },
  {
    key: "support",
    label: "Atendimento",
    title: "A demanda cresce mais rápido que a equipe",
    body: "Mensagens, registros e histórico ficam espalhados em canais diferentes.",
  },
  {
    key: "management",
    label: "Gestão",
    title: "Dados existem, mas não viram decisão",
    body: "Relatórios chegam tarde e a operação continua dependendo de achismo.",
  },
  {
    key: "operation",
    label: "Operação",
    title: "O processo muda, mas o sistema não acompanha",
    body: "A empresa cria exceções todos os dias e a tecnologia vira barreira.",
  },
];

const methodSteps = [
  ["01", "Diagnóstico", "Entender a raiz antes de falar em ferramenta."],
  ["02", "Arquitetura", "Desenhar sistema, dados, regras e jornada."],
  ["03", "Execução", "Implementar com especialistas e medir no uso real."],
];

const diagnosticCaption: Record<PainKey, string> = {
  sales: "lead novo entra no fluxo e vira atendimento com contexto",
  support: "resposta humanizada com histórico, intenção e próximo passo",
  management: "indicadores vivos para decisão sem depender de relatório atrasado",
  operation: "time, horas e execução visíveis dentro do mesmo sistema",
};

const specialistCards = [
  ["Marketing e vendas", "Funis, SDR, atendimento e conversão com IA aplicada."],
  ["People e cultura", "Processos internos, entrevistas e conhecimento do time."],
  ["Financeiro e gestão", "Indicadores, FP&A e decisões em linguagem natural."],
  ["Operação e tecnologia", "Fluxos, integrações e sistemas sob medida."],
];

const eventCards = [
  ["MED", "22/07", "IA aplicada à prática médica", "/conect-ai/med"],
  ["GOV", "23/07", "IA aplicada à gestão pública", "/conect-ai/gov"],
  ["Empresários", "24/07", "IA aplicada à empresa real", "/conect-ai/business"],
];

function HomePage() {
  const [activePain, setActivePain] = useState<PainKey>("sales");

  return (
    <AppShell>
      <div className="home-premium-page">
        <HeroHomeStage />

        <section className="home-pain-chapter">
          <div className="home-section-motion-waves" aria-hidden />
          <div className="home-section-inner">
            <div className="home-pain-heading-row">
              <div className="home-section-heading home-section-heading-light">
                <span>Problema</span>
                <Slot id="COPY_HOME_PAIN_TITLE" as="h2" />
                <Slot id="COPY_HOME_PAIN_SUB" as="p" />
              </div>
              <div className="home-pain-heading-glass" aria-hidden>
                <img src={gradientGlass.foldViolet} alt="" draggable={false} />
              </div>
            </div>

            <div className="home-diagnosis-grid">
              <div className="home-pain-stack">
                {painItems.map((item, index) => (
                  <button
                    type="button"
                    className={`home-liquid-card home-pain-card ${activePain === item.key ? "is-active" : ""}`}
                    key={item.label}
                    onClick={() => setActivePain(item.key)}
                    aria-pressed={activePain === item.key}
                  >
                    <div className="home-card-index">{String(index + 1).padStart(2, "0")}</div>
                    <div>
                      <span>{item.label}</span>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="home-diagnostic-panel">
                <div className="home-panel-topline">
                  <span>Diagnóstico Goable</span>
                  <strong>em curso</strong>
                </div>
                <HomeDiagnosticDemo active={activePain} />
                <div className="home-diagnostic-caption">
                  <span>Raiz encontrada</span>
                  <strong>{diagnosticCaption[activePain]}</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-method-chapter">
          <div className="home-method-liquid-bg" aria-hidden>
            <img src={glass3d.loop} alt="" draggable={false} />
          </div>
          <div className="home-section-inner">
            <div className="home-method-layout">
              <div className="home-section-heading">
                <span>Método</span>
                <Slot id="COPY_HOME_METHOD_TITLE" as="h2" />
                <p>
                  A Goable não força a empresa a caber em um software. O sistema nasce da operação, dos dados e da decisão que precisa acontecer melhor.
                </p>
              </div>

              <div className="home-method-board">
                <div className="home-method-board-head">
                  <span>Mapa de implantação</span>
                  <strong>sob medida</strong>
                </div>
                {methodSteps.map(([number, title, body]) => (
                  <article className="home-method-step" key={number}>
                    <strong>{number}</strong>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </article>
                ))}
                <div className="home-method-result">
                  <CheckCircle2 aria-hidden className="h-5 w-5" />
                  <span>Sistema funcionando, medido e ajustado com o time.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-specialist-chapter">
          <div className="home-section-motion-waves home-section-motion-waves-soft" aria-hidden />
          <div className="home-section-inner">
            <div className="home-section-heading home-section-heading-light">
              <span>Especialistas</span>
              <Slot id="COPY_HOME_SPECIALISTS_TITLE" as="h2" />
              <p>
                Liderada por Edgar Abreu, a Goable junta estratégia, IA, negócio e execução prática para olhar cada dor com a profundidade certa.
              </p>
            </div>

            <div className="home-specialist-layout">
              <PhotoPlaceholder
                tone="dark"
                ratio="4/5"
                src={photos.edgarPortrait}
                overlayLabel="Edgar Abreu"
                label="Liderança Goable"
                parallax
                reveal
                compact
              />

              <div className="home-specialist-panel">
                <span>CEO e Founder</span>
                <Slot id="COPY_SPECIALIST_EDGAR_TITLE" as="h3" />
                <Slot id="COPY_SPECIALIST_EDGAR_BODY" as="p" />
                <div className="home-edgar-proof">
                  <span>IA aplicada a negócios reais</span>
                  <span>Educação e mercado financeiro</span>
                  <span>Execução com especialistas</span>
                </div>
                <div className="home-specialist-cards">
                  {specialistCards.map(([title, body]) => (
                    <article className="home-liquid-card" key={title}>
                      <h4>{title}</h4>
                      <p>{body}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-connect-chapter">
          <div className="home-section-inner">
            <div className="home-connect-layout">
              <div>
                <div className="home-section-heading">
                  <span>Conect.AI</span>
                  <Slot id="COPY_HOME_CONNECT_TITLE" as="h2" />
                  <p>
                    O evento mostra IA com gente, contexto e operação na mesa. A experiência existe para transformar curiosidade em direção prática.
                  </p>
                </div>
                <div className="home-event-list">
                  {eventCards.map(([label, date, title, href]) => (
                    <a className="home-event-card" href={href} key={label}>
                      <strong>{date}</strong>
                      <div>
                        <span>{label}</span>
                        <p>{title}</p>
                      </div>
                      <ArrowUpRight aria-hidden className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="home-event-photo-grid">
                <div className="home-event-glass-mark" aria-hidden>
                  <img src={glass.gSymbol} alt="" draggable={false} />
                </div>
                <EventPhotoSlot assetName="COMBO_STUDIOS-644.jpg" aspect="21/10" caption="Palco Goable AI" />
                <div className="grid grid-cols-2 gap-3">
                  <EventPhotoSlot assetName="COMBO_STUDIOS-558.jpg" aspect="4/5" caption="IA na prática" />
                  <EventPhotoSlot assetName="COMBO_STUDIOS-325.jpg" aspect="4/5" caption="Diagnóstico ao vivo" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-final-chapter">
          <div className="home-section-inner">
            <div className="home-final-card">
              <div className="home-final-wave" aria-hidden />
              <img src={glass.gSymbol} alt="" aria-hidden draggable={false} />
              <div>
                <span>Próximo passo</span>
                <Slot id="COPY_HOME_FINAL_CTA_TITLE" as="h2" />
                <p>
                  Conte onde a operação trava. A Goable entende o contexto e transforma o problema certo em sistema.
                </p>
                <CTAButton variant="primary" size="lg">Contato</CTAButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}

function HomeDiagnosticDemo({ active }: { active: PainKey }) {
  const labels: Record<PainKey, string> = {
    sales: "Vendas",
    support: "Atendimento",
    management: "Gestão",
    operation: "Operação",
  };

  return (
    <div className="home-product-demo" key={active}>
      <div className="home-product-window">
        <div className="home-product-topbar">
          <div className="home-product-dots" aria-hidden>
            <span />
            <span />
            <span />
          </div>
          <strong>{labels[active]} sob medida</strong>
          <em>live</em>
        </div>
        {active === "sales" ? <SalesKanbanDemo /> : null}
        {active === "support" ? <SupportChatDemo /> : null}
        {active === "management" ? <ManagementDashDemo /> : null}
        {active === "operation" ? <OperationTimesheetDemo /> : null}
      </div>
    </div>
  );
}

function SalesKanbanDemo() {
  return (
    <div className="home-kanban-demo">
      <div className="home-kanban-moving-card">
        <span>Novo lead</span>
        <strong>Clínica Horizonte</strong>
        <small>WhatsApp · alta intenção</small>
      </div>
      {[
        ["Lead novo", "2 oportunidades", "Diagnóstico solicitado"],
        ["Em atendimento", "IA resumiu contexto", "Próxima ação criada"],
        ["Diagnóstico", "Reunião agendada", "Especialista indicado"],
      ].map(([title, metric, note]) => (
        <div className="home-kanban-column" key={title}>
          <header>
            <span>{title}</span>
            <strong>{metric}</strong>
          </header>
          <div className="home-kanban-card">
            <strong>{note}</strong>
            <p>Responsável, histórico e etapa visíveis para o time.</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function SupportChatDemo() {
  return (
    <div className="home-chat-demo">
      <div className="home-chat-sidebar">
        <span>fila priorizada</span>
        <strong>12 conversas</strong>
        <p>3 precisam de especialista</p>
      </div>
      <div className="home-chat-thread">
        <div className="home-chat-bubble is-client">Preciso entender qual solução faz sentido para minha equipe.</div>
        <div className="home-chat-bubble is-ai">Claro. Antes de indicar qualquer sistema, vou entender operação, canais e rotina atual.</div>
        <div className="home-chat-bubble is-ai is-delay">Já trouxe o histórico e separei 3 perguntas para o diagnóstico.</div>
        <div className="home-chat-typing" aria-hidden><span /><span /><span /></div>
      </div>
    </div>
  );
}

function ManagementDashDemo() {
  return (
    <div className="home-dash-demo">
      <div className="home-dash-metrics">
        <article><span>Conversão</span><strong>38%</strong></article>
        <article><span>Tempo médio</span><strong>12m</strong></article>
        <article><span>Gargalo</span><strong>Follow-up</strong></article>
      </div>
      <div className="home-dash-chart">
        {[42, 68, 54, 78, 62, 88, 74].map((height, index) => (
          <span key={index} style={{ "--bar-h": `${height}%` } as CSSProperties} />
        ))}
      </div>
      <div className="home-dash-line" aria-hidden>
        <svg viewBox="0 0 420 120" preserveAspectRatio="none">
          <path d="M4 92 C 64 44 102 74 150 48 S 228 18 280 42 S 350 94 416 24" />
        </svg>
      </div>
    </div>
  );
}

function OperationTimesheetDemo() {
  return (
    <div className="home-ops-demo">
      {[
        ["Gabriel", "SDR com IA", "6h 40m", "82%"],
        ["Priscila", "Entrevistas", "5h 15m", "64%"],
        ["Rodrigo", "Integrações", "7h 10m", "91%"],
        ["Vinicius", "Indicadores", "4h 50m", "58%"],
      ].map(([name, role, time, load], index) => (
        <div className="home-ops-row" key={name}>
          <div className="home-ops-avatar">{name.slice(0, 1)}</div>
          <div className="home-ops-person">
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
          <div className="home-ops-bar"><span style={{ "--ops-w": load } as CSSProperties} /></div>
          <em>{time}</em>
        </div>
      ))}
    </div>
  );
}
