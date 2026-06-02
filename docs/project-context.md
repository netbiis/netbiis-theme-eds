# Netbiis Edge Platform

## Visão Geral

A Netbiis Edge Platform é uma Foundation reutilizável para Adobe Edge Delivery Services (EDS).

Seu objetivo é fornecer uma base consistente para construção de sites, portais, campanhas e experiências digitais, reduzindo duplicação de código e garantindo padronização visual, arquitetural e responsiva entre projetos.

---

## Filosofia

A plataforma segue um princípio simples:

> Foundation controla a página. Blocos controlam apenas a si mesmos.

Isso significa que responsabilidades globais devem permanecer na Foundation, enquanto os blocos devem se preocupar apenas com seu próprio comportamento e apresentação.

---

## Estrutura da Plataforma

```text
styles/

foundations/
base/
themes/

blocks/
```

### Foundations

Responsável pelas regras estruturais da plataforma.

Inclui:

* Tokens
* Containers
* Content Width
* Spacing
* Themes
* Buttons

### Base

Responsável pelo comportamento padrão dos elementos HTML.

Inclui:

* Reset
* Typography
* Links
* Images

### Themes

Responsável pela identidade visual de uma implementação específica.

Exemplos:

* default.css
* corporate.css
* dark.css

### Blocks

Responsável pelos componentes reutilizáveis da plataforma.

Exemplos:

* Hero
* Cards
* Columns
* Header
* Footer

---

## Fonte da Verdade

Antes de criar ou alterar qualquer bloco, consulte os documentos abaixo.

### Arquitetura

* foundations.md
* block-architecture.md
* containers.md

### Responsividade

* responsive-strategy.md
* breakpoints.md

### Desenvolvimento

* development-guidelines.md
* block-template.md

### Inteligência Artificial

* ai-context.md
* .github/copilot-instructions.md

---

## Responsabilidades

### Foundation

Responsável por:

* Tokens Globais
* Containers
* Content Width
* Themes
* Buttons
* Espaçamento Global
* Breakpoints

Foundation não depende de blocos.

---

### Blocos

Responsáveis por:

* Layout interno
* Grid interno
* Responsividade interna
* Estados e interações
* Tokens específicos do componente

Blocos não devem:

* Criar containers próprios
* Alterar estilos globais
* Alterar regras da Foundation

---

## Estratégia de Containers

A plataforma possui dois conceitos independentes.

### Section Width

Controla a largura da seção.

Opções:

* Default
* Narrow
* Wide
* Full Width
* Full Width Padded

### Content Width

Controla a largura do conteúdo interno.

Opções:

* Content Default
* Content Narrow
* Content Wide

Essa separação permite criar layouts com background full width e conteúdo centralizado.

---

## Estratégia de Grid

A plataforma utiliza três tipos oficiais de grid.

### Layout Grid

Utilizado para:

* Hero
* CTA
* Layouts estruturais

### Collection Grid

Utilizado para:

* Cards
* Produtos
* Logos
* Team

### Adaptive Columns

Utilizado para:

* Columns

A implementação detalhada está documentada em foundations.md.

---

## Estratégia Responsiva

A plataforma segue Mobile First.

Breakpoints oficiais:

* BP-MD = 900px
* BP-LG = 1200px
* BP-XL = 1440px

Consultar breakpoints.md para detalhes.

---

## Tokens

Sempre reutilizar tokens globais quando possível.

Criar tokens locais apenas quando o valor pertencer exclusivamente ao bloco.

Exemplo:

```css
.cards {

  --cards-min-width: 260px;

}
```

Tokens específicos não devem ser promovidos para a Foundation sem necessidade.

Regra prática:

* Usado por um bloco → Token local
* Usado por vários blocos → Avaliar Foundation

---

## Objetivo da Documentação

A documentação da plataforma existe para garantir que:

* Todos os blocos sigam os mesmos padrões
* A Foundation evolua de forma consistente
* Desenvolvedores e IA utilizem a mesma arquitetura
* Projetos diferentes compartilhem a mesma base

Antes de criar uma nova solução, verificar se ela já está prevista na Foundation ou documentada em algum dos arquivos de referência.
