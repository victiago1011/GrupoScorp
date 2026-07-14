"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  AlertCircle,
  ArrowRight,
  Building,
  CheckCircle2,
  Inbox,
  Mail,
  Phone,
  RefreshCw,
  Sparkles,
  Trash2,
  User,
} from "lucide-react";
import { createInitialLeads, LEADS_STORAGE_KEY } from "@/data/initial-leads";
import type { Lead } from "@/types/lead";

export function ContactAndLeadsSection() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formCompany, setFormCompany] = useState("");
  const [formNeed, setFormNeed] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLeadForAnalysis, setSelectedLeadForAnalysis] = useState<Lead | null>(null);
  const [analyzingLeadId, setAnalyzingLeadId] = useState<string | null>(null);
  const [adminPanelOpen, setAdminPanelOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LEADS_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setTimeout(() => {
          setLeads(parsed);
        }, 0);
      } catch (e) {
        console.error(e);
      }
    } else {
      const initialLeads = createInitialLeads();
      setTimeout(() => {
        setLeads(initialLeads);
        localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(initialLeads));
      }, 0);
    }
  }, []);

  const saveLeads = (updatedLeads: Lead[]) => {
    setLeads(updatedLeads);
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updatedLeads));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formNeed.trim()) {
      setFormError("Por favor, preencha os campos obrigatórios (Nome e Sua Necessidade).");
      return;
    }

    setFormSubmitting(true);
    setFormError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const newLead: Lead = {
        id: "lead-" + Date.now(),
        name: formName,
        email: formEmail,
        phone: formPhone,
        company: formCompany,
        need: formNeed,
        createdAt: new Date().toISOString(),
        status: "Pendente",
      };

      const updatedLeads = [newLead, ...leads];
      saveLeads(updatedLeads);
      setFormSuccess(true);
      setFormName("");
      setFormEmail("");
      setFormPhone("");
      setFormCompany("");
      setFormNeed("");
    } catch (err) {
      setFormError("Erro ao enviar sua mensagem. Tente novamente mais tarde.");
    } finally {
      setFormSubmitting(false);
    }
  };

  const handleAnalyzeLead = async (lead: Lead) => {
    setAnalyzingLeadId(lead.id);
    try {
      const response = await fetch("/api/leads/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          company: lead.company,
          need: lead.need,
        }),
      });

      if (!response.ok) {
        throw new Error("Resposta inválida da API de IA.");
      }

      const analysisData = await response.json();

      const updatedLeads = leads.map((l) => {
        if (l.id === lead.id) {
          return {
            ...l,
            status: "Analisado" as const,
            aiAnalysis: analysisData,
          };
        }
        return l;
      });

      saveLeads(updatedLeads);

      const foundLead = updatedLeads.find((l) => l.id === lead.id);
      if (foundLead) {
        setSelectedLeadForAnalysis(foundLead);
      }
    } catch (err: any) {
      alert("Ocorreu um erro ao analisar o lead com o Gemini. Detalhes: " + err.message);
    } finally {
      setAnalyzingLeadId(null);
    }
  };

  const handleDeleteLead = (id: string) => {
    if (confirm("Deseja realmente remover este lead da lista?")) {
      const filtered = leads.filter((l) => l.id !== id);
      saveLeads(filtered);
      if (selectedLeadForAnalysis?.id === id) {
        setSelectedLeadForAnalysis(null);
      }
    }
  };

  const handleUpdateStatus = (id: string, newStatus: Lead["status"]) => {
    const updated = leads.map((l) => {
      if (l.id === id) {
        return { ...l, status: newStatus };
      }
      return l;
    });
    saveLeads(updated);
    if (selectedLeadForAnalysis?.id === id) {
      setSelectedLeadForAnalysis({ ...selectedLeadForAnalysis, status: newStatus });
    }
  };

  return (
    <>
      <section className="py-24 px-6 bg-surface-container-low border-y border-outline-variant/30" id="contato">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-scorp-navy leading-tight">
                Pronto para dar o próximo passo?
              </h2>
              <p className="font-sans text-base text-on-surface-muted leading-relaxed font-light">
                Não acreditamos em soluções genéricas enlatadas. Vamos conversar sobre os seus desafios operacionais específicos e desenhar como nossa tecnologia pode resolvê-los de forma definitiva.
              </p>
            </div>

            <div className="space-y-5 pt-8 lg:pt-0">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-outline-variant/30 text-scorp-navy shadow-sm">
                  <Mail className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-on-surface-muted">E-mail de Contato</p>
                  <p className="font-sans text-sm font-bold text-scorp-navy">contato@gruposcorp.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-outline-variant/30 text-scorp-navy shadow-sm">
                  <Phone className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-on-surface-muted">WhatsApp Comercial</p>
                  <p className="font-sans text-sm font-bold text-scorp-navy">+55 (11) 99999-9999</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-outline-variant/20">
            {formSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 mb-2 border border-emerald-100">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-bold text-scorp-navy">Sua mensagem foi enviada!</h3>
                <p className="font-sans text-sm text-on-surface-muted max-w-md mx-auto leading-relaxed">
                  Agradecemos pelo contato. Nossa equipe técnica de negócios irá analisar seus requisitos detalhadamente e responderá em seu e-mail corporativo em até 24 horas úteis.
                </p>

                <div className="pt-4 space-y-2">
                  <p className="text-[11px] text-scorp-navy bg-scorp-navy/5 px-3 py-1.5 rounded-lg inline-block font-medium">
                    💡 Você pode visualizar e testar a qualificação por IA deste lead no painel administrativo abaixo!
                  </p>
                  <div>
                    <button
                      onClick={() => {
                        setFormSuccess(false);
                        setAdminPanelOpen(true);
                      }}
                      className="text-xs text-scorp-navy underline font-bold hover:text-scorp-navy/80"
                    >
                      Abrir Inbox Administrativo
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => setFormSuccess(false)}
                  className="mt-6 border border-outline-variant px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-surface-container transition-colors"
                >
                  Enviar Nova Mensagem
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-5">
                {formError && (
                  <div className="bg-rose-50 border border-rose-100 p-3.5 rounded-lg text-xs text-rose-600 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="font-sans text-[11px] font-bold uppercase tracking-wider text-on-surface-muted block">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-4.5 h-4.5 text-on-surface-muted/60" />
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="Ex: Seu nome"
                        className="w-full bg-surface-container-low border border-surface-container focus:border-scorp-navy/50 focus:ring-1 focus:ring-scorp-navy/20 outline-none rounded-lg p-2.5 pl-10 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-sans text-[11px] font-bold uppercase tracking-wider text-on-surface-muted block">
                      E-mail Corporativo
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4.5 h-4.5 text-on-surface-muted/60" />
                      <input
                        type="email"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="Ex: seu@empresa.com"
                        className="w-full bg-surface-container-low border border-surface-container focus:border-scorp-navy/50 focus:ring-1 focus:ring-scorp-navy/20 outline-none rounded-lg p-2.5 pl-10 text-sm transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="font-sans text-[11px] font-bold uppercase tracking-wider text-on-surface-muted block">
                      Telefone de Contato
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-4.5 h-4.5 text-on-surface-muted/60" />
                      <input
                        type="tel"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="Ex: (00) 00000-0000"
                        className="w-full bg-surface-container-low border border-surface-container focus:border-scorp-navy/50 focus:ring-1 focus:ring-scorp-navy/20 outline-none rounded-lg p-2.5 pl-10 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-sans text-[11px] font-bold uppercase tracking-wider text-on-surface-muted block">
                      Nome da Empresa
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 w-4.5 h-4.5 text-on-surface-muted/60" />
                      <input
                        type="text"
                        value={formCompany}
                        onChange={(e) => setFormCompany(e.target.value)}
                        placeholder="Ex: Nome da sua empresa"
                        className="w-full bg-surface-container-low border border-surface-container focus:border-scorp-navy/50 focus:ring-1 focus:ring-scorp-navy/20 outline-none rounded-lg p-2.5 pl-10 text-sm transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-sans text-[11px] font-bold uppercase tracking-wider text-on-surface-muted block">
                    Qual a sua necessidade técnica? *
                  </label>
                  <textarea
                    required
                    value={formNeed}
                    onChange={(e) => setFormNeed(e.target.value)}
                    placeholder="Descreva brevemente o que você busca (Ex: site, integrações de WhatsApp, planilhas inteligentes, etc)..."
                    rows={4}
                    className="w-full bg-surface-container-low border border-surface-container focus:border-scorp-navy/50 focus:ring-1 focus:ring-scorp-navy/20 outline-none rounded-lg p-2.5 text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full bg-scorp-navy text-white py-4 rounded-xl font-sans text-xs font-bold uppercase tracking-wider hover:bg-scorp-navy/95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow"
                >
                  {formSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Enviando Dados...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar Mensagem</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-surface-container" id="admin-leads">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-scorp-navy">
                <Inbox className="w-5 h-5" />
                <h3 className="font-display text-lg font-bold">Painel de Leads Recebidos (Demonstração IA)</h3>
              </div>
              <p className="font-sans text-xs text-on-surface-muted">
                Simule o gerenciamento dos contatos recebidos e qualifique-os instantaneamente usando a API oficial do Gemini.
              </p>
            </div>

            <button
              onClick={() => setAdminPanelOpen(!adminPanelOpen)}
              className="bg-scorp-navy/5 text-scorp-navy hover:bg-scorp-navy/10 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors"
            >
              <span>{adminPanelOpen ? "Ocultar Painel" : "Mostrar Leads recebidos"}</span>
              <span className="bg-scorp-navy text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold font-mono">
                {leads.length}
              </span>
            </button>
          </div>

          {adminPanelOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-surface-container pt-8"
            >
              <div className="lg:col-span-5 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-on-surface-muted flex items-center justify-between">
                  <span>Fila de Mensagens</span>
                  <span className="font-mono text-[10px] bg-slate-100 text-on-surface-muted px-2 py-0.5 rounded">
                    Local Storage
                  </span>
                </h4>

                {leads.length === 0 ? (
                  <div className="p-8 border border-dashed border-surface-container rounded-xl text-center text-xs text-on-surface-muted space-y-2">
                    <Inbox className="w-8 h-8 mx-auto text-on-surface-muted/50" />
                    <p>Nenhum lead cadastrado ainda. Envie uma mensagem no formulário acima!</p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-[450px] overflow-y-auto pr-2">
                    {leads.map((l) => (
                      <div
                        key={l.id}
                        onClick={() => setSelectedLeadForAnalysis(l)}
                        className={`p-4 rounded-xl border cursor-pointer text-left transition-all ${
                          selectedLeadForAnalysis?.id === l.id
                            ? "bg-scorp-navy/5 border-scorp-navy/40 shadow-sm"
                            : "bg-surface-container-low/50 border-surface-container hover:bg-surface-container-low"
                        }`}
                      >
                        <div className="flex justify-between items-start gap-2 mb-2">
                          <div>
                            <p className="font-sans text-xs font-bold text-scorp-navy">{l.name}</p>
                            {l.company && <p className="text-[10px] text-on-surface-muted font-medium">{l.company}</p>}
                          </div>

                          <span
                            className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                              l.status === "Fechado"
                                ? "bg-emerald-500/20 text-emerald-800"
                                : l.status === "Analisado"
                                  ? "bg-indigo-500/20 text-indigo-800"
                                  : l.status === "Contatado"
                                    ? "bg-amber-500/20 text-amber-800"
                                    : "bg-slate-300/30 text-slate-800"
                            }`}
                          >
                            {l.status}
                          </span>
                        </div>

                        <p className="text-[11px] text-on-surface-muted line-clamp-2 leading-relaxed">{l.need}</p>

                        <div className="flex justify-between items-center mt-3 pt-2.5 border-t border-surface-container/50 text-[10px] text-on-surface-muted font-light">
                          <span>{new Date(l.createdAt).toLocaleDateString("pt-BR")}</span>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteLead(l.id);
                              }}
                              className="text-rose-600 hover:text-rose-800 p-1"
                              title="Excluir Lead"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAnalyzeLead(l);
                              }}
                              disabled={analyzingLeadId === l.id}
                              className="text-scorp-navy hover:text-scorp-navy/80 p-1 font-bold flex items-center gap-1 bg-white border border-surface-container px-2 py-0.5 rounded shadow-xs"
                            >
                              {analyzingLeadId === l.id ? (
                                <RefreshCw className="w-3 h-3 animate-spin text-scorp-navy" />
                              ) : (
                                <Sparkles className="w-3 h-3 text-scorp-navy" />
                              )}
                              <span>Análise IA</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="lg:col-span-7 bg-slate-50 border border-surface-container rounded-2xl p-6 sm:p-8 min-h-[350px] flex flex-col justify-between">
                {selectedLeadForAnalysis ? (
                  <div className="space-y-6">
                    <div className="flex justify-between items-start gap-4 pb-4 border-b border-surface-container">
                      <div>
                        <span className="text-[9px] uppercase tracking-wider bg-scorp-navy/10 text-scorp-navy font-bold px-2 py-0.5 rounded-md">
                          Lead Selecionado
                        </span>
                        <h4 className="font-display text-base font-bold text-scorp-navy mt-1">
                          {selectedLeadForAnalysis.name}
                        </h4>
                        <p className="text-xs text-on-surface-muted font-light">
                          {selectedLeadForAnalysis.email || "Sem e-mail"} • {selectedLeadForAnalysis.phone || "Sem telefone"}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <label className="text-[10px] font-bold text-on-surface-muted">Status:</label>
                        <select
                          value={selectedLeadForAnalysis.status}
                          onChange={(e) =>
                            handleUpdateStatus(selectedLeadForAnalysis.id, e.target.value as Lead["status"])
                          }
                          className="bg-white border border-surface-container rounded text-xs p-1 focus:ring-1 focus:ring-scorp-navy outline-none"
                        >
                          <option value="Pendente">Pendente</option>
                          <option value="Analisado">Analisado</option>
                          <option value="Contatado">Contatado</option>
                          <option value="Fechado">Fechado</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1 bg-white p-4 rounded-xl border border-surface-container shadow-xs">
                      <span className="text-[10px] text-on-surface-muted font-bold uppercase tracking-wider block">
                        Necessidade descrita pelo cliente:
                      </span>
                      <p className="font-sans text-xs text-on-surface-muted leading-relaxed font-light">
                        &ldquo;{selectedLeadForAnalysis.need}&rdquo;
                      </p>
                    </div>

                    {selectedLeadForAnalysis.aiAnalysis ? (
                      <div className="space-y-5 pt-2">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white p-3 rounded-lg border border-surface-container shadow-xs">
                            <span className="text-[10px] text-on-surface-muted font-bold uppercase tracking-wider block">
                              Pilar de Atuação
                            </span>
                            <span className="text-xs font-bold text-scorp-navy">
                              {selectedLeadForAnalysis.aiAnalysis.category}
                            </span>
                          </div>

                          <div className="bg-white p-3 rounded-lg border border-surface-container shadow-xs">
                            <span className="text-[10px] text-on-surface-muted font-bold uppercase tracking-wider block">
                              Prioridade Comercial
                            </span>
                            <span
                              className={`text-xs font-bold ${
                                selectedLeadForAnalysis.aiAnalysis.priority === "Alta"
                                  ? "text-rose-600"
                                  : selectedLeadForAnalysis.aiAnalysis.priority === "Média"
                                    ? "text-amber-600"
                                    : "text-slate-600"
                              }`}
                            >
                              {selectedLeadForAnalysis.aiAnalysis.priority}
                            </span>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-surface-container shadow-xs space-y-1.5">
                          <span className="text-[10px] text-on-surface-muted font-bold uppercase tracking-wider block flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5 text-scorp-navy" />
                            <span>Resumo Diagnóstico por IA:</span>
                          </span>
                          <p className="font-sans text-xs text-on-surface-muted leading-relaxed font-light">
                            {selectedLeadForAnalysis.aiAnalysis.summary}
                          </p>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-surface-container shadow-xs space-y-1.5">
                          <span className="text-[10px] text-on-surface-muted font-bold uppercase tracking-wider block">
                            Abordagem Técnica Sugerida:
                          </span>
                          <p className="font-sans text-xs text-on-surface-muted leading-relaxed font-light whitespace-pre-line">
                            {selectedLeadForAnalysis.aiAnalysis.suggestedApproach}
                          </p>
                        </div>

                        <div className="bg-white p-4 rounded-xl border border-surface-container shadow-xs space-y-3">
                          <div className="flex justify-between items-center border-b border-surface-container pb-2">
                            <span className="text-[10px] text-on-surface-muted font-bold uppercase tracking-wider block">
                              Sugestão de Resposta Inicial (E-mail):
                            </span>
                            <button
                              onClick={() => {
                                if (selectedLeadForAnalysis.aiAnalysis) {
                                  navigator.clipboard.writeText(selectedLeadForAnalysis.aiAnalysis.draftEmail);
                                  alert("E-mail copiado para a área de transferência!");
                                }
                              }}
                              className="text-[10px] font-bold text-scorp-navy hover:underline"
                            >
                              Copiar Rascunho
                            </button>
                          </div>
                          <p className="font-sans text-xs text-on-surface-muted leading-relaxed font-light whitespace-pre-line bg-slate-50/50 p-3 rounded-lg border border-slate-100">
                            {selectedLeadForAnalysis.aiAnalysis.draftEmail}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="py-12 text-center space-y-4">
                        <Sparkles className="w-8 h-8 text-scorp-navy/40 mx-auto animate-pulse" />
                        <div className="space-y-1">
                          <p className="font-sans text-xs font-semibold text-scorp-navy">
                            Este lead ainda não foi qualificado com inteligência artificial.
                          </p>
                          <p className="text-[11px] text-on-surface-muted">
                            Clique no botão abaixo para chamar o Gemini e receber o relatório completo.
                          </p>
                        </div>

                        <button
                          onClick={() => handleAnalyzeLead(selectedLeadForAnalysis)}
                          disabled={analyzingLeadId === selectedLeadForAnalysis.id}
                          className="bg-scorp-navy hover:bg-scorp-navy/95 text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 mx-auto transition-all shadow"
                        >
                          {analyzingLeadId === selectedLeadForAnalysis.id ? (
                            <>
                              <RefreshCw className="w-4 h-4 animate-spin" />
                              <span>Processando Análise...</span>
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-4 h-4" />
                              <span>Qualificar com Gemini IA</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-center text-on-surface-muted/60 space-y-3">
                    <Inbox className="w-12 h-12 stroke-1" />
                    <div className="space-y-1">
                      <p className="font-sans text-xs font-semibold text-scorp-navy">Selecione um lead na fila</p>
                      <p className="text-[11px] text-on-surface-muted">
                        Clique em qualquer contato da lista para ver os detalhes, alterar status ou qualificar com IA.
                      </p>
                    </div>
                  </div>
                )}

                <div className="pt-6 border-t border-surface-container text-[10px] text-on-surface-muted text-center leading-relaxed">
                  ⚙️ <strong>Dica de Desenvolvimento:</strong> Ao preencher o formulário de contato acima, um novo lead é
                  inserido instantaneamente nesta fila para testes de qualificação.
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
