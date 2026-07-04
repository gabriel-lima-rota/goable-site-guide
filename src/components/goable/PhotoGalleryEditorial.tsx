import { EventPhotoSlot } from "./EventPhotoSlot";

const defaultAssets = [
  "COMBO_STUDIOS-644.jpg",
  "COMBO_STUDIOS-259.jpg",
  "COMBO_STUDIOS-325.jpg",
  "COMBO_STUDIOS-558.jpg",
  "COMBO_STUDIOS-19.jpg",
];

export function PhotoGalleryEditorial({
  assets = defaultAssets,
  variant = "compact",
}: {
  assets?: string[];
  variant?: "compact" | "editorial";
}) {
  if (variant === "editorial") {
    return <EditorialGallery />;
  }
  const [big, tallA, tallB, wide, vert] = assets;
  return (
    <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
      <div className="md:col-span-2 md:row-span-2">
        <EventPhotoSlot assetName={big} aspect="4/5" caption="Palco principal · Conect.AI" />
      </div>
      <div className="md:col-span-2">
        <EventPhotoSlot assetName={wide} aspect="21/9" caption="Apresentação prática" />
      </div>
      <div>
        <EventPhotoSlot assetName={tallA} aspect="1/1" caption="Liderança em cena" />
      </div>
      <div>
        <EventPhotoSlot assetName={tallB} aspect="1/1" caption="Público e diagnóstico" />
      </div>
      <div className="md:col-span-2">
        <EventPhotoSlot assetName={vert} aspect="21/9" caption="Detalhe visual do evento" />
      </div>
    </div>
  );
}

function EditorialGallery() {
  return (
    <div className="relative">
      {/* Ambient halos */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 -z-10 opacity-70 glass-shimmer"
        style={{
          background:
            "radial-gradient(60% 40% at 15% 30%, rgba(109,77,255,0.18), transparent 70%), radial-gradient(50% 40% at 85% 70%, rgba(56,230,230,0.16), transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      <div className="grid gap-4 md:grid-cols-6 md:grid-rows-2">
        <div className="md:col-span-3 md:row-span-2">
          <EventPhotoSlot
            assetName="COMBO_STUDIOS-644.jpg"
            aspect="4/5"
            caption="Palco Conect.AI, Porto Alegre"
          />
        </div>
        <div className="md:col-span-2">
          <EventPhotoSlot
            assetName="COMBO_STUDIOS-652.jpg"
            aspect="4/3"
            caption="Workshop AI Sprint"
          />
        </div>
        <div className="md:col-span-1">
          <EventPhotoSlot
            assetName="COMBO_STUDIOS-9.jpg"
            aspect="3/4"
            caption="Protagonistas do presente"
          />
        </div>
        <div className="md:col-span-1">
          <EventPhotoSlot
            assetName="COMBO_STUDIOS-19.jpg"
            aspect="3/4"
            caption="Identidade em cena"
          />
        </div>
        <div className="md:col-span-2">
          <EventPhotoSlot
            assetName="COMBO_STUDIOS-325.jpg"
            aspect="4/3"
            caption="Público em diagnóstico"
          />
        </div>
      </div>
    </div>
  );
}
