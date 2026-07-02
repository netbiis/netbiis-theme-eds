# Netbiis Edge Platform

Estas instruções complementam o arquivo AGENTS.md do repositório.

Use AGENTS.md como regra geral de desenvolvimento do projeto.
Use este arquivo como regra específica de arquitetura visual, responsividade e composição de blocos da plataforma Netbiis.

Nota sobre wrappers do Edge:
A plataforma pode renderizar wrappers no padrão `{blockname}-wrapper` automaticamente via Edge Delivery Services.

Quando este padrão aparecer na documentação ou no DOM, interpretar como estrutura gerada pelo Edge (contexto descritivo), não como recomendação para criar manualmente classes com esse padrão.

Antes de criar ou alterar qualquer bloco:

- Consulte primeiro AGENTS.md e este arquivo.
- Consulte docs/responsive-strategy.md e docs/breakpoints.md somente quando adicionar ou alterar comportamento responsivo.
- Consulte docs/block-architecture.md e docs/block-template.md somente quando criar bloco novo ou alterar estrutura interna de bloco.
- Consulte docs/containers.md e docs/foundations.md somente quando a mudança envolver container, content width, tokens globais ou regras da Foundation.
- Consulte docs/development-guidelines.md e docs/project-context.md somente quando a mudança afetar padrões gerais do projeto ou decisão arquitetural ampla.
- Se houver dúvida de escopo, consulte primeiro AGENTS.md e este arquivo.
- Se algum documento referenciado não estiver acessível, aplique as regras deste arquivo e de AGENTS.md.

Referências recomendadas por tema:

- Arquitetura e padrões: docs/project-context.md, docs/foundations.md, docs/block-architecture.md
- Responsividade: docs/responsive-strategy.md, docs/breakpoints.md
- Layout e containers: docs/containers.md, docs/block-template.md, docs/development-guidelines.md

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

## Nunca utilizar em blocos como solução de container

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

## Como funciona

A Foundation define a largura interna através da Section.

O bloco deve consumir as variáveis resolvidas pela Foundation.

## Como selecionar a opção

- A seleção de `content-default`, `content-narrow` ou `content-wide` deve ser feita na Section (via Section Metadata/Style).
- A Foundation resolve as variáveis com base na classe aplicada na Section.
- O bloco não deve definir essa classe na raiz do bloco.
- Nunca definir `--content-container-width` diretamente dentro de um bloco.

## Utilizar

```css
var(--content-container-width)

var(--content-container-padding-mobile)

var(--content-container-padding-desktop)
```

## Estrutura interna recomendada no bloco

- Dentro do bloco, criar um wrapper interno para o conteúdo (ex.: `.hero-content`, `.banner-content`, `.cta-content`).
- Aplicar no wrapper interno:
  - `max-width: var(--content-container-width);`
  - `padding-inline: var(--content-container-padding-mobile);`
- Em `BP-LG` (`@media (width >= 1200px)`), ajustar o wrapper para:
  - `padding-inline: var(--content-container-padding-desktop);`
- A raiz do bloco fica responsável pelo background full width.
- O wrapper interno fica responsável por limitar largura e espaçamento do conteúdo.
- Nunca aplicar `max-width` de content width direto na `.section`.
- Nunca definir `--content-container-width` dentro do bloco.

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

Escala oficial de spacing (Foundation):

- --space-1: 8px
- --space-2: 16px
- --space-3: 24px
- --space-4: 32px
- --space-5: 48px
- --space-6: 64px

Para escolher o token adequado, consulte também docs/foundations.md.

---

# Breakpoints

Utilizar exclusivamente os breakpoints oficiais.

Consultar:

```text
docs/breakpoints.md
```

## Permitido

```css
@media (width >= 600px)

@media (width >= 900px)

@media (width >= 1200px)

@media (width >= 1440px)
```

## Obrigatório

Adicionar comentário imediatamente acima de cada media query, identificando o breakpoint.

Cada media query deve ter seu próprio comentário, inclusive quando houver múltiplos breakpoints no mesmo bloco.

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
- Utilizado por 2 ou mais blocos → Promover para Foundation
- Em caso de dúvida sobre reutilização futura → Manter local e registrar avaliação para promoção posterior

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

Para criar background full width sem alterar `.section`:

- Aplique o background na raiz do bloco.
- Utilize content width e variáveis da Foundation para controlar o conteúdo interno.
- Nunca sobrescreva estilos de `.section` diretamente.

---

# Processo de Criação de Blocos

Antes de criar um bloco, responder:

## 1. Qual Grid Strategy será utilizada?

Escolher apenas uma:

- Layout Grid
- Collection Grid
- Adaptive Columns

Critério de escolha:

- Use Layout Grid quando o layout exigir posicionamento estrutural explícito em colunas.
- Use Collection Grid quando houver itens repetidos com quantidade variável.
- Use Adaptive Columns quando as colunas forem equivalentes e o conteúdo já vier em colunas definidas no markup.
- Se um bloco se encaixar em mais de uma opção, priorize Collection Grid para listas repetitivas e Layout Grid para estrutura de página.

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