# AI Prompts

Este documento reúne prompts padronizados para utilização com ferramentas de IA durante o desenvolvimento da Netbiis Edge Platform.

Objetivo:

* Garantir consistência arquitetural
* Evitar duplicação de regras
* Acelerar onboarding de novas IAs
* Melhorar a qualidade do código gerado

---

# Project Study

Utilize este prompt ao abrir o projeto pela primeira vez ou ao iniciar uma nova sessão de trabalho.

```text
Estude a arquitetura deste projeto antes de sugerir qualquer alteração.

Considere como fonte da verdade:

- docs/project-context.md
- docs/foundations.md
- docs/containers.md
- docs/block-architecture.md
- docs/responsive-strategy.md
- docs/breakpoints.md
- docs/development-guidelines.md
- docs/block-template.md
- docs/ai-context.md
- .github/copilot-instructions.md

Após a leitura, faça um resumo da arquitetura encontrada e confirme:

- Responsabilidades da Foundation
- Responsabilidades dos Blocos
- Estratégia de Containers
- Estratégia de Content Width
- Estratégia de Grid
- Estratégia Responsiva
- Regras para Tokens

Não gere código ainda.

Primeiro valide que compreendeu a arquitetura da Netbiis Edge Platform.
```

---

# Create New Block

Utilize este prompt antes de criar um novo bloco.

```text
Crie um novo bloco para a Netbiis Edge Platform.

Antes de gerar qualquer código:

1. Estude a arquitetura do projeto.
2. Consulte os documentos oficiais.
3. Identifique qual Grid Strategy deve ser utilizada.
4. Identifique se o bloco precisa utilizar Containers ou Content Width.
5. Identifique quais tokens podem ser reutilizados da Foundation.
6. Identifique quais tokens precisam ser locais ao bloco.

Somente após essa análise gere:

- Estrutura do bloco
- CSS
- JavaScript
- README (quando necessário)

Explique primeiro as decisões arquiteturais antes de gerar código.
```

---

# Review Existing Block

Utilize este prompt para revisar um bloco já existente.

```text
Analise este bloco utilizando as regras da Netbiis Edge Platform.

Verifique:

- Uso correto de Containers
- Uso correto de Content Width
- Uso correto de Tokens
- Uso correto de Breakpoints
- Mobile First
- Grid Strategy adequada
- Escopo CSS
- Possíveis duplicações da Foundation

Identifique:

- Problemas encontrados
- Melhorias sugeridas
- Violações da arquitetura

Não reescreva o bloco inteiro.

Priorize correções pontuais.
```

---

# Architecture Review

Utilize este prompt para validar decisões arquiteturais.

```text
Analise a solução proposta sob a ótica da arquitetura da Netbiis Edge Platform.

Antes de sugerir código, responda:

- Essa responsabilidade pertence à Foundation?
- Essa responsabilidade pertence ao bloco?
- Existe alguma solução já disponível na Foundation?
- Existe algum token já disponível?
- Existe algum container já disponível?
- Existe algum padrão semelhante em outro bloco?

Explique os impactos arquiteturais da decisão.

Somente depois proponha alterações.
```

---

# CSS Review

Utilize este prompt para revisar CSS gerado por IA.

```text
Revise este CSS seguindo as regras da Netbiis Edge Platform.

Verifique:

- Valores hardcoded
- Containers implementados no bloco
- Tokens não reutilizados
- Breakpoints incorretos
- Responsividade
- Escopo CSS
- Duplicação de responsabilidades

Classifique cada item como:

- Correto
- Melhorável
- Incorreto

Explique os motivos.
```

---

# Foundation Review

Utilize este prompt antes de adicionar algo novo à Foundation.

```text
Analise se esta funcionalidade realmente deve entrar na Foundation.

Responder:

- O recurso será utilizado por múltiplos blocos?
- O recurso representa uma regra global da plataforma?
- O recurso pertence ao Design System?
- O recurso pode permanecer encapsulado em um único bloco?

Somente recomendar inclusão na Foundation quando houver benefício claro de reutilização.
```
---

# Adobe Block Migration

Utilize este prompt para adaptar blocos oficiais do Adobe Edge Delivery Services para os padrões da Netbiis Edge Platform.

```text
Vou fornecer o HTML, CSS e JavaScript de um bloco oficial do Adobe Edge Delivery Services.

Sua tarefa NÃO é recriar o bloco.

Sua tarefa é adaptar o bloco para os padrões da Netbiis Edge Platform.

Antes de gerar qualquer código:

1. Analise a implementação original.
2. Identifique quais responsabilidades pertencem à Foundation.
3. Identifique quais responsabilidades pertencem ao bloco.
4. Identifique valores hardcoded.
5. Identifique containers implementados localmente.
6. Identifique tokens que podem ser reutilizados.
7. Identifique a Grid Strategy adequada:
   - Layout Grid
   - Collection Grid
   - Adaptive Columns

Após a análise, responda:

### Problemas encontrados

Liste todas as violações da arquitetura da plataforma.

### Melhorias sugeridas

Explique quais ajustes serão realizados.

### Impacto

Informe se a alteração exige mudanças na Foundation ou apenas no bloco.

Somente depois gere:

- CSS revisado
- JavaScript revisado (quando necessário)

Regras obrigatórias:

- Não alterar comportamento funcional do bloco.
- Não criar containers dentro do bloco.
- Utilizar Content Width quando apropriado.
- Utilizar tokens globais sempre que possível.
- Criar tokens locais apenas quando necessário.
- Utilizar breakpoints oficiais.
- Seguir Mobile First.
- Manter escopo CSS do bloco.
- Não promover tokens para a Foundation sem justificativa.

O objetivo é manter a compatibilidade com o bloco original da Adobe, mas alinhado à arquitetura da Netbiis Edge Platform.
```

---

# Adobe Block Migration (Short Version)

```text
Analise este bloco oficial do Adobe Edge Delivery Services e adapte-o para a Netbiis Edge Platform.

Antes de gerar código:

- Identifique hardcoded values
- Identifique containers locais
- Identifique tokens reutilizáveis
- Identifique Grid Strategy
- Identifique oportunidades de usar Content Width

Explique as decisões arquiteturais primeiro.

Depois gere apenas o código necessário.

Preserve o comportamento original do bloco.

Aplique os padrões da Foundation da Netbiis Edge Platform.
```

---

# Final Reminder

A Netbiis Edge Platform segue um princípio simples:

Foundation controla a página.

Blocos controlam apenas a si mesmos.

Quando existir dúvida:

1. Reutilizar uma solução existente.
2. Reutilizar tokens existentes.
3. Reutilizar containers existentes.
4. Somente depois criar uma nova abstração.
5. Somente depois considerar alterar a Foundation.

```
```
