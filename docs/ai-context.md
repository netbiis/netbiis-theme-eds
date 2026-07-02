# AI Context

## Objetivo Deste Documento

Este arquivo e um resumo rapido para onboarding de IA e time.

As regras normativas e obrigatorias de implementacao estao em:

- [AGENTS.md](../AGENTS.md)
- [.github/copilot-instructions.md](../.github/copilot-instructions.md)

Em caso de conflito, seguir primeiro [AGENTS.md](../AGENTS.md), depois [.github/copilot-instructions.md](../.github/copilot-instructions.md).

---

## Visao Arquitetural (Resumo)

- Foundation controla regras globais: containers, content width, breakpoints, tokens globais e padroes de pagina.
- Blocos controlam responsabilidade local: layout interno, componentes, interacoes e tokens locais.
- Principio central: Foundation controla a pagina. Blocos controlam apenas a si mesmos.

---

## Como Usar Este Contexto

Antes de alterar codigo, alinhar entendimento com [AGENTS.md](../AGENTS.md) e [.github/copilot-instructions.md](../.github/copilot-instructions.md).

Para detalhes tecnicos por tema, consultar:

- Arquitetura: [docs/project-context.md](project-context.md), [docs/block-architecture.md](block-architecture.md)
- Foundation e tokens: [docs/foundations.md](foundations.md), [docs/containers.md](containers.md)
- Responsividade: [docs/responsive-strategy.md](responsive-strategy.md), [docs/breakpoints.md](breakpoints.md)
- Templates e implementacao: [docs/block-template.md](block-template.md), [docs/development-guidelines.md](development-guidelines.md)

---

## Diretrizes De Decisao (Alto Nivel)

- Reutilizar solucao existente antes de criar nova abstracao.
- Reutilizar tokens e containers existentes antes de criar locais.
- Promover para Foundation apenas quando houver reutilizacao clara entre multiplos blocos.
- Evitar duplicar logica global dentro de blocos.

---

## Escopo Deste Documento

- Este arquivo nao substitui regras oficiais.
- Este arquivo nao define valores finais de CSS.
- Este arquivo existe para acelerar contexto e reduzir ambiguidades iniciais.