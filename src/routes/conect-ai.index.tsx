import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Target, Blocks, Users, Compass, Linkedin, ArrowUpRight, ChevronDown, Landmark, Stethoscope, TrendingUp, Quote, Star } from "lucide-react";
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

const glyphFor: Record<string, typeof Landmark> = {
  gov: Landmark,
  med: Stethoscope,
  business: TrendingUp,
};

function StageFigure({ kind }: { kind: string }) {
  return (
    <svg className="cai-stage-svg" viewBox="0 0 140 170" preserveAspectRatio="xMidYMax meet" aria-hidden>
      <polygon className="cai-cone" points="70,-16 124,170 16,170" />
      <ellipse className="cai-pool" cx="70" cy="158" rx="46" ry="7" />

      {kind === "gov" ? (
        <g className="cai-figure">
          <circle cx="70" cy="31" r="10" />
          <rect x="65.5" y="40" width="9" height="7" rx="3.5" />
          <path d="M 54 60 C 54 53 60 48.5 68 48 L 72 48 C 80 48.5 86 53 86 60 L 96 99 L 44 99 Z" />
          <path className="cai-prop" d="M 42 102 L 98 102 L 106 170 L 34 170 Z" />
          <rect className="cai-prop-lip" x="38" y="97" width="64" height="7" rx="2.5" />
          <path className="cai-accent-stroke" d="M 88 97 C 88 88 84 84 79 82" />
          <circle className="cai-accent" cx="77.5" cy="81" r="2.6" />
          <circle className="cai-emblem" cx="70" cy="130" r="7" />
        </g>
      ) : null}

      {kind === "med" ? (
        <g className="cai-figure">
          <circle cx="70" cy="33" r="10" />
          <rect x="65.5" y="42" width="9" height="7" rx="3.5" />
          <path d="M 51 62 C 51 55 57 50.5 65 50 L 75 50 C 83 50.5 89 55 89 62 L 93 106 L 97 170 L 43 170 L 47 106 Z" />
          <path className="cai-carve" d="M 70 50 L 64 64 L 69 110 L 70 122 L 71 110 L 76 64 Z" />
          <path className="cai-accent-stroke" d="M 62 53 C 60 64 62 73 70 77 M 78 53 C 80 64 78 73 70 77 M 70 77 L 70 86" />
          <circle className="cai-accent" cx="70" cy="90" r="3.4" />
          <g transform="rotate(8 90 102)">
            <rect className="cai-prop" x="83" y="92" width="15" height="20" rx="2" />
            <rect className="cai-prop-lip" x="87" y="89.5" width="7" height="4" rx="1.5" />
          </g>
        </g>
      ) : null}

      {kind === "business" ? (
        <g className="cai-figure">
          <circle cx="66" cy="33" r="10" />
          <rect x="61.5" y="42" width="9" height="7" rx="3.5" />
          <path d="M 48 62 C 48 55 54 50.5 62 50 L 72 50 C 80 50.5 84 55 84.5 62 L 86 98 L 79 98 L 79.5 168 L 69.5 168 L 68.5 116 L 63.5 116 L 62.5 168 L 52.5 168 L 53 98 L 46 98 Z" />
          <path className="cai-accent" d="M 67 50.5 L 63.8 54.5 L 66 76 L 67 80 L 68 76 L 70.2 54.5 Z" />
          <rect className="cai-prop" x="86" y="108" width="24" height="17" rx="3" />
          <path className="cai-accent-stroke" d="M 94 108 q 4 -7 9 0" />
        </g>
      ) : null}

      <g className="cai-motes">
        <circle cx="60" cy="28" r="1.3" />
        <circle cx="76" cy="28" r="1" />
        <circle cx="68" cy="28" r="1.5" />
        <circle cx="83" cy="28" r="1.1" />
        <circle cx="54" cy="28" r="1" />
      </g>

      <g className="cai-crowd">
        <ellipse cx="14" cy="178" rx="17" ry="15" />
        <ellipse cx="50" cy="182" rx="19" ry="16" />
        <ellipse cx="88" cy="180" rx="18" ry="15" />
        <ellipse cx="124" cy="178" rx="17" ry="15" />
      </g>
    </svg>
  );
}

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
  photo: string;
};

const editions: Edition[] = [
  {
    key: "gov",
    accent: "#6D4DFF",
    badge: "1ª edição",
    name: "Conect",
    dot: "GOV",
    tagline: "O dia em que a sua gestão sai na frente com IA.",
    day: "21 jul",
    weekday: "terça-feira",
    audience: "Para prefeitos, secretários e quem decide o rumo do município.",
    focus: ["Aplicações ao vivo", "Casos reais de gestão", "Networking entre líderes"],
    note: "Vagas limitadas · acesso por convite.",
    href: "/conect-ai/gov",
    photo: img("combo-studios-259.webp"),
  },
  {
    key: "med",
    accent: "#00995D",
    badge: "1ª edição",
    name: "Conect",
    dot: "MED",
    tagline: "O dia em que o consultório começa a trabalhar para você.",
    day: "22 jul",
    weekday: "quarta-feira",
    audience: "Para médicos e sócios de clínicas que querem o tempo de volta.",
    focus: ["Construção orientada", "IA na rotina clínica", "Com a Faculdade Unimed"],
    note: "Turma reduzida · acesso por convite.",
    href: "/conect-ai/med",
    photo: img("combo-studios-558.webp"),
  },
  {
    key: "business",
    accent: "#3E7BFA",
    badge: "2ª edição",
    name: "Conect",
    dot: "Business",
    tagline: "IA aplicada para maximizar a operação real das empresas.",
    day: "23 jul",
    weekday: "quinta-feira",
    audience: "Para empresários e C-levels que lideram e querem escala.",
    focus: ["Aplicações ao vivo", "Assistente da sua empresa", "Sala fechada de decisores"],
    note: "Última turma de 2026 · poucas vagas.",
    href: "/conect-ai/business",
    photo: img("combo-studios-592.webp"),
  },
];

const whyCards: Array<[typeof Target, string, string]> = [
  [Target, "Começa pelo problema certo", "Antes de falar em ferramenta, a gente entende onde a sua operação realmente trava."],
  [Blocks, "Construção, não teoria", "Você sai com aplicações de IA montadas na prática, em cima da sua realidade."],
  [Users, "Especialistas que aplicam", "Quem conduz vive IA aplicada a negócios reais, não é guru de palco."],
  [Compass, "Direção, não hype", "No fim do dia você tem um plano e prioridades claras, não um monte de buzzword."],
];

const agenda: Array<{ title: string; body: string; hands?: boolean }> = [
  { title: "Boas-vindas e diagnóstico", body: "A gente mapeia junto, na sua frente, os gargalos e as oportunidades reais da sua operação." },
  { title: "Fundamentos aplicados de IA", body: "O que a IA já resolve hoje no seu setor, sem tecniquês e com exemplos concretos." },
  { title: "Almoço e networking", body: "Conexão com outros decisores e com os especialistas, na mesa, sem crachá de plateia." },
  { title: "Construção orientada, ao vivo", body: "Aqui você põe a mão: monta as aplicações de IA para a sua realidade, guiado passo a passo. Não assiste, constrói.", hands: true },
  { title: "Plano de implementação", body: "Você organiza prioridades e sai com um roteiro claro para os próximos 30, 60 e 90 dias." },
  { title: "Encerramento e continuidade", body: "Materiais de apoio e a trilha para seguir aplicando com a Goable depois do evento." },
];

const testimonials: Array<{ photo: string; name: string; role: string; text: string }> = [
  {
    photo: img("conect-face-1.jpg"),
    name: "Lucas Arthur Schaelder",
    role: "Mirasul",
    text: "Agradeço imensamente pelo tratamento e cuidado do pessoal da organização. Gostei muito do evento dessa maneira mais dinâmica. Agradeço também o conhecimento transmitido, me ensinou muito e espero poder transmitir esse conhecimento da melhor maneira para a minha empresa.",
  },
  {
    photo: img("conect-face-2.jpg"),
    name: "Marcio Vinicius",
    role: "Sócio · Marcio Brindes",
    text: "soluções de negócios com inteligência artificial é uma realidade, queremos navegar nestes mares, obrigado por traduzir as minhas necessidades como empresa gerando esperança e ânimo para continuar gerando riqueza e agregando valor.",
  },
  {
    photo: img("conect-face-3.jpg"),
    name: "Diogo Frantz",
    role: "Gerente Comercial",
    text: "Obrigado pela oportunidade de fazer parte deste evento, deste seleto grupo, Edgar e sua equipe são profissionais e pessoas extraordinárias, acessíveis e disponíveis para achar a melhor solução de IA para cada necessidade.",
  },
  {
    photo: img("conect-face-4.jpg"),
    name: "Maylon Dias",
    role: "STM Portaria Remota",
    text: "Edgar Abreu, com sua nova inovação empresarial Goable AI, demonstrou grande conhecimento com a tecnologia de fácil acesso elevando o empresário ao futuro e gerando menor custo ao final com a melhor tecnologia.",
  },
  {
    photo: img("conect-face-5.jpg"),
    name: "Regis Dantas",
    role: "Sócio Diretor · NX Educação",
    text: "Parabéns ao Edgar e toda equipe da Goable que proporcionaram um ambiente de extremo aprendizado, colaboração, foi uma entrega fantástica, sem esconder o jogo e compartilhando conteúdo altamente aplicável.",
  },
  {
    photo: img("conect-face-6.jpg"),
    name: "Thêmis Loro",
    role: "Founder · Loro Odontologia",
    text: "Para nós, da área da saúde, a proposta do curso em usar a IA para administração e podermos dedicar mais tempo para nos dedicarmos aos pacientes vem para que colaborar muito com nosso dia a dia.",
  },
  {
    photo: img("conect-face-7.jpg"),
    name: "Valdecir Pressi",
    role: "CFO · Asun Supermercados",
    text: "Tendo a oportunidade de participar, aproveite. Raramente um evento transmite teoria e ja faz a prática ao vivo. A Goable AI fez de forma memorável. Parabéns Edgar, pela excelente condução.",
  },
];

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
            <span><i className="cai-faq-num">{String(i + 1).padStart(2, "0")}</i>{q}</span>
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
      {words.map((w, idx) => (
        <span key={w} className={`cai-rot-word ${idx === i ? "is-on" : ""}`}>{w}</span>
      ))}
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
    <div className="cai-count" role="timer" aria-label="Contagem regressiva para o Conect.AI">
      {units.map(([v, l]) => (
        <span className="cai-count-unit" key={l}>
          <strong>{v}</strong>
          <em>{l}</em>
        </span>
      ))}
    </div>
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
                <a className="cai-hero-ghost" href="#edicoes">Ver as edições <ArrowRight aria-hidden /></a>
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
                Mesmo método, mesmo palco no Instituto Caldeira. Muda quem sobe nele: cada edição
                fala a língua de quem decide naquele setor.
              </p>
            </div>

            <div className="cai-editions-grid">
              {editions.map((ed, i) => {
                const Glyph = glyphFor[ed.key];
                return (
                  <Link
                    to={ed.href}
                    className="cai-edition cai-edition-staged"
                    data-reveal
                    style={{ transitionDelay: `${i * 90}ms`, "--cai-accent": ed.accent } as CSSProperties}
                    key={ed.key}
                  >
                    <span className="cai-edition-bar" aria-hidden />
                    <span className="cai-edition-shine" aria-hidden />
                    <div className="cai-stage" aria-hidden>
                      <img className="cai-stage-photo" src={ed.photo} alt="" loading="lazy" draggable={false} />
                      <span className="cai-stage-tint" aria-hidden />
                      <span className="cai-stage-live"><i /> No palco em {ed.day}</span>
                      <span className="cai-stage-glyph"><Glyph aria-hidden /></span>
                    </div>
                    <div className="cai-edition-body">
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
                          Quero estar nesse palco <ArrowRight className="sb-ic" aria-hidden />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <p className="cai-editions-hint" data-reveal>
              Tem interesse em mais de uma edição? Fale com a equipe e a gente organiza a sua
              participação.
            </p>
          </div>
        </section>

        {/* POR QUE */}
        <section className="cai-why">
          <span className="cai-why-ghost" aria-hidden>AO VIVO</span>
          <NeuralMotif className="cai-neural cai-neural-why" />
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

        {/* COMO FUNCIONA O DIA (timeline) */}
        <section className="cai-agenda">
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow">Como funciona o dia</span>
              <h2 className="sb-h2 sb-h2-dark">Um dia inteiro para aplicar IA na sua operação.</h2>
              <p className="sb-lead">
                Um dia inteiro e presencial. Você não fica assistindo: participa da montagem das
                aplicações de IA para a sua realidade e sai com um plano na mão.
              </p>
            </div>

            <div className="cai-timeline">
              <span className="cai-timeline-rail" aria-hidden />
              {agenda.map((s, i) => (
                <div
                  className={`cai-tl-step ${s.hands ? "is-hands" : ""}`}
                  data-reveal
                  style={{ transitionDelay: `${i * 60}ms` }}
                  key={s.title}
                >
                  <span className="cai-tl-time">{String(i + 1).padStart(2, "0")}</span>
                  <span className="cai-tl-dot" aria-hidden />
                  <div className="cai-tl-card">
                    {s.hands ? <span className="cai-tl-tag">Você põe a mão</span> : null}
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROVA SOCIAL */}
        <section className="cai-social">
          <span className="cai-flash cai-flash-1" aria-hidden />
          <span className="cai-flash cai-flash-2" aria-hidden />
          <span className="cai-flash cai-flash-3" aria-hidden />
          <div className="sb-inner">
            <div className="sb-head" data-reveal>
              <span className="sb-eyebrow sb-eyebrow-dark">O que disseram os participantes</span>
              <h2 className="sb-h2">Depoimentos autorizados da 1ª edição.</h2>
              <p className="sb-lead sb-lead-light">
                Avaliações reais de quem participou. Selecionamos apenas as que vieram com
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
            <span className="cai-enroll-cone cai-enroll-cone-l" aria-hidden />
            <span className="cai-enroll-cone cai-enroll-cone-r" aria-hidden />
            <span className="sb-eyebrow sb-eyebrow-dark">Garanta sua vaga</span>
            <h2 className="sb-h2">A 1ª edição esgotou. Escolha a sua edição e fale com a equipe.</h2>
            <Countdown />
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
