# Development Guidelines

## Objetivo

Definir regras para garantir consistência entre desenvolvedores.

Todos os blocos da plataforma devem seguir estas diretrizes.

---

# Regra 1

## Blocos não controlam containers

Não permitido:

```css
.hero {
  max-width: 1200px;
}
```

Correto:

Utilizar os containers definidos pela Foundation.

---

# Regra 2

## Blocos não criam espaçamentos globais

Não permitido:

```css
.hero {
  margin-top: 80px;
}
```

ou

```css
.hero {
  margin-bottom: 120px;
}
```

Correto:

Utilizar a escala definida em:

```text
tokens.css
```

---

# Regra 3

## Utilizar Design Tokens

Não permitido:

```css
padding: 37px;
```

Correto:

```css
padding: var(--space-4);
```

---

# Regra 4

## Não criar variáveis locais de Design System

Não permitido:

```css
.hero {
  --hero-gap: 22px;
}
```

Correto:

Utilizar os tokens globais da plataforma.

---

# Regra 5

## Cada bloco é responsável apenas pelo seu layout interno

Permitido:

```css
.hero-wrapper {
  display: grid;
}
```

Permitido:

```css
.cards-wrapper {
  display: grid;
}
```

---

# Regra 6

## Nenhum bloco altera estilos globais

Não permitido:

```css
body {
}
```

```css
main {
}
```

```css
.section {
}
```

Essas responsabilidades pertencem à Foundation.

---

# Regra 7

## Mobile First

Todos os blocos devem ser desenvolvidos seguindo abordagem Mobile First.

Exemplo:

```css
.hero {
  display: block;
}

@media (min-width: 1200px) {

  .hero {
    display: grid;
  }

}
```

---

# Regra 8

## Acessibilidade

Todos os blocos devem:

* Respeitar contraste mínimo
* Possuir estrutura semântica adequada
* Funcionar com teclado
* Funcionar com leitores de tela

---

# Regra 9

## Escolha correta do Grid

A plataforma utiliza tres tipos oficiais de grid.

---

### Layout Grid

Utilizado para estrutura de página.

Exemplo:

```css
.hero {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}
```

---

### Collection Grid

Utilizado para componentes repetitivos.

Exemplo:

```css
.cards > ul {
  display: grid;

  grid-template-columns:
    repeat(
      auto-fill,
      minmax(
        var(--cards-min-width),
        1fr
      )
    );
}
```

---

### Adaptive Columns

Utilizado para colunas equivalentes definidas no proprio markup.

Exemplo:

```css
.columns > div {
  display: grid;

  grid-template-columns:
    repeat(
      auto-fit,
      minmax(0, 1fr)
    );
}
```

---

## Regra

Hero, CTA, Footer e estruturas similares devem utilizar Layout Grid.

Cards, Produtos, Logos e listas similares devem utilizar Collection Grid.

Columns e estruturas equivalentes devem utilizar Adaptive Columns.


# Checklist para Pull Request

Antes de aprovar um bloco:

* Não cria containers próprios
* Não cria tokens próprios
* Utiliza spacing da Foundation
* Mobile First
* Acessível
* Responsivo
* Documentado

---

# Filosofia

A Foundation define as regras.

Os blocos apenas consomem essas regras.

Quanto menos decisões um bloco precisar tomar sobre layout global, mais reutilizável ele será.
