---
name: "Architecture Review"
description: "Valida decisoes arquiteturais da Netbiis antes de alterar codigo"
argument-hint: "Contexto da solucao proposta, bloco/feature afetada e objetivo"
agent: "agent"
---

Voce vai revisar uma solucao proposta sob a otica da arquitetura da Netbiis Edge Platform.

Contexto adicional da sessao:
{{input}}

Se {{input}} estiver vazio ou nao fornecido, registre como Premissa: "Nenhum contexto de sessao fornecido" e solicite os dados minimos antes de propor mudancas.

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
- Priorize impacto arquitetural, risco de acoplamento e aderencia a Foundation.
- Nao recomendar alteracoes na Foundation sem justificativa de reuso entre multiplos blocos.
- Seja conciso dentro de cada secao e nao omita secoes obrigatorias.

Fase 1 - Revisao arquitetural obrigatoria (sem codigo)

Formato obrigatorio de saida na Fase 1:

## 1) Escopo da Revisao
- Solucao analisada
- Area/bloco impactado
- Objetivo esperado

## 2) Avaliacao de Responsabilidade
- Pertence a Foundation? (sim/nao + justificativa)
- Pertence ao bloco? (sim/nao + justificativa)
- Existe solucao equivalente ja disponivel? (sim/nao + onde)

## 3) Impacto Arquitetural
- Impacto em containers/content width
- Impacto em tokens
- Impacto em grid strategy
- Impacto em responsividade
- Impacto em manutencao e reuso

## 4) Recomendacao
- Decisao recomendada (aprovar, ajustar, rejeitar)
- Ajustes minimos necessarios
- Risco de regressao (baixo/medio/alto)

## 5) Premissas e Duvidas
- Liste apenas o que impede avancar com seguranca.

Finalize a Fase 1 com:
"Analise concluida. Nenhuma implementacao foi realizada nesta etapa."
"Se quiser, aprove a Fase 2 para eu propor alteracoes pontuais."

Fase 2 - Proposta de alteracoes (somente apos aprovacao explicita do usuario)

Somente apos aprovacao explicita, proponha:
- Alteracoes pontuais em docs/bloco conforme recomendacao
- Sem alterar Foundation, salvo aprovacao explicita para isso

Antes de finalizar, confirmar:
- Separacao Foundation x bloco preservada
- Sem container proprio no bloco
- Reuso de tokens globais quando possivel
- Breakpoints oficiais e escopo CSS corretos
