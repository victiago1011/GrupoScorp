import { contactCta } from "@/data/navigation";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white mt-auto border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-6 space-y-4">
          <span className="font-display text-2xl font-black text-white block">Grupo Scorp</span>
          <p className="font-sans text-xs font-light text-slate-300 max-w-sm leading-relaxed">
            Sites profissionais e painéis de gestão para empresas que querem crescer com mais organização e clareza.
          </p>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-accent-glow">Soluções</h4>
          <ul className="space-y-3 text-xs font-light text-slate-300">
            <li>
              <a className="hover:text-accent-glow transition-colors" href="#solucoes">
                Sites profissionais
              </a>
            </li>
            <li>
              <a className="hover:text-accent-glow transition-colors" href="#solucoes">
                Painéis de gestão
              </a>
            </li>
            <li>
              <a className="hover:text-accent-glow transition-colors" href="#solucoes">
                Soluções personalizadas
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-accent-glow">Navegação</h4>
          <ul className="space-y-3 text-xs font-light text-slate-300">
            <li>
              <a className="hover:text-accent-glow transition-colors" href="#sobre">
                Quem somos
              </a>
            </li>
            <li>
              <a className="hover:text-accent-glow transition-colors" href="#processo">
                Como trabalhamos
              </a>
            </li>
            <li>
              <a className="hover:text-accent-glow transition-colors" href="#cases">
                Projetos
              </a>
            </li>
            <li>
              <a className="hover:text-accent-glow transition-colors" href={contactCta.href}>
                {contactCta.label}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-sans text-[10px] font-light text-slate-400 text-center sm:text-left">
          © 2026 Grupo Scorp. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
