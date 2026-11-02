import { HeroSection } from "@/components/home/hero-section";
import { ImpactSection } from "@/components/home/impact-section";
import { CampaignSection } from "@/components/home/campaign-section";
import { ProgramsSection } from "@/components/home/programs-section";
import { StoriesSection } from "@/components/home/stories-section";
import { PartnersSection } from "@/components/home/partners-section";
import { FinalCTA } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <CampaignSection />
      <ProgramsSection />
      <StoriesSection />
      <PartnersSection />
      <FinalCTA />
    </>
  );
}
