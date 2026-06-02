# Responsive Strategy

## Objetivo

Definir a estratégia responsiva adotada pela Netbiis Edge Platform.

Este documento descreve os princípios utilizados para construção de experiências responsivas em Adobe Edge Delivery Services.

Para detalhes técnicos sobre breakpoints, consulte:

```text
docs/breakpoints.md
```

Para detalhes sobre grids e layouts, consulte:

```text
docs/foundations.md
```

---

# Princípios

A plataforma adota uma abordagem:

```text
Mobile First
```

Todos os blocos devem ser desenvolvidos inicialmente para dispositivos móveis.

As adaptações para telas maiores devem ocorrer progressivamente através dos breakpoints oficiais da plataforma.

---

# Mobile First

O layout mobile é considerado a implementação base.

Exemplo:

```css
.hero {

  display: block;

}
```

Posteriormente são adicionadas adaptações para telas maiores.

```css
/* BP-MD */

@media (width >= 900px) {

  .hero {

    display: grid;

  }

}
```

---

# Progressive Enhancement

Os componentes devem evoluir conforme o espaço disponível aumenta.

O objetivo não é criar versões diferentes para cada dispositivo.

O objetivo é permitir que o mesmo componente se adapte naturalmente aos diferentes tamanhos de tela.

---

# Conteúdo Antes do Layout

A prioridade da plataforma é a leitura e o acesso ao conteúdo.

Em dispositivos menores:

* Conteúdo deve permanecer acessível
* Elementos devem empilhar naturalmente
* A ordem de leitura deve ser preservada

A responsividade não deve comprometer a compreensão do conteúdo.

---

# Containers

Os containers são responsáveis por controlar a largura máxima de leitura.

A responsividade da plataforma deve trabalhar em conjunto com os containers definidos pela Foundation.

Os blocos não devem implementar controles próprios de largura máxima.

---

# Tipografia Fluida

A plataforma utiliza tokens globais de tipografia.

Mudanças de tamanho tipográfico devem ocorrer através da Foundation.

Os blocos não devem criar escalas tipográficas independentes.

---

# Espaçamento Consistente

A percepção de responsividade não depende apenas do layout.

Espaçamentos consistentes contribuem para a legibilidade e organização visual.

Todos os componentes devem utilizar a escala oficial de spacing da plataforma.

---

# Componentes Adaptativos

Os componentes devem se adaptar ao espaço disponível sem exigir configurações adicionais do autor.

Exemplos:

* Cards ajustam a quantidade de itens por linha
* Columns distribui automaticamente as colunas disponíveis
* Imagens ocupam a largura disponível do container

Sempre que possível, a adaptação deve ser automática.

---

# Responsabilidades

## Foundation

Responsável por:

* Breakpoints
* Containers
* Espaçamento
* Tipografia
* Tokens globais

---

## Blocos

Responsáveis por:

* Layout interno
* Organização de conteúdo
* Comportamento responsivo específico do componente

---

# Objetivo Final

O autor de conteúdo não deve precisar pensar em responsividade.

A plataforma deve fornecer componentes que se adaptem automaticamente aos diferentes tamanhos de tela, respeitando os padrões definidos pela Foundation.
