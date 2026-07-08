---
name: "Final Reminder"
description: "Executa uma revisao arquitetural global da Netbiis Edge Platform para detectar desvios sistemicos e priorizar correcoes"
argument-hint: "Opcional: area de foco, preocupacoes atuais ou contexto adicional"
agent: "agent"
---

Voce vai executar uma revisao geral da arquitetura do projeto sob as regras da Netbiis Edge Platform.

Objetivo:
- Validar aderencia global entre Foundation e Blocos
- Identificar desvios sistemicos de arquitetura
- Priorizar correcoes com menor risco de regressao

Contexto adicional da sessao:
{{input}}

Se {{input}} estiver vazio ou nao fornecido:
- Continue normalmente com auditoria global completa
- Registre como Premissa: "Nenhum contexto adicional fornecido"

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

Regra mestra obrigatoria:
- Foundation controla a pagina.
- Blocos controlam apenas a si mesmos.

Ordem obrigatoria de decisao:
1. Reutilizar uma solucao existente.
2. Reutilizar tokens existentes.
3. Reutilizar containers existentes.
4. Somente depois criar nova abstracao.
5. Somente depois considerar alterar a Foundation.

Escopo da revisao:
- Toda a base do projeto por padrao
- Se houver foco em {{input}}, usar como aprofundamento, sem perder a avaliacao global

Nao implementar codigo nesta etapa.
Nao propor refatoracao ampla sem justificativa de risco/beneficio.
Nao recomendar alteracoes na Foundation sem evidencia de reuso entre multiplos blocos.

Formato obrigatorio de saida:

## 1) Estado Geral da Arquitetura
- Classificacao: Saudavel / Atencao / Critico
- Resumo executivo (3 a 5 linhas)

## 2) Top Violacoes Arquiteturais
- Liste ate 5 violacoes mais relevantes
- Para cada item: evidencias, impacto e area afetada

## 3) Duplicacoes e Sobreposicoes
- Duplicacao entre Foundation e blocos
- Duplicacao entre blocos
- Responsabilidades mal alocadas

## 4) Riscos Sistemicos
- Risco de regressao visual global (baixo/medio/alto)
- Risco de regressao funcional global (baixo/medio/alto)
- Risco de aumento de custo de manutencao (baixo/medio/alto)

## 5) Priorizacao de Correcao
- Prioridade Alta (corrigir primeiro)
- Prioridade Media
- Prioridade Baixa
- Para cada prioridade: ganho esperado e risco de nao corrigir

## 6) Plano Curto de Saneamento
- 3 a 7 acoes pontuais recomendadas
- Ordem sugerida de execucao
- Dependencias entre acoes (se houver)

## 7) Premissas e Duvidas
- Liste apenas o que impede conclusao com seguranca total.

Finalize com:
"Revisao global concluida. Nenhuma implementacao foi realizada nesta etapa."
"Se quiser, posso executar a Fase 2 com um plano de ajustes pontuais por prioridade."

Fase 2 - Proposta de alteracoes (somente apos aprovacao explicita do usuario)

Somente apos aprovacao explicita, proponha:
- Alteracoes pontuais no bloco e/ou na Foundation
- Escopo minimo necessario
- Validacoes recomendadas para reduzir regressao
