// Central registry of Goable brand, event photos and glass assets.
// Files live in /public/goable-assets so local preview and Lovable render the same visuals.
const asset = (file: string) => `/goable-assets/${file}`;

export const brand = {
  logoBlack: asset("logo-preto-tight.png"),
  logoWhite: asset("logo-branco-tight.png"),
  markBlack: asset("simbolo-preto-crop.png"),
  markWhite: asset("simbolo-branco-crop.png"),
  logoOnWhite: asset("logo-bg-branco.png"),
  logoOnBlack: asset("logo-bg-preto.png"),
  palette: asset("goable-ai-cores.png"),
};

export const glass = {
  gSymbol: asset("goable-glass-symbol-cutout.webp"),
  conectWave: asset("goable-conect-ai-evento-tela.webp"),
};

export const glass3d = {
  wave: asset("goable-1d.png"),
  loop: asset("goable-2d.png"),
  drop: asset("goable-3d.png"),
  arch: asset("goable-4d.png"),
  hook: asset("goable-5d.png"),
  infinity: asset("goable-6d.png"),
  shell: asset("goable-7d.png"),
  ring: asset("goable-8d.png"),
  cluster1: asset("goable-agrupar-1.png"),
  cluster2: asset("goable-agrupar-2.png"),
};

export const gradientGlass = {
  chain: asset("goable-gradient-glass-1.webp"),
  waveOrange: asset("goable-gradient-glass-2.webp"),
  spiralRed: asset("goable-gradient-glass-3.webp"),
  hookYellow: asset("goable-gradient-glass-4.webp"),
  archLime: asset("goable-gradient-glass-5.webp"),
  foldViolet: asset("goable-gradient-glass-6.webp"),
  slabGreen: asset("goable-gradient-glass-7.webp"),
  ribbonBlue: asset("goable-gradient-glass-8.webp"),
  loopIridescent: asset("goable-gradient-glass-9.webp"),
  foldBlue: asset("goable-gradient-glass-21.webp"),
  doubleCapsule: asset("goable-gradient-glass-22.webp"),
  amberDisc: asset("goable-gradient-glass-23.webp"),
  magentaSeal: asset("goable-gradient-glass-24.webp"),
  goldPetal: asset("goable-gradient-glass-25.webp"),
};

export const photos = {
  palco: asset("combo-studios-644.webp"),
  apresentacao: asset("combo-studios-558.webp"),
  publico: asset("combo-studios-325.webp"),
  palestrante: asset("combo-studios-259.webp"),
  telaGoable: asset("combo-studios-19.webp"),
  cracha: asset("combo-studios-9.webp"),
  edgarBackdrop: asset("combo-studios-589.webp"),
  edgarPortrait: asset("combo-studios-591.webp"),
  edgarSmile: asset("combo-studios-611.jpg"),
  aiSprint: asset("combo-studios-652.webp"),
};

const photoByFilename: Record<string, string> = {
  "COMBO_STUDIOS-644.jpg": photos.palco,
  "COMBO_STUDIOS-558.jpg": photos.apresentacao,
  "COMBO_STUDIOS-325.jpg": photos.publico,
  "COMBO_STUDIOS-259.jpg": photos.palestrante,
  "COMBO_STUDIOS-19.jpg": photos.telaGoable,
  "COMBO_STUDIOS-9.jpg": photos.cracha,
  "COMBO_STUDIOS-589.jpg": photos.edgarBackdrop,
  "COMBO_STUDIOS-591.jpg": photos.edgarPortrait,
  "COMBO_STUDIOS-592.jpg": photos.edgarSmile,
  "COMBO_STUDIOS-652.jpg": photos.aiSprint,
};

export function resolvePhoto(name?: string): string | undefined {
  if (!name) return undefined;
  return photoByFilename[name];
}
