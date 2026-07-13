"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { 
  Globe, 
  Cpu, 
  Layers, 
  Database,
  ArrowRight, 
  Check, 
  Mail, 
  Phone, 
  Building, 
  ChevronRight, 
  Menu, 
  X, 
  Sparkles, 
  Calculator, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Eye, 
  RefreshCw, 
  Trash2, 
  FileText, 
  CheckCircle2, 
  Inbox,
  User,
  AlertCircle
} from "lucide-react";

// Structure of Case Study Data
interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  alt: string;
  imageUrl: string;
  problems: string[];
  solution: string;
  metrics: string;
  detail: string;
  badge: string;
}

// Structure of Lead data saved locally
interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  need: string;
  createdAt: string;
  status: "Pendente" | "Analisado" | "Contatado" | "Fechado";
  aiAnalysis?: {
    priority: string;
    category: string;
    summary: string;
    suggestedApproach: string;
    draftEmail: string;
  };
}

export default function Home() {
  // Mobile menu open state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Header scroll detection
  const [scrolled, setScrolled] = useState(false);

  // ROI Calculator state
  const [selectedSolutionType, setSelectedSolutionType] = useState<"web" | "bi" | "automation" | "custom">("automation");
  const [hoursWasted, setHoursWasted] = useState(40);
  const [hourlyCost, setHourlyCost] = useState(50);

  // Case Study modal open state
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  // Contact form inputs
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formCompany, setFormCompany] = useState("");
  const [formNeed, setFormNeed] = useState("");
  
  // Form status state
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  // Leads list state
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLeadForAnalysis, setSelectedLeadForAnalysis] = useState<Lead | null>(null);
  const [analyzingLeadId, setAnalyzingLeadId] = useState<string | null>(null);
  const [adminPanelOpen, setAdminPanelOpen] = useState(false);

  // Pre-seeded case studies
  const caseStudies: CaseStudy[] = [
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

  // Seed with realistic data if localStorage is empty
  useEffect(() => {
    const stored = localStorage.getItem("scorp_leads");
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
      const initialLeads: Lead[] = [
        {
          id: "lead-1",
          name: "Dr. Rafael Martins",
          email: "rafael.martins@clinicaorto.com.br",
          phone: "(11) 98822-1144",
          company: "Clínica OrtoMartins",
          need: "Preciso de um sistema para automatizar meus agendamentos odontológicos e mandar mensagens via WhatsApp para diminuir as faltas dos meus pacientes.",
          createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
          status: "Pendente"
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
            draftEmail: "Olá Mariana,\n\nAgradecemos muito pelo contato.\n\nEntendemos perfeitamente o perigo de gerenciar mais de 500 processos ativos em planilhas compartilhadas. O risco de erro humano ou perda de prazos é crítico para a saúde financeira e reputação de um escritório advocatício.\n\nNa Grupo Scorp, desenvolvemos sistemas jurídicos customizados que garantem 100% de precisão. Gostaria de agendar uma breve conversa de 15 minutos nesta semana para apresentar nosso modelo de automação de prazos e fluxo de trabalho seguro?\n\nQual o melhor dia para você?\n\nAtenciosamente,\nEquipe Grupo Scorp"
          }
        }
      ];
      setTimeout(() => {
        setLeads(initialLeads);
        localStorage.setItem("scorp_leads", JSON.stringify(initialLeads));
      }, 0);
    }

    // Scroll listener
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Save leads to local storage
  const saveLeads = (updatedLeads: Lead[]) => {
    setLeads(updatedLeads);
    localStorage.setItem("scorp_leads", JSON.stringify(updatedLeads));
  };

  // Submit Contact Form
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formNeed.trim()) {
      setFormError("Por favor, preencha os campos obrigatórios (Nome e Sua Necessidade).");
      return;
    }

    setFormSubmitting(true);
    setFormError("");

    try {
      // Simulate submission network lag
      await new Promise(resolve => setTimeout(resolve, 1200));

      const newLead: Lead = {
        id: "lead-" + Date.now(),
        name: formName,
        email: formEmail,
        phone: formPhone,
        company: formCompany,
        need: formNeed,
        createdAt: new Date().toISOString(),
        status: "Pendente"
      };

      const updatedLeads = [newLead, ...leads];
      saveLeads(updatedLeads);

      setFormSuccess(true);
      
      // Clear inputs
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

  // Call server-side Gemini API to analyze the lead
  const handleAnalyzeLead = async (lead: Lead) => {
    setAnalyzingLeadId(lead.id);
    try {
      const response = await fetch("/api/leads/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          company: lead.company,
          need: lead.need
        })
      });

      if (!response.ok) {
        throw new Error("Resposta inválida da API de IA.");
      }

      const analysisData = await response.json();

      const updatedLeads = leads.map(l => {
        if (l.id === lead.id) {
          return {
            ...l,
            status: "Analisado" as const,
            aiAnalysis: analysisData
          };
        }
        return l;
      });

      saveLeads(updatedLeads);
      
      // Select the lead for details
      const foundLead = updatedLeads.find(l => l.id === lead.id);
      if (foundLead) {
        setSelectedLeadForAnalysis(foundLead);
      }
    } catch (err: any) {
      alert("Ocorreu um erro ao analisar o lead com o Gemini. Detalhes: " + err.message);
    } finally {
      setAnalyzingLeadId(null);
    }
  };

  // Delete Lead from Inbox
  const handleDeleteLead = (id: string) => {
    if (confirm("Deseja realmente remover este lead da lista?")) {
      const filtered = leads.filter(l => l.id !== id);
      saveLeads(filtered);
      if (selectedLeadForAnalysis?.id === id) {
        setSelectedLeadForAnalysis(null);
      }
    }
  };

  // Update Lead Status
  const handleUpdateStatus = (id: string, newStatus: Lead["status"]) => {
    const updated = leads.map(l => {
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

  // ROI Calculator estimations
  const calculateROI = () => {
    let projectCost = 11500;
    if (selectedSolutionType === "web") projectCost = 6500;
    if (selectedSolutionType === "bi") projectCost = 14500;
    if (selectedSolutionType === "custom") projectCost = 28000;

    // Estimate efficiency factor (e.g. automated workflows recover 75% of wasted manual hours)
    const hoursSaved = Math.round(hoursWasted * 0.75);
    const monthlySavings = hoursSaved * hourlyCost;
    const annualSavings = monthlySavings * 12;

    // Avoid division by zero
    const paybackMonths = monthlySavings > 0 ? (projectCost / monthlySavings).toFixed(1) : "0.0";
    const ROI = projectCost > 0 ? Math.round(((annualSavings * 2 - projectCost) / projectCost) * 100) : 0;

    return {
      projectCost,
      hoursSaved,
      monthlySavings,
      annualSavings,
      paybackMonths,
      ROI
    };
  };

  const { projectCost, hoursSaved, monthlySavings, annualSavings, paybackMonths, ROI } = calculateROI();

  return (
    <div className="relative min-h-screen bg-background text-on-surface flex flex-col">
      {/* TopAppBar */}
      <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? "bg-white/80 border-b border-surface-container shadow-xs backdrop-blur-md" 
          : "bg-white/30 border-b border-surface-container/30 backdrop-blur-md"
      }`}>
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
          <a href="#" className="flex items-center gap-3 group">
            <span className="material-symbols-outlined text-scorp-navy text-2xl group-hover:scale-110 transition-transform flex items-center justify-center bg-scorp-navy/5 p-2 rounded-lg" data-icon="signal_cellular_alt">
              <TrendingUp className="w-6 h-6 text-scorp-navy" />
            </span>
            <span className="font-display text-xl md:text-2xl font-bold tracking-tighter text-scorp-navy">
              Grupo Scorp
            </span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a className="font-sans text-xs font-bold uppercase tracking-wider text-scorp-navy hover:text-scorp-navy/80 transition-colors" href="#">Home</a>
            <a className="font-sans text-xs font-bold uppercase tracking-wider text-on-surface-muted hover:text-scorp-navy transition-colors" href="#solucoes">Soluções</a>
            <a className="font-sans text-xs font-bold uppercase tracking-wider text-on-surface-muted hover:text-scorp-navy transition-colors" href="#calculadora">Simulador de ROI</a>
            <a className="font-sans text-xs font-bold uppercase tracking-wider text-on-surface-muted hover:text-scorp-navy transition-colors" href="#processo">Processo</a>
            <a className="font-sans text-xs font-bold uppercase tracking-wider text-on-surface-muted hover:text-scorp-navy transition-colors" href="#cases">Cases</a>
            <a className="bg-scorp-navy text-white px-6 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider hover:scale-105 hover:bg-scorp-navy/90 transition-all shadow-sm" href="#contato">Fale Conosco</a>
          </nav>
          
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-scorp-navy p-2 hover:bg-scorp-navy/5 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-50 md:hidden"
            />
            {/* Drawer */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-2xl z-50 md:hidden p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center pb-6 border-b border-surface-container">
                  <span className="font-display text-lg font-bold text-scorp-navy">Menu</span>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 hover:bg-surface-container rounded-lg transition-colors text-on-surface-muted"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <nav className="flex flex-col gap-5 py-8">
                  <a 
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-sans text-sm font-semibold text-scorp-navy flex items-center justify-between" 
                    href="#"
                  >
                    <span>Home</span>
                    <ChevronRight className="w-4 h-4 text-scorp-navy/40" />
                  </a>
                  <a 
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-sans text-sm font-semibold text-on-surface-muted hover:text-scorp-navy flex items-center justify-between" 
                    href="#solucoes"
                  >
                    <span>Soluções</span>
                    <ChevronRight className="w-4 h-4 text-scorp-navy/40" />
                  </a>
                  <a 
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-sans text-sm font-semibold text-on-surface-muted hover:text-scorp-navy flex items-center justify-between" 
                    href="#calculadora"
                  >
                    <span>Simulador de ROI</span>
                    <ChevronRight className="w-4 h-4 text-scorp-navy/40" />
                  </a>
                  <a 
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-sans text-sm font-semibold text-on-surface-muted hover:text-scorp-navy flex items-center justify-between" 
                    href="#processo"
                  >
                    <span>Processo</span>
                    <ChevronRight className="w-4 h-4 text-scorp-navy/40" />
                  </a>
                  <a 
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-sans text-sm font-semibold text-on-surface-muted hover:text-scorp-navy flex items-center justify-between" 
                    href="#cases"
                  >
                    <span>Cases</span>
                    <ChevronRight className="w-4 h-4 text-scorp-navy/40" />
                  </a>
                </nav>
              </div>
              
              <div className="pt-6 border-t border-surface-container">
                <a 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full bg-scorp-navy text-white text-center py-3.5 rounded-xl font-sans text-xs font-bold uppercase tracking-wider hover:bg-scorp-navy/90 transition-colors shadow-md"
                  href="#contato"
                >
                  Fale Conosco
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden relative bg-gradient-to-b from-surface-container-low/50 to-background">
          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-scorp-navy/5 rounded-full text-scorp-navy font-sans text-[11px] font-bold uppercase tracking-wider"
              >
                <Sparkles className="w-3.5 h-3.5 text-scorp-navy animate-pulse" />
                <span>Editorial Intelligence & Tecnologia Sob Medida</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-scorp-navy leading-[1.1] tracking-tight max-w-4xl"
              >
                Tecnologia que ajuda sua empresa a vender mais, organizar melhor e tomar decisões com confiança.
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-lg md:text-xl text-on-surface-muted font-light leading-relaxed max-w-2xl"
              >
                Desenvolvemos sites, automações e painéis de dados sob medida para pequenas e médias empresas que buscam resultados reais.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <a 
                  className="bg-scorp-navy text-white px-8 py-4 rounded-full font-sans text-sm font-bold uppercase tracking-wider text-center hover:scale-105 hover:bg-scorp-navy/95 hover:shadow-lg transition-all duration-200 shadow-md"
                  href="#contato"
                >
                  Solicitar uma proposta
                </a>
                <a 
                  className="border border-outline-variant px-8 py-4 rounded-full font-sans text-sm font-bold uppercase tracking-wider text-center bg-white/70 backdrop-blur-sm hover:bg-surface-container hover:border-scorp-navy/20 transition-all duration-200"
                  href="#solucoes"
                >
                  Conhecer soluções
                </a>
              </motion.div>
            </div>
            
            {/* Hero Visual side panel */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-4 hidden lg:flex justify-center relative"
            >
              <div className="w-full max-w-sm aspect-square rounded-3xl bg-slate-900 p-8 text-white relative shadow-2xl flex flex-col justify-between overflow-hidden border border-slate-800 group">
                {/* Visual grid lines for code feel */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-white/10 p-2.5 rounded-xl backdrop-blur-md">
                      <Cpu className="w-6 h-6 text-accent-glow" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                      Sistemas Ativos
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-tight mb-2">Engenharia Digital</h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    Sua operação traduzida em código performático e interfaces que seus funcionários amam usar.
                  </p>
                </div>
                
                <div className="relative z-10 space-y-3 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Performance Web</span>
                    <span className="text-accent-glow font-bold">99/100</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "99%" }}
                      transition={{ duration: 1.2, delay: 0.6 }}
                      className="bg-accent-glow h-full rounded-full" 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span>Tarefas Automatizadas</span>
                    <span className="text-accent-glow font-bold">100%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.2, delay: 0.8 }}
                      className="bg-accent-glow h-full rounded-full" 
                    />
                  </div>
                </div>

                {/* Ambient Glow */}
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-accent-glow/30 rounded-full blur-2xl pointer-events-none group-hover:bg-accent-glow/40 transition-colors" />
              </div>
            </motion.div>
          </div>
          
          {/* Background Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-glow/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 -left-24 w-64 h-64 bg-slate-300/25 rounded-full blur-[100px] pointer-events-none" />
        </section>

        {/* Como podemos ajudar - Bento Grid */}
        <section className="py-24 px-6 bg-surface-container-low" id="solucoes">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-scorp-navy/80">Soluções de Impacto</span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-scorp-navy mt-1">Como podemos ajudar sua empresa</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Card 1: Seu site está desatualizado? (Web) - 8 cols */}
              <div className="md:col-span-8 bg-white p-8 rounded-2xl bento-card border border-outline-variant/30 flex flex-col justify-between shadow-sm relative group overflow-hidden">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-scorp-navy">
                    <div className="p-2 bg-scorp-navy/5 rounded-xl">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-lg font-bold">Seu site está desatualizado?</h3>
                  </div>
                  <p className="font-sans text-sm text-on-surface-muted max-w-xl leading-relaxed">
                    Criamos presença digital que converte visitantes em clientes através de design focado em UX, velocidade de carregamento ultrarrápida e SEO que coloca seu negócio no topo do Google.
                  </p>
                </div>
                
                <div className="mt-8 relative h-52 w-full rounded-xl overflow-hidden border border-surface-container shadow-sm bg-slate-50">
                  <Image 
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                    alt="A clean, minimalist high-fidelity website interface prototype showing a modern architectural portfolio." 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAarCXVDf0qzYydDtDL9TXXcubM9IBnivLnYletjg2gTkoOmsCQvzyO1Z0Nzz-7TmwcM77sL24SUZ5Xiw91jGSJqm57HmcpL6Vk9k6zSh_FnqUSnD2szi3oGBAzfmF4cub6gosgza0DdYa-79qAU7U5dBYZjAVqHhTMGqGk04KEc9L7odpBw-K0egEYYWAblYxCg1ATsBHmvHTXrA4V_98Mwstbdq2c-aY21SMoE-U9yOx8EFaomt6N"
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle fade overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
                </div>
              </div>

              {/* Card 2: Controla tudo em planilhas? (Systems) - 4 cols */}
              <div className="md:col-span-4 bg-slate-900 p-8 rounded-2xl bento-card text-white flex flex-col justify-between shadow-sm relative group overflow-hidden border border-slate-800">
                <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:10px_10px]" />
                
                <div>
                  <div className="flex items-center gap-3 mb-4 text-accent-glow">
                    <div className="p-2 bg-white/10 rounded-xl">
                      <Database className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-lg font-bold">Controla tudo em planilhas?</h3>
                  </div>
                  <p className="font-sans text-sm text-slate-300 leading-relaxed">
                    Sistemas inteligentes para organizar sua gestão, centralizando informações críticas e eliminando totalmente erros operacionais manuais.
                  </p>
                </div>
                
                <div className="mt-8 flex justify-end items-end relative h-32">
                  <Database className="w-24 h-24 text-accent-glow/20 absolute -bottom-4 -right-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 text-xs font-mono space-y-1 relative z-10 w-full max-w-[200px]">
                    <div className="flex justify-between text-[10px]">
                      <span className="text-slate-400">STATUS:</span>
                      <span className="text-emerald-400 font-bold">PROTEGER</span>
                    </div>
                    <div className="text-slate-300">Planilhas unificadas</div>
                    <div className="text-accent-glow">Erro manual: 0%</div>
                  </div>
                </div>
              </div>

              {/* Card 3: Perde tempo com tarefas repetitivas? (Automation) - 4 cols */}
              <div className="md:col-span-4 bg-white p-8 rounded-2xl bento-card border border-outline-variant/30 flex flex-col justify-between shadow-sm group">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-scorp-navy">
                    <div className="p-2 bg-scorp-navy/5 rounded-xl">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-lg font-bold">Perde tempo com rotinas?</h3>
                  </div>
                  <p className="font-sans text-sm text-on-surface-muted leading-relaxed">
                    Integramos seus sistemas de chat, faturamento, e-mail e CRM por meio de automações automáticas robustas que liberam sua equipe para focar no que realmente importa.
                  </p>
                </div>
                
                <div className="mt-8 flex flex-col gap-2">
                  <div className="flex items-center gap-2.5 bg-surface-container-low p-2.5 rounded-lg border border-surface-container text-xs text-on-surface-muted font-medium">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>WhatsApp → CRM Sincronizado</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-surface-container-low p-2.5 rounded-lg border border-surface-container text-xs text-on-surface-muted font-medium">
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Disparo Automático de Notas Fiscais</span>
                  </div>
                </div>
              </div>

              {/* Card 4: Não acompanha seus resultados? (Dashboards) - 8 cols */}
              <div className="md:col-span-8 bg-surface-container-highest p-8 rounded-2xl bento-card border border-outline-variant/30 flex flex-col md:flex-row gap-8 items-center shadow-sm relative group overflow-hidden">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3 text-scorp-navy">
                    <div className="p-2 bg-scorp-navy/5 rounded-xl">
                      <Layers className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-lg font-bold">Não acompanha seus resultados?</h3>
                  </div>
                  <p className="font-sans text-sm text-on-surface-muted leading-relaxed">
                    Painéis visuais corporativos (Dashboards) sob medida para tomada de decisões embasadas em dados reais, e não em palpites. Visualize faturamento, leads, ROI de campanhas e conversões em tempo real.
                  </p>
                </div>
                
                <div className="flex-1 w-full relative h-44 rounded-xl overflow-hidden border border-surface-container shadow-sm bg-slate-50">
                  <Image 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                    alt="A sophisticated data visualization dashboard showing sleek line graphs." 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXu_GCjDPsqg51XzfpghNizK5HX5pPFa9HuUtuFsghGRHoYOkNNO7Iqk3qFAbL1p6Iqz43tt1N127_qFx_TOp1HOTG7_FGvoA1btLLEuMAjB8pDJZeveVtwKP23uMdhawTSB2szwY6shlRHsmec9w2Do7AwqU5vXYwIj75ur9yDBEM3hgaQ2Wfk4IbxqhtZORyCWaIAB5KdxJf8SCMRyd_uR1aFDCtvdjKDDQjY9UpHYkjS4h30AXp9G"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-widest text-scorp-navy">
                    BI Real-Time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nossos Pilares */}
        <section className="py-20 px-6 max-w-7xl mx-auto border-b border-surface-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-scorp-navy border-l-4 border-scorp-navy pl-4">
                Presença Digital
              </h3>
              <ul className="space-y-2.5 font-sans text-sm text-on-surface-muted pl-4">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-scorp-navy/40" />
                  <span>Sites Institucionais</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-scorp-navy/40" />
                  <span>Landing Pages de Conversão</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-scorp-navy/40" />
                  <span>SEO Técnico Avançado</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-scorp-navy/40" />
                  <span>Integrações com WhatsApp</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-scorp-navy border-l-4 border-scorp-navy pl-4">
                Gestão Inteligente
              </h3>
              <ul className="space-y-2.5 font-sans text-sm text-on-surface-muted pl-4">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-scorp-navy/40" />
                  <span>Painéis de BI Gerenciais</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-scorp-navy/40" />
                  <span>Indicadores de Venda</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-scorp-navy/40" />
                  <span>KPIs Financeiros DRE</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-scorp-navy/40" />
                  <span>Sincronização de Estoques</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-scorp-navy border-l-4 border-scorp-navy pl-4">
                Automação
              </h3>
              <ul className="space-y-2.5 font-sans text-sm text-on-surface-muted pl-4">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-scorp-navy/40" />
                  <span>Integrações de APIs Complexas</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-scorp-navy/40" />
                  <span>Fluxos de E-mail Marketing</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-scorp-navy/40" />
                  <span>Configuração de Webhooks</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-scorp-navy/40" />
                  <span>Automações de CRM Avançadas</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-scorp-navy border-l-4 border-scorp-navy pl-4">
                Sob Medida
              </h3>
              <ul className="space-y-2.5 font-sans text-sm text-on-surface-muted pl-4">
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-scorp-navy/40" />
                  <span>Sistemas Administrativos Internos</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-scorp-navy/40" />
                  <span>Portais e Intranets de Clientes</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-scorp-navy/40" />
                  <span>Áreas de Membros Restritas</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-scorp-navy/40" />
                  <span>SaaS e Plataformas Web Autorais</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Interactive ROI Calculator Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-white to-surface-container-low" id="calculadora">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-scorp-navy/5 rounded-full text-scorp-navy font-sans text-[11px] font-bold uppercase tracking-wider">
                <Calculator className="w-3.5 h-3.5" />
                <span>Simulador de Retorno de Investimento (ROI)</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-scorp-navy">
                Calcule o retorno de sua automação sob medida
              </h2>
              <p className="font-sans text-sm text-on-surface-muted leading-relaxed">
                Descubra o potencial de economia e o retorno financeiro ao automatizar processos manuais repetitivos e otimizar sua presença online com nossa equipe técnica.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Calculator Settings - 5 columns */}
              <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-outline-variant/30 flex flex-col justify-between shadow-sm">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="font-sans text-[11px] font-bold uppercase tracking-wider text-on-surface-muted block">
                      1. Escolha a Solução Ideal para Você
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setSelectedSolutionType("web")}
                        className={`p-3 text-left rounded-xl border text-xs font-semibold flex flex-col gap-1 transition-all ${
                          selectedSolutionType === "web"
                            ? "bg-scorp-navy text-white border-scorp-navy"
                            : "bg-surface-container-low text-on-surface border-surface-container hover:bg-surface-container"
                        }`}
                      >
                        <Globe className="w-4 h-4 mb-1" />
                        <span>Presença Digital</span>
                        <span className={`text-[9px] ${selectedSolutionType === "web" ? "text-slate-300" : "text-on-surface-muted"}`}>
                          A partir de R$ 6.500
                        </span>
                      </button>

                      <button
                        onClick={() => setSelectedSolutionType("bi")}
                        className={`p-3 text-left rounded-xl border text-xs font-semibold flex flex-col gap-1 transition-all ${
                          selectedSolutionType === "bi"
                            ? "bg-scorp-navy text-white border-scorp-navy"
                            : "bg-surface-container-low text-on-surface border-surface-container hover:bg-surface-container"
                        }`}
                      >
                        <Layers className="w-4 h-4 mb-1" />
                        <span>Gestão & Dashboards</span>
                        <span className={`text-[9px] ${selectedSolutionType === "bi" ? "text-slate-300" : "text-on-surface-muted"}`}>
                          A partir de R$ 14.500
                        </span>
                      </button>

                      <button
                        onClick={() => setSelectedSolutionType("automation")}
                        className={`p-3 text-left rounded-xl border text-xs font-semibold flex flex-col gap-1 transition-all ${
                          selectedSolutionType === "automation"
                            ? "bg-scorp-navy text-white border-scorp-navy"
                            : "bg-surface-container-low text-on-surface border-surface-container hover:bg-surface-container"
                        }`}
                      >
                        <Cpu className="w-4 h-4 mb-1" />
                        <span>Integração & APIs</span>
                        <span className={`text-[9px] ${selectedSolutionType === "automation" ? "text-slate-300" : "text-on-surface-muted"}`}>
                          A partir de R$ 11.500
                        </span>
                      </button>

                      <button
                        onClick={() => setSelectedSolutionType("custom")}
                        className={`p-3 text-left rounded-xl border text-xs font-semibold flex flex-col gap-1 transition-all ${
                          selectedSolutionType === "custom"
                            ? "bg-scorp-navy text-white border-scorp-navy"
                            : "bg-surface-container-low text-on-surface border-surface-container hover:bg-surface-container"
                        }`}
                      >
                        <Database className="w-4 h-4 mb-1" />
                        <span>Sistema Completo</span>
                        <span className={`text-[9px] ${selectedSolutionType === "custom" ? "text-slate-300" : "text-on-surface-muted"}`}>
                          A partir de R$ 28.000
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Slider hours */}
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center text-xs">
                      <label className="font-sans text-[11px] font-bold uppercase tracking-wider text-on-surface-muted">
                        2. Horas desperdiçadas por mês
                      </label>
                      <span className="font-mono font-bold text-scorp-navy px-2 py-0.5 bg-scorp-navy/5 rounded">
                        {hoursWasted} horas / mês
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="5" 
                      max="200" 
                      step="5"
                      value={hoursWasted}
                      onChange={(e) => setHoursWasted(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-surface-container rounded-lg appearance-none cursor-pointer accent-scorp-navy"
                    />
                    <p className="text-[10px] text-on-surface-muted leading-relaxed">
                      Tempo total gasto pelo seu time compilando planilhas, enviando mensagens manuais ou cobrando relatórios mensais.
                    </p>
                  </div>

                  {/* Slider cost */}
                  <div className="space-y-2.5">
                    <div className="flex justify-between items-center text-xs">
                      <label className="font-sans text-[11px] font-bold uppercase tracking-wider text-on-surface-muted">
                        3. Custo por hora de funcionário
                      </label>
                      <span className="font-mono font-bold text-scorp-navy px-2 py-0.5 bg-scorp-navy/5 rounded">
                        R$ {hourlyCost} / hora
                      </span>
                    </div>
                    <input 
                      type="range" 
                      min="20" 
                      max="150" 
                      step="5"
                      value={hourlyCost}
                      onChange={(e) => setHourlyCost(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-surface-container rounded-lg appearance-none cursor-pointer accent-scorp-navy"
                    />
                    <p className="text-[10px] text-on-surface-muted leading-relaxed">
                      Média do valor da hora de um colaborador (salário + encargos/benefícios inclusos).
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-surface-container text-xs text-on-surface-muted text-center italic">
                  *As estimativas são baseadas na eficiência de 75% obtida por nossos clientes reais após a implantação de nossos fluxos automatizados.
                </div>
              </div>

              {/* Calculator Results - 7 columns */}
              <div className="lg:col-span-7 bg-slate-900 rounded-2xl text-white p-8 md:p-10 flex flex-col justify-between shadow-lg relative overflow-hidden border border-slate-800">
                {/* Visual glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-accent-glow/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="space-y-8 relative z-10">
                  <h3 className="font-display text-lg font-bold tracking-tight pb-3 border-b border-white/10 flex items-center justify-between">
                    <span>Resultado do Impacto Estimado</span>
                    <span className="text-[10px] uppercase tracking-wider bg-accent-glow/20 text-accent-glow font-bold px-3 py-1 rounded-full border border-accent-glow/30">
                      Projeção Realista
                    </span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Tempo Recuperado</span>
                      <div className="flex items-baseline gap-1 text-2xl font-bold font-display text-emerald-400">
                        <span>{hoursSaved}h</span>
                        <span className="text-xs text-slate-300 font-normal">/ mês</span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-light">Horas de trabalho repletas de burocracia que se tornam automáticas.</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Economia Mensal</span>
                      <div className="flex items-baseline gap-1 text-2xl font-bold font-display text-emerald-400">
                        <span>R$ {monthlySavings.toLocaleString("pt-BR")}</span>
                        <span className="text-xs text-slate-300 font-normal">/ mês</span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-light">Eliminação direta do desperdício operacional com retrabalho.</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Retorno Anual de Eficiência</span>
                      <div className="flex items-baseline gap-1 text-2xl font-bold font-display text-accent-glow">
                        <span>R$ {annualSavings.toLocaleString("pt-BR")}</span>
                        <span className="text-xs text-slate-300 font-normal">/ ano</span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-light">Margem de lucro anual líquida resgatada diretamente do desperdício.</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Retorno sobre o Investimento (ROI 24m)</span>
                      <div className="flex items-baseline gap-1 text-2xl font-bold font-display text-emerald-400">
                        <span>{ROI}%</span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-light">Multiplicador de valor real obtido comparado ao custo do projeto.</p>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-5 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-accent-glow" />
                        <span>Payback Estimado (Retorno)</span>
                      </div>
                      <div className="text-xl font-bold text-slate-100">
                        {paybackMonths === "Infinity" || paybackMonths === "0.0" ? "N/A" : `${paybackMonths} meses`}
                      </div>
                      <p className="text-[10px] text-slate-400 font-light">Tempo para o sistema se pagar integralmente.</p>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                        <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Investimento Estimado Único</span>
                      </div>
                      <div className="text-xl font-bold text-slate-100">
                        R$ {projectCost.toLocaleString("pt-BR")}
                      </div>
                      <p className="text-[10px] text-slate-400 font-light">Custo de desenvolvimento do projeto sem taxas ocultas.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-10">
                  <span className="text-xs text-slate-300 text-center sm:text-left font-light">
                    Interessado neste retorno? Envie os detalhes de seu negócio para criarmos uma proposta técnica oficial.
                  </span>
                  <a 
                    href="#contato"
                    className="bg-white text-scorp-navy px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:scale-105 transition-transform shrink-0"
                  >
                    <span>Receber Proposta Completa</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como funciona - Metodologia */}
        <section className="py-24 px-6 bg-slate-900 text-white relative border-y border-slate-800" id="processo">
          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent-glow">Metodologia</span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold mt-2">Nossa jornada em 5 etapas</h2>
              <p className="font-sans text-sm text-slate-300 max-w-xl mx-auto mt-3 font-light leading-relaxed">
                Um processo transparente, focado em entregas rápidas de código estável que resolve as dores específicas do seu modelo de negócio.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              {/* Line decoration connecting steps on desktop */}
              <div className="hidden md:block absolute top-10 left-12 right-12 h-[1px] bg-white/10 z-0" />
              
              <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full border border-white/20 mb-6 font-mono font-bold text-accent-glow text-lg group-hover:bg-accent-glow group-hover:text-scorp-navy transition-colors">1</div>
                <h4 className="font-display text-base font-bold mb-2">Entendemos</h4>
                <p className="font-sans text-xs text-slate-300 leading-relaxed font-light">Análise profunda dos seus desafios diários e objetivos comerciais de crescimento.</p>
              </div>
              
              <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full border border-white/20 mb-6 font-mono font-bold text-accent-glow text-lg group-hover:bg-accent-glow group-hover:text-scorp-navy transition-colors">2</div>
                <h4 className="font-display text-base font-bold mb-2">Planejamos</h4>
                <p className="font-sans text-xs text-slate-300 leading-relaxed font-light">Definição precisa da arquitetura e das ferramentas ideais para a solução segura do projeto.</p>
              </div>
              
              <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full border border-white/20 mb-6 font-mono font-bold text-accent-glow text-lg group-hover:bg-accent-glow group-hover:text-scorp-navy transition-colors">3</div>
                <h4 className="font-display text-base font-bold mb-2">Desenvolvemos</h4>
                <p className="font-sans text-xs text-slate-300 leading-relaxed font-light">Construção ágil de software com foco absoluto em performance, SEO e segurança de dados.</p>
              </div>
              
              <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full border border-white/20 mb-6 font-mono font-bold text-accent-glow text-lg group-hover:bg-accent-glow group-hover:text-scorp-navy transition-colors">4</div>
                <h4 className="font-display text-base font-bold mb-2">Implantamos</h4>
                <p className="font-sans text-xs text-slate-300 leading-relaxed font-light">Entrega da solução em ambientes de nuvem estáveis e treinamento prático de sua equipe.</p>
              </div>
              
              <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left group">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full border border-white/20 mb-6 font-mono font-bold text-accent-glow text-lg group-hover:bg-accent-glow group-hover:text-scorp-navy transition-colors">5</div>
                <h4 className="font-display text-base font-bold mb-2">Acompanhamos</h4>
                <p className="font-sans text-xs text-slate-300 leading-relaxed font-light">Suporte contínuo, correções de segurança e otimização baseada no uso real dos colaboradores.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio - Cases de Estudo */}
        <section className="py-24 px-6 max-w-7xl mx-auto" id="cases">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
            <div>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface-muted">Cases de Estudo</span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-scorp-navy mt-1">Aplicações Práticas</h2>
            </div>
            <p className="font-sans text-sm text-on-surface-muted max-w-sm leading-relaxed">
              Estudos de caso reais descrevendo soluções criadas de ponta a ponta para diferentes segmentos corporativos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <div 
                key={caseStudy.id}
                onClick={() => setSelectedCase(caseStudy)}
                className="group cursor-pointer bg-white rounded-2xl border border-outline-variant/30 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="overflow-hidden h-52 relative bg-slate-100">
                  <Image 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    alt={caseStudy.alt}
                    src={caseStudy.imageUrl}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-scorp-navy shadow-sm">
                    Projeto Conceitual
                  </div>
                </div>
                
                <div className="p-6 space-y-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-scorp-navy/60 bg-scorp-navy/5 px-2.5 py-0.5 rounded-full">
                    {caseStudy.badge}
                  </span>
                  <h3 className="font-display text-base font-bold text-scorp-navy group-hover:text-scorp-navy/80 transition-colors">
                    {caseStudy.title}
                  </h3>
                  <p className="font-sans text-xs text-on-surface-muted leading-relaxed line-clamp-3">
                    {caseStudy.subtitle}
                  </p>
                  
                  <div className="flex items-center gap-1.5 text-xs text-scorp-navy font-bold pt-2 group-hover:translate-x-1.5 transition-transform">
                    <span>Ver Estudo Completo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Case Details Modal */}
        <AnimatePresence>
          {selectedCase && (
            <>
              {/* Modal Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCase(null)}
                className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4"
              />
              
              {/* Modal Content container */}
              <div className="fixed inset-0 z-50 overflow-y-auto pointer-events-none flex items-center justify-center p-4 sm:p-6 md:p-10">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl pointer-events-auto overflow-hidden flex flex-col max-h-[90vh]"
                >
                  {/* Top image & close button */}
                  <div className="relative h-48 sm:h-64 bg-slate-100 shrink-0">
                    <Image 
                      src={selectedCase.imageUrl} 
                      alt={selectedCase.alt}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <button 
                      onClick={() => setSelectedCase(null)}
                      className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors z-10"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    
                    <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                      <span className="text-[10px] uppercase font-bold tracking-widest bg-white/20 px-2.5 py-0.5 rounded-full border border-white/20 backdrop-blur-md">
                        {selectedCase.badge}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-extrabold leading-tight">
                        {selectedCase.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Modal Body */}
                  <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-scorp-navy">Visão Geral</h4>
                      <p className="font-sans text-sm text-on-surface-muted leading-relaxed font-light">
                        {selectedCase.subtitle}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 flex items-center gap-1.5">
                          <AlertCircle className="w-4 h-4" />
                          <span>Desafios Identificados</span>
                        </h4>
                        <ul className="space-y-2 font-sans text-xs text-on-surface-muted pl-4 list-disc space-y-2">
                          {selectedCase.problems.map((prob, idx) => (
                            <li key={idx} className="leading-relaxed">{prob}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Engenharia & Solução</span>
                        </h4>
                        <p className="font-sans text-xs text-on-surface-muted leading-relaxed font-light">
                          {selectedCase.solution}
                        </p>
                      </div>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl flex items-center gap-4">
                      <div className="bg-emerald-500 text-white p-2.5 rounded-lg shrink-0">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">Métricas & Sucesso</span>
                        <p className="font-sans text-xs font-semibold text-emerald-950">
                          {selectedCase.metrics}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 bg-slate-50 border border-surface-container p-4 rounded-xl">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-scorp-navy flex items-center gap-1.5">
                        <FileText className="w-4 h-4" />
                        <span>Arquitetura Detalhada</span>
                      </h4>
                      <p className="font-sans text-xs text-on-surface-muted leading-relaxed font-light">
                        {selectedCase.detail}
                      </p>
                    </div>
                  </div>
                  
                  {/* Modal Footer */}
                  <div className="p-4 bg-slate-50 border-t border-surface-container flex justify-between items-center shrink-0">
                    <span className="text-[10px] text-on-surface-muted font-light">Copyright © Grupo Scorp</span>
                    <button 
                      onClick={() => setSelectedCase(null)}
                      className="bg-scorp-navy hover:bg-scorp-navy/95 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition-colors"
                    >
                      Fechar Estudo
                    </button>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>

        {/* Contact Section */}
        <section className="py-24 px-6 bg-surface-container-low border-y border-outline-variant/30" id="contato">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Context details - 5 columns */}
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
            
            {/* Form - 7 columns */}
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

        {/* Lead Inbox & AI analysis panel */}
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
                {/* Leads Queue - 5 cols */}
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
                            
                            <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                              l.status === "Fechado" 
                                ? "bg-emerald-500/20 text-emerald-800" 
                                : l.status === "Analisado" 
                                ? "bg-indigo-500/20 text-indigo-800" 
                                : l.status === "Contatado" 
                                ? "bg-amber-500/20 text-amber-800" 
                                : "bg-slate-300/30 text-slate-800"
                            }`}>
                              {l.status}
                            </span>
                          </div>

                          <p className="text-[11px] text-on-surface-muted line-clamp-2 leading-relaxed">
                            {l.need}
                          </p>

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

                {/* Lead Analysis View - 7 cols */}
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
                            onChange={(e) => handleUpdateStatus(selectedLeadForAnalysis.id, e.target.value as Lead["status"])}
                            className="bg-white border border-surface-container rounded text-xs p-1 focus:ring-1 focus:ring-scorp-navy outline-none"
                          >
                            <option value="Pendente">Pendente</option>
                            <option value="Analisado">Analisado</option>
                            <option value="Contatado">Contatado</option>
                            <option value="Fechado">Fechado</option>
                          </select>
                        </div>
                      </div>

                      {/* Lead Original Need */}
                      <div className="space-y-1 bg-white p-4 rounded-xl border border-surface-container shadow-xs">
                        <span className="text-[10px] text-on-surface-muted font-bold uppercase tracking-wider block">Necessidade descrita pelo cliente:</span>
                        <p className="font-sans text-xs text-on-surface-muted leading-relaxed font-light">
                          &ldquo;{selectedLeadForAnalysis.need}&rdquo;
                        </p>
                      </div>

                      {/* AI Qualifications Details */}
                      {selectedLeadForAnalysis.aiAnalysis ? (
                        <div className="space-y-5 pt-2">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white p-3 rounded-lg border border-surface-container shadow-xs">
                              <span className="text-[10px] text-on-surface-muted font-bold uppercase tracking-wider block">Pilar de Atuação</span>
                              <span className="text-xs font-bold text-scorp-navy">
                                {selectedLeadForAnalysis.aiAnalysis.category}
                              </span>
                            </div>
                            
                            <div className="bg-white p-3 rounded-lg border border-surface-container shadow-xs">
                              <span className="text-[10px] text-on-surface-muted font-bold uppercase tracking-wider block">Prioridade Comercial</span>
                              <span className={`text-xs font-bold ${
                                selectedLeadForAnalysis.aiAnalysis.priority === "Alta" 
                                  ? "text-rose-600" 
                                  : selectedLeadForAnalysis.aiAnalysis.priority === "Média" 
                                  ? "text-amber-600" 
                                  : "text-slate-600"
                              }`}>
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
                            <span className="text-[10px] text-on-surface-muted font-bold uppercase tracking-wider block">Abordagem Técnica Sugerida:</span>
                            <p className="font-sans text-xs text-on-surface-muted leading-relaxed font-light whitespace-pre-line">
                              {selectedLeadForAnalysis.aiAnalysis.suggestedApproach}
                            </p>
                          </div>

                          <div className="bg-white p-4 rounded-xl border border-surface-container shadow-xs space-y-3">
                            <div className="flex justify-between items-center border-b border-surface-container pb-2">
                              <span className="text-[10px] text-on-surface-muted font-bold uppercase tracking-wider block">Sugestão de Resposta Inicial (E-mail):</span>
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
                            <p className="font-sans text-xs font-semibold text-scorp-navy">Este lead ainda não foi qualificado com inteligência artificial.</p>
                            <p className="text-[11px] text-on-surface-muted">Clique no botão abaixo para chamar o Gemini e receber o relatório completo.</p>
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
                        <p className="text-[11px] text-on-surface-muted">Clique em qualquer contato da lista para ver os detalhes, alterar status ou qualificar com IA.</p>
                      </div>
                    </div>
                  )}

                  <div className="pt-6 border-t border-surface-container text-[10px] text-on-surface-muted text-center leading-relaxed">
                    ⚙️ <strong>Dica de Desenvolvimento:</strong> Ao preencher o formulário de contato acima, um novo lead é inserido instantaneamente nesta fila para testes de qualificação.
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white mt-auto border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-6 space-y-4">
            <span className="font-display text-2xl font-black text-white block">
              Grupo Scorp
            </span>
            <p className="font-sans text-xs font-light text-slate-300 max-w-sm leading-relaxed">
              Transformamos desafios complexos de operações e vendas em soluções de software precisas. Sem complicação, com foco em resultados mensuráveis de ROI.
            </p>
            <div className="flex gap-4 pt-4">
              <a 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors" 
                href="#"
                title="LinkedIn"
              >
                <Image 
                  alt="LinkedIn" 
                  className="w-4 h-4 opacity-70 hover:opacity-100" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH9M8ExsBeh_XyyrYKLxMgcdJPw7BtkmQ4XejknOt26SKpnNrfigghnGcMj3_BetD5WZ_ncvz_U6WJ3FypsXCcGms3gk14Ia_svHvBYZtUtVWxnlBck7R_7i3c3qMM1qe1-b4iM0Ap_P-Sv2JoH8Pr-xKWFaqMzamkIvP-3fhPJs1febqQv8c3BS9caKdfIiGzeMoXVFhH-IMhig4_dK46iJf-X9VBPosFTqf0QXVqqAhTfAONfXO8"
                  width={20}
                  height={20}
                  referrerPolicy="no-referrer"
                />
              </a>
              <a 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors" 
                href="#"
                title="Instagram"
              >
                <Image 
                  alt="Instagram" 
                  className="w-4 h-4 opacity-70 hover:opacity-100" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTOV2bGFjMMGsYQxHfcXrqSL2IxS7Rwd27w5viLgL_DC8xfgKvcAfqONuM7gYCkcILv1340Cbb2Z6-X0enNKQvH1esew_z84dNYiybAcdwDmzWhnA0vzFTOwdHLrC1KfhcSEQmH09Y1wYm6Z7wIXGQnwmzpy5HcNNKXjHamh6vlr_N6ukWl9rqJ6VRyP64KJ3NV4gE4oPjGJbDYqE0iqUH4DUgzLF_SmZ9fc4YPlGi9lDdWtauRQFr"
                  width={20}
                  height={20}
                  referrerPolicy="no-referrer"
                />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-accent-glow">Soluções</h4>
            <ul className="space-y-3 text-xs font-light text-slate-300">
              <li><a className="hover:text-accent-glow transition-colors" href="#solucoes">Presença Digital</a></li>
              <li><a className="hover:text-accent-glow transition-colors" href="#solucoes">Gestão Inteligente</a></li>
              <li><a className="hover:text-accent-glow transition-colors" href="#solucoes">Automação de Rotinas</a></li>
              <li><a className="hover:text-accent-glow transition-colors" href="#solucoes">Sistemas Sob Medida</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-accent-glow">Contato</h4>
            <ul className="space-y-3 text-xs font-light text-slate-300">
              <li><a className="hover:text-accent-glow transition-colors" href="mailto:contato@gruposcorp.com.br">contato@gruposcorp.com.br</a></li>
              <li><a className="hover:text-accent-glow transition-colors" href="#">Suporte ao Cliente</a></li>
              <li><a className="hover:text-accent-glow transition-colors" href="#contato">Solicitar Orçamento</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[10px] font-light text-slate-400 text-center sm:text-left">
            © 2026 Grupo Scorp. Tecnologia e Inteligência Editorial. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#admin-leads" className="font-sans text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors">
              Inbox de Leads
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
