# Olivh Edge Platform

## Foundations v1

Este documento define os fundamentos de layout da plataforma Olivh Edge Platform.

Todos os projetos devem seguir estes padrões para garantir consistência entre UX, Design e Desenvolvimento.

---

# Objetivos

* Padronizar containers
* Padronizar grids
* Padronizar layouts
* Reduzir divergências entre Figma e código
* Facilitar reutilização de blocos

---

# Containers

Containers definem a largura máxima do conteúdo dentro de uma seção.

A escolha do container deve ser feita durante a etapa de UX e Design.

---

## CNT-001 — Default

Container padrão da plataforma.

### Uso

* Hero
* Features
* Cards
* Testimonials
* Footer
* Conteúdo geral

### Configuração

| Propriedade     | Valor  |
| --------------- | ------ |
| Max Width       | 1280px |
| Padding Mobile  | 16px   |
| Padding Desktop | 24px   |

---

## CNT-002 — Narrow

Container reduzido para leitura e formulários.

### Uso

* FAQ
* Formulários
* Rich Text
* Artigos
* Conteúdo textual

### Configuração

| Propriedade | Valor |
| ----------- | ----- |
| Max Width   | 800px |

---

## CNT-003 — Wide

Container expandido para componentes com maior necessidade horizontal.

### Uso

* Grids complexos
* Comparações
* Galerias
* Logos
* Carrosséis

### Configuração

| Propriedade | Valor  |
| ----------- | ------ |
| Max Width   | 1440px |

---

## CNT-004 — Full Width

Remove qualquer limitação horizontal.

### Uso

* Hero com background
* Vídeos
* Banners
* Seções especiais

### Configuração

| Propriedade | Valor  |
| ----------- | ------ |
| Max Width   | Nenhum |
| Padding     | Nenhum |

---

## CNT-005 — Full Width Padded

Ocupa toda a largura disponível mantendo respiro lateral.

### Uso

* Hero com background
* CTA destacado
* Seções promocionais

### Configuração

| Propriedade     | Valor  |
| --------------- | ------ |
| Max Width       | Nenhum |
| Padding Mobile  | 16px   |
| Padding Desktop | 24px   |

---

# Grid System

Toda a plataforma utiliza um único sistema de grid.

Nenhum bloco pode criar seu próprio grid.

---

## Configuração

| Propriedade | Valor |
| ----------- | ----- |
| Colunas     | 12    |
| Gap Mobile  | 16px  |
| Gap Desktop | 24px  |

---

# Breakpoints

## Mobile

```text
0px - 767px
```

## Tablet

```text
768px - 1199px
```

## Desktop

```text
1200px+
```

---

# Layouts Oficiais

Os layouts abaixo devem ser utilizados sempre que possível.

Caso um novo layout seja necessário, ele deve ser incorporado à Foundation antes de ser utilizado em um bloco.

---

## LYT-001 — 50 / 50

### Estrutura

```text
6 + 6
```

### Uso

* Hero
* Conteúdo + Imagem
* Comparações simples

---

## LYT-002 — 4 / 8

### Estrutura

```text
4 + 8
```

### Uso

* Sidebar + Conteúdo
* Destaques
* Conteúdo com imagem dominante

---

## LYT-003 — 5 / 7

### Estrutura

```text
5 + 7
```

### Uso

* Hero padrão da plataforma
* Conteúdo + Imagem

---

## LYT-004 — Cards 3 Colunas

### Estrutura

```text
4 + 4 + 4
```

### Uso

* Features
* Benefícios
* Cards de conteúdo

---

## LYT-005 — Cards 4 Colunas

### Estrutura

```text
3 + 3 + 3 + 3
```

### Uso

* Logos
* Estatísticas
* Ícones
* Cards compactos

---

# Regras da Plataforma

## Containers

Nenhum bloco pode definir:

* max-width
* largura de container
* container próprio

Todos os containers devem utilizar a Foundation.

---

## Grid

Nenhum bloco pode definir:

* grid-template-columns próprio
* quantidade de colunas própria
* gaps próprios

Todos os grids devem utilizar a Foundation.

---

## Layouts

Sempre utilizar os layouts oficiais da plataforma.

Se um novo layout for necessário:

1. Validar com UX
2. Validar com Design
3. Adicionar à Foundation
4. Documentar neste arquivo

---

# Convenção entre Figma e Código

## Containers

| Figma   | Código            |
| ------- | ----------------- |
| CNT-001 | default           |
| CNT-002 | narrow            |
| CNT-003 | wide              |
| CNT-004 | full-width        |
| CNT-005 | full-width-padded |

---

## Layouts

| Figma   | Código         |
| ------- | -------------- |
| LYT-001 | layout-50-50   |
| LYT-002 | layout-4-8     |
| LYT-003 | layout-5-7     |
| LYT-004 | layout-cards-3 |
| LYT-005 | layout-cards-4 |

---

# Roadmap

## Foundation v1

* Containers
* Grid

## Foundation v2

* Spacing Scale
* Typography Scale
* Border Radius
* Shadows

## Foundation v3

* Themes
* Color Tokens
* Motion Tokens

## Foundation v4

* Component Library
* Hero
* Cards
* FAQ
* Forms
* Footer
