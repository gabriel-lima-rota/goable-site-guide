
# Plano: Site Goable AI (do zero, fiel ao MD)

Base: `goable-home-PROJETO-COMPLETO.zip` (Home) + `ARQUIVOS-ALTERADOS.zip` (Hero final) + logos oficiais + Satoshi + 7 fotos reais.
Stack atual: TanStack Start + Tailwind v4. Vou manter e adaptar o pacote (que é Vite/React) ao roteamento TanStack.

---

## Fase 0 — Preparação (sem tocar UI)

1. Extrair os dois zips em `/tmp/`, verificar ausência de `.git`.
2. Comparar `ARQUIVOS-ALTERADOS.zip` vs pacote completo — os 3 arquivos alterados (`HeroHomeStage.tsx`, `CTAButton.tsx`, `styles.css`) prevalecem.
3. Instalar deps que o pacote usa e faltam aqui: `lucide-react`, `framer-motion`, `clsx`, `tailwind-merge` (checar quais já estão).
4. Sem `.git` copiado, sem `tailwind.config.js` (Tailwind v4 CSS-first).

## Fase 1 — Marca oficial (logos + Satoshi)

**Logos** — upload via `lovable-assets` (CDN) dos 6 PNGs oficiais e criação de `src/lib/goable/brand.ts` centralizando URLs:
- `logoLight` = `Logo_branco@3x.png` (header dark)
- `logoDark` = `Logo_preto@3x.png` (footer/seções claras)
- `symbolDark` / `symbolLight` (favicon + acentos)
- `wordmarkDark` / `wordmarkLight`

**Favicon**: converter `Simbolo_preto@3x.png` → `public/favicon.png` (512x512), deletar `public/favicon.ico`, registrar no `head().links` do `__root.tsx`.

**Fonte Satoshi** — 10 OTFs via `lovable-assets`. No topo de `src/styles.css`, um único `@font-face` por peso apontando pros URLs CDN (formato `opentype`), família única `"Satoshi"` com `font-weight: 300/400/500/700/900` e italics. No `@theme`:
```
--font-sans: "Satoshi", system-ui, sans-serif;
--font-display: "Satoshi", system-ui, sans-serif;
```
Remover qualquer `@import` do Google Fonts / `@fontsource-*` e qualquer `<link>` de fonte remota no `__root.tsx` que venha do pacote.

## Fase 2 — Assets de imagem (7 fotos + G de vidro)

Upload via `lovable-assets` das 7 imagens principais e mapeamento em `src/lib/goable/assets.ts`:
- `heroGlassG` = `df841c42...png` (Hero)
- `waveBg` = `Goable_Conect.AI_Evento_Tela.png` (fundos de textura)
- `event644/558/325/259/19` (Conect.AI + Sobre + Especialistas)

## Fase 3 — Design system do pacote (styles.css)

Copiar o `src/styles.css` do **ARQUIVOS-ALTERADOS** (107KB — tokens Goable, liquid glass, glow violeta, keyframes de ondas, Kanban, chat, dash, timesheet) e mesclar com o `src/styles.css` atual do template, garantindo:
- `@import "tailwindcss";` no topo, antes de tudo
- `@font-face` Satoshi logo depois
- `@theme` com cores violeta/preto/branco/glass tokens
- Remover qualquer `@import` de URL remota (Lightning CSS quebra)
- Nada de `-webkit-backdrop-filter` manual duplicado

## Fase 4 — Componentes Goable (base do pacote)

Copiar `src/components/goable/*` inteiro do pacote completo, sobrescrevendo com os 2 arquivos finais do Hero:
- `HeroHomeStage.tsx` (final)
- `CTAButton.tsx` (final)
- `Navbar.tsx`, `Footer.tsx`, `LiquidGlass*`, `WavesBg`, `MethodCard`, `HomeDiagnosticDemo` (Kanban/Chat/Dash/Timesheet), `SpecialistsSection`, `ConectAISection`, `CTAFinal`, etc.

Ajustar todos os imports de logo pro `brand.ts` (não usar SVG genérico nem tipografia solta).

## Fase 5 — Home (`src/routes/index.tsx`)

Substituir placeholder pela composição fiel ao pacote:

```
<Navbar />
<HeroHomeStage />          // 100svh, G vidro direita, ondas, headline 3 linhas
<MethodCard />             // "COMO VAMOS SOLUCIONAR SEU PROBLEMA"
<ProblemaSection />        // transição arredondada, glass fosco
<HomeDiagnosticDemo />     // Vendas/Atendimento/Gestão/Operação interativos
<SpecialistsSection />     // Edgar Abreu + fotos reais
<ConectAISection />        // fotos evento + 3 cards (Emp/MED/GOV)
<CTAFinal />               // "Falar com a Goable" → /contato
<Footer />
```

`head()` da Home: title "Goable AI — Sistemas inteligentes sob medida", descrição curta, og:title/og:description iguais, `og:image` = símbolo violeta sobre fundo escuro (gerar). Sem `og:image` no `__root.tsx`.

## Fase 6 — Rotas internas (TanStack file-based)

Criar 6 arquivos em `src/routes/`, cada um com `head()` próprio (title/description/og distintos), Navbar + Footer compartilhados:

| Arquivo | URL | Conteúdo |
|---|---|---|
| `sobre.tsx` | /sobre | Visão + Edgar + especialistas por área + foto real de palestra |
| `conect-ai.tsx` | /conect-ai | Hub: por que existe + fotos reais + 3 cards (Emp/MED/GOV) |
| `conect-ai.empresarios.tsx` | /conect-ai/empresarios | 24/07 + ingresso + copy |
| `conect-ai.med.tsx` | /conect-ai/med | 22/07 + paleta Faculdade Unimed **apenas nesta página** + ingresso |
| `conect-ai.gov.tsx` | /conect-ai/gov | 23/07 + correalização + logos |
| `contato.tsx` | /contato | `ContactChatSimulation` (chat visual coletando dados tipo CRM, sem IA real) |

Cada página com hero próprio (não repetir o Hero da Home), CTA contextual.

## Fase 7 — Responsivo, a11y, performance

- Mobile: H1 ≤ 4 linhas, G de vidro entre Hero e 2ª seção, navbar sem drawer fora da tela, sem scroll horizontal, cards com respiro, mockups adaptados.
- `prefers-reduced-motion`: desligar ondas/parallax.
- `alt` real em toda foto, contraste WCAG AA nos textos sobre glass.
- Lazy-load das seções abaixo da fold; imagens com `loading="lazy"` exceto Hero.

## Fase 8 — Checklist final (validação antes de encerrar)

- [ ] Home idêntica ao pacote (Hero, MetodoCard, Problema, Diagnóstico 4 estados, Especialistas, Conect.AI, CTA)
- [ ] Headline 3 linhas desktop, destaque violeta em "soluções genéricas"
- [ ] G de vidro com parallax mouse + scroll
- [ ] Botões: primário glow violeta + seta, secundário glass fosco
- [ ] Navbar fixa arredondada glass com transição no scroll
- [ ] Satoshi carregando (nenhuma fallback system visível)
- [ ] Logos oficiais nos lugares certos (branco em dark, preto em light)
- [ ] 7 fotos reais aplicadas nas seções corretas
- [ ] 6 rotas internas com head() único
- [ ] Mobile sem quebra, sem scroll horizontal
- [ ] Nenhum emoji, travessão, ciano dominante, SVG genérico

---

## Detalhes técnicos

- **Rotas TanStack**: pontos separam níveis. `conect-ai.med.tsx` → `/conect-ai/med`. `createFileRoute("/conect-ai/med")`.
- **Assets grandes**: 100% via `lovable-assets` CDN (fontes OTF, PNGs de logo, JPGs de evento). Zero binário grande no repo.
- **Chat de contato**: componente client-only com estado local (React `useState`), array pré-definido de perguntas ("Nome?", "Empresa?", "Qual dor principal?", etc.) e "digitação" animada. Nenhuma chamada a backend/IA.
- **Página MED**: paleta Faculdade Unimed escopada via CSS variables locais no wrapper `<section data-theme="unimed">`, sem vazar pros tokens globais.
- **Ordem de execução**: Fases 0→4 são fundação (build ainda quebrado). Só depois da Fase 5 o site fica navegável. Fases 6→8 iterativas.

Aprova pra eu começar a montar?
