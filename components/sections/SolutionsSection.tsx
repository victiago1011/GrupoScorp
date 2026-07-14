import Image from "next/image";
import { Check, Cpu, Database, Globe, Layers } from "lucide-react";

export function SolutionsSection() {
  return (
    <section className="py-24 px-6 bg-surface-container-low" id="solucoes">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-scorp-navy/80">Soluções de Impacto</span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-scorp-navy mt-1">Como podemos ajudar sua empresa</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
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
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
            </div>
          </div>

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
  );
}
