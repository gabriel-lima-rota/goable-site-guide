import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { brand, glass } from "@/lib/goable/assets";

const navGroups = [
  {
    title: "Empresa",
    links: [
      { label: "Home", to: "/" },
      { label: "Sobre", to: "/sobre" },
      { label: "Contato", to: "/contato" },
    ],
  },
  {
    title: "Conect.AI",
    links: [
      { label: "Visão geral", to: "/conect-ai" },
      { label: "Empresários", to: "/conect-ai/business" },
      { label: "MED", to: "/conect-ai/med" },
      { label: "GOV", to: "/conect-ai/gov" },
    ],
  },
  {
    title: "Ação",
    links: [
      { label: "Agendar diagnóstico", to: "/contato" },
      { label: "Falar com a Goable", to: "/contato" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="goable-footer">
      <div className="goable-footer-shell">
        <div className="goable-footer-glass" aria-hidden>
          <img src={glass.gSymbol} alt="" draggable={false} />
        </div>

        <div className="goable-footer-main">
          <div className="goable-footer-brand">
            <Link to="/" aria-label="Goable AI" className="goable-footer-logo-link">
              <img
                src={brand.logoWhite}
                alt="Goable AI"
                className="goable-footer-logo"
                draggable={false}
              />
            </Link>
            <p>
              Sistemas inteligentes para empresas que não cabem em soluções genéricas.
            </p>
            <div className="goable-footer-actions">
              <CTAButton variant="primary" size="sm" to="/contato">
                Contato
              </CTAButton>
              <Link to="/conect-ai" className="goable-footer-ghost-link">
                Conect.AI
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <nav className="goable-footer-nav" aria-label="Navegação do rodapé">
            {navGroups.map((group) => (
              <FooterCol key={group.title} title={group.title} links={group.links} />
            ))}
          </nav>
        </div>

        <div className="goable-footer-bottom">
          <span>Goable AI</span>
          <span>Sistemas inteligentes sob medida</span>
          <span>IA aplicada à empresa real</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: Array<{ label: string; to: string }> }) {
  return (
    <div className="goable-footer-col">
      <strong>{title}</strong>
      <ul>
        {links.map((link) => (
          <li key={`${link.to}-${link.label}`}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
