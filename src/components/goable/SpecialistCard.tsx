import { Slot } from "./Slot";

export function SpecialistCard({
  slotName,
  slotArea,
  slotLine,
  accent = "var(--strategic-violet)",
}: {
  slotName: string;
  slotArea: string;
  slotLine: string;
  accent?: string;
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl border bg-white p-4 card-lift"
      style={{
        borderColor: `color-mix(in oklab, ${accent} 30%, var(--border))`,
      }}
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />
      <div
        className="text-[10px] font-medium uppercase tracking-[0.2em]"
        style={{ color: accent }}
      >
        {slotArea}
      </div>
      <Slot
        id={slotName}
        as="div"
        className="mt-2 text-sm font-semibold text-[var(--goable-black)]"
      />
      <div className="mt-1">
        <Slot
          id={slotLine}
          as="div"
          className="text-xs text-muted-foreground leading-relaxed"
        />
      </div>
    </div>
  );
}
