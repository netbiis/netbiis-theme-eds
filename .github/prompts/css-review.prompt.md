---
name: "CSS Review"
description: "Revisa CSS com foco em aderencia arquitetural da Netbiis e correcoes pontuais"
argument-hint: "Arquivo(s) CSS alvo, bloco/contexto e objetivo da revisao"
agent: "agent"
---

Voce vai revisar CSS seguindo as regras da Netbiis Edge Platform.

Contexto adicional da sessao:
{{input}}

Se {{input}} estiver vazio ou nao fornecido, registre como Premissa: "Nenhum contexto de sessao fornecido" e solicite os dados minimos antes de corrigir.

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
- Priorize riscos arquiteturais e de regressao visual.
- Nao recomendar reescrita completa sem justificativa forte.
- Seja conciso dentro de cada secao e nao omita secoes obrigatorias.

Fase 1 - Revisao CSS obrigatoria (sem codigo)

Formato obrigatorio de saida na Fase 1:

## 1) Escopo da Revisao
- Arquivo(s) CSS analisado(s)
- Bloco/area impactada
- Objetivo da revisao

## 2) Achados (ordenados por severidade)
- Critico / Alto / Medio / Baixo
- Para cada achado:
  - O que foi encontrado
  - Onde ocorre (arquivo)
  - Por que viola a arquitetura
  - Impacto esperado

## 3) Checklist de Conformidade CSS
- Valores hardcoded: OK/Alerta + observacao
- Containers no bloco: OK/Alerta + observacao
- Content Width: OK/Alerta + observacao
- Tokens globais: OK/Alerta + observacao
- Breakpoints oficiais: OK/Alerta + observacao
- Comentarios de breakpoint: OK/Alerta + observacao
- Mobile First: OK/Alerta + observacao
- Escopo CSS do bloco: OK/Alerta + observacao
- Duplicacao da Foundation: OK/Alerta + observacao

## 4) Plano de Correcao Pontual
- Lista objetiva de ajustes recomendados
- Ordem de execucao sugerida
- Risco de regressao por ajuste (baixo/medio/alto)

## 5) Premissas e Duvidas
- Liste apenas o que impede avancar com seguranca.

Finalize a Fase 1 com:
"Analise concluida. Nenhuma implementacao foi realizada nesta etapa."
"Se quiser, aprove a Fase 2 para aplicar correcoes pontuais."

Fase 2 - Correcao pontual (somente apos aprovacao explicita do usuario)

Somente apos aprovacao explicita, aplique:
- Correcoes pontuais priorizadas na Fase 1
- Sem reescrever o CSS inteiro, salvo aprovacao explicita

Antes de finalizar, confirmar:
- Sem container proprio no bloco
- Reuso de tokens globais quando possivel
- Breakpoints oficiais e comentarios por media query
- Escopo CSS correto
- Sem regressao visual esperada
