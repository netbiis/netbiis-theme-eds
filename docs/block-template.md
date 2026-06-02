# Novo Bloco

## Antes de começar

Responder as seguintes perguntas:

### 1. Qual tipo de Grid o bloco utiliza?

Escolher apenas uma opção:

* Layout Grid
* Collection Grid
* Adaptive Columns

Consultar:

```text
docs/foundations.md
```

---

### 2. O bloco precisa de Container?

Se a resposta for sim:

PARAR.

Containers são responsabilidade da Foundation.

Consultar:

```text
docs/containers.md
```

---

### 3. O bloco precisa de Tokens próprios?

Criar tokens locais apenas quando o valor for específico do componente.

Exemplo:

```css
.cards {

  --cards-min-width: 260px;

}
```

---

### 4. O bloco precisa de Responsividade?

Implementar Mobile First.

Utilizar apenas breakpoints oficiais.

Consultar:

```text
docs/breakpoints.md
```

---

## Estrutura

```text
blocks/
└── example/
    ├── example.css
    ├── example.js
    └── README.md
```

---

## CSS

```css
.example {

  --example-gap: var(--space-3);

}
```

---

## Responsividade

```css
/* BP-MD */

@media (width >= 900px) {

}
```

---

## Checklist

Antes de finalizar o bloco:

* [ ] Não possui max-width hardcoded
* [ ] Não possui padding hardcoded
* [ ] Utiliza tokens globais quando possível
* [ ] Utiliza tokens locais quando necessário
* [ ] Mobile First
* [ ] Utiliza breakpoints oficiais
* [ ] Não altera Foundation
* [ ] Não altera containers
* [ ] Possui escopo CSS correto

```
```
