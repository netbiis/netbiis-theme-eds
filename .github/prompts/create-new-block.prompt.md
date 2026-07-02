---
name: "Create New Block"
description: "Planeja e implementa novo bloco seguindo arquitetura da Netbiis, com fase de analise antes de codigo"
argument-hint: "Nome do bloco, objetivo, estrutura esperada, restricoes e contexto"
agent: "agent"
---

Voce vai planejar a criacao de um novo bloco para a Netbiis Edge Platform.

Contexto adicional da sessao:
{{input}}

Se {{input}} estiver vazio ou nao fornecido, registre como Premissa: "Nenhum contexto de sessao fornecido" e solicite os dados minimos antes de implementar.

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
- Se algum documento da lista nao estiver acessivel, registre-o como ausente em "## 4) Premissas e Duvidas" e continue com os demais disponiveis.
- Seja conciso dentro de cada secao e nao omita secoes obrigatorias.

Fase 1 - Analise arquitetural obrigatoria (sem codigo)

Formato obrigatorio de saida na Fase 1:

## 1) Entendimento do Bloco
- Nome proposto do bloco
- Objetivo do bloco
- Estrutura de conteudo esperada
- Restricoes e requisitos recebidos

## 2) Decisoes Arquiteturais
- Grid Strategy escolhida (Layout Grid, Collection Grid ou Adaptive Columns) + justificativa
- Estrategia de largura (Container, Content Width ou ambas) + justificativa
- Tokens globais reutilizaveis
- Tokens locais necessarios
- Riscos de violacao da Foundation e como evitar

## 3) Plano de Implementacao
- Estrutura de arquivos (CSS, JS e README quando necessario)
- Passos de implementacao em ordem
- Pontos de validacao (responsividade, escopo CSS, tokens, acessibilidade)

## 4) Premissas e Duvidas
- Liste apenas o que impede avancar com seguranca.

Finalize a Fase 1 com:
"Analise concluida. Nenhuma implementacao foi realizada nesta etapa."
"Se quiser, aprove a Fase 2 para gerar o bloco."

Fase 2 - Implementacao (somente apos aprovacao explicita do usuario)

Somente apos aprovacao explicita, gere:
- Estrutura do bloco
- CSS
- JavaScript
- README (quando necessario)

Antes de finalizar, confirmar:
- Mobile First
- Breakpoints oficiais
- Sem container proprio no bloco
- Content Width aplicado conforme Foundation
- Reuso de tokens globais quando possivel
- Escopo CSS correto do bloco
