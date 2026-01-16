import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { 
  Download,
  UserRoundCheck,
  SlidersHorizontal,
  BellRing,
  MapPinned,
  CalendarCheck,
  Rocket,
  PlayCircle
} from "lucide-react";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

import trainerHowItWorksHeroImg from "@/assets/heroes/trainer-how-it-works-hero.jpg";

const steps = [
  {
    icon: Download,
    title: "Download the Trainer app",
    description: "Get Group Fit Trainer from the App Store or Google Play.",
  },
  {
    icon: UserRoundCheck,
    title: "Complete onboarding",
    description: "Submit your credentials and complete identity verification.",
  },
  {
    icon: SlidersHorizontal,
    title: "Set up your profile",
    description: "Add your activities, rates, availability, and bio.",
  },
  {
    icon: MapPinned,
    title: "Define your service area",
    description: "Set the locations where you're willing to travel for sessions.",
  },
  {
    icon: CalendarCheck,
    title: "Set your availability",
    description: "Mark the days and times you're available for bookings.",
  },
  {
    icon: BellRing,
    title: "Receive bookings",
    description: "Get notified when customers book sessions with you.",
  },
];

export default function TrainerHowItWorks() {
  return (
    <>
      <Helmet>
        <title>How It Works for Trainers | Join Group Fit</title>
        <meta
          name="description"
          content="Learn how to join Group Fit as a trainer. Set your service area, availability, and specializations to start receiving in-person training bookings."
        />
        <meta name="keywords" content="trainer onboarding, join fitness platform, personal trainer signup, how to become trainer Group Fit" />
        <link rel="canonical" href="https://groupfitapp.com/trainer/how-it-works" />
        <meta property="og:title" content="How It Works for Trainers | Group Fit" />
        <meta property="og:description" content="Get started in minutes. Set your service area and availability, and start receiving bookings." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={trainerHowItWorksHeroImg}
            alt="Personal trainer coaching client"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]" />
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs className="mb-6" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              How it works for trainers
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Get started in minutes. Set your service area and availability, and start receiving bookings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">Step {index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Video tutorials
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Watch step-by-step guides on how to use the Group Fit Trainer app.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <YouTubeEmbed
              playlistId="PLsM4U67lWn_-E8CUN175jAfm459b6wGlh"
              title="Group Fit How-To Videos for Trainers"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-white/70 mb-8">
              Download the trainer app and start growing your business today.
            </p>
            <div className="flex justify-center">
              <AppStoreBadges
                iosLink={APP_LINKS.trainer.ios}
                androidLink={APP_LINKS.trainer.android}
                size="lg"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}