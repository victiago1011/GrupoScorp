# Roadmap de melhorias

Planejamento em etapas pequenas.  
**Somente a Etapa 0 está concluída/autorizada neste momento.**  
Qualquer etapa seguinte exige novo plano no fluxo constitucional e a palavra **`APROVADO`** para aquele escopo.

Autoridade máxima: `01_AI_CONSTITUTION.md`.

---

## Etapa 0 — Documentação e regras

**Status:** autorizada e executada (criação de `/docs` + README institucional).

### Objetivo
Estabelecer a Constituição de IA, o posicionamento, o mapa técnico/comercial e as regras do projeto sem alterar o comportamento da aplicação.

### Escopo
- Criar a estrutura aprovada em `/docs`
- Atualizar `README.md` na raiz
- Documentar resíduos AI Studio e riscos — sem removê-los

### Critérios de aceite
- Arquivos `00`–`06` e `99` existentes e coerentes
- Constituição com fluxo ANÁLISE → … → APROVADO
- README não é mais o template genérico do AI Studio
- Nenhum arquivo de aplicação alterado

### Riscos
- Documentação desalinhada da codebase (mitigado por análise prévia)
- Confundir “documentado” com “implementado”

### Condição de aprovação
Palavra `APROVADO` explícita para a Etapa 0 (já concedida para este escopo).

---

## Etapa 1 — Arquitetura e limpeza técnica

**Status:** não autorizada.

### Objetivo
Reduzir o monólito, separar responsabilidades e preparar o código para evolução segura — sem ainda reescrever o posicionamento comercial completo.

### Escopo (proposto; detalhar em plano futuro)
- Extrair componentes a partir de `app/page.tsx`
- Separar melhor Server/Client onde fizer sentido
- Isolar ou preparar remoção do painel demo / seeds do fluxo público
- Documentar e, se aprovado no plano da etapa, limpar resíduos AI Studio e dependências mortas
- **Não** incluir formulário de produção completo nesta etapa (salvo se o plano aprovado disser o contrário)

### Critérios de aceite
- Home equivalente em comportamento visual básico (salvo remoções demo explicitamente aprovadas)
- Arquivos menores e revisáveis
- Build do projeto ok
- Nenhuma mudança de conteúdo comercial ampla fora do escopo aprovado

### Riscos
- Regressão visual; quebra de âncoras; escopo creeping

### Condição de aprovação
Novo ciclo completo do fluxo + `APROVADO` específico da Etapa 1.

---

## Etapa 2 — Conteúdo e posicionamento

**Status:** não autorizada.

### Objetivo
Alinhar textos, serviços e cases às regras de `04_PRODUCT_AND_CONTENT.md`.

### Escopo (proposto)
- Reorganizar serviços: sites, painéis, sob medida complementar
- Remover ou relabelar cases/métricas fictícias
- Incluir Corrente do Bem como case real (somente fatos)
- Corrigir claims absolutos e contatos placeholder
- Revisar ROI/calculadora para linguagem honestamente ilustrativa ou remover se aprovado

### Critérios de aceite
- Nenhum case fictício apresentado como real
- Sem métricas inventadas
- Tom alinhado ao posicionamento aprovado
- Contatos apenas com dados verdadeiros aprovados pelo responsável

### Riscos
- Lacunas de conteúdo enquanto facts do Corrente do Bem não estiverem confirmados (declarar incertezas)

### Condição de aprovação
`APROVADO` específico da Etapa 2.

---

## Etapa 3 — Formulário real

**Status:** não autorizada.

### Objetivo
Substituir o fluxo demonstrativo por um canal de contato real e responsável.

### Escopo (proposto)
- Envio real (e-mail/CRM/serviço aprovado)
- Validação server-side
- Avisos de privacidade / LGPD mínimos acordados
- Remoção da falsa confirmação baseada só em `localStorage`
- Remoção ou restrição forte do painel público e da API Gemini exposta

### Critérios de aceite
- Lead chega a um destino real controlado
- Sem inbox pública de PII
- Sem promessa operacional falsa
- Segredos não expostos

### Riscos
- Escolha inadequada de provedor; spam; compliance incompleto

### Condição de aprovação
`APROVADO` específico da Etapa 3 (incluindo decisões de integração).

---

## Etapa 4 — Design, mobile e acessibilidade

**Status:** não autorizada.

### Objetivo
Melhorar hierarquia visual, experiência mobile e acessibilidade sem perder clareza comercial.

### Escopo (proposto)
- Revisão do primeiro viewport e seções (uma função por seção)
- Ajustes mobile
- Foco em teclado, labels, modais, contraste
- Motion com propósito; respeito a preferências do usuário quando aplicável

### Critérios de aceite
- Uso coherente em desktop e mobile
- Problemas graves de a11y do escopo aprovado corrigidos
- Branding alinhado às diretrizes de conteúdo (sem claims falsos)

### Riscos
- Refino estético infinito; regressão de layout

### Condição de aprovação
`APROVADO` específico da Etapa 4.

---

## Etapa 5 — SEO, segurança e produção

**Status:** não autorizada.

### Objetivo
Preparar o site para publicação responsável.

### Escopo (proposto)
- Metadata/OG, sitemap/robots conforme plano
- Headers e endurecimento de segurança
- Checklist de produção
- Remoção definitiva de demos inadequadas
- README operacional sem expor segredos

### Critérios de aceite
- Checklist de produção aprovado atendido
- Sem demos perigosas no ar
- SEO básico coerente com conteúdo verdadeiro

### Riscos
- Publicar cedo demais; configurações de hospedagem incompletas

### Condição de aprovação
`APROVADO` específico da Etapa 5.

---

## Regra geral do roadmap

Avançar de etapa **só** com:

1. Plano no formato constitucional;
2. Escopo explícito;
3. Resposta exata `APROVADO` para aquela etapa.

Conclusão da Etapa 0 **não** autoriza a Etapa 1.
