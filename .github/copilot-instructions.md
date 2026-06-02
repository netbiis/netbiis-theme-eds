# Netbiis Edge Platform

Antes de criar ou alterar qualquer bloco, consulte:

- docs/foundations.md
- docs/block-architecture.md
- docs/responsive-strategy.md
- docs/breakpoints.md
- docs/development-guidelines.md

---

## Regras obrigatórias

### Containers

Nunca utilizar:

```css
max-width: 1200px;
max-width: 1280px;
padding: 0 24px;
padding: 0 32px;
```

Utilizar sempre:

```css
var(--container-default)
var(--container-padding-mobile)
var(--container-padding-desktop)
```

---

### Spacing

Nunca utilizar:

```css
margin: 24px;
padding: 40px;
gap: 16px;
```

Utilizar sempre:

```css
var(--space-*)
```

---

### Breakpoints

Utilizar apenas:

```css
@media (width >= 900px)
@media (width >= 1200px)
@media (width >= 1440px)
```

Consultar:

docs/breakpoints.md

---

### Block Tokens

Tokens específicos devem permanecer no bloco.

Exemplo:

```css
.cards {

  --cards-min-width: 260px;

}
```

Nunca adicionar tokens de blocos em:

tokens.css