import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { 
  Download,
  UserRoundCheck,
  SlidersHorizontal,
  BellRing,
  MapPinned,
  CalendarCheck,
  Rocket
} from "lucide-react";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";

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
        <title>How It Works for Trainers | Group Fit</title>
        <meta
          name="description"
          content="Learn how to join Group Fit as a trainer. Set your service area, availability, and rates to start receiving in-person training bookings."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        <div className="container mx-auto px-4">
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