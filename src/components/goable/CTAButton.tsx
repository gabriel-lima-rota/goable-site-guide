import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "glass" | "event" | "med" | "gov";

const variants: Record<Variant, string> = {
  primary:
    "text-[var(--soft-white)] bg-[var(--strategic-violet)] hover:bg-[var(--deep-violet)] shadow-[0_0_0_1px_rgba(255,255,255,0.18)_inset,0_16px_42px_-16px_rgba(109,77,255,0.85),0_0_42px_-16px_rgba(109,77,255,0.9)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.24)_inset,0_20px_58px_-18px_rgba(109,77,255,0.95),0_0_70px_-18px_rgba(56,230,230,0.45)]",
  secondary:
    "bg-[var(--goable-black)] text-[var(--soft-white)] hover:bg-[var(--deep-violet)]",
  ghost:
    "bg-white/64 text-[var(--goable-black)] border border-white/70 backdrop-blur-xl hover:bg-white shadow-[0_14px_36px_-24px_rgba(244,246,250,0.55),0_0_0_1px_rgba(255,255,255,0.28)_inset] hover:shadow-[0_18px_46px_-26px_rgba(244,246,250,0.75),0_0_42px_-24px_rgba(169,155,255,0.7)]",
  glass: "text-[var(--soft-white)]",
  event:
    "bg-[var(--system-blue)] text-white hover:bg-[var(--deep-violet)]",
  med: "bg-[var(--med-green)] text-white hover:bg-[color:color-mix(in_oklab,var(--med-green),black_10%)]",
  gov: "bg-[var(--gov-green)] text-white hover:bg-[color:color-mix(in_oklab,var(--gov-green),black_10%)]",
};

export function CTAButton({
  to,
  href,
  variant = "primary",
  children,
  size = "md",
}: {
  to?: string;
  href?: string;
  variant?: Variant;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}) {
  const sizeCls =
    size === "lg"
      ? "px-8 py-4 text-base"
      : size === "sm"
      ? "px-4 py-2 text-sm"
      : "px-6 py-3 text-sm";
  const cls = `pill-btn inline-flex items-center justify-center font-medium tracking-normal ${sizeCls} ${variants[variant]}`;
  if (href) {
    return (
      <a href={href} className={cls}>
        <span className="pill-btn-label">{children}</span>
      </a>
    );
  }
  return (
    <Link to={to ?? "/contato"} className={cls}>
      <span className="pill-btn-label">{children}</span>
    </Link>
  );
}
