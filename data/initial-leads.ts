import type { Lead } from "@/types/lead";

/** Factory — timestamps relative to call time (same behavior as original seed). */
export function createInitialLeads(): Lead[] {
  return [
    {
      id: "lead-1",
      name: "Dr. Rafael Martins",
      email: "rafael.martins@clinicaorto.com.br",
      phone: "(11) 98822-1144",
      company: "Clínica OrtoMartins",
      need: "Preciso de um sistema para automatizar meus agendamentos odontológicos e mandar mensagens via WhatsApp para diminuir as faltas dos meus pacientes.",
      createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
      status: "Pendente",
    },
    {
      id: "lead-2",
      name: "Mariana Costa",
      email: "mariana.costa@costasociedade.com.br",
      phone: "(21) 97711-2233",
      company: "Costa & Advogados Associados",
      need: "Atualmente controlamos os prazos de mais de 500 processos em planilhas compartilhadas. Vira e mexe alguém altera uma fórmula por engano e perdemos referências de prazos importantes. Queremos um sistema interno seguro para controlar prazos e tarefas de forma automática.",
      createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
      status: "Analisado",
      aiAnalysis: {
        priority: "Alta",
        category: "Sob Medida",
        summary: "O cliente gerencia 500+ processos jurídicos críticos de forma insegura via planilhas manuais compartilhadas e necessita de um sistema web centralizado seguro.",
        suggestedApproach: "- Banco de dados relacional para processos jurídicos\n- Alertas automáticos por e-mail e SMS para advogados\n- Painel Kanban de andamento processual\n- Controle de permissões (ACL) robusto",
        draftEmail: "Olá Mariana,\n\nAgradecemos muito pelo contato.\n\nEntendemos perfeitamente o perigo de gerenciar mais de 500 processos ativos em planilhas compartilhadas. O risco de erro humano ou perda de prazos é crítico para a saúde financeira e reputação de um escritório advocatício.\n\nNa Grupo Scorp, desenvolvemos sistemas jurídicos customizados que garantem 100% de precisão. Gostaria de agendar uma breve conversa de 15 minutos nesta semana para apresentar nosso modelo de automação de prazos e fluxo de trabalho seguro?\n\nQual o melhor dia para você?\n\nAtenciosamente,\nEquipe Grupo Scorp",
      },
    },
  ];
}

export const LEADS_STORAGE_KEY = "scorp_leads";
