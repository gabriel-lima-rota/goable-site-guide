export type LeadStatus =
  | "Novo lead"
  | "Diagnóstico"
  | "Conect.AI Empresários"
  | "Conect.AI MED"
  | "Conect.AI GOV"
  | "Projeto sob medida"
  | "Parceria"
  | "Sem fit no momento";

export interface Lead {
  id: string;
  created_at: string;
  nome: string;
  empresa: string;
  cargo: string;
  email: string;
  whatsapp: string;
  interesse: string;
  area_impactada: string;
  dor_principal: string;
  urgencia: string;
  proxima_acao: string;
  origem_pagina: string;
  status: LeadStatus;
  consentimento_lgpd: boolean;
  resumo_conversa: string;
  transcricao_chat: Array<{ role: "bot" | "user"; text: string; at: string }>;
}

const KEY = "goable_leads_v1";

export function loadLeads(): Lead[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Lead[]) : [];
  } catch {
    return [];
  }
}

export function saveLead(lead: Lead): void {
  if (typeof window === "undefined") return;
  const all = loadLeads();
  all.unshift(lead);
  window.localStorage.setItem(KEY, JSON.stringify(all));
}

export function updateLeadStatus(id: string, status: LeadStatus): void {
  if (typeof window === "undefined") return;
  const all = loadLeads().map((l) => (l.id === id ? { ...l, status } : l));
  window.localStorage.setItem(KEY, JSON.stringify(all));
}

export function newLeadId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}
