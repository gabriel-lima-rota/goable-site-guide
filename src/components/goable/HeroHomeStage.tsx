import { CTAButton } from "./CTAButton";
import { glass } from "@/lib/goable/assets";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import type { CSSProperties, PointerEvent } from "react";

export function HeroHomeStage() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    let ticking = false;

    const update = () => {
      const isMobile = window.matchMedia("(max-width: 640px)").matches;
      const progress = Math.min(Math.max(window.scrollY / (isMobile ? 560 : 720), 0), 1);
      const symbol = hero.querySelector<HTMLElement>(".hero-symbol-stage");

      hero.style.setProperty("--hero-shift-x", `${progress * (isMobile ? -10 : 54)}px`);
      hero.style.setProperty("--hero-shift-y", `${progress * (isMobile ? 84 : -28)}px`);
      hero.style.setProperty("--hero-scale", `${1 + progress * (isMobile ? 0.11 : 0.055)}`);
      hero.style.setProperty("--hero-fade", `${1 - progress * (isMobile ? 0.03 : 0.12)}`);
      hero.style.setProperty("--hero-rotate", `${progress * (isMobile ? -5 : 0)}deg`);
      hero.style.setProperty("--hero-glow", `${progress}`);

      if (symbol) {
        if (isMobile) {
          symbol.style.transform = `translate3d(${progress * 14}px, ${progress * 56}px, 0) rotateZ(${progress * -3}deg) scale(${1 + progress * 0.06})`;
          symbol.style.opacity = `${0.14 + progress * 0.08}`;
        } else {
          symbol.style.removeProperty("transform");
          symbol.style.removeProperty("opacity");
        }
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty("--hero-pointer-x", `${x * 22}px`);
    event.currentTarget.style.setProperty("--hero-pointer-y", `${y * 16}px`);
  };

  const onPointerLeave = () => {
    heroRef.current?.style.setProperty("--hero-pointer-x", "0px");
    heroRef.current?.style.setProperty("--hero-pointer-y", "0px");
  };

  return (
    <section
      ref={heroRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="hero-premium-dark"
      style={
        {
          "--hero-shift-x": "0px",
          "--hero-shift-y": "0px",
          "--hero-pointer-x": "0px",
          "--hero-pointer-y": "0px",
          "--hero-scale": "1",
          "--hero-fade": "1",
          "--hero-rotate": "0deg",
          "--hero-glow": "0",
        } as CSSProperties
      }
    >
      <div className="hero-dark-aura" aria-hidden />
      <div className="hero-wave-field" aria-hidden />

      <div className="hero-premium-grid">
        <div className="relative z-10 max-w-4xl">
          <h1 className="hero-headline">
            <span>Sistemas inteligentes para</span>{" "}
            <span>empresas que não cabem em</span>{" "}
            <span>
              <span className="hero-headline-highlight">soluções genéricas</span>
            </span>
          </h1>

          <p className="hero-copy fade-up-delay-2">
            A Goable entra na operação, entende a raiz do problema e desenha sistemas de IA com especialistas.
          </p>

          <div className="hero-cta-row mt-8 flex flex-wrap gap-3 fade-up-delay-3">
            <CTAButton variant="primary" size="lg">
              Falar com a Goable
              <ArrowRight size={18} strokeWidth={2.25} />
            </CTAButton>
            <CTAButton variant="glass" size="lg" to="/conect-ai">Conhecer Conect.AI</CTAButton>
          </div>
        </div>

        <div className="hero-symbol-stage" aria-hidden>
          <div className="hero-symbol-halo" />
          <div className="hero-symbol-object">
            <img
              src={glass.gSymbol}
              alt=""
              draggable={false}
              className="hero-symbol-glass"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
