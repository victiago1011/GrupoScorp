# Grupo Scorp — Site institucional

Site institucional do **Grupo Scorp**, empresa de soluções digitais com foco em:

- sites profissionais;
- painéis de gestão e indicadores;
- soluções personalizadas complementares quando necessário.

Posicionamento:

> Sites profissionais e painéis de gestão para empresas que querem crescer com mais organização e clareza.

---

## Objetivo deste repositório

Manter e evoluir o site institucional do Grupo Scorp.  
O estado atual é um **protótipo** (origem Google AI Studio) com partes demonstrativas — **não** deve ser tratado como produto final pronto para produção.

---

## Stack atual

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Motion
- Lucide React
- Integração demonstrativa com Gemini (`@google/genai`) via Route Handler

---

## Documentação obrigatória

Antes de qualquer alteração, leia a pasta **`/docs`**, começando por:

1. [`docs/00_START_HERE.md`](docs/00_START_HERE.md)
2. [`docs/01_AI_CONSTITUTION.md`](docs/01_AI_CONSTITUTION.md) — **autoridade máxima**

Toda mudança de código, dependências ou comportamento deve seguir a Constituição de IA: análise, plano, parada completa e autorização explícita com a palavra **`APROVADO`**.

---

## Executar localmente

Pré-requisitos: Node.js instalado.

```bash
npm install
npm run dev
```

Variáveis de ambiente: use `.env.example` como referência e crie um `.env.local` local (não versionado) se for testar recursos que dependam de chaves. **Não** coloque chaves reais neste README.

Scripts disponíveis:

- `npm run dev` — desenvolvimento
- `npm run build` — build
- `npm run start` — servidor após build
- `npm run lint` — lint

---

## Avisos

- Não faça commit, push, deploy ou mudança de dependências sem autorização no fluxo da Constituição.
- Há funcionalidades demonstrativas (formulário/`localStorage`, painel de leads, análise Gemini) documentadas em `/docs` — não apresentá-las como operação de produção.
- Resíduos do Google AI Studio ainda existem no repositório; a remoção será tratada em etapa futura aprovada.

---

## Roadmap

Ver [`docs/06_ROADMAP.md`](docs/06_ROADMAP.md).  
A Etapa 0 (documentação) não autoriza automaticamente as etapas seguintes.
