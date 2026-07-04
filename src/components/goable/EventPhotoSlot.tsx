import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { resolvePhoto } from "@/lib/goable/assets";

export function EventPhotoSlot({
  assetName,
  caption,
  aspect = "16/9",
  tone = "dark",
  className = "",
  label,
}: {
  assetName?: string;
  caption?: string;
  aspect?: string;
  frame?: "editorial" | "clean";
  className?: string;
  tone?: "violet" | "med" | "gov" | "dark";
  label?: string;
}) {
  const src = resolvePhoto(assetName);
  return (
    <PhotoPlaceholder
      tone={tone}
      ratio={aspect.replace("/", " / ")}
      label={label}
      overlayLabel={caption}
      className={className}
      src={src}
      parallax={Boolean(src)}
      reveal={Boolean(src)}
      compact
    />
  );
}