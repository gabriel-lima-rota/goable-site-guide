import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { CTAButton } from "./CTAButton";
import { brand } from "@/lib/goable/assets";

export function Header() {
  const [openConect, setOpenConect] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const conectRef = useRef<HTMLDivElement>(null);
  const pathname = useLocation({ select: (location) => location.pathname });
  const darkHome = pathname === "/";
  const isConectActive = pathname.startsWith("/conect-ai");

  useEffect(() => {
    if (!openConect) return;
    function onDocClick(e: MouseEvent) {
      if (!conectRef.current?.contains(e.target as Node)) setOpenConect(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenConect(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [openConect]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${darkHome ? "is-dark" : "is-light"} ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-header-shell">
        <Link to="/" className="site-brand" aria-label="Goable AI">
          <img
            src={darkHome ? brand.logoWhite : brand.logoBlack}
            alt="Goable AI"
            className="site-brand-logo"
            draggable={false}
          />
        </Link>

        <nav className="site-nav" aria-label="Navegação principal">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "is-active" }} className="site-nav-link">
            <span>Home</span>
          </Link>
          <Link to="/sobre" activeProps={{ className: "is-active" }} className="site-nav-link">
            <span>Sobre</span>
          </Link>

          <div
            ref={conectRef}
            className="relative"
            onMouseEnter={() => setOpenConect(true)}
            onMouseLeave={() => setOpenConect(false)}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={openConect}
              onClick={() => setOpenConect((v) => !v)}
              className={`site-nav-link site-nav-button ${isConectActive ? "is-active" : ""}`}
            >
              <span>Conect.AI</span>
              <span aria-hidden className="site-nav-caret">▾</span>
            </button>

            {openConect ? (
              <div className="site-nav-dropdown-wrap fade-up">
                <div role="menu" className="site-nav-dropdown">
                  <Link to="/conect-ai" onClick={() => setOpenConect(false)} className="site-nav-dropdown-link">
                    Visão geral
                  </Link>
                  <div className="site-nav-dropdown-rule" />
                  <Link to="/conect-ai/business" onClick={() => setOpenConect(false)} className="site-nav-dropdown-link">
                    Empresários
                  </Link>
                  <Link to="/conect-ai/med" onClick={() => setOpenConect(false)} className="site-nav-dropdown-link">
                    MED
                  </Link>
                  <Link to="/conect-ai/gov" onClick={() => setOpenConect(false)} className="site-nav-dropdown-link">
                    GOV
                  </Link>
                </div>
              </div>
            ) : null}
          </div>

          <Link to="/contato" activeProps={{ className: "is-active" }} className="site-nav-link">
            <span>Contato</span>
          </Link>
        </nav>

        <div className="site-header-cta">
          <CTAButton variant="primary" size="sm" to="/contato">
            Contato
          </CTAButton>
        </div>

        <button
          type="button"
          className="site-mobile-toggle"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          <span className="flex flex-col gap-[3px]">
            <span className={`site-mobile-line ${mobileOpen ? "translate-y-[4.5px] rotate-45" : ""}`} />
            <span className={`site-mobile-line ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`site-mobile-line ${mobileOpen ? "-translate-y-[4.5px] -rotate-45" : ""}`} />
          </span>
          {mobileOpen ? "Fechar" : "Menu"}
        </button>
      </div>

      {mobileOpen ? (
        <div className="site-mobile-panel">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block py-1">Home</Link>
          <Link to="/sobre" onClick={() => setMobileOpen(false)} className="block py-1">Sobre</Link>
          <Link to="/conect-ai" onClick={() => setMobileOpen(false)} className="block py-1">Conect.AI</Link>
          <Link to="/conect-ai/business" onClick={() => setMobileOpen(false)} className="block py-1 pl-4 text-muted-foreground">Empresários</Link>
          <Link to="/conect-ai/med" onClick={() => setMobileOpen(false)} className="block py-1 pl-4 text-muted-foreground">MED</Link>
          <Link to="/conect-ai/gov" onClick={() => setMobileOpen(false)} className="block py-1 pl-4 text-muted-foreground">GOV</Link>
          <Link to="/contato" onClick={() => setMobileOpen(false)} className="block py-1">Contato</Link>
          <div className="pt-3">
            <CTAButton variant="primary" size="sm" to="/contato">Contato</CTAButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
