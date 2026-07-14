"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  FileText,
  TrendingUp,
  X,
} from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import type { CaseStudy } from "@/types/case-study";

export function PortfolioSection() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <>
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

      <AnimatePresence>
        {selectedCase && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCase(null)}
              className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4"
            />

            <div className="fixed inset-0 z-50 overflow-y-auto pointer-events-none flex items-center justify-center p-4 sm:p-6 md:p-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl pointer-events-auto overflow-hidden flex flex-col max-h-[90vh]"
              >
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
                          <li key={idx} className="leading-relaxed">
                            {prob}
                          </li>
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
                      <p className="font-sans text-xs font-semibold text-emerald-950">{selectedCase.metrics}</p>
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
    </>
  );
}
