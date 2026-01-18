import {
  HeroSection,
  VideoSection,
  AvailabilitySection,
  BenefitsSection,
  ActivitiesSection,
  CitiesSection,
  HowItWorksSection,
  FAQSection,
  CTASection
} from "@/components/home";
import { homeFaqs } from "@/components/home/FAQSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  // Keep these aligned with index.html (your current canonical home SEO)
  const title = "Personal Trainer at Your Address in Canada | Group Fit";
  const description =
    "Book a trainer at your address in Canada. See how it works, check trainer availability by activity/time, book a 1-hour session solo or with private group.";
  const canonical = "https://groupfitapp.com/";
  const ogImage = "https://groupfitapp.com/groupfit-logo.png";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="791" />
        <meta property="og:image:height" content="791" />
        <meta property="og:image:alt" content="Group Fit" />

        {/* Twitter */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="Group Fit" />

        {/* FAQ schema */}
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
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
