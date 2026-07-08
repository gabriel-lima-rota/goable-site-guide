import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, MessageCircle, Quote, Star, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { AppShell } from "@/components/goable/AppShell";

export const Route = createFileRoute("/conect-ai/business")({
  head: () => ({
    meta: [
      { title: "Conect.Business · IA aplicada à operação empresarial | 23/07 · Goable AI" },
      { name: "description", content: "Imersão prática de IA para empresários, founders, C-levels e gestores. 23 de julho de 2026, Instituto Caldeira, Porto Alegre. 2ª edição, última turma de 2026." },
      { property: "og:title", content: "Conect.Business · IA aplicada à operação empresarial" },
      { property: "og:description", content: "23/07/2026 · Instituto Caldeira · Porto Alegre · Última turma de 2026" },
    ],
  }),
  component: BusinessPage,
});

const img = (file: string) => `/goable-assets/${file}`;
const WHATSAPP = "https://wa.me/555185458646?text=Ol%C3%A1!%20Quero%20garantir%20minha%20vaga%20no%20Lote%201%20do%20Conect.Business%20(23%2F07).";

const heroFacts = ["23 de julho · quinta", "9h às 18h", "Instituto Caldeira · POA", "Sala fechada · poucas vagas"];

const indicators: Array<{ value: number; decimals?: number; suffix?: string; label: string }> = [
  { value: 9.71, decimals: 2, label: "NPS da 1ª edição" },
  { value: 97, suffix: "%", label: "de satisfação" },
  { value: 100, suffix: "%", label: "participariam de novo" },
  { value: 40, suffix: "+", label: "empresas presentes" },
];

const marquee = [
  "Automação de processos",
  "Comercial e pré-vendas",
  "Follow-up inteligente",
  "Marketing em escala",
  "Painéis e indicadores",
  "Back-office com IA",
  "Assistente da empresa",
  "Dados que viram decisão",
];

const fronts: Array<{ num: string; title: string; context: string; apps: string[]; result: string }> = [
  {
    num: "01",
    title: "Operação e processos",
    context: "Rotinas internas ainda dependem de planilhas, mensagens soltas, aprovações manuais e pessoas que precisam lembrar de tudo.",
    apps: ["Automação de fluxos internos e back-office", "Geração de documentos, contratos e relatórios", "Triagem de demandas e atendimento inicial com IA", "Conexão entre sistemas, dados e processos", "Padronização de tarefas recorrentes"],
    result: "Menos retrabalho, mais controle e uma operação com maior capacidade de execução.",
  },
  {
    num: "02",
    title: "Comercial e receita",
    context: "Muitas oportunidades se perdem por falta de acompanhamento, demora no retorno, histórico desorganizado ou baixa visibilidade do funil.",
    apps: ["Qualificação de leads e pré-vendas com IA", "Follow-up inteligente e personalizado", "Propostas comerciais geradas com mais velocidade", "Análise de reuniões, objeções e oportunidades", "Reativação de clientes e previsibilidade de pipeline"],
    result: "Mais consistência comercial, mais velocidade de resposta e melhor aproveitamento das oportunidades.",
  },
  {
    num: "03",
    title: "Marketing e marca",
    context: "Produzir conteúdo, manter presença digital e adaptar mensagens para diferentes públicos exige método, volume e consistência.",
    apps: ["Conteúdo em escala no tom da empresa", "Segmentação por perfil de cliente", "Páginas, campanhas e comunicações com IA", "Análise de concorrência e posicionamento", "Padronização da comunicação entre canais"],
    result: "Uma marca mais presente, mais consistente e menos dependente de processos manuais.",
  },
  {
    num: "04",
    title: "Gestão e financeiro",
    context: "Decisões importantes ainda são tomadas com dados fragmentados, relatórios atrasados e pouca visibilidade sobre custos, contratos e indicadores.",
    apps: ["Painéis de gestão e indicadores em tempo real", "Consolidação de dados financeiros e operacionais", "Análise de contratos, fornecedores e plataformas", "Relatórios executivos automatizados", "Apoio à gestão de riscos, compliance e auditoria"],
    result: "Mais clareza para decidir, mais controle sobre a operação e menos surpresa no fechamento do mês.",
  },
];

const immersion: Array<{ title: string; body: string; hands?: boolean }> = [
  { title: "Boas-vindas e diagnóstico", body: "Mapeamento das principais rotinas, gargalos e oportunidades de aplicação de IA na sua empresa." },
  { title: "Fundamentos aplicados de IA", body: "O que a IA já resolve hoje na operação, sem tecniquês, com exemplos concretos de negócio." },
  { title: "Almoço e networking", body: "Encontro entre empresários, founders, C-levels e especialistas em IA aplicada. Networking de verdade." },
  { title: "Construção orientada, ao vivo", body: "Você põe a mão: monta aplicações de IA para a sua operação, guiado passo a passo. Não assiste, constrói.", hands: true },
  { title: "Plano de eficiência e crescimento", body: "Onde a IA reduz esforço, melhora produtividade e abre novas frentes de receita, com prioridades claras." },
  { title: "Encerramento", body: "Assistente com o contexto da sua empresa e trilha de continuidade com a Goable." },
];

const venueFacts = ["Porto Alegre · RS", "Dia completo · almoço incluso", "Sala fechada", "100% presencial"];

const testimonials: Array<{ photo: string; name: string; role: string; text: string }> = [
  { photo: img("conect-face-1.jpg"), name: "Lucas Arthur Schaelder", role: "Mirasul", text: "Agradeço imensamente pelo tratamento e cuidado do pessoal da organização. Gostei muito do evento dessa maneira mais dinâmica. Agradeço também o conhecimento transmitido, me ensinou muito e espero poder transmitir esse conhecimento da melhor maneira para a minha empresa." },
  { photo: img("conect-face-2.jpg"), name: "Marcio (Vinicius)", role: "Sócio administrador", text: "soluções de negócios com inteligência artificial é uma realidade, queremos navegar nestes mares, obrigado por traduzir as minhas necessidades como empresa gerando esperança e ânimo para continuar gerando riqueza e agregando valor." },
  { photo: img("conect-face-3.jpg"), name: "Diogo Frantz", role: "Gerente Comercial", text: "Obrigado pela oportunidade de fazer parte deste evento, deste seleto grupo, Edgar e sua equipe são profissionais e pessoas extraordinárias, acessíveis e disponíveis para achar a melhor solução de IA para cada necessidade." },
  { photo: img("conect-face-4.jpg"), name: "Maylon Dias", role: "STM Portaria Remota", text: "Edgar Abreu, com sua nova inovação empresarial Goable AI, demonstrou grande conhecimento com a tecnologia de fácil acesso elevando o empresário ao futuro e gerando menor custo ao final com a melhor tecnologia." },
  { photo: img("conect-face-5.jpg"), name: "Regis Dantas", role: "Sócio Diretor · NX Educação", text: "Parabéns ao Edgar e toda equipe da Goable que proporcionaram um ambiente de extremo aprendizado, colaboração, foi uma entrega fantástica, sem esconder o jogo e compartilhando conteúdo altamente aplicável." },
  { photo: img("conect-face-6.jpg"), name: "Thêmis Loro", role: "Founder · Loro Odontologia", text: "Para nós, da área da saúde, a proposta do curso em usar a IA para administração e podermos dedicar mais tempo para nos dedicarmos aos pacientes vem para colaborar muito com nosso dia a dia." },
  { photo: img("conect-face-7.jpg"), name: "Valdecir Pressi", role: "CFO · Asun Supermercados", text: "Tendo a oportunidade de participar, aproveite. Raramente um evento transmite teoria e ja faz a prática ao vivo. A Goable AI fez de forma memorável. Parabéns Edgar, pela excelente condução." },
  { photo: img("conect-face-8.jpg"), name: "Alam Casartelli", role: "CEO, Sócio e Fundador", text: "Fico feliz em ver meu amigo Edgar brilhando os olhos nesse novo empreendimento. Temos negócios e expertises que se complementam muito." },
  { photo: img("conect-face-9.jpg"), name: "Jorge Scherer", role: "CEO · Jorge Scherer Fotógrafo", text: "fiquei muito inspirado com esse curso que basicamente me abriu a mente para esse universo!!" },
];

const fomoCards = [
  { icon: "seats", title: "Turma reduzida", sub: "Vagas curadas por perfil de decisor" },
  { icon: "cal", title: "Última em 2026", sub: "Próxima edição só em 2027" },
  { icon: "zap", title: "Impacto imediato", sub: "Sistemas rodando no dia seguinte" },
];

const faqBiz: Array<[string, string]> = [
  ["Preciso entender de tecnologia?", "Não. O foco é o seu negócio, não código. A parte técnica fica com a Goable, você foca em onde a IA gera resultado."],
  ["É para o meu segmento?", "Sim. A imersão é construída em cima da sua operação real, seja indústria, serviço, varejo ou tecnologia."],
  ["Vou sair com algo pronto?", "Você sai com aplicações construídas ao vivo, um mapa de oportunidades e um plano de eficiência e crescimento."],
  ["Por que é a última turma de 2026?", "É a 2ª e última edição do ano. A próxima só acontece em 2027, com valor reajustado."],
  ["Como funciona o pagamento?", "Ingresso individual no Lote 1, à vista ou parcelado no cartão. Você garante pelo formulário e o time confirma os próximos passos."],
  ["Posso levar mais pessoas da empresa?", "Pode. Fale com o time no formulário que a gente organiza a participação do seu grupo."],
];

const included = [
  "Dia completo no Instituto Caldeira, com almoço e networking",
  "Construção prática de aplicações de IA ao vivo",
  "Assistente de IA com o contexto da sua empresa",
  "Networking com empresários, founders e gestores decisores",
  "Materiais de apoio e trilha de continuidade com a Goable",
];

const takeaways: Array<[string, string, string]> = [
  ["01", "Aplicações de IA configuradas ao vivo", "Você participa da construção de aplicações práticas para apoiar atendimento, comercial, back-office, financeiro, marketing e gestão."],
  ["02", "Mapa de oportunidades da operação", "Identificação dos principais pontos de perda: tarefas repetitivas, retrabalho, dados dispersos, processos lentos e etapas automatizáveis."],
  ["03", "Plano de eficiência e crescimento", "Direcionamento sobre onde a IA pode reduzir esforço operacional, melhorar a produtividade e apoiar novas frentes de receita."],
  ["04", "Automação de processos internos", "Exemplos aplicáveis para rotinas administrativas, atendimento, jurídico, financeiro, comercial e gestão de documentos."],
  ["05", "Governança e segurança", "Orientações para uso responsável de IA, considerando LGPD, dados sensíveis, níveis de acesso, política interna e segurança da informação."],
  ["06", "Assistente com o contexto da empresa", "Construção orientada de um assistente de IA treinado com a linguagem, os processos, os documentos e as necessidades reais do negócio."],
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
  const target = new Date("2026-07-23T09:00:00-03:00").getTime();
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
    <div className="biz-count" role="timer" aria-label="Contagem regressiva para o Conect.Business">
      {units.map(([v, l]) => (
        <span className="biz-count-unit" key={l}>
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

function IconFlow() {
  return (
    <svg viewBox="0 0 48 48" className="biz-fi" aria-hidden>
      <rect className="biz-fi-frame" x="6" y="6" width="12" height="12" rx="3" />
      <rect className="biz-fi-frame" x="30" y="6" width="12" height="12" rx="3" />
      <rect className="biz-fi-frame" x="18" y="30" width="12" height="12" rx="3" />
      <path className="biz-fi-grow" d="M12 18 v3 h24 v-3 M24 21 v9" />
    </svg>
  );
}
function IconFunnel() {
  return (
    <svg viewBox="0 0 48 48" className="biz-fi" aria-hidden>
      <path className="biz-fi-frame" d="M7 9 h34 l-12 15 v12 l-10 5 v-17 z" />
      <path className="biz-fi-arrow" d="M24 32 v-9 M20 27 l4 -4 4 4" />
    </svg>
  );
}
function IconMega() {
  return (
    <svg viewBox="0 0 48 48" className="biz-fi" aria-hidden>
      <path className="biz-fi-frame" d="M6 20 v8 h6 l18 8 V12 l-18 8 z" />
      <path className="biz-fi-ecg" d="M34 16 q7 8 0 16 M39 11 q11 13 0 26" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg viewBox="0 0 48 48" className="biz-fi" aria-hidden>
      <path className="biz-fi-frame" d="M8 8 v32 h32" />
      <path className="biz-fi-grow" d="M14 32 l8 -7 6 4 12 -13" />
      <path className="biz-fi-arrow" d="M34 16 h6 v6" />
    </svg>
  );
}

const frontIcons = [IconFlow, IconFunnel, IconMega, IconChart];

function FrontCard({ f, index }: { f: (typeof fronts)[number]; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = frontIcons[index];
  return (
    <article
      className={`biz-front ${open ? "is-open" : ""}`}
      data-reveal
      style={{ transitionDelay: `${(index % 2) * 80}ms` }}
      onClick={() => setOpen((v) => !v)}
    >
      <div className="biz-front-top">
        <span className="biz-front-ic"><Icon /></span>
        <div className="biz-front-titles">
          <span className="biz-front-num">{f.num}</span>
          <h3>{f.title}</h3>
        </div>
      </div>
      <p className="biz-front-context">"{f.context}"</p>
      <span className="biz-front-hint" aria-hidden>
        {f.apps.length} aplicações possíveis <ChevronDown />
      </span>
      <div className="biz-front-appswrap">
        <div>
          <ul className="biz-front-apps">
            {f.apps.map((a) => (
              <li key={a}><Check aria-hidden /> {a}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="biz-front-result">
        <em>Resultado esperado</em>
        <p>{f.result}</p>
      </div>
    </article>
  );
}

function AfterMovie() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="biz-movie-frame" data-reveal>
      {playing ? (
        <video
          className="biz-movie-video"
          src={img("conectai-aftermovie.mp4")}
          poster={img("conectai-aftermovie-poster.jpg")}
          controls
          autoPlay
          playsInline
        />
      ) : (
        <button type="button" className="biz-movie-poster" onClick={() => setPlaying(true)} aria-label="Assistir o aftermovie da 1ª edição">
          <img src={img("conectai-aftermovie-poster.jpg")} alt="" loading="lazy" draggable={false} />
          <span className="biz-movie-shade" aria-hidden />
          <span className="biz-movie-top" aria-hidden>
            <i className="biz-movie-chip"><b /> Aftermovie · 1ª edição</i>
            <i className="biz-movie-dur">1:15</i>
          </span>
          <span className="biz-movie-play" aria-hidden>
            <span className="biz-movie-ring" />
            <span className="biz-movie-ring biz-movie-ring-2" />
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z" /></svg>
          </span>
          <span className="biz-movie-cta" aria-hidden>Dê o play e sinta a energia da sala</span>
        </button>
      )}
    </div>
  );
}

function FaqListBiz() {
  const [open, setOpen] = useState(0);
  return (
    <div className="biz-faq-list">
      {faqBiz.map(([q, a], i) => (
        <div className={`biz-faq-item ${open === i ? "is-open" : ""}`} key={q} data-reveal>
          <button type="button" className="biz-faq-q" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
            <span><i className="biz-faq-num">{String(i + 1).padStart(2, "0")}</i>{q}</span>
            <ChevronDown aria-hidden />
          </button>
          <div className="biz-faq-a">
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
          _subject: "Lote 1 · Conect.Business (23/07) · novo pedido de vaga",
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
    <div className="biz-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Garantir vaga no Lote 1">
      <div className="biz-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="biz-modal-close" onClick={onClose} aria-label="Fechar">×</button>
        {sent ? (
          <div className="biz-modal-success">
            <span className="biz-modal-check"><Check aria-hidden /></span>
            <h3>Pedido recebido!</h3>
            <p>
              Sua vaga do <b>Lote 1</b> está pré-reservada. Nosso time vai entrar em contato para
              confirmar os dados e concluir a sua inscrição no Conect.Business.
            </p>
            <button type="button" className="biz-btn-primary biz-btn-block" onClick={onClose}>Fechar</button>
          </div>
        ) : (
          <>
            <span className="biz-lote"><i aria-hidden /> Lote 1 · Conect.Business · 23 de julho</span>
            <h3 className="biz-modal-title">Garanta sua vaga no Lote 1</h3>
            <p className="biz-modal-sub">Preencha seus dados e nosso time entra em contato para concluir a inscrição.</p>
            <form className="biz-form" onSubmit={submit}>
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
                <p className="biz-form-error">
                  Não foi possível enviar agora. Tente de novo ou fale direto com o time no{" "}
                  <a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a>.
                </p>
              ) : null}
              <button type="submit" className="biz-btn-primary biz-btn-block" disabled={sending}>
                {sending ? "Enviando..." : "Garantir minha vaga no Lote 1"}
              </button>
              <span className="biz-form-note">Vagas limitadas · o time confirma disponibilidade por ordem de chegada.</span>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function GapChart() {
  return (
    <svg className="biz-gap" viewBox="0 0 420 260" preserveAspectRatio="xMidYMid meet" aria-hidden>
      <defs>
        <linearGradient id="gapAi" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#f5a623" stopOpacity="0.5" />
          <stop offset="1" stopColor="#ffcf6b" />
        </linearGradient>
        <linearGradient id="gapFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f5a623" stopOpacity="0.28" />
          <stop offset="1" stopColor="#f5a623" stopOpacity="0" />
        </linearGradient>
      </defs>

      {[70, 110, 150, 190].map((y) => (
        <line key={y} className="biz-gap-grid" x1="30" y1={y} x2="392" y2={y} />
      ))}

      <path className="biz-gap-area" d="M34 150 L128 152 L222 158 L316 164 L392 170 L392 32 L316 60 L222 96 L128 126 L34 150 Z" fill="url(#gapFill)" />

      <path className="biz-gap-noai" d="M34 150 L128 152 L222 158 L316 164 L392 170" />
      <path className="biz-gap-ai" d="M34 150 L128 126 L222 96 L316 60 L392 32" stroke="url(#gapAi)" />

      <circle className="biz-gap-dot-no" cx="392" cy="170" r="4" />
      <circle className="biz-gap-dot-ai" cx="392" cy="32" r="5" />

      <line className="biz-gap-bracket" x1="404" y1="34" x2="404" y2="168" />
      <text className="biz-gap-gaptxt" x="410" y="104">seu atraso</text>

      <text className="biz-gap-lb biz-gap-lb-ai" x="150" y="86">Empresas com IA</text>
      <text className="biz-gap-lb biz-gap-lb-no" x="150" y="180">Ainda "estudando"</text>

      {["Q1", "Q2", "Q3", "Q4"].map((q, i) => (
        <text key={q} className="biz-gap-q" x={128 + i * 94 - 40} y="212">{q}</text>
      ))}
    </svg>
  );
}

function FomoIcon({ kind }: { kind: string }) {
  if (kind === "seats") {
    return (
      <svg viewBox="0 0 44 34" className="biz-fic" aria-hidden>
        {[
          [4, 4], [18, 4], [32, 4], [4, 19], [18, 19],
        ].map(([x, y]) => (
          <rect key={`${x}-${y}`} className="biz-fic-seat" x={x} y={y} width="9" height="11" rx="2" />
        ))}
        <rect className="biz-fic-seat-open" x="32" y="19" width="9" height="11" rx="2" />
      </svg>
    );
  }
  if (kind === "cal") {
    return (
      <svg viewBox="0 0 40 40" className="biz-fic" aria-hidden>
        <rect className="biz-fic-frame" x="7" y="11" width="26" height="22" rx="3" />
        <line className="biz-fic-frame" x1="7" y1="18" x2="33" y2="18" />
        <line className="biz-fic-draw" x1="14" y1="7" x2="14" y2="13" />
        <line className="biz-fic-draw" x1="26" y1="7" x2="26" y2="13" />
        <rect className="biz-fic-mark" x="22" y="22" width="7" height="7" rx="1.5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 40 40" className="biz-fic biz-fic-zapwrap" aria-hidden>
      <path className="biz-fic-zap" d="M23 5 L11 22 h7 l-3 13 15 -19 h-8 z" />
    </svg>
  );
}

function BusinessPage() {
  const ref = useReveal();
  const [leadOpen, setLeadOpen] = useState(false);

  return (
    <AppShell>
      <div className="sb-page biz-page" ref={ref}>
        {/* HERO */}
        <section className="biz-hero" onPointerMove={onHeroPointer} onPointerLeave={onHeroLeave}>
          <div className="biz-grid" aria-hidden />
          <div className="biz-aura" aria-hidden />
          <div className="biz-pulseline" aria-hidden />

          <div className="biz-hero-inner">
            <div className="biz-hero-copy" data-reveal>
              <span className="biz-kicker">2ª edição · Última turma de 2026</span>

              <span className="biz-chips">
                <i>Workshop de 1 dia</i>
                <i>Acesso exclusivo</i>
                <i>Poucas vagas</i>
              </span>

              <h1 className="biz-h1">
                Conect<span className="biz-h1-dot">.</span>Business
              </h1>
              <p className="biz-sub">IA aplicada à <span className="biz-hl">operação empresarial</span>.</p>
              <p className="biz-desc">
                Uma imersão prática para empresários, founders, C-levels e gestores: você mapeia
                oportunidades, constrói aplicações com IA e sai com caminhos claros para reduzir
                retrabalho, organizar processos e transformar dados em decisão.
              </p>

              <div className="biz-facts">
                {heroFacts.map((f) => (
                  <span key={f}>{f}</span>
                ))}
              </div>

              <div className="biz-actions">
                <button type="button" className="biz-btn-primary" onClick={() => setLeadOpen(true)}>
                  <MessageCircle aria-hidden /> Garantir minha vaga
                </button>
                <a className="biz-btn-ghost" href="#imersao">Ver como funciona <ArrowRight aria-hidden /></a>
              </div>
            </div>

            <div className="biz-hero-visual biz-hero-visual-cracha" data-reveal>
              <span className="biz-cracha-glow" aria-hidden />
              <img
                className="biz-cracha"
                src={img("conect-cracha-business.png")}
                alt="Crachá do Conect.AI 26: Protagonistas do presente, realização Goable AI"
                loading="eager"
                draggable={false}
              />
              <div className="biz-hero-badge biz-hero-badge-cracha">
                <span>Para quem decide</span>
                <strong>Empresários · Founders · C-levels · Gestores decisores</strong>
              </div>
            </div>
          </div>

          <div className="biz-proof" data-reveal>
            {indicators.map((p) => (
              <article key={p.label}>
                <strong><CountUp value={p.value} decimals={p.decimals} suffix={p.suffix} /></strong>
                <span>{p.label}</span>
              </article>
            ))}
          </div>
        </section>

        {/* LETREIRO */}
        <div className="biz-marquee" aria-hidden>
          <div className="biz-marquee-row">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i}>{m}</span>
            ))}
          </div>
        </div>

        {/* ONDE A IA GERA EFICIÊNCIA */}
        <section className="biz-fronts">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark biz-eyebrow">A oportunidade</span>
              <h2 className="sb-h2">A IA entra onde a empresa <span className="biz-hl">perde dinheiro</span>.</h2>
              <p className="sb-lead sb-lead-light">
                Processos manuais, comercial disperso, marketing sem escala e decisões no escuro
                custam caro. Quatro frentes onde a IA entra com segurança e impacto direto na operação.
              </p>
            </div>

            <div className="biz-front-grid">
              {fronts.map((f, i) => (
                <FrontCard f={f} index={i} key={f.num} />
              ))}
            </div>

            <div className="biz-quote" data-reveal>
              <p>"IA aplicada não começa pela ferramenta. Começa pelo <b>problema certo</b>."</p>
              <span>Cada frente é conectada à realidade dos participantes, com foco em aplicação prática e impacto mensurável.</span>
            </div>
          </div>
        </section>

        {/* AFTERMOVIE + ESCASSEZ */}
        <section className="biz-movie">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark biz-eyebrow">Por dentro do evento</span>
              <h2 className="sb-h2">Assista ao que a última turma <span className="biz-hl">viveu</span>.</h2>
            </div>

            <AfterMovie />

            <div className="biz-scarcity" data-reveal>
              <span className="biz-scarcity-badge"><i aria-hidden /> Vagas limitadas</span>
              <p>
                Esta é a <b>última turma de 2026</b>. A sala é fechada e as vagas são poucas: a
                próxima edição do Conect.Business só acontece em <b>2027</b>.
              </p>
              <button type="button" className="biz-btn-primary biz-scarcity-btn" onClick={() => setLeadOpen(true)}>
                <MessageCircle aria-hidden /> Garantir minha vaga agora
              </button>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA A IMERSÃO */}
        <section className="biz-agenda" id="imersao">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow">Como funciona a imersão</span>
              <h2 className="sb-h2 sb-h2-dark">Não é palestra. É a sua operação na mesa, das 9h às 18h.</h2>
              <p className="sb-lead">
                Um dia inteiro e presencial no Instituto Caldeira. Você não fica assistindo: mapeia
                as oportunidades da sua operação e participa da construção das aplicações.
              </p>
            </div>

            <div className="biz-timeline">
              <span className="biz-timeline-rail" aria-hidden />
              {immersion.map((s, i) => (
                <div
                  className={`biz-tl-step ${s.hands ? "is-hands" : ""}`}
                  data-reveal
                  style={{ transitionDelay: `${i * 60}ms` }}
                  key={s.title}
                >
                  <span className="biz-tl-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="biz-tl-dot" aria-hidden />
                  <div className="biz-tl-card">
                    {s.hands ? <span className="biz-tl-tag">Você põe a mão</span> : null}
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O QUE VOCÊ LEVA DO DIA */}
        <section className="biz-take">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark biz-eyebrow">Entregas da imersão</span>
              <h2 className="sb-h2">O que você <span className="biz-hl">leva do dia</span>.</h2>
              <p className="sb-lead sb-lead-light">
                O objetivo não é uma visão genérica sobre IA. É transformar a leitura dos gargalos
                da empresa em aplicações práticas, com método, segurança e foco no que gera resultado.
              </p>
            </div>

            <div className="biz-take-grid">
              {takeaways.map(([num, title, body], i) => (
                <article className="biz-take-card" data-reveal style={{ transitionDelay: `${(i % 3) * 70}ms` }} key={num}>
                  <span className="biz-take-num">{num}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <span className="biz-take-pulse" aria-hidden />
                </article>
              ))}
            </div>

            <figure className="biz-photo-band" data-reveal>
              <img src={img("combo-studios-558.webp")} alt="Construção orientada ao vivo na 1ª edição do Conect" loading="lazy" />
              <figcaption>
                <i aria-hidden /> Construção orientada, ao vivo · registro da 1ª edição do Conect
              </figcaption>
            </figure>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="cai-social biz-social">
          <span className="cai-flash cai-flash-1" aria-hidden />
          <span className="cai-flash cai-flash-2" aria-hidden />
          <span className="cai-flash cai-flash-3" aria-hidden />
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark biz-eyebrow">O que disseram os participantes</span>
              <h2 className="sb-h2">Quem passou pela 1ª edição, recomenda.</h2>
              <p className="sb-lead sb-lead-light">
                Avaliações reais de empresários e gestores que participaram. Apenas as que vieram com
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
        <section className="biz-venue">
          <div className="sb-inner">
            <div className="biz-venue-grid">
              <div className="biz-venue-copy" data-reveal>
                <span className="sb-eyebrow sb-eyebrow-dark biz-eyebrow">Onde acontece</span>
                <h2 className="sb-h2">Um dia dentro do maior hub de inovação do Sul.</h2>
                <p>
                  O Conect.Business não acontece numa sala de hotel. Ele acontece no <b>Instituto
                  Caldeira</b>, em Porto Alegre, o ambiente onde nascem as empresas de tecnologia
                  mais relevantes do país. Você passa o dia onde a inovação realmente acontece.
                </p>
                <div className="biz-venue-facts">
                  {venueFacts.map((f) => (
                    <span key={f}>{f}</span>
                  ))}
                </div>
              </div>
              <div className="biz-venue-photos" data-reveal>
                <figure className="biz-venue-fig biz-venue-fig-lg">
                  <img src={img("caldeira-campus.jpg")} alt="Campus Caldeira, Instituto Caldeira em Porto Alegre" loading="lazy" />
                  <figcaption><strong>Campus Caldeira</strong><span>Hub de inovação no coração de Porto Alegre</span></figcaption>
                </figure>
                <figure className="biz-venue-fig">
                  <img src={img("caldeira-sala.jpg")} alt="Sala da imersão do Conect.Business" loading="lazy" />
                  <figcaption><strong>Sala da imersão</strong><span>Formato reduzido, foco em construção</span></figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* CUSTO DE FICAR DE FORA */}
        <section className="biz-fomo">
          <div className="sb-inner">
            <div className="biz-fomo-shell" data-reveal>
              <div className="biz-fomo-glow" aria-hidden />
              <div className="biz-fomo-scan" aria-hidden />
              <div className="biz-fomo-top">
                <div className="biz-fomo-copy">
                  <span className="biz-fomo-eyebrow">
                    <svg className="biz-fomo-warn" viewBox="0 0 24 24" aria-hidden><path d="M12 3 L22 20 H2 Z" /><line x1="12" y1="10" x2="12" y2="15" /><circle cx="12" cy="17.6" r="0.6" /></svg>
                    Custo de ficar de fora
                  </span>
                  <h2 className="biz-fomo-h2">
                    Em 12 meses, sua empresa vai competir com quem já <span className="biz-fomo-hl">cortou 30% do custo operacional</span> com IA.
                  </h2>
                  <p className="biz-fomo-lead">
                    O gap entre quem incorporou IA e quem ainda "está estudando" cresce a cada
                    trimestre. Enquanto seu time debate se vale a pena, seu concorrente já entrega
                    mais rápido, com menos gente e por menos dinheiro.
                  </p>
                  <button type="button" className="biz-fomo-btn" onClick={() => setLeadOpen(true)}>
                    Não quero ficar para trás <ArrowRight aria-hidden />
                  </button>
                </div>

                <div className="biz-fomo-chart" data-reveal>
                  <GapChart />
                </div>
              </div>

              <div className="biz-fomo-grid">
                {fomoCards.map((c, i) => (
                  <div className="biz-fomo-mini" data-reveal style={{ transitionDelay: `${i * 80}ms` }} key={c.title}>
                    <span className="biz-fomo-mini-ic"><FomoIcon kind={c.icon} /></span>
                    <strong>{c.title}</strong>
                    <span>{c.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONVITE: incluso + cortesia + cronometro */}
        <section className="biz-enroll">
          <div className="biz-enroll-card" data-reveal>
            <div className="biz-enroll-glow" aria-hidden />
            <span className="biz-enroll-cone biz-enroll-cone-l" aria-hidden />
            <span className="biz-enroll-cone biz-enroll-cone-r" aria-hidden />

            <div className="biz-enroll-grid">
              <div className="biz-enroll-left">
                <span className="sb-eyebrow sb-eyebrow-dark biz-eyebrow">O que está incluso nessa experiência</span>
                <ul className="biz-included">
                  {included.map((item) => (
                    <li key={item}><Check aria-hidden /> {item}</li>
                  ))}
                </ul>
                <div className="biz-price">
                  <span className="biz-lote"><i aria-hidden /> Lote 1 · o melhor valor da temporada</span>
                  <p className="biz-price-value">R$ 3.900<em>ingresso individual</em></p>
                  <p className="biz-price-line">à vista ou parcelado no cartão</p>
                  <span className="biz-price-note">O valor sobe no próximo lote. A turma é reduzida: quem entra primeiro garante o Lote 1.</span>
                </div>
              </div>

              <div className="biz-enroll-right">
                <h2>Garanta sua vaga no Lote 1.</h2>
                <p>O Conect.Business começa em:</p>
                <Countdown />
                <button type="button" className="biz-btn-primary biz-btn-block" onClick={() => setLeadOpen(true)}>
                  Garantir minha vaga no Lote 1 <ArrowRight aria-hidden />
                </button>
                <span className="biz-enroll-note">Vagas limitadas · o Lote 1 pode encerrar a qualquer momento.</span>
                <Link className="biz-enroll-alt" to="/conect-ai">Conhecer as três edições do Conect.AI <ArrowUpRight aria-hidden /></Link>
              </div>
            </div>

            <div className="biz-enroll-foot" aria-hidden>
              <span>Sem pagamento agora · o nosso time confirma sua vaga e os próximos passos</span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="biz-faq">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark biz-eyebrow">Perguntas rápidas</span>
              <h2 className="sb-h2">Antes de garantir sua vaga.</h2>
            </div>
            <FaqListBiz />
          </div>
        </section>

        {/* REALIZAÇÃO (faixa simples antes do rodapé) */}
        <div className="biz-credits">
          <div className="sb-inner biz-credits-inner">
            <span className="biz-credit">
              <em>Realização</em>
              <img className="biz-credit-goable" src={img("logo-branco-tight.png")} alt="Goable AI" />
            </span>
          </div>
        </div>
        <LeadModal open={leadOpen} onClose={() => setLeadOpen(false)} />
      </div>
    </AppShell>
  );
}
