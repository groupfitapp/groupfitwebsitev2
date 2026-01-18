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
import React from "react";

function toPlainText(node: unknown): string {
  // If it's already a string/number, return it
  if (typeof node === "string" || typeof node === "number") return String(node);

  // If it's a valid React element, try to extract its children recursively
  if (React.isValidElement(node)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const children = (node.props as any)?.children;
    return toPlainText(children);
  }

  // If it's an array of nodes, join them
  if (Array.isArray(node)) {
    return node.map(toPlainText).filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
  }

  // Fallback
  return "";
}

const Index = () => {
  // Keep these aligned with index.html (your canonical home SEO)
  const title = "Personal Trainer at Your Address in Canada | Group Fit";
  const description =
    "Book a trainer at your address in Canada. See how it works, check trainer availability by activity/time, book a 1-hour session solo or with private group.";
  const canonical = "https://groupfitapp.com/";
  const ogImage = "https://groupfitapp.com/groupfit-logo.png";

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqs
      .map((faq) => {
        const q = (faq as any)?.question ?? "";
        const a = toPlainText((faq as any)?.answer ?? "");
        if (!q || !a) return null;

        return {
          "@type": "Question",
          name: q,
          acceptedAnswer: {
            "@type": "Answer",
            text: a,
          },
        };
      })
      .filter(Boolean),
  };

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

        {/* Twitter */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* FAQ schema (valid plain text answers) */}
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
