import type { ReactNode, ElementType } from "react";
import { COPY } from "@/lib/goable/copy";

/**
 * Copy placeholder visible during Fase 1.
 * Renders a labeled slot so the copy final can be inserted later.
 */
export function Slot({
  id,
  as = "span",
  hint,
  className = "",
}: {
  id: string;
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "p" | "div";
  hint?: ReactNode;
  className?: string;
}) {
  const Tag = as as ElementType;
  const finalCopy = COPY[id];
  if (finalCopy) {
    return <Tag className={className}>{finalCopy}</Tag>;
  }
  return (
    <Tag className={className}>
      <span className="copy-slot">{id}</span>
      {hint ? <span className="ml-2 text-xs text-muted-foreground">{hint}</span> : null}
    </Tag>
  );
}
