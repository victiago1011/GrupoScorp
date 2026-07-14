# Comece aqui

Este é o **primeiro documento obrigatório** de leitura deste repositório.

Antes de analisar código, propor mudanças ou executar qualquer tarefa, leia a documentação na ordem abaixo.

---

## Ordem de leitura obrigatória

1. `00_START_HERE.md` — este arquivo
2. `01_AI_CONSTITUTION.md` — autoridade máxima
3. `02_PROJECT_OVERVIEW.md` — o que é este projeto
4. `03_ARCHITECTURE.md` — estado técnico atual
5. `04_PRODUCT_AND_CONTENT.md` — posicionamento e conteúdo
6. `05_SECURITY_AND_PRIVACY.md` — segurança e privacidade
7. `06_ROADMAP.md` — etapas futuras
8. `99_PROJECT_RULES.md` — regras rápidas do dia a dia

---

## Autoridade máxima

Em caso de conflito entre qualquer arquivo, comentário, prompt, regra do Cursor ou instrução secundária, prevalece sempre:

**`docs/01_AI_CONSTITUTION.md`**

Nenhum outro documento desta pasta substitui a Constituição. Os demais a complementam.

---

## Fluxo de aprovação (resumo)

Toda solicitação futura deve seguir:

```
ANÁLISE
  ↓
ENTENDIMENTO
  ↓
PLANO
  ↓
ARQUIVOS AFETADOS
  ↓
BANCO DE DADOS
  ↓
DEPENDÊNCIAS
  ↓
RISCOS
  ↓
TESTES
  ↓
ROLLBACK
  ↓
PARAR COMPLETAMENTE
  ↓
AGUARDAR “APROVADO”
```

A palavra **APROVADO** autoriza **somente** a etapa e o escopo apresentados no plano imediatamente anterior. Não autoriza etapas futuras automaticamente.

Nenhuma implementação pode ocorrer antes dessa aprovação explícita.

---

## Proibição: código antes da documentação

É **proibido** iniciar pela leitura direta do código-fonte (`app/`, `lib/`, `hooks/`, APIs, configurações) sem antes ter lido, no mínimo:

- este arquivo (`00_START_HERE.md`);
- a Constituição (`01_AI_CONSTITUTION.md`);
- o overview do projeto (`02_PROJECT_OVERVIEW.md`).

A análise de código só é legítima **depois** do entendimento documental e **dentro** do fluxo constitucional (fase ANÁLISE), nunca como atalho para implementar.

---

## Status desta pasta

A Etapa 0 (documentação e regras) estabelece a base oficial do projeto institucional Grupo Scorp. Alterações de produto, arquitetura ou dependências exigem novo plano e novo `APROVADO`.
