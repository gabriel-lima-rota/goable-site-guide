import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[var(--light-bg)]">
      <Header />
      <main className="flex-1 min-w-0 overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
}

export function Section({
  children,
  className = "",
  bg = "default",
}: {
  children: ReactNode;
  className?: string;
  bg?: "default" | "white" | "muted" | "dark" | "med";
}) {
  const bgCls =
    bg === "white"
      ? "bg-white"
      : bg === "muted"
      ? "bg-[var(--muted)]"
      : bg === "dark"
      ? "bg-[var(--goable-black)] text-[var(--soft-white)]"
      : bg === "med"
      ? "bg-[var(--med-bg)]"
      : "";
  return (
    <section className={`relative overflow-hidden ${bgCls} ${className}`}>
      <div className="mx-auto w-full max-w-7xl min-w-0 px-5 py-20 sm:px-6 md:py-28">{children}</div>
    </section>
  );
}
