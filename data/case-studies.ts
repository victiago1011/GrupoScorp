import type { CaseStudy } from "@/types/case-study";

export const caseStudies: CaseStudy[] = [
  {
    id: "healthhub",
    title: "HealthHub: Gestão para Clínicas",
    subtitle: "Redução de 30% em faltas com agendamento inteligente e lembretes automáticos.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAchJovxwpzalSBPWcfSrRVVL7XTJd3IME8zkOyyRQ58w4d6vZUX24wjYz-m71payduhnoCkDvbq8VOzi2jZQpIDkU75NPZZZsaCJLV2sNGc2IDavQl3C6lEIACMlitG426znxaWcbRKjB0UtQ_LfMoi3XQ3ECrsVK17Fp_Wy7Sc7OlVLAlIeNefCbykOqQeEy3m6qScj4YrvvTyzWLB7LdopLLqF_QqpSxjZUJ0tBbnGLPsQ4kMdsk",
    alt: "HealthHub Clinica Interface",
    badge: "HealthTech & WhatsApp",
    problems: [
      "Faltas de pacientes de até 40% causadas por esquecimento.",
      "Processo de agendamento manual que ocupava 3 horas diárias da secretária.",
      "Histórico clínico descentralizado e difícil de consultar rapidamente."
    ],
    solution: "Desenvolvimento de um sistema web integrado com disparo inteligente de mensagens via WhatsApp API. A plataforma consolida dados de pacientes e envia lembretes automáticos com botões de confirmação direta.",
    metrics: "30% de redução na taxa de não-comparecimento e liberação de 15+ horas de trabalho manual por semana.",
    detail: "O HealthHub unificou a jornada do paciente desde a captação até o pós-consulta, permitindo aos médicos visualizarem anamneses dinâmicas de forma ágil."
  },
  {
    id: "lexflow",
    title: "LexFlow: Automação Jurídica",
    subtitle: "Controle de prazos e gestão de processos centralizada para escritórios de advocacia.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwE3sQLlHXIwH0VGY5MSOgPYuE37UYXFUdHJVFRIm9BSTNdPwCv-AMWmT5ZPV387NC4mBf_k4HqEs6PEgztFuau3ebVNwcFFZE5P4LsY7jJ6v0kdvBOqTzxwTZL6o5qafZcVy58nFYiRrh2PkNImg9r18l8UHsy6EXd76pA_ep2fiOoInaAUniKlw6oY8OcI2iI4pD3-ariDQEPa4P-0GhStzB2B__8TmwC4OLtEz8ZN_HEZ8kaULx",
    alt: "LexFlow Legal Interface",
    badge: "LegalOps & CRM",
    problems: [
      "Risco de perda de prazos judiciais devido a controles manuais em planilhas.",
      "Falta de visibilidade do andamento de contratos e petições.",
      "Muito tempo gasto elaborando relatórios de status manuais para clientes."
    ],
    solution: "Criação de um CRM e gerenciador de processos jurídicos customizado com um funil visual de contratos, alertas automáticos sincronizados por calendário e portal do cliente para acompanhamento em tempo real.",
    metrics: "100% dos prazos cumpridos rigorosamente e economia média de 45 minutos por análise de contrato.",
    detail: "O LexFlow automatizou as notificações por e-mail e permitiu a geração de relatórios de progresso em formato PDF com um único clique."
  },
  {
    id: "imobiview",
    title: "ImobiView: Painel de Vendas",
    subtitle: "Visibilidade total do funil de vendas e performance de corretores em tempo real.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBURr3EOurSv5PIkG1FwdpHS34NQgmcI3vgaY0i917poRjAeKr0MmeQz-GUGRX1cuuctUganvmEesd-OP6Ph1mQKn0Q0gi65SH4QyTobCvRxHCdsAZOAYYhql8jUTzvPs4gLGxAv2WagMAadPwUgbykVFbsH6ZDIU5BFtCmXv5LXuJNjJTMLqKosH1HuYrkZzYGG_2UhZ-WWEq3DqNG1KmzXe3OhgCJnOjz1ZWuSDDa_ymdDyWvzCot",
    alt: "ImobiView Real Estate Interface",
    badge: "BI & Dashboard",
    problems: [
      "Dificuldade de mensurar a performance de venda dos corretores.",
      "Decisões baseadas em intuição, sem dados precisos de CAC ou ROI de anúncios.",
      "Lentidão no cálculo de comissões e fechamento mensal de metas."
    ],
    solution: "Construção de um Dashboard corporativo em tempo real alimentado por conexões diretas via APIs de imobiliárias e ferramentas de anúncio, apresentando gráficos analíticos interativos de funil de vendas.",
    metrics: "22% de aumento na conversão de leads e visibilidade instantânea dos principais KPIs comerciais da empresa.",
    detail: "O ImobiView consolidou o funil de vendas, revelando gargalos imediatos na fase de visitas presenciais e permitindo correções rápidas de rota pelo time de gestão."
  }
];
