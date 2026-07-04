import type { ReactNode } from "react";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { resolvePhoto } from "@/lib/goable/assets";

export function PhotoFeature({
  assetName,
  caption,
  children,
  tone = "violet",
  ratio = "16/9",
}: {
  assetName?: string;
  caption?: string;
  children?: ReactNode;
  tone?: "violet" | "med" | "gov" | "dark";
  ratio?: string;
}) {
  const src = resolvePhoto(assetName);
  return (
    <PhotoPlaceholder
      tone={tone}
      ratio={ratio}
      caption={caption}
      src={src}
      parallax={Boolean(src)}
      reveal={Boolean(src)}
    >
      {children}
    </PhotoPlaceholder>
  );
}
