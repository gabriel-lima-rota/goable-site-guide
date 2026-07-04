import { Link } from "@tanstack/react-router";
import { CTAButton } from "./CTAButton";
import { brand } from "@/lib/goable/assets";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border)] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img
              src={brand.logoBlack}
              alt="Goable AI"
              className="block h-10 w-[140px] object-cover object-center select-none"
              draggable={false}
            />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Clareza para transformar.
            </p>
            <div className="mt-6">
              <CTAButton variant="primary" size="sm">Contato</CTAButton>
            </div>
          </div>
          <FooterCol title="Empresa" links={[
            { label: "Home", to: "/" },
            { label: "Sobre", to: "/sobre" },
            { label: "Contato", to: "/contato" },
          ]} />
          <FooterCol title="Conect.AI" links={[
            { label: "Visão geral", to: "/conect-ai" },
            { label: "Empresários", to: "/conect-ai/business" },
            { label: "MED", to: "/conect-ai/med" },
            { label: "GOV", to: "/conect-ai/gov" },
          ]} />
          <FooterCol title="Institucional" links={[
            { label: "Contato", to: "/contato" },
          ]} />
        </div>
        <div className="mt-12 border-t border-[var(--border)] pt-6 text-xs text-muted-foreground">
          Goable AI · Sistemas inteligentes sob medida
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: Array<{ label: string; to: string }> }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.2em] text-[var(--goable-black)] font-medium">
        {title}
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.to + l.label}>
            <Link to={l.to} className="text-muted-foreground hover:text-[var(--goable-black)] transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
