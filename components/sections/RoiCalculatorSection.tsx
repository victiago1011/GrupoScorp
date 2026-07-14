"use client";

import { useState } from "react";
import {
  ArrowRight,
  Calculator,
  Clock,
  Cpu,
  Database,
  DollarSign,
  Globe,
  Layers,
} from "lucide-react";
import { calculateROI } from "@/lib/calculate-roi";
import type { RoiSolutionType } from "@/types/roi";

export function RoiCalculatorSection() {
  const [selectedSolutionType, setSelectedSolutionType] = useState<RoiSolutionType>("automation");
  const [hoursWasted, setHoursWasted] = useState(40);
  const [hourlyCost, setHourlyCost] = useState(50);

  const { projectCost, hoursSaved, monthlySavings, annualSavings, paybackMonths, ROI } = calculateROI(
    selectedSolutionType,
    hoursWasted,
    hourlyCost
  );

  return (
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

          <div className="lg:col-span-7 bg-slate-900 rounded-2xl text-white p-8 md:p-10 flex flex-col justify-between shadow-lg relative overflow-hidden border border-slate-800">
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
  );
}
