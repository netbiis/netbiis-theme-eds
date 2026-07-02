---
name: "Project Study"
description: "Alinha entendimento arquitetural da Netbiis antes de implementar mudancas"
argument-hint: "Contexto da sessao (feature, bloco, bug, objetivo)"
agent: "agent"
---

Voce vai estudar a arquitetura deste projeto antes de sugerir qualquer alteracao.

Contexto adicional da sessao:
{{input}}

Se {{input}} estiver vazio ou nao fornecido, registre como Premissa: "Nenhum contexto de sessao fornecido" e prossiga com analise arquitetural geral.

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
- Nao gerar codigo nesta etapa.
- Se houver conflito entre documentos, siga a ordem de precedencia acima e explicite o conflito.
- Se algum documento da lista nao estiver acessivel, registre-o como ausente em "## 4) Premissas e Duvidas" e continue com os demais disponiveis.
- Se faltar contexto, registre como "Premissa" e pergunte no final.
- Seja conciso dentro de cada secao - use frases curtas e evite explicacoes redundantes. Nao omita secoes do formato obrigatorio.

Formato obrigatorio de saida:

## 1) Resumo da Arquitetura (max. 10 linhas)
- Sintese do que governa Foundation vs Blocos.

## 2) Checklist de Entendimento
- Foundation: OK/Alerta + observacao
- Blocos: OK/Alerta + observacao
- Containers: OK/Alerta + observacao
- Content Width: OK/Alerta + observacao
- Grid Strategy: OK/Alerta + observacao
- Responsividade: OK/Alerta + observacao
- Tokens: OK/Alerta + observacao

## 3) Conflitos e Decisoes de Precedencia
- Liste conflitos encontrados e qual regra prevaleceu.

## 4) Premissas e Duvidas
- Liste apenas o que impede avancar com seguranca.

Finalize com:
"Analise concluida. Nenhuma implementacao foi realizada nesta etapa."
"Se quiser, descreva a proxima tarefa e eu proponho um plano de implementacao."
