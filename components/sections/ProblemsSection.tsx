import { businessProblems } from "@/data/problems";

export function ProblemsSection() {
  return (
    <section className="py-16 md:py-20 px-6 bg-background border-b border-surface-container/60" id="desafios">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-10 md:mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-scorp-navy leading-tight tracking-tight">
            Algum desses desafios faz parte do dia a dia da sua empresa?
          </h2>
          <p className="font-sans text-sm md:text-base text-on-surface-muted mt-3 leading-relaxed font-light">
            Criamos soluções digitais para tornar sua presença mais profissional e sua gestão mais clara.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {businessProblems.map((item) => (
            <div key={item.id} className="space-y-3 border-l-2 border-scorp-navy/20 pl-4">
              <p className="font-sans text-sm font-semibold text-on-surface leading-relaxed">{item.problem}</p>
              <p className="font-sans text-xs text-on-surface-muted leading-relaxed font-light">{item.response}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
