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
import { homeFaqs } from "@/components/home/FAQSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homeFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Book a Personal Trainer at Your Address in Canada | Group Fit</title>
        <meta
          name="description"
          content="Book a personal trainer at your address in Canada. Check availability by activity and time, then book solo or with your private group in Group Fit."
        />
        <meta name="keywords" content="personal trainer Canada, in-person training, mobile fitness coaching, book personal trainer, home personal training, group fitness booking" />
        <link rel="canonical" href="https://groupfitapp.com/" />
        <meta property="og:title" content="Book a Personal Trainer at Your Address in Canada | Group Fit" />
        <meta property="og:description" content="Book a personal trainer at your address in Canada. Check availability by activity and time, then book solo or with your private group in Group Fit." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://groupfitapp.com/" />
        <meta name="twitter:title" content="Book a Personal Trainer at Your Address in Canada | Group Fit" />
        <meta name="twitter:description" content="Book a personal trainer at your address in Canada. Check availability by activity and time, then book solo or with your private group in Group Fit." />
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
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
