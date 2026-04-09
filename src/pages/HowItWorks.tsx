import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Zap,
  Navigation,
  CalendarClock,
  UserCheck,
  Wallet,
  ArrowRight,
  Timer,
  CircleCheckBig,
  UsersRound,
  PlayCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";

import howItWorksHeroImg from "@/assets/heroes/how-it-works-hero.jpg";

const steps = [
  {
    number: 1,
    icon: Zap,
    title: "Choose your activity",
    description: "Start with the training style you want. Explore options on our activities page."
  },
  {
    number: 2,
    icon: Navigation,
    title: "Enter your session address",
    description: "Use the exact address where you want to train. Coach availability is based on this address."
  },
  {
    number: 3,
    icon: CalendarClock,
    title: "Pick your date & time",
    description: "Choose when you want to train. Availability updates based on schedule and location coverage."
  },
  {
    number: 4,
    icon: UserCheck,
    title: "Select an available coach",
    description: "Pick from coaches shown as available for that session (address + time + activity)."
  },
  {
    number: 5,
    icon: Wallet,
    title: "Pay in-app and train",
    description: "Complete the booking and meet your coach at the selected location."
  }
];

const groupFeatures = [
  "Group bookings are private (friends/family)",
  "Everyone meets at the same location and time",
  "Split the cost inside Group Fit",
  "Up to 10 members per group"
];

export default function HowItWorks() {
  const title = "How It Works | Personal Trainer at Your Address | Group Fit";
  const description =
    "See how Group Fit works: choose an activity, enter your session address, pick a time, then book an in-person coach available for that session.";
  const canonical = "https://groupfitapp.com/how-it-works";
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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@groupfitapp" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="Group Fit" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={howItWorksHeroImg}
            alt="Gym training environment"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
          >
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 28, filter: "blur(6px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] } } }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight"
            >
              How booking works in Group Fit
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } } }}
              className="mt-6 text-lg text-white/60"
            >
              Booking is built around your selected activity, session address, and time — so you only see coaches who can accept that session.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          >
            Step-by-step
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-primary">Step {step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Group Bookings */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <UsersRound className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Private group bookings</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {groupFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheckBig className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Session Info */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 bg-muted rounded-full px-6 py-3"
            >
              <Timer className="w-5 h-5 text-primary" />
              <span className="text-foreground font-medium">Each session is 60 minutes</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <PlayCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Video tutorials</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Watch step-by-step guides on how to use Group Fit.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <YouTubeEmbed
              playlistId="PLsM4U67lWn_8HNH46mFe6-IPn-VhgX3fQ"
              title="Group Fit How-To Videos for Customers"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
        {/* Decorative elements with enhanced glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Next steps</h2>
            <div className="flex justify-center mb-6">
              <AppStoreBadges iosLink={APP_LINKS.customer.ios} androidLink={APP_LINKS.customer.android} />
            </div>
            <Button asChild size="lg" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
              <Link to="/activities" aria-label="View Group Fit activities">
                View Activities
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
