import { Slot } from "./Slot";

export function SectionHeader({
  eyebrow,
  titleSlot,
  subSlot,
  align = "left",
}: {
  eyebrow?: string;
  titleSlot: string;
  subSlot?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <div className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--strategic-violet)]">
          {eyebrow}
        </div>
      ) : null}
      <Slot id={titleSlot} as="h2" className="text-3xl md:text-5xl font-semibold text-[var(--goable-black)]" />
      {subSlot ? (
        <div className="mt-4">
          <Slot id={subSlot} as="p" className="text-base md:text-lg text-muted-foreground" />
        </div>
      ) : null}
    </div>
  );
}
