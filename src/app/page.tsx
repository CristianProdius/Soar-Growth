import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { ProcessSection } from "@/components/process-section";
import { FoundersSection } from "@/components/founders-section";
import { GuaranteesSection } from "@/components/guarantees-section";
import { CallToAction } from "@/components/call-to-action";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <HeroSection />
      <ProblemSection />
      <Features />
      <Testimonials />
      <ProcessSection />
      <FoundersSection />
      <GuaranteesSection />
      <CallToAction />
      <SiteFooter />
    </>
  );
}
