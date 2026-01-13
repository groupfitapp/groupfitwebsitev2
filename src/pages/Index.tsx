import {
  HeroSection,
  VideoSection,
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
        <meta name="keywords" content="personal trainer Canada, in-person training, mobile fitness coaching, book personal trainer, home personal training, group fitness booking" />
        <link rel="canonical" href="https://groupfit.ca/" />
        <meta property="og:title" content="Book In-Person Personal Trainers in Canada | Group Fit" />
        <meta property="og:description" content="Find an in-person personal trainer near you. Choose from 35+ activities and book sessions at your location." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://groupfit.ca/" />
      </Helmet>
      <HeroSection />
      <VideoSection />
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
