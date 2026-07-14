# Visão geral do projeto — Site institucional Grupo Scorp

Documento **específico deste repositório**. Não substitui a Constituição (`01_AI_CONSTITUTION.md`).

---

## O que é o Grupo Scorp

O Grupo Scorp é uma empresa de soluções digitais. Atua de forma próxima a pequenas e médias empresas, com foco em entregas práticas, comunicação clara e competência técnica — **sem** se posicionar como grande consultoria multinacional.

---

## Público-alvo

- Pequenas e médias empresas (PMEs);
- Negócios que precisam de presença digital profissional;
- Gestores que precisam de mais organização e clareza sobre indicadores financeiros, comerciais ou operacionais;
- Empresas que eventualmente necessitam de complementos sob medida aos dois eixos principais.

---

## Foco comercial

Base comercial aprovada:

> Sites profissionais e painéis de gestão para empresas que querem crescer com mais organização e clareza.

Ideia de marca registrada:

> Sua empresa mais profissional por fora e mais organizada por dentro.

---

## Serviços principais

1. **Sites profissionais** — presença digital clara, confiável e orientada a conversão compreensível.
2. **Painéis de gestão e indicadores** — visão financeira, comercial e/ou operacional para apoiar decisões.
3. **Soluções personalizadas complementares** — apenas quando necessárias para complementar os dois serviços principais (não como catálogo aberto e excessivo).

---

## Objetivo deste site

Ser o **site institucional** do Grupo Scorp: apresentar a empresa, os serviços com clareza, gerar contato comercial qualificado e transmitir profissionalismo, proximidade, confiança e competência — com conteúdo verdadeiro.

---

## Estado atual

| Aspecto | Situação |
|---------|----------|
| Tipo | Protótipo / demonstração avançada originada do Google AI Studio |
| Stack | Next.js (App Router), React, TypeScript, Tailwind CSS |
| Página principal | Monólito Client Component em `app/page.tsx` |
| Produção | **Não** deve ser apresentado como site pronto para produção |
| Documentação oficial | Iniciada na Etapa 0 (`/docs`) |

### Status de protótipo

O repositório atual é um **protótipo institucional com funcionalidades demonstrativas**. Serve como base visual e conceitual, não como produto comercial final validado.

---

## Corrente do Bem

O **Corrente do Bem** é um **projeto real** produzido pelo Grupo Scorp.

Pode ser apresentado como case no site, desde que sejam mencionadas **apenas** funcionalidades e informações verdadeiras. É proibido inventar métricas, resultados ou depoimentos não comprovados sobre este ou qualquer outro projeto.

---

## O que ainda é demonstrativo

Com base na análise da codebase (Etapa 0 — somente leitura):

- **Formulário de contato** — simula envio; persiste leads no `localStorage` do navegador; **não** envia mensagem a um backend/e-mail real.
- **Painel de leads / Inbox administrativo** — demonstração pública de qualificação com IA; não é operação comercial segura.
- **Integração Gemini** (`/api/leads/analyze`) — recurso demonstrativo de análise de leads; endpoint sem autenticação de usuário.
- **Cases HealthHub, LexFlow, ImobiView** — conteúdo conceitual/demonstrativo com métricas ilustrativas; **não** devem ser tratados como clientes ou resultados reais.
- **Calculadora de ROI** — estimativas ilustrativas; premissas e percentuais não devem ser vendidos como garantia de resultado.
- **Contatos de exemplo** — telefone placeholder e elementos de UI ainda herdados do contexto de demo.
- **Resíduos do Google AI Studio** — `metadata.json`, README legado (substituído na Etapa 0), nome de pacote `ai-studio-applet`, flags/comentários de HMR do AI Studio, User-Agent `aistudio-build` na API, pasta `assets/.aistudio/`, etc. **Documentados aqui; remoção não autorizada nesta etapa.**

---

## O que não deve ser apresentado como produção

- Site “no ar” como entrega final sem checklist de produção aprovado;
- Formulário como canal oficial de leads sem envio real e sem privacidade adequada;
- Painel de leads público como ferramenta interna;
- Cases fictícios ou métricas inventadas como prova social;
- Promessas absolutas (zero erros, topo garantido do Google, segurança total, etc.);
- Qualquer afirmação de que o produto já está pronto para clientes finais.

---

## Relação com o roadmap

Próximas evoluções estão em `06_ROADMAP.md`. Nenhuma etapa além da Etapa 0 está autorizada sem novo `APROVADO` explícito.
