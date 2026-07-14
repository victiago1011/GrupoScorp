import { aboutContent } from "@/data/about";

export function AboutSection() {
  return (
    <section className="py-20 md:py-24 px-6 bg-background" id="sobre">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5 space-y-4">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-scorp-navy leading-tight tracking-tight">
            {aboutContent.title}
          </h2>
        </div>

        <div className="lg:col-span-7 space-y-5">
          {aboutContent.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="font-sans text-sm md:text-base text-on-surface-muted leading-relaxed font-light"
            >
              {paragraph}
            </p>
          ))}

          <ul className="pt-2 space-y-2.5">
            {aboutContent.focusPoints.map((point) => (
              <li
                key={point}
                className="font-sans text-sm text-on-surface leading-relaxed border-l-2 border-scorp-navy/25 pl-4"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
