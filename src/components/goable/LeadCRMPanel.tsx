import { useEffect, useState } from "react";
import { loadLeads, updateLeadStatus, type Lead, type LeadStatus } from "@/lib/goable/crm";

const statuses: LeadStatus[] = [
  "Novo lead",
  "Diagnóstico",
  "Conect.AI Empresários",
  "Conect.AI MED",
  "Conect.AI GOV",
  "Projeto sob medida",
  "Parceria",
  "Sem fit no momento",
];

export function LeadCRMPanel() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setLeads(loadLeads());
  }, [open]);

  return (
    <div className="rounded-lg border border-[var(--border)] bg-white">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-6 py-4 text-left"
      >
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--strategic-violet)]">
            CRM interno
          </div>
          <div className="mt-1 text-sm font-medium text-[var(--goable-black)]">
            Leads captados nesta versão ({leads.length})
          </div>
        </div>
        <span className="text-[var(--strategic-violet)]">{open ? "-" : "+"}</span>
      </button>
      {open ? (
        <div className="border-t border-[var(--border)]">
          {leads.length === 0 ? (
            <div className="px-6 py-8 text-sm text-muted-foreground">
              Nenhum lead registrado ainda nesta sessão.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="text-left text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3">Data</th>
                    <th className="px-4 py-3">Nome</th>
                    <th className="px-4 py-3">Empresa</th>
                    <th className="px-4 py-3">Interesse</th>
                    <th className="px-4 py-3">Origem</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border)]">
                  {leads.map((l) => (
                    <tr key={l.id}>
                      <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                        {new Date(l.created_at).toLocaleDateString("pt-BR")}
                      </td>
                      <td className="px-4 py-3">{l.nome}</td>
                      <td className="px-4 py-3">{l.empresa}</td>
                      <td className="px-4 py-3 max-w-[220px] truncate">{l.interesse}</td>
                      <td className="px-4 py-3">{l.origem_pagina}</td>
                      <td className="px-4 py-3">
                        <select
                          value={l.status}
                          onChange={(e) => {
                            updateLeadStatus(l.id, e.target.value as LeadStatus);
                            setLeads(loadLeads());
                          }}
                          className="rounded-md border border-[var(--border)] bg-white px-2 py-1 text-xs"
                        >
                          {statuses.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
