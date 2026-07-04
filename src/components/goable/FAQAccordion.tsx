import { useState } from "react";
import { Slot } from "./Slot";

export function FAQAccordion({ prefix, count = 5 }: { prefix: string; count?: number }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-[var(--border)] rounded-lg border border-[var(--border)] bg-white">
      {Array.from({ length: count }).map((_, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <Slot id={`${prefix}_${i + 1}_Q`} as="span" className="text-sm md:text-base font-medium text-[var(--goable-black)]" />
              <span className="text-[var(--strategic-violet)] text-lg leading-none">
                {isOpen ? "-" : "+"}
              </span>
            </button>
            {isOpen ? (
              <div className="px-6 pb-5">
                <Slot id={`${prefix}_${i + 1}_A`} as="p" className="text-sm text-muted-foreground" />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
