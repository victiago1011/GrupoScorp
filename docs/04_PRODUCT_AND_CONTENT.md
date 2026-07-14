# Produto e conteúdo

Documento específico deste site institucional.  
Complementa o overview; **não** substitui `01_AI_CONSTITUTION.md`.

**Última atualização de decisões comerciais:** Subetapa 2A (apenas documentação — sem alteração de código da aplicação).

---

## Posicionamento comercial

### Direção principal (Hero)

> Sites profissionais e painéis de gestão para empresas que querem crescer com mais organização e clareza.

Esta frase é a **direção principal do Hero** (título / mensagem central).

### Conceito de apoio

> Sua empresa mais profissional por fora e mais organizada por dentro.

Uso como **apoio** (subtítulo, bloco de serviços ou reforço de marca). **Não** substitui obrigatoriamente o título principal.

O Grupo Scorp deve soar:

- profissional;
- próximo;
- confiável;
- claro;
- tecnicamente competente;
- prático;
- comercialmente compreensível.

Não deve soar como consultoria multinacional genérica, agência de “tudo para todos” ou vendedor de milagres tecnológicos.

---

## Linguagem da marca

- Frases curtas e concretas.
- Benefício antes de jargão; se usar termo técnico, explicar o ganho em linguagem simples.
- Preferir “ajudamos a organizar”, “deixamos mais claro”, “site profissional” a superlativos vazios.
- Tom de conversa séria e acessível — não formal demais, não informal demais.
- Não vender principalmente tecnologias (Next.js, React, Power BI, etc.); partir de problemas e benefícios do negócio.

---

## Serviços principais (aprovado — Subetapa 2A)

Organização obrigatória em **três grupos**:

1. **Sites profissionais**  
   Site institucional ou presença digital que transmite credibilidade e facilita o contato/conversão.

2. **Painéis de gestão e indicadores**  
   Painéis para acompanhar indicadores financeiros, comerciais e/ou operacionais com mais clareza.

3. **Soluções personalizadas complementares**  
   Desenvolvimentos sob medida **somente** quando necessários para complementar os dois eixos acima — não como lista infinita de serviços.

### O que não é serviço principal independente

Automação, APIs, áreas restritas, sistemas e integrações **não** devem aparecer como serviços principais independentes.

Podem aparecer apenas como **recursos ou soluções complementares**, conforme a necessidade do projeto.

Catálogos amplos (muitos pilares, muitas micro-ofertas sem foco) devem ser evitados no posicionamento público.

---

## Benefícios vendáveis (diretrizes)

Exemplos de ângulos legítimos (desde que verdadeiros no discurso e na entrega):

- Aparência e presença mais profissionais perante clientes.
- Organização interna e menos dependência de controles frágeis.
- Clareza sobre números e acompanhamento do negócio.
- Comunicação comercial mais direta (contato, proposta, entendimento da necessidade).
- Soluções práticas, dimensionadas para PME.

Evitar vender o que não se pode comprovar.

---

## Termos preferidos

- site profissional;
- painel de gestão / indicadores;
- organização e clareza;
- pequenas e médias empresas;
- solução prática;
- sob medida (quando for complemento real);
- proximidade e acompanhamento;
- proposta / conversa / entendimento da necessidade.

---

## Termos e claims a evitar

Sem base factual aprovada, evitar:

- liderança de mercado;
- suporte 24/7;
- segurança absoluta / “100% seguro”;
- eliminação total de erros;
- “topo do Google” como promessa;
- métricas de performance inventadas (ex.: “99/100” decorativo apresentado como fato);
- “casos reais” para projetos apenas conceituais;
- jargão sem benefício (API, webhook, ACL, etc.) como argumento de venda solto;
- excesso de serviços sem hierarquia;
- preços públicos ou ROI apresentados como certeza sem política comercial definida.

---

## Estrutura da Home (aprovada — Subetapa 2A)

Direção da primeira versão pública alinhada ao posicionamento:

1. Header  
2. Hero  
3. Problemas que ajudamos a resolver  
4. Sites profissionais  
5. Painéis de gestão e indicadores  
6. Soluções personalizadas complementares  
7. Como funciona  
8. Case real Corrente do Bem  
9. Exemplos conceituais  
10. Contato  
11. Footer  

**Fora desta estrutura (decisão 2A):**

- Calculadora de ROI — **não** fará parte da Home pública.  
- Painel público de leads / Inbox / Gemini no fluxo público — **não** farão parte da Home pública.

A implementação dessas remoções/reordenações ocorre em subetapas posteriores da Etapa 2. Componentes podem permanecer no repositório até a subetapa correspondente.

---

## Calculadora de ROI (decisão 2A)

**Decisão:** remover a calculadora de ROI da **primeira versão pública** da Home.

**Nesta subetapa:** apenas registro documental — **código não alterado**.

Motivos registrados:

- premissas genéricas;
- preços ainda não definidos;
- risco de criar expectativas incorretas;
- risco de parecer garantia de resultado;
- foco excessivo em preço;
- baixa necessidade na primeira versão pública.

O componente pode permanecer no repositório até a subetapa de implementação.

---

## Formulário, painel de leads e Gemini (decisão 2A)

Decisões aprovadas para a Home pública (registro documental; código ainda não alterado nesta subetapa):

- retirar o painel demonstrativo da Home pública;
- retirar o link de Inbox de Leads do rodapé;
- retirar a análise Gemini do fluxo público;
- não utilizar `localStorage` como backend de leads;
- avaliar posteriormente se Gemini tem utilidade em área interna autenticada.

Formulário de contato real (envio, LGPD) permanece escopo da **Etapa 3**.  
Na Etapa 2 de implementação de conteúdo: não publicar falsa confirmação de envio.

---

## Portfólio (decisão 2A)

### Estrutura aprovada

**A. Case real em destaque**

- Corrente do Bem

**B. Dois exemplos conceituais menores**

1. Painel de gestão financeira  
2. Site profissional para empresa de serviços  

Os exemplos conceituais devem ser identificados como **“Projeto conceitual”** ou **“Exemplo de solução”**.

Eles **não** poderão:

- usar nomes de empresas fictícias;
- aparecer como clientes;
- possuir métricas inventadas;
- apresentar resultados;
- apresentar depoimentos;
- afirmar que foram entregues comercialmente.

Os atuais HealthHub, LexFlow e ImobiView deverão ser **substituídos** por essa estrutura em subetapa de implementação posterior. **Código não alterado na 2A.**

### Regras gerais para cases

1. Só apresentar como case **real** o que for projeto verdadeiro do Grupo Scorp.
2. Informar apenas funcionalidades e fatos verificáveis.
3. Proibido inventar clientes, logos, depoimentos, percentuais ou resultados.
4. Projetos conceituais devem ser rotulados de forma inequívoca e não misturados com linguagem de case real.
5. Se não houver certeza sobre um fato, declarar a incerteza ou omitir.

---

## Case Corrente do Bem (fatos aprovados — Subetapa 2A)

### Natureza

- Projeto **real** desenvolvido pelo Grupo Scorp.

### Informações aprovadas para uso no conteúdo

- site institucional;
- portal de oportunidades;
- notícias;
- vagas;
- talentos;
- área administrativa;
- cadastro e gestão de conteúdo;
- autenticação;
- banco de dados Supabase;
- campanhas de e-mail;
- gestão de contatos da newsletter;
- histórico de campanhas;
- integração com Resend;
- formulário de contato por e-mail;
- deploy na Vercel;
- domínio próprio;
- responsividade.

### Direção inicial do texto

> Plataforma digital desenvolvida para reunir conteúdo, oportunidades, notícias, vagas e talentos em um único ambiente. O projeto também conta com área administrativa, gestão de conteúdo e ferramentas de comunicação por e-mail.

### Possíveis entregas a apresentar (dentro dos fatos acima)

- site institucional responsivo;
- portal de notícias e oportunidades;
- área administrativa;
- gestão de vagas e talentos;
- campanhas de e-mail;
- integração com banco de dados e serviços externos.

### Proibido incluir

- quantidade de usuários;
- conversão;
- crescimento;
- faturamento;
- percentuais;
- resultados comerciais;
- depoimentos;
- métricas de performance;
- ROI;
- qualquer informação adicional inventada.

---

## Contatos (pendente de confirmação)

Aguardando confirmação do responsável antes de qualquer implementação de canais:

- e-mail comercial definitivo;
- telefone ou WhatsApp;
- Instagram;
- LinkedIn.

**Regras:**

- Não inventar contatos.
- Não usar placeholders.
- Não usar links com `href="#"`.
- Se um canal não estiver confirmado no momento da implementação, **omitir**.

---

## Proibição de métricas não comprovadas

É proibido no conteúdo institucional (site, README, materiais derivados deste projeto):

- inventar percentuais de redução, aumento de conversão ou economia;
- usar seeds de leads fictícios como prova social;
- apresentar estimativas de calculadoras como garantia de retorno;
- afirmar eficiência média de “clientes reais” sem evidência aprovada.

Simulações e estimativas, se existirem na interface em alguma versão futura, devem ser claramente descritas como **ilustrativas**, não como resultado contratado.

---

## Estado vs. implementação

| Item | Decisão 2A | Código da aplicação |
|------|------------|---------------------|
| Posicionamento / serviços / Home / portfólio / Corrente do Bem | Registrados neste documento | Ainda refletidos no protótipo antigo até subetapas 2B+ |
| ROI fora da Home pública | Aprovado | Componente ainda presente — remoção na subetapa correspondente |
| Painel leads / Gemini / localStorage fora do fluxo público | Aprovado | Ainda presentes — alteração na subetapa correspondente |

A aplicação das decisões no código exige `APROVADO` das subetapas de implementação da Etapa 2 (a partir da 2B).
