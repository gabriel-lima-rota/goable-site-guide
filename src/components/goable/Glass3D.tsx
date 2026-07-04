import { glass3d } from "@/lib/goable/assets";
import { cn } from "@/lib/utils";

export type Glass3DVariant = keyof typeof glass3d;

type Tint = "none" | "med" | "gov" | "violet";

type Props = {
  variant: Glass3DVariant;
  className?: string;
  size?: number | string;
  rotate?: number;
  opacity?: number;
  tint?: Tint;
  float?: boolean;
  reveal?: boolean;
  ariaHidden?: boolean;
};

const tintFilter: Record<Tint, string> = {
  none: "",
  med: "hue-rotate(70deg) saturate(0.6)",
  gov: "hue-rotate(-10deg) saturate(0.35) brightness(1.02)",
  violet: "saturate(1.1)",
};

/**
 * Official Goable 3D glass object.
 * Use one per section, never as decoration.
 */
export function Glass3D({
  variant,
  className,
  size = 360,
  rotate = 0,
  opacity = 1,
  tint = "none",
  float = true,
  reveal = true,
  ariaHidden = true,
}: Props) {
  const src = glass3d[variant];
  const style: React.CSSProperties = {
    width: typeof size === "number" ? `${size}px` : size,
    height: "auto",
    // Custom props consumed by keyframes
    ["--g3d-rot" as any]: `${rotate}deg`,
    ["--g3d-op" as any]: opacity,
    opacity,
    filter: tintFilter[tint],
    transform: `rotate(${rotate}deg)`,
  };

  return (
    <div
      aria-hidden={ariaHidden}
      className={cn(
        "pointer-events-none select-none",
        reveal && "glass3d-reveal",
        className,
      )}
      style={{ opacity }}
    >
      <img
        src={src}
        alt=""
        draggable={false}
        loading="lazy"
        style={style}
        className={cn("block", float && "glass3d-float")}
      />
    </div>
  );
}

export default Glass3D;