import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ContactAndLeadsSection } from "@/components/sections/ContactAndLeadsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { RoiCalculatorSection } from "@/components/sections/RoiCalculatorSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-on-surface flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <SolutionsSection />
        <PillarsSection />
        <RoiCalculatorSection />
        <ProcessSection />
        <PortfolioSection />
        <ContactAndLeadsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
