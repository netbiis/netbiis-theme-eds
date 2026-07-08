---
name: "Adobe Block Migration"
description: "Adapta bloco oficial do Adobe Edge Delivery Services para os padroes da Netbiis"
argument-hint: "Bloco origem (HTML/CSS/JS), objetivo e contexto da migracao"
agent: "agent"
---

Voce vai adaptar um bloco oficial do Adobe Edge Delivery Services para os padroes da Netbiis Edge Platform.

Contexto adicional da sessao:
{{input}}

Se {{input}} estiver vazio ou nao fornecido, registre como Premissa: "Nenhum contexto de sessao fornecido" e solicite os dados minimos antes de migrar.

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
- Nao recriar o bloco do zero sem justificativa.
- Nao implementar codigo na Fase 1.
- Se houver conflito entre documentos, siga a ordem de precedencia acima e explicite o conflito.
- Se algum documento da lista nao estiver acessivel, registre-o como ausente em "## 5) Premissas e Duvidas" e continue com os demais disponiveis.
- Preservar comportamento funcional do bloco original.
- Priorizar adaptacao arquitetural com menor impacto de regressao.
- Nao promover para Foundation sem justificativa de reuso.
- Seja conciso dentro de cada secao e nao omita secoes obrigatorias.

Fase 1 - Diagnostico de migracao (sem codigo)

Formato obrigatorio de saida na Fase 1:

## 1) Escopo da Migracao
- Bloco original analisado
- Comportamento funcional esperado
- Arquivos/partes consideradas (HTML, CSS, JS)

## 2) Problemas Encontrados
- Violacoes arquiteturais identificadas
- Valores hardcoded
- Containers locais
- Tokens nao reutilizados
- Breakpoints/escopo CSS fora do padrao

## 3) Decisoes de Adaptacao
- Responsabilidades da Foundation vs do bloco
- Grid Strategy escolhida (Layout, Collection ou Adaptive Columns) + justificativa
- Estrategia de largura (Container, Content Width ou ambas) + justificativa
- Tokens globais reutilizaveis e tokens locais necessarios

## 4) Impacto
- Exige alteracao na Foundation? (sim/nao + justificativa)
- Pode ser resolvido apenas no bloco? (sim/nao + justificativa)
- Risco de regressao funcional (baixo/medio/alto)

## 5) Premissas e Duvidas
- Liste apenas o que impede avancar com seguranca.

Finalize a Fase 1 com:
"Analise concluida. Nenhuma implementacao foi realizada nesta etapa."
"Se quiser, aprove a Fase 2 para gerar a versao adaptada do bloco."

Fase 2 - Implementacao adaptada (somente apos aprovacao explicita do usuario)

Somente apos aprovacao explicita, gere:
- CSS revisado
- JavaScript revisado (quando necessario)
- Ajustes estruturais minimos no bloco

Regras obrigatorias da Fase 2:
- Nao alterar comportamento funcional essencial do bloco.
- Nao criar containers dentro do bloco.
- Utilizar Content Width quando apropriado.
- Utilizar tokens globais sempre que possivel.
- Criar tokens locais apenas quando necessario.
- Utilizar breakpoints oficiais.
- Seguir Mobile First.
- Manter escopo CSS do bloco.
- Nao promover tokens para a Foundation sem justificativa.

Antes de finalizar, confirmar:
- Compatibilidade funcional com bloco original preservada
- Aderencia aos padroes da Foundation da Netbiis
- Sem regressao funcional esperada
