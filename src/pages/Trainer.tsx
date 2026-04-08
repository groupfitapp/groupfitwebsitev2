import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CalendarCheck,
  MapPinned,
  CreditCard,
  BarChart3,
  Package,
  Video,
  Users,
  MessageSquare,
  Star,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";
import trainerBanner from "@/assets/trainer-banner.jpg";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PillLink } from "@/components/ui/PillLink";

const corePoints = [
  "Clients book based on real availability",
  "Schedule stays organized automatically",
  "Bookings, confirmations, payments handled",
  "Everything runs through one system",
];

const howItWorksSteps = [
  { number: "1", title: "Set Up Profile", description: "Create your trainer profile with your specialties, certifications, and bio." },
  { number: "2", title: "Define Schedule", description: "Set your available time slots, service area radius, and pricing." },
  { number: "3", title: "Receive Booking Requests", description: "Clients book you directly based on your real-time availability." },
  { number: "4", title: "Confirm & Train", description: "Accept the booking, show up at the agreed location, and coach." },
  { number: "5", title: "Get Paid", description: "Payments are handled automatically through the app — no chasing." },
];

const features = [
  {
    icon: DollarSign,
    title: "Custom Pricing",
    description: "Set your own rates per session or pack. Full control over your pricing structure.",
  },
  {
    icon: CalendarCheck,
    title: "Structured Scheduling",
    description: "Define your exact available hours and days. No gaps, no overlaps, no confusion.",
  },
  {
    icon: MapPinned,
    title: "Service Area Control",
    description: "Set a radius from any location. Only clients within your service area can book you.",
  },
  {
    icon: Package,
    title: "Session Packs",
    description: "Offer multi-session packages for better client retention and predictable income.",
  },
  {
    icon: Video,
    title: "Virtual Training",
    description: "Accept virtual bookings alongside in-person sessions — all in one place.",
  },
  {
    icon: Users,
    title: "Client Management / PAR-Q",
    description: "Collect client intake forms and PAR-Q health screening automatically.",
  },
  {
    icon: BarChart3,
    title: "Business Analytics",
    description: "Track your earnings, bookings, and client activity by city, activity, and month.",
  },
  {
    icon: MessageSquare,
    title: "Optional Messaging",
    description: "Communicate with clients when needed — without relying on it to get booked.",
  },
  {
    icon: CreditCard,
    title: "Automated Payments",
    description: "Group Fit handles payment collection and payouts. You train, we handle the money.",
  },
  {
    icon: Star,
    title: "Professional Booking Experience",
    description: "A polished, app-based booking flow that reflects the quality of your training.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function Trainer() {
  return (
    <>
      <Helmet>
        <title>Manage Your Training Business & Bookings | Group Fit</title>
        <meta
          name="description"
          content="Group Fit helps certified trainers manage schedules, bookings, payments, client PAR-Q forms, analytics, and virtual training. Streamline your business Canada-wide."
        />
        <meta
          name="keywords"
          content="personal trainer booking, trainer scheduling app, fitness trainer platform, personal training business, trainer payments, client management for trainers, trainer booking system, fitness business tool, manage personal training clients"
        />
        <link rel="canonical" href="https://groupfitapp.com/trainer" />
        <meta name="robots" content="index,follow" />
        <meta property="og:site_name" content="Group Fit" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Manage Your Training Business & Bookings | Group Fit" />
        <meta
          property="og:description"
          content="Group Fit helps certified trainers manage schedules, bookings, payments, client PAR-Q forms, analytics, and virtual training. Streamline your business Canada-wide."
        />
        <meta property="og:url" content="https://groupfitapp.com/trainer" />
        <meta property="og:image" content="https://groupfitapp.com/groupfit-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Run Your Training Business — Properly" />
        <meta
          name="twitter:description"
          content="Group Fit gives you a complete system to manage bookings, scheduling, clients, and payments — without the back-and-forth."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Group Fit for Trainers",
            "description": "A complete system for personal trainers to manage bookings, scheduling, payments, client PAR-Q forms, and analytics.",
            "url": "https://groupfitapp.com/trainer",
            "areaServed": "Canada",
            "serviceType": "Personal Training Business Management"
          })}
        </script>
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
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/85 via-secondary/65 to-secondary/50" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-20 relative z-10">
          <Breadcrumbs className="mb-6" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              For Trainers
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Run Your Training Business —{" "}
              <span className="text-primary">Properly</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              Group Fit gives you a complete system to manage bookings, scheduling, clients, and
              payments — without the back-and-forth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-red-dark text-white shadow-[0_0_20px_hsl(355_78%_56%/0.3)] hover:shadow-[0_0_30px_hsl(355_78%_56%/0.5)]"
                >
                  <Link to="/download">
                    Get Started as a Trainer
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  asChild
                >
                  <Link to="/trainer/how-it-works">
                    How it works
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary/20 to-transparent blur-3xl pointer-events-none" />
      </section>

      {/* Core Positioning */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  A Complete System for Your Training Business
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Stop juggling spreadsheets, DMs, and manual payments. Group Fit handles the
                  business side so you can focus on what you do best — training.
                </p>
                <ul className="space-y-4">
                  {corePoints.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">Expand Your Reach</h3>
                <p className="text-muted-foreground mb-6">
                  Be visible to customers across Canada actively looking to book training sessions.
                  Your profile shows up when clients search for your specialties in your service area.
                </p>
                <div className="space-y-3">
                  {["Appear in local trainer searches", "Accept new clients without extra effort", "Build reputation through reviews"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
              <p className="text-muted-foreground">Get set up and start receiving bookings in minutes.</p>
            </motion.div>

            <div className="relative">
              {/* Vertical line on desktop */}
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-border" />

              <div className="space-y-6">
                {howItWorksSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-[0_0_20px_hsl(355_78%_56%/0.3)] relative z-10">
                      {step.number}
                    </div>
                    <div className="bg-card border border-border rounded-xl p-5 flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Training — dedicated highlight */}
      <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/4 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                  New Feature
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-4">
                  Offer virtual training<br />
                  <span className="text-primary">alongside in-person.</span>
                </h2>
                <p className="text-white/70 text-lg leading-relaxed mb-6">
                  Offer virtual sessions through the same app, on the same schedule as your in-person sessions. If you're booked in-person, virtual clients can't book that same slot — your availability is always accurate.
                </p>
                <ul className="space-y-3">
                  {[
                    "Virtual and in-person share the same schedule — no double bookings",
                    "Clients worldwide can book your virtual sessions, not just your local area",
                    "Same instant booking flow — no extra setup required",
                    "Set your own rate for virtual sessions",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <Video className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">Virtual Sessions</p>
                      <p className="text-white/50 text-sm">Available in your trainer dashboard</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "Tuesday 10:00 AM", status: "In-Person booked", color: "text-white/40 line-through", note: "Blocked for virtual too" },
                      { label: "Tuesday 11:00 AM", status: "Available", color: "text-green-400" },
                      { label: "Tuesday 2:00 PM", status: "Virtual booked", color: "text-primary" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                        <div>
                          <span className={`text-sm font-medium ${item.color}`}>{item.label}</span>
                          {item.note && <p className="text-white/30 text-xs mt-0.5">{item.note}</p>}
                        </div>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          item.status === "Available"
                            ? "bg-green-400/15 text-green-400"
                            : item.status === "Virtual booked"
                            ? "bg-primary/15 text-primary"
                            : "bg-white/5 text-white/30"
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-xl">
                    <div className="flex items-center gap-2 mb-1">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-white font-semibold text-sm">Clients worldwide</span>
                    </div>
                    <p className="text-white/50 text-xs">Virtual clients can book from anywhere in the world — no service radius applies.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Pricing & Session Packs — dedicated highlight */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Session packs card */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1 relative"
              >
                <div className="bg-card border border-border rounded-2xl p-8 shadow-[var(--shadow-soft)]">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-5">Example — Session Packs</p>
                  <div className="space-y-3">
                    {[
                      { sessions: "1 session", label: "Drop-in", price: "Your rate", highlight: false },
                      { sessions: "5 sessions", label: "Starter Pack", price: "Your rate × 5", highlight: true },
                      { sessions: "10 sessions", label: "Commitment Pack", price: "Your rate × 10", highlight: false },
                    ].map((pack) => (
                      <div
                        key={pack.sessions}
                        className={`rounded-xl p-4 flex items-center justify-between border transition-all ${
                          pack.highlight
                            ? "bg-primary/10 border-primary/40 shadow-[0_0_20px_hsl(355_78%_56%/0.1)]"
                            : "bg-background border-border"
                        }`}
                      >
                        <div>
                          <p className={`font-bold text-sm ${pack.highlight ? "text-primary" : "text-foreground"}`}>{pack.label}</p>
                          <p className="text-muted-foreground text-xs">{pack.sessions}</p>
                        </div>
                        <span className="text-foreground font-semibold text-sm">{pack.price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-xs mt-4">Clients purchase packs directly in the app. You set the pricing.</p>
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="order-1 lg:order-2"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                  New Feature
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-foreground leading-tight tracking-tight mb-4">
                  Set your own prices.<br />
                  <span className="text-primary">Sell session packs.</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  You decide what you charge — per session or in multi-session packs. Clients buy packs directly in the app. You get paid automatically as sessions are used.
                </p>
                <ul className="space-y-3">
                  {[
                    "Set your own per-session rate",
                    "Offer 5-pack and 10-pack bundles",
                    "Clients commit upfront — you get consistency",
                    "Payouts handled automatically by Group Fit",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer Features Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trainer Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run your training business professionally.
            </p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(355_78%_56%/0.2)] transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trainer Testimonials */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hear from trainers using Group Fit</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Real trainers share how Group Fit helps them manage their schedule and grow their business.
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto">
            <YouTubeEmbed
              playlistId="PLsM4U67lWn__uWHGXO9RAqlqCN8_q2hbz"
              title="Group Fit Trainer Testimonials"
              autoplay
            />
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <PillLink to="/trainer/how-it-works" variant="default">How it works</PillLink>
            <PillLink to="/trainer/requirements" variant="default">Requirements</PillLink>
            <PillLink to="/trainer/faq" variant="default">FAQ</PillLink>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Operate with structure. Eliminate chaos.
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Focus on training — not admin.
            </p>
            <div className="flex justify-center mb-6">
              <AppStoreBadges iosLink={APP_LINKS.trainer.ios} androidLink={APP_LINKS.trainer.android} />
            </div>
            <p className="text-white/50 text-sm">Start using Group Fit today.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
