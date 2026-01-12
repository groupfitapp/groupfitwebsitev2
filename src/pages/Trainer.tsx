import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  CircleDollarSign, 
  CalendarRange, 
  Radar, 
  BadgeCheck, 
  ArrowRight
} from "lucide-react";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";
import trainerBanner from "@/assets/trainer-banner.jpg";

const benefits = [
  {
    icon: TrendingUp,
    title: "Get more clients",
    description: "Reach customers looking for in-person training at their location.",
  },
  {
    icon: CircleDollarSign,
    title: "Set your rates",
    description: "You control your pricing and availability.",
  },
  {
    icon: CalendarRange,
    title: "Flexible schedule",
    description: "Accept bookings that fit your schedule.",
  },
  {
    icon: Radar,
    title: "Your service area",
    description: "Define where you're willing to travel for sessions.",
  },
];

const steps = [
  "Download the Trainer app",
  "Complete your profile and credentials",
  "Set your activities, rates, and service area",
  "Start receiving booking requests",
];

export default function Trainer() {
  return (
    <>
      <Helmet>
        <title>Get More Clients | Group Fit Trainer</title>
        <meta
          name="description"
          content="Set your service area and availability and receive bookings for in-person sessions. Trainer onboarding includes credential review and identity verification."
        />
      </Helmet>

      {/* Hero Section with Banner */}
      <section className="relative min-h-[70vh] flex items-center bg-secondary overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={trainerBanner}
            alt="Personal trainer coaching a client"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/85 to-secondary/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-secondary/40" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Grow your personal training{" "}
              <span className="text-primary">business</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              Set your service area and availability and receive bookings for in-person sessions. Trainer onboarding includes credential review and identity verification.
            </p>
            <div className="mt-8">
              <AppStoreBadges
                iosLink={APP_LINKS.trainer.ios}
                androidLink={APP_LINKS.trainer.android}
              />
            </div>
          </motion.div>
        </div>

        {/* Decorative gradient blob */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary/20 to-transparent blur-3xl pointer-events-none" />
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          >
            Why train with Group Fit?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
            >
              Getting started
            </motion.h2>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-card border border-border rounded-xl p-5"
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-foreground font-medium">{step}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badge */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <BadgeCheck className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Credential review & identity verification
            </h2>
            <p className="text-muted-foreground">
              Trainer onboarding includes credential review and identity verification to support a safer experience for both trainers and customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <Link
              to="/trainer/how-it-works"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
            >
              How it works for trainers
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/trainer/requirements"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
            >
              Requirements
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/trainer/faq"
              className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
            >
              Trainer FAQ
              <ArrowRight className="w-4 h-4" />
            </Link>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to start training?
            </h2>
            <div className="flex justify-center">
              <AppStoreBadges
                iosLink={APP_LINKS.trainer.ios}
                androidLink={APP_LINKS.trainer.android}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
