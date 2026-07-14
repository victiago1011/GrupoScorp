# Roadmap de melhorias

Planejamento em etapas pequenas.  
Qualquer avanço exige plano no fluxo constitucional e a palavra **`APROVADO`** para o escopo correspondente.

Autoridade máxima: `01_AI_CONSTITUTION.md`.

Decisões comerciais detalhadas da Etapa 2: ver `04_PRODUCT_AND_CONTENT.md` (atualizado na Subetapa 2A).

---

## Etapa 0 — Documentação e regras

**Status:** concluída.

### Objetivo
Estabelecer a Constituição de IA, o posicionamento inicial, o mapa técnico/comercial e as regras do projeto sem alterar o comportamento da aplicação.

### Escopo executado
- Estrutura `/docs`
- `README.md` institucional
- Documentação de resíduos AI Studio e riscos

---

## Etapa 1 — Arquitetura e limpeza técnica

**Status:** concluída.

### Objetivo
Componentizar a Home preservando aparência e comportamento, preparando base para conteúdo.

### Escopo executado
- Extração de componentes, `data/`, `types/`
- `app/page.tsx` como Server Component composto
- Sem mudança comercial ampla

---

## Etapa 2 — Conteúdo e posicionamento

**Status:** em andamento (somente Subetapa 2A concluída).

### Objetivo
Alinhar textos, serviços, estrutura da Home e cases às decisões comerciais aprovadas em `04_PRODUCT_AND_CONTENT.md`.

### Critérios de aceite (Etapa 2 completa)
- Posicionamento dual (sites + painéis) refletido na Home
- Três grupos de serviço; sem catálogo técnico como oferta principal
- Case real Corrente do Bem só com fatos aprovados
- Exemplos conceituais rotulados, sem métricas/nomes fictícios
- ROI e painel Gemini/leads fora da Home pública
- Contatos só com canais confirmados (omitir se pendente)
- Sem falsa confirmação de envio de formulário

### Riscos
- Implementar copy antes de confirmar canais de contato
- Regressão de âncoras/nav ao remover ROI e inbox
- Publicar exemplos conceituais com linguagem de case real

### Condição de aprovação
Cada subetapa da Etapa 2 exige `APROVADO` explícito do respectivo escopo.

---

### Subetapa 2A — Decisões comerciais e conteúdo-base

**Status:** concluída (somente documentação).

**Escopo executado:**
- Registrar posicionamento principal e conceito de apoio
- Registrar três serviços e o que não é serviço principal
- Registrar remoção da calculadora de ROI da Home pública (sem alterar código)
- Registrar retirada do painel de leads, Inbox, Gemini público e localStorage como backend (sem alterar código)
- Registrar estrutura de portfólio (Corrente do Bem + 2 exemplos conceituais)
- Registrar fatos aprovados do Corrente do Bem e texto-base
- Registrar estrutura aprovada da Home
- Registrar contatos como pendentes de confirmação

**Arquivos alterados nesta subetapa:** `docs/04_PRODUCT_AND_CONTENT.md`, `docs/06_ROADMAP.md`.  
**Código da aplicação:** não alterado.

**Nota:** `docs/09_DECISIONS.md` **não existe** e **não foi criado** nesta subetapa (criação não autorizada sem aviso prévio).

---

### Subetapa 2B — Hero e serviços

**Status:** não autorizada.

**Objetivo (previsto):** aplicar no código o Hero (mensagem principal + apoio) e os três grupos de serviço; limpar claims problemáticos das seções atuais de soluções/pilares.

---

### Subetapa 2C — Estrutura da Home e remoções públicas

**Status:** não autorizada.

**Objetivo (previsto):** reordenar seções conforme estrutura 2A; remover ROI e painel/Inbox/Gemini do fluxo público da Home; ajustar navegação e footer; tratar formulário sem falsa confirmação de envio (envio real = Etapa 3).

---

### Subetapa 2D — Portfólio e case real

**Status:** não autorizada.

**Objetivo (previsto):** substituir HealthHub/LexFlow/ImobiView; destacar Corrente do Bem com fatos aprovados; incluir dois exemplos conceituais rotulados sem métricas.

---

### Subetapa 2E — Revisão final de credibilidade

**Status:** não autorizada.

**Objetivo (previsto):** varredura de claims, contatos (omitir pendentes), metadata alinhada, build/lint e checklist de credibilidade.

---

## Etapa 3 — Formulário real

**Status:** não autorizada.

### Objetivo
Substituir o fluxo demonstrativo por um canal de contato real e responsável.

### Escopo (proposto)
- Envio real (e-mail/CRM/serviço aprovado)
- Validação server-side
- Avisos de privacidade / LGPD mínimos acordados
- Remoção definitiva de persistência inadequada de leads no client
- Gemini apenas se houver área interna autenticada aprovada

### Critérios de aceite
- Lead chega a um destino real controlado
- Sem inbox pública de PII
- Sem promessa operacional falsa
- Segredos não expostos

### Condição de aprovação
`APROVADO` específico da Etapa 3.

---

## Etapa 4 — Design, mobile e acessibilidade

**Status:** não autorizada.

### Objetivo
Melhorar hierarquia visual, experiência mobile e acessibilidade sem perder clareza comercial.

### Condição de aprovação
`APROVADO` específico da Etapa 4.

---

## Etapa 5 — SEO, segurança e produção

**Status:** não autorizada.

### Objetivo
Preparar o site para publicação responsável.

### Condição de aprovação
`APROVADO` específico da Etapa 5.

---

## Regra geral do roadmap

Avançar de etapa ou subetapa **só** com:

1. Plano no formato constitucional (quando aplicável);
2. Escopo explícito;
3. Resposta exata `APROVADO` para aquele escopo.

Conclusão de uma subetapa **não** autoriza a seguinte automaticamente.
