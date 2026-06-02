# Netbiis Edge Platform

Antes de criar ou alterar qualquer bloco, consulte obrigatoriamente:

- docs/project-context.md
- docs/foundations.md
- docs/block-architecture.md
- docs/responsive-strategy.md
- docs/breakpoints.md
- docs/development-guidelines.md
- docs/containers.md
- docs/block-template.md

---

# Objetivo

Garantir que todos os blocos da plataforma sigam os mesmos padrões arquiteturais, visuais e responsivos.

---

# Responsabilidades

## Foundation

Responsável por:

- Containers
- Content Width
- Breakpoints
- Tokens Globais
- Themes
- Buttons
- Espaçamento Global

Foundation controla a página.

---

## Base

Responsável por:

- Reset
- Typography
- Links
- Images

Base controla o comportamento padrão dos elementos HTML.

---

## Blocos

Responsáveis por:

- Layout interno
- Grid interno
- Componentes visuais
- Comportamento responsivo
- Estados e interações
- Tokens específicos do bloco

Blocos controlam apenas a si mesmos.

---

# Containers

Containers são responsabilidade exclusiva da Foundation.

Nunca implementar containers dentro de blocos.

## Nunca utilizar

```css
max-width: 1200px;

max-width: 1280px;

padding: 0 24px;

padding: 0 32px;

margin: auto;
```

## Utilizar

```css
var(--container-default)

var(--container-narrow)

var(--container-wide)

var(--container-padding-mobile)

var(--container-padding-desktop)
```

---

# Container Consumers

Atualmente os seguintes elementos consomem containers da Foundation:

```css
main > .section > div

header nav

footer .footer > div
```

Nunca reproduzir containers dentro de blocos.

---

# Content Width

Content Width controla a largura do conteúdo interno.

Utilizar quando um bloco precisar de:

- Background Full Width
- Conteúdo centralizado

Exemplos:

- Hero
- Banner
- CTA
- Promo Banner

## Opções

```css
content-default

content-narrow

content-wide
```

## Utilizar

```css
var(--content-container-width)
```

## Nunca utilizar

```css
max-width: 800px;

max-width: 900px;

max-width: 1200px;
```

para limitar conteúdo interno.

---

# Spacing

Utilizar exclusivamente tokens de spacing.

## Nunca utilizar

```css
gap: 24px;

padding: 40px;

margin: 32px;
```

## Utilizar

```css
var(--space-1)

var(--space-2)

var(--space-3)

var(--space-4)

var(--space-5)

var(--space-6)
```

---

# Breakpoints

Utilizar exclusivamente os breakpoints oficiais.

Consultar:

```text
docs/breakpoints.md
```

## Permitido

```css
@media (width >= 900px)

@media (width >= 1200px)

@media (width >= 1440px)
```

## Obrigatório

Sempre comentar o breakpoint.

Exemplo:

```css
/* BP-MD */

@media (width >= 900px) {

}
```

---

# Grid Strategy

A plataforma utiliza três estratégias de grid.

---

## Layout Grid

Utilizado para:

- Hero
- CTA
- Layouts
- Split Content

```css
grid-template-columns:
  repeat(12, 1fr);
```

---

## Collection Grid

Utilizado para:

- Cards
- Produtos
- Logos
- Cases
- Team

```css
grid-template-columns:
  repeat(
    auto-fill,
    minmax(..., 1fr)
  );
```

---

## Adaptive Columns

Utilizado para:

- Columns

```css
grid-template-columns:
  repeat(
    auto-fit,
    minmax(0, 1fr)
  );
```

---

# Tokens

## Tokens Globais

Devem permanecer na Foundation.

Exemplos:

```css
--container-default

--container-narrow

--container-wide

--space-3

--heading-font-size-l

--light-color
```

---

## Tokens de Bloco

Devem permanecer encapsulados no próprio bloco.

Permitido:

```css
.cards {

  --cards-min-width: 260px;

}
```

```css
.hero {

  --hero-min-height: 300px;

}
```

Não permitido:

```css
:root {

  --cards-min-width: 260px;

}
```

### Regra prática

- Utilizado por um único bloco → Token Local
- Utilizado por múltiplos blocos → Avaliar promoção para Foundation

---

# Mobile First

Todos os blocos devem ser desenvolvidos inicialmente para mobile.

Exemplo:

```css
.hero {

  display: block;

}

/* BP-MD */

@media (width >= 900px) {

  .hero {

    display: grid;

  }

}
```

---

# Escopo CSS

Aplicar CSS preferencialmente na raiz do bloco.

Exemplo:

```css
.cards {

}
```

```css
.hero {

}
```

Evitar alterar:

```css
body

main

.section
```

---

# Processo de Criação de Blocos

Antes de criar um bloco, responder:

## 1. Qual Grid Strategy será utilizada?

Escolher apenas uma:

- Layout Grid
- Collection Grid
- Adaptive Columns

---

## 2. O bloco precisa de Container?

Se sim:

Utilizar Foundation.

Nunca criar containers próprios.

---

## 3. O bloco precisa de Content Width?

Utilizar:

- content-default
- content-narrow
- content-wide

---

## 4. O bloco precisa de Tokens próprios?

Criar tokens locais no bloco.

---

## 5. O bloco precisa de responsividade?

Utilizar exclusivamente os breakpoints oficiais.

---

# Regra Final

Foundation controla a página.

Blocos controlam apenas a si mesmos.

Quando existir dúvida:

1. Reutilizar uma solução existente.
2. Reutilizar tokens existentes.
3. Reutilizar containers existentes.
4. Somente depois criar uma nova abstração.