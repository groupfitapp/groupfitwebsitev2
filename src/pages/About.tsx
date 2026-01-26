import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
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
import { LazyYouTubeEmbed } from "@/components/ui/LazyYouTubeEmbed";

import aboutHeroImg from "@/assets/heroes/about-hero.jpg";

const stats = [
  { icon: Dumbbell, value: "35+", label: "Activities" },
  { icon: MapPin, value: "Canada-Wide", label: "Coverage" },
  { icon: Clock, value: "60 Min", label: "Sessions" },
  { icon: Shield, value: "Verified", label: "Coaches" },
];

const howItWorksSteps = [
  {
    icon: Zap,
    step: "1",
    title: "Choose & Search",
    description: "Select your activity, enter your session address, and pick your preferred time.",
  },
  {
    icon: Navigation,
    step: "2",
    title: "Find Available Coaches",
    description: "See only coaches who match your location, time, and activity—no guesswork.",
  },
  {
    icon: CalendarClock,
    step: "3",
    title: "Book & Train",
    description: "Complete secure payment in-app and meet your coach at your location.",
  },
];

const trainingLocations = [
  { icon: Home, label: "Your Home", description: "Train in your living room or backyard" },
  { icon: Building, label: "Condo Gym", description: "Use your building's amenities" },
  { icon: TreePine, label: "Local Park", description: "Outdoor sessions in fresh air" },
  { icon: Dumbbell, label: "Your Facility", description: "Any gym or studio you arrange" },
];

const customerBenefits = [
  "Book sessions at your own address",
  "Choose from 35+ activities",
  "Train solo or with a private group",
  "Split costs with friends & family",
  "Verified, credential-reviewed coaches",
  "Secure in-app payments",
];

const trainerBenefits = [
  "Set your own schedule & rates",
  "Define your service areas & radius",
  "No chasing clients for payments",
  "Share your profile to invite clients",
  "Transparent earnings visibility",
  "Grow your client base organically",
];

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
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To make fitness accessible, affordable, and convenient by connecting people with certified trainers 
                  for personalised in-person sessions anytime, anywhere.
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
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To enrich lives by providing easy access to diverse fitness activities, empowering individuals 
                  to achieve their health goals flexibly and enjoyably.
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
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why We Built Group Fit</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Too many people want to train consistently but get stuck on the same obstacles:
                  <strong className="text-foreground"> limited options, inconvenient locations, and unreliable scheduling</strong>.
                  Group Fit was created to remove those barriers by bringing qualified coaching to where people
                  actually train—on their schedule, at their location.
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Book a personal training session in three simple steps.
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
                  Learn More
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Train Anywhere</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                You choose where your session happens. Coaches come to you.
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
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">35+ Activities</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  From strength training to martial arts, find coaches across a wide variety of specializations.
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
                    View All Activities
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
              <LazyYouTubeEmbed
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
