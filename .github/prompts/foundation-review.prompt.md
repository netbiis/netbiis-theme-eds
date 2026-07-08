---
name: "Foundation Review"
description: "Avalia se uma mudanca deve entrar na Foundation com criterio de reuso e impacto arquitetural"
argument-hint: "Recurso proposto, objetivo, area impactada e contexto"
agent: "agent"
---

Voce vai analisar se uma funcionalidade proposta deve entrar na Foundation da Netbiis Edge Platform.

Contexto adicional da sessao:
{{input}}

Se {{input}} estiver vazio ou nao fornecido, registre como Premissa: "Nenhum contexto de sessao fornecido" e solicite os dados minimos antes de recomendar alteracoes.

Use como fonte prioritaria (ordem de precedencia):
1. [AGENTS.md](../../AGENTS.md)
2. [.github/copilot-instructions.md](../copilot-instructions.md)
3. [docs/project-context.md](../../docs/project-context.md)
4. [docs/foundations.md](../../docs/foundations.md)
5. [docs/containers.md](../../docs/containers.md)
6. [docs/block-architecture.md](../../docs/block-architecture.md)
7. [docs/responsive-strategy.md](../../docs/responsive-strategy.md)
8. [docs/breakpoints.md](../../docs/breakpoints.md)
9. [docs/development-guidelines.md](../../docs/development-guidelines.md)
10. [docs/block-template.md](../../docs/block-template.md)
11. [docs/ai-context.md](../../docs/ai-context.md)

Regras da tarefa:
- Nao implemente codigo na Fase 1.
- Se houver conflito entre documentos, siga a ordem de precedencia acima e explicite o conflito.
- Se algum documento da lista nao estiver acessivel, registre-o como ausente em "## 5) Premissas e Duvidas" e continue com os demais disponiveis.
- Priorize criterio de reuso, impacto global e custo de manutencao.
- Nao recomendar entrada na Foundation sem beneficio claro entre multiplos blocos.
- Seja conciso dentro de cada secao e nao omita secoes obrigatorias.

Fase 1 - Avaliacao de entrada na Foundation (sem codigo)

Formato obrigatorio de saida na Fase 1:

## 1) Escopo da Avaliacao
- Recurso analisado
- Problema que ele resolve
- Areas/blocos impactados

## 2) Criterios de Decisao
- Sera usado por multiplos blocos? (sim/nao + evidencias)
- Representa regra global da plataforma? (sim/nao + justificativa)
- Pertence ao Design System/Foundation? (sim/nao + justificativa)
- Pode permanecer encapsulado em um unico bloco? (sim/nao + justificativa)

## 3) Impacto Arquitetural
- Impacto em tokens globais
- Impacto em containers/content width
- Impacto em breakpoints/responsividade
- Impacto em manutencao e governanca da Foundation
- Risco de regressao global (baixo/medio/alto)

## 4) Recomendacao
- Decisao: inserir na Foundation / manter no bloco / adiar
- Justificativa objetiva da decisao
- Ajustes minimos necessarios para seguir com seguranca

## 5) Premissas e Duvidas
- Liste apenas o que impede avancar com seguranca.

Finalize a Fase 1 com:
"Analise concluida. Nenhuma implementacao foi realizada nesta etapa."
"Se quiser, aprove a Fase 2 para eu propor alteracoes pontuais."

Fase 2 - Proposta de alteracoes (somente apos aprovacao explicita do usuario)

Somente apos aprovacao explicita, proponha:
- Alteracoes pontuais em Foundation ou no bloco, conforme decisao da Fase 1
- Escopo minimo necessario para reduzir risco de regressao global

Antes de finalizar, confirmar:
- Beneficio de reuso comprovado
- Separacao Foundation x bloco preservada
- Sem duplicacao de responsabilidade
- Compatibilidade com docs e regras oficiais do repositorio
