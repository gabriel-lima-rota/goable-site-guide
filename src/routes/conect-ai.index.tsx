import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Target, Blocks, Users, Compass, Linkedin, ArrowUpRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { AppShell } from "@/components/goable/AppShell";
import { CTAButton } from "@/components/goable/CTAButton";

export const Route = createFileRoute("/conect-ai/")({
  head: () => ({
    meta: [
      { title: "Conect.AI 2026 · 3 edições em julho | Goable AI" },
      { name: "description", content: "Três imersões práticas de IA no Instituto Caldeira, Porto Alegre: Conect.GOV (21/07), Conect.MED (22/07 · Faculdade Unimed) e Conect.Business (23/07)." },
      { property: "og:title", content: "Conect.AI 2026 · 3 edições em julho | Goable AI" },
      { property: "og:description", content: "Gestão pública, medicina e empresas. Instituto Caldeira, Porto Alegre. A 1ª edição fechou com NPS 9,71." },
    ],
  }),
  component: ConectAiIndex,
});

const img = (file: string) => `/goable-assets/${file}`;
const WHATSAPP = "https://wa.me/555185458646?text=Ol%C3%A1!%20Quero%20participar%20de%20uma%20edi%C3%A7%C3%A3o%20do%20Conect.AI%202026.";

const heroFacts = ["21 a 23 de julho", "9h às 18h", "Instituto Caldeira", "Porto Alegre"];

const proof: Array<{ value: number; decimals?: number; prefix?: string; suffix?: string; label: string }> = [
  { value: 9.71, decimals: 2, label: "NPS da 1ª edição" },
  { value: 97, suffix: "%", label: "de satisfação" },
  { value: 100, suffix: "%", label: "participariam de novo" },
  { value: 40, suffix: "+", label: "empresas presentes" },
];

const marquee = [
  "Agentes de IA",
  "Automação",
  "RAG",
  "Diagnóstico ao vivo",
  "Sistemas sob medida",
  "IA aplicada à operação",
  "Governança e LGPD",
  "Construção na prática",
];

type Edition = {
  key: string;
  accent: string;
  badge: string;
  name: string;
  dot: string;
  tagline: string;
  day: string;
  weekday: string;
  audience: string;
  focus: string[];
  note: string;
  href: string;
};

const editions: Edition[] = [
  {
    key: "gov",
    accent: "#6D4DFF",
    badge: "1ª edição",
    name: "Conect",
    dot: "GOV",
    tagline: "IA na prática para gestão pública, licitações e processos municipais.",
    day: "21 jul",
    weekday: "terça-feira",
    audience: "Prefeitos, secretários e lideranças municipais.",
    focus: ["Licitações e compras", "Processos administrativos", "Dados para decisão"],
    note: "Cortesia por convite exclusivo.",
    href: "/conect-ai/gov",
  },
  {
    key: "med",
    accent: "#00995D",
    badge: "1ª edição",
    name: "Conect",
    dot: "MED",
    tagline: "IA aplicada à prática médica e à rotina do consultório.",
    day: "22 jul",
    weekday: "quarta-feira",
    audience: "Médicos, sócios de clínicas e gestores médicos.",
    focus: ["Operação clínica", "Planos e faturamento", "Gestão do consultório"],
    note: "Com Faculdade Unimed · cortesia por convite.",
    href: "/conect-ai/med",
  },
  {
    key: "business",
    accent: "#3E7BFA",
    badge: "2ª edição",
    name: "Conect",
    dot: "Business",
    tagline: "IA aplicada à operação empresarial, do comercial ao financeiro.",
    day: "23 jul",
    weekday: "quinta-feira",
    audience: "Empresários, founders, C-levels e gestores decisores.",
    focus: ["Operação e processos", "Comercial e receita", "Gestão e financeiro"],
    note: "R$ 3.900 · última turma de 2026.",
    href: "/conect-ai/business",
  },
];

const whyCards: Array<[typeof Target, string, string]> = [
  [Target, "Começa pelo problema certo", "Antes de falar em ferramenta, a gente entende onde a sua operação realmente trava."],
  [Blocks, "Construção, não teoria", "Você sai com aplicações de IA montadas na prática, em cima da sua realidade."],
  [Users, "Especialistas que aplicam", "Quem conduz vive IA aplicada a negócios reais, não é guru de palco."],
  [Compass, "Direção, não hype", "No fim do dia você tem um plano e prioridades claras, não um monte de buzzword."],
];

const deliverables: Array<[string, string, string]> = [
  ["01", "Diagnóstico das oportunidades", "Um mapa dos principais pontos de perda: retrabalho, processos lentos, informação dispersa e rotinas que podem ganhar eficiência."],
  ["02", "Mapa de aplicação por setor", "Leitura prática de onde a IA entra no seu contexto, seja licitação, consultório ou operação comercial."],
  ["03", "Construção ao vivo", "Você participa da montagem de aplicações de IA na prática, com a sua operação na mesa."],
  ["04", "Plano de automação", "Direcionamento sobre quais rotinas automatizar primeiro, com prioridade para ganho real e baixo risco."],
  ["05", "Governança e segurança", "Orientações sobre LGPD, dados sensíveis, níveis de acesso e uso responsável da tecnologia."],
  ["06", "Roteiro de implementação", "Próximos passos estruturados, com prioridades e visão dos ganhos nos próximos 30, 60 e 90 dias."],
];

const faces = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => img(`conect-face-${n}.jpg`));

const venueFacts = ["Porto Alegre · RS", "Dia completo, 9h às 18h", "100% presencial"];

const faqItems: Array<[string, string]> = [
  ["Para quem é o Conect.AI?", "Cada edição fala com um público. GOV para lideranças municipais, MED para médicos e gestores de clínicas, Business para empresários, founders e C-levels."],
  ["Preciso entender de tecnologia?", "Não. O foco é negócio, processo e decisão. A parte técnica fica com a Goable."],
  ["Vou sair com uma solução pronta?", "Você sai com direção, um diagnóstico das oportunidades e um roteiro de implementação. A construção do sistema evolui depois, com o time Goable."],
  ["É presencial? Onde acontece?", "Sim, 100% presencial, no Instituto Caldeira, em Porto Alegre, das 9h às 18h."],
  ["Qual é o investimento?", "Conect.GOV e Conect.MED são cortesia por convite exclusivo (valor de R$ 3.900). Conect.Business é R$ 3.900 por participante, última turma de 2026."],
  ["Posso participar de mais de uma edição?", "Pode. Fale com a equipe pelo WhatsApp e a gente organiza a sua participação."],
  ["Como garanto minha vaga?", "As vagas são limitadas e por confirmação. Responda pelo WhatsApp e a equipe retorna com disponibilidade e próximos passos."],
];

function waFor(dot: string, day: string) {
  const msg = `Olá! Quero participar do Conect.${dot} (${day}).`;
  return `https://wa.me/555185458646?text=${encodeURIComponent(msg)}`;
}

function FaqList() {
  const [open, setOpen] = useState(0);
  return (
    <div className="cai-faq-list">
      {faqItems.map(([q, a], i) => (
        <div className={`cai-faq-item ${open === i ? "is-open" : ""}`} key={q} data-reveal>
          <button
            type="button"
            className="cai-faq-q"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <span>{q}</span>
            <ChevronDown aria-hidden />
          </button>
          <div className="cai-faq-a">
            <div>
              <p>{a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

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
  e.currentTarget.style.setProperty("--sb-px", `${((e.clientX - r.left) / r.width - 0.5) * 22}px`);
  e.currentTarget.style.setProperty("--sb-py", `${((e.clientY - r.top) / r.height - 0.5) * 16}px`);
}
function onHeroLeave(e: React.PointerEvent<HTMLElement>) {
  e.currentTarget.style.setProperty("--sb-px", "0px");
  e.currentTarget.style.setProperty("--sb-py", "0px");
}

function RotatingWord({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setI((v) => (v + 1) % words.length), 2200);
    return () => window.clearInterval(t);
  }, [words.length]);
  return (
    <span className="cai-rot">
      <span key={i} className="cai-rot-word">{words[i]}</span>
    </span>
  );
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
  const formatted = decimals > 0 ? display.toFixed(decimals).replace(".", ",") : Math.round(display).toString();
  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
}

function NeuralMotif({ className }: { className?: string }) {
  const nodes = [
    [14, 30], [30, 62], [26, 14], [52, 40], [50, 82], [72, 20], [78, 58], [92, 38],
  ];
  const links = [[0, 1], [0, 2], [2, 3], [1, 3], [3, 4], [3, 5], [5, 6], [3, 6], [6, 7], [5, 7]];
  return (
    <svg className={className} viewBox="0 0 100 96" fill="none" aria-hidden preserveAspectRatio="xMidYMid meet">
      {links.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
          className="cai-neural-link"
          style={{ animationDelay: `${i * 0.35}s` }}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={1.8} className="cai-neural-node" style={{ animationDelay: `${i * 0.28}s` }} />
      ))}
    </svg>
  );
}

function ConectAiIndex() {
  const ref = useReveal();

  return (
    <AppShell>
      <div className="sb-page cai-page" ref={ref}>
        {/* HERO */}
        <section className="cai-hero" onPointerMove={onHeroPointer} onPointerLeave={onHeroLeave}>
          <div className="cai-grid" aria-hidden />
          <div className="cai-aura" aria-hidden />
          <div className="cai-wave" aria-hidden />
          <img className="cai-shape cai-shape-1" src={img("goable-gradient-glass-9.png")} alt="" aria-hidden draggable={false} />
          <img className="cai-shape cai-shape-2" src={img("goable-4d.png")} alt="" aria-hidden draggable={false} />
          <NeuralMotif className="cai-neural" />

          <div className="cai-hero-inner">
            <div className="cai-hero-copy" data-reveal>
              <span className="cai-ai-chip"><i aria-hidden /> Imersão de IA aplicada · Goable AI</span>
              <h1 className="cai-hero-h1">
                Três dias para tirar a IA do <RotatingWord words={["discurso", "slide", "achismo"]} /> e colocar na sua <span className="sb-hl">operação</span>.
              </h1>
              <p className="cai-hero-sub">
                Em julho de 2026 o Conect.AI volta em três edições: gestão pública, medicina e
                empresas. Um dia inteiro, presencial, construindo aplicações de IA na prática, não no
                slide.
              </p>
              <div className="cai-hero-facts">
                {heroFacts.map((f) => (
                  <span key={f}>{f}</span>
                ))}
              </div>
              <div className="cai-hero-actions">
                <CTAButton variant="primary" size="lg" href={WHATSAPP}>Garantir presença</CTAButton>
                <CTAButton variant="glass" size="lg" href="#edicoes">Ver as edições</CTAButton>
              </div>
            </div>

            <div className="cai-hero-visual" data-reveal>
              <div className="cai-hero-photo">
                <img src={img("combo-studios-644.webp")} alt="Plateia do Conect.AI, 1ª edição em Porto Alegre" loading="eager" />
                <div className="cai-hero-photo-glow" aria-hidden />
              </div>
              <div className="cai-hero-badge">
                <span>1ª edição · Porto Alegre</span>
                <strong>NPS 9,71</strong>
              </div>
            </div>
          </div>

          <div className="cai-proof" data-reveal>
            {proof.map((p) => (
              <article key={p.label}>
                <strong><CountUp value={p.value} decimals={p.decimals} prefix={p.prefix} suffix={p.suffix} /></strong>
                <span>{p.label}</span>
              </article>
            ))}
          </div>
        </section>

        {/* LETREIRO DE IA */}
        <div className="cai-marquee" aria-hidden>
          <div className="cai-marquee-row">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i}>{m}</span>
            ))}
          </div>
        </div>

        {/* AS 3 EDIÇÕES */}
        <section className="cai-editions" id="edicoes">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow">As três edições</span>
              <h2 className="sb-h2 sb-h2-dark">Escolha a edição do seu mundo.</h2>
              <p className="sb-lead">
                Mesmo método, mesmo palco no Instituto Caldeira. Muda o contexto: cada edição fala a
                língua de quem decide naquele setor.
              </p>
            </div>

            <div className="cai-editions-grid">
              {editions.map((ed, i) => (
                <Link
                  to={ed.href}
                  className="cai-edition"
                  data-reveal
                  style={{ transitionDelay: `${i * 90}ms`, "--cai-accent": ed.accent } as CSSProperties}
                  key={ed.key}
                >
                  <span className="cai-edition-bar" aria-hidden />
                  <span className="cai-edition-shine" aria-hidden />
                  <div className="cai-edition-top">
                    <span className="cai-edition-badge">{ed.badge}</span>
                    <span className="cai-edition-date">
                      <strong>{ed.day}</strong>
                      <em>{ed.weekday}</em>
                    </span>
                  </div>
                  <h3 className="cai-edition-name">
                    {ed.name}<span className="cai-edition-dot">.</span>{ed.dot}
                  </h3>
                  <p className="cai-edition-tag">{ed.tagline}</p>
                  <p className="cai-edition-aud">{ed.audience}</p>
                  <div className="cai-edition-focus">
                    {ed.focus.map((f) => (
                      <span key={f}>{f}</span>
                    ))}
                  </div>
                  <div className="cai-edition-foot">
                    <span className="cai-edition-note">{ed.note}</span>
                    <span className="cai-edition-cta">
                      Conhecer <ArrowRight className="sb-ic" aria-hidden />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <p className="cai-editions-hint" data-reveal>
              Tem interesse em mais de uma edição? Fale com a equipe e a gente organiza a sua
              participação.
            </p>
          </div>
        </section>

        {/* POR QUE */}
        <section className="cai-why">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark">Por que existe</span>
              <h2 className="sb-h2">Não é palestra sobre IA. É a sua operação virando sistema, ao vivo.</h2>
              <p className="sb-lead sb-lead-light">
                A maioria dos eventos de IA termina em inspiração e planilha de anotações. O Conect.AI
                termina com aplicação, prioridade e próximo passo.
              </p>
            </div>
            <div className="cai-why-grid">
              {whyCards.map(([Icon, title, body], i) => (
                <article className="cai-why-card" data-reveal style={{ transitionDelay: `${i * 70}ms` }} key={title}>
                  <span className="cai-why-ic"><Icon aria-hidden /></span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* O QUE VOCÊ LEVA */}
        <section className="cai-deliver">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow">As entregas</span>
              <h2 className="sb-h2 sb-h2-dark">Você entra com dúvidas. Sai com um plano.</h2>
              <p className="sb-lead">
                Independente da edição, todo mundo sai do dia com as mesmas seis entregas na mão.
              </p>
            </div>
            <div className="cai-deliver-grid">
              {deliverables.map(([num, title, body], i) => (
                <article className="cai-deliver-card" data-reveal style={{ transitionDelay: `${(i % 3) * 70}ms` }} key={num}>
                  <span className="cai-deliver-num">{num}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROVA SOCIAL */}
        <section className="cai-social">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark">Prova social</span>
              <h2 className="sb-h2">A 1ª edição não terminou em aplauso. Terminou em NPS 9,71.</h2>
              <p className="sb-lead sb-lead-light">
                Mais de 40 empresas, uma sala cheia de decisores e uma nota que fala por si.
              </p>
            </div>

            <div className="cai-faces" data-reveal>
              {faces.map((src, i) => (
                <span className="cai-face" key={src}>
                  <img src={src} alt={`Participante da 1ª edição do Conect.AI ${i + 1}`} loading="lazy" />
                </span>
              ))}
              <span className="cai-face-more">+40 empresas</span>
            </div>

            <div className="cai-testi" data-reveal>
              <div className="cai-testi-who">
                <span className="cai-testi-mono" aria-hidden>VP</span>
                <span className="cai-testi-name">
                  <strong>Valdecir Pressi</strong>
                  <span>CFO · participante da 1ª edição</span>
                </span>
              </div>
              <a
                className="cai-testi-link"
                href="https://www.linkedin.com/posts/valdecirpressi_goableai-conectai-cfo-ugcPost-7472818144198180864-4AvH/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="sb-ic" aria-hidden /> Ler o depoimento no LinkedIn
                <ArrowUpRight className="sb-ic" aria-hidden />
              </a>
            </div>
          </div>
        </section>

        {/* INSTITUTO CALDEIRA */}
        <section className="cai-venue">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow">O ambiente</span>
              <h2 className="sb-h2 sb-h2-dark">No Instituto Caldeira, o maior hub de inovação do Sul.</h2>
              <p className="sb-lead">
                O Conect.AI acontece dentro de um dos principais ambientes de tecnologia,
                empreendedorismo e transformação do país, em Porto Alegre.
              </p>
            </div>

            <div className="cai-venue-grid" data-reveal>
              <figure className="cai-venue-figure cai-venue-figure-lg">
                <img src={img("caldeira-campus.jpg")} alt="Campus Caldeira, Instituto Caldeira em Porto Alegre" loading="lazy" />
                <figcaption>
                  <strong>Campus Caldeira</strong>
                  <span>Hub de inovação no coração de Porto Alegre</span>
                </figcaption>
              </figure>
              <figure className="cai-venue-figure">
                <img src={img("caldeira-sala.jpg")} alt="Sala de imersão do Conect.AI no Instituto Caldeira" loading="lazy" />
                <figcaption>
                  <strong>Sala da imersão</strong>
                  <span>Formato reduzido, foco em construção</span>
                </figcaption>
              </figure>
            </div>

            <div className="cai-venue-facts" data-reveal>
              {venueFacts.map((f) => (
                <span key={f}>{f}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="cai-faq">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark">Perguntas rápidas</span>
              <h2 className="sb-h2">Antes de garantir sua vaga.</h2>
            </div>
            <FaqList />
          </div>
        </section>

        {/* INSCRIÇÃO */}
        <section className="cai-enroll">
          <div className="cai-enroll-card" data-reveal>
            <div className="cai-enroll-glow" aria-hidden />
            <span className="sb-eyebrow sb-eyebrow-dark">Garanta sua vaga</span>
            <h2 className="sb-h2">A 1ª edição esgotou. Escolha a sua edição e fale com a equipe.</h2>
            <div className="cai-enroll-pick">
              {editions.map((ed) => (
                <a
                  className="cai-enroll-btn"
                  style={{ "--cai-accent": ed.accent } as CSSProperties}
                  href={waFor(ed.dot, ed.day)}
                  target="_blank"
                  rel="noreferrer"
                  key={ed.key}
                >
                  <span className="cai-enroll-name">Conect<b>.{ed.dot}</b></span>
                  <span className="cai-enroll-day">{ed.day} · {ed.weekday}</span>
                  <ArrowUpRight aria-hidden />
                </a>
              ))}
            </div>
            <p className="cai-enroll-note">Vagas limitadas · participação por confirmação de disponibilidade.</p>
            <p className="cai-enroll-alt">
              Prefere entender sua operação antes? <Link to="/contato">Fazer um diagnóstico</Link>
            </p>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
