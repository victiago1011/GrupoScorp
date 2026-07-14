import type { ServiceOffering } from "@/types/services";

export const homeServices: ServiceOffering[] = [
  {
    id: "sites",
    title: "Sites profissionais",
    description:
      "Sites modernos, rápidos e adaptados ao celular para apresentar sua empresa, gerar confiança e facilitar o contato com novos clientes.",
    deliveries: [
      "Sites institucionais e landing pages.",
      "Páginas comerciais e portfólios.",
      "Integração com WhatsApp e formulários.",
      "SEO técnico básico e analytics quando necessário.",
    ],
    prominence: "primary",
  },
  {
    id: "paineis",
    title: "Painéis de gestão e indicadores",
    description:
      "Reúna vendas, faturamento, metas e indicadores em um só lugar para acompanhar sua empresa com mais clareza.",
    deliveries: [
      "Indicadores financeiros e comerciais.",
      "Acompanhamento de vendas, faturamento e metas.",
      "Consolidação de planilhas e relatórios.",
      "Power BI quando adequado ao projeto.",
    ],
    prominence: "primary",
  },
  {
    id: "personalizadas",
    title: "Soluções personalizadas",
    description:
      "Quando o negócio precisa de algo além de um site ou painel, desenvolvemos funcionalidades específicas para simplificar processos.",
    deliveries: [
      "Formulários inteligentes.",
      "Painéis administrativos.",
      "Áreas restritas e integrações.",
      "Sistemas internos simples e automações pontuais.",
    ],
    prominence: "secondary",
  },
];
