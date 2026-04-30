import { Hero } from "@/components/home/Hero";
import { Highlights } from "@/components/home/Highlights";
import { BriefHistory } from "@/components/home/BriefHistory";
import { ProgramsTeaser } from "@/components/home/ProgramsTeaser";
import { Marquee } from "@/components/home/Marquee";
import { CTASection } from "@/components/home/CTASection";
import { BlogCards } from "@/components/home/BlogCards";

const Index = () => {
  return (
    <>
      <Hero />
      <Highlights />
      <Marquee />
      <BriefHistory />
      <ProgramsTeaser />
      <CTASection />
      <BlogCards />
    </>
  );
};

export default Index;
