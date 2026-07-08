import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { AppShell } from "@/components/goable/AppShell";
import { CTAButton } from "@/components/goable/CTAButton";

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
const WHATSAPP = "https://wa.me/555185458646?text=Ol%C3%A1!%20Quero%20solicitar%20meu%20convite%20para%20o%20Conect.MED%20(22%2F07).";

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

function MedPage() {
  const ref = useReveal();

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
                Uma imersão presencial para médicos que desejam entender, com clareza e aplicação
                prática, como a IA pode apoiar a rotina clínica, administrativa e estratégica do
                consultório. Você identifica oportunidades reais, participa de construções orientadas
                e sai com um plano objetivo para reduzir tarefas operacionais, ganhar tempo e
                qualificar a experiência do paciente.
              </p>

              <div className="med2-facts">
                {heroFacts.map((f) => (
                  <span key={f}>{f}</span>
                ))}
              </div>

              <div className="med2-actions">
                <a className="med2-btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                  <MessageCircle aria-hidden /> Solicitar meu convite
                </a>
                <a className="med2-btn-ghost" href="#imersao">Ver como funciona <ArrowRight aria-hidden /></a>
              </div>
            </div>

            <div className="med2-hero-visual" data-reveal>
              <div className="med2-hero-photo">
                <img src={img("combo-studios-592.webp")} alt="Construção orientada ao vivo na 1ª edição do Conect" loading="eager" />
                <div className="med2-hero-photo-glow" aria-hidden />
              </div>
              <div className="med2-hero-badge">
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
              <h2 className="sb-h2">Onde a IA gera eficiência na <span className="med2-hl">rotina médica</span>.</h2>
              <p className="sb-lead sb-lead-light">
                A rotina médica envolve muito mais do que o atendimento. Agenda, prontuário,
                documentação, convênios, faturamento e gestão consomem tempo relevante do médico e
                da equipe. O Conect.MED mostra onde a IA entra com critério, segurança e utilidade
                prática, respeitando a LGPD, o sigilo profissional e as diretrizes éticas da medicina.
              </p>
            </div>

            <div className="med2-front-grid">
              {fronts.map((f, i) => (
                <article className="med2-front" data-reveal style={{ transitionDelay: `${(i % 2) * 80}ms` }} key={f.num}>
                  <div className="med2-front-head">
                    <span className="med2-front-num">{f.num}</span>
                    <h3>{f.title}</h3>
                  </div>
                  <p className="med2-front-context">"{f.context}"</p>
                  <ul className="med2-front-apps">
                    {f.apps.map((a) => (
                      <li key={a}><Check aria-hidden /> {a}</li>
                    ))}
                  </ul>
                  <div className="med2-front-result">
                    <em>Resultado esperado</em>
                    <p>{f.result}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="med2-quote" data-reveal>
              <p>"IA aplicada à medicina precisa partir da <b>rotina real</b>, não da ferramenta."</p>
              <span>Todos os exemplos do encontro são conectados a situações concretas de consultório.</span>
            </div>
          </div>
        </section>

        {/* CTA FINAL (provisório, será substituído nas próximas ações) */}
        <section className="sb-final">
          <div className="sb-final-card" data-reveal>
            <div className="sb-final-glow" aria-hidden />
            <span className="sb-eyebrow sb-eyebrow-dark">Convites limitados</span>
            <h2 className="sb-h2">Solicite a confirmação do seu convite.</h2>
            <div className="sb-final-actions">
              <CTAButton variant="primary" size="lg" href={WHATSAPP}>Responder pelo WhatsApp</CTAButton>
              <CTAButton variant="glass" size="lg" to="/conect-ai">Ver as três edições</CTAButton>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
