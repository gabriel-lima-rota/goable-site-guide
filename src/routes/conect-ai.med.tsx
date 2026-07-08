import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { AppShell } from "@/components/goable/AppShell";

export const Route = createFileRoute("/conect-ai/med")({
  head: () => ({
    meta: [
      { title: "Conect.MED · IA aplicada à prática médica | 22/07 · Faculdade Unimed e Goable AI" },
      { name: "description", content: "Imersão presencial de IA para médicos. Realização Faculdade Unimed em parceria com Goable AI. 22 de julho de 2026, Instituto Caldeira, Porto Alegre. Cortesia por convite." },
      { property: "og:title", content: "Conect.MED · IA aplicada à prática médica" },
      { property: "og:description", content: "22/07/2026 · Instituto Caldeira · Porto Alegre · Realização Faculdade Unimed" },
    ],
  }),
  component: MedPage,
});

const img = (file: string) => `/goable-assets/${file}`;
const WHATSAPP = "https://wa.me/555185458646?text=Ol%C3%A1!%20Quero%20garantir%20minha%20vaga%20no%20Lote%201%20do%20Conect.MED%20(22%2F07).";

const heroFacts = ["22 de julho · quarta", "9h às 18h", "Instituto Caldeira · POA", "Exclusivo para médicos"];

const indicators: Array<{ value: number; decimals?: number; suffix?: string; label: string }> = [
  { value: 9.71, decimals: 2, label: "NPS da edição anterior" },
  { value: 97, suffix: "%", label: "de satisfação" },
  { value: 100, suffix: "%", label: "participariam novamente" },
];

const marquee = [
  "Prontuário e histórico",
  "Agenda e confirmações",
  "Guias TISS",
  "WhatsApp do consultório",
  "LGPD e sigilo médico",
  "Relatórios automáticos",
  "Presença digital ética",
  "Mais tempo para o paciente",
];

const fronts: Array<{ num: string; title: string; context: string; apps: string[]; result: string }> = [
  {
    num: "01",
    title: "Operação clínica",
    context: "Rotinas clínicas exigem registro, organização, acompanhamento e comunicação constante.",
    apps: ["Agendamento e confirmação de consultas", "Apoio à evolução e organização de informações do paciente", "Triagem inicial e estruturação de dados para atendimento", "Respostas administrativas por WhatsApp", "Organização de prontuário e histórico clínico"],
    result: "Menos carga operacional e mais tempo dedicado ao cuidado do paciente.",
  },
  {
    num: "02",
    title: "Planos de saúde e faturamento",
    context: "Guias, documentos, glosas e faturamento exigem atenção técnica e consomem horas importantes da equipe.",
    apps: ["Padronização de documentos clínicos", "Apoio no preenchimento de guias TISS", "Organização de evidências para resposta a glosas", "Auditoria assistida de informações de faturamento", "Melhoria do controle sobre processos com operadoras"],
    result: "Mais previsibilidade, menos retrabalho e maior controle sobre a operação do consultório.",
  },
  {
    num: "03",
    title: "Crescimento e reputação",
    context: "A presença digital médica precisa ser construída com consistência, responsabilidade e respeito às normas profissionais.",
    apps: ["Planejamento de conteúdo médico dentro das diretrizes éticas", "Comunicação com pacientes em linguagem clara e adequada", "Organização de temas por especialidade", "Apoio à presença digital do consultório", "Produção de materiais educativos com revisão médica"],
    result: "Comunicação mais consistente, sem perder rigor, ética e credibilidade.",
  },
  {
    num: "04",
    title: "Gestão do consultório",
    context: "Indicadores, financeiro, cobranças e relatórios costumam ficar em segundo plano, mesmo sendo essenciais.",
    apps: ["Controle financeiro e acompanhamento de indicadores", "Relatórios mensais automatizados", "Organização de cobranças e recorrências", "Visão de agenda, ocupação e produtividade", "Apoio à análise de custos e margem"],
    result: "Mais clareza para gerir o consultório com método e previsibilidade.",
  },
];

const immersion: Array<{ title: string; body: string; hands?: boolean }> = [
  { title: "Boas-vindas e diagnóstico", body: "Mapeamento das principais rotinas, gargalos e oportunidades de aplicação de IA no seu consultório." },
  { title: "Fundamentos de IA para médicos", body: "O que a IA já permite na prática médica e quais cuidados devem orientar o uso em saúde." },
  { title: "Almoço e networking", body: "Encontro entre médicos, gestores de clínicas, docentes da Faculdade Unimed e especialistas em IA aplicada." },
  { title: "Construção orientada", body: "Você põe a mão: aplicação prática dos conceitos em exemplos da rotina clínica, administrativa e de gestão. Não assiste, constrói.", hands: true },
  { title: "Plano de implementação", body: "Definição dos próximos passos para aplicar IA com segurança, priorizando ganhos reais." },
  { title: "Encerramento", body: "Certificado e orientação sobre a trilha de continuidade com a Faculdade Unimed." },
];

const venueFacts = ["Porto Alegre · RS", "Dia completo · almoço incluso", "Turma reduzida", "100% presencial"];

const faqMed: Array<[string, string]> = [
  ["Preciso entender de tecnologia?", "Não. O foco é a rotina do consultório, não código. A parte técnica fica com a Goable, você foca na aplicação."],
  ["Sou de outra cidade, vale a pena?", "Sim. É presencial em Porto Alegre, em um dia único, pensado para você sair com um plano aplicável em qualquer consultório."],
  ["Vou sair com algo pronto?", "Você sai com um diagnóstico, aplicações construídas ao vivo e um plano de implementação para os próximos 30, 60 e 90 dias."],
  ["Recebo certificado?", "Sim, com certificado e trilha de continuidade da Faculdade Unimed."],
  ["Como funciona o pagamento?", "Ingresso individual no Lote 1, à vista ou parcelado no cartão. Você garante pelo WhatsApp e recebe os próximos passos."],
  ["O almoço está incluso?", "Está. É dia completo no Instituto Caldeira, com almoço e networking incluídos."],
];

const included = [
  "Dia completo no Instituto Caldeira, com almoço e networking",
  "Imersão prática conduzida por especialistas",
  "Construção orientada de aplicações de IA para a rotina médica",
  "Diagnóstico e plano de implementação para o consultório",
  "Certificado e trilha de continuidade com a Faculdade Unimed",
];

const unimedStats: Array<{ prefix?: string; value: number; unit?: string; label: string }> = [
  { value: 30, unit: "anos", label: "de experiência" },
  { prefix: "+de ", value: 470, unit: "mil", label: "alunos capacitados" },
  { prefix: "+de ", value: 850, label: "turmas de pós-graduação" },
  { prefix: "+de ", value: 1360, label: "turmas de curta duração e aperfeiçoamento" },
  { prefix: "+de ", value: 1600, label: "projetos corporativos entregues" },
];

const takeaways: Array<[string, string, string]> = [
  ["01", "Diagnóstico de oportunidades", "Mapeamento das rotinas do consultório com maior potencial de ganho: tarefas repetitivas, documentação, comunicação, gestão e faturamento."],
  ["02", "Aplicações estruturadas ao vivo", "Construção orientada de exemplos práticos para apoiar atendimento, organização de informações, documentos e processos administrativos."],
  ["03", "Plano de implementação", "Direcionamento sobre o que priorizar nos próximos 30, 60 e 90 dias, considerando ganho real, segurança e viabilidade operacional."],
  ["04", "Governança, LGPD e sigilo médico", "Orientações para uso responsável de IA em saúde, com atenção a dados sensíveis, acesso, revisão humana e comunicação ética."],
  ["05", "Assistente com contexto da prática médica", "Estruturação de um assistente de IA com linguagem, especialidade, protocolos e necessidades reais do consultório."],
  ["06", "Materiais e continuidade", "Materiais de apoio e trilha de continuidade com a Faculdade Unimed para manter a aplicação prática após o evento."],
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

function CountUp({ value, decimals = 0, prefix = "", suffix = "" }: { value: number; decimals?: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      setDisplay(value);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            io.unobserve(entry.target);
            const dur = 1500;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / dur, 1);
              setDisplay(value * (1 - Math.pow(1 - p, 3)));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  const formatted = decimals > 0 ? display.toFixed(decimals).replace(".", ",") : Math.round(display).toLocaleString("pt-BR");
  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
}

function Countdown() {
  const target = new Date("2026-07-22T09:00:00-03:00").getTime();
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const i = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(i);
  }, []);
  const t = now === null ? null : Math.max(0, target - now);
  const pad = (n: number) => String(n).padStart(2, "0");
  const units: Array<[string, string]> =
    t === null
      ? [["--", "dias"], ["--", "horas"], ["--", "min"], ["--", "seg"]]
      : [
          [pad(Math.floor(t / 86400000)), "dias"],
          [pad(Math.floor(t / 3600000) % 24), "horas"],
          [pad(Math.floor(t / 60000) % 60), "min"],
          [pad(Math.floor(t / 1000) % 60), "seg"],
        ];
  return (
    <div className="med2-count" role="timer" aria-label="Contagem regressiva para o Conect.MED">
      {units.map(([v, l]) => (
        <span className="med2-count-unit" key={l}>
          <strong>{v}</strong>
          <em>{l}</em>
        </span>
      ))}
    </div>
  );
}

function onHeroPointer(e: React.PointerEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--sb-px", `${((e.clientX - r.left) / r.width - 0.5) * 22}px`);
  e.currentTarget.style.setProperty("--sb-py", `${((e.clientY - r.top) / r.height - 0.5) * 16}px`);
}
function onHeroLeave(e: React.PointerEvent<HTMLElement>) {
  e.currentTarget.style.setProperty("--sb-px", "0px");
  e.currentTarget.style.setProperty("--sb-py", "0px");
}

function IconEcg() {
  return (
    <svg viewBox="0 0 48 48" className="med2-fi" aria-hidden>
      <rect className="med2-fi-frame" x="5" y="9" width="38" height="30" rx="7" />
      <path className="med2-fi-ecg" d="M10 24 h6 l3 -7 5 14 4 -9 2 2 h8" />
    </svg>
  );
}
function IconDoc() {
  return (
    <svg viewBox="0 0 48 48" className="med2-fi" aria-hidden>
      <path className="med2-fi-frame" d="M13 6 h16 l8 8 v28 h-24 z" />
      <path className="med2-fi-frame" d="M29 6 v8 h8" />
      <line className="med2-fi-line med2-fi-line-1" x1="18" y1="22" x2="34" y2="22" />
      <line className="med2-fi-line med2-fi-line-2" x1="18" y1="28" x2="34" y2="28" />
      <line className="med2-fi-line med2-fi-line-3" x1="18" y1="34" x2="28" y2="34" />
    </svg>
  );
}
function IconGrow() {
  return (
    <svg viewBox="0 0 48 48" className="med2-fi" aria-hidden>
      <path className="med2-fi-frame" d="M8 8 v32 h32" />
      <path className="med2-fi-grow" d="M12 34 l8 -8 6 4 12 -14" />
      <path className="med2-fi-arrow" d="M32 15 h6 v6" />
    </svg>
  );
}
function IconGauge() {
  return (
    <svg viewBox="0 0 48 48" className="med2-fi" aria-hidden>
      <path className="med2-fi-frame" d="M8 36 a16 16 0 1 1 32 0" />
      <line className="med2-fi-frame" x1="10" y1="36" x2="38" y2="36" />
      <g className="med2-fi-needle">
        <line x1="24" y1="34" x2="24" y2="20" />
        <circle cx="24" cy="34" r="2.4" />
      </g>
    </svg>
  );
}

const frontIcons = [IconEcg, IconDoc, IconGrow, IconGauge];

function FrontCard({ f, index }: { f: (typeof fronts)[number]; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = frontIcons[index];
  return (
    <article
      className={`med2-front ${open ? "is-open" : ""}`}
      data-reveal
      style={{ transitionDelay: `${(index % 2) * 80}ms` }}
      onClick={() => setOpen((v) => !v)}
    >
      <div className="med2-front-top">
        <span className="med2-front-ic"><Icon /></span>
        <div className="med2-front-titles">
          <span className="med2-front-num">{f.num}</span>
          <h3>{f.title}</h3>
        </div>
      </div>
      <p className="med2-front-context">"{f.context}"</p>
      <span className="med2-front-hint" aria-hidden>
        {f.apps.length} aplicações possíveis <ChevronDown />
      </span>
      <div className="med2-front-appswrap">
        <div>
          <ul className="med2-front-apps">
            {f.apps.map((a) => (
              <li key={a}><Check aria-hidden /> {a}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="med2-front-result">
        <em>Resultado esperado</em>
        <p>{f.result}</p>
      </div>
    </article>
  );
}

function AfterMovie() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="med2-movie-frame" data-reveal>
      {playing ? (
        <video
          className="med2-movie-video"
          src={img("conectai-aftermovie.mp4")}
          poster={img("conectai-aftermovie-poster.jpg")}
          controls
          autoPlay
          playsInline
        />
      ) : (
        <button type="button" className="med2-movie-poster" onClick={() => setPlaying(true)} aria-label="Assistir o aftermovie da 1ª edição">
          <img src={img("conectai-aftermovie-poster.jpg")} alt="" loading="lazy" draggable={false} />
          <span className="med2-movie-shade" aria-hidden />
          <span className="med2-movie-top" aria-hidden>
            <i className="med2-movie-chip"><b /> Aftermovie · 1ª edição</i>
            <i className="med2-movie-dur">1:15</i>
          </span>
          <span className="med2-movie-play" aria-hidden>
            <span className="med2-movie-ring" />
            <span className="med2-movie-ring med2-movie-ring-2" />
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
          </span>
          <span className="med2-movie-cta" aria-hidden>Dê o play e sinta a energia da sala</span>
        </button>
      )}
    </div>
  );
}

function FaqListMed() {
  const [open, setOpen] = useState(0);
  return (
    <div className="med2-faq-list">
      {faqMed.map(([q, a], i) => (
        <div className={`med2-faq-item ${open === i ? "is-open" : ""}`} key={q} data-reveal>
          <button type="button" className="med2-faq-q" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            <span><i className="med2-faq-num">{String(i + 1).padStart(2, "0")}</i>{q}</span>
            <ChevronDown aria-hidden />
          </button>
          <div className="med2-faq-a">
            <div><p>{a}</p></div>
          </div>
        </div>
      ))}
    </div>
  );
}

function LeadModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);
  if (!open) return null;

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setSending(true);
    setError(false);
    try {
      const res = await fetch("https://formsubmit.co/ajax/marketing@4ued.tech", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "Lote 1 · Conect.MED (22/07) · novo pedido de vaga",
          nome: fd.get("nome"),
          email: fd.get("email"),
          whatsapp: fd.get("whatsapp"),
          especialidade: fd.get("especialidade") || "(não informado)",
        }),
      });
      if (!res.ok) throw new Error("fail");
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="med2-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Garantir vaga no Lote 1">
      <div className="med2-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="med2-modal-close" onClick={onClose} aria-label="Fechar">×</button>
        {sent ? (
          <div className="med2-modal-success">
            <span className="med2-modal-check"><Check aria-hidden /></span>
            <h3>Pedido recebido!</h3>
            <p>
              Sua vaga do <b>Lote 1</b> está pré-reservada. Nosso time vai entrar em contato para
              confirmar os dados e concluir a sua inscrição no Conect.MED.
            </p>
            <button type="button" className="med2-btn-primary med2-btn-block" onClick={onClose}>Fechar</button>
          </div>
        ) : (
          <>
            <span className="med2-lote"><i aria-hidden /> Lote 1 · Conect.MED · 22 de julho</span>
            <h3 className="med2-modal-title">Garanta sua vaga no Lote 1</h3>
            <p className="med2-modal-sub">Preencha seus dados e nosso time entra em contato para concluir a inscrição.</p>
            <form className="med2-form" onSubmit={submit}>
              <label>
                <span>Nome completo</span>
                <input name="nome" type="text" required placeholder="Seu nome" autoComplete="name" />
              </label>
              <label>
                <span>E-mail</span>
                <input name="email" type="email" required placeholder="voce@clinica.com.br" autoComplete="email" />
              </label>
              <label>
                <span>WhatsApp</span>
                <input name="whatsapp" type="tel" required placeholder="(51) 99999-9999" autoComplete="tel" />
              </label>
              <label>
                <span>Especialidade ou clínica <em>(opcional)</em></span>
                <input name="especialidade" type="text" placeholder="Ex.: Cardiologia, Clínica X" />
              </label>
              {error ? (
                <p className="med2-form-error">
                  Não foi possível enviar agora. Tente de novo ou fale direto com o time no{" "}
                  <a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a>.
                </p>
              ) : null}
              <button type="submit" className="med2-btn-primary med2-btn-block" disabled={sending}>
                {sending ? "Enviando..." : "Garantir minha vaga no Lote 1"}
              </button>
              <span className="med2-form-note">Vagas limitadas · o time confirma disponibilidade por ordem de chegada.</span>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function MedPage() {
  const ref = useReveal();
  const [leadOpen, setLeadOpen] = useState(false);

  return (
    <AppShell>
      <div className="sb-page med2-page" ref={ref}>
        {/* HERO */}
        <section className="med2-hero" onPointerMove={onHeroPointer} onPointerLeave={onHeroLeave}>
          <div className="med2-grid" aria-hidden />
          <div className="med2-aura" aria-hidden />
          <div className="med2-pulseline" aria-hidden />

          <div className="med2-hero-inner">
            <div className="med2-hero-copy" data-reveal>
              <div className="med2-lockup">
                <span className="med2-lockup-logo">
                  <img src={img("logo-faculdade-unimed.svg")} alt="Faculdade Unimed" />
                </span>
                <span className="med2-lockup-text">Realização Faculdade Unimed · em parceria com Goable AI</span>
              </div>

              <span className="med2-chips">
                <i>Workshop de 1 dia</i>
                <i>Imersão prática em IA</i>
                <i>Exclusivo para médicos</i>
              </span>

              <h1 className="med2-h1">
                Conect<span className="med2-h1-dot">.</span>MED
              </h1>
              <p className="med2-sub">IA aplicada à <span className="med2-hl">prática médica</span>.</p>
              <p className="med2-desc">
                Uma imersão presencial para médicos: você identifica onde a IA apoia a rotina
                clínica, administrativa e estratégica do consultório e sai com um plano objetivo
                para ganhar tempo e qualificar a experiência do paciente.
              </p>

              <div className="med2-facts">
                {heroFacts.map((f) => (
                  <span key={f}>{f}</span>
                ))}
              </div>

              <div className="med2-actions">
                <button type="button" className="med2-btn-primary" onClick={() => setLeadOpen(true)}>
                  <MessageCircle aria-hidden /> Garantir minha vaga
                </button>
                <a className="med2-btn-ghost" href="#imersao">Ver como funciona <ArrowRight aria-hidden /></a>
              </div>
            </div>

            <div className="med2-hero-visual med2-hero-visual-cracha" data-reveal>
              <span className="med2-cracha-glow" aria-hidden />
              <img
                className="med2-cracha"
                src={img("conect-cracha-med.png")}
                alt="Crachá do Conect.AI 26: Protagonistas do presente, realização Faculdade Unimed"
                loading="eager"
                draggable={false}
              />
              <div className="med2-hero-badge med2-hero-badge-cracha">
                <span>Para quem é</span>
                <strong>Médicos · Sócios de clínicas · Gestores médicos</strong>
              </div>
            </div>
          </div>

          <div className="med2-proof" data-reveal>
            {indicators.map((p) => (
              <article key={p.label}>
                <strong><CountUp value={p.value} decimals={p.decimals} suffix={p.suffix} /></strong>
                <span>{p.label}</span>
              </article>
            ))}
          </div>
        </section>

        {/* LETREIRO */}
        <div className="med2-marquee" aria-hidden>
          <div className="med2-marquee-row">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i}>{m}</span>
            ))}
          </div>
        </div>

        {/* ONDE A IA GERA EFICIÊNCIA */}
        <section className="med2-fronts">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark med2-eyebrow">A oportunidade</span>
              <h2 className="sb-h2">A IA entra onde o consultório <span className="med2-hl">perde tempo</span>.</h2>
              <p className="sb-lead sb-lead-light">
                Agenda, prontuário, convênios, faturamento e gestão consomem horas do médico e da
                equipe. Quatro frentes, com critério, segurança e respeito à LGPD e ao sigilo.
              </p>
            </div>

            <div className="med2-front-grid">
              {fronts.map((f, i) => (
                <FrontCard f={f} index={i} key={f.num} />
              ))}
            </div>

            <div className="med2-quote" data-reveal>
              <p>"IA aplicada à medicina precisa partir da <b>rotina real</b>, não da ferramenta."</p>
              <span>Todos os exemplos do encontro são conectados a situações concretas de consultório.</span>
            </div>
          </div>
        </section>

        {/* AFTERMOVIE + ESCASSEZ */}
        <section className="med2-movie">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark med2-eyebrow">Por dentro do evento</span>
              <h2 className="sb-h2">Assista ao que a última turma <span className="med2-hl">viveu</span>.</h2>
            </div>

            <AfterMovie />

            <div className="med2-scarcity" data-reveal>
              <span className="med2-scarcity-badge"><i aria-hidden /> Vagas limitadas</span>
              <p>
                A 1ª edição <b>esgotou</b>. A turma do Conect.MED é reduzida e os convites são
                confirmados por ordem de resposta: <b>pode esgotar a qualquer momento</b>.
              </p>
              <button type="button" className="med2-btn-primary med2-scarcity-btn" onClick={() => setLeadOpen(true)}>
                <MessageCircle aria-hidden /> Garantir minha vaga agora
              </button>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA A IMERSÃO */}
        <section className="med2-agenda" id="imersao">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow">Como funciona a imersão</span>
              <h2 className="sb-h2 sb-h2-dark">Não é palestra. É o seu consultório na mesa, das 9h às 18h.</h2>
              <p className="sb-lead">
                Um dia inteiro e presencial no Instituto Caldeira. Você não fica assistindo: identifica
                as oportunidades da sua prática e participa da construção das aplicações.
              </p>
            </div>

            <div className="med2-timeline">
              <span className="med2-timeline-rail" aria-hidden />
              {immersion.map((s, i) => (
                <div
                  className={`med2-tl-step ${s.hands ? "is-hands" : ""}`}
                  data-reveal
                  style={{ transitionDelay: `${i * 60}ms` }}
                  key={s.title}
                >
                  <span className="med2-tl-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="med2-tl-dot" aria-hidden />
                  <div className="med2-tl-card">
                    {s.hands ? <span className="med2-tl-tag">Você põe a mão</span> : null}
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O QUE VOCÊ LEVA DO DIA */}
        <section className="med2-take">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark med2-eyebrow">Entregas da imersão</span>
              <h2 className="sb-h2">O que você <span className="med2-hl">leva do dia</span>.</h2>
              <p className="sb-lead sb-lead-light">
                O objetivo não é apresentar uma visão genérica sobre IA. É organizar uma leitura
                prática de como a tecnologia pode apoiar a rotina médica com método,
                responsabilidade e utilidade.
              </p>
            </div>

            <div className="med2-take-grid">
              {takeaways.map(([num, title, body], i) => (
                <article className="med2-take-card" data-reveal style={{ transitionDelay: `${(i % 3) * 70}ms` }} key={num}>
                  <span className="med2-take-num">{num}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <span className="med2-take-pulse" aria-hidden />
                </article>
              ))}
            </div>

            <figure className="med2-photo-band" data-reveal>
              <img src={img("combo-studios-558.webp")} alt="Construção orientada ao vivo na 1ª edição do Conect" loading="lazy" />
              <figcaption>
                <i aria-hidden /> Construção orientada, ao vivo · registro da 1ª edição do Conect
              </figcaption>
            </figure>
          </div>
        </section>

        {/* EXCELÊNCIA FACULDADE UNIMED */}
        <section className="med2-unimed">
          <div className="sb-inner">
            <div className="sb-head med2-unimed-head" data-reveal>
              <span className="med2-unimed-logo">
                <img src={img("logo-faculdade-unimed.svg")} alt="Faculdade Unimed" />
              </span>
              <span className="sb-eyebrow med2-unimed-eyebrow">Quem realiza</span>
              <h2 className="sb-h2 med2-unimed-h2">
                Você estará nas mãos de quem forma a saúde brasileira <span className="med2-unimed-hl">há 30 anos</span>.
              </h2>
              <p className="sb-lead med2-unimed-lead">
                O Conect.MED é uma realização da Faculdade Unimed, referência nacional em educação
                continuada para profissionais da saúde. A trajetória fala por ela.
              </p>
            </div>

            <div className="med2-unimed-grid">
              {unimedStats.map((s, i) => (
                <article className="med2-x" data-reveal style={{ transitionDelay: `${i * 70}ms` }} key={s.label}>
                  <span className="med2-x-num">
                    {s.prefix ? <i>+de</i> : null}
                    <CountUp value={s.value} />
                    {s.unit ? <i>{s.unit}</i> : null}
                  </span>
                  <span className="med2-x-label">{s.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* INSTITUTO CALDEIRA */}
        <section className="med2-venue">
          <div className="sb-inner">
            <div className="med2-venue-grid">
              <div className="med2-venue-copy" data-reveal>
                <span className="sb-eyebrow sb-eyebrow-dark med2-eyebrow">Onde acontece</span>
                <h2 className="sb-h2">Um dia dentro do maior hub de inovação do Sul.</h2>
                <p>
                  O Conect.MED não acontece numa sala de hotel. Ele acontece no <b>Instituto
                  Caldeira</b>, em Porto Alegre, o ambiente onde nascem as empresas de tecnologia
                  mais relevantes do país. Você passa o dia onde a inovação realmente acontece.
                </p>
                <div className="med2-venue-facts">
                  {venueFacts.map((f) => (
                    <span key={f}>{f}</span>
                  ))}
                </div>
              </div>
              <div className="med2-venue-photos" data-reveal>
                <figure className="med2-venue-fig med2-venue-fig-lg">
                  <img src={img("caldeira-campus.jpg")} alt="Campus Caldeira, Instituto Caldeira em Porto Alegre" loading="lazy" />
                  <figcaption><strong>Campus Caldeira</strong><span>Hub de inovação no coração de Porto Alegre</span></figcaption>
                </figure>
                <figure className="med2-venue-fig">
                  <img src={img("caldeira-sala.jpg")} alt="Sala da imersão do Conect.MED" loading="lazy" />
                  <figcaption><strong>Sala da imersão</strong><span>Formato reduzido, foco em construção</span></figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* CONVITE: incluso + cortesia + cronometro */}
        <section className="med2-enroll">
          <div className="med2-enroll-card" data-reveal>
            <div className="med2-enroll-glow" aria-hidden />
            <span className="med2-enroll-cone med2-enroll-cone-l" aria-hidden />
            <span className="med2-enroll-cone med2-enroll-cone-r" aria-hidden />

            <div className="med2-enroll-grid">
              <div className="med2-enroll-left">
                <span className="sb-eyebrow sb-eyebrow-dark med2-eyebrow">O que está incluso nessa experiência</span>
                <ul className="med2-included">
                  {included.map((item) => (
                    <li key={item}><Check aria-hidden /> {item}</li>
                  ))}
                </ul>
                <div className="med2-price">
                  <span className="med2-lote"><i aria-hidden /> Lote 1 · o melhor valor da temporada</span>
                  <p className="med2-price-value">R$ 3.900<em>ingresso individual</em></p>
                  <p className="med2-price-line">à vista ou parcelado no cartão</p>
                  <span className="med2-price-note">O valor sobe no próximo lote. A turma é reduzida: quem entra primeiro garante o Lote 1.</span>
                </div>
              </div>

              <div className="med2-enroll-right">
                <h2>Garanta sua vaga no Lote 1.</h2>
                <p>O Conect.MED começa em:</p>
                <Countdown />
                <button type="button" className="med2-btn-primary med2-btn-block" onClick={() => setLeadOpen(true)}>
                  Garantir minha vaga no Lote 1 <ArrowRight aria-hidden />
                </button>
                <span className="med2-enroll-note">Vagas limitadas · o Lote 1 pode encerrar a qualquer momento.</span>
                <Link className="med2-enroll-alt" to="/conect-ai">Conhecer as três edições do Conect.AI <ArrowUpRight aria-hidden /></Link>
              </div>
            </div>

            <div className="med2-enroll-foot" aria-hidden>
              <span>Sem pagamento agora · o nosso time confirma sua vaga e os próximos passos</span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="med2-faq">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark med2-eyebrow">Perguntas rápidas</span>
              <h2 className="sb-h2">Antes de garantir sua vaga.</h2>
            </div>
            <FaqListMed />
          </div>
        </section>

        {/* REALIZAÇÃO (faixa simples antes do rodapé) */}
        <div className="med2-credits">
          <div className="sb-inner med2-credits-inner">
            <span className="med2-credit">
              <em>Realização</em>
              <img src={img("logo-faculdade-unimed.svg")} alt="Faculdade Unimed" />
            </span>
            <span className="med2-credit-sep" aria-hidden />
            <span className="med2-credit">
              <em>Apoio técnico</em>
              <img className="med2-credit-goable" src={img("logo-branco-tight.png")} alt="Goable AI" />
            </span>
            <span className="med2-credit-sep" aria-hidden />
            <span className="med2-credit">
              <em>Apoio institucional</em>
              <b className="med2-credit-poa">Unimed <i>Porto Alegre</i></b>
            </span>
          </div>
        </div>
        <LeadModal open={leadOpen} onClose={() => setLeadOpen(false)} />
      </div>
    </AppShell>
  );
}
