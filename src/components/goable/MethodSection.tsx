import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { glass3d } from "@/lib/goable/assets";

const steps: Array<[string, string, string]> = [
  [
    "01",
    "Diagnóstico",
    "Uma reunião com nossos especialistas para mapear, ponto a ponto, as fragilidades da sua operação.",
  ],
  [
    "02",
    "Arquitetura",
    "Em até 48 horas, voltamos com o desenho das soluções possíveis para o seu cenário.",
  ],
  [
    "03",
    "Entrevista",
    "Com o seu ok, mergulhamos nas dores reais e no que torna a sua empresa única.",
  ],
  [
    "04",
    "Execução",
    "Cronograma definido, especialistas acompanhando cada etapa e o sistema rodando com clareza.",
  ],
];

export function MethodSection() {
  return (
    <section className="home-method-chapter" id="metodo">
      <div className="home-method-liquid-bg" aria-hidden>
        <img src={glass3d.loop} alt="" draggable={false} />
      </div>

      <div className="home-section-inner">
        <div className="home-method2">
          <div className="home-method2-intro">
            <span className="home-method2-eyebrow">Método</span>
            <h2 className="home-method2-title">
              Da raiz do problema ao sistema em operação
            </h2>
            <p className="home-method2-lead">
              Sua empresa não cabe em sistemas genéricos. Por isso reunimos
              especialistas de cada área para guiar, personalizar e entregar
              sistemas que fazem sentido com velocidade.
            </p>
          </div>

          <ol className="home-method2-track">
            {steps.map(([number, title, body], index) => (
              <li
                className="home-method2-step"
                key={number}
                style={{ "--i": index } as CSSProperties}
              >
                <span className="home-method2-num">{number}</span>
                <div className="home-method2-card">
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="home-method2-cta home-method2-cta-after">
            <CTAButton variant="primary" size="lg" to="/contato">
              Agende seu diagnóstico
              <ArrowRight size={18} strokeWidth={2.25} />
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
