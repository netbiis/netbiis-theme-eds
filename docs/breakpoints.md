# Breakpoints

## Objetivo

Definir os breakpoints oficiais da plataforma Netbiis Edge Platform.

Todos os blocos devem utilizar exclusivamente os breakpoints documentados neste arquivo.

---

## Breakpoints Oficiais

| ID    | Nome          | Valor  |
| ----- | ------------- | ------ |
| BP-SM | Small         | 600px  |
| BP-MD | Desktop       | 900px  |
| BP-LG | Large Desktop | 1200px |
| BP-XL | Wide Desktop  | 1440px |

---

## Utilização

### BP-MD

```css
/* BP-MD */

@media (width >= 900px) {

  .hero {
    display: grid;
  }

}
```

---

### BP-LG

```css
/* BP-LG */

@media (width >= 1200px) {

  .hero {
    gap: var(--space-6);
  }

}
```

---

## Convenção de Comentários

Todos os media queries devem possuir um comentário identificando o breakpoint utilizado.

### Correto

```css
/* BP-MD */

@media (width >= 900px) {

}
```

### Incorreto

```css
@media (width >= 900px) {

}
```

---

## Processo para Alteração de Breakpoints

Os breakpoints são considerados parte da Foundation.

Alterações devem ser avaliadas com cuidado, pois impactam todos os blocos da plataforma.

---

### Antes de Alterar

Verificar:

* UX
* Design System
* Blocos existentes
* Projetos ativos

---

### Passo 1

Atualizar a tabela de breakpoints neste documento.

Exemplo:

Antes:

| ID    | Valor |
| ----- | ----- |
| BP-MD | 900px |

Depois:

| ID    | Valor  |
| ----- | ------ |
| BP-MD | 1024px |

---

### Passo 2

Localizar todos os usos do breakpoint.

Pesquisar no projeto:

```text
BP-MD
```

ou

```text
@media (width >= 900px)
```

---

### Passo 3

Atualizar todos os arquivos afetados.

Exemplo:

Antes:

```css
/* BP-MD */

@media (width >= 900px) {

}
```

Depois:

```css
/* BP-MD */

@media (width >= 1024px) {

}
```

---

### Passo 4

Validar todos os blocos principais.

Checklist:

* Hero
* Header
* Footer
* Columns
* Cards
* Accordion
* Carousel
* Forms

---

### Passo 5

Atualizar a documentação de UX e Design.

Garantir que:

* Figma
* Design System
* Foundation

utilizem os mesmos breakpoints.

---

## Regra da Plataforma

Nunca utilizar valores arbitrários.

Exemplos proibidos:

```css
@media (width >= 937px)
```

```css
@media (width >= 1010px)
```

```css
@media (width >= 1175px)
```

Todos os breakpoints devem estar documentados neste arquivo.

---

## Filosofia

A plataforma possui poucos breakpoints e muitos componentes.

É mais fácil adaptar os componentes aos breakpoints oficiais do que criar novos breakpoints para cada componente.
