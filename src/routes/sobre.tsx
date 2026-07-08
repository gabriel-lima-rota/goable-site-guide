import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Linkedin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { AppShell } from "@/components/goable/AppShell";
import { CTAButton } from "@/components/goable/CTAButton";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { property: "og:url", content: "https://goable.ai/sobre" },
      { title: "Sobre a Goable AI · Sistemas com IA para empresas" },
      {
        name: "description",
        content:
          "A Goable cria sistemas com IA para empresas venderem mais, reduzirem custos e padronizarem processos. Conheça a tese, o time e os cases.",
      },
      { property: "og:title", content: "Sobre a Goable AI · Sistemas com IA para empresas" },
      {
        property: "og:description",
        content:
          "A Goable cria sistemas com IA para empresas venderem mais, reduzirem custos e padronizarem processos. Conheça a tese, o time e os cases.",
      },
    ],
    links: [{ rel: "canonical", href: "https://goable.ai/sobre" }],
  }),
  component: SobrePage,
});

const img = (file: string) => `/goable-assets/${file}`;

const heroStats = [
  ["6+", "Cases entregues"],
  ["8+", "Setores atendidos"],
  ["400k+", "Downloads"],
  ["50k+", "Participantes"],
];

const setores = ["Educação", "Bancário", "Jurídico", "Eventos", "Atendimento"];

type Stat = {
  area: string;
  value: number;
  decimals?: number;
  prefix?: string;
  suffix: string;
  label: string;
  find: string;
  source: string;
  variant?: "hero" | "wide";
  meter?: number;
};

const stats: Stat[] = [
  {
    area: "Operação",
    value: 70,
    prefix: "até ",
    suffix: "%",
    label: "Trabalho manual demais",
    find: "do tempo do time é gasto em tarefas que a IA já consegue automatizar.",
    source: "McKinsey, 2023",
    variant: "hero",
    meter: 70,
  },
  {
    area: "Vendas",
    value: 21,
    suffix: "×",
    label: "Lead que demora, lead que morre",
    find: "mais chance de qualificar um lead respondendo em 5 minutos em vez de 30.",
    source: "Lead Response Management Study, MIT e InsideSales",
    variant: "wide",
  },
  {
    area: "Dados",
    value: 1.8,
    decimals: 1,
    suffix: "h",
    label: "Informação espalhada",
    find: "por dia é o que cada pessoa perde só procurando informação na empresa.",
    source: "McKinsey",
  },
  {
    area: "Atendimento",
    value: 69,
    suffix: "%",
    label: "Atendimento desconectado",
    find: "dos clientes trocam de fornecedor depois de um atendimento desconectado.",
    source: "MuleSoft",
  },
  {
    area: "Gestão",
    value: 23,
    suffix: "×",
    label: "Decisão no achismo",
    find: "mais chance de conquistar clientes quando a empresa decide guiada por dados.",
    source: "McKinsey Global Institute",
  },
  {
    area: "Processos",
    value: 30,
    prefix: "até ",
    suffix: "%",
    label: "Processo sem padrão",
    find: "da receita se perde por ano com ineficiências e gargalos que a empresa nem enxerga.",
    source: "IDC",
  },
];

const method = [
  [
    "01",
    "Dor",
    "Identificamos a dor real",
    "Onde a empresa perde venda, tempo, dinheiro ou padrão. Investigação de campo, não suposição.",
  ],
  [
    "02",
    "Processo",
    "Mapeamos o processo real",
    "Pessoas, dados, regras, ferramentas e retrabalho. A operação como ela é, não como o organograma diz.",
  ],
  [
    "03",
    "Sistema",
    "Entregamos o sistema rodando",
    "Agentes, automações e integrações construídos, testados e operados pelo time da empresa.",
  ],
];

const founderBullets = [
  "IA aplicada a negócios e operações reais",
  "Especialização em Inteligência Artificial em Harvard",
  "Referência em educação e mercado financeiro",
  "Idealizador do AI Bank Summit, o maior evento de IA do setor financeiro",
  "Mais de 400 mil pessoas alcançadas pelos produtos que liderou",
];

const stages = [
  { src: img("palco-conecta-cvp.jpg"), tag: "Conecta CVP Experience", note: "Caixa Seguridade" },
  { src: img("palco-ea26.jpg"), tag: "Encontro de Administradores", note: "EA26, IA aplicada a negócios" },
];

const experts: Array<{ name: string; area: string; line: string; url: string; accent: string }> = [
  { name: "Gabriel Rota", area: "Marketing e Vendas", line: "1º no Brasil a colocar um SDR de IA vendendo no WhatsApp.", url: "https://www.linkedin.com/in/gabriel-rota-27281411b/", accent: "#FF3EA5" },
  { name: "Priscila Niffa", area: "People e Cultura", line: "1ª no Brasil a entrevistar candidatos com avatar de IA.", url: "https://www.linkedin.com/in/priscila-niffa/", accent: "#6D4DFF" },
  { name: "Vinicius Rohers", area: "Financeiro e FP&A", line: "Faz o dado financeiro responder em linguagem natural.", url: "https://www.linkedin.com/in/vinicius-rohers/", accent: "#244EAE" },
  { name: "Brayan Souza", area: "Gestão e Processos", line: "CEO de edtech com mais de R$40MM em faturamento.", url: "https://www.linkedin.com/in/brayan-souza-cfp/", accent: "#00A67E" },
  { name: "Giuliano Tamagno", area: "Legal e Compliance", line: "Criador do Licita Pro AI, a maior IA para licitações do país.", url: "https://www.linkedin.com/in/giuliano-tamagno-6ab591124/", accent: "#F5A524" },
  { name: "Renan Matos", area: "Relacionamento com Cliente", line: "Relaciona mais de 120k alunos ativos com IA integrada.", url: "https://www.linkedin.com/in/renan-matos/", accent: "#38B6E6" },
  { name: "Diego Vinhas", area: "Eventos e Marca", line: "Produtor de grandes experiências de marca no Brasil.", url: "https://www.linkedin.com/in/diego-vian-vinhas/", accent: "#E6428A" },
  { name: "Rodrigo Caixeta", area: "TI e Tecnologia", line: "Referência nacional em arquitetura de IA.", url: "https://www.linkedin.com/in/rodrigo-caixeta/", accent: "#6D4DFF" },
];

type CaseLink = { label: string; url: string };
type CaseItem = {
  img: string;
  tag: string;
  meta: string;
  title: string;
  body: string;
  tech: string;
  result: string;
  bullets: string[];
  links: CaseLink[];
};

const cases: CaseItem[] = [
  {
    img: img("case-app-certificacoes.png"),
    tag: "1º do Brasil",
    meta: "Cursos Edgar Abreu · Educação · 2023",
    title: "O primeiro app educacional com IA e RAG do Brasil.",
    body: "App de estudos para certificações financeiras com IA de recuperação aumentada. O aluno pergunta sobre o próprio conteúdo do curso e recebe resposta na hora.",
    tech: "App móvel com IA e RAG",
    result: "Mais de 400 mil downloads",
    bullets: ["Nota 5.0 na App Store e 4.9 no Google Play", "Pioneiro em RAG educacional no Brasil, em 2023"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/us/app/certifica%C3%A7%C3%B5es-edgar-abreu/id1630023032" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.fouru.certificacoesEdgarAbreu" },
    ],
  },
  {
    img: img("case-unimed-whatsapp.png"),
    tag: "Inédito no Brasil",
    meta: "Faculdade Unimed · Educação e Saúde · 2025",
    title: "A primeira pós-graduação vendida por IA no WhatsApp.",
    body: "Agente de IA que atua como SDR: qualifica o lead médico, tira dúvidas e conduz a matrícula da pós em IA, direto no WhatsApp, sem triagem humana.",
    tech: "Agente de IA para vendas no WhatsApp",
    result: "Qualificação e matrícula 24 por 7",
    bullets: ["SDR de IA na linha de frente da venda", "Atendimento contínuo, sem fila e sem horário"],
    links: [{ label: "Ver curso", url: "https://www.faculdadeunimed.edu.br/cursos/pos-graduacao/ia-para-medicos/" }],
  },
  {
    img: img("case-ai-bank-summit.jpg"),
    tag: "O maior do país",
    meta: "AI Bank Summit · Eventos e Mercado Financeiro · 2025",
    title: "O maior evento de IA do mercado financeiro do Brasil.",
    body: "Concepção, estrutura e realização do AI Bank Summit, com palestrantes de referência global e nacional e audiência massiva em todo o país.",
    tech: "Evento e infraestrutura de IA",
    result: "Mais de 50 mil participantes online",
    bullets: ["Palcos com nomes globais e nacionais", "Cobertura da Jovem Pan e da imprensa do setor"],
    links: [
      {
        label: "Cobertura Jovem Pan",
        url: "https://jovempan.com.br/conteudo-patrocinado/ai-bank-summit-2025-lideres-globais-e-brasileiros-discutem-futuro-da-inteligencia-artificial-no-setor-financeiro.html",
      },
    ],
  },
  {
    img: img("case-loterias-chat-ia.png"),
    tag: "Projeto público",
    meta: "Universidades Loterias Caixa · Governo e Educação · 2024",
    title: "IA com RAG para suporte educacional na plataforma da Caixa.",
    body: "Chat IA com RAG dentro do app das Universidades Loterias Caixa. O aluno estuda, tira dúvidas e consulta materiais por curso ou em suporte geral.",
    tech: "Chat IA com RAG em app mobile",
    result: "Suporte por curso em tempo real",
    bullets: ["IA treinada no conteúdo de cada curso", "Assistência integrada, dentro e fora das aulas"],
    links: [],
  },
  {
    img: img("case-licita-pro.png"),
    tag: "GovTech",
    meta: "Licita Pro AI · Governo e Jurídico · 2024",
    title: "IA que protege prefeituras com segurança jurídica.",
    body: "Plataforma de IA para análise de editais, pesquisa de preço, construção de contratos e emissão de pareceres. Gera conformidade e protege o gestor público.",
    tech: "Plataforma SaaS com IA",
    result: "Editais, preços e pareceres analisados por IA",
    bullets: ["Pesquisa de preço e parecer jurídico por IA", "Governança e segurança jurídica para o município"],
    links: [{ label: "Conhecer a ferramenta", url: "https://licita.4ubusiness.tech/" }],
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

function StatNumber({ value, decimals = 0, prefix = "", suffix = "" }: { value: number; decimals?: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
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
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(value * eased);
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
  const formatted =
    decimals > 0 ? display.toFixed(decimals).replace(".", ",") : Math.round(display).toString();
  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

function SobrePage() {
  const ref = useReveal();

  return (
    <AppShell>
      <div className="sb-page" ref={ref}>
        {/* HERO */}
        <section
          className="sb-hero"
          onPointerMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty("--sb-px", `${((e.clientX - r.left) / r.width - 0.5) * 20}px`);
            e.currentTarget.style.setProperty("--sb-py", `${((e.clientY - r.top) / r.height - 0.5) * 16}px`);
          }}
          onPointerLeave={(e) => {
            e.currentTarget.style.setProperty("--sb-px", "0px");
            e.currentTarget.style.setProperty("--sb-py", "0px");
          }}
        >
          <div className="sb-hero-grid" aria-hidden />
          <div className="sb-hero-aura" aria-hidden />
          <div className="sb-hero-wave" aria-hidden />
          <img className="sb-hero-orb" src={img("goable-gradient-glass-9.webp")} alt="" aria-hidden draggable={false} />
          <div className="sb-hero-inner">
            <div className="sb-hero-copy" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark">Sobre a Goable AI</span>
              <h1 className="sb-hero-h1">
                <span>Autoridade real em</span>
                <span className="sb-hl">IA aplicada</span>
                <span>à operação das empresas.</span>
              </h1>
              <p className="sb-hero-sub">
                A Goable desenvolve soluções de inteligência artificial sob medida para empresas,
                instituições e governos que precisam transformar processos complexos em sistemas
                mais inteligentes, rápidos e rastreáveis. Unimos diagnóstico operacional, estratégia
                de dados e desenvolvimento de tecnologia própria para criar IA que funciona no dia a
                dia da operação, não apenas em apresentações.
              </p>
              <div className="sb-hero-actions">
                <CTAButton variant="primary" size="lg" to="/contato">Solicitar diagnóstico</CTAButton>
                <CTAButton variant="glass" size="lg" href="/#metodo">Conhecer a metodologia</CTAButton>
              </div>
              <div className="sb-hero-stats">
                {heroStats.map(([value, label]) => (
                  <article key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </article>
                ))}
              </div>
              <div className="sb-hero-sectors">
                <span className="sb-hero-sectors-label">Setores</span>
                {setores.map((s) => (
                  <span key={s} className="sb-sector-chip">{s}</span>
                ))}
              </div>
            </div>

            <div className="sb-hero-visual" data-reveal>
              <div className="sb-hero-photo-wrap">
                <img src={img("palco-conecta-cvp.jpg")} alt="Edgar Abreu, fundador da Goable, em palco apresentando IA aplicada" loading="eager" />
                <div className="sb-hero-photo-glow" aria-hidden />
              </div>
              <div className="sb-hero-tag">
                <span className="sb-hero-tag-kicker">Fundador no palco</span>
                <strong>Edgar Abreu</strong>
                <span className="sb-hero-tag-note">Fundador · Goable AI</span>
              </div>
            </div>
          </div>
        </section>

        {/* TESE */}
        <section className="sb-thesis">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow">Nossa tese</span>
              <h2 className="sb-h2 sb-h2-dark">O gargalo mais caro é o que a empresa não enxerga.</h2>
              <p className="sb-lead">
                Toda operação tem travas que ninguém mede. Os números abaixo mostram o tamanho delas.
                Investigar antes de agir é o que separa a IA que resolve da IA que vira custo.
              </p>
            </div>

            <div className="sb-stat-bento">
              {stats.map((s, i) => (
                <article
                  className={`sb-stat ${s.variant === "hero" ? "sb-stat-hero" : ""} ${s.variant === "wide" ? "sb-stat-wide" : ""}`}
                  data-reveal
                  style={{ transitionDelay: `${i * 70}ms`, ...(s.meter ? ({ "--meter": `${s.meter}%` } as CSSProperties) : {}) }}
                  key={s.label}
                >
                  <span className="sb-stat-area">{s.area}</span>
                  <div className="sb-stat-num">
                    <StatNumber value={s.value} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
                  </div>
                  {s.meter ? (
                    <div className="sb-stat-meter" aria-hidden>
                      <i />
                    </div>
                  ) : null}
                  <h3 className="sb-stat-label">{s.label}</h3>
                  <p className="sb-stat-find">{s.find}</p>
                  <span className="sb-stat-src">{s.source}</span>
                </article>
              ))}
            </div>

            <div className="sb-invest" data-reveal>
              <div className="sb-invest-copy">
                <strong>Não sabe qual é o seu maior gargalo?</strong>
                <p>
                  A maioria dos gestores não sabe. Por isso a Goable coloca especialistas para
                  investigar, medir e encontrar o seu antes de propor qualquer solução.
                </p>
              </div>
              <CTAButton variant="primary" size="lg" to="/contato">Investigar minha operação</CTAButton>
            </div>
          </div>
        </section>

        {/* METODO */}
        <section className="sb-method">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark">Como trabalhamos</span>
              <h2 className="sb-h2">Começamos pela dor. Terminamos com o sistema rodando.</h2>
            </div>
            <div className="sb-method-grid">
              {method.map(([num, kicker, title, body], i) => (
                <article className="sb-method-step" data-reveal style={{ transitionDelay: `${i * 90}ms` }} key={num}>
                  <div className="sb-method-top">
                    <span className="sb-method-num">{num}</span>
                    <span className="sb-method-kicker">{kicker}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                  <span className="sb-method-line" aria-hidden />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FUNDADOR */}
        <section className="sb-founder">
          <div className="sb-inner sb-founder-grid">
            <div className="sb-founder-media" data-reveal>
              <img src={img("combo-studios-611.jpg")} alt="Edgar Abreu, fundador e CEO da Goable AI" loading="lazy" />
              <div className="sb-founder-badge">
                <span>Fundador e CEO</span>
                <strong>Harvard · AI Specialization</strong>
              </div>
            </div>
            <div className="sb-founder-panel" data-reveal>
              <span className="sb-eyebrow">Fundador</span>
              <h2 className="sb-h2 sb-h2-dark">Liderança com experiência real em IA aplicada a negócios.</h2>
              <p className="sb-founder-name">Edgar Abreu</p>
              <p className="sb-founder-bio">
                Edgar lidera a estratégia da Goable conectando IA, negócios, educação e mercado
                financeiro. Sob a liderança dele, a inteligência artificial vira sistema dentro da
                empresa, não promessa de palco.
              </p>
              <ul className="sb-founder-list">
                {founderBullets.map((b) => (
                  <li key={b}><span aria-hidden /> {b}</li>
                ))}
              </ul>
              <a className="sb-linkedin-link" href="https://www.linkedin.com/in/profedgarabreu/" target="_blank" rel="noreferrer">
                <Linkedin className="sb-ic" aria-hidden /> LinkedIn de Edgar Abreu
              </a>
            </div>
          </div>
        </section>

        {/* NO PALCO */}
        <section className="sb-stage">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark">No palco</span>
              <h2 className="sb-h2">Levamos IA aplicada para os maiores palcos do país.</h2>
            </div>
            <div className="sb-stage-grid">
              {stages.map((s, i) => (
                <figure className="sb-stage-card" data-reveal style={{ transitionDelay: `${i * 90}ms` }} key={s.tag}>
                  <img src={s.src} alt={`${s.tag}, ${s.note}`} loading="lazy" />
                  <figcaption>
                    <strong>{s.tag}</strong>
                    <span>{s.note}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CONECT.AI TEASER */}
        <section className="sb-cai-teaser">
          <div className="sb-inner">
            <div className="sb-cai-teaser-card" data-reveal>
              <div className="sb-cai-teaser-copy">
                <span className="sb-eyebrow sb-eyebrow-dark">Conect.AI 2026</span>
                <h2 className="sb-h2">Encontros presenciais de IA aplicada.</h2>
                <p className="sb-lead sb-lead-light">
                  Encontros presenciais da Goable para levar inteligência artificial aplicada a
                  gestores públicos, médicos e empresários.
                </p>
              </div>
              <CTAButton variant="primary" size="lg" to="/conect-ai">Conhecer os eventos</CTAButton>
            </div>
          </div>
        </section>

        {/* ESPECIALISTAS */}
        <section className="sb-experts">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow">O time</span>
              <h2 className="sb-h2 sb-h2-dark">Um especialista para cada dor. Nenhuma solução genérica.</h2>
              <p className="sb-lead">
                A Goable junta gente de áreas diferentes para atacar cada problema pelo ângulo certo.
                Vendas, finanças, jurídico, tecnologia, cultura e eventos no mesmo time.
              </p>
            </div>
            <div className="sb-experts-grid">
              {experts.map((e, i) => (
                <article className="sb-expert-card" data-reveal style={{ transitionDelay: `${(i % 4) * 55}ms` }} key={e.name}>
                  <span className="sb-expert-rail" aria-hidden style={{ background: `linear-gradient(180deg, ${e.accent}, transparent)` }} />
                  <div className="sb-expert-mono" style={{ background: `linear-gradient(135deg, ${e.accent}, color-mix(in oklab, ${e.accent} 45%, #0b0b18))` }}>
                    {e.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                  </div>
                  <span className="sb-expert-area" style={{ color: e.accent }}>{e.area}</span>
                  <h3>{e.name}</h3>
                  <p>{e.line}</p>
                  <a className="sb-expert-link" href={e.url} target="_blank" rel="noreferrer" aria-label={`LinkedIn de ${e.name}`}>
                    <Linkedin className="sb-ic" aria-hidden /> LinkedIn
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CASES */}
        <section className="sb-cases">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark">Cases</span>
              <h2 className="sb-h2">Prova, não promessa.</h2>
              <p className="sb-lead sb-lead-light">
                Sistemas, agentes e plataformas em operação real. Cada um foi o primeiro ou o maior no
                que se propôs.
              </p>
            </div>
            <div className="sb-cases-list">
              {cases.map((c, i) => (
                <article className={`sb-case ${i % 2 === 1 ? "sb-case-rev" : ""}`} data-reveal key={c.title}>
                  <div className="sb-case-media">
                    <img src={c.img} alt={c.title} loading="lazy" />
                    <span className="sb-case-media-glow" aria-hidden />
                  </div>
                  <div className="sb-case-body">
                    <div className="sb-case-tags">
                      <span className="sb-case-tag">{c.tag}</span>
                      <span className="sb-case-meta">{c.meta}</span>
                    </div>
                    <h3>{c.title}</h3>
                    <p className="sb-case-desc">{c.body}</p>
                    <div className="sb-case-metrics">
                      <div>
                        <span>Tecnologia</span>
                        <strong>{c.tech}</strong>
                      </div>
                      <div>
                        <span>Resultado</span>
                        <strong>{c.result}</strong>
                      </div>
                    </div>
                    <ul className="sb-case-bullets">
                      {c.bullets.map((b) => (
                        <li key={b}><span aria-hidden /> {b}</li>
                      ))}
                    </ul>
                    {c.links.length ? (
                      <div className="sb-case-links">
                        {c.links.map((l) => (
                          <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className="sb-case-link">
                            {l.label} <ArrowUpRight className="sb-ic" aria-hidden />
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="sb-final">
          <div className="sb-final-card" data-reveal>
            <div className="sb-final-glow" aria-hidden />
            <span className="sb-eyebrow sb-eyebrow-dark">Próximo passo</span>
            <h2 className="sb-h2">Qual gargalo da sua empresa vai virar sistema primeiro?</h2>
            <div className="sb-final-actions">
              <CTAButton variant="primary" size="lg" to="/contato">Fazer diagnóstico gratuito</CTAButton>
              <CTAButton variant="glass" size="lg" to="/conect-ai">Conhecer o Conect.AI 2026</CTAButton>
            </div>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
