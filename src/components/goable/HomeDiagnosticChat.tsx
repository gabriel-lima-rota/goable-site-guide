import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { glass } from "@/lib/goable/assets";

type StepId = "employees" | "area" | "problems" | "details" | "done";
type Msg = { role: "bot" | "user"; text: string };

const employeeOptions = ["1 a 10", "11 a 50", "51 a 200", "201+"];
const areaOptions = ["Vendas", "Atendimento", "Gestão", "Operação", "Financeiro", "Marketing"];
const problemOptions = [
  "Processos manuais",
  "Dados espalhados",
  "Atendimento lento",
  "Gestão sem indicadores",
  "Time sem rotina clara",
  "IA sem aplicação prática",
];

const initialMessages: Msg[] = [
  {
    role: "bot",
    text: "Vamos entender rapidamente o contexto da sua empresa para preparar uma reunião de diagnóstico mais precisa.",
  },
  {
    role: "bot",
    text: "Primeiro, quantos funcionários sua empresa tem hoje?",
  },
];

export function HomeDiagnosticChat() {
  const [step, setStep] = useState<StepId>("employees");
  const [messages, setMessages] = useState<Msg[]>(initialMessages);
  const [employees, setEmployees] = useState("");
  const [area, setArea] = useState("");
  const [problems, setProblems] = useState<string[]>([]);
  const [details, setDetails] = useState("");
  const [sent, setSent] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [messages, step]);

  const summary = useMemo(
    () => [
      ["Funcionários", employees || "A definir"],
      ["Área", area || "A definir"],
      ["Problemas", problems.length ? problems.join(", ") : "A definir"],
    ],
    [area, employees, problems],
  );

  function pushUser(text: string) {
    setMessages((current) => [...current, { role: "user", text }]);
  }

  function pushBot(text: string) {
    window.setTimeout(() => {
      setMessages((current) => [...current, { role: "bot", text }]);
    }, 260);
  }

  function selectEmployees(value: string) {
    if (step !== "employees") return;
    setEmployees(value);
    pushUser(value);
    setStep("area");
    pushBot("Perfeito. Qual área mais precisa de atenção agora?");
  }

  function selectArea(value: string) {
    if (step !== "area") return;
    setArea(value);
    pushUser(value);
    setStep("problems");
    pushBot("Entendi. Quais problemas mais travam essa área hoje?");
  }

  function toggleProblem(value: string) {
    if (step !== "problems") return;
    setProblems((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    );
  }

  function confirmProblems() {
    if (!problems.length) return;
    pushUser(problems.join(", "));
    setStep("details");
    pushBot("Agora escreva em poucas linhas o que acontece na prática. Isso ajuda a Goable chegar na reunião com mais contexto.");
  }

  function finish() {
    const trimmed = details.trim();
    if (!trimmed) return;
    pushUser(trimmed);
    setStep("done");
    setSent(true);
    pushBot("Recebido. O time Goable vai entrar em contato em seguida para montar sua reunião de diagnóstico.");
  }

  return (
    <section className="home-final-chapter home-diagnostic-chat-chapter">
      <div className="home-section-inner">
        <div className="home-diagnostic-final-shell">
          <div className="home-diagnostic-chat-copy">
            <span>Próximo passo</span>
            <h2>Diagnóstico rápido para entender sua operação</h2>
            <p>
              Responda quatro perguntas rápidas. A Goable entende o cenário e prepara uma reunião mais precisa.
            </p>
            <div className="home-diagnostic-copy-meta" aria-label="Como funciona o diagnóstico">
              <span>4 perguntas</span>
              <span>sem compromisso</span>
              <span>retorno do time</span>
            </div>
            <div className="home-diagnostic-summary" aria-label="Resumo do diagnóstico">
              {summary.map(([label, value]) => (
                <div key={label}>
                  <strong>{label}</strong>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="home-diagnostic-chat-card">
            <div className="home-diagnostic-chat-bg" aria-hidden>
              <img src={glass.gSymbol} alt="" draggable={false} />
            </div>

            <div className="home-diagnostic-chat-panel">
              <div className="home-diagnostic-chat-topbar">
                <div className="home-product-dots" aria-hidden>
                  <span />
                  <span />
                  <span />
                </div>
                <strong>Diagnóstico Goable</strong>
                <em>{sent ? "registrado" : "ao vivo"}</em>
              </div>

              <div className="home-diagnostic-chat-thread" ref={scroller}>
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`home-diagnostic-message is-${message.role}`}
                  >
                    {message.role === "bot" ? <span>Goable</span> : null}
                    <p>{message.text}</p>
                  </div>
                ))}
                {step !== "done" ? (
                  <div className="home-diagnostic-typing" aria-hidden>
                    <span />
                    <span />
                    <span />
                  </div>
                ) : null}
              </div>

              <div className="home-diagnostic-chat-actions">
                {step === "employees" ? (
                  <OptionGrid options={employeeOptions} onSelect={selectEmployees} />
                ) : null}

                {step === "area" ? (
                  <OptionGrid options={areaOptions} onSelect={selectArea} />
                ) : null}

                {step === "problems" ? (
                  <>
                    <div className="home-diagnostic-options">
                      {problemOptions.map((option) => (
                        <button
                          type="button"
                          key={option}
                          className={problems.includes(option) ? "is-selected" : ""}
                          onClick={() => toggleProblem(option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="home-diagnostic-send"
                      disabled={!problems.length}
                      onClick={confirmProblems}
                    >
                      Continuar
                      <ArrowRight size={16} />
                    </button>
                  </>
                ) : null}

                {step === "details" ? (
                  <form
                    className="home-diagnostic-details"
                    onSubmit={(event) => {
                      event.preventDefault();
                      finish();
                    }}
                  >
                    <textarea
                      value={details}
                      onChange={(event) => setDetails(event.target.value)}
                      placeholder="Exemplo: perdemos follow-up, os dados ficam em planilhas e a gestão não sabe onde a operação trava."
                    />
                    <button type="submit" className="home-diagnostic-send" disabled={!details.trim()}>
                      Enviar diagnóstico
                      <ArrowRight size={16} />
                    </button>
                  </form>
                ) : null}

                {step === "done" ? (
                  <div className="home-diagnostic-done">
                    <CheckCircle2 size={18} />
                    <span>Pré-diagnóstico registrado. Entraremos em contato para montar a reunião.</span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OptionGrid({
  options,
  onSelect,
}: {
  options: string[];
  onSelect: (value: string) => void;
}) {
  return (
    <div className="home-diagnostic-options">
      {options.map((option) => (
        <button type="button" key={option} onClick={() => onSelect(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}
