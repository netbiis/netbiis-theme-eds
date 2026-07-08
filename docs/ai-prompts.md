# AI Prompts

Este documento descreve os prompts operacionais oficiais da Netbiis Edge Platform.

Fonte da verdade:

- Arquivos em `.github/prompts/*.prompt.md`

Se houver divergencia entre este documento e os arquivos de prompt, os arquivos em `.github/prompts/` prevalecem.

Objetivo:

- Garantir consistencia arquitetural
- Evitar duplicacao de regras
- Acelerar onboarding de novas IAs
- Melhorar a qualidade do codigo gerado
- Padronizar saidas em Fase 1 (analise) e Fase 2 (implementacao sob aprovacao)

---

# Mapa Oficial (Arquivos)

- `.github/prompts/project-study.prompt.md`
- `.github/prompts/create-new-block.prompt.md`
- `.github/prompts/review-existing-block.prompt.md`
- `.github/prompts/architecture-review.prompt.md`
- `.github/prompts/css-review.prompt.md`
- `.github/prompts/foundation-review.prompt.md`
- `.github/prompts/adobe-block-migration.prompt.md`
- `.github/prompts/final-reminder.prompt.md`

---

# Project Study

Arquivo: `.github/prompts/project-study.prompt.md`

Utilize ao abrir o projeto pela primeira vez ou ao iniciar uma nova sessao.

Comportamento esperado:

- Fase unica de analise (sem codigo)
- Checklist de entendimento arquitetural
- Registro de conflitos por precedencia documental
- Saida final com confirmacao de que nenhuma implementacao foi realizada

Resumo da intencao:

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

Arquivo: `.github/prompts/create-new-block.prompt.md`

Utilize antes de criar um novo bloco.

Comportamento esperado:

- Fase 1 obrigatoria de analise arquitetural (sem codigo)
- Fase 2 apenas com aprovacao explicita do usuario
- Decisao explicita de Grid Strategy, largura, reuso de tokens e riscos
- Checklist final de conformidade (mobile first, breakpoints, escopo CSS)

Resumo da intencao:

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

Arquivo: `.github/prompts/review-existing-block.prompt.md`

Utilize para revisar um bloco existente.

Comportamento esperado:

- Fase 1 obrigatoria de revisao (sem codigo)
- Achados ordenados por severidade
- Plano de correcao pontual (sem reescrita total)
- Fase 2 somente apos aprovacao explicita

Resumo da intencao:

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

Arquivo: `.github/prompts/architecture-review.prompt.md`

Utilize para validar decisoes arquiteturais antes de alterar codigo.

Comportamento esperado:

- Fase 1 obrigatoria de avaliacao de responsabilidade (Foundation x bloco)
- Recomendacao objetiva (aprovar, ajustar, rejeitar)
- Fase 2 apenas com aprovacao explicita

Resumo da intencao:

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

Arquivo: `.github/prompts/css-review.prompt.md`

Utilize para revisar CSS com foco arquitetural.

Comportamento esperado:

- Fase 1 obrigatoria de revisao (sem codigo)
- Achados por severidade + checklist de conformidade CSS
- Fase 2 apenas com aprovacao explicita

Resumo da intencao:

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

Arquivo: `.github/prompts/foundation-review.prompt.md`

Utilize quando a duvida for: "isso deve entrar na Foundation?"

Comportamento esperado:

- Fase 1 obrigatoria de avaliacao de entrada na Foundation (sem codigo)
- Criterios de reuso, governanca e impacto global
- Fase 2 apenas com aprovacao explicita

Resumo da intencao:

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

Arquivo: `.github/prompts/adobe-block-migration.prompt.md`

Utilize para adaptar blocos oficiais do Adobe Edge Delivery Services aos padroes da Netbiis.

Comportamento esperado:

- Fase 1 obrigatoria de diagnostico (sem codigo)
- Preservacao de comportamento funcional do bloco original
- Fase 2 apenas com aprovacao explicita
- Sem promover para Foundation sem justificativa de reuso

Resumo da intencao:

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

# Final Reminder

Arquivo: `.github/prompts/final-reminder.prompt.md`

Utilize como revisao arquitetural global do projeto.

Comportamento esperado:

- Fase 1 global (sem codigo), com classificacao geral de saude arquitetural
- Top violacoes, duplicacoes, riscos sistemicos e priorizacao de correcao
- Fase 2 opcional, somente apos aprovacao explicita

Resumo da intencao:

```text
Execute uma revisao geral da arquitetura do projeto.

Objetivo:

- Validar aderencia global entre Foundation e Blocos
- Identificar desvios sistemicos
- Priorizar correcoes com menor risco de regressao
```

A Netbiis Edge Platform segue um principio simples:

Foundation controla a página.

Blocos controlam apenas a si mesmos.

Quando existir dúvida:

1. Reutilizar uma solução existente.
2. Reutilizar tokens existentes.
3. Reutilizar containers existentes.
4. Somente depois criar uma nova abstração.
5. Somente depois considerar alterar a Foundation.

---

# Nota de Consistencia

- `Foundation Review` e um prompt tatico (decisao de entrada na Foundation).
- `Final Reminder` e um prompt estrategico (auditoria global do projeto).
- Em caso de sobreposicao, priorize o objetivo principal de cada prompt.
