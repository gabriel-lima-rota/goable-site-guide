import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, MessageCircle, Quote, Star, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { AppShell } from "@/components/goable/AppShell";

export const Route = createFileRoute("/conect-ai/gov")({
  head: () => ({
    meta: [
      { property: "og:url", content: "https://goable.ai/conect-ai/gov" },
      { title: "Conect.GOV · IA na gestão pública | 21/07 · Goable AI" },
      { name: "description", content: "Imersão prática de IA para prefeitos, secretários e lideranças municipais. 21 de julho de 2026, Instituto Caldeira, Porto Alegre. Convite exclusivo." },
      { property: "og:title", content: "Conect.GOV · IA na gestão pública" },
      { property: "og:description", content: "21/07/2026 · Instituto Caldeira · Porto Alegre · Convite exclusivo" },
    ],
    links: [{ rel: "canonical", href: "https://goable.ai/conect-ai/gov" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Event", name: "Conect.GOV", description: "Imersao pratica de IA aplicada a gestao publica, para prefeitos, secretarios e liderancas municipais.", startDate: "2026-07-21T09:00:00-03:00", endDate: "2026-07-21T18:00:00-03:00", eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode", eventStatus: "https://schema.org/EventScheduled", location: { "@type": "Place", name: "Instituto Caldeira", address: { "@type": "PostalAddress", addressLocality: "Porto Alegre", addressRegion: "RS", addressCountry: "BR" } }, organizer: [{ "@type": "Organization", name: "Goable AI", url: "https://goable.ai" }, { "@type": "Organization", name: "Camila Rodrigues Assessoria Juridica" }], url: "https://goable.ai/conect-ai/gov" }) },
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqBiz.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }) },
    ],
  }),
  component: GovPage,
});

const img = (file: string) => `/goable-assets/${file}`;
const WHATSAPP = "https://wa.me/555185458646?text=Ol%C3%A1!%20Quero%20solicitar%20o%20convite%20para%20o%20Conect.GOV%20(21%2F07).";

const heroFacts = ["21 de julho · terça", "9h às 18h", "Instituto Caldeira · POA", "Convite exclusivo"];

const indicators: Array<{ value: number; decimals?: number; suffix?: string; label: string }> = [
  { value: 9.71, decimals: 2, label: "NPS da 1ª edição" },
  { value: 97, suffix: "%", label: "de satisfação" },
  { value: 100, suffix: "%", label: "participariam de novo" },
];

const marquee = [
  "Licitações e editais",
  "Termos de referência",
  "Processos administrativos",
  "Protocolos e demandas",
  "Relatórios executivos",
  "Dados para decisão",
  "LGPD e rastreabilidade",
  "Transparência pública",
];

const fronts: Array<{ num: string; title: string; context: string; apps: string[]; result: string }> = [
  {
    num: "01",
    title: "Licitações e compras públicas",
    context: "A área de compras concentra documentos, justificativas, prazos, pesquisas e decisões que precisam de organização e rastreabilidade.",
    apps: ["Apoio à análise de documentos e editais", "Organização de termos de referência, prazos e informações", "Estruturação de relatórios e justificativas", "Comparação de dados para apoio à tomada de decisão", "Acompanhamento de etapas do processo de contratação"],
    result: "Mais controle, menos retrabalho e maior clareza nos processos de contratação.",
  },
  {
    num: "02",
    title: "Processos administrativos",
    context: "Muitas rotinas internas ainda dependem de fluxos manuais, documentos dispersos e equipes que precisam buscar informações em diferentes lugares.",
    apps: ["Automação de tarefas recorrentes", "Padronização de documentos e comunicações internas", "Triagem de demandas e organização de protocolos", "Apoio à elaboração de respostas e relatórios", "Conexão entre áreas, informações e fluxos de trabalho"],
    result: "Menos improviso, mais velocidade e uma operação pública com maior capacidade de execução.",
  },
  {
    num: "03",
    title: "Dados e tomada de decisão",
    context: "Informações importantes existem, mas muitas vezes ficam distribuídas em planilhas, sistemas, documentos e históricos difíceis de consultar.",
    apps: ["Organização de dados administrativos e operacionais", "Relatórios executivos com leitura mais clara", "Painéis de acompanhamento e indicadores", "Apoio à priorização de demandas", "Leitura de cenários para decisões mais consistentes"],
    result: "Mais clareza para decidir, acompanhar resultados e liderar com visão de gestão.",
  },
  {
    num: "04",
    title: "Governança, segurança e transparência",
    context: "O uso de IA na gestão pública precisa considerar responsabilidade, rastreabilidade, controle de acesso e tratamento adequado de informações.",
    apps: ["Boas práticas para uso responsável de IA", "Cuidados com LGPD e dados sensíveis", "Definição de níveis de acesso e fluxos de validação", "Registro e rastreabilidade de informações", "Apoio à transparência e ao controle interno"],
    result: "IA aplicada com critério, segurança institucional e compromisso com a realidade pública.",
  },
];

const immersion: Array<{ title: string; body: string; hands?: boolean }> = [
  { title: "Boas-vindas e diagnóstico", body: "Mapeamento das principais rotinas, gargalos e oportunidades de aplicação de IA na prefeitura." },
  { title: "Fundamentos de IA para gestão pública", body: "O que a IA já permite na rotina municipal e quais cuidados devem orientar o uso no setor público." },
  { title: "Almoço e networking", body: "Encontro entre prefeitos, secretários, lideranças municipais e especialistas em IA aplicada à gestão." },
  { title: "Construção orientada, ao vivo", body: "Você põe a mão: aplicação prática dos conceitos em exemplos de licitações, processos e gestão municipal. Não assiste, constrói.", hands: true },
  { title: "Plano de implementação", body: "Roteiro para começar de forma estruturada, com prioridades e visão dos ganhos nos próximos 30, 60 e 90 dias." },
  { title: "Encerramento", body: "Direcionamento para continuidade e aplicação segura na rotina da gestão pública." },
];

const venueFacts = ["Espaço Caldeira", "Porto Alegre · RS", "Dia completo · almoço incluso", "100% presencial"];

const testimonials: Array<{ photo: string; name: string; role: string; text: string }> = [
  { photo: img("conect-face-1.jpg"), name: "Lucas Arthur Schaelder", role: "Mirasul", text: "Agradeço imensamente pelo tratamento e cuidado do pessoal da organização. Gostei muito do evento dessa maneira mais dinâmica. Agradeço também o conhecimento transmitido, me ensinou muito e espero poder transmitir esse conhecimento da melhor maneira para a minha empresa." },
  { photo: img("conect-face-2.jpg"), name: "Marcio Vinicius", role: "Sócio · Marcio Brindes", text: "soluções de negócios com inteligência artificial é uma realidade, queremos navegar nestes mares, obrigado por traduzir as minhas necessidades como empresa gerando esperança e ânimo para continuar gerando riqueza e agregando valor." },
  { photo: img("conect-face-3.jpg"), name: "Diogo Frantz", role: "Gerente Comercial", text: "Obrigado pela oportunidade de fazer parte deste evento, deste seleto grupo, Edgar e sua equipe são profissionais e pessoas extraordinárias, acessíveis e disponíveis para achar a melhor solução de IA para cada necessidade." },
  { photo: img("conect-face-4.jpg"), name: "Maylon Dias", role: "STM Portaria Remota", text: "Edgar Abreu, com sua nova inovação empresarial Goable AI, demonstrou grande conhecimento com a tecnologia de fácil acesso elevando o empresário ao futuro e gerando menor custo ao final com a melhor tecnologia." },
  { photo: img("conect-face-5.jpg"), name: "Regis Dantas", role: "Sócio Diretor · NX Educação", text: "Parabéns ao Edgar e toda equipe da Goable que proporcionaram um ambiente de extremo aprendizado, colaboração, foi uma entrega fantástica, sem esconder o jogo e compartilhando conteúdo altamente aplicável." },
  { photo: img("conect-face-6.jpg"), name: "Thêmis Loro", role: "Founder · Loro Odontologia", text: "Para nós, da área da saúde, a proposta do curso em usar a IA para administração e podermos dedicar mais tempo para nos dedicarmos aos pacientes vem para colaborar muito com nosso dia a dia." },
  { photo: img("conect-face-7.jpg"), name: "Valdecir Pressi", role: "CFO · Asun Supermercados", text: "Tendo a oportunidade de participar, aproveite. Raramente um evento transmite teoria e ja faz a prática ao vivo. A Goable AI fez de forma memorável. Parabéns Edgar, pela excelente condução." },
];

const fomoCards = [
  { icon: "seats", title: "Convite exclusivo", sub: "Encontro fechado para lideranças municipais" },
  { icon: "cal", title: "1ª edição · 2026", sub: "Vagas limitadas por confirmação" },
  { icon: "zap", title: "Impacto na rotina", sub: "Menos retrabalho na gestão já" },
];

const faqBiz: Array<[string, string]> = [
  ["Preciso entender de tecnologia?", "Não. O foco é a rotina da gestão pública, não código. A parte técnica fica com a Goable."],
  ["É voltado para qual perfil?", "Prefeitos, secretários municipais, gestores públicos e lideranças administrativas que decidem o rumo da prefeitura."],
  ["Vou sair com algo aplicável?", "Você sai com um diagnóstico das oportunidades, aplicações demonstradas ao vivo e um roteiro de implementação de 30, 60 e 90 dias."],
  ["Como funciona o acesso?", "É um encontro exclusivo, por convite, com número reduzido de participantes. Você solicita e o time confirma a disponibilidade."],
  ["E a segurança e a LGPD?", "Uma das frentes é justamente governança: LGPD, dados sensíveis, níveis de acesso, validação humana e rastreabilidade."],
  ["O almoço está incluso?", "Está. É dia completo no Instituto Caldeira, com almoço e networking entre lideranças."],
];

const included = [
  "Dia completo no Instituto Caldeira, com networking entre lideranças municipais",
  "Demonstrações voltadas a licitações, compras públicas e processos administrativos",
  "Diagnóstico de oportunidades para aplicação de IA na prefeitura",
  "Conteúdo prático sobre IA aplicada à gestão pública",
  "Materiais de apoio e direcionamento para continuidade após o evento",
];

const takeaways: Array<[string, string, string]> = [
  ["01", "Diagnóstico das oportunidades da gestão", "Mapeamento dos principais pontos de perda da prefeitura: retrabalho, processos lentos, informações dispersas e rotinas que podem ganhar eficiência."],
  ["02", "Mapa de aplicação em licitações", "Leitura prática de como a IA pode apoiar documentos, prazos, editais, pesquisas, justificativas e etapas ligadas a compras públicas."],
  ["03", "Plano de automação administrativa", "Direcionamento sobre quais rotinas internas podem ser automatizadas primeiro, com prioridade para ganho real e baixo risco operacional."],
  ["04", "Aplicações práticas demonstradas ao vivo", "Exemplos aplicados à rotina municipal para apoiar equipes administrativas, setores de compras, secretarias e áreas de gestão."],
  ["05", "Governança e segurança para IA pública", "Orientações sobre LGPD, dados sensíveis, níveis de acesso, validação humana, rastreabilidade e uso responsável da tecnologia."],
  ["06", "Roteiro de implementação", "Próximos passos para começar de forma estruturada, com prioridades definidas e visão dos ganhos nos próximos 30, 60 e 90 dias."],
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
  const target = new Date("2026-07-21T09:00:00-03:00").getTime();
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
    <div className="gov-count" role="timer" aria-label="Contagem regressiva para o Conect.GOV">
      {units.map(([v, l]) => (
        <span className="gov-count-unit" key={l}>
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

function IconDoc() {
  return (
    <svg viewBox="0 0 48 48" className="gov-fi" aria-hidden>
      <path className="gov-fi-frame" d="M13 6 h16 l7 7 v29 h-30 z" />
      <path className="gov-fi-frame" d="M29 6 v7 h7" />
      <line className="gov-fi-line gov-fi-line-1" x1="17" y1="24" x2="31" y2="24" />
      <line className="gov-fi-line gov-fi-line-2" x1="17" y1="30" x2="31" y2="30" />
      <line className="gov-fi-line gov-fi-line-3" x1="17" y1="36" x2="26" y2="36" />
    </svg>
  );
}
function IconFlow() {
  return (
    <svg viewBox="0 0 48 48" className="gov-fi" aria-hidden>
      <rect className="gov-fi-frame" x="6" y="6" width="12" height="12" rx="3" />
      <rect className="gov-fi-frame" x="30" y="6" width="12" height="12" rx="3" />
      <rect className="gov-fi-frame" x="18" y="30" width="12" height="12" rx="3" />
      <path className="gov-fi-grow" d="M12 18 v3 h24 v-3 M24 21 v9" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg viewBox="0 0 48 48" className="gov-fi" aria-hidden>
      <path className="gov-fi-frame" d="M8 8 v32 h32" />
      <path className="gov-fi-grow" d="M14 32 l8 -7 6 4 12 -13" />
      <path className="gov-fi-arrow" d="M34 16 h6 v6" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg viewBox="0 0 48 48" className="gov-fi" aria-hidden>
      <path className="gov-fi-frame" d="M24 5 l15 6 v10 c0 11 -7 17 -15 21 c-8 -4 -15 -10 -15 -21 v-10 z" />
      <path className="gov-fi-grow" d="M17 24 l5 5 9 -11" />
    </svg>
  );
}

const frontIcons = [IconDoc, IconFlow, IconChart, IconShield];

function FrontCard({ f, index }: { f: (typeof fronts)[number]; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = frontIcons[index];
  return (
    <article
      className={`gov-front ${open ? "is-open" : ""}`}
      data-reveal
      style={{ transitionDelay: `${(index % 2) * 80}ms` }}
      onClick={() => setOpen((v) => !v)}
    >
      <div className="gov-front-top">
        <span className="gov-front-ic"><Icon /></span>
        <div className="gov-front-titles">
          <span className="gov-front-num">{f.num}</span>
          <h3>{f.title}</h3>
        </div>
      </div>
      <p className="gov-front-context">"{f.context}"</p>
      <span className="gov-front-hint" aria-hidden>
        {f.apps.length} aplicações possíveis <ChevronDown />
      </span>
      <div className="gov-front-appswrap">
        <div>
          <ul className="gov-front-apps">
            {f.apps.map((a) => (
              <li key={a}><Check aria-hidden /> {a}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="gov-front-result">
        <em>Resultado esperado</em>
        <p>{f.result}</p>
      </div>
    </article>
  );
}

function AfterMovie() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="gov-movie-frame" data-reveal>
      {playing ? (
        <video
          className="gov-movie-video"
          src={img("conectai-aftermovie.mp4")}
          poster={img("conectai-aftermovie-poster.jpg")}
          controls
          autoPlay
          playsInline
        />
      ) : (
        <button type="button" className="gov-movie-poster" onClick={() => setPlaying(true)} aria-label="Assistir o aftermovie da 1ª edição">
          <img src={img("conectai-aftermovie-poster.jpg")} alt="" loading="lazy" draggable={false} />
          <span className="gov-movie-shade" aria-hidden />
          <span className="gov-movie-top" aria-hidden>
            <i className="gov-movie-chip"><b /> Aftermovie · 1ª edição</i>
            <i className="gov-movie-dur">1:15</i>
          </span>
          <span className="gov-movie-play" aria-hidden>
            <span className="gov-movie-ring" />
            <span className="gov-movie-ring gov-movie-ring-2" />
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
          </span>
          <span className="gov-movie-cta" aria-hidden>Dê o play e sinta a energia da sala</span>
        </button>
      )}
    </div>
  );
}

function FaqListGov() {
  const [open, setOpen] = useState(0);
  return (
    <div className="gov-faq-list">
      {faqBiz.map(([q, a], i) => (
        <div className={`gov-faq-item ${open === i ? "is-open" : ""}`} key={q} data-reveal>
          <button type="button" className="gov-faq-q" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            <span><i className="gov-faq-num">{String(i + 1).padStart(2, "0")}</i>{q}</span>
            <ChevronDown aria-hidden />
          </button>
          <div className="gov-faq-a">
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
          _subject: "Convite · Conect.GOV (21/07) · novo pedido",
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
    <div className="gov-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Solicitar convite">
      <div className="gov-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="gov-modal-close" onClick={onClose} aria-label="Fechar">×</button>
        {sent ? (
          <div className="gov-modal-success">
            <span className="gov-modal-check"><Check aria-hidden /></span>
            <h3>Pedido recebido!</h3>
            <p>
              Seu <b>convite</b> foi solicitado. Nosso time vai entrar em contato para confirmar a
              disponibilidade e os próximos passos do Conect.GOV.
            </p>
            <button type="button" className="gov-btn-primary gov-btn-block" onClick={onClose}>Fechar</button>
          </div>
        ) : (
          <>
            <span className="gov-lote"><i aria-hidden /> Convite · Conect.GOV · 21 de julho</span>
            <h3 className="gov-modal-title">Solicite seu convite</h3>
            <p className="gov-modal-sub">Preencha seus dados e nosso time entra em contato para confirmar seu convite.</p>
            <form className="gov-form" onSubmit={submit}>
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
                <span>Cargo / prefeitura <em>(opcional)</em></span>
                <input name="especialidade" type="text" placeholder="Ex.: Secretário de Administração" />
              </label>
              {error ? (
                <p className="gov-form-error">
                  Não foi possível enviar agora. Tente de novo ou fale direto com o time no{" "}
                  <a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a>.
                </p>
              ) : null}
              <button type="submit" className="gov-btn-primary gov-btn-block" disabled={sending}>
                {sending ? "Enviando..." : "Solicitar meu convite"}
              </button>
              <span className="gov-form-note">Vagas limitadas · o time confirma disponibilidade por ordem de chegada.</span>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function GapChart() {
  return (
    <svg className="gov-gap" viewBox="0 0 420 260" preserveAspectRatio="xMidYMid meet" aria-hidden>
      <defs>
        <linearGradient id="gapAi" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#d4af37" stopOpacity="0.5" />
          <stop offset="1" stopColor="#ecd88f" />
        </linearGradient>
        <linearGradient id="gapFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d4af37" stopOpacity="0.28" />
          <stop offset="1" stopColor="#f5a623" stopOpacity="0" />
        </linearGradient>
      </defs>

      {[70, 110, 150, 190].map((y) => (
        <line key={y} className="gov-gap-grid" x1="30" y1={y} x2="392" y2={y} />
      ))}

      <path className="gov-gap-area" d="M34 150 L128 152 L222 158 L316 164 L392 170 L392 32 L316 60 L222 96 L128 126 L34 150 Z" fill="url(#gapFill)" />

      <path className="gov-gap-noai" d="M34 150 L128 152 L222 158 L316 164 L392 170" />
      <path className="gov-gap-ai" d="M34 150 L128 126 L222 96 L316 60 L392 32" stroke="url(#gapAi)" />

      <circle className="gov-gap-dot-no" cx="392" cy="170" r="4" />
      <circle className="gov-gap-dot-ai" cx="392" cy="32" r="5" />

      <line className="gov-gap-bracket" x1="404" y1="34" x2="404" y2="168" />
      <text className="gov-gap-gaptxt" x="410" y="104">seu atraso</text>

      <text className="gov-gap-lb gov-gap-lb-ai" x="150" y="86">Gestões com IA</text>
      <text className="gov-gap-lb gov-gap-lb-no" x="150" y="180">Ainda "estudando"</text>

      {["Q1", "Q2", "Q3", "Q4"].map((q, i) => (
        <text key={q} className="gov-gap-q" x={128 + i * 94 - 40} y="212">{q}</text>
      ))}
    </svg>
  );
}

function FomoIcon({ kind }: { kind: string }) {
  if (kind === "seats") {
    return (
      <svg viewBox="0 0 44 34" className="gov-fic" aria-hidden>
        {[
          [4, 4], [18, 4], [32, 4], [4, 19], [18, 19],
        ].map(([x, y]) => (
          <rect key={`${x}-${y}`} className="gov-fic-seat" x={x} y={y} width="9" height="11" rx="2" />
        ))}
        <rect className="gov-fic-seat-open" x="32" y="19" width="9" height="11" rx="2" />
      </svg>
    );
  }
  if (kind === "cal") {
    return (
      <svg viewBox="0 0 40 40" className="gov-fic" aria-hidden>
        <rect className="gov-fic-frame" x="7" y="11" width="26" height="22" rx="3" />
        <line className="gov-fic-frame" x1="7" y1="18" x2="33" y2="18" />
        <line className="gov-fic-draw" x1="14" y1="7" x2="14" y2="13" />
        <line className="gov-fic-draw" x1="26" y1="7" x2="26" y2="13" />
        <rect className="gov-fic-mark" x="22" y="22" width="7" height="7" rx="1.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 40 40" className="gov-fic gov-fic-zapwrap" aria-hidden>
      <path className="gov-fic-zap" d="M23 5 L11 22 h7 l-3 13 15 -19 h-8 z" />
    </svg>
  );
}

function GovPage() {
  const ref = useReveal();
  const [leadOpen, setLeadOpen] = useState(false);

  return (
    <AppShell>
      <div className="sb-page gov-page" ref={ref}>
        {/* HERO */}
        <section className="gov-hero" onPointerMove={onHeroPointer} onPointerLeave={onHeroLeave}>
          <div className="gov-grid" aria-hidden />
          <div className="gov-aura" aria-hidden />
          <div className="gov-pulseline" aria-hidden />

          <div className="gov-hero-inner">
            <div className="gov-hero-copy" data-reveal>
              <div className="gov-lockup gov-lockup-v2">
                <span className="gov-lockup-text">Realização Goable AI</span>
                <span className="gov-lockup-div" aria-hidden />
                <span className="gov-lockup-camila">
                  <em>Correalização</em>
                  <img src={img("logo-camila-rodrigues.png")} alt="Camila Rodrigues Assessoria Jurídica" />
                </span>
              </div>

              <span className="gov-chips">
                <i>1ª edição</i>
                <i>Imersão prática em IA</i>
                <i>Exclusivo para lideranças</i>
              </span>

              <h1 className="gov-h1">
                Conect<span className="gov-h1-dot">.</span>GOV
              </h1>
              <p className="gov-sub">IA na prática para a <span className="gov-hl">gestão pública</span>.</p>
              <p className="gov-desc">
                Uma imersão prática para prefeitos, secretários e lideranças municipais: você mapeia
                oportunidades em licitações, compras e processos, e sai com caminhos claros para
                reduzir retrabalho, organizar informações e apoiar decisões com mais segurança.
              </p>

              <div className="gov-facts">
                {heroFacts.map((f) => (
                  <span key={f}>{f}</span>
                ))}
              </div>

              <div className="gov-actions">
                <button type="button" className="gov-btn-primary" onClick={() => setLeadOpen(true)}>
                  <MessageCircle aria-hidden /> Solicitar meu convite
                </button>
                <a className="gov-btn-ghost" href="#imersao">Ver como funciona <ArrowRight aria-hidden /></a>
              </div>
            </div>

            <div className="gov-hero-visual gov-hero-visual-cracha" data-reveal>
              <span className="gov-cracha-glow" aria-hidden />
              <img
                className="gov-cracha"
                src={img("conect-cracha-gov.png")}
                alt="Crachá do Conect.AI 26: Protagonistas do presente, realização Goable AI"
                loading="eager"
                draggable={false}
              />
              <div className="gov-hero-badge gov-hero-badge-cracha">
                <span>Para quem decide</span>
                <strong>Prefeitos · Secretários · Gestores públicos · Lideranças</strong>
              </div>
            </div>
          </div>

          <div className="gov-proof" data-reveal>
            {indicators.map((p) => (
              <article key={p.label}>
                <strong><CountUp value={p.value} decimals={p.decimals} suffix={p.suffix} /></strong>
                <span>{p.label}</span>
              </article>
            ))}
          </div>
        </section>

        {/* LETREIRO */}
        <div className="gov-marquee" aria-hidden>
          <div className="gov-marquee-row">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i}>{m}</span>
            ))}
          </div>
        </div>

        {/* ONDE A IA GERA EFICIÊNCIA */}
        <section className="gov-fronts">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark gov-eyebrow">A oportunidade</span>
              <h2 className="sb-h2">A IA entra onde a prefeitura <span className="gov-hl">perde tempo</span>.</h2>
              <p className="sb-lead sb-lead-light">
                Documentos extensos, prazos, processos manuais e informações espalhadas consomem a
                equipe. Quatro frentes onde a IA entra com segurança e impacto direto na gestão municipal.
              </p>
            </div>

            <div className="gov-front-grid">
              {fronts.map((f, i) => (
                <FrontCard f={f} index={i} key={f.num} />
              ))}
            </div>

            <div className="gov-quote" data-reveal>
              <p>"IA na gestão pública não começa pela ferramenta. Começa pelo <b>processo certo</b>."</p>
              <span>Cada frente é conectada à rotina dos municípios, com foco em aplicação prática, segurança e ganho real para a gestão.</span>
            </div>
          </div>
        </section>

        {/* AFTERMOVIE + ESCASSEZ */}
        <section className="gov-movie">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark gov-eyebrow">Por dentro do evento</span>
              <h2 className="sb-h2">Assista ao que a última turma <span className="gov-hl">viveu</span>.</h2>
            </div>

            <AfterMovie />

            <div className="gov-scarcity" data-reveal>
              <span className="gov-scarcity-badge"><i aria-hidden /> Vagas limitadas</span>
              <p>
                É um <b>encontro exclusivo</b> para lideranças municipais, com número reduzido de
                participantes. Os convites são confirmados por ordem: <b>as vagas são limitadas</b>.
              </p>
              <button type="button" className="gov-btn-primary gov-scarcity-btn" onClick={() => setLeadOpen(true)}>
                <MessageCircle aria-hidden /> Solicitar meu convite agora
              </button>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA A IMERSÃO */}
        <section className="gov-agenda" id="imersao">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow">Como funciona a imersão</span>
              <h2 className="sb-h2 sb-h2-dark">Não é palestra. É a rotina da sua gestão na mesa, das 9h às 18h.</h2>
              <p className="sb-lead">
                Um dia inteiro e presencial no Instituto Caldeira. Você não fica assistindo: mapeia
                as oportunidades da sua gestão e participa da construção das aplicações.
              </p>
            </div>

            <div className="gov-timeline">
              <span className="gov-timeline-rail" aria-hidden />
              {immersion.map((s, i) => (
                <div
                  className={`gov-tl-step ${s.hands ? "is-hands" : ""}`}
                  data-reveal
                  style={{ transitionDelay: `${i * 60}ms` }}
                  key={s.title}
                >
                  <span className="gov-tl-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="gov-tl-dot" aria-hidden />
                  <div className="gov-tl-card">
                    {s.hands ? <span className="gov-tl-tag">Você põe a mão</span> : null}
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O QUE VOCÊ LEVA DO DIA */}
        <section className="gov-take">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark gov-eyebrow">Entregas da imersão</span>
              <h2 className="sb-h2">O que você <span className="gov-hl">leva do dia</span>.</h2>
              <p className="sb-lead sb-lead-light">
                O objetivo não é uma visão genérica sobre IA. É transformar a leitura dos gargalos
                municipais em aplicações possíveis, com método, segurança e foco no que melhora a gestão.
              </p>
            </div>

            <div className="gov-take-grid">
              {takeaways.map(([num, title, body], i) => (
                <article className="gov-take-card" data-reveal style={{ transitionDelay: `${(i % 3) * 70}ms` }} key={num}>
                  <span className="gov-take-num">{num}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <span className="gov-take-pulse" aria-hidden />
                </article>
              ))}
            </div>

            <figure className="gov-photo-band" data-reveal>
              <img src={img("combo-studios-558.webp")} alt="Construção orientada ao vivo na 1ª edição do Conect" loading="lazy" />
              <figcaption>
                <i aria-hidden /> Construção orientada, ao vivo · registro da 1ª edição do Conect
              </figcaption>
            </figure>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="cai-social gov-social">
          <span className="cai-flash cai-flash-1" aria-hidden />
          <span className="cai-flash cai-flash-2" aria-hidden />
          <span className="cai-flash cai-flash-3" aria-hidden />
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark gov-eyebrow">O que disseram os participantes</span>
              <h2 className="sb-h2">Quem passou pela 1ª edição, recomenda.</h2>
              <p className="sb-lead sb-lead-light">
                Avaliações reais de líderes que participaram da 1ª edição. Apenas as que vieram com
                autorização explícita de publicação.
              </p>
            </div>

            <div className="cai-tst-grid">
              {testimonials.map((t, i) => (
                <article className="cai-tst" data-reveal style={{ transitionDelay: `${(i % 3) * 70}ms` }} key={t.name}>
                  <Quote className="cai-tst-quote" aria-hidden />
                  <p className="cai-tst-text">"{t.text}"</p>
                  <div className="cai-tst-foot">
                    <img className="cai-tst-photo" src={t.photo} alt={`Foto de ${t.name}`} loading="lazy" />
                    <span className="cai-tst-who">
                      <strong>{t.name}</strong>
                      <em>{t.role}</em>
                    </span>
                    <span className="cai-tst-badge"><Star aria-hidden /> 10/10</span>
                  </div>
                </article>
              ))}
            </div>

            <a
              className="cai-linkedin"
              data-reveal
              href="https://www.linkedin.com/posts/valdecirpressi_goableai-conectai-cfo-ugcPost-7472818144198180864-4AvH/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="cai-linkedin-ic"><Linkedin aria-hidden /></span>
              <span className="cai-linkedin-body">
                <em>Destaque no LinkedIn</em>
                <p>
                  "Participei do <b>Conect.AI</b> da <b>Goable.AI</b> e saí com a clareza do que
                  aplicar como CFO. Sistemas com IA deixaram de ser promessa e viraram plano de ação."
                </p>
                <strong>Valdecir Pressi · CFO · após a 1ª edição</strong>
              </span>
              <span className="cai-linkedin-cta">Ver no LinkedIn <ArrowUpRight aria-hidden /></span>
            </a>
          </div>
        </section>

        {/* INSTITUTO CALDEIRA */}
        <section className="gov-venue">
          <div className="sb-inner">
            <div className="gov-venue-grid">
              <div className="gov-venue-copy" data-reveal>
                <span className="sb-eyebrow sb-eyebrow-dark gov-eyebrow">Onde acontece</span>
                <h2 className="sb-h2">Um dia dentro do maior hub de inovação do Sul.</h2>
                <p>
                  O Conect.GOV não acontece numa sala de hotel. Ele acontece no <b>Espaço Caldeira, no Instituto
                  Caldeira</b>, em Porto Alegre, o ambiente onde nascem as empresas de tecnologia
                  mais relevantes do país. Você passa o dia onde a inovação realmente acontece.
                </p>
                <div className="gov-venue-facts">
                  {venueFacts.map((f) => (
                    <span key={f}>{f}</span>
                  ))}
                </div>
              </div>
              <div className="gov-venue-photos" data-reveal>
                <figure className="gov-venue-fig gov-venue-fig-lg">
                  <img src={img("caldeira-espaco.jpg")} alt="Espaço Caldeira, onde acontece o Conect.GOV" loading="lazy" />
                  <figcaption><strong>Espaço Caldeira</strong><span>O ambiente da imersão do dia</span></figcaption>
                </figure>
                <figure className="gov-venue-fig">
                  <img src={img("caldeira-campus.jpg")} alt="Instituto Caldeira, Porto Alegre" loading="lazy" />
                  <figcaption><strong>Instituto Caldeira</strong><span>Hub de inovação em Porto Alegre</span></figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* CUSTO DE FICAR DE FORA */}
        <section className="gov-fomo">
          <div className="sb-inner">
            <div className="gov-fomo-shell" data-reveal>
              <div className="gov-fomo-glow" aria-hidden />
              <div className="gov-fomo-scan" aria-hidden />
              <div className="gov-fomo-top">
                <div className="gov-fomo-copy">
                  <span className="gov-fomo-eyebrow">
                    <svg className="gov-fomo-warn" viewBox="0 0 24 24" aria-hidden><path d="M12 3 L22 20 H2 Z" /><line x1="12" y1="10" x2="12" y2="15" /><circle cx="12" cy="17.6" r="0.6" /></svg>
                    O custo de adiar
                  </span>
                  <h2 className="gov-fomo-h2">
                    Cada mês sem IA é <span className="gov-fomo-hl">retrabalho, prazo perdido e decisão no escuro</span> na sua prefeitura.
                  </h2>
                  <p className="gov-fomo-lead">
                    Enquanto a gestão debate se vale a pena, o volume de documentos, prazos e
                    demandas só cresce. As prefeituras que estruturam IA agora ganham controle,
                    velocidade e transparência, e respondem mais rápido ao cidadão.
                  </p>
                  <button type="button" className="gov-fomo-btn" onClick={() => setLeadOpen(true)}>
                    Não quero ficar para trás <ArrowRight aria-hidden />
                  </button>
                </div>

                <div className="gov-fomo-chart" data-reveal>
                  <GapChart />
                </div>
              </div>

              <div className="gov-fomo-grid">
                {fomoCards.map((c, i) => (
                  <div className="gov-fomo-mini" data-reveal style={{ transitionDelay: `${i * 80}ms` }} key={c.title}>
                    <span className="gov-fomo-mini-ic"><FomoIcon kind={c.icon} /></span>
                    <strong>{c.title}</strong>
                    <span>{c.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONVITE: incluso + cortesia + cronometro */}
        <section className="gov-enroll">
          <div className="gov-enroll-card" data-reveal>
            <div className="gov-enroll-glow" aria-hidden />
            <span className="gov-enroll-cone gov-enroll-cone-l" aria-hidden />
            <span className="gov-enroll-cone gov-enroll-cone-r" aria-hidden />

            <div className="gov-enroll-grid">
              <div className="gov-enroll-left">
                <span className="sb-eyebrow sb-eyebrow-dark gov-eyebrow">O que está incluso nessa experiência</span>
                <ul className="gov-included">
                  {included.map((item) => (
                    <li key={item}><Check aria-hidden /> {item}</li>
                  ))}
                </ul>
                <div className="gov-price">
                  <span className="gov-lote"><i aria-hidden /> Convite exclusivo</span>
                  <p className="gov-price-value"><s>R$ 3.900</s> <span className="gov-price-free">Cortesia</span></p>
                  <p className="gov-price-line">por convite exclusivo</p>
                  <span className="gov-price-note">Encontro fechado para lideranças municipais. Vagas limitadas, mediante confirmação de disponibilidade.</span>
                </div>
              </div>

              <div className="gov-enroll-right">
                <h2>Solicite a confirmação do seu convite.</h2>
                <p>O Conect.GOV começa em:</p>
                <Countdown />
                <button type="button" className="gov-btn-primary gov-btn-block" onClick={() => setLeadOpen(true)}>
                  Solicitar meu convite <ArrowRight aria-hidden />
                </button>
                <span className="gov-enroll-note">Encontro exclusivo · confirmação por disponibilidade.</span>
                <Link className="gov-enroll-alt" to="/conect-ai">Conhecer as três edições do Conect.AI <ArrowUpRight aria-hidden /></Link>
              </div>
            </div>

            <div className="gov-enroll-foot" aria-hidden>
              <span>Convite exclusivo · o nosso time confirma sua participação e os próximos passos</span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="gov-faq">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark gov-eyebrow">Perguntas rápidas</span>
              <h2 className="sb-h2">Antes de garantir sua vaga.</h2>
            </div>
            <FaqListGov />
          </div>
        </section>

        {/* REALIZAÇÃO (faixa simples antes do rodapé) */}
        <div className="gov-credits">
          <div className="sb-inner gov-credits-inner">
            <span className="gov-credit">
              <em>Realização</em>
              <img className="gov-credit-goable" src={img("logo-branco-tight.png")} alt="Goable AI" />
            </span>
            <span className="gov-credit-sep" aria-hidden />
            <span className="gov-credit">
              <em>Correalização</em>
              <img className="gov-credit-camila" src={img("logo-camila-rodrigues.png")} alt="Camila Rodrigues Assessoria Jurídica" />
            </span>
          </div>
        </div>
        <LeadModal open={leadOpen} onClose={() => setLeadOpen(false)} />
      </div>
    </AppShell>
  );
}
