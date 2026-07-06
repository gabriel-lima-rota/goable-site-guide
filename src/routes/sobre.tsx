import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/goable/AppShell";
import { CTAButton } from "@/components/goable/CTAButton";
import { Slot } from "@/components/goable/Slot";
import { SpecialistBand } from "@/components/goable/SpecialistBand";
import { glass, gradientGlass, photos } from "@/lib/goable/assets";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre | Goable AI" },
      { name: "description", content: "Método, liderança e execução real da Goable AI." },
      { property: "og:title", content: "Sobre | Goable AI" },
      { property: "og:description", content: "Método, liderança e execução real da Goable AI." },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <AppShell>
      <div className="about-premium-page">
        <section className="about-hero">
          <div className="about-hero-bg" aria-hidden />
          <div className="about-hero-inner">
            <div className="about-hero-copy">
              <span>Sobre a Goable</span>
              <Slot id="COPY_ABOUT_HERO_H1" as="h1" />
              <Slot id="COPY_ABOUT_HERO_SUB" as="p" />
              <div className="about-hero-actions">
                <CTAButton variant="primary" size="lg">Contato</CTAButton>
                <CTAButton variant="glass" size="lg" to="/conect-ai">Conhecer Conect.AI</CTAButton>
              </div>
            </div>
            <div className="about-hero-visual">
              <img className="about-hero-photo" src={photos.edgarBackdrop} alt="" />
              <img className="about-hero-g" src={glass.gSymbol} alt="" aria-hidden />
              <div className="about-hero-card">
                <strong>Entender antes de aplicar</strong>
                <span>IA, processo, dados e especialistas no mesmo desenho.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-thesis-section">
          <div className="about-section-inner">
            <div className="about-thesis-card">
              <div>
                <span className="about-eyebrow">Tese</span>
                <Slot id="COPY_ABOUT_THESIS_TITLE" as="h2" />
              </div>
              <Slot id="COPY_ABOUT_THESIS_BODY" as="p" />
            </div>
            <div className="about-thesis-grid">
              {[
                ["01", "Raiz", "Primeiro entendemos a dor real, não a ferramenta da moda."],
                ["02", "Desenho", "Depois conectamos processo, dado, rotina e decisão."],
                ["03", "Sistema", "Só então a IA entra para operar com clareza."],
              ].map(([num, title, body]) => (
                <article className="about-liquid-card" key={num}>
                  <span>{num}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-method-section">
          <div className="about-section-inner">
            <div className="about-section-heading">
              <span>Como trabalhamos</span>
              <Slot id="COPY_ABOUT_METHOD_TITLE" as="h2" />
            </div>
            <div className="about-method-grid">
              {[
                ["Diagnóstico", "Entendemos o problema como ele acontece na operação."],
                ["Arquitetura", "Mapeamos fluxos, dados, regras, pessoas e exceções."],
                ["Sistema certo", "Desenhamos a solução que cabe na empresa real."],
                ["Execução", "Implementamos, medimos e ajustamos com o time."],
              ].map(([title, body], index) => (
                <article className="about-method-step" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-leadership-section">
          <div className="about-section-inner about-leadership-grid">
            <div className="about-leadership-photo">
              <img src={photos.edgarSmile} alt="Edgar Abreu" />
            </div>
            <div className="about-leadership-panel">
              <span>CEO e Founder</span>
              <Slot id="COPY_ABOUT_EDGAR_TITLE" as="h2" />
              <Slot id="COPY_ABOUT_EDGAR_BODY" as="p" />
              <Slot id="COPY_ABOUT_EDGAR_BIO" as="p" />
              <div className="about-chip-row">
                {["Estratégia", "IA aplicada", "Educação", "Execução"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="about-specialists-section">
          <div className="about-section-inner">
            <div className="about-section-heading">
              <span>Especialistas</span>
              <Slot id="COPY_ABOUT_SPECIALISTS_TITLE" as="h2" />
            </div>
            <SpecialistBand />
          </div>
        </section>

        <section className="about-stage-section">
          <div className="about-section-inner about-stage-grid">
            <div className="about-stage-media">
              <img src={photos.palco} alt="Palco Goable AI" />
            </div>
            <div className="about-stage-content">
              <span className="about-eyebrow">No palco</span>
              <Slot id="COPY_ABOUT_STAGE_TITLE" as="h2" />
              <div className="about-stat-grid">
                {[
                  { k: "IA", v: "COPY_ABOUT_STAT_1" },
                  { k: "Sistemas", v: "COPY_ABOUT_STAT_2" },
                  { k: "Time", v: "COPY_ABOUT_STAT_3" },
                  { k: "Entrega", v: "COPY_ABOUT_STAT_4" },
                ].map((s) => (
                  <article key={s.k}>
                    <span>{s.k}</span>
                    <strong><Slot id={s.v} /></strong>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="about-cases-section">
          <div className="about-section-inner">
            <div className="about-section-heading">
              <span>Frentes de atuação</span>
              <Slot id="COPY_ABOUT_CASES_TITLE" as="h2" />
            </div>
            <div className="about-cases-grid">
              {[
                ["Educação", "COPY_ABOUT_CASE_EDU"],
                ["Saúde", "COPY_ABOUT_CASE_HEALTH"],
                ["Mercado financeiro", "COPY_ABOUT_CASE_FIN"],
                ["Governo", "COPY_ABOUT_CASE_GOV"],
              ].map(([label, slot]) => (
                <article className="about-liquid-card" key={label}>
                  <h3>{label}</h3>
                  <Slot id={slot} as="p" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-final-section">
          <div className="about-final-card">
            <img src={gradientGlass.foldViolet} alt="" aria-hidden />
            <Slot id="COPY_ABOUT_FINAL_CTA_TITLE" as="h2" />
            <CTAButton variant="primary" size="lg">Contato</CTAButton>
          </div>
        </section>
      </div>
    </AppShell>
  );
}
