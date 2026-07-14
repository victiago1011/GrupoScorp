# Arquitetura — estado atual

Documento descritivo do **estado atual** deste repositório.  
**Nenhuma alteração de código foi autorizada** pela existência deste arquivo.

Autoridade máxima: `01_AI_CONSTITUTION.md`.

---

## Stack atual

| Camada | Tecnologia |
|--------|------------|
| Framework | Next.js 15 (App Router) |
| UI | React 19 |
| Linguagem | TypeScript (strict) |
| Estilo | Tailwind CSS 4 (`app/globals.css`) |
| Animação | Motion (`motion/react`) |
| Ícones | Lucide React |
| IA (demo) | `@google/genai` via Route Handler |
| Fontes | Inter e Manrope (Google Fonts no layout) |

Configurações relevantes observadas: `next.config.ts` (`output: 'standalone'`, imagens remotas, opção `DISABLE_HMR` herdada do AI Studio), `tsconfig.json` com alias `@/*`.

---

## Estrutura atual (resumo)

```
app/
  layout.tsx          # Root layout (Server Component) + metadata básica
  page.tsx            # Home institucional completa (Client Component / monólito)
  globals.css         # Tema Tailwind / tokens
  api/leads/analyze/  # POST — análise de lead via Gemini
hooks/use-mobile.ts   # Hook presente; não utilizado pela página principal
lib/utils.ts          # Utilitário `cn`; não utilizado pela página principal
docs/                 # Documentação oficial (Etapa 0)
```

Não há, no estado atual, pastas de componentes dedicadas, rotas de páginas adicionais nem camada de dados persistente.

---

## Monólito em `app/page.tsx`

Quase toda a experiência institucional vive em **um único arquivo Client Component** (`"use client"`), da ordem de **~1.700+ linhas**, incluindo:

- header e menu mobile;
- hero;
- seções de soluções e pilares;
- calculadora de ROI;
- metodologia / processo;
- cases e modal;
- formulário de contato;
- painel demo de leads;
- footer.

**Implicações:** baixa separação de responsabilidades; difícil revisão incremental; conteúdo e lógica de UI fortemente acoplados; limitação de benefícios de Server Components / SEO por seção.

---

## Client Component

A página principal é integralmente Client Component. Interatividade (estado, `localStorage`, Motion, formulário, painel) justifica partes client-side; a arquitetura atual, porém, coloca **todo** o conteúdo institucional no client.

O `app/layout.tsx` permanece como Server Component e define `lang="pt-BR"` e metadata básica de título/descrição.

---

## API Gemini

- Rota: `app/api/leads/analyze/route.ts`
- Método: `POST`
- Função: qualificar lead (prioridade, categoria, resumo, abordagem, rascunho de e-mail) via modelo Gemini
- Credencial: `process.env.GEMINI_API_KEY` (servidor)
- Observações de risco: ausência de autenticação de usuário/admin; uso demonstrativo no site público; herança de headers/User-Agent do AI Studio

Detalhes de segurança: ver `05_SECURITY_AND_PRIVACY.md`.

---

## localStorage

- Chave observada: `scorp_leads`
- Uso: persistir leads do formulário e do seed demonstrativo **no navegador do visitante**
- Não é backend; não é fonte confiável para operação comercial; envolve dados pessoais em armazenamento local sem fluxo LGPD documentado no produto

---

## Painel demo

Seção pública de “Painel de Leads / Demonstração IA” na própria home:

- listagem, exclusão e mudança de status no client;
- gatilho de análise Gemini;
- seeds fictícios quando o storage está vazio;
- acesso sem autenticação.

Tratado oficialmente como **demonstração**, não como ferramenta interna de produção.

---

## Imagens e recursos externos

- Imagens de cases/seções via URLs `lh3.googleusercontent.com`
- `next.config.ts` também permite `picsum.photos` (padrão AI Studio; uso no código da home não é o foco principal observado)
- Ícones de redes no footer via imagens remotas; links sociais placeholder (`#`)

---

## Dependências e resíduos AI Studio (somente documentação)

**Observados / herdados (não remover nesta etapa):**

- nome do pacote `ai-studio-applet` em `package.json`;
- `metadata.json` do AI Studio;
- comentários e `DISABLE_HMR` em `next.config.ts`;
- `.env.example` com texto de injeção do AI Studio;
- `assets/.aistudio/`;
- dependências aparentemente não usadas na app (ex.: `@hookform/resolvers`, `class-variance-authority`, `firebase-tools`, tipografia/animate auxiliares) — listadas para avaliação futura, **sem alteração agora**.

---

## Principais riscos arquiteturais

1. Monólito Client Component — manutenção e regressão.
2. Demo de leads + Gemini no site público — custo, abuso e confusão comercial.
3. Formulário sem envio real — falsa sensação de operação.
4. Conteúdo conceitual misturado a claims de “casos reais”.
5. Acoplamento a assets e convenções do Google AI Studio.
6. ESLint ignorado durante builds (`ignoreDuringBuilds: true`) — risco de qualidade.

---

## Direção futura (não aprovada para implementação)

Apenas orientação estratégica para planos futuros — **não** constitui autorização:

- extrair seções em componentes;
- preferir Server Components para conteúdo estático institucional;
- isolar ou remover demo de leads/Gemini do site público;
- formulário com envio real e privacidade;
- conteúdo alinhado a `04_PRODUCT_AND_CONTENT.md`;
- limpeza controlada de resíduos AI Studio e dependências mortas;
- assets próprios e SEO/produção em etapa dedicada.

Qualquer avanço exige plano no fluxo constitucional e `APROVADO` explícito da etapa correspondente (`06_ROADMAP.md`).
