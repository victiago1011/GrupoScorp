import { Check, Globe, LayoutDashboard } from "lucide-react";
import { featuredProject, solutionExamples } from "@/data/portfolio";
import { contactCta } from "@/data/navigation";

export function PortfolioSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="cases">
      <div className="mb-14 md:mb-16 max-w-2xl">
        <span className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface-muted">
          Projetos
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-scorp-navy mt-1">
          O que já construímos — e como podemos ajudar
        </h2>
        <p className="font-sans text-sm text-on-surface-muted mt-3 leading-relaxed">
          Destacamos um projeto real entregue pela Grupo Scorp e, abaixo, exemplos de solução para ilustrar
          possibilidades — sem representar clientes.
        </p>
      </div>

      <article className="bg-white rounded-2xl border border-outline-variant/30 overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-5 bg-slate-900 text-white p-8 md:p-10 flex flex-col justify-between min-h-[280px]">
            <div className="space-y-4">
              <span className="inline-block text-[10px] uppercase font-bold tracking-widest bg-white/10 text-slate-100 px-3 py-1 rounded-full border border-white/15">
                {featuredProject.label}
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight">
                {featuredProject.name}
              </h3>
              <p className="font-sans text-sm text-slate-300 leading-relaxed font-light">
                {featuredProject.description}
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3 text-slate-400">
              <Globe className="w-5 h-5 shrink-0" />
              <span className="font-sans text-xs leading-relaxed">
                Site institucional, portal e área administrativa em um único ambiente.
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 md:p-10 space-y-8">
            <div>
              <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-scorp-navy mb-4">
                O que foi entregue
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {featuredProject.deliveries.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 font-sans text-sm text-on-surface-muted leading-relaxed"
                  >
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-outline-variant/30">
              <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-on-surface-muted mb-3">
                Infraestrutura
              </h4>
              <ul className="flex flex-col gap-2">
                {featuredProject.techNotes.map((note) => (
                  <li key={note} className="font-sans text-xs text-on-surface-muted leading-relaxed">
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={contactCta.href}
              className="inline-flex items-center justify-center bg-scorp-navy text-white px-6 py-3 rounded-full font-sans text-xs font-bold uppercase tracking-wider hover:bg-scorp-navy/95 transition-colors"
            >
              {contactCta.label}
            </a>
          </div>
        </div>
      </article>

      <div className="mt-14 md:mt-16">
        <div className="mb-8 max-w-xl">
          <h3 className="font-display text-xl md:text-2xl font-bold text-scorp-navy">
            Exemplos de solução
          </h3>
          <p className="font-sans text-sm text-on-surface-muted mt-2 leading-relaxed">
            Ilustrações do tipo de entrega que podemos desenvolver. Não representam clientes reais nem resultados
            obtidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutionExamples.map((example) => (
            <div
              key={example.id}
              className="bg-surface-container-low/80 rounded-2xl border border-outline-variant/25 p-7 md:p-8 space-y-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <span className="inline-block text-[10px] uppercase font-bold tracking-widest text-scorp-navy/70 bg-scorp-navy/5 px-2.5 py-1 rounded-full">
                    {example.label}
                  </span>
                  <h4 className="font-display text-lg font-bold text-scorp-navy leading-snug">
                    {example.title}
                  </h4>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-outline-variant/20 shrink-0">
                  <LayoutDashboard className="w-5 h-5 text-scorp-navy" />
                </div>
              </div>

              <p className="font-sans text-sm text-on-surface-muted leading-relaxed">{example.description}</p>

              <ul className="space-y-2 pt-1">
                {example.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 font-sans text-xs text-on-surface-muted leading-relaxed"
                  >
                    <Check className="w-3.5 h-3.5 text-scorp-navy/45 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
