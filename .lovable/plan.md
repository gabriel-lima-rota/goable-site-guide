## Fix da navbar — logo pequeno

O pacote `goable-navbar-logo-fix.zip` corrige o problema do logo aparecer minúsculo na navbar. Causa: os PNGs `logo-branco-crop.png` / `logo-preto-crop.png` têm muita margem transparente (desenho ocupa só ~16% da altura).

### Alterações

1. **Adicionar 2 assets novos** (logos com crop justo, sem margem):
   - `public/goable-assets/logo-branco-tight.png`
   - `public/goable-assets/logo-preto-tight.png`

2. **Atualizar `src/lib/goable/assets.ts`**: apontar `logoWhite` / `logoBlack` para os arquivos `*-tight.png`.

3. **Atualizar `src/styles.css`**: `.site-brand-logo` com `height: 1.85rem` no desktop e `1.7rem` no mobile.

Nenhum outro arquivo é tocado. Apenas presentation/branding — sem mudanças de rota, lógica ou conteúdo.