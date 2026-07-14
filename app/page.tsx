import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactAndLeadsSection } from "@/components/sections/ContactAndLeadsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-on-surface flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ProblemsSection />
        <SolutionsSection />
        <AboutSection />
        <ProcessSection />
        <PortfolioSection />
        <ContactAndLeadsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
