# Regras rápidas do projeto

Consulta diária. **Não substitui** a Constituição (`01_AI_CONSTITUTION.md`).  
Em conflito, a Constituição vence.

---

## Antes de qualquer mudança

1. Ler `00_START_HERE.md` e a Constituição.
2. Seguir o fluxo até o fim.
3. Parar e aguardar `APROVADO`.
4. Só então implementar o escopo aprovado.

---

## Aprovado significa

- Somente a etapa/escopo do último plano.
- Não vale para o roadmap inteiro.
- Não autoriza commit/push automaticamente.

---

## Nunca fazer sem autorização explícita

- Commit ou push
- Instalar / remover / atualizar dependências
- Apagar arquivos
- Criar SQL / banco
- Deploy
- Inventar clientes, métricas ou cases “reais”

---

## Sempre fazer

- Alterações pequenas e reversíveis
- Declarar incertezas
- Preservar arquitetura até haver plano de mudança
- Tratar Corrente do Bem como case real (só fatos)
- Tratar HealthHub / LexFlow / ImobiView e o painel de leads como demonstrativos (até decisão aprovada em contrário)

---

## Lembretes deste repositório

| Item | Tratamento |
|------|------------|
| Site atual | Protótipo — não “pronto” |
| Formulário | Demo (`localStorage`) |
| Gemini + inbox | Demo pública — risco |
| Etapa atual concluída | 0 (documentação) |
| Próxima | Etapa 1 — só com novo `APROVADO` |

---

## Ordem dos docs

`00` → `01` → `02` → `03` → `04` → `05` → `06` → `99` (este)
