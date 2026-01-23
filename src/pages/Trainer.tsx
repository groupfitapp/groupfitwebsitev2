import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  CalendarCheck,
  MapPinned,
  Timer,
  CreditCard,
  Settings,
  Zap,
  BadgeCheck,
  CheckCircle,
  Gift
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";
import trainerBanner from "@/assets/trainer-banner.jpg";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PillLink } from "@/components/ui/PillLink";

const benefitCards = [
  {
    icon: CalendarCheck,
    title: "Clean bookings only",
    description: "Clients can book you only when their specialty, day, time, and address match your settings.",
  },
  {
    icon: MapPinned,
    title: "Service areas that filter",
    description: "Set different radiuses by day so you're only bookable where you actually work.",
  },
  {
    icon: Timer,
    title: "Built-in buffers",
    description: "Choose a time gap (up to 1 hour). Your next available time adjusts automatically—no double bookings.",
  },
  {
    icon: CreditCard,
    title: "Payments handled",
    description: "No chasing payments. Transparent payouts with clear earnings visibility in the app.",
  },
];

const matchingCriteria = [
  "The specialization they want",
  "The day and time you're available",
  "The address they enter is inside your radius for that day",
  "Your schedule is open with your time gap respected",
];

const youControl = [
  "Specializations (35+ options)",
  "Availability by day (multiple time windows)",
  "Service locations + radius by day",
  "Time gap between sessions (up to 1 hour)",
];

const groupFitHandles = [
  "Filtering out wrong-fit requests",
  "Preventing double bookings",
  "Client confirmation for rescheduling",
  "Payments and payouts",
];

export default function Trainer() {
  return (
    <>
      <Helmet>
        <title>Group Fit Trainer | Bookings, Scheduling & Payments</title>
        <meta
          name="description"
          content="Run in-person sessions with less admin. Set availability, service areas, booking buffers, rescheduling, and payments—so clients can book you without the back-and-forth."
        />
        <meta name="keywords" content="personal trainer booking, trainer scheduling app, fitness trainer platform, personal training business, trainer payments" />
        <link rel="canonical" href="https://groupfitapp.com/trainer" />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="Group Fit" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Group Fit Trainer | Bookings, Scheduling & Payments" />
        <meta property="og:description" content="Run in-person sessions with less admin. Set availability, service areas, booking buffers, rescheduling, and payments." />
        <meta property="og:url" content="https://groupfitapp.com/trainer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Group Fit Trainer | Bookings, Scheduling & Payments" />
        <meta name="twitter:description" content="Run in-person sessions with less admin. Set availability, service areas, booking buffers, and payments." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center bg-secondary overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={trainerBanner}
            alt="Group Fit personal trainer coaching a client during an in-person fitness session"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-secondary/70" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-20 relative z-10">
          <Breadcrumbs className="mb-6" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Run your training business{" "}
              <span className="text-primary">without the admin</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              Group Fit Trainer automates booking rules, service areas, buffers between sessions, rescheduling, and payments—so you coach, not coordinate.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/download">
                <Button size="lg" className="w-full sm:w-auto">
                  Download
                </Button>
              </Link>
              <Link to="/trainer/how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20">
                  See how it works
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary/20 to-transparent blur-3xl pointer-events-none" />
      </section>

      {/* Benefit Cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefitCards.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
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

      {/* How Matching Works */}
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
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                You set the rules. Group Fit applies them automatically.
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Group Fit shows you to customers only when everything matches:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {matchingCriteria.map((criteria, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-card border border-border rounded-xl p-4"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{criteria}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 border border-primary/20 rounded-xl p-6"
            >
              <p className="text-foreground">
                <strong>Example:</strong> If you set Mondays as 25 km from CN Tower (Toronto) and 9–2 availability, only customers inside that radius who choose a time within that window can book you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <YouTubeEmbed
              videoId="upwk6yBzJnI"
              title="Group Fit for Trainers"
              autoplay
            />
          </div>
        </div>
      </section>

      {/* What You Control vs What Group Fit Handles */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Settings className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Simple setup. Real control.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Settings className="w-4 h-4 text-primary" />
                </span>
                You control
              </h3>
              <ul className="space-y-3">
                {youControl.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary" />
                </span>
                Group Fit handles
              </h3>
              <ul className="space-y-3">
                {groupFitHandles.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto"
          >
            Set your rules once. Get clean bookings automatically. Customers can only book you when the booking is actually valid—no back-and-forth, no irrelevant inquiries.
          </motion.p>
        </div>
      </section>

      {/* Discovery Bonus */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
              <BadgeCheck className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Bonus: You can also be discovered
            </h3>
            <p className="text-muted-foreground">
              When customers search in your coverage area for your specialties, you can appear—without changing how you run your existing clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <PillLink to="/trainer/how-it-works" variant="default">
              How it works
            </PillLink>
            <PillLink to="/trainer/requirements" variant="default">
              Requirements & verification
            </PillLink>
            <PillLink to="/trainer/faq" variant="default">
              Trainer FAQ
            </PillLink>
            <PillLink 
              to="/referral" 
              icon={<Gift className="w-4 h-4" />}
            >
              Refer & Earn
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to simplify your week?
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
