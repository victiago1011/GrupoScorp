"use client";

import { motion } from "motion/react";
import { Cpu, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-4 hidden lg:flex justify-center relative"
        >
          <div className="w-full max-w-sm aspect-square rounded-3xl bg-slate-900 p-8 text-white relative shadow-2xl flex flex-col justify-between overflow-hidden border border-slate-800 group">
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

            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-accent-glow/30 rounded-full blur-2xl pointer-events-none group-hover:bg-accent-glow/40 transition-colors" />
          </div>
        </motion.div>
      </div>

      <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-glow/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -left-24 w-64 h-64 bg-slate-300/25 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
