import {
  HeroSection,
  VideoSection,
  ReviewsSection,
  ActivitiesSection,
  CitiesSection,
  HowItWorksSection,
  FAQSection,
  CTASection,
  BookIn30Section,
  BenefitsSection,
} from "@/components/home";
import { homeFaqs } from "@/components/home/FAQSection";
import { LazyYouTubeEmbed } from "@/components/ui/LazyYouTubeEmbed";
import { LazySection } from "@/components/ui/LazySection";
import { Helmet } from "react-helmet-async";
import React from "react";

function toPlainText(node: unknown): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (React.isValidElement(node)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const children = (node.props as any)?.children;
    return toPlainText(children);
  }
  if (Array.isArray(node)) {
    return node.map(toPlainText).filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
  }
  return "";
}

const Index = () => {
  const title = "Book Personal Trainers Across Canada | Group Fit";
  const description =
    "Book certified personal trainers across 35+ activities in under 30 seconds. Solo or group sessions, transparent pricing, in-person or virtual, Canada-wide.";
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
          acceptedAnswer: { "@type": "Answer", text: a },
        };
      })
      .filter(Boolean),
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Group Fit",
    "url": "https://groupfitapp.com",
    "logo": "https://groupfitapp.com/groupfit-logo.png",
    "description": description,
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "admin@groupfitapp.com",
      "contactType": "customer support"
    },
    "sameAs": [
      "https://facebook.com/groupfit.fb",
      "https://www.instagram.com/groupfit_app",
      "https://www.youtube.com/@GroupFitApp"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Group Fit",
    "url": "https://groupfitapp.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://groupfitapp.com/activities?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
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
        <meta property="og:site_name" content="Group Fit" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      </Helmet>

      <HeroSection />

      {/* Book in 30 Seconds */}
      <BookIn30Section />

      {/* Training options: in-person, virtual, packs, group, pricing */}
      <BenefitsSection />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Activities Grid */}
      <ActivitiesSection />

      {/* Cities Grid */}
      <LazySection minHeight="400px">
        <CitiesSection />
      </LazySection>

      {/* Reviews / Social Proof */}
      <LazySection minHeight="600px">
        <ReviewsSection />
      </LazySection>

      {/* Customer Testimonials Video */}
      <LazySection minHeight="400px">
        <section className="py-16 md:py-24 bg-secondary" style={{ contain: "layout style" }}>
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
                autoplay
              />
            </div>
          </div>
        </section>
      </LazySection>

      <LazySection minHeight="400px">
        <VideoSection />
      </LazySection>

      <LazySection minHeight="500px">
        <FAQSection />
      </LazySection>

      <CTASection />
    </>
  );
};

export default Index;
