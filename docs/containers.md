# Containers

## Objetivo

Containers definem a largura máxima disponível para o conteúdo de uma seção.

Todos os projetos devem utilizar os containers definidos pela plataforma.

---

# CNT-001 — Default

Container padrão da plataforma.

## Configuração

| Propriedade     | Valor  |
| --------------- | ------ |
| Max Width       | 1280px |
| Padding Mobile  | 16px   |
| Padding Desktop | 24px   |

## Uso

* Hero
* Features
* Cards
* Testimonials
* Footer
* Conteúdo geral

---

# CNT-002 — Narrow

Container reduzido para leitura.

## Configuração

| Propriedade | Valor |
| ----------- | ----- |
| Max Width   | 800px |

## Uso

* FAQ
* Formulários
* Rich Text
* Artigos
* Conteúdo textual

---

# CNT-003 — Wide

Container expandido.

## Configuração

| Propriedade | Valor  |
| ----------- | ------ |
| Max Width   | 1440px |

## Uso

* Grids complexos
* Carrosséis
* Comparações
* Galerias
* Logos

---

# CNT-004 — Full Width

Remove qualquer limitação de largura.

## Configuração

| Propriedade | Valor  |
| ----------- | ------ |
| Max Width   | Nenhum |
| Padding     | Nenhum |

## Uso

* Hero com background
* Vídeos
* Banners
* Seções promocionais

---

# CNT-005 — Full Width Padded

Ocupa toda a largura disponível mantendo respiro lateral.

## Configuração

| Propriedade     | Valor  |
| --------------- | ------ |
| Max Width       | Nenhum |
| Padding Mobile  | 16px   |
| Padding Desktop | 24px   |

## Uso

* Hero com background
* CTA destacado
* Seções especiais

---

# Uso no Edge Delivery Services

Os containers são aplicados através do Section Metadata.

## Exemplo

```text
Style: narrow
```

Resultado:

```html
<div class="section narrow">
```

---

## Exemplo

```text
Style: wide
```

Resultado:

```html
<div class="section wide">
```

---

## Exemplo

```text
Style: full-width
```

Resultado:

```html
<div class="section full-width">
```

---

# Regras

## Permitido

Escolher o container adequado para cada seção.

---

## Não Permitido

Definir em blocos:

```css
max-width
```

ou

```css
padding lateral de container
```

Essas responsabilidades pertencem exclusivamente à Foundation.

# Container Consumers

Os containers da plataforma não são utilizados apenas por Sections.

Também podem ser utilizados por componentes estruturais da aplicação.

Exemplos:

- Main
- Footer
- Header

---

## Objetivo

Garantir que toda a aplicação compartilhe a mesma largura máxima e os mesmos espaçamentos laterais.

---

## Regra

A lógica de containers deve existir apenas em:

```text
styles/foundations/containers.css
```

Os blocos não devem implementar regras próprias de largura máxima.


# Content Width

Além do Container da Section, a plataforma permite controlar a largura do conteúdo interno.

Isso é útil para blocos que possuem:

- Background Full Width
- Conteúdo centralizado

Exemplos:

- Hero
- Banner
- CTA
- Promo Banner

---

## Opções

### Content Default

```css
content-default
```

Utiliza:

```css
var(--container-default)
```

---

### Content Narrow

```css
content-narrow
```

Utiliza:

```css
var(--container-narrow)
```

---

### Content Wide

```css
content-wide
```

Utiliza:

```css
var(--container-wide)
```

---

## Exemplo

Section:

```html
<div class="section full-width content-narrow">
```

Resultado:

- Background ocupa 100% da largura
- Conteúdo utiliza largura Narrow

````markdown
# Content Width Consumers

Alguns blocos podem utilizar a estratégia de Content Width para permitir:

- Background Full Width
- Conteúdo centralizado
- Alinhamento consistente com Header, Footer e demais blocos

Exemplos:

- Hero
- Banner
- CTA
- Promo Banner
- Video Hero

---

## Implementação

Os blocos devem consumir:

```css
var(--content-container-width)

var(--content-container-padding-mobile)

var(--content-container-padding-desktop)
````

---

## Exemplo

```css
.block-content {

  box-sizing: border-box;

  width: 100%;

  max-width:
    var(--content-container-width);

  margin-inline: auto;

  padding-inline:
    var(--content-container-padding-mobile);

}
```

---

## Desktop

```css
/* BP-LG */

@media (width >= 1200px) {

  .block-content {

    padding-inline:
      var(--content-container-padding-desktop);

  }

}
```

---

## Importante

Sempre utilizar:

```css
box-sizing: border-box;
```

Isso garante que:

```css
max-width:
  var(--content-container-width);
```

inclua os paddings laterais no cálculo final da largura.

Sem `box-sizing: border-box`, o conteúdo poderá ficar mais largo que os Container Consumers da plataforma.

---

## Relação com Containers

Container Width controla:

```text
Qual a largura da Section
```

Content Width controla:

```text
Qual a largura do conteúdo interno
```

Esses conceitos são independentes e podem ser combinados.

Exemplo:

Section Width:

* Full Width

Content Width:

* Narrow

Resultado:

* Background ocupa 100% da largura
* Conteúdo utiliza largura Narrow

```
```
