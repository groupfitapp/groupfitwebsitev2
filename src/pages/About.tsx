import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, MapPin, Users, Shield, Dumbbell } from "lucide-react";

import aboutHeroImg from "@/assets/heroes/about-hero.jpg";

export default function About() {
  const title = "About Group Fit | On-Location Personal Training Across Canada";
  const description =
    "Group Fit connects you with verified coaches across Canada. Book strength, yoga, HIIT, boxing & more at your address—solo, private group, or organization.";
  const canonical = "https://groupfitapp.com/about";
  const ogImage = "https://groupfitapp.com/groupfit-logo.png";

  const orgStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Group Fit",
    url: "https://groupfitapp.com/",
    logo: "https://groupfitapp.com/groupfit-logo.png",
    image: "https://groupfitapp.com/groupfit-logo.png",
    description: "Canadian platform for booking on-location personal training and fitness coaching.",
    areaServed: { "@type": "Country", name: "Canada" },
    sameAs: [
      "https://facebook.com/groupfit.fb",
      "https://www.instagram.com/groupfit_app",
      "https://x.com/groupfitapp",
      "https://www.threads.net/@groupfit_app",
      "https://www.youtube.com/@GroupFitApp",
      "https://www.tiktok.com/@groupfit.app",
      "https://www.linkedin.com/company/101067588"
    ]
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
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="791" />
        <meta property="og:image:height" content="791" />
        <meta property="og:image:alt" content="Group Fit" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@groupfitapp" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="Group Fit" />

        {/* Organization schema */}
        <script type="application/ld+json">{JSON.stringify(orgStructuredData)}</script>
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={aboutHeroImg}
              alt="Group fitness training session"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-secondary/80" />
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]" />

          <div className="container mx-auto px-4 relative z-10 py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                About <span className="text-primary">Group Fit</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Group Fit is a Canadian platform built to make booking on-location training straightforward.
                You choose what you want to train, enter your session address, pick a time, and book a coach
                who's available for that exact session—without the usual back-and-forth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why We Built Group Fit */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Dumbbell className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why We Built Group Fit</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Too many people want to train consistently but get stuck on the same obstacles:
                <strong className="text-foreground"> limited options, inconvenient locations, and unreliable scheduling</strong>.
                Group Fit was created to remove those barriers by bringing qualified coaching to where people
                actually train—on their schedule, at their location.
              </p>
            </div>
          </div>
        </section>

        {/* More Choice, Simpler Booking */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">More Choice, Simpler Booking</h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Group Fit offers a wide variety of trainers, instructors, and coaches across many activities and locations in Canada.
                You’ll find coaches across <strong className="text-foreground">35+ activities</strong>, including:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {["Strength & Conditioning", "Yoga", "HIIT", "Boxing", "Martial Arts", "Sport Training"].map((a) => (
                  <div key={a} className="bg-background border border-border rounded-lg p-4 text-center">
                    <span className="text-foreground font-medium">{a}</span>
                  </div>
                ))}
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Book for yourself, book a private group and split the cost inside Group Fit, or schedule sessions for your organization.
              </p>
            </div>
          </div>
        </section>

        {/* Trust Matters */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Trust Matters</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Coaches on Group Fit complete <strong className="text-foreground">identity verification and credential review</strong> before
                they can accept bookings. Our goal is a safer, more dependable experience—built on clear standards
                and consistent expectations.
              </p>
            </div>
          </div>
        </section>

        {/* Ready to Train CTA */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Train?</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Check availability at your address on the homepage or download Group Fit to book your first session.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-red-dark text-white">
                  <Link to="/download" aria-label="Download the Group Fit app">
                    <Download className="w-5 h-5 mr-2" />
                    Download App
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-transparent text-white hover:bg-white/10"
                >
                  <Link to="/how-it-works" aria-label="How Group Fit works">
                    How It Works
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
