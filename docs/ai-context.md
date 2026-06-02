# AI Context

Este projeto segue a arquitetura Netbiis Edge Platform para Adobe Edge Delivery Services.

O objetivo é criar blocos reutilizáveis, consistentes e desacoplados.

---

# Foundation

A Foundation controla:

- Containers
- Breakpoints
- Tokens Globais
- Themes
- Typography
- Espaçamento Global

Os blocos não devem recriar essas responsabilidades.

---

# Container Strategy

A largura da aplicação é controlada exclusivamente pela Foundation.

Consumidores atuais:

- main > .section > div
- header nav
- footer .footer > div

Blocos não devem criar containers próprios.

---

# Grid Strategy

Existem três tipos oficiais de grid.

---

## Layout Grid

Usado para layouts estruturais.

Exemplos:

- Hero
- CTA
- Content Layout
- Split Content

```css
grid-template-columns:
  repeat(12, 1fr);
```

---

## Collection Grid

Usado para listas e coleções.

Exemplos:

- Cards
- Produtos
- Cases
- Logos
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

Usado para o bloco Columns.

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

Utilizar sempre que possível.

Exemplos:

```css
var(--space-3)

var(--container-default)

var(--heading-font-size-l)

var(--light-color)
```

---

## Tokens de Bloco

Criar quando a configuração pertence exclusivamente ao componente.

Exemplo:

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

---

# Responsividade

A plataforma é Mobile First.

Implementar primeiro a experiência mobile.

Adicionar melhorias progressivas através dos breakpoints oficiais.

---

# Containers

Nunca implementar:

```css
max-width: 1200px;

max-width: 1280px;

padding: 0 24px;

padding: 0 32px;
```

Utilizar sempre os tokens da Foundation.

---

# Espaçamento

Nunca utilizar valores hardcoded.

Exemplo incorreto:

```css
gap: 24px;

padding: 40px;
```

Exemplo correto:

```css
gap: var(--space-3);

padding: var(--space-5);
```

---

# Objetivo

Todos os blocos da plataforma devem parecer criados pela mesma equipe, independentemente do desenvolvedor ou da IA utilizada.