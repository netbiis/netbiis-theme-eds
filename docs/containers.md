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