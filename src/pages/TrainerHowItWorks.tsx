import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Dumbbell,
  CalendarDays,
  MapPinned,
  Timer,
  RefreshCw,
  Rocket,
  PlayCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PillLink } from "@/components/ui/PillLink";

import trainerHowItWorksHeroImg from "@/assets/heroes/trainer-how-it-works-hero.jpg";

const steps = [
  {
    icon: Dumbbell,
    title: "Choose what you coach",
    description: "Select your specializations (35+ options—HIIT, Boxing, Jiu Jitsu, and more).",
  },
  {
    icon: CalendarDays,
    title: "Set your availability (time slots)",
    description: "Create time windows per day (example: Monday 8–3 and 5–8; Tuesday–Friday 9–3). Customers can only book inside the windows you set.",
  },
  {
    icon: MapPinned,
    title: "Set your service radius by day",
    description: "Create one or more service locations and assign a radius in kilometers. Example: Monday 25 km from CN Tower, Toronto; Tue–Fri 30 km from Square One, Mississauga.",
  },
  {
    icon: Timer,
    title: "Set your time gap between sessions",
    description: "Choose how much time you want between sessions (up to 1 hour) to rest or travel. If you're booked at 9:00 AM and your gap is 30 minutes, your next available slot won't show until 10:30 AM.",
  },
  {
    icon: RefreshCw,
    title: "Rescheduling is built in",
    description: "When something unexpected happens, request a reschedule or cancellation in the app. Group Fit manages the client confirmation flow.",
  },
];

export default function TrainerHowItWorks() {
  return (
    <>
      <Helmet>
        <title>How Group Fit Trainer Works | Setup Guide</title>
        <meta
          name="description"
          content="Learn how to set up Group Fit Trainer: choose specializations, set availability time slots, define service areas and radius, configure booking buffers, and manage rescheduling."
        />
        <meta name="keywords" content="trainer onboarding, fitness trainer setup, personal trainer app guide, how to use Group Fit" />
        <link rel="canonical" href="https://groupfitapp.com/trainer/how-it-works" />
        <meta name="robots" content="index,follow" />
        <meta property="og:site_name" content="Group Fit" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="How Group Fit Trainer Works | Setup Guide" />
        <meta property="og:description" content="Step-by-step guide to setting up your trainer profile, availability, and service areas." />
        <meta property="og:url" content="https://groupfitapp.com/trainer/how-it-works" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How Group Fit Trainer Works" />
        <meta name="twitter:description" content="Step-by-step guide to setting up your trainer profile." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0">
          <img
            src={trainerHowItWorksHeroImg}
            alt="Personal trainer coaching client"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>
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
              Set your rules once. Get clean bookings automatically.
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Customers can only book you when the booking is actually valid—no back-and-forth, no irrelevant inquiries.
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
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center relative">
                  <step.icon className="w-7 h-7 text-primary" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tip Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mt-12 bg-primary/5 border border-primary/20 rounded-xl p-6"
          >
            <p className="text-foreground">
              <strong>Practical tip:</strong> Larger radiuses usually need larger time gaps. Start with a sensible estimate and adjust anytime.
            </p>
          </motion.div>
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

      {/* Links Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <PillLink to="/download" variant="default">
              Download
            </PillLink>
            <PillLink to="/trainer/requirements" variant="default">
              See requirements
            </PillLink>
            <PillLink to="/trainer/faq" variant="default">
              Read FAQs
            </PillLink>
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
            <div className="flex justify-center mb-6">
              <Link to="/download">
                <Button size="lg">Download Group Fit Trainer</Button>
              </Link>
            </div>
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
