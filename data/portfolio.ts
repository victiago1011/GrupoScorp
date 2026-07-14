import type { FeaturedProject, SolutionExample } from "@/types/portfolio";

export const featuredProject: FeaturedProject = {
  id: "corrente-do-bem",
  name: "Corrente do Bem",
  label: "Projeto real",
  description:
    "Plataforma digital desenvolvida para reunir conteúdo, oportunidades, notícias, vagas e talentos em um único ambiente. O projeto também conta com área administrativa, gestão de conteúdo e ferramentas de comunicação por e-mail.",
  deliveries: [
    "Site institucional responsivo",
    "Portal de oportunidades, notícias, vagas e talentos",
    "Área administrativa com gestão de conteúdo",
    "Autenticação e cadastro de informações",
    "Campanhas de e-mail e gestão de newsletter",
    "Formulário de contato por e-mail",
  ],
  techNotes: [
    "Banco de dados Supabase",
    "Integração com Resend para envio de e-mails",
    "Deploy na Vercel com domínio próprio",
  ],
};

export const solutionExamples: SolutionExample[] = [
  {
    id: "painel-financeiro",
    title: "Painel de Gestão Financeira",
    label: "Exemplo de Solução",
    description:
      "Exemplo de como um painel pode reunir indicadores financeiros em um só lugar — para acompanhar receitas, despesas e metas com mais clareza.",
    points: [
      "Indicadores financeiros em uma visão única",
      "Acompanhamento de metas e resultados",
      "Organização de informações que hoje ficam em planilhas",
    ],
  },
  {
    id: "site-servicos",
    title: "Site Profissional para Empresa de Serviços",
    label: "Exemplo de Solução",
    description:
      "Exemplo de site institucional claro, feito para apresentar serviços, transmitir confiança e facilitar o primeiro contato com novos clientes.",
    points: [
      "Apresentação clara da empresa e dos serviços",
      "Layout adaptado ao celular",
      "Caminhos simples para contato e proposta",
    ],
  },
];
