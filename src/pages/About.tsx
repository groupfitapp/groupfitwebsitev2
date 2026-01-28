import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  ArrowRight, 
  MapPin, 
  Users, 
  Shield, 
  Dumbbell,
  Target,
  Eye,
  Zap,
  Navigation,
  CalendarClock,
  Home,
  TreePine,
  Building,
  Heart,
  Wallet,
  Clock,
  CheckCircle,
  Star,
  Play
} from "lucide-react";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";

import aboutHeroImg from "@/assets/heroes/about-hero.jpg";

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { icon: Dumbbell, value: "35+", label: t("about.stats.activities") },
    { icon: MapPin, value: t("about.stats.canadaWide"), label: t("about.stats.coverage") },
    { icon: Clock, value: t("about.stats.sixtyMin"), label: t("about.stats.sessions") },
    { icon: Shield, value: t("about.stats.verified"), label: t("about.stats.coaches") },
  ];

  const howItWorksSteps = [
    {
      icon: Zap,
      step: "1",
      title: t("about.howItWorks.step1Title"),
      description: t("about.howItWorks.step1Desc"),
    },
    {
      icon: Navigation,
      step: "2",
      title: t("about.howItWorks.step2Title"),
      description: t("about.howItWorks.step2Desc"),
    },
    {
      icon: CalendarClock,
      step: "3",
      title: t("about.howItWorks.step3Title"),
      description: t("about.howItWorks.step3Desc"),
    },
  ];

  const trainingLocations = [
    { icon: Home, label: t("about.trainAnywhere.home"), description: t("about.trainAnywhere.homeDesc") },
    { icon: Building, label: t("about.trainAnywhere.condoGym"), description: t("about.trainAnywhere.condoGymDesc") },
    { icon: TreePine, label: t("about.trainAnywhere.park"), description: t("about.trainAnywhere.parkDesc") },
    { icon: Dumbbell, label: t("about.trainAnywhere.facility"), description: t("about.trainAnywhere.facilityDesc") },
  ];

  const customerBenefits = [
    t("about.forCustomers.benefit1"),
    t("about.forCustomers.benefit2"),
    t("about.forCustomers.benefit3"),
    t("about.forCustomers.benefit4"),
    t("about.forCustomers.benefit5"),
    t("about.forCustomers.benefit6"),
  ];

  const trainerBenefits = [
    t("about.forTrainers.benefit1"),
    t("about.forTrainers.benefit2"),
    t("about.forTrainers.benefit3"),
    t("about.forTrainers.benefit4"),
    t("about.forTrainers.benefit5"),
    t("about.forTrainers.benefit6"),
  ];

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
          <div className="absolute inset-0">
            <img
              src={aboutHeroImg}
              alt="Group fitness training session"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-secondary/80" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]" />

          <div className="container mx-auto px-4 relative z-10 py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {t("about.hero.title")} <span className="text-primary">{t("about.hero.titleHighlight")}</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                {t("about.hero.subtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t("about.mission.title")}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("about.mission.content")}
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t("about.vision.title")}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("about.vision.content")}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why We Built Group Fit */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("about.whyBuilt.title")}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  {t("about.whyBuilt.content")}
                  <strong className="text-foreground"> {t("about.whyBuilt.obstacles")}</strong>.
                  {" "}{t("about.whyBuilt.conclusion")}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Summary */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("about.howItWorks.title")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("about.howItWorks.subtitle")}
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
              {howItWorksSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] transition-all duration-300"
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg">
                    {step.step}
                  </div>
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(355_78%_56%/0.3)] transition-all duration-300">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <Button asChild variant="outline" size="lg">
                <Link to="/how-it-works">
                  {t("about.howItWorks.learnMore")}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Where Sessions Happen */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("about.trainAnywhere.title")}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("about.trainAnywhere.subtitle")}
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
              {trainingLocations.map((location, index) => (
                <motion.div
                  key={location.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] transition-all duration-300"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(355_78%_56%/0.3)] transition-all duration-300">
                    <location.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{location.label}</h3>
                  <p className="text-sm text-muted-foreground">{location.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                  <Dumbbell className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t("about.activitiesSection.title")}</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {t("about.activitiesSection.subtitle")}
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Strength & Conditioning", "Yoga", "HIIT", "Boxing", "Kickboxing", "Martial Arts", "Calisthenics", "Sport Training", "And More..."].map((activity, index) => (
                  <motion.div
                    key={activity}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/50 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="text-foreground font-medium">{activity}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-8"
              >
                <Button asChild variant="outline" size="lg">
                  <Link to="/activities">
                    {t("about.activitiesSection.viewAll")}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* For Customers & Trainers */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Built for Everyone</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Whether you're looking to book a session or grow your coaching business, Group Fit works for you.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Customers */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">For Customers</h3>
                </div>
                <ul className="space-y-3">
                  {customerBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Trainers */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Wallet className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">For Trainers</h3>
                </div>
                <ul className="space-y-3">
                  {trainerBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust & Safety */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trust & Safety</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Coaches on Group Fit complete <strong className="text-foreground">identity verification and credential review</strong> before
                  they can accept bookings. Our goal is a safer, more dependable experience—built on clear standards
                  and consistent expectations.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Shield, title: "ID Verification", description: "All trainers complete identity verification through Plaid" },
                  { icon: Star, title: "Credential Review", description: "Certifications and experience are manually reviewed" },
                  { icon: Heart, title: "Safety First", description: "Report concerns anytime via support@groupfitapp.com" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof - Testimonials */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <Play className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">See It in Action</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Watch real customers training with Group Fit coaches at their chosen locations.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <YouTubeEmbed
                playlistId="PLsM4U67lWn_-fabL01WQkp1xNS4iuGNNZ"
                title="Group Fit Customer Training Sessions"
                autoplay
              />
            </div>
          </div>
        </section>

        {/* Ready to Train CTA */}
        <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px] pointer-events-none animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center">
                    <Zap className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Training?</h2>
                <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                  Download Group Fit and book your first session at your address today.
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
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
