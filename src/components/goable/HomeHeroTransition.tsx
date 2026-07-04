import { glass } from "@/lib/goable/assets";

/**
 * Compact horizontal bridge between hero and section 2.
 * Elegant, translucent wave with a thin luminous data trail. Home-only.
 */
export function HomeHeroTransition() {
  return (
    <section
      aria-hidden
      className="relative h-[92px] w-full max-w-full overflow-hidden sm:h-[120px] md:h-[clamp(120px,14vw,200px)]"
    >
      {/* Base fade from hero surface into white */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklab, var(--soft-white) 92%, white) 0%, white 100%)",
        }}
      />
      {/* Horizontal wave field, low-contrast, feathered on all edges */}
      <img
        src={glass.conectWave}
        alt=""
        className="absolute left-0 top-1/2 h-[140%] w-full max-w-full -translate-y-1/2 object-cover opacity-35 parallax-slow sm:h-[160%] sm:opacity-40"
        style={{
          filter: "blur(4px) saturate(115%)",
          mixBlendMode: "multiply",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, black 45%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%, black 0%, black 45%, transparent 100%)",
        }}
      />
      {/* Thin luminous data trail descending into the cockpit */}
      <div className="absolute left-1/2 top-0 h-full -translate-x-1/2">
        <div
          className="h-full w-px trail-fall"
          style={{
            background:
              "linear-gradient(180deg, transparent, color-mix(in oklab, var(--strategic-violet) 70%, white) 40%, color-mix(in oklab, #38E6E6 55%, transparent) 80%, transparent)",
          }}
        />
      </div>
      {/* Node dot where the trail lands */}
      <div
        className="absolute left-1/2 bottom-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full pulse-dot"
        style={{
          background: "var(--strategic-violet)",
          boxShadow: "0 0 0 6px color-mix(in oklab, var(--strategic-violet) 15%, transparent)",
        }}
      />
    </section>
  );
}

export default HomeHeroTransition;