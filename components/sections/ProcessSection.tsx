import { processSteps } from "@/data/process-steps";

export function ProcessSection() {
  return (
    <section className="py-24 px-6 bg-slate-900 text-white relative border-y border-slate-800" id="processo">
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent-glow">
            Como trabalhamos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mt-2">Do primeiro contato à entrega</h2>
          <p className="font-sans text-sm text-slate-300 max-w-xl mx-auto mt-3 font-light leading-relaxed">
            Um processo simples, com conversa clara e acompanhamento próximo em cada etapa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-10 left-10 right-10 h-px bg-white/10 z-0" />

          {processSteps.map((step) => (
            <div
              key={step.step}
              className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left group"
            >
              <div className="w-12 h-12 bg-white/10 flex items-center justify-center rounded-full border border-white/20 mb-6 font-mono font-bold text-accent-glow text-lg group-hover:bg-accent-glow group-hover:text-scorp-navy transition-colors">
                {step.step}
              </div>
              <h3 className="font-display text-base font-bold mb-2">{step.title}</h3>
              <p className="font-sans text-xs text-slate-300 leading-relaxed font-light">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
