"use client";

import { Building, Mail, Phone, User } from "lucide-react";

export function ContactAndLeadsSection() {
  return (
    <section className="py-24 px-6 bg-surface-container-low border-y border-outline-variant/30" id="contato">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-scorp-navy leading-tight">
              Conversar sobre seu projeto
            </h2>
            <p className="font-sans text-base text-on-surface-muted leading-relaxed font-light">
              Conte o que sua empresa precisa — site, painel de gestão ou um complemento específico. Vamos entender
              juntos a melhor forma de ajudar.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-outline-variant/20">
          <div className="mb-5 bg-scorp-navy/5 border border-scorp-navy/10 p-3.5 rounded-lg text-xs text-scorp-navy leading-relaxed">
            Este canal de envio ainda está em configuração. Nenhuma informação preenchida será enviada ou armazenada
            nesta etapa.
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="font-sans text-[11px] font-bold uppercase tracking-wider text-on-surface-muted block">
                  Nome Completo *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4.5 h-4.5 text-on-surface-muted/60" />
                  <input
                    type="text"
                    disabled
                    placeholder="Ex: Seu nome"
                    className="w-full bg-surface-container-low border border-surface-container outline-none rounded-lg p-2.5 pl-10 text-sm opacity-60 cursor-not-allowed"
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
                    disabled
                    placeholder="Ex: seu@empresa.com"
                    className="w-full bg-surface-container-low border border-surface-container outline-none rounded-lg p-2.5 pl-10 text-sm opacity-60 cursor-not-allowed"
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
                    disabled
                    placeholder="Ex: (00) 00000-0000"
                    className="w-full bg-surface-container-low border border-surface-container outline-none rounded-lg p-2.5 pl-10 text-sm opacity-60 cursor-not-allowed"
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
                    disabled
                    placeholder="Ex: Nome da sua empresa"
                    className="w-full bg-surface-container-low border border-surface-container outline-none rounded-lg p-2.5 pl-10 text-sm opacity-60 cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-sans text-[11px] font-bold uppercase tracking-wider text-on-surface-muted block">
                Qual a sua necessidade técnica? *
              </label>
              <textarea
                disabled
                placeholder="Descreva brevemente o que você busca (Ex: site, painéis de gestão, etc)..."
                rows={4}
                className="w-full bg-surface-container-low border border-surface-container outline-none rounded-lg p-2.5 text-sm resize-none opacity-60 cursor-not-allowed"
              />
            </div>

            <button
              type="button"
              disabled
              className="w-full bg-scorp-navy/50 text-white py-4 rounded-xl font-sans text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-not-allowed shadow"
            >
              Formulário em implantação
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
