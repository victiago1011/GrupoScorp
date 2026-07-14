export interface LeadAiAnalysis {
  priority: string;
  category: string;
  summary: string;
  suggestedApproach: string;
  draftEmail: string;
}

export type LeadStatus = "Pendente" | "Analisado" | "Contatado" | "Fechado";

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  need: string;
  createdAt: string;
  status: LeadStatus;
  aiAnalysis?: LeadAiAnalysis;
}
