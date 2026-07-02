# Block Architecture

## Objetivo

Documentar a estrutura HTML padrão utilizada pelos blocos da plataforma Adobe Edge Delivery Services.

Este documento define como os blocos são renderizados e quais camadas devem ser utilizadas para aplicação de estilos.

---

# Estrutura Geral

Todo bloco segue a seguinte hierarquia:

```text
Section
└── Block Wrapper
    └── Block
```

Exemplo:

```html
<div class="section">

  <div class="hero-wrapper">

    <div class="hero block">

    </div>

  </div>

</div>
```

---

# Camadas

## Section

Responsável por:

* Container
* Espaçamento entre seções
* Temas da seção
* Configurações de layout da página

Exemplo:

```html
<div class="section highlight">
```

A Section pertence à Foundation.

Os blocos não devem alterar estilos globais da Section.

---

## Block Wrapper

Responsável por:

* Posicionamento do bloco dentro da Section
* Necessidades específicas de alinhamento
* Casos especiais de layout

Exemplo:

```html
<div class="hero-wrapper">
```

Na maioria dos casos o Wrapper não necessita estilos.

Deve ser utilizado apenas quando houver uma necessidade estrutural específica.

Observação importante:
As classes no padrão `{blockname}-wrapper` mostradas nos exemplos representam wrappers gerados automaticamente pelo Edge Delivery Services.

Elas são descritivas da estrutura de renderização do Edge.

Não devem ser tratadas como convenção para criação manual de novas classes.

---

## Block

Responsável por:

* Layout interno
* Grid interno
* Componentes visuais
* Comportamento responsivo
* Estados e interações

Exemplo:

```html
<div class="hero block">
```

A maior parte do CSS deve ser aplicada nesta camada.

---

# Exemplos Reais

## Hero

```html
<div class="section">

  <div class="hero-wrapper">

    <div class="hero block">

    </div>

  </div>

</div>
```

---

## Columns

```html
<div class="section">

  <div class="columns-wrapper">

    <div class="columns block">

    </div>

  </div>

</div>
```

---

## Cards

```html
<div class="section">

  <div class="cards-wrapper">

    <div class="cards block">

    </div>

  </div>

</div>
```

---

# Onde aplicar CSS

## Foundation

Permitido:

```css
main > .section > div
```

```css
.section.highlight
```

```css
.section.full-width
```

Responsável por:

* Containers
* Espaçamento global
* Temas globais

---

## Wrapper

Permitido apenas quando necessário.

Exemplo:

```css
.hero-wrapper {

}
```

Na maioria dos casos deve permanecer vazio.

---

## Block

Local recomendado para implementação.

Exemplo:

```css
.hero {

}
```

```css
.cards {

}
```

```css
.columns {

}
```

---

# Container Consumers

Nem todos os elementos da aplicação estão dentro de uma Section.

Alguns componentes de infraestrutura também necessitam utilizar os containers da Foundation.

Exemplos:

- Main Sections
- Footer
- Header (futuro)

Todos os consumidores de container devem utilizar os tokens definidos em:

styles/foundations/containers.css

---

## Responsabilidade

A largura máxima da aplicação deve ser controlada exclusivamente pela Foundation.

Blocos não devem definir:

```css
max-width
```

```css
padding-inline
```

para reproduzir containers.

---

## Exemplo

```css
main > .section > div,
footer .footer > div {

  max-width: var(--container-default);

}
```


---

# Responsabilidades

## Foundation

Controla:

* Containers
* Breakpoints oficiais
* Espaçamentos globais
* Tokens
* Tipografia global

---

## Blocos

Controlam:

* Layout interno
* Grid interno
* Comportamento responsivo
* Aparência visual

---

# O que evitar

Não utilizar:

```css
main {

}
```

```css
body {

}
```

```css
.section {

}
```

dentro de blocos.

Essas responsabilidades pertencem à Foundation.

---

# Regra da Plataforma

A Foundation controla a página.

Os blocos controlam apenas a si mesmos.

Quanto menor o acoplamento entre Foundation e blocos, maior será a reutilização da plataforma.
