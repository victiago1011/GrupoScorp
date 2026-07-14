import { BarChart3, Check, Globe, Wrench } from "lucide-react";
import { contactCta } from "@/data/navigation";
import { homeServices } from "@/data/services";

const primaryIcons = {
  sites: Globe,
  paineis: BarChart3,
} as const;

export function SolutionsSection() {
  const primaryServices = homeServices.filter((service) => service.prominence === "primary");
  const complementaryService = homeServices.find((service) => service.prominence === "secondary");

  return (
    <section className="py-24 px-6 bg-surface-container-low" id="solucoes">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-scorp-navy/80">O que fazemos</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-scorp-navy mt-1">
            Como podemos ajudar sua empresa
          </h2>
          <p className="font-sans text-sm text-on-surface-muted mt-3 max-w-2xl leading-relaxed">
            Foco em sites profissionais e painéis de gestão — com soluções personalizadas quando o projeto precisa de um complemento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {primaryServices.map((service) => {
            const Icon = primaryIcons[service.id as keyof typeof primaryIcons] ?? Globe;

            return (
              <div
                key={service.id}
                className="bg-white p-8 rounded-2xl bento-card border border-outline-variant/30 flex flex-col shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4 text-scorp-navy">
                  <div className="p-2 bg-scorp-navy/5 rounded-xl">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{service.title}</h3>
                </div>
                <p className="font-sans text-sm text-on-surface-muted leading-relaxed">{service.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {service.deliveries.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-xs text-on-surface-muted font-medium leading-relaxed"
                    >
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {complementaryService && (
          <div className="mt-6 bg-surface-container-high/60 p-6 md:p-8 rounded-2xl border border-outline-variant/20">
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
              <div className="md:flex-1 space-y-3">
                <div className="flex items-center gap-3 text-scorp-navy">
                  <div className="p-2 bg-white/70 rounded-xl border border-outline-variant/20">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-on-surface-muted block">
                      Complementar
                    </span>
                    <h3 className="font-display text-base font-bold">{complementaryService.title}</h3>
                  </div>
                </div>
                <p className="font-sans text-sm text-on-surface-muted leading-relaxed">
                  {complementaryService.description}
                </p>
              </div>
              <ul className="md:w-80 space-y-2">
                {complementaryService.deliveries.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-xs text-on-surface-muted font-medium leading-relaxed"
                  >
                    <Check className="w-3.5 h-3.5 text-scorp-navy/50 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <a
            href={contactCta.href}
            className="border border-outline-variant px-8 py-3.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider text-center bg-white/70 backdrop-blur-sm hover:bg-surface-container hover:border-scorp-navy/20 transition-all duration-200 text-scorp-navy"
          >
            {contactCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
