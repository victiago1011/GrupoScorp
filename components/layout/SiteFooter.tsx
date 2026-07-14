import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white mt-auto border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-6 space-y-4">
          <span className="font-display text-2xl font-black text-white block">Grupo Scorp</span>
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
            <li>
              <a className="hover:text-accent-glow transition-colors" href="#solucoes">
                Presença Digital
              </a>
            </li>
            <li>
              <a className="hover:text-accent-glow transition-colors" href="#solucoes">
                Gestão Inteligente
              </a>
            </li>
            <li>
              <a className="hover:text-accent-glow transition-colors" href="#solucoes">
                Automação de Rotinas
              </a>
            </li>
            <li>
              <a className="hover:text-accent-glow transition-colors" href="#solucoes">
                Sistemas Sob Medida
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3 space-y-4">
          <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-accent-glow">Contato</h4>
          <ul className="space-y-3 text-xs font-light text-slate-300">
            <li>
              <a className="hover:text-accent-glow transition-colors" href="mailto:contato@gruposcorp.com.br">
                contato@gruposcorp.com.br
              </a>
            </li>
            <li>
              <a className="hover:text-accent-glow transition-colors" href="#">
                Suporte ao Cliente
              </a>
            </li>
            <li>
              <a className="hover:text-accent-glow transition-colors" href="#contato">
                Solicitar Orçamento
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-sans text-[10px] font-light text-slate-400 text-center sm:text-left">
          © 2026 Grupo Scorp. Tecnologia e Inteligência Editorial. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          <a
            href="#admin-leads"
            className="font-sans text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
          >
            Inbox de Leads
          </a>
        </div>
      </div>
    </footer>
  );
}
