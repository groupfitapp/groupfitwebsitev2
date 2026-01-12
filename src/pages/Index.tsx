import { Layout } from "@/components/layout";
import {
  HeroSection,
  BenefitsSection,
  ActivitiesSection,
  CitiesSection,
  HowItWorksSection,
  FAQSection,
  CTASection,
} from "@/components/home";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <BenefitsSection />
      <ActivitiesSection />
      <CitiesSection />
      <HowItWorksSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
