import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { 
  Dumbbell,
  CalendarDays,
  MapPinned,
  Timer,
  RefreshCw,
  Rocket,
  PlayCircle,
  Share2,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";
import { LazyYouTubeEmbed } from "@/components/ui/LazyYouTubeEmbed";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PillLink } from "@/components/ui/PillLink";
import shareProfileVideo from "@/assets/videos/share-profile-demo.mp4";

import trainerHowItWorksHeroImg from "@/assets/heroes/trainer-how-it-works-hero.jpg";

const steps = [
  {
    icon: Dumbbell,
    title: "Choose what you coach",
    description: "35+ specializations—HIIT, Boxing, Jiu Jitsu, and more.",
  },
  {
    icon: CalendarDays,
    title: "Set your time slots",
    description: "Create time windows per day (example: Monday 8:00 AM–3:00 PM and 5:00 PM–8:00 PM).",
    note: "Outside your time slots? Clients can't book you.",
  },
  {
    icon: MapPinned,
    title: "Set service locations + radius",
    description: "Assign different locations and radiuses to different days.",
    note: "Outside your radius? Clients can't book you.",
    example: "Monday: 25 km radius from CN Tower (Toronto). Tuesday–Friday: 30 km radius from Square One (Mississauga).",
  },
  {
    icon: Timer,
    title: "Set buffer time",
    description: "Choose how much time between sessions (up to 1 hour).",
    example: "Booked at 9:00 AM with a 30-minute buffer → next available shows at 10:30 AM.",
  },
  {
    icon: RefreshCw,
    title: "Rescheduling is supported",
    description: "Request a change in the app. Group Fit manages the client confirmation flow.",
  },
];

export default function TrainerHowItWorks() {
  return (
    <>
      <Helmet>
        <title>How It Works for Trainers | Group Fit Trainer</title>
        <meta
          name="description"
          content="Set your availability and service locations. Group Fit does the rest. Move existing clients into a clean booking flow."
        />
        <meta name="keywords" content="trainer onboarding, fitness trainer setup, personal trainer app guide, how to use Group Fit" />
        <link rel="canonical" href="https://groupfitapp.com/trainer/how-it-works" />
        <meta name="robots" content="index,follow" />
        <meta property="og:site_name" content="Group Fit" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="How It Works for Trainers | Group Fit Trainer" />
        <meta property="og:description" content="Set your availability and service locations. Group Fit does the rest." />
        <meta property="og:url" content="https://groupfitapp.com/trainer/how-it-works" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How It Works for Trainers" />
        <meta name="twitter:description" content="Set your availability and service locations. Group Fit does the rest." />
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
              Set your availability and service locations. Group Fit does the rest.
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Move existing clients into a clean booking flow. Only valid bookings get through.
            </p>
            <p className="mt-4 text-white/60">
              You appear only for matching requests—right specialty, right time, right location.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Feature Pills */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {["Built for in-person coaches", "Verified onboarding", "Rules-based scheduling", "Payments handled"].map((item) => (
              <span key={item} className="px-4 py-2 bg-muted rounded-full text-sm text-foreground">
                {item}
              </span>
            ))}
          </div>
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
                  {step.note && (
                    <p className="text-primary text-sm mt-2 font-medium">
                      {step.note}
                    </p>
                  )}
                  {step.example && (
                    <p className="text-muted-foreground text-sm mt-2 italic">
                      Example: {step.example}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Callout */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <Share2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Share your profile link
              </h2>
              <p className="text-muted-foreground">
                Account → My Profile → 3 dots → View Public Profile → Share
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl bg-secondary"
            >
              <video
                src={shareProfileVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                title="How to share your profile link"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Bonus: rules-based discovery
            </h3>
            <p className="text-muted-foreground text-sm">
              Group Fit shows your profile only to customers who match your specialization, time slots, and service location radius.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Tutorials Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
              <PlayCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Video tutorials
            </h2>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              Watch step-by-step guides on how to use the Group Fit Trainer app.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <LazyYouTubeEmbed
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
              Requirements
            </PillLink>
            <PillLink to="/trainer/faq" variant="default">
              FAQ
            </PillLink>
          </div>
        </div>
      </section>

      {/* How to Invite Clients Link */}
      <section className="py-6 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <PillLink to="/trainer#share" variant="default">
              Already have the app? How to invite clients
            </PillLink>
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
