import { ChevronRight } from "lucide-react";
import { servicePillars } from "@/data/pillars";

export function PillarsSection() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-b border-surface-container">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicePillars.map((pillar) => (
          <div key={pillar.title} className="space-y-4">
            <h3 className="font-sans text-xs font-bold uppercase tracking-wider text-scorp-navy border-l-4 border-scorp-navy pl-4">
              {pillar.title}
            </h3>
            <ul className="space-y-2.5 font-sans text-sm text-on-surface-muted pl-4">
              {pillar.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-scorp-navy/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
