import { Link } from "@tanstack/react-router";
import { eventData, type EventKey } from "@/lib/goable/events";

export function EventEditionCard({ eventKey }: { eventKey: EventKey }) {
  const e = eventData[eventKey];
  const accentClass =
    eventKey === "med"
      ? "text-[var(--med-green)]"
      : eventKey === "gov"
      ? "text-[var(--gov-green)]"
      : "text-[var(--strategic-violet)]";
  return (
    <Link
      to={e.path}
      className="group block rounded-lg border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-soft)] hover:border-[var(--strategic-violet)]/40 transition-colors"
    >
      <div className={`text-[10px] uppercase tracking-[0.2em] font-medium ${accentClass}`}>
        Conect.AI
      </div>
      <div className="mt-2 text-2xl font-semibold text-[var(--goable-black)]">{e.name}</div>
      <div className="mt-4 space-y-1 text-sm text-muted-foreground">
        <div>Data: {e.date}</div>
        <div>Local: {e.location}</div>
        <div>Público: {e.audience}</div>
      </div>
      <div className="mt-6 text-sm font-medium text-[var(--strategic-violet)] group-hover:underline">
        Conhecer edição
      </div>
    </Link>
  );
}
