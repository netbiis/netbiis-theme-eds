# Foundations

## Objetivo

A Foundation é a camada base da plataforma Netbiis Edge Platform.

Ela define os padrões globais utilizados por todos os projetos construídos sobre Adobe Edge Delivery Services.

O objetivo é garantir:

* Consistência visual
* Consistência de desenvolvimento
* Reutilização de componentes
* Alinhamento entre UX, Design e Desenvolvimento

---

# Estrutura

```text
styles/

├── foundations/
│   ├── tokens.css
│   ├── containers.css
│   └── spacing.css
│
├── base/
│   ├── reset.css
│   ├── typography.css
│   ├── links.css
│   ├── buttons.css
│   └── images.css
│
├── themes/
│   └── default.css
│
└── styles.css
```

---

# Foundations

Responsáveis por regras estruturais da plataforma.

## tokens.css

Contém:

* Colors
* Typography Tokens
* Container Tokens
* Spacing Scale
* Navigation Tokens

---

## containers.css

Responsável pelos containers globais.

Define:

* Default
* Narrow
* Wide
* Full Width
* Full Width Padded

---

## spacing.css

Responsável por:

* Espaçamento entre seções
* Espaçamentos globais da plataforma

---

# Base

Responsável pelos estilos globais.

## reset.css

* Body
* Fontes
* Inputs
* Header
* Footer

---

## typography.css

* Headings
* Paragraphs
* Lists
* Code Blocks

---

## links.css

* Links globais

---

## buttons.css

* Botões globais

---

## images.css

* Imagens
* Ícones

---

# Grid Strategy

A plataforma utiliza dois tipos de grid.

Cada um resolve um problema diferente.

---

## Layout Grid

Utilizado para estruturar páginas e seções.

Exemplos:

- Hero
- Content + Image
- CTA
- Footer
- Header
- Columns

### Regra

```css
grid-template-columns: repeat(12, 1fr);
```

### Objetivo

Representar o grid de layout utilizado pelo UX e Design no Figma.

---

## Collection Grid

Utilizado para listas e coleções de componentes.

Exemplos:

- Cards
- Produtos
- Artigos
- Logos
- Equipe
- Cases

### Regra

```css
grid-template-columns:
  repeat(
    auto-fill,
    minmax(...)
  );
```

### Objetivo

Permitir que a quantidade de itens varie sem necessidade de definir spans manualmente.

---

## Quando usar cada um

### Layout Grid

Quando existe uma estrutura fixa.

Exemplos:

- 5 / 7
- 4 / 8
- 6 / 6

---

### Collection Grid

Quando existe uma quantidade variável de itens.

Exemplos:

- 3 cards
- 5 cards
- 8 cards
- 12 cards

---

## Regra da Plataforma

Não utilizar Layout Grid para coleções.

Não utilizar Collection Grid para layout estrutural de página.


# Themes

Responsável por customizações de marca.

Inicialmente:

```text
themes/default.css
```

No futuro:

```text
themes/
├── corporate.css
├── university.css
├── healthcare.css
└── ecommerce.css
```

---

# Princípios

A Foundation deve ser:

* Simples
* Previsível
* Reutilizável
* Independente dos blocos

Nenhum bloco deve alterar as regras da Foundation.
