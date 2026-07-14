# Segurança e privacidade

Documento descritivo dos **problemas atuais** e das **regras mínimas** desejadas.  
**Nenhuma solução técnica é implementada nesta etapa.**

Autoridade máxima: `01_AI_CONSTITUTION.md`.

---

## Problemas atuais observados

Com base na análise somente leitura da codebase:

1. Formulário de contato **não realiza envio real** a e-mail, CRM ou API de produção.
2. Dados do formulário (nome, e-mail, telefone, empresa, necessidade) são gravados em **`localStorage`** no navegador do visitante.
3. Existe **seed de leads fictícios** com nomes, e-mails e telefones de exemplo quando o storage está vazio.
4. O **painel de leads** está exposto na página pública, sem autenticação.
5. A rota **`POST /api/leads/analyze`** chama Gemini **sem** autenticação de usuário, rate limiting documentado ou controle de abuso.
6. Respostas de erro da API podem incluir detalhes técnicos (`details`) retornados ao client.
7. **Não há** política de privacidade, aviso de LGPD, termo de consentimento nem registro de finalidade no fluxo de contato.
8. Variáveis de ambiente estão documentadas no `.env.example` (Gemini / APP_URL); a proteção real depende de não versionar segredos (`.gitignore` ignora `.env*`, mantendo o example).

---

## localStorage e dados pessoais

- Chave: `scorp_leads`
- Natureza: armazenamento local no dispositivo do visitante
- Riscos: falsa sensação de “cadastro recebido”; dados pessoais em contexto inadequado; qualquer pessoa no mesmo navegador pode ver/alterar a fila demo; não atende operação comercial nem retenção controlada

Tratar como **comportamento de protótipo**, inadequado para produção.

---

## Ausência de envio real

O submit:

- valida campos mínimos no client;
- simula latência;
- salva localmente;
- exibe sucesso (“mensagem enviada” / resposta em até 24h).

Isso cria expectativa comercial **sem** canal real de atendimento. Em produção, isso é risco de confiança e de processo.

---

## Ausência de LGPD (no produto)

No estado atual do site não há, de forma evidenciada:

- base legal / aviso de coleta;
- link para política de privacidade;
- consentimento explícito quando aplicável;
- informação sobre compartilhamento com processadores (ex.: provedor de e-mail ou IA).

Qualquer formulário real futuro deverá endereçar isso em etapa aprovada.

---

## Risco da API Gemini pública

Quem puder chamar `/api/leads/analyze` pode:

- consumir cota/custo da API;
- enviar conteúdo arbitrário ao modelo;
- usar o endpoint como vetor de abuso.

Além disso, o painel demo incentiva o uso dessa rota a partir do site público.  
**Remoção, autenticação ou restrição** exigem plano e `APROVADO` futuros — não fazem parte da Etapa 0.

---

## Regras mínimas para formulários (diretriz)

Para etapas futuras (não implementar agora):

1. Só coletar dados necessários à finalidade declarada.
2. Informar finalidade e, quando cabível, obter consentimento.
3. Enviar para canal real controlado (e-mail transacional, CRM, etc.).
4. Não prometer prazo de resposta que a operação não cumpra.
5. Não expor inbox de leads no site público.
6. Validar e sanitizar entradas no servidor.
7. Considerar proteção anti-spam (rate limit, honeypot, etc.) conforme o plano aprovado.
8. Não usar modelos de IA sobre dados pessoais sem avaliação de necessidade, base legal e risco.

---

## Proteção de variáveis de ambiente

- Nunca commitar chaves reais (`GEMINI_API_KEY`, tokens, senhas).
- Manter segredos apenas em ambiente local/seguro (ex.: `.env.local` não versionado).
- Não imprimir secrets em logs, respostas de API ou README.
- Rotacionar chaves se houver suspeita de exposição.

---

## Princípio do menor privilégio

- APIs e painéis internos só para quem precisa.
- Chaves de IA com permissões mínimas possíveis junto ao provedor.
- Ambiente de demonstração separado mentalmente (e, no futuro, tecnicamente) do canal comercial real.
- Evitar que ferramentas de “demo” permaneçam acessíveis em produção.

---

## Proibição: registrar ou expor dados sensíveis

É proibido, em código, logs, documentação pública, commits ou respostas de API:

- expor dados pessoais de leads reais;
- versionar dumps de `localStorage` com PII;
- registrar números de documento, senhas ou dados financeiros desnecessários;
- colocar credenciais em README, issues ou docs.

Documentação pode descrever **categorias** de risco (como este arquivo), nunca conteúdos sensíveis reais.

---

## Escopo desta etapa

Este arquivo **apenas registra** o diagnóstico e as diretrizes.  
Correções de segurança, privacidade e formulário real pertencem a etapas posteriores do `06_ROADMAP.md`, cada uma com `APROVADO` próprio.
