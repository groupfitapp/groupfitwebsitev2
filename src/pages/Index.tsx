import {
  HeroSection,
  VideoSection,
  AvailabilitySection,
  BenefitsSection,
  ReviewsSection,
  ActivitiesSection,
  CitiesSection,
  HowItWorksSection,
  FAQSection,
  CTASection,
} from "@/components/home";
import { homeFaqs } from "@/components/home/FAQSection";
import { LazyYouTubeEmbed } from "@/components/ui/LazyYouTubeEmbed";
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
      <ReviewsSection />
      <ActivitiesSection />
      <CitiesSection />
      <HowItWorksSection />
      
      {/* Customer Testimonials */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See real training sessions
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Watch customers training with Group Fit coaches at their chosen locations.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <LazyYouTubeEmbed
              playlistId="PLsM4U67lWn_-fabL01WQkp1xNS4iuGNNZ"
              title="Group Fit Customer Training Sessions"
            />
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
    </>
  );
};

export default Index;
