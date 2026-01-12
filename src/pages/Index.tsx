import {
  HeroSection,
  AvailabilitySection,
  BenefitsSection,
  ActivitiesSection,
  CitiesSection,
  HowItWorksSection,
  FAQSection,
  CTASection,
} from "@/components/home";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Book In-Person Personal Trainers in Canada | Group Fit</title>
        <meta
          name="description"
          content="Find an in-person personal trainer near you for sessions at your address. Pick from strength, yoga, boxing, HIIT and more—book solo or as a private group in Group Fit."
        />
      </Helmet>
      <HeroSection />
      <AvailabilitySection />
      <BenefitsSection />
      <ActivitiesSection />
      <CitiesSection />
      <HowItWorksSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default Index;
