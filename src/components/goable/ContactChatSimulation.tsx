import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { newLeadId, saveLead, type Lead } from "@/lib/goable/crm";

type Msg = { role: "bot" | "user"; text: string; at: string };

const quickReplies = [
  "Aplicar IA na minha empresa",
  "Quero saber sobre Conect.AI",
  "Tenho interesse no MED",
  "Tenho interesse no GOV",
  "Quero falar de um problema específico",
];

const leadSchema = z.object({
  nome: z.string().trim().min(2).max(120),
  empresa: z.string().trim().min(1).max(160),
  whatsapp: z.string().trim().min(8).max(40),
  interesse: z.string().trim().min(1).max(200),
});

export type ContactDraft = {
  nome: string;
  empresa: string;
  whatsapp: string;
  interesse: string;
};

export function ContactChatSimulation({
  origin,
  draft,
  onDraftChange,
  onInterestHover,
}: {
  origin: string;
  draft: ContactDraft;
  onDraftChange: (d: ContactDraft) => void;
  onInterestHover?: (v: string | null) => void;
}) {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "bot", text: "Olá. Me conte o que você quer resolver.", at: new Date().toISOString() },
  ]);
  const [chipsUsed, setChipsUsed] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  function pickChip(v: string) {
    if (chipsUsed) return;
    setChipsUsed(true);
    onDraftChange({ ...draft, interesse: v });
    onInterestHover?.(null);
    setMessages((m) => [
      ...m,
      { role: "user", text: v, at: new Date().toISOString() },
    ]);
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "bot",
          text: "Perfeito. A próxima etapa é entender área, urgência e contexto da operação.",
          at: new Date().toISOString(),
        },
      ]);
    }, 350);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const parsed = leadSchema.safeParse(draft);
    if (!parsed.success) {
      setError("Preencha nome, empresa, WhatsApp e escolha um interesse.");
      return;
    }
    const lead: Lead = {
      id: newLeadId(),
      created_at: new Date().toISOString(),
      nome: parsed.data.nome,
      empresa: parsed.data.empresa,
      cargo: "",
      email: "",
      whatsapp: parsed.data.whatsapp,
      interesse: parsed.data.interesse,
      area_impactada: "",
      dor_principal: "",
      urgencia: "",
      proxima_acao: "",
      origem_pagina: origin,
      status: "Novo lead",
      consentimento_lgpd: true,
      resumo_conversa: parsed.data.interesse,
      transcricao_chat: messages,
    };
    saveLead(lead);
    setSent(true);
    setMessages((m) => [
      ...m,
      {
        role: "bot",
        text: "Conversa enviada. O time Goable retorna para continuar de onde paramos.",
        at: new Date().toISOString(),
      },
    ]);
  }

  return (
    <div className="relative rounded-[var(--radius-card-lg)] glass-strong lit-top-border overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-cyan-violet)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-magenta-violet)" }}
      />

      <div className="relative flex items-center gap-3 border-b border-white/60 bg-white/50 backdrop-blur px-5 py-4">
        <div className="h-2 w-2 rounded-full bg-[var(--strategic-violet)] pulse-dot" />
        <div className="text-sm font-medium text-[var(--goable-black)]">Conversa Goable</div>
        <div className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-white/70 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Simulação visual
        </div>
      </div>

      <div ref={scroller} className="relative max-h-[520px] overflow-y-auto px-5 py-7 space-y-5">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
            {m.role === "bot" ? (
              <div
                className="max-w-[82%] rounded-2xl rounded-tl-md px-4 py-3 text-sm leading-relaxed fade-up"
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in oklab, var(--goable-black) 92%, transparent), color-mix(in oklab, var(--deep-violet) 88%, transparent))",
                  color: "var(--soft-white)",
                  boxShadow: "0 20px 40px -24px rgba(7,10,18,0.55)",
                }}
              >
                <div className="text-[10px] uppercase tracking-[0.22em] text-white/60 mb-1">
                  Goable
                </div>
                {m.text}
              </div>
            ) : (
              <div className="max-w-[82%] rounded-2xl rounded-tr-md border border-white/80 bg-white/85 backdrop-blur px-4 py-2.5 text-sm text-[var(--goable-black)] shadow-[0_10px_30px_-20px_rgba(7,10,18,0.35)] fade-up">
                {m.text}
              </div>
            )}
          </div>
        ))}

        {!chipsUsed ? (
          <div className="flex flex-wrap gap-2 pt-1">
            {quickReplies.map((q) => (
              <button
                key={q}
                type="button"
                onMouseEnter={() => onInterestHover?.(q)}
                onMouseLeave={() => onInterestHover?.(null)}
                onFocus={() => onInterestHover?.(q)}
                onBlur={() => onInterestHover?.(null)}
                onClick={() => pickChip(q)}
                className="group rounded-full border border-white/80 bg-white/70 backdrop-blur px-3.5 py-1.5 text-xs text-[var(--goable-black)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--strategic-violet)] hover:bg-white hover:shadow-[0_6px_18px_-8px_color-mix(in_oklab,var(--strategic-violet),transparent_60%)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:color-mix(in_oklab,var(--strategic-violet),transparent_65%)]"
              >
                {q}
              </button>
            ))}
          </div>
        ) : null}
      </div>

      <form
        onSubmit={submit}
        className="relative grid gap-3 border-t border-white/60 bg-white/60 backdrop-blur px-5 py-5 md:grid-cols-2"
      >
        <Field
          label="Nome"
          value={draft.nome}
          onChange={(v) => onDraftChange({ ...draft, nome: v })}
          placeholder="Como podemos te chamar"
        />
        <Field
          label="Empresa"
          value={draft.empresa}
          onChange={(v) => onDraftChange({ ...draft, empresa: v })}
          placeholder="Empresa ou organização"
        />
        <Field
          label="WhatsApp"
          value={draft.whatsapp}
          onChange={(v) => onDraftChange({ ...draft, whatsapp: v })}
          placeholder="Com DDD"
        />
        <Field
          label="Interesse"
          value={draft.interesse}
          onChange={(v) => onDraftChange({ ...draft, interesse: v })}
          placeholder="Escolha um chip ou descreva"
        />
        <div className="md:col-span-2 flex items-center justify-between gap-3 pt-1">
          <div className="text-[11px] text-muted-foreground">
            {sent
              ? "Conversa registrada no CRM interno desta versão."
              : "Sem envio real. Fluxo simulado para validação de experiência."}
          </div>
          <button
            type="submit"
            disabled={sent}
            className="pill-btn bg-[var(--strategic-violet)] px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--deep-violet)] hover:shadow-[0_16px_36px_-14px_color-mix(in_oklab,var(--strategic-violet),transparent_40%)] disabled:opacity-60 disabled:hover:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:color-mix(in_oklab,var(--strategic-violet),transparent_60%)]"
          >
            {sent ? "Conversa enviada" : "Enviar conversa"}
          </button>
        </div>
        {error ? (
          <div className="md:col-span-2 text-xs text-red-600">{error}</div>
        ) : null}
      </form>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[var(--border)] bg-white/90 px-3.5 py-2.5 text-sm text-[var(--goable-black)] outline-none transition-colors focus:border-[var(--strategic-violet)] focus:ring-2 focus:ring-[color:color-mix(in_oklab,var(--strategic-violet),transparent_75%)]"
      />
    </label>
  );
}

/** LeadFormBridge: shared helper used by ContactChatSimulation. Exported for clarity. */
export const LeadFormBridge = { saveLead };
